export interface TokenResponse {
  accessToken: string
  refreshToken: string
  expiresIn?: number
  mfaEnabled?: boolean
  emailVerified?: boolean
}

export interface LoginRequest {
  usernameOrEmail: string
  password: string
}
