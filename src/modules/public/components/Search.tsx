"use client"
import React from "react"
import {
  CarOutlined,
  EnvironmentOutlined,
  MoneyCollectOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons"
import { Button } from "antd"
import { useSearch } from "@modules/public/hook/useSearch"
import { ModalSearch } from "@modules/public/modal/ModalSearch"

const SearchComponent: React.FC = () => {
  const { isModalVisible, showModal, handleCancel } = useSearch()

  return (
    <div className="absolute bottom-1 w-full px-4 sm:px-2 md:p-2 max-w-5xl">
      {/* Modal component */}
      <ModalSearch open={isModalVisible} onCancel={handleCancel} />

      {/* Phần giao diện chính */}
      <div className="w-full mx-auto shadow-xl">
        {/* Top bar: Orange tab + Gray info - Stack on mobile */}
        <div className="flex flex-col sm:flex-row h-auto sm:h-[60px]">
          {/* Orange tab: "Tìm xe cũ" */}
          <div
            className="bg-orange-500 text-white flex items-center justify-start text-lg sm:text-xl font-bold pl-6 pr-4 sm:pr-[30px] py-2 sm:py-0 relative"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)",
              borderTopLeftRadius: "8px",
              zIndex: 10,
              minWidth: "160px",
            }}
          >
            Tìm kiếm xe
          </div>
          {/* Gray info: Number of cars... */}
          <div
            className="bg-slate-600 text-white flex items-center sm:items-baseline justify-between sm:justify-start py-2 sm:py-3 px-4 sm:pr-6 sm:pl-[30px] flex-grow relative"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
              borderTopRightRadius: "8px",
              marginLeft: "-20px",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline">
              <span className="text-xs sm:text-sm mr-0 sm:mr-2 whitespace-nowrap">
                Số lượng xe
              </span>
              <span className="text-xl sm:text-3xl font-bold mr-0 sm:mr-1">
                517,724
              </span>
              <span className="text-xs sm:text-sm mr-0 sm:mr-3 whitespace-nowrap">
                chiếc
              </span>
            </div>
            <span className="text-xs whitespace-nowrap">Cập nhật 19/05</span>
          </div>
        </div>
        {/* Bottom bar: Filters + Search button - Stack on mobile */}
        <div
          className="flex flex-col sm:flex-row bg-white"
          style={{
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            minHeight: "80px",
          }}
        >
          {/* Filters section */}
          <div
            className="flex flex-col sm:flex-row flex-grow bg-white"
            style={{
              clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 100%, 0 100%)",
              borderBottomLeftRadius: "8px",
            }}
          >
            {/* Brand filter */}
            <div
              className="flex items-center px-4 py-3 sm:py-2 flex-1 cursor-pointer
             hover:bg-orange-50 border-b sm:border-b-0 sm:border-r border-gray-200
             transition-all duration-300 ease-out
             hover:shadow-xs hover:-translate-y-[2px]
             group active:scale-[98%]"
            >
              <CarOutlined
                className="text-orange-500 text-2xl sm:text-3xl mr-3
                         group-hover:text-orange-600
                         group-hover:scale-110
                         transition-transform duration-300"
              />
              <div className="flex-grow">
                <div
                  className="font-bold text-gray-800 text-sm sm:text-base leading-tight
                   group-hover:text-orange-700 transition-colors"
                >
                  Hãng xe
                </div>
                <div
                  className="text-xs text-gray-500 leading-tight
                   group-hover:text-gray-700 transition-colors"
                >
                  Chọn hãng xe
                </div>
              </div>
              <RightOutlined
                className="text-gray-400 ml-auto text-lg
                           group-hover:text-orange-500
                           group-hover:translate-x-1
                           transition-all duration-300"
              />
            </div>
            {/* Area filter */}
            <div
              className="flex items-center px-4 py-3 sm:py-2 flex-1 cursor-pointer
               hover:bg-orange-50 border-b sm:border-b-0 sm:border-r border-gray-200
               transition-all duration-300 ease-out
               hover:shadow-xs hover:-translate-y-[2px]
               group active:scale-[98%]"
            >
              <EnvironmentOutlined
                className="text-orange-500 text-2xl sm:text-3xl mr-3
                                group-hover:text-orange-600
                                group-hover:scale-110
                                transition-transform duration-300"
              />
              <div className="flex-grow">
                <div
                  className="font-bold text-gray-800 text-sm sm:text-base leading-tight
                   group-hover:text-orange-700 transition-colors"
                >
                  Khu vực
                </div>
                <div
                  className="text-xs text-gray-500 leading-tight
                   group-hover:text-gray-700 transition-colors"
                >
                  Chọn khu vực
                </div>
              </div>
              <RightOutlined
                className="text-gray-400 ml-auto text-lg
                           group-hover:text-orange-500
                           group-hover:translate-x-1
                           transition-all duration-300"
              />
            </div>
            {/* Price filter */}
            <div
              className="flex items-center px-4 py-3 sm:py-2 flex-1 cursor-pointer
               hover:bg-orange-50
               transition-all duration-300 ease-out
               hover:shadow-xs hover:-translate-y-[2px]
               group active:scale-[98%]"
            >
              <MoneyCollectOutlined
                className="text-orange-500 text-2xl sm:text-3xl mr-3
                                 group-hover:text-orange-600
                                 group-hover:scale-110
                                 transition-transform duration-300"
              />
              <div className="flex-grow">
                <div
                  className="font-bold text-gray-800 text-sm sm:text-base leading-tight
                   group-hover:text-orange-700 transition-colors"
                >
                  Giá
                </div>
                <div
                  className="text-xs text-gray-500 leading-tight
                   group-hover:text-gray-700 transition-colors"
                >
                  Chọn mức giá
                </div>
              </div>
              <RightOutlined
                className="text-gray-400 ml-auto text-lg
                           group-hover:text-orange-500
                           group-hover:translate-x-1
                           transition-all duration-300"
              />
            </div>
          </div>
          {/* Search button - Full width on mobile */}
          <div className="relative w-full sm:w-auto">
            <Button
              type="primary"
              className="bg-orange-500 text-white font-bold text-base sm:text-lg sm:w-min sm:h-full flex items-center justify-center hover:bg-amber-900 py-4 sm:py-0"
              style={{
                clipPath: "polygon(22px 0, 100% 0, 100% 100%, 0% 100%)",
                marginLeft: "-21px",
                paddingLeft: "calc(22px + 24px)",
                paddingRight: "24px",
                borderBottomRightRadius: "8px",
                minWidth: "190px",
              }}
              icon={<SearchOutlined />}
              onClick={showModal}
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent