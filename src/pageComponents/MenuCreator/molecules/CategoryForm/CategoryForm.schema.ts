import { z } from "zod";
import { type ZodReturnType } from "~/utils";

export const addCategoryValidationSchema = z.object({
  id: z.string().optional(),
  translatedCategoriesData: z.array(
    z.object({
      languageId: z.string(),
      name: z.string().min(3),
    }),
  ),
});

export type AddCategoryFormValues = ZodReturnType<
  typeof addCategoryValidationSchema
>;
