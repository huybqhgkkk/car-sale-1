import "server-only"
import { cookies as nextCookies, headers } from "next/headers"
import { COOKIE_NAMES, xAcessToken, xRefreshToken } from "../types/constants"

import { NextResponse } from "next/server"
import { EnvConfig } from "../env"

type CookieOptions = {
  name: string
  value: string
  maxAge?: number
  path?: string
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

const DEFAULT_COOKIE_OPTIONS: Partial<CookieOptions> = {
  path: '/',
  httpOnly: true,
  sameSite: 'strict',
  secure: process.env.NODE_ENV === 'production',
}



export function setCookie(
  response: NextResponse,
  options: CookieOptions
): NextResponse {
  const {
    name,
    value,
    maxAge = EnvConfig.AUTH.COOKIE_MAX_AGE,
    path = '/',
    domain,
    secure = process.env.NODE_ENV === 'production',
    httpOnly = true,
    sameSite = 'strict',
  } = options

  response.cookies.set({
    name,
    value,
    maxAge,
    path,
    domain,
    secure,
    httpOnly,
    sameSite,
  })

  return response
}




export const setAccessToken =  (token: string) => {
  const cookies = nextCookies()
  cookies.set(COOKIE_NAMES.ACCESS_TOKEN, token, {
    maxAge: EnvConfig.AUTH.ACCESS_TOKEN_EXPIRE,
    ...EnvConfig.AUTH.COOKIE_CONFIG,
  })
}

export const getAccessToken =  () => {
  const cookies = nextCookies()
  const headersList = headers()
  const accessToken = headersList.get(xAcessToken)
  const fromCookie = cookies.get(COOKIE_NAMES.ACCESS_TOKEN)?.value ?? ""
  return accessToken || fromCookie
}



export const getRefreshToken =  (): string => {
  const cookies = nextCookies()
  const headersList = headers()
  const reFreshToken = headersList.get(xRefreshToken)
  const fromCookies = cookies.get(COOKIE_NAMES.REFRESH_TOKEN)?.value ?? ""
  return reFreshToken || fromCookies
}

export const setRefreshToken =  (token: string) => {
  const cookies = nextCookies()
  cookies.set(COOKIE_NAMES.REFRESH_TOKEN, token, {
    maxAge: EnvConfig.AUTH.REFRESH_TOKEN_EXPIRE,
    ...EnvConfig.AUTH.COOKIE_CONFIG,
  })
}