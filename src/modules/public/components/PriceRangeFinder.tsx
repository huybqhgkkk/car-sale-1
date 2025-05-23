import React from "react"
import Link from "next/link"

const PriceRangeFinder: React.FC = () => {
  // Danh sách các khoảng giá
  const priceRanges = [
    { id: 1, range: "Dưới 300 triệu", slug: "duoi-300-trieu" },
    { id: 2, range: "300 - 500 triệu", slug: "300-500-trieu" },
    { id: 3, range: "500 - 700 triệu", slug: "500-700-trieu" },
    { id: 4, range: "700 - 900 triệu", slug: "700-900-trieu" },
    { id: 5, range: "900 triệu - 1 tỉ", slug: "900-trieu-1-ti" },
    { id: 6, range: "1 - 2 tỉ", slug: "1-2-ti" },
    { id: 7, range: "2 - 3 tỉ", slug: "2-3-ti" },
    { id: 8, range: "3 - 5 tỉ", slug: "3-5-ti" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tìm xe theo mức giá
            </h2>
            <p className="text-gray-500 mt-1">
              Lựa chọn khoảng giá phù hợp với nhu cầu của bạn
            </p>
          </div>
          <Link
            href="/price-ranges"
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

        {/* Price range grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {priceRanges.map((price) => (
            <Link
              key={price.id}
              href={`/price-range/${price.slug}`}
              className="group relative overflow-hidden bg-gray-50 hover:bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-orange-300"
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {price.range}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {price.id <= 4
                    ? "Giá bình dân"
                    : price.id <= 6
                      ? "Tầm trung"
                      : "Cao cấp"}
                </span>
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

export default PriceRangeFinder