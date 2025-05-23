"use client"
import { tokenStore } from "../../provider/InMemoryTokenStore"
import { useState } from "react"
import { UserInfo } from "../../types/account/user-info"
import { getUserInfoCL } from "@lib/data/client/user"


export default function NormalClientSide() {
  const [tokens, setTokens] = useState<{
    accessToken?: string
    refreshToken?: string
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)

  // Lấy tokens từ store khi component mount
  const storedTokens = tokenStore.getTokens()
  if (!tokens && storedTokens) {
    setTokens(storedTokens)
  }

  const handleGetUserInfo = async () => {
    try {

      setLoading(true)
      setApiError(null)
      const response = await getUserInfoCL().then((response) => {
        if (response.data) {
          setUserInfo(response.data)
        }
      })
    } catch (error) {
      setApiError("Failed to fetch user info")
      console.error("Error fetching user info:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Client-side rendering with token:
      </h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Access Token:</h2>
        <div className="bg-white p-3 rounded break-all">
          {tokens?.accessToken || "No access token found"}
        </div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Refresh Token:</h2>
        <div className="bg-white p-3 rounded break-all">
          {tokens?.refreshToken || "No refresh token found"}
        </div>

        <div className="mt-6">
          <button
            onClick={handleGetUserInfo}
            disabled={loading}
            className={`px-4 py-2 rounded-md text-white ${
              loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Loading...' : 'Get User Info'}
          </button>

          {userInfo && (
            <>
              <h2 className="text-lg font-semibold mt-4 mb-2">User Info:</h2>
              <div className="bg-white p-3 rounded break-all">
                {JSON.stringify(userInfo, null, 2)}
              </div>
            </>
          )}

          {apiError && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
              {apiError}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 border-t">
        <h2 className="text-lg font-semibold">Debug Info:</h2>
        <pre className="bg-gray-800 text-white p-3 rounded text-xs mt-2">
          {JSON.stringify(
            {
              timestamp: new Date().toISOString(),
              hasAccessToken: !!tokens?.accessToken,
              hasRefreshToken: !!tokens?.refreshToken,
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  )
}