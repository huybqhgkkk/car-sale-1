import { TokenType } from "../types/auth/token"

class InMemoryTokenStore {
  private static instance: InMemoryTokenStore
  private tokens: TokenType | null = null

  private constructor() {
    if (typeof window === "undefined") {
      throw new Error("InMemoryTokenStore can only be used on the client-side")
    }
  }

  public static getInstance(): InMemoryTokenStore {
    if (typeof window === "undefined") {
      throw new Error("InMemoryTokenStore can only be used on the client-side")
    }

    if (!InMemoryTokenStore.instance) {
      InMemoryTokenStore.instance = new InMemoryTokenStore()
    }
    return InMemoryTokenStore.instance
  }

  public setTokens(tokens: TokenType): void {
    this.tokens = tokens
  }

  public getAccessToken(): string | null {
    return this.tokens?.accessToken || null
  }

  public getRefreshToken(): string | null {
    return this.tokens?.refreshToken || null
  }

  public getTokens(): TokenType | null {
    return this.tokens ? { ...this.tokens } : null
  }

  public clearTokens(): void {
    this.tokens = null
  }

  public hasTokens(): boolean {
    return !!this.tokens
  }
}

// Export singleton instance với kiểm tra client-side
export const tokenStore = (() => {
  if (typeof window !== 'undefined') {
    return InMemoryTokenStore.getInstance()
  }
  return {
    setTokens: () => console.warn('Store methods are not available on server'),
    getAccessToken: () => null,
    getRefreshToken: () => null,
    getTokens: () => null,
    clearTokens: () => {
    },
    hasTokens: () => false
  } as unknown as InMemoryTokenStore
})()