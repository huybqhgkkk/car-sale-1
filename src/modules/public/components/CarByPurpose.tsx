import React from "react"
import Link from "next/link"
import {
  FaBriefcase,
  FaCarSide,
  FaCrown,
  FaRunning,
  FaUmbrellaBeach,
} from "react-icons/fa"

const CarByPurpose: React.FC = () => {
  const purposes = [
    {
      id: 1,
      name: "Xe gia đình",
      slug: "xe-gia-dinh",
      icon: <FaCarSide className="text-2xl" />,
      description: "Đa dụng, rộng rãi cho cả gia đình",
    },
    {
      id: 2,
      name: "Xe thể thao",
      slug: "xe-the-thao",
      icon: <FaRunning className="text-2xl" />,
      description: "Mạnh mẽ, động cơ hiệu suất cao",
    },
    {
      id: 3,
      name: "Xe du lịch",
      slug: "xe-du-lich",
      icon: <FaUmbrellaBeach className="text-2xl" />,
      description: "Tiện nghi, thoải mái đường dài",
    },
    {
      id: 4,
      name: "Xe công sở",
      slug: "xe-cong-so",
      icon: <FaBriefcase className="text-2xl" />,
      description: "Lịch lãm, phù hợp công việc",
    },
    {
      id: 5,
      name: "Xe cao cấp",
      slug: "xe-cao-cap",
      icon: <FaCrown className="text-2xl" />,
      description: "Sang trọng, đẳng cấp",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tìm xe theo nhu cầu
            </h2>
            <p className="text-gray-500 mt-1">
              Lựa chọn xe phù hợp với mục đích sử dụng
            </p>
          </div>
          <Link
            href="/by-purpose"
            className="flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors hover:scale-105 duration-200"
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

        {/* Purpose grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {purposes.map((purpose) => (
            <Link
              key={purpose.id}
              href={`/purpose/${purpose.slug}`}
              className="group flex flex-col items-center p-6 bg-gray-50 rounded-xl transition-all duration-300 border border-gray-200 relative overflow-hidden"
            >
              {/* Hiệu ứng background hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hiệu ứng shadow */}
              <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hiệu ứng border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300 transition-all duration-300 rounded-xl"></div>

              {/* Nội dung */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-200 mb-4 transition-colors group-hover:scale-110 duration-300">
                  {purpose.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 mb-1 text-center transition-colors duration-300 group-hover:translate-y-1">
                  {purpose.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 text-center transition-colors duration-300">
                  {purpose.description}
                </p>
              </div>

              {/* Hiệu ứng nổi lên */}
              <div className="absolute inset-0 group-hover:-translate-y-2 transition-transform duration-300 z-0"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarByPurpose