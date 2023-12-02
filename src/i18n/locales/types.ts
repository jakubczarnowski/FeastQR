import type commonMessages from "./pl/common";
import type zodMessages from "./pl/zod";

export type Resources = {
  common: typeof commonMessages;
  zod: typeof zodMessages;
};
