"use client"
import { useEffect } from "react"
import { tokenStore } from "./InMemoryTokenStore"
import { TokenType } from "../types/auth/token"

export const AuthProvider = ({
  children,
  serverTokens,
}: {
  children: React.ReactNode
  serverTokens?: TokenType
}) => {
  // Pass the serverTokens as a prop to the AuthProvider
  if (serverTokens) {
    tokenStore.setTokens(serverTokens)
  }

  useEffect(() => {
    if (serverTokens) {
      tokenStore.setTokens(serverTokens)
      return
    }
  }, [serverTokens])
  return children
}