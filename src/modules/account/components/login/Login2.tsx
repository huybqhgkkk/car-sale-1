import { Alert, Button, Form, Input, message } from "antd"
import {
  ArrowLeftOutlined,
  ExclamationCircleFilled,
  LockOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { login } from "@lib/data/server/customer"
import React, { useEffect, useRef, useState } from "react"

import { TokenResponse } from "../../../../types/tokens"
import { useFormState } from "react-dom"
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

const Login2 = ({ setCurrentView }: Props) => {
  const [state, formAction] = React.useActionState(login, initialState);
  const [form] = Form.useForm()
  const [currentStep, setCurrentStep] = useState<"email" | "password">("email")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const hasSubmitted = useRef(false)

  // Reset isSubmitting khi state thay đổi
  useEffect(() => {
    if (hasSubmitted.current && state?.result?.statusCode) {
      setIsSubmitting(false)

      // Xử lý response
      if (state.result.statusCode.startsWith("E")) {
        message.error(state.result.errorMessage || "Đăng nhập thất bại")

        if (currentStep === "password") {
          form.setFields([
            {
              name: "password",
              errors: [state.result.errorMessage || "Mật khẩu không chính xác"],
            },
          ])
        }
      } else if (state.result.statusCode === "SUCCESS") {
        message.success("Đăng nhập thành công")
        // TODO: Xử lý redirect sau khi đăng nhập thành công
      }
    }
  }, [state, form, currentStep])

  const handleEmailSubmit = (values: { email: string }) => {
    setEmail(values.email)
    setCurrentStep("password")
    form.resetFields() // Reset form khi chuyển step
  }

  const handlePasswordSubmit = async (values: { password: string }) => {
    setIsSubmitting(true)
    hasSubmitted.current = true

    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", values.password)

    try {
      await formAction(formData)
    } catch (error) {
      setIsSubmitting(false)
      message.error("Có lỗi xảy ra, vui lòng thử lại")
    }
  }

  const handleBack = () => {
    setCurrentStep("email")
    setIsSubmitting(false)
    hasSubmitted.current = false
    form.resetFields()
  }

  const SubmitButton = ({ children }: { children: React.ReactNode }) => (
    <Button
      type="primary"
      htmlType="submit"
      className="w-full h-10"
      loading={isSubmitting}
      disabled={isSubmitting}
      icon={<LoginOutlined />}
    >
      {isSubmitting ? "Đang xử lý..." : children}
    </Button>
  )

  const EmailStep = () => (
    <Form
      form={form}
      onFinish={handleEmailSubmit}
      layout="vertical"
      requiredMark={false}
    >
      <Form.Item
        label="Email:"
        name="email"
        initialValue={email}
        rules={[
          { required: true, message: "Vui lòng nhập email" },
          { type: "email", message: "Email không hợp lệ" },
        ]}
      >
        <Input
          prefix={<UserOutlined className="text-gray-400" />}
          placeholder="store@local.com"
          className="w-full"
          disabled={isSubmitting}
        />
      </Form.Item>

      <Form.Item>
        <SubmitButton>Tiếp tục</SubmitButton>
      </Form.Item>
    </Form>
  )

  const PasswordStep = () => (
    <Form
      form={form}
      onFinish={handlePasswordSubmit}
      layout="vertical"
      requiredMark={false}
    >
      <div className="mb-4">
        <p className="text-sm text-gray-600">Email: {email}</p>
      </div>

      <Form.Item
        label="Mật khẩu:"
        name="password"
        validateTrigger={["onChange", "onBlur"]}
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu" },
          { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
        ]}
        className="mb-2"
      >
        <Input.Password
          prefix={<LockOutlined className="text-gray-400" />}
          placeholder="••••••••"
          className="w-full"
          disabled={isSubmitting}
        />
      </Form.Item>

      {/* Chỉ hiển thị Alert khi có lỗi và đã submit */}
      {hasSubmitted.current && state?.result?.statusCode?.startsWith("E") && (
        <Form.Item>
          <Alert
            message={state.result.errorMessage}
            type="error"
            showIcon
            icon={<ExclamationCircleFilled />}
            className="mb-4"
          />
        </Form.Item>
      )}

      <div className="flex justify-between mb-4">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
          disabled={isSubmitting}
        >
          Quay lại
        </Button>
        <Button
          type="link"
          onClick={() => setCurrentView("forgot-password")}
          disabled={isSubmitting}
        >
          Quên mật khẩu?
        </Button>
      </div>

      <Form.Item>
        <SubmitButton>Đăng nhập</SubmitButton>
      </Form.Item>
    </Form>
  )

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Đăng nhập vào tài khoản</h1>
          <button
            onClick={() => setCurrentView("register")}
            className="text-blue-600 text-sm hover:underline"
            disabled={isSubmitting}
          >
            Hoặc đăng ký tài khoản mới
          </button>
        </div>

        {currentStep === "email" ? <EmailStep /> : <PasswordStep />}
      </div>
    </div>
  )
}

export default Login2
