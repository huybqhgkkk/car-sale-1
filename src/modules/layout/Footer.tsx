import React from "react"
import {
  CarOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  FileTextOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  ToolOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
              <CarOutlined className="mr-2" /> Ô Tô Việt
            </h3>
            <p className="mb-4 text-gray-300">
              Nền tảng mua bán xe ô tô uy tín hàng đầu Việt Nam, kết nối người
              mua và người bán với các dịch vụ đa dạng.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <FacebookOutlined className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <YoutubeOutlined className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <InstagramOutlined className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <TwitterOutlined className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/xe-moi"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <CarOutlined className="mr-2" /> Xe mới
                </Link>
              </li>
              <li>
                <Link
                  href="/xe-cu"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <ToolOutlined className="mr-2" /> Xe đã qua sử dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/dang-ban-xe"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <FileTextOutlined className="mr-2" /> Đăng bán xe
                </Link>
              </li>
              <li>
                <Link
                  href="/tin-tuc"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <FileTextOutlined className="mr-2" /> Tin tức ô tô
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Dịch Vụ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dich-vu/kiem-tra-xe"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <SafetyOutlined className="mr-2" /> Kiểm tra xe trước mua
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/bao-hanh"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <SafetyCertificateOutlined className="mr-2" /> Bảo hành, bảo
                  dưỡng
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/tra-gop"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <FileTextOutlined className="mr-2" /> Tài chính, trả góp
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/bao-hiem"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                >
                  <SafetyOutlined className="mr-2" /> Bảo hiểm ô tô
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Liên Hệ
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <EnvironmentOutlined className="text-orange-400 mt-1 mr-2" />
                <span>Tòa nhà Ô Tô Việt, 123 Xa Lộ Hà Nội, Quận 2, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <PhoneOutlined className="text-orange-400 mr-2" />
                <span>1900 1234 (24/7)</span>
              </li>
              <li className="flex items-center">
                <MailOutlined className="text-orange-400 mr-2" />
                <span>hotro@otoviet.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Ô Tô Việt. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/dieu-khoan"
              className="hover:text-orange-400 transition-colors"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              href="/bao-mat"
              className="hover:text-orange-400 transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/faq"
              className="hover:text-orange-400 transition-colors"
            >
              Câu hỏi thường gặp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer