"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Avatar, Button, Divider, Drawer, Space } from "antd"
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons"
import { usePathname, useRouter } from "next/navigation"
import { MENU_ITEMS } from "../../types/constants"

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const [isPC, setIsPC] = useState<boolean>(false)
  const router = usePathname()
  const useNavigate = useRouter()
  const isActive = (href: string): boolean => router === href

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="w-full shadow-lg fixed top-0 z-50 border-b border-opacity-20 border-emerald-300 bg-gradient-to-r from-[#2d3748] to-[#1a365d]">
      <div className="w-full px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between mx-auto">
          {/* Logo với hiệu ứng hover */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => useNavigate.push("/vn")}
          >
            <Avatar
              src="/assets/logo.png"
              size={{ xs: 40, sm: 44, md: 48 }}
              icon={<UserOutlined />}
              className="bg-gradient-to-br from-emerald-400 to-teal-500 transform transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent !min-w-[125px]">
              Car Market
            </span>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Menu items với hiệu ứng hover nâng cao */}
            <Space
              size="middle"
              className="hidden lg:flex flex-1 justify-end mr-4 lg:mr-6"
              style={{ whiteSpace: "nowrap" }}
            >
              {/*{MENU_ITEMS.slice(0, isPC ? MENU_ITEMS.length : 4).map((item) => {*/}
              {MENU_ITEMS.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm lg:text-base font-medium transition-all duration-300 hover:text-emerald-300 px-1 py-1 rounded-lg ${
                      isActive(item.href)
                        ? "text-white bg-emerald-600 bg-opacity-30 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        : "text-gray-200 hover:bg-emerald-900 hover:bg-opacity-30"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </Space>

            {/* Auth Buttons với gradient */}
            <Space size="small" className="hidden lg:flex ml-2 lg:ml-4">
              <Button
                ghost
                size="middle"
                className="text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 hover:from-emerald-600 hover:to-teal-600 h-9"
                onClick={() => useNavigate.push("/vn/signup")}
              >
                Đăng ký
              </Button>
              <Button
                type="primary"
                size="middle"
                icon={<UserOutlined className="text-sm" />}
                className="bg-white text-[#292d32] hover:bg-gray-100 hover:text-[#292d32] h-9 shadow-md"
                onClick={() => useNavigate.push("/vn/account")}
              >
                Đăng nhập
              </Button>
            </Space>

            {/* Mobile menu button */}
            <Button
              icon={
                <MenuOutlined className="text-xl text-emerald-300 hover:text-white" />
              }
              onClick={() => setOpen(true)}
              type="text"
              className="lg:hidden ml-2"
              size="large"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer với gradient background */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent !min-w-[125px]">
              Car Market
            </span>
            <Button
              type="text"
              icon={
                <CloseOutlined className="text-emerald-300 text-xl hover:text-white" />
              }
              onClick={() => setOpen(false)}
              size="large"
            />
          </div>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={false}
        width="80%"
        styles={{
          body: {
            padding: "16px 12px",
            background: "linear-gradient(to bottom, #1a365d, #2d3748)",
            color: "white",
          },
        }}
      >
        <div className="flex flex-col gap-3 text-white">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium shadow-lg"
                  : "hover:bg-emerald-900 hover:bg-opacity-30"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Divider className="my-4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-[2px]" />

          <Space direction="vertical" className="w-full gap-4 mt-2">
            <Button
              type="default"
              block
              size="large"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 hover:from-emerald-600 hover:to-teal-600 h-12 text-base"
              onClick={() => {
                useNavigate.push("/vn/signup")
                setOpen(false)
              }}
            >
              Đăng ký
            </Button>
            <Button
              type="primary"
              block
              size="large"
              className="bg-white text-[#292d32] hover:bg-gray-100 h-12 text-base shadow-md"
              onClick={() => {
                useNavigate.push("/vn/account")
                setOpen(false)
              }}
            >
              Đăng nhập
            </Button>
          </Space>
        </div>
      </Drawer>
    </nav>
  )
}
