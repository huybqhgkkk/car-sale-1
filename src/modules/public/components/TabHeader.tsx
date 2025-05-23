import React from "react"
import { RightOutlined } from "@ant-design/icons"

export const TabHeader: React.FC<{
  icon: React.ReactNode
  title: string
  value: string | undefined
  isActive: boolean
  onClick: () => void
}> = ({ icon, title, value, isActive, onClick }) => (
  <div
    className={`flex items-center px-4 py-3 flex-1 cursor-pointer border-b sm:border-b-0 sm:border-r border-gray-200 transition-all ${
      isActive ? "bg-orange-50" : "hover:bg-orange-50"
    }`}
    onClick={onClick}
  >
    <div
      className={`text-2xl sm:text-3xl mr-3 ${
        isActive ? "text-orange-600" : "text-orange-500"
      }`}
    >
      {icon}
    </div>
    <div className="flex-grow">
      <div
        className={`font-bold text-sm sm:text-base leading-tight ${
          isActive ? "text-orange-700" : "text-gray-800"
        }`}
      >
        {title}
      </div>
      <div
        className={`text-xs leading-tight ${
          isActive ? "text-orange-600" : "text-gray-500"
        }`}
      >
        {value}
      </div>
    </div>
    <RightOutlined
      className={`ml-auto text-lg ${
        isActive ? "text-orange-500" : "text-gray-400"
      }`}
    />
  </div>
)