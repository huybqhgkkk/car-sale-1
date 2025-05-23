export interface ErrorValidation {
  name: string
  messages: string
  errorCode: string
}

export interface ApiResult {
  statusCode: string
  errorMessage: string
  errorValidation?: ErrorValidation[]
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface PageResponse<T> {
  pageable: Pageable
  content: T[]
}

export interface ApiResponse<T = any> {
  result: ApiResult
  data?: T
}