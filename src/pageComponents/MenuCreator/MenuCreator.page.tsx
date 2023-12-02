"use client";

import Image from "next/image";
import { Icons } from "~/components/Icons";
import { LoadingScreen } from "~/components/Loading";
import { useToast } from "~/components/ui/use-toast";
import { api } from "~/trpc/react";
import {
  AddDishButton,
  EditDishButton,
} from "./molecules/AddDishButton/AddDishButton";
import { EmptyPlaceholder } from "~/components/EmptyPlaceholder";
import {
  AddCategoryButton,
  EditCategoryButton,
} from "./molecules/AddCategoryButton/AddCategoryButton";
import { DeleteDishButton } from "./molecules/DeleteDishButton/DeleteDishButton";
import { parseDishes } from "~/utils/parseDishes";

import { useRef, useState } from "react";
import { getDefaultLanguage } from "~/utils/getDefaultLanguage";
import { MenuLanguagesSelector } from "~/components/LanguagesSelector/LanguagesSelector";
import { useTranslation } from "react-i18next";
import { type TagType } from "@prisma/client";
import {
  AddVariantButton,
  EditVariantButton,
} from "./molecules/VariantsCreatorButton/VariantsCreatorButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { DeleteVariantButton } from "./molecules/DeleteVariantButton/DeleteVariantButton";
import { type AddDishFormValues } from "./molecules/DishForm/DishForm.schema";
import { useHandleFetchError } from "~/shared/hooks/useHandleFetchError";
import { redirect } from "next/navigation";

export const MenuCreatorPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { data, error, isLoading } = api.menus.getMenuBySlug.useQuery({ slug });
  const { toast } = useToast();
  const [selectedLanguageId, setSelectedLanguageId] = useState<string | null>(
    null,
  );
  const defaultLanguageSet = useRef(false);
  const { t } = useTranslation();

  useHandleFetchError({
    error,
    onError: () => {
      toast({
        title: "Error",
        description: t("notifications.menuNotFound"),
        variant: "destructive",
      });
    },
  });
  if (error) return redirect("/");
  if (isLoading) return <LoadingScreen />;

  const defaultLanguage = getDefaultLanguage(data.menuLanguages);

  if (!defaultLanguageSet.current) {
    setSelectedLanguageId(defaultLanguage.languageId);
    defaultLanguageSet.current = true;
  }

  const parsedDishes = parseDishes(
    data,
    selectedLanguageId || defaultLanguage.languageId,
  );

  return (
    <div className="my-12 flex w-full max-w-3xl flex-col gap-6 ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-0">
          <div className="flex flex-row gap-4">
            <div className="relative aspect-square h-full  ">
              {data.logoImageUrl && (
                <Image
                  src={data.logoImageUrl}
                  fill
                  alt="Background image"
                  className="rounded-lg object-cover shadow-md"
                />
              )}
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h1 className="whitespace-nowrap text-3xl font-semibold">
                {data.name}
              </h1>
              <div className="flex flex-row items-center gap-1">
                <Icons.map size={16} />
                <h3 className="whitespace-nowrap text-sm text-muted-foreground">
                  {data.city}, {data.address}
                </h3>
              </div>
            </div>
          </div>
          <div className="my-auto h-full">
            <MenuLanguagesSelector
              menuLanguages={data.menuLanguages}
              selectedLanguageId={
                selectedLanguageId || defaultLanguage.languageId
              }
              onSelectedLanguageChange={setSelectedLanguageId}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex h-full flex-col gap-6">
        <div className="flex flex-col                                                                      justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold">{t("menuCreator.dishesList")}</h2>
          <div className="flex flex-row items-center gap-3">
            <AddDishButton />
            <AddCategoryButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {parsedDishes.map(({ category, dishes }) => (
          <div
            className="flex w-full flex-col gap-6"
            key={category?.id ?? "no-category"}
          >
            <hr />
            <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center md:gap-0 ">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">
                  {category?.name ?? t("menuCreator.noCategory")}
                </h3>
                {category &&
                  category?.categoriesTranslation.length !==
                    data.menuLanguages.length && (
                    <p className="text-xs text-red-500">
                      {t("menuCreator.categoryNotTranslated")}
                    </p>
                  )}
              </div>
              <div className="flex flex-row items-center gap-4">
                <AddDishButton
                  defaultValues={{
                    categoryId: category?.id || "",
                  }}
                  buttonText={t("menuCreator.AddDishesToCategory")}
                  buttonProps={{ variant: "outline" }}
                />
                {category && (
                  <EditCategoryButton
                    defaultValues={{
                      id: category.id,
                      translatedCategoriesData: category.categoriesTranslation,
                    }}
                  />
                )}
              </div>
            </div>
            {dishes.length === 0 && (
              <EmptyPlaceholder className="min-h-[100px]">
                <EmptyPlaceholder.Title className="text-lg">
                  {t("menuCreator.noDishes")}
                </EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description className="text-sm">
                  {t("menuCreator.noDishesDescription")}
                </EmptyPlaceholder.Description>
              </EmptyPlaceholder>
            )}
            {dishes.map((dish, idx) => (
              <>
                <DishItem
                  key={dish.id}
                  {...dish}
                  categoryId={dish.categories?.id}
                  tags={dish.dishesTag.map((val) => val.tagName)}
                  translatedDishData={dish.dishesTranslation.map(
                    ({ description: dishDescription, ...rest }) => ({
                      ...rest,
                      description: dishDescription || "",
                    }),
                  )}
                  variants={dish.translatedDishVariants}
                  menuLanguages={data.menuLanguages.map((val) => ({
                    languageId: val.languageId,
                    name: val.languages.name,
                  }))}
                />
                {idx !== dishes.length - 1 && (
                  <hr className="mx-auto w-11/12" />
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const DishItem = ({
  id,
  name,
  description,
  price,
  pictureUrl,
  categoryId,
  translatedDishData,
  tags,
  calories,
  carbohydrates,
  fats,
  protein,
  variants,
  menuLanguages,
}: {
  id: string;
  name: string;
  description: string | null;
  price: number;
  pictureUrl: string | null;
  categoryId?: string;
  translatedDishData: AddDishFormValues["translatedDishData"];
  tags: TagType[];
  calories: number | null;
  carbohydrates: number | null;
  fats: number | null;
  protein: number | null;
  variants: {
    variantTranslations: {
      name: string;
      description: string | null;
      languageId: string;
    }[];
    id: string;
    name: string;
    description: string | null;
    price: number | null;
  }[];
  menuLanguages: {
    languageId: string;
    name: string;
  }[];
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col   border border-muted px-6 pb-4 pt-6 shadow-sm"
      >
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
          <div className="flex w-full flex-row items-center gap-3">
            {pictureUrl && (
              <div className="relative aspect-square h-full ">
                <Image
                  src={pictureUrl}
                  alt="Dish Name"
                  fill
                  className="rounded-md"
                />
              </div>
            )}
            <div className="flex w-full flex-col py-2">
              <div className="flex w-full flex-row items-center gap-3">
                <p className="text-xl font-medium">{name}</p>
              </div>
              <p className="text-sm ">{price / 100} PLN</p>

              <p className="text-xs text-muted-foreground">{description}</p>
              {menuLanguages.length !== translatedDishData.length && (
                <p className="text-xs text-red-500">
                  {t("menuCreator.dishNotTranslated")}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row items-center gap-3">
              <AddVariantButton
                buttonProps={{
                  variant: "outline",
                  className: "whitespace-nowrap",
                }}
                dishId={id}
              />
              <EditDishButton
                defaultValues={{
                  price: price / 100,
                  id,
                  categoryId,
                  translatedDishData,
                  imageUrl: pictureUrl,
                  tags: tags,
                  calories: calories ?? undefined,
                  carbohydrates: carbohydrates ?? undefined,
                  fats: fats ?? undefined,
                  proteins: protein ?? undefined,
                }}
              />
              <DeleteDishButton id={id} dishName={name} />
            </div>
          </div>
        </div>
        {variants.length > 0 && (
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <p className="whitespace-nowrap text-center">
                {t("menuCreator.variants")}
                {variants.some(
                  (val) =>
                    menuLanguages.length !== val.variantTranslations.length,
                ) && (
                  <span className="ml-2 text-center text-xs text-red-500">
                    {t("menuCreator.variantsNotTranslated")}
                  </span>
                )}
              </p>
            </AccordionTrigger>
            <AccordionContent className="border-b-0">
              {variants.map((variant) => (
                <div
                  className="flex w-full flex-row items-center gap-4 "
                  key={variant.id}
                >
                  <div className="flex w-full flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-lg font-medium">{variant.name}</p>
                      {variant.price && (
                        <p className=" text-sm">{variant.price / 100} PLN</p>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {variant.description}
                    </p>
                    {menuLanguages.length !==
                      variant.variantTranslations.length && (
                      <p className="text-xs text-red-500">
                        {t("menuCreator.variantNotTranslated")}
                      </p>
                    )}
                  </div>
                  <EditVariantButton
                    defaultValues={{
                      id: variant.id,
                      price: variant.price ? variant.price / 100 : undefined,
                      translatedVariant: variant.variantTranslations.map(
                        (val) => ({
                          ...val,
                          description: val.description ?? "",
                        }),
                      ),
                    }}
                    dishId={id}
                  />
                  <DeleteVariantButton
                    variantName={variant.name}
                    id={variant.id}
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </>
  );
};
