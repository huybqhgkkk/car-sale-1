"use client"
import React, { useState } from "react"
import { Button, Card } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

interface Vehicle {
  vehicleName: string
  price: string
  engineCapacity: string
  drivetrain: string
  mileage: string
  installment: string
  status: string
  location: string
  imageUrl: string
}


export const PendingProcedureVehicle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVehicle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vehicleData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVehicle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicleData.length - 1 : prevIndex - 1
    );
  };

  const currentVehicle = vehicleData[currentIndex];

  return (
    <div className="relative max-w-7xl mx-auto mt-8">
      <Card className="h-[300px]">
        <div className="flex h-full">
          {/* Image Section - Bên trái với kích thước cố định */}
          <div className="w-[300px] h-full flex-shrink-0 overflow-hidden">
            <img
              src={currentVehicle.imageUrl}
              alt={currentVehicle.vehicleName}
              className="w-full h-full object-cover rounded-l"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                aspectRatio: "4/3",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Vehicle Info Section - Bên phải */}
          <div className="flex-1 ml-12 p-4 flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-2">
              {currentVehicle.vehicleName}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Giá:", value: currentVehicle.price },
                { label: "Động cơ:", value: currentVehicle.engineCapacity },
                {
                  label: "Hệ thống dẫn động:",
                  value: currentVehicle.drivetrain,
                },
                { label: "Số km đã đi:", value: currentVehicle.mileage },
                { label: "Trả góp:", value: currentVehicle.installment },
                { label: "Địa điểm:", value: currentVehicle.location },
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-semibold">{item.label}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                {currentVehicle.status}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation Arrows */}
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        onClick={prevVehicle}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-md"
      />
      <Button
        shape="circle"
        icon={<RightOutlined />}
        onClick={nextVehicle}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-md"
      />
    </div>
  )
};

const vehicleData: Vehicle[] = [
  {
    vehicleName: "Toyota Land Cruiser 250",
    price: "3.2 billion VND",
    engineCapacity: "3000cc",
    drivetrain: "4WD",
    mileage: "4,567 km",
    installment: "Installment from 500 million",
    status: "Xe chưa hoàn thành thủ tục",
    location: "Hanoi",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "Ford Ranger Raptor",
    price: "1.8 billion VND",
    engineCapacity: "2000cc",
    drivetrain: "4WD",
    mileage: "8,200 km",
    installment: "Installment from 300 million",
    status: "Xe chưa hoàn thành thủ tục",
    location: "Ho Chi Minh City",
    imageUrl: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "Mercedes GLC 300",
    price: "2.5 billion VND",
    engineCapacity: "2000cc",
    drivetrain: "AWD",
    mileage: "12,500 km",
    installment: "Installment from 400 million",
    status: "Xe chưa hoàn thành thủ tục",
    location: "Da Nang",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "Honda CR-V",
    price: "1.2 billion VND",
    engineCapacity: "1500cc",
    drivetrain: "FWD",
    mileage: "15,000 km",
    installment: "Installment from 200 million",
    status: "Xe chưa hoàn thành thủ tục",
    location: "Hai Phong",
    imageUrl: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "BMW X5",
    price: "4.5 billion VND",
    engineCapacity: "3000cc",
    drivetrain: "AWD",
    mileage: "7,800 km",
    installment: "Installment from 800 million",
    status: "Xe chưa hoàn thành thủ tục",
    location: "Can Tho",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop",
  }
];