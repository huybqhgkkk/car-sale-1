"use client"
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"
import { tokenStore } from "../../provider/InMemoryTokenStore"
import { ApiResponse, PageResponse } from "../../types/response"
import { EnvConfig } from "../../env"

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: EnvConfig.API.BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}

export class HttpClient {
  private static instance: HttpClient
  private axiosInstance: AxiosInstance
  

  private constructor() {
    if (typeof window === "undefined") {
      throw new Error("HttpClient is for client-side only")
    }
    this.axiosInstance = axios.create(DEFAULT_CONFIG)
    this.setupInterceptors()
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient()
    }
    return HttpClient.instance
  }

  private setupInterceptors() {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = tokenStore.getTokens()?.accessToken
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const oldRefreshToken = "AD"
            if (!oldRefreshToken) {
              return Promise.reject(error);
            }
            // Gọi API refresh token
            const response = await fetch(`${EnvConfig.API.BASE_URL}/api/v1/auth/refresh-token`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                refreshToken: oldRefreshToken
              }),
            }).then(response => {
              if (!response.ok) {
                throw new Error('Refresh token failed');
              }
              return response.json();
            });
            // Lưu token mới vào store
            const tokens = response.data;
            
            tokenStore.setTokens({
              accessToken: tokens.accessToken,
              refreshToken: tokens.refreshToken,
            });
            // Thử lại request gốc với token mới
            originalRequest.headers['Authorization'] = `Bearer ${tokens.accessToken}`;

            // Set token in cookie
            await fetch('/api/auth/set-token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
              }),
            });
            
            return this.axiosInstance(originalRequest);
          } catch (refreshError) {
            // Xử lý khi refresh token thất bại
            tokenStore.clearTokens();
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );
  }


  // Generic request method
  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.request<ApiResponse<T>>(config)
      return response.data
    } catch (error: any) {
      return Promise.reject(error)
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

export const axiosClient = HttpClient.getInstance()