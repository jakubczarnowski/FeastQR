import { type TFunction } from "i18next";
import { type z, type ZodType } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ZodAnySchema = ZodType<any, any, any>;

export type ZodReturnType<
  T extends ZodAnySchema | ((t: TFunction) => ZodAnySchema),
> = T extends ZodAnySchema
  ? z.infer<T>
  : T extends (t: TFunction) => ZodAnySchema
  ? z.infer<ReturnType<T>>
  : never;
