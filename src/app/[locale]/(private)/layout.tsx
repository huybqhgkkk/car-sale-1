import type { ReactNode } from "react"
import PageLayout from "@modules/layout/PageLayout"
import { ConfigProvider } from "antd"
import theme from "../../../styles/theme"

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <ConfigProvider theme={theme}>
                <PageLayout>{children}</PageLayout>
            </ConfigProvider>
        </>
    )
}
