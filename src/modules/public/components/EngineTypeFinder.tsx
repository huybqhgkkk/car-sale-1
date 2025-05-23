import React from "react"
import Link from "next/link"
import { FaBolt, FaCarAlt, FaGasPump, FaOilCan } from "react-icons/fa"
import { GiAutoRepair } from "react-icons/gi"

const EngineTypeFinder: React.FC = () => {
  // Danh sách các loại động cơ
  const engineTypes = [
    {
      id: 1,
      name: "Động cơ xăng",
      slug: "dong-co-xang",
      icon: <FaGasPump className="text-xl sm:text-2xl text-orange-500" />,
      description: "Tiết kiệm chi phí vận hành",
    },
    {
      id: 2,
      name: "Động cơ dầu",
      slug: "dong-co-dau",
      icon: <FaOilCan className="text-xl sm:text-2xl text-orange-500" />,
      description: "Mô-men xoắn cao, bền bỉ",
    },
    {
      id: 3,
      name: "Động cơ điện",
      slug: "dong-co-dien",
      icon: <FaBolt className="text-xl sm:text-2xl text-orange-500" />,
      description: "Thân thiện môi trường",
    },
    {
      id: 4,
      name: "Động cơ hybrid",
      slug: "dong-co-hybrid",
      icon: <FaCarAlt className="text-xl sm:text-2xl text-orange-500" />,
      description: "Kết hợp xăng và điện",
    },
    {
      id: 5,
      name: "Động cơ khác",
      slug: "dong-co-khac",
      icon: <GiAutoRepair className="text-xl sm:text-2xl text-orange-500" />,
      description: "Các loại động cơ đặc biệt",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tìm xe theo kiểu động cơ
            </h2>
            <p className="text-gray-500 mt-1">
              Lựa chọn kiểu động cơ phù hợp với nhu cầu của bạn
            </p>
          </div>
          <Link
            href="/engine-types"
            className="flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
          >
            Xem tất cả
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Engine type grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {engineTypes.map((engine) => (
            <Link
              key={engine.id}
              href={`/engine-type/${engine.slug}`}
              className="group relative overflow-hidden bg-gray-50 hover:bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-orange-300"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                    {engine.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {engine.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{engine.description}</p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EngineTypeFinder