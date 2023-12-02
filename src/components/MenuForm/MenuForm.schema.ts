import { z } from "zod";
import { type ZodReturnType } from "~/utils";
import { MAX_IMAGE_SIZE, SUPPORTED_IMAGE_FORMATS } from "~/utils/images";
import { asOptionalField } from "~/utils/utils";

export const menuValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3),
  city: z.string().min(2),
  address: z.string().min(3),
  contactPhoneNumber: asOptionalField(z.string()),
  backgroundImgUrl: z.string().optional(),
  logoImgUrl: z.string().optional(),
});

export const menuValidationSchemaWithImage = menuValidationSchema.extend({
  menuLogoImageToUpload: z
    .custom<Blob>((val) => val instanceof Blob)
    .refine(
      (files) => files?.size <= MAX_IMAGE_SIZE,
      `The max file size allowed is 5MB.`,
    )
    .refine(
      (files) => SUPPORTED_IMAGE_FORMATS.has(files?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    )
    .optional(),
  backgroundImageToUpload: z
    .custom<Blob>((val) => val instanceof Blob)
    .refine(
      (files) => files?.size <= MAX_IMAGE_SIZE,
      `The max file size allowed is 5MB.`,
    )
    .refine(
      (files) => SUPPORTED_IMAGE_FORMATS.has(files?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    )
    .optional(),
});

export type UpsertMenuFormValues = ZodReturnType<typeof menuValidationSchema>;
export type UpsertMenuFormWithImageValues = ZodReturnType<
  typeof menuValidationSchemaWithImage
>;
