import React, { useState } from "react"
import { LeftOutlined } from "@ant-design/icons"
import {
  ActiveTabType,
  Area,
  Brand,
  Model,
  PriceRange,
} from "../../../types/search/search"
import { MODELS_BY_BRAND } from "@lib/mockdata/data"

interface ContentSearchModalProps {
  activeTab: ActiveTabType
  selectedBrand: number | null
  selectedModel: number | null
  selectedArea: number | null
  selectedPrice: number | null
  onSelectBrand: (id: number) => void
  onSelectModel: (id: number | null) => void
  onSelectArea: (id: number) => void
  onSelectPrice: (id: number) => void
  brands: Brand[]
  areas: Area[]
  priceRanges: PriceRange[]
}

export const ContentSearchModal: React.FC<ContentSearchModalProps> = ({
  activeTab,
  selectedBrand,
  selectedModel,
  selectedArea,
  selectedPrice,
  onSelectBrand,
  onSelectModel,
  onSelectArea,
  onSelectPrice,
  brands,
  areas,
  priceRanges,
}) => {
  const [showModels, setShowModels] = useState(false)
  const currentModels = selectedBrand
    ? MODELS_BY_BRAND[selectedBrand] || []
    : []

  const handleBrandSelect = (id: number) => {
    onSelectBrand(id)
    onSelectModel(null) // Reset model selection
    setShowModels(true)
  }

  const handleBackToBrands = () => {
    setShowModels(false)
  }

  const renderContent = () => {
    if (showModels && selectedBrand) {
      return (
        <div className="flex flex-col h-full">
          <div className="flex items-center p-4 border-b">
            <button
              onClick={handleBackToBrands}
              className="flex items-center text-orange-500 hover:text-orange-700 mr-4"
            >
              <LeftOutlined className="mr-1" />
              Back to brands
            </button>
            <h3 className="font-medium text-lg">
              {brands.find((b) => b.id === selectedBrand)?.name} Models
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 overflow-y-auto">
            {currentModels.length > 0 ? (
              currentModels.map((model) => (
                <ModelItem
                  key={model.id}
                  model={model}
                  isSelected={selectedModel === model.id}
                  onSelect={onSelectModel}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-8">
                No models available for this brand
              </div>
            )}
          </div>
        </div>
      )
    }

    switch (activeTab) {
      case "brand":
        return (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 p-6">
            {brands.map((brand) => (
              <BrandItem
                key={brand.id}
                brand={brand}
                isSelected={selectedBrand === brand.id}
                onSelect={handleBrandSelect}
              />
            ))}
          </div>
        )

      case "area":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6">
            {areas.map((area) => (
              <AreaItem
                key={area.id}
                area={area}
                isSelected={selectedArea === area.id}
                onSelect={onSelectArea}
              />
            ))}
          </div>
        )

      case "price":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6">
            {priceRanges.map((price) => (
              <PriceItem
                key={price.id}
                price={price}
                isSelected={selectedPrice === price.id}
                onSelect={onSelectPrice}
              />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return <div className="flex-1 overflow-y-auto">{renderContent()}</div>
}

// Brand Item Component
const BrandItem: React.FC<{
  brand: Brand
  isSelected: boolean
  onSelect: (id: number) => void
}> = ({ brand, isSelected, onSelect }) => (
  <div
    className={`relative aspect-square flex flex-col items-center justify-between p-2 rounded-xl cursor-pointer transition-all duration-200
      ${
        isSelected
          ? "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 shadow-md shadow-orange-100"
          : "bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md hover:shadow-orange-50"
      }`}
    onClick={() => onSelect(brand.id)}
  >
    {isSelected && <CheckMark />}
    <div className="flex-1 flex items-center justify-center w-full">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <div className="w-full text-center truncate px-1">
      <span className="font-medium text-xs text-gray-800">{brand.name}</span>
    </div>
  </div>
)

// Model Item Component

// Then update the ModelItem component:
const ModelItem: React.FC<{
  model: Model
  isSelected: boolean
  onSelect: (id: number) => void
}> = ({ model, isSelected, onSelect }) => (
  <div
    className={`flex flex-col border rounded-lg cursor-pointer transition-all duration-200 overflow-hidden
      ${
        isSelected
          ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-100"
          : "border-gray-200 hover:border-orange-300 hover:shadow-md hover:shadow-orange-50"
      }`}
    onClick={() => onSelect(model.id)}
  >
    <div className="aspect-video bg-gray-100 overflow-hidden">
      <img
        src={model.imageUrl}
        alt={model.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          ;(e.target as HTMLImageElement).src = "/images/placeholder-car.jpg"
        }}
      />
    </div>
    <div className="p-3">
      <div className="font-medium text-sm text-center">{model.name}</div>
      {isSelected && (
        <div className="text-orange-500 text-xs text-center mt-1">Selected</div>
      )}
    </div>
  </div>
)

// Area Item Component
const AreaItem: React.FC<{
  area: Area
  isSelected: boolean
  onSelect: (id: number) => void
}> = ({ area, isSelected, onSelect }) => (
  <div
    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200
      ${
        isSelected
          ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-100"
          : "border-gray-200 hover:border-orange-300 hover:shadow-md hover:shadow-orange-50"
      }`}
    onClick={() => onSelect(area.id)}
  >
    <div className="font-medium text-sm text-center">{area.name}</div>
  </div>
)

// Price Item Component
const PriceItem: React.FC<{
  price: PriceRange
  isSelected: boolean
  onSelect: (id: number) => void
}> = ({ price, isSelected, onSelect }) => (
  <div
    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200
      ${
        isSelected
          ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-100"
          : "border-gray-200 hover:border-orange-300 hover:shadow-md hover:shadow-orange-50"
      }`}
    onClick={() => onSelect(price.id)}
  >
    <div className="font-medium text-sm text-center">{price.range}</div>
  </div>
)

// CheckMark Component
const CheckMark = () => (
  <div className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white rounded-full p-0.5 z-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)