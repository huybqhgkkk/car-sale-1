import React, { ReactNode } from "react"
import Head from "next/head"
import Navbar from "@modules/layout/Navbar"
import Footer from "@modules/layout/Footer"

interface RootLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Ô Tô Việt - Your Trusted Car Dealer</title>
        <meta
          name="description"
          content="Ô Tô Việt offers a wide range of high-quality cars. Find your perfect car today!"
        />
        <meta
          property="og:title"
          content="Ô Tô Việt - Your Trusted Car Dealer"
        />
        <meta
          property="og:description"
          content="Ô Tô Việt offers a wide range of high-quality cars. Find your perfect car today!"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/path/to/your-thumbnail.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          name="twitter:title"
          content="Ô Tô Việt - Your Trusted Car Dealer"
        />
        <meta
          name="twitter:description"
          content="Ô Tô Việt offers a wide range of high-quality cars. Find your perfect car today!"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/path/to/your-thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Navbar />
      <div className="min-h-screen flex flex-col ">
        <div className="flex-1 flex flex-col">
          {/* Main content - now truly full width */}
          <main className="w-full  mt-[20px] sm:mt-[40px] md:mt-[60px]">
            <div className="w-full  mx-auto min-h-[75vh]">{children}</div>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}