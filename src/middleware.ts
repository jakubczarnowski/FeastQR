import acceptLanguage from "accept-language";
import { type NextRequest, NextResponse } from "next/server";
import { fallbackLng, languages } from "./i18n/settings";
import { getLanguageFromAcceptHeader, getLanguageFromCookie } from "./i18n";
import { langaugeCookieExpirationTimeMs } from "./providers/I18NextProvider/I18NextProvider";

acceptLanguage.languages(languages as unknown as string[]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const cookieName = "i18next";
const searchParamName = "lng";

const hasLanguageInHeader = (req: NextRequest) => {
  const nextUrlHeader =
    req.headers.has("next-url") && req.headers.get("next-url");

  return nextUrlHeader && nextUrlHeader.indexOf(`"lng":"`) > -1;
};

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }

  const languageInSearchParams = acceptLanguage.get(
    req.nextUrl.searchParams.get(searchParamName)
  );
  const languageInAcceptHeader = getLanguageFromAcceptHeader(req.headers);
  const languageInCookie = getLanguageFromCookie(req.cookies);
  const language =
    languageInSearchParams ||
    languageInCookie ||
    languageInAcceptHeader ||
    fallbackLng;

  if (hasLanguageInHeader(req) || !languageInCookie) {
    response.cookies.set(cookieName, language, {
      expires: new Date(Date.now() + langaugeCookieExpirationTimeMs),
    });
  }

  return response;
}
