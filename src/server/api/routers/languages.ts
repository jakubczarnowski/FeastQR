import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { assert } from "~/utils/assert";

export const languagesRouter = createTRPCRouter({
  getLanguages: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.languages.findMany();
  }),
  changeMenuLanguages: privateProcedure
    .input(z.object({ languages: z.array(z.string()), menuId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const languages = await ctx.db.menuLanguages.findMany({
        where: {
          menus: {
            id: input.menuId,
            userId: ctx.user.id,
          },
        },
      });
      const languagesToCreate = input.languages.filter(
        (language) => !languages.find((lang) => lang.languageId === language),
      );
      const languagesToDelete = languages.filter(
        (language) =>
          !input.languages.find((lang) => lang === language.languageId),
      );
      const newLanguagesCount =
        languages.length - languagesToDelete.length + languagesToCreate.length;

      const currentLanguages = languages.filter(
        (lang) =>
          !languagesToDelete.some(
            (languageToDelete) =>
              languageToDelete.languageId === lang.languageId,
          ),
      );

      const isDefaultLanguageInCurrentLanguages = currentLanguages.some(
        (lang) => lang.isDefault,
      );

      const allLanguages = [
        ...languagesToCreate,
        ...currentLanguages.map((lang) => lang.languageId),
      ];

      if (newLanguagesCount < 1) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You cannot delete all languages from menu",
        });
      }

      await ctx.db.$transaction(async (prisma) => {
        const deletePromise = prisma.menuLanguages.deleteMany({
          where: {
            menus: {
              id: input.menuId,
              userId: ctx.user.id,
            },
            languageId: {
              in: languagesToDelete.map((lang) => lang.languageId),
            },
          },
        });
        const createPromise = prisma.menuLanguages.createMany({
          data: languagesToCreate.map((lang) => ({
            menuId: input.menuId,
            languageId: lang,
          })),
        });
        const deleteDishesTranslationsPromise =
          prisma.dishesTranslation.deleteMany({
            where: {
              dishes: {
                menuId: input.menuId,
              },
              languageId: {
                in: languagesToDelete.map((lang) => lang.languageId),
              },
            },
          });

        const deleteCategoriesTranslationsPromise =
          prisma.categoriesTranslation.deleteMany({
            where: {
              categories: {
                menuId: input.menuId,
              },
              languageId: {
                in: languagesToDelete.map((lang) => lang.languageId),
              },
            },
          });

        await Promise.all([
          deletePromise,
          createPromise,
          deleteDishesTranslationsPromise,
          deleteCategoriesTranslationsPromise,
        ]);
        if (!isDefaultLanguageInCurrentLanguages) {
          const newBaseLanguage = allLanguages[0];

          assert(!!newBaseLanguage, "New base language is not defined");
          await prisma.menuLanguages.update({
            where: {
              menus: {
                userId: ctx.user.id,
              },
              menuId_languageId: {
                languageId: newBaseLanguage,
                menuId: input.menuId,
              },
            },
            data: {
              isDefault: true,
            },
          });
        }
      });

      return true;
    }),
  changeDefaultLanguage: privateProcedure
    .input(z.object({ languageId: z.string(), menuId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const languages = await ctx.db.menuLanguages.findMany({
        where: {
          menus: {
            id: input.menuId,
            userId: ctx.user.id,
          },
        },
      });

      const language = languages.find(
        (lang) => lang.languageId === input.languageId,
      );

      if (!language) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Language is not assigned to this menu",
        });
      }

      const updateDefaultsToFalsePromise = ctx.db.menuLanguages.updateMany({
        where: {
          menus: {
            id: input.menuId,
            userId: ctx.user.id,
          },
        },
        data: {
          isDefault: false,
        },
      });

      const updateDefaultLanguagePromise = ctx.db.menuLanguages.update({
        where: {
          menus: {
            userId: ctx.user.id,
          },
          menuId_languageId: {
            languageId: input.languageId,
            menuId: input.menuId,
          },
        },
        data: {
          isDefault: true,
        },
      });

      await Promise.all([
        updateDefaultsToFalsePromise,
        updateDefaultLanguagePromise,
      ]);

      return true;
    }),
});
