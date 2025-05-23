"use server"

import { TokenResponse } from "../../../types/tokens"
import { setAccessToken, setRefreshToken } from "@lib/cookies"
import { ApiResponse } from "../../../types/response"
import { UserInfo } from "../../../types/account/user-info"
import { axiosServer } from "@lib/axios/axios-server"


export const getUserInfo = async (): Promise<ApiResponse<UserInfo>> => {
  return await axiosServer.get<UserInfo>("/api/v1/userinfo")
}

export async function login(
  _currentState: unknown,
  formData: FormData
): Promise<ApiResponse<TokenResponse>> {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const credentials = {
    usernameOrEmail: email,
    password: password,
  }
  const response = await axiosServer.post<TokenResponse>(
    "/api/v1/auth/login",
    credentials
  )
  if (response.data) {
    setAccessToken(response.data.accessToken)
    setRefreshToken(response.data.refreshToken)
  }
  return response
}
