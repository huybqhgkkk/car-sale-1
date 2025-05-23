import "server-only"

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"
import { getAccessToken } from "@lib/cookies"
import logger from "../../utils/debug"
import { redirect } from "next/navigation"
import { ApiResponse, PageResponse } from "types/response"
import { EnvConfig } from "../../env"


// Config mặc định
const DEFAULT_CONFIG = {
  baseURL: EnvConfig.API.BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
}

export class AxiosServer {
  private static instance: AxiosServer
  private readonly axios: AxiosInstance

  private constructor() {
    this.axios = axios.create(DEFAULT_CONFIG)
    this.setupInterceptors()
  }

  public static getInstance(): AxiosServer {
    if (!AxiosServer.instance) {
      AxiosServer.instance = new AxiosServer()
    }
    return AxiosServer.instance
  }

  private setupInterceptors() {
    // Request interceptor
    this.axios.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token =  getAccessToken()
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      async (error: any) => {
        await Promise.reject(error)
      }
    )

    // Response interceptor
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      async (error) => {
        return Promise.reject(error).then(() => {})
      }
    )
  }

  // Generic request method
  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axios.request<ApiResponse<T>>(config)
      return response.data
    } catch (error: any) {

      logger.error("An error occurred during the request:", error)
      
      const status = error.response?.status
      if (status === 401) {
        logger.error("Unauthorized access")
        return redirect("/vn/account")
      }
      if (status === 403) {
        logger.error("Forbidden access")
        return redirect("/403")
      } else {
        logger.error("Unknown error")
        return redirect("/500")
      }
    }
  }

  // GET method
  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "GET", url })
  }

  // GET with pagination
  public async getWithPagination<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<PageResponse<T>>> {
    return this.request<PageResponse<T>>({ ...config, method: "GET", url })
  }

  // POST method
  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "POST", url, data })
  }

  // PUT method
  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "PUT", url, data })
  }

  // DELETE method
  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, method: "DELETE", url })
  }
}

// Export instance
export const axiosServer = AxiosServer.getInstance()


