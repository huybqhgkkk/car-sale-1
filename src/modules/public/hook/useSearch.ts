import { useState } from "react"

export const useSearch = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return {
    isModalVisible,
    showModal,
    handleCancel,
  }
}