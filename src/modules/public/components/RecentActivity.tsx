"use client"
import React from "react"
import {
  CarOutlined,
  CloseOutlined,
  HistoryOutlined,
  InboxOutlined,
} from "@ant-design/icons"
import { Button, Divider, Empty } from "antd"
import Link from "next/link"

const RecentActivity = () => {
  // Dummy data - replace with actual data from your state/API
  const viewedCars = [
    {
      id: 1,
      name: "Toyota Camry 2023",
      price: "1.2 tỷ",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&auto=format&fit=crop",
      viewedAt: "10 phút trước",
    },
    {
      id: 2,
      name: "Honda CR-V 2022",
      price: "950 triệu",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=300&auto=format&fit=crop",
      viewedAt: "1 giờ trước",
    },
    {
      id: 3,
      name: "Ford Ranger Raptor",
      price: "1.5 tỷ",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=300&auto=format&fit=crop",
      viewedAt: "2 ngày trước",
    },
  ]

  const searchHistory = [
    { id: 1, query: "Toyota Camry dưới 1 tỷ", date: "Hôm nay" },
    { id: 2, query: "Xe SUV 7 chỗ", date: "Hôm qua" },
    { id: 3, query: "Mercedes C200 cũ", date: "2 ngày trước" },
    { id: 4, query: "Xe trả góp 0%", date: "Tuần trước" },
  ]

  const handleRemoveViewed = (id: number) => {
    // Add your removal logic here
    console.log("Remove viewed car:", id)
  }

  const handleRemoveSearchItem = (id: number) => {
    // Add your removal logic here
    console.log("Remove search item:", id)
  }

  const handleClearSearchHistory = () => {
    // Add your clear history logic here
    console.log("Clear search history")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recently Viewed Cars - Left Side */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <div className="p-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 mr-3">
                <CarOutlined className="text-orange-500 text-lg" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                Xe vừa xem
              </span>
            </h3>
            {viewedCars.length > 0 && (
              <Button
                type="text"
                className="text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
              >
                Xem tất cả
              </Button>
            )}
          </div>
          {viewedCars.length > 0 ? (
            <div className="space-y-4">
              {viewedCars.map((car) => (
                <div
                  key={car.id}
                  className="group flex items-center p-3 hover:bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg transition-all duration-300 border border-transparent hover:border-orange-200 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 w-20 h-20 mr-4 overflow-hidden rounded-lg relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                  <div className="flex-grow">
                    <Link href={`/xe/${car.id}`}>
                      <h4 className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {car.name}
                      </h4>
                    </Link>
                    <p className="text-orange-500 font-semibold group-hover:text-amber-600 transition-colors duration-300">
                      {car.price}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {car.viewedAt}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveViewed(car.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-1 hover:bg-orange-100 rounded-full"
                  >
                    <CloseOutlined />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
              <Empty
                image={<CarOutlined className="text-6xl text-orange-300" />}
                imageStyle={{ height: 80 }}
                description={
                  <span className="text-gray-500">
                    Bạn chưa xem xe nào gần đây.
                    <br />
                    <Link
                      href="/tim-kiem"
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Khám phá xe ngay!
                    </Link>
                  </span>
                }
              />
            </div>
          )}
        </div>

        {/* Search History - Right Side */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <div className="p-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 mr-3">
                <HistoryOutlined className="text-orange-500 text-lg" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                Lịch sử tìm kiếm
              </span>
            </h3>
            {searchHistory.length > 0 && (
              <Button
                type="text"
                className="text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
                onClick={handleClearSearchHistory}
              >
                Xóa lịch sử
              </Button>
            )}
          </div>
          {searchHistory.length > 0 ? (
            <div className="space-y-3">
              {searchHistory.map((item) => (
                <div
                  key={item.id}
                  className="group flex justify-between items-center p-3 hover:bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg transition-all duration-300 border border-transparent hover:border-orange-200 hover:shadow-sm"
                >
                  <Link
                    href={`/tim-kiem?q=${encodeURIComponent(item.query)}`}
                    className="flex-grow"
                  >
                    <p className="text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {item.query}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {item.date}
                    </p>
                  </Link>
                  <button
                    onClick={() => handleRemoveSearchItem(item.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 p-1 hover:bg-orange-100 rounded-full"
                  >
                    <CloseOutlined />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
              <Empty
                image={<InboxOutlined className="text-6xl text-orange-300" />}
                imageStyle={{ height: 80 }}
                description={
                  <span className="text-gray-500">
                    Lịch sử tìm kiếm của bạn trống.
                  </span>
                }
              />
            </div>
          )}
          <Divider className="my-4 border-gray-200" />
          <div className="text-center mt-auto">
            <Button
              type="primary"
              ghost
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-gradient-to-r from-orange-500 to-amber-500 hover:border-transparent transition-all duration-300 font-medium"
            >
              Tìm kiếm nâng cao
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity