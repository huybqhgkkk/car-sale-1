import { getBaseURL } from "../env"
import { Metadata } from "next"
import "styles/globals.css"
import { ReactNode } from "react"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(
  props: Readonly<{ children: ReactNode }>
) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
