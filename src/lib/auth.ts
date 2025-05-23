import { ApiResponse } from "../types/response"

export const isSuccessAndHasData = <T>(
  response: ApiResponse<T>
): response is ApiResponse<T> & { data: T } => {
  return (
    response &&
    response.result.statusCode === "SUCCESS" &&
    response.data !== undefined
  )
}

export const isSuccessAndHasNoData = <T>(
  response: ApiResponse<T>
): response is ApiResponse<T> => {
  return (
    response &&
    response.result.statusCode === "SUCCESS" &&
    response.data === undefined
  )
}

export const isError = <T>(
  response: ApiResponse<T>
): response is ApiResponse<T> => {
  return response && response.result.statusCode !== "SUCCESS"
}
