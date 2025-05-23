import { ApiResponse } from "./response"

export class CommonApiError<T = any> extends Error {
  constructor(public response: ApiResponse<T>) {
    super(response.result.errorMessage)
    this.name = "ApiError"
  }
}
