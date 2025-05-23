"use client"
import React, { useState } from "react"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const FAQSection = () => {
  // Danh sách câu hỏi và câu trả lời
  const faqItems = [
    {
      id: 1,
      question: "Làm thế nào để đăng ký lái thử xe?",
      answer:
        "Bạn có thể đăng ký lái thử trực tiếp tại website hoặc liên hệ hotline 1800-xxxx. Chúng tôi sẽ sắp xếp lịch hẹn trong vòng 24h.",
    },
    {
      id: 2,
      question: "Thời gian bảo hành xe là bao lâu?",
      answer:
        "Tất cả xe mới đều được bảo hành chính hãng 3 năm hoặc 100.000km tùy theo điều kiện nào đến trước.",
    },
    {
      id: 3,
      question: "Có hỗ trợ trả góp không?",
      answer:
        "Có, chúng tôi hợp tác với nhiều ngân hàng để cung cấp các gói vay ưu đãi với lãi suất từ 0% trong 6 tháng đầu.",
    },
    {
      id: 4,
      question: "Quy trình mua xe gồm những bước nào?",
      answer:
        "1. Đăng ký lái thử \n2. Chọn xe và phiên bản \n3. Đặt cọc \n4. Hoàn tất thủ tục \n5. Giao xe tận nơi",
    },
    {
      id: 5,
      question: "Có được đổi màu xe sau khi đặt cọc không?",
      answer:
        "Bạn có thể thay đổi màu xe trước 3 ngày so với ngày giao xe dự kiến.",
    },
    {
      id: 6,
      question: "Chính sách bảo dưỡng định kỳ?",
      answer:
        "Miễn phí bảo dưỡng lần đầu sau 1.000km hoặc 1 tháng sử dụng (tùy điều kiện nào đến trước).",
    },
  ]

  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  const buttonHover = {
    scale: 1.02,
    boxShadow: "0 4px 12px rgba(249, 115, 22, 0.2)",
    transition: { duration: 0.2 },
  }

  const buttonTap = {
    scale: 0.98,
    transition: { duration: 0.1 },
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Câu hỏi thường gặp
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-1 bg-orange-500 rounded-full mx-auto"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className={`w-full p-5 text-left flex justify-between items-center ${activeId === item.id ? "bg-orange-50" : "bg-white"}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: activeId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeId === item.id ? (
                  <MinusOutlined className="text-orange-500 text-lg" />
                ) : (
                  <PlusOutlined className="text-orange-500 text-lg" />
                )}
              </motion.div>
            </motion.button>

            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: activeId === item.id ? "auto" : 0,
                padding:
                  activeId === item.id ? "0 1.25rem 1.25rem" : "0 1.25rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 whitespace-pre-line pt-2">
                {item.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <p className="text-gray-600 mb-4">
          Không tìm thấy câu trả lời bạn cần?
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 16px rgba(249, 115, 22, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-all duration-300"
        >
          Liên hệ hỗ trợ
        </motion.button>
      </motion.div>
    </div>
  )
}

export default FAQSection