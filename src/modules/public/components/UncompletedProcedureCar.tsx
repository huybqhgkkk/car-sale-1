"use client"
import React, { useState } from "react"
import { Button, Card } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

interface Car {
  id: number
  imageUrl: string
  name: string
  price: string
  engine: string
  driveType: string
  mileage: string
  installment: string
}

const UncompletedProcedureCar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Dummy data
  const cars: Car[] = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      name: "Toyota Land Cruiser 250",
      price: "3 tỉ 200 triệu",
      engine: "3000cc",
      driveType: "4WD",
      mileage: "4567km",
      installment: "trả góp từ 500tr",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      name: "BMW X5",
      price: "4 tỉ 500 triệu",
      engine: "3500cc",
      driveType: "4WD",
      mileage: "7890km",
      installment: "trả góp từ 800tr",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
      name: "Mercedes GLE",
      price: "5 tỉ 100 triệu",
      engine: "3200cc",
      driveType: "4WD",
      mileage: "3400km",
      installment: "trả góp từ 900tr",
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1))
  }

  const currentCar = cars[currentIndex]

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Xe chưa hoàn tất thủ tục
        </h2>
        <a
          href="#"
          className="text-orange-500 hover:text-orange-600 text-sm font-medium"
          onClick={(e) => {
            e.preventDefault()
            // Handle view all click
            console.log("Xem tất cả clicked")
          }}
        >
          Xem tất cả →
        </a>
      </div>

      {/* Car card */}
      <div className="relative">
        <Card className="w-full h-[250px]">
          <div className="flex flex-col md:flex-row gap-4 h-full">
            {/* Image section - Fixed size */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center">
              <div className="w-full h-[200px] relative">
                <img
                  src={`${currentCar.imageUrl}?auto=format&fit=crop&w=400&h=200`}
                  alt={currentCar.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Info section */}
            <div className="w-full md:w-1/2 flex flex-col h-full">
              <div className="flex-grow overflow-y-auto pr-2">
                <h2 className="text-lg font-bold mb-1 line-clamp-1">
                  {currentCar.name}
                </h2>
                <div className="space-y-1 text-sm">
                  <p className="truncate">
                    <span className="font-semibold">Giá:</span>{" "}
                    {currentCar.price}
                  </p>
                  <p className="truncate">
                    <span className="font-semibold">Động cơ:</span>{" "}
                    {currentCar.engine}
                  </p>
                  <p className="truncate">
                    <span className="font-semibold">Dẫn động:</span>{" "}
                    {currentCar.driveType}
                  </p>
                  <p className="truncate">
                    <span className="font-semibold">Số km:</span>{" "}
                    {currentCar.mileage}
                  </p>
                  <p className="truncate">
                    <span className="font-semibold">Hỗ trợ:</span>{" "}
                    {currentCar.installment}
                  </p>
                </div>
              </div>
              <div className="mt-1">
                <Button
                  type="primary"
                  size="small"
                  className="w-full text-xs bg-orange-400 hover:bg-orange-500"
                >
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation buttons */}
        <Button
          shape="circle"
          size="small"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
        />
        <Button
          shape="circle"
          size="small"
          icon={<RightOutlined />}
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg"
        />

        {/* Indicator */}
        <div className="flex justify-center mt-2 space-x-1">
          {cars.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-orange-400"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UncompletedProcedureCar