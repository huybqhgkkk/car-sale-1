import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { setCookie } from "@lib/cookies"
import { COOKIE_NAMES } from "../../../../types/constants"
import { EnvConfig } from "../../../../env"

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken } = await request.json()

    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { error: "Both access token and refresh token are required" },
        { status: 400 }
      )
    }

    // Create response
    const response = NextResponse.json(
      { message: "Tokens set successfully" },
      { status: 200 }
    )

    // Set cookies using setCookie function
    setCookie(response, {
      name: COOKIE_NAMES.ACCESS_TOKEN,
      value: accessToken,
      maxAge: EnvConfig.AUTH.ACCESS_TOKEN_EXPIRE
    })

    setCookie(response, {
      name: COOKIE_NAMES.REFRESH_TOKEN,
      value: refreshToken,
      maxAge: EnvConfig.AUTH.REFRESH_TOKEN_EXPIRE
    })

    return response
  } catch (error) {
    console.error("Error setting tokens:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}