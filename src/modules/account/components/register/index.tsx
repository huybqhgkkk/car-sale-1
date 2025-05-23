'use client';

import { Button, Card, Form, Input } from "antd";
import PageLayout from "@/components/PageLayout";
import React from "react";

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [form] = Form.useForm<SignUpFormValues>();

  const handleFinish = (values: SignUpFormValues) => {
    console.log("Form Values:", values);
    // TODO: Gọi API đăng ký tại đây
  };

  return (
      <>
        <div className="max-w-md mx-auto mt-10">
          <Card className="p-6 shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold text-center mb-4">Đăng ký tài khoản</h1>
            <p className="text-center text-gray-500 mb-6">Form đăng ký tài khoản mới của bạn.</p>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
              <Form.Item
                  label="Tên người dùng"
                  name="username"
                  rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
              >
                <Input placeholder="Nhập tên người dùng" />
              </Form.Item>

              <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Vui lòng nhập email!" }, { type: 'email', message: 'Email không hợp lệ!' }]}
              >
                <Input placeholder="Nhập email" />
              </Form.Item>

              <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
                  hasFeedback
              >
                <Input.Password placeholder="Nhập mật khẩu" />
              </Form.Item>

              <Form.Item
                  label="Xác nhận mật khẩu"
                  name="confirmPassword"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Mật khẩu không khớp!'));
                      },
                    }),
                  ]}
              >
                <Input.Password placeholder="Xác nhận mật khẩu" />
              </Form.Item>

              <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="bg-blue-600 hover:bg-blue-700"
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>

            <div className="text-center mt-6">
              <span className="text-gray-600">Đã có tài khoản? </span>
              <a href="/vn/account" className="text-blue-500 hover:underline">Đăng nhập</a>
            </div>
          </Card>
        </div>
      </>
  );
};

export default SignUp;
