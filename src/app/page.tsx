import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default function Home() {
    const headersList = headers()
    const acceptLanguage = headersList.get("accept-language") || "vn"

    const locale = acceptLanguage.split(",")[0].split("-")[0] || "vn"

    // redirect(`/${locale}`)
    redirect(`vn`)
}
