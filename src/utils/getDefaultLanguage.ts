import { type MenuLanguages } from "@prisma/client";

export const getDefaultLanguage = <T extends MenuLanguages[]>(languages: T) => {
  const defaultLanguage = languages.find((lang) => lang.isDefault);

  if (!defaultLanguage && languages.length === 0) {
    throw new Error("There's no default language and no languages at all!");
  }

  return defaultLanguage ?? languages[0]!;
};
