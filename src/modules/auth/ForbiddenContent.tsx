"use client"

import { Button, Result } from "antd"
import { useFormState } from "react-dom"
import { navigateToContact, navigateToHome } from "@modules/auth/actions"

const initialState = {
  message: "",
}

export default function ForbiddenContent() {
  const [homeState, homeAction] = useFormState(navigateToHome, initialState)
  const [contactState, contactAction] = useFormState(
    navigateToContact,
    initialState
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full px-4">
        <Result
          status="403"
          title={
            <span className="text-3xl font-bold text-gray-800">
              403 - Không có quyền truy cập
            </span>
          }
          subTitle={
            <span className="text-gray-600">
              Xin lỗi, bạn không có quyền truy cập vào trang này.
            </span>
          }
          extra={[
            <div key="home-form">
              <form action={homeAction}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600"
                >
                  Trở về trang chủ
                </Button>
              </form>
              {homeState.message && (
                <p className="text-red-500 text-sm mt-1">{homeState.message}</p>
              )}
            </div>,

            <div key="contact-form">
              <form action={contactAction}>
                <Button htmlType="submit" className="ml-4">
                  Liên hệ hỗ trợ
                </Button>
              </form>
              {contactState.message && (
                <p className="text-red-500 text-sm mt-1">
                  {contactState.message}
                </p>
              )}
            </div>,
          ]}
        />

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Nếu bạn cho rằng đây là lỗi, vui lòng liên hệ với quản trị viên
          </p>
          <p className="text-gray-500">
            Email: support@example.com | Hotline: 1900 xxxx
          </p>
        </div>
      </div>
    </div>
  )
}
