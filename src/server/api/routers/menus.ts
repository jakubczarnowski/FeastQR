import { type PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { menuValidationSchema } from "~/components/MenuForm/MenuForm.schema";
import { addCategoryValidationSchema } from "~/pageComponents/MenuCreator/molecules/CategoryForm/CategoryForm.schema";
import { addDishValidationSchema } from "~/pageComponents/MenuCreator/molecules/DishForm/DishForm.schema";
import { dishVariantValidationSchema } from "~/pageComponents/MenuCreator/molecules/VariantForm/VariantForm.schema";
import { socialMediaValidationSchema } from "~/pageComponents/RestaurantDashboard/molecules/SocialMediaHandles/SocialMediaHandles.schema";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  generateBackgroundImagePath,
  generateDishImagePath,
  generateMenuImagePath,
} from "~/server/supabase/storagePaths";
import {
  storageBucketsNames,
  supabase,
} from "~/server/supabase/supabaseClient";
import { checkIfSubscribed } from "~/shared/hooks/useUserSubscription";
import { asOptionalField } from "~/utils/utils";

const prepareTextForSlug = (text: string) => {
  return text.replace(" ", "-").toLowerCase();
};

const generateMenuSlug = ({ name, city }: { name: string; city: string }) => {
  const randomNumber = Math.random().toString().slice(2, 5);
  const slug = `${prepareTextForSlug(name)}-${prepareTextForSlug(
    city,
  )}-${randomNumber}`;
  const alphaNumericSlug = slug.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

  return alphaNumericSlug;
};

export const POLISH_LANGUAGE_NAME = "Polish";

const getFullMenu = async (slug: string, db: PrismaClient) =>
  db.menus.findFirst({
    where: {
      slug: slug,
    },
    select: {
      name: true,
      slug: true,
      address: true,
      city: true,
      contactNumber: true,
      backgroundImageUrl: true,
      logoImageUrl: true,
      id: true,
      isPublished: true,
      facebookUrl: true,
      googleReviewUrl: true,
      instagramUrl: true,
      dishes: {
        select: {
          id: true,
          menuId: true,
          categoryId: true,
          dishesTranslation: {
            select: {
              name: true,
              description: true,
              languageId: true,
            },
          },
          price: true,
          carbohydrates: true,
          fats: true,
          protein: true,
          calories: true,
          dishesTag: {
            select: {
              tagName: true,
            },
          },
          categories: {
            select: {
              categoriesTranslation: {
                select: {
                  name: true,
                  languageId: true,
                },
              },
              id: true,
            },
          },
          dishVariants: {
            select: {
              id: true,
              price: true,
              variantTranslations: {
                select: {
                  name: true,
                  description: true,
                  languageId: true,
                },
              },
            },
          },
          pictureUrl: true,
        },
      },
      categories: {
        select: {
          id: true,
          categoriesTranslation: {
            select: {
              name: true,
              languageId: true,
            },
          },
        },
      },
      menuLanguages: {
        select: {
          languageId: true,
          menuId: true,
          isDefault: true,
          languages: {
            select: {
              name: true,
              isoCode: true,
              flagUrl: true,
              id: true,
            },
          },
        },
      },
    },
  });

export const menusRouter = createTRPCRouter({
  getMenus: privateProcedure.query(({ ctx }) => {
    return ctx.db.menus.findMany({
      where: {
        userId: ctx.user.id,
      },
    });
  }),

  getDishesByCategory: privateProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const menu = await ctx.db.menus.findFirst({
        where: {
          slug: input.slug,
        },
        include: {
          dishes: {
            select: {
              id: true,
              dishesTranslation: true,
              price: true,
              categories: true,
              pictureUrl: true,
            },
          },
        },
      });

      const categorizedDishes = await ctx.db.categories.findMany({
        where: {
          menuId: menu?.id,
        },
        include: {
          dishes: {
            select: {
              id: true,
              dishesTranslation: true,
              price: true,
              categories: true,
              pictureUrl: true,
            },
          },
        },
      });

      return categorizedDishes;
    }),

  upsertMenu: privateProcedure
    .input(menuValidationSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.menus.upsert({
        where: {
          id: input.id || "00000000-0000-0000-0000-000000000000",
          userId: ctx.user.id,
        },
        create: {
          name: input.name,
          address: input.address,
          city: input.city,
          slug: generateMenuSlug({
            name: input.name,
            city: input.city,
          }),
          userId: ctx.user.id,
          contactNumber: input.contactPhoneNumber,
          isPublished: false,
          menuLanguages: {
            create: {
              isDefault: true,
              languages: {
                connect: {
                  name: POLISH_LANGUAGE_NAME,
                },
              },
            },
          },
        },
        update: {
          name: input.name,
          address: input.address,
          city: input.city,
          slug: generateMenuSlug({
            name: input.name,
            city: input.city,
          }),
          contactNumber: input.contactPhoneNumber,
        },
      });
    }),
  updateMenuSocials: privateProcedure
    .input(socialMediaValidationSchema.extend({ menuId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.menus.update({
        where: {
          id: input.menuId,
          userId: ctx.user.id,
        },
        data: {
          facebookUrl: input.facebookUrl || null,
          instagramUrl: input.instagramUrl || null,
          googleReviewUrl: input.googleReviewUrl || null,
        },
      });
    }),
  updateMenuBackgroundImg: privateProcedure
    .input(
      z.object({
        menuId: z.string(),
        backgroundImgUrl: asOptionalField(z.string().url()).nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      if (input.backgroundImgUrl === null) {
        const menusPromise = ctx.db.menus.update({
          where: {
            id: input.menuId,
            userId: ctx.user.id,
          },
          data: {
            backgroundImageUrl: null,
          },
        });

        const imagePromise = supabase()
          .storage.from(storageBucketsNames.menus)
          .remove([
            generateBackgroundImagePath({
              menuId: input.menuId,
              userId: ctx.user.id,
            }),
          ]);

        return Promise.all([imagePromise, menusPromise]).then((val) => val[1]);
      }

      return ctx.db.menus.update({
        where: {
          id: input.menuId,
          userId: ctx.user.id,
        },
        data: {
          backgroundImageUrl: input.backgroundImgUrl,
        },
      });
    }),
  updateMenuLogoImg: privateProcedure
    .input(
      z.object({
        menuId: z.string(),
        logoImgUrl: asOptionalField(z.string().url()).nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      if (input.logoImgUrl === null) {
        const menusPromise = ctx.db.menus.update({
          where: {
            id: input.menuId,
            userId: ctx.user.id,
          },
          data: {
            logoImageUrl: null,
          },
        });

        const imagePromise = supabase()
          .storage.from(storageBucketsNames.menus)
          .remove([
            generateMenuImagePath({
              menuId: input.menuId,
              userId: ctx.user.id,
            }),
          ]);

        return Promise.all([imagePromise, menusPromise]).then((val) => val[1]);
      }

      return ctx.db.menus.update({
        where: {
          id: input.menuId,
          userId: ctx.user.id,
        },
        data: {
          logoImageUrl: input.logoImgUrl,
        },
      });
    }),
  getMenuBySlug: privateProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const menu = await getFullMenu(input.slug, ctx.db);

      if (!menu) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Menu not found",
        });
      }

      return menu;
    }),
  getPublicMenuBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const menu = await getFullMenu(input.slug, ctx.db);

      if (!menu) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Menu not found",
        });
      }

      return menu;
    }),

  upsertDish: privateProcedure
    .input(addDishValidationSchema.extend({ menuId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.dishes.upsert({
        where: {
          id: input.id || "00000000-0000-0000-0000-000000000000",
          menus: {
            userId: ctx.user.id,
            id: input.menuId,
          },
        },
        create: {
          price: input.price * 100,
          menuId: input.menuId,
          categoryId: input.categoryId || null,
          dishesTranslation: {
            createMany: {
              data: input.translatedDishData.map((translation) => ({
                description: translation.description,
                languageId: translation.languageId,
                name: translation.name,
              })),
            },
          },
          carbohydrates: input.carbohydrates ?? null,
          fats: input.fats ?? null,
          protein: input.proteins ?? null,
          calories: input.calories ?? null,
          dishesTag: {
            createMany: {
              data: input.tags.map((tag) => ({
                tagName: tag,
              })),
            },
          },
        },
        update: {
          categoryId: input.categoryId || null,
          price: input.price * 100,
          carbohydrates: input.carbohydrates ?? null,
          fats: input.fats ?? null,
          protein: input.proteins ?? null,
          calories: input.calories ?? null,
          dishesTag: {
            deleteMany: {
              dishId: input.id,
            },
            createMany: {
              data: input.tags.map((tag) => ({
                tagName: tag,
              })),
            },
          },
          dishesTranslation: {
            deleteMany: {
              dishId: input.id,
            },
            createMany: {
              data: input.translatedDishData.map((translation) => ({
                description: translation.description,
                languageId: translation.languageId,
                name: translation.name,
              })),
            },
          },
        },
      });
    }),
  updateDishImageUrl: privateProcedure
    .input(
      z.object({
        dishId: z.string(),
        imageUrl: asOptionalField(z.string().url()).nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      if (input.imageUrl === null) {
        const dishesPromise = ctx.db.dishes.update({
          where: {
            id: input.dishId,
            menus: {
              userId: ctx.user.id,
            },
          },
          data: {
            pictureUrl: null,
          },
        });

        const imagePromise = supabase()
          .storage.from(storageBucketsNames.menus)
          .remove([
            generateDishImagePath({
              dishId: input.dishId,
              userId: ctx.user.id,
            }),
          ]);

        return Promise.all([imagePromise, dishesPromise]).then((val) => val[1]);
      }

      return ctx.db.dishes.update({
        where: {
          id: input.dishId,
          menus: {
            userId: ctx.user.id,
          },
        },
        data: {
          pictureUrl: input.imageUrl,
        },
      });
    }),
  upsertDishVariant: privateProcedure
    .input(dishVariantValidationSchema.extend({ dishId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.dishVariants.upsert({
        where: {
          id: input.id || "00000000-0000-0000-0000-000000000000",
          dishes: {
            menus: {
              userId: ctx.user.id,
            },
          },
        },
        create: {
          price: input.price ? input.price * 100 : null,
          variantTranslations: {
            createMany: {
              data: input.translatedVariant.map((translation) => ({
                languageId: translation.languageId,
                name: translation.name,
                description: translation.description,
              })),
            },
          },
          dishId: input.dishId,
        },
        update: {
          price: input.price ? input.price * 100 : null,
          variantTranslations: {
            deleteMany: {
              dishVariantId: input.id,
            },
            createMany: {
              data: input.translatedVariant.map((translation) => ({
                languageId: translation.languageId,
                name: translation.name,
                description: translation.description,
              })),
            },
          },
        },
      });
    }),
  upsertCategory: privateProcedure
    .input(addCategoryValidationSchema.extend({ menuId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.categories.upsert({
        where: {
          id: input.id || "00000000-0000-0000-0000-000000000000",
          menus: {
            userId: ctx.user.id,
          },
        },
        create: {
          menuId: input.menuId,
          categoriesTranslation: {
            createMany: {
              data: input.translatedCategoriesData.map((translation) => ({
                languageId: translation.languageId,
                name: translation.name,
              })),
            },
          },
        },
        update: {
          categoriesTranslation: {
            deleteMany: {
              categoryId: input.id,
            },
            createMany: {
              data: input.translatedCategoriesData.map((translation) => ({
                languageId: translation.languageId,
                name: translation.name,
              })),
            },
          },
        },
      });
    }),
  getCategoriesBySlug: privateProcedure
    .input(z.object({ menuSlug: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.categories.findMany({
        where: {
          menus: {
            slug: input.menuSlug,
          },
        },
        select: {
          id: true,
          categoriesTranslation: {
            select: {
              name: true,
              languageId: true,
            },
          },
        },
      });
    }),
  deleteCategory: privateProcedure
    .input(z.object({ categoryId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.categories.delete({
        where: {
          id: input.categoryId,
          menus: {
            userId: ctx.user.id,
          },
        },
      });
    }),
  deleteDish: privateProcedure
    .input(z.object({ dishId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.dishes.delete({
        where: {
          id: input.dishId,
          menus: {
            userId: ctx.user.id,
          },
        },
      });
    }),
  deleteVariant: privateProcedure
    .input(z.object({ variantId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.dishVariants.delete({
        where: {
          id: input.variantId,
          dishes: {
            menus: {
              userId: ctx.user.id,
            },
          },
        },
      });
    }),
  deleteMenu: privateProcedure
    .input(z.object({ menuId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.menus.delete({
        where: {
          id: input.menuId,
          userId: ctx.user.id,
        },
      });
    }),
  publishMenu: privateProcedure
    .input(z.object({ menuId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const subscription = await ctx.db.subscriptions.findFirst({
        where: {
          profileId: ctx.user.id,
        },
      });
      const isSubscriptionActive = checkIfSubscribed(subscription?.status);

      if (!isSubscriptionActive) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "You need to subscribe to publish your menu",
        });
      }

      return ctx.db.menus.update({
        where: {
          id: input.menuId,
          userId: ctx.user.id,
        },
        data: {
          isPublished: true,
        },
      });
    }),
  unpublishMenu: privateProcedure
    .input(z.object({ menuId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.menus.update({
        where: {
          id: input.menuId,
          userId: ctx.user.id,
        },
        data: {
          isPublished: false,
        },
      });
    }),
});
