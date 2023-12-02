import { TagType } from "@prisma/client";
import { z } from "zod";
import { type ZodReturnType } from "~/utils";
import { SUPPORTED_IMAGE_FORMATS } from "~/utils/images";

export const addDishValidationSchema = z.object({
  id: z.string().optional(),
  translatedDishData: z.array(
    z.object({
      languageId: z.string(),
      name: z.string().min(3),
      description: z.string().min(3).optional().or(z.literal("")),
    }),
  ),
  price: z.coerce.number().min(0.01),
  imageUrl: z.string().nullable().optional(),
  categoryId: z.string().optional(),
  calories: z.coerce.number().optional(),
  weight: z.coerce.number().optional(),
  proteins: z.coerce.number().optional(),
  fats: z.coerce.number().optional(),
  carbohydrates: z.coerce.number().optional(),
  tags: z.array(
    z
      .string()
      .refine((val): val is TagType =>
        Object.values(TagType).includes(val as TagType),
      ),
  ),
});

export const addDishValidationSchemaWithImage = addDishValidationSchema.extend({
  dishImageToUpload: z
    .custom<Blob>((val) => val instanceof Blob)
    .refine(
      (files) => files?.size <= 5 * 1024 * 1024,
      `Maksymalna wielkość zdjecia wynosi 5MB.`,
    )
    .refine(
      (files) => SUPPORTED_IMAGE_FORMATS.has(files?.type),
      "Akceptujemy tylko pliki z rozszerzeniem .jpg, .jpeg, .png i .webp",
    )
    .optional(),
});

export type AddDishFormValues = ZodReturnType<typeof addDishValidationSchema>;

export type AddDishFormValuesWithImage = ZodReturnType<
  typeof addDishValidationSchemaWithImage
>;
