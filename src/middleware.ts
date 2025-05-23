import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { decodeJwt, JWTPayload } from "jose"
import {
  clearTokens,
  isTokenExpired,
  refreshTokens,
  updateResponseWithNewTokens,
} from "@lib/token-service"
import logger from "./utils/debug"
import {
  COOKIE_NAMES,
  WHITELIST_ROUTES,
  xAcessToken,
  xRefreshToken,
} from "./types/constants"

function isWhitelisted(pathname: string): boolean {
  return WHITELIST_ROUTES.some((route) => {
    if (route.endsWith("/*")) {
      const base = route.replace("/*", "")
      return pathname.startsWith(base + "/")
    }
    return pathname === route
  })
}


export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const { pathname } = req.nextUrl
  const localeMatch = pathname.match(/^\/(vn|en)(\/|$)/)
  const locale = localeMatch?.[1] || "vn" // default to "vn"

  // IF WHITELISTED, RETURN NEXT RESPONSE
  if (isWhitelisted(pathname)) {
    return NextResponse.next()
  }

  // IF NO ACCESS TOKEN OR REFRESH TOKEN, REDIRECT TO LOGIN
  const accessToken = req.cookies.get(COOKIE_NAMES.ACCESS_TOKEN)
  const refreshToken = req.cookies.get(COOKIE_NAMES.REFRESH_TOKEN)

  if (!accessToken || !refreshToken) {
    const response = NextResponse.redirect(new URL(`/${locale}`, req.url))
    return clearTokens(response)
  }

  try {
    const decodedToken = decodeJwt(accessToken.value) as JWTPayload

    // IF TOKEN IS EXPIRED, AND HAS  REFRESH TOKEN
    if (isTokenExpired(decodedToken) && refreshToken) {
      try {
        const tokens = await refreshTokens(refreshToken.value)
        logger.info("Refreshing tokens...")

        // Set new tokens in response headers. To get in AuthProvider
        res.headers.set(xAcessToken, tokens.data.accessToken)
        res.headers.set(xRefreshToken, tokens.data.refreshToken)
        return updateResponseWithNewTokens(res, tokens)
      } catch (error) {
        logger.error("Error refreshing tokens:")
        const response = NextResponse.redirect(new URL(`/${locale}`, req.url))
        return clearTokens(response)
      }
    }
  } catch (error) {
    logger.error("Error decoding token")
    const response = NextResponse.redirect(new URL(`/${locale}`, req.url))
    return clearTokens(response)
  }
  return res
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },

    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      has: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },

    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      has: [{ type: "header", key: "x-present" }],
      missing: [{ type: "header", key: "x-missing", value: "prefetch" }],
    },
  ],
}
