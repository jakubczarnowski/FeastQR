import { z } from "zod";
import { asOptionalField } from "~/utils/utils";

export const socialMediaValidationSchema = z.object({
  facebookUrl: asOptionalField(z.string().url()),
  instagramUrl: asOptionalField(z.string().url()),
  googleReviewUrl: asOptionalField(z.string().url()),
});

export type SocialMediaFormValues = z.infer<typeof socialMediaValidationSchema>;
