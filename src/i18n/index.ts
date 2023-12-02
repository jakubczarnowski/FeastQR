import acceptLanguage from "accept-language";
import { type Namespace, createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { type RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { type ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies, headers } from "next/headers";
import { initReactI18next } from "react-i18next/initReactI18next";

import { getOptions, languages, fallbackLng, type Language } from "./settings";

const initI18next = async (language: Language, namespace?: Namespace) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (resourceLanguage: string, resourceNamespace: string) =>
          import(`./locales/${resourceLanguage}/${resourceNamespace}.ts`),
      ),
    )
    .init(getOptions(language, namespace));

  return i18nInstance;
};

acceptLanguage.languages(languages as unknown as string[]);
const cookieName = "i18next";

const getLanguageFromHeaders = (reqHeaders: Headers) => {
  const nextUrlHeader =
    reqHeaders.has("next-url") && reqHeaders.get("next-url");
  const hasLanguageInHeader =
    nextUrlHeader && nextUrlHeader.indexOf(`"lng":"`) > -1;

  if (!hasLanguageInHeader) {
    return null;
  }

  const qsObj = JSON.parse(
    nextUrlHeader.substring(
      nextUrlHeader.indexOf("{"),
      nextUrlHeader.indexOf(`}`) + 1,
    ),
  ) as { lng: string };

  return qsObj.lng as Language;
};

export function getLanguageFromCookie(
  requestCookies: RequestCookies | ReadonlyRequestCookies,
) {
  return acceptLanguage.get(
    requestCookies.get(cookieName)?.value,
  ) as Language | null;
}

export function getLanguageFromAcceptHeader(requestHeaders: Headers) {
  return acceptLanguage.get(
    requestHeaders.get("Accept-Language"),
  ) as Language | null;
}

export function detectLanguage() {
  const ckies = cookies();
  const hders = headers();
  const languageFromHeaders = getLanguageFromHeaders(hders);
  const languageFromCookie = getLanguageFromCookie(ckies);
  const languageFromAcceptHeader = getLanguageFromAcceptHeader(hders);
  const language =
    languageFromCookie ||
    languageFromHeaders ||
    languageFromAcceptHeader ||
    fallbackLng;

  return language;
}

export async function useServerTranslation(namespace?: Namespace) {
  const language = detectLanguage();
  const i18nextInstance = await initI18next(language, namespace);

  return {
    t: i18nextInstance.getFixedT(language, namespace),
    i18n: i18nextInstance,
    language: language,
  };
}
