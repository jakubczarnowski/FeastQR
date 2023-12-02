import { z } from "zod";
import { type ZodReturnType } from "~/utils";

export const dishVariantValidationSchema = z.object({
  id: z.string().optional(),
  translatedVariant: z.array(
    z.object({
      languageId: z.string(),
      name: z.string().min(3),
      description: z.string().min(3).optional().or(z.literal("")),
    }),
  ),
  price: z.coerce.number().optional().or(z.coerce.number().min(0.01)),
});

export type AddDishVariantFormValues = ZodReturnType<
  typeof dishVariantValidationSchema
>;
