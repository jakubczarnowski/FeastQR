import { TagType } from "@prisma/client";
import { type ParseKeys } from "i18next";

export const tagsTranslations: Record<TagType, ParseKeys> = {
  [TagType.high_protein]: "tags.highProtein",
  [TagType.high_fiber]: "tags.highFiber",
  [TagType.low_fat]: "tags.lowFat",
  [TagType.low_carb]: "tags.lowCarb",
  [TagType.sugar_free]: "tags.sugarFree",
  [TagType.organic]: "tags.organic",
  [TagType.gluten_free]: "tags.glutenFree",
  [TagType.lactose_free]: "tags.lactoseFree",
  [TagType.vegetarian]: "tags.vegetarian",
  [TagType.vegan]: "tags.vegan",
  [TagType.keto]: "tags.keto",
};
