"use client"
import React from "react"
import { motion } from "framer-motion"
import {
  BookOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  ToolOutlined,
} from "@ant-design/icons"

const ServicesSection = () => {
  // Danh sách dịch vụ
  const services = [
    {
      id: 1,
      title: "Dịch vụ Car Marketing",
      description:
        "Tiếp cận khách hàng mục tiêu với chiến dịch marketing chuyên nghiệp dành riêng cho dòng xe của bạn",
      icon: <CarOutlined className="text-3xl" />,
    },
    {
      id: 2,
      title: "Dịch vụ sửa xe",
      description:
        "Đội ngũ kỹ thuật viên lành nghề với trang thiết bị hiện đại đảm bảo sửa chữa nhanh chóng, chính xác",
      icon: <ToolOutlined className="text-3xl" />,
    },
    {
      id: 3,
      title: "Dịch vụ kiểm tra xe cũ",
      description:
        "Kiểm tra 150 điểm với báo cáo chi tiết, giúp bạn mua bán xe cũ minh bạch và an toàn",
      icon: <SafetyCertificateOutlined className="text-3xl" />,
    },
    {
      id: 4,
      title: "Dịch vụ đào tạo lái xe",
      description:
        "Khóa học lái xe chuyên nghiệp với giáo trình chuẩn quốc tế và hệ thống sân tập hiện đại",
      icon: <BookOutlined className="text-3xl" />,
    },
  ]

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const hoverEffect = {
    y: -10,
    boxShadow: "0 10px 25px rgba(249, 115, 22, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-4">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-3"
        >
          Dịch Vụ Của Chúng Tôi
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-1 bg-orange-500 rounded-full mx-auto"
        />
      </div>

      {/* Services grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            whileHover={hoverEffect}
            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
          >
            <div className="p-6 text-center">
              {/* Icon with gradient background */}
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-5"
              >
                {React.cloneElement(service.icon, {
                  className: "text-orange-500 text-2xl",
                })}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f97316", // orange-500
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-orange-400 text-white rounded-full text-sm font-medium"
              >
                Xem chi tiết
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 mb-5">Bạn cần tư vấn về dịch vụ?</p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(249, 115, 22, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-orange-500 text-white rounded-full text-base font-medium shadow-md"
        >
          Liên hệ ngay
        </motion.button>
      </motion.div>
    </div>
  )
}

export default ServicesSection