import { Metadata } from "next"
import React from "react"
import ForbiddenContent from "@modules/auth/ForbiddenContent"

export const metadata: Metadata = {
  title: "403 Forbidden - Không có quyền truy cập",
  description: "Trang thông báo không có quyền truy cập",
}

export default function ForbiddenPage() {
  return <ForbiddenContent />
}
