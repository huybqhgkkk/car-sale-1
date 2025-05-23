import { getUserInfo } from "@lib/data/server/customer"
import React from "react"
import ForbiddenPage from "@modules/auth/Forbidden"

export default async function AccountLayout({
  login,
  dashboard,
}: Readonly<{
  login: React.ReactNode
  dashboard: React.ReactNode
}>) {
  try {
    const response = await getUserInfo()
    if (response.result.statusCode === "UNAUTHORIZED") {
      return login
    }
    if (response.result.statusCode === "FORBIDDEN") {
      return <ForbiddenPage />
    }
  } catch (error) {
    return login
  }
}
