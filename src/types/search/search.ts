// types.ts
export interface Brand {
  id: number
  name: string
  logo: string
}

export interface Area {
  id: number
  name: string
}

export interface PriceRange {
  id: number
  range: string
  min: number
  max: number
}

export type ActiveTabType = "brand" | "area" | "price"

export interface ModalSearchProps {
  open: boolean
  onCancel: () => void
}

export interface Model {
  id: number
  name: string
  imageUrl: string
}