"use client"
import { Modal } from "antd"
import {
  CarOutlined,
  EnvironmentOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons"
import React, { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { ContentSearchModal } from "./ContentSearchModal"
import { ActiveTabType, ModalSearchProps } from "../../../types/search/search"
import { AREAS, BRANDS, PRICE_RANGES } from "@lib/mockdata/data"
import { TabHeader } from "@modules/public/components/TabHeader"
import { NavigationButtons } from "@modules/public/components/NavigationButtons"

export const ModalSearch: React.FC<ModalSearchProps> = ({ open, onCancel }) => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("brand")
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null)
  const [selectedArea, setSelectedArea] = useState<number | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null)
  const [selectedModel, setSelectedModel] = useState<number | null>(null)

  const handleTabChange = (tab: ActiveTabType) => {
    setActiveTab(tab)
  }

  const handleSelectModel = (id: number | null) => {
    setSelectedModel(id)
  }

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      width="80%"
      className="!max-w-[900px]"
      closeIcon={
        <div className="absolute -right-10 -top-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-gray-200 transition-colors duration-150 shadow-lg">
          <FaTimes className="text-lg text-gray-600 hover:text-black" />
        </div>
      }
    >
      <div className="flex flex-col">
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row bg-white rounded-t-lg overflow-hidden -mx-6 -mt-6">
          <TabHeader
            icon={<CarOutlined />}
            title="Hãng xe"
            value={
              selectedBrand
                ? BRANDS.find((b) => b.id === selectedBrand)?.name
                : "Chọn hãng xe"
            }
            isActive={activeTab === "brand"}
            onClick={() => handleTabChange("brand")}
          />
          <TabHeader
            icon={<EnvironmentOutlined />}
            title="Khu vực"
            value={
              selectedArea
                ? AREAS.find((a) => a.id === selectedArea)?.name
                : "Chọn khu vực"
            }
            isActive={activeTab === "area"}
            onClick={() => handleTabChange("area")}
          />
          <TabHeader
            icon={<MoneyCollectOutlined />}
            title="Giá"
            value={
              selectedPrice
                ? PRICE_RANGES.find((p) => p.id === selectedPrice)?.range
                : "Chọn mức giá"
            }
            isActive={activeTab === "price"}
            onClick={() => handleTabChange("price")}
          />
        </div>

        {/* Content */}
        <ContentSearchModal
          activeTab={activeTab}
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          selectedArea={selectedArea}
          selectedPrice={selectedPrice}
          onSelectBrand={setSelectedBrand}
          onSelectArea={setSelectedArea}
          onSelectPrice={setSelectedPrice}
          onSelectModel={handleSelectModel}
          brands={BRANDS}
          areas={AREAS}
          priceRanges={PRICE_RANGES}
        />

        {/* Navigation buttons */}
        <NavigationButtons
          activeTab={activeTab}
          onBack={() => {
            if (activeTab === "area") setActiveTab("brand")
            if (activeTab === "price") setActiveTab("area")
          }}
          onNext={() => {
            if (activeTab === "brand") setActiveTab("area")
            if (activeTab === "area") setActiveTab("price")
          }}
          onSearch={onCancel}
        />
      </div>
    </Modal>
  )
}

// Sub-components
