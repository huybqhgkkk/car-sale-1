import { useFormState } from "react-dom"
import { Button, Checkbox, Form, Input, Spin } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { login } from "@lib/data/server/customer"
import { useEffect, useTransition } from "react"

import { TokenResponse } from "../../../../types/tokens"
import { ApiResponse } from "../../../../types/response"

interface Props {
  setCurrentView: (view: string) => void
}

const initialState: ApiResponse<TokenResponse> = {
  result: {
    statusCode: "",
    errorMessage: "",
  },
}

const Login = ({ setCurrentView }: Props) => {
  const [state, formAction] = React.useActionState(login, initialState);
  const [isPending, startTransition] = useTransition() // Sử dụng useTransition
  const [form] = Form.useForm()

  useEffect(() => {
    if (state?.result?.statusCode !== "SUCCESS") {
      form.setFields([
        {
          name: "email",
          errors: [
            state?.result?.errorMessage ||
              "Email hoặc mật khẩu không chính xác",
          ],
        },
        {
          name: "password",
          errors: [
            state?.result?.errorMessage ||
              "Email hoặc mật khẩu không chính xác",
          ],
        },
      ])
    }
  }, [state, form])

  const handleSubmit = async (values: any) => {
    const formData = new FormData()
    formData.append("email", values.email)
    formData.append("password", values.password)
    if (values.remember) {
      formData.append("remember", "true")
    }

    // Sử dụng startTransition để wrap formAction
    startTransition(() => {
      formAction(formData)
    })
  }

  // Debug log
  useEffect(() => {
    console.log("Pending state:", isPending)
  }, [isPending])

  return (
    <Spin spinning={isPending} tip="Đang xử lý...">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[400px] px-4">
          {/* Debug display */}
          <div className="mb-2 text-sm text-gray-500">
            Loading state: {isPending ? "true" : "false"}
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Đăng nhập vào tài khoản</h1>
            <button
              onClick={() => setCurrentView("register")}
              className="text-blue-600 text-sm hover:underline"
              disabled={isPending}
            >
              Hoặc đăng ký tài khoản mới
            </button>
          </div>

          {/* Form */}
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="store@local.com"
                className="w-full"
                disabled={isPending}
              />
            </Form.Item>

            <Form.Item
              label="Mật khẩu:"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="••••••••"
                className="w-full"
                disabled={isPending}
              />
            </Form.Item>

            <div className="flex items-center justify-between mb-4">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-sm" disabled={isPending}>
                  Ghi nhớ đăng nhập
                </Checkbox>
              </Form.Item>

              <button
                type="button"
                onClick={() => setCurrentView("forgot-password")}
                className="text-blue-600 text-sm hover:underline"
                disabled={isPending}
              >
                Quên mật khẩu?
              </button>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-10 bg-blue-600 hover:bg-blue-700"
                loading={isPending}
                disabled={isPending}
              >
                {isPending ? "Đang xử lý..." : "Đăng nhập"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Spin>
  )
}

export default Login
