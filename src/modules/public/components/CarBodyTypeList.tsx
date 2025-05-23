import React from "react"
import Link from "next/link"
import {
  FaCar,
  FaCarAlt,
  FaCarCrash,
  FaCarSide,
  FaShuttleVan,
  FaTruckPickup,
} from "react-icons/fa"
import { FaVanShuttle } from "react-icons/fa6"

const CarBodyTypeList: React.FC = () => {
  // Danh sách kiểu dáng xe với icon tương ứng
  const bodyTypes = [
    {
      id: 1,
      name: "SUV",
      slug: "suv",
      icon: <FaCarAlt className="text-xl sm:text-2xl" />,
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100",
    },
    {
      id: 2,
      name: "Sedan",
      slug: "sedan",
      icon: <FaCar className="text-xl sm:text-2xl" />,
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100",
    },
    {
      id: 3,
      name: "Hatchback",
      slug: "hatchback",
      icon: <FaCarSide className="text-xl sm:text-2xl" />,
      bgColor: "bg-yellow-50",
      hoverBgColor: "hover:bg-yellow-100",
    },
    {
      id: 4,
      name: "Pickup",
      slug: "pickup",
      icon: <FaTruckPickup className="text-xl sm:text-2xl" />,
      bgColor: "bg-red-50",
      hoverBgColor: "hover:bg-red-100",
    },
    {
      id: 5,
      name: "MPV",
      slug: "mpv",
      icon: <FaVanShuttle className="text-xl sm:text-2xl" />,
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100",
    },
    {
      id: 6,
      name: "Coupe",
      slug: "coupe",
      icon: <FaCarCrash className="text-xl sm:text-2xl" />,
      bgColor: "bg-pink-50",
      hoverBgColor: "hover:bg-pink-100",
    },
    {
      id: 7,
      name: "Convertible",
      slug: "convertible",
      icon: <FaCar className="text-xl sm:text-2xl" />,
      bgColor: "bg-indigo-50",
      hoverBgColor: "hover:bg-indigo-100",
    },
    {
      id: 8,
      name: "Minivan",
      slug: "minivan",
      icon: <FaShuttleVan className="text-xl sm:text-2xl" />,
      bgColor: "bg-teal-50",
      hoverBgColor: "hover:bg-teal-100",
    },
    {
      id: 9,
      name: "Wagon",
      slug: "wagon",
      icon: <FaCarSide className="text-xl sm:text-2xl" />,
      bgColor: "bg-amber-50",
      hoverBgColor: "hover:bg-amber-100",
    },
    {
      id: 10,
      name: "Crossover",
      slug: "crossover",
      icon: <FaCarAlt className="text-xl sm:text-2xl" />,
      bgColor: "bg-lime-50",
      hoverBgColor: "hover:bg-lime-100",
    },
    {
      id: 11,
      name: "Electric",
      slug: "electric",
      icon: <FaCar className="text-xl sm:text-2xl" />,
      bgColor: "bg-emerald-50",
      hoverBgColor: "hover:bg-emerald-100",
    },
    {
      id: 12,
      name: "Hybrid",
      slug: "hybrid",
      icon: <FaCar className="text-xl sm:text-2xl" />,
      bgColor: "bg-cyan-50",
      hoverBgColor: "hover:bg-cyan-100",
    },
    {
      id: 13,
      name: "Luxury",
      slug: "luxury",
      icon: <FaCarAlt className="text-xl sm:text-2xl" />,
      bgColor: "bg-violet-50",
      hoverBgColor: "hover:bg-violet-100",
    },
    {
      id: 14,
      name: "Sports",
      slug: "sports",
      icon: <FaCarCrash className="text-xl sm:text-2xl" />,
      bgColor: "bg-fuchsia-50",
      hoverBgColor: "hover:bg-fuchsia-100",
    },
    {
      id: 15,
      name: "Classic",
      slug: "classic",
      icon: <FaCarSide className="text-xl sm:text-2xl" />,
      bgColor: "bg-rose-50",
      hoverBgColor: "hover:bg-rose-100",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Tìm xe theo kiểu dáng
          </h2>
          <Link
            href="/body-types"
            className="flex items-center text-orange-500 hover:text-orange-600 text-xs sm:text-sm font-medium"
          >
            Xem tất cả
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 ml-1"
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
          {bodyTypes.map((type) => (
            <Link
              key={type.id}
              href={`/body-type/${type.slug}`}
              className={`group flex flex-col items-center p-3 sm:p-4 ${type.bgColor} ${type.hoverBgColor} rounded-xl border border-gray-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-md`}
            >
              <div className="text-orange-500 group-hover:text-orange-600 mb-2 sm:mb-3">
                {type.icon}
              </div>
              <span className="font-semibold text-gray-800 group-hover:text-orange-600 text-center text-sm sm:text-base">
                {type.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarBodyTypeList