import { Metadata } from "next"
import React, { Suspense } from "react"
import { CustomerProfile } from "./profile/page"
import { Spin } from "antd"

export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
}

export default async function OverviewTemplate() {
  return (
    <Suspense
      fallback={
        <div>
          <Spin size="large" />
        </div>
      }
    >
      <CustomerProfile />
    </Suspense>
  )
}
