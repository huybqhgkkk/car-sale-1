import React, { Suspense } from "react"
import { UserInfo } from "../../../../types/account/user-info"
import ProfileClient from "@modules/account/components/profile/ProfileClient"

interface ProfileProps {
  userInfo: UserInfo
  className?: string
}

const Profile = async ({ userInfo, className }: ProfileProps) => {
  return (
    <Suspense
      fallback={
        <div className="max-w-2xl mx-auto p-4 animate-pulse">
          <div className="h-32 bg-gray-200 rounded-t-lg"></div>
          <div className="h-64 bg-gray-100 rounded-b-lg"></div>
        </div>
      }
    >
      <ProfileClient userInfo={userInfo} className={className} />
    </Suspense>
  )
}

export default Profile
