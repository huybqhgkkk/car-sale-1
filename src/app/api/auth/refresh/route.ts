import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const requestBody = await request.json()
    const refreshToken =
      requestBody.refreshToken || cookies().get("refreshToken")?.value

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token not provided" },
        { status: 400 }
      )
    }

    const javaResponse = await fetch(
      "http://localhost:8080/api/v1/auth/refresh-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    )

    if (!javaResponse.ok) {
      throw new Error("Refresh token failed")
    }

    // 3. Parse response từ Java backend
    const { data } = await javaResponse.json()
    const { accessToken, refreshToken: newRefreshToken } = data

    // 4. Tạo response và set cookies
    const response = NextResponse.json(
      { success: true, accessToken },
      { status: 200 }
    )

    // Set access token cookie (httpOnly, secure)
    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7200, // 2 giờ
      path: "/",
      sameSite: "lax",
    })

    response.cookies.set({
      name: "refreshToken",
      value: newRefreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 tuần
      path: "/",
      sameSite: "lax",
    })

    return response
  } catch (error) {
    console.error("Refresh token error:", error)
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 401 }
    )
  }
}