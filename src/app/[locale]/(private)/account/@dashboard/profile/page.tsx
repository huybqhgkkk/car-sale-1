import { getUserInfo } from "@lib/data/server/customer"
import Profile from "@modules/account/components/profile"

import { UserInfo } from "../../../../../../types/account/user-info"
import { isSuccessAndHasData } from "@lib/auth"
import { ApiResponse } from "../../../../../../types/response"

export async function CustomerProfile() {
  const response: ApiResponse<UserInfo> | null = await getUserInfo()
  if (!isSuccessAndHasData(response)) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-600 font-semibold">
            Không thể tải thông tin
          </h2>
          <p className="text-red-500">{"Đã có lỗi xảy ra"}</p>
        </div>
      </div>
    )
  }

  return <Profile userInfo={response.data!!} />
}
