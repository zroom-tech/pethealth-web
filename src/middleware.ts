import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Detect locale from geo/headers for root path visitors without locale cookie
  const hasLocaleCookie = request.cookies.has("NEXT_LOCALE");

  if (!hasLocaleCookie) {
    // 1) Vercel provides x-vercel-ip-country header in production
    const country = request.headers.get("x-vercel-ip-country");

    // 2) Fallback: check Accept-Language header
    const acceptLang = request.headers.get("accept-language") || "";
    const isKorean =
      country === "KR" || (!country && acceptLang.toLowerCase().startsWith("ko"));

    const detectedLocale = isKorean ? "ko" : "en";

    // Set the NEXT_LOCALE cookie so next-intl uses it for default locale detection
    const response = intlMiddleware(request);
    response.cookies.set("NEXT_LOCALE", detectedLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
