import "i18next";
import { type Resources } from "./locales/types";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: Resources;
  }
}
