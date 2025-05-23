import { EnvConfig } from "../env"
import { NextResponse } from "next/server"
import { COOKIE_NAMES } from "../types/constants"
import type { JWTPayload } from "jose/dist/types/types"

interface RefreshTokenResponse {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export interface DecodedToken {
  exp?: number
  iat?: number
}

export async function refreshTokens(
  refreshToken: string
): Promise<RefreshTokenResponse> {
  const response = await fetch(`${EnvConfig.API.BASE_URL}/api/v1/auth/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: refreshToken,
    }),
  })

  if (!response.ok) {
    throw new Error("Refresh token failed")
  }

  return response.json()
}

export function updateResponseWithNewTokens(
  res: NextResponse,
  tokens: RefreshTokenResponse
): NextResponse {
  res.cookies.set(COOKIE_NAMES.ACCESS_TOKEN, tokens.data.accessToken, {
    maxAge:EnvConfig.AUTH.ACCESS_TOKEN_EXPIRE,
    ...EnvConfig.AUTH.COOKIE_CONFIG,
  })

  res.cookies.set(COOKIE_NAMES.REFRESH_TOKEN, tokens.data.refreshToken, {
    maxAge: EnvConfig.AUTH.REFRESH_TOKEN_EXPIRE,
    ...EnvConfig.AUTH.COOKIE_CONFIG,
  })

  return res
}

export function clearTokens(res: NextResponse): NextResponse {
  res.cookies.set(COOKIE_NAMES.ACCESS_TOKEN, "", {
    maxAge: 0,
    ...EnvConfig.AUTH.COOKIE_CONFIG,
  })

  res.cookies.set(COOKIE_NAMES.REFRESH_TOKEN, "", {
    maxAge: 0,
    ...EnvConfig.AUTH.COOKIE_CONFIG,
  })

  return res
}

/**
 * Checks if a JWT token is expired or will expire within a specified buffer period.
 *
 * @param {JWTPayload} decodedToken - The decoded JWT payload containing the expiration time
 * @param {number} [earlyExpirationMinutes=5] - Optional buffer period in minutes before actual expiration
 * @returns {boolean} True if token is expired or will expire within the buffer period, false otherwise
 *
 * @example
 * const token = { exp: 1735689600 }; // December 31, 2024
 * isTokenExpired(token); // Returns true if current time is within 5 minutes of expiration
 * isTokenExpired(token, 10); // Uses 10 minute buffer period
 */
export function isTokenExpired(decodedToken: JWTPayload, earlyExpirationMinutes = 5): boolean {
  if (!decodedToken.exp) return true;
  // Convert expiration time from seconds to milliseconds
  const expirationTime = decodedToken.exp * 1000;
  // Current time plus 5 minutes (in milliseconds)
  const currentTimeWithBuffer = Date.now() + (earlyExpirationMinutes * 60 * 1000);
  // Token is expired if current time + buffer >= expiration time
  return currentTimeWithBuffer >= expirationTime;
}

export function getTimeRemaining(decodedToken: DecodedToken): number {
  if (!decodedToken.exp) return 0
  const expirationTime = decodedToken.exp * 1000
  return expirationTime - Date.now()
}
