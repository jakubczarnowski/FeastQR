import assert from "assert";

export const getCategoryTranslations = <
  T extends {
    categoriesTranslation: {
      name: string;
      languageId: string;
    }[];
  },
>({
  category,
  languageId,
}: {
  category: T;
  languageId: string;
}) => {
  const { categoriesTranslation } = category;
  const foundTranslation = categoriesTranslation.find(
    (translation) => translation.languageId === languageId,
  );
  const backupTranslation = categoriesTranslation?.[0] ?? {
    name: "-",
  };

  return foundTranslation?.name ?? backupTranslation.name;
};

type DishVariant = {
  variantTranslations: {
    languageId: string;
    name: string;
    description: string | null;
  }[];
  id: string;
  price: number | null;
};

export const getDishVariantsTranslated = ({
  dishVariants,
  languageId,
}: {
  dishVariants: DishVariant[];
  languageId: string;
}) => {
  const translatedDishVariants = dishVariants.map((variant) => {
    const foundTranslation = variant.variantTranslations.find(
      (translation) => translation.languageId === languageId,
    );

    // eslint-disable-next-line unused-imports/no-unused-vars
    const { variantTranslations, ...rest } = variant;

    return { ...foundTranslation, ...rest };
  });

  assert(translatedDishVariants.length === dishVariants.length),
    "Translated dish variants length is not equal to dish variants length";

  return translatedDishVariants;
};
