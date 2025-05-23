import { ActiveTabType } from "../../../types/search/search"
import { Button } from "antd"
import React from "react"
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons"

export const NavigationButtons: React.FC<{
  activeTab: ActiveTabType
  onBack: () => void
  onNext: () => void
  onSearch: () => void
}> = ({ activeTab, onBack, onNext, onSearch }) => (
  <div className="flex justify-between p-4 border-t border-gray-200">
    <Button
      icon={<LeftOutlined />}
      disabled={activeTab === "brand"}
      onClick={onBack}
      className="flex items-center"
    >
      Quay lại
    </Button>
    {activeTab !== "price" ? (
      <Button
        type="primary"
        onClick={onNext}
        className="bg-orange-500 flex items-center"
      >
        Tiếp tục <RightOutlined />
      </Button>
    ) : (
      <Button
        type="primary"
        className="bg-orange-500 flex items-center"
        icon={<SearchOutlined />}
        onClick={onSearch}
      >
        Áp dụng tìm kiếm
      </Button>
    )}
  </div>
)