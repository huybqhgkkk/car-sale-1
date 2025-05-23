import { AuthProvider } from "../../provider/AuthProvider"
import { getAccessToken, getRefreshToken } from "@lib/cookies"

export default async function NormalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serverTokens = {
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
  }

  return (
    <>
      <div>AAAAAAAAAAAAAAAAAA</div>
      <AuthProvider serverTokens={serverTokens}>{children}</AuthProvider>
    </>
  )
}
