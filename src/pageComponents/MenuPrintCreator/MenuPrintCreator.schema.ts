import { z } from "zod";
import { asOptionalField } from "~/utils/utils";

export const printCreatorValidationSchema = z.object({
  qrCodeEnabled: z.boolean(),
  menuLogoImageUrl: z.string().nullable(),
  instagramHandle: asOptionalField(z.string()),
  facebookName: asOptionalField(z.string()),
  instagramEnabled: z.boolean(),
  facebookEnabled: z.boolean(),
  restaurantNameEnabled: z.boolean(),
  restaurantName: z.string(),
  wifiPasswordEnabled: z.boolean(),
  wifiPassword: z.string(),
});

export type PrintCreatorFormValues = z.infer<
  typeof printCreatorValidationSchema
>;
