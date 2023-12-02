import { type TFunction } from "i18next";
import { z } from "zod";
import { type ZodReturnType } from "~/utils";

export const loginValidationSchema = (translate: TFunction) =>
  z.object({
    email: z.string().email(),
    password: z.string().min(8, translate("common.passwordLengthValidation")),
  });

export type LoginFormValues = ZodReturnType<typeof loginValidationSchema>;
