import React from "react"
import Link from "next/link"

interface Brand {
  id: number
  name: string
  logo: string
}

const BrandList: React.FC = () => {
  const brands: Brand[] = [
    { id: 1, name: "BMW", logo: "/assets/brand/bmw.png" },
    { id: 2, name: "Toyota", logo: "/assets/brand/toyota.png" },
    { id: 3, name: "Honda", logo: "/assets/brand/honda.png" },
    { id: 4, name: "Mercedes", logo: "/assets/brand/mercedes.png" },
    { id: 5, name: "Ford", logo: "/assets/brand/ford.png" },
    { id: 6, name: "Hyundai", logo: "/assets/brand/hyundai.png" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-3">
      {/* Container with responsive adjustments */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden p-3 sm:p-4">
        {/* Responsive decorative elements */}
        <div className="absolute  overflow-hidden opacity-3 sm:opacity-5">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-lg sm:blur-xl"></div>
        </div>

        {/* Responsive header */}
        <div className="relative flex justify-between items-center mb-3 sm:mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tìm xe theo thương hiệu
            </h2>
            <p className="text-gray-500 mt-1">
              Lựa chọn thương hiệu mà bạn yêu thích
            </p>
          </div>
          <Link
            href="/brands"
            className="flex items-center text-orange-500 hover:text-orange-600 text-xxs sm:text-xs font-medium transition-colors"
          >
            Xem tất cả
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 ml-0.5 sm:ml-1"
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

        {/* Responsive brand grid */}
        <div className="relative grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brand/${brand.name.toLowerCase()}`}
              className="group flex flex-col items-center p-1.5 sm:p-2 bg-white rounded-md sm:rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 border border-gray-100 hover:border-orange-200"
            >
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mb-0.5 sm:mb-1 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-200"
                />
              </div>
              <span className="text-xxs xs:text-xs font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandList