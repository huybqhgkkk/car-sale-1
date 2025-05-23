"use client"

import { ApiResponse } from "../../../types/response"
import { UserInfo } from "../../../types/account/user-info"
import { axiosClient } from "@lib/axios/axios-client"

export const getUserInfoCL = async (): Promise<ApiResponse<UserInfo>> => {
  return await axiosClient.get<UserInfo>("/api/v1/userinfo")
}