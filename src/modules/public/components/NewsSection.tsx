"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"

import { motion } from "framer-motion"

const NewsSection: React.FC = () => {
  // News data
  const featuredNews = {
    id: 1,
    title: "Toyota ra mắt dòng xe điện mới với công nghệ đột phá",
    excerpt:
      "Dòng xe điện Toyota mới hứa hẹn mang lại trải nghiệm lái vượt trội với phạm vi hoạt động lên đến 500km mỗi lần sạc.",
    date: "15/06/2023",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww?w=800&auto=format&fit=crop",
    isFeatured: true,
  }

  const newsList = [
    {
      id: 2,
      title: "Honda giới thiệu công nghệ an toàn mới cho dòng SUV 2024",
      date: "12/06/2023",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Xu hướng thiết kế nội thất xe hơi năm 2023",
      date: "10/06/2023",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Đánh giá chi tiết Mazda CX-5 2023: Đáng giá từng đồng",
      date: "08/06/2023",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "5 công nghệ xe hơi đáng mong đợi nhất nửa cuối năm",
      date: "05/06/2023",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "VinFast công bố kế hoạch mở rộng thị trường châu Âu",
      date: "03/06/2023",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "BMW ra mắt phiên bản mới với hệ thống lái tự động cải tiến",
      date: "01/06/2023",
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Mercedes-Benz giới thiệu dòng xe điện hoàn toàn mới",
      date: "28/05/2023",
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "VinFast công bố kế hoạch mở rộng thị trường châu Âu",
      date: "03/06/2023",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop",
    },
    {
      id: 10,
      title: "5 công nghệ xe hơi đáng mong đợi nhất nửa cuối năm",
      date: "05/06/2023",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop",
    },
  ]

  // Carousel implementation
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const slideInterval = useRef<NodeJS.Timeout>()

  // Group news into chunks of 4 (2x2 grid)
  const chunkSize = 4
  const newsChunks = []
  for (let i = 0; i < newsList.length; i += chunkSize) {
    newsChunks.push(newsList.slice(i, i + chunkSize))
  }

  // Auto-scroll effect
  useEffect(() => {
    if (autoScroll && newsChunks.length > 1) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % newsChunks.length)
      }, 5000)
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current)
    }
  }, [autoScroll, newsChunks.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoScroll(false)
    if (slideInterval.current) clearInterval(slideInterval.current)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  const nextSlide = () => goToSlide((currentSlide + 1) % newsChunks.length)
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + newsChunks.length) % newsChunks.length)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-900 mb-1"
          >
            Tin tức
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-orange-500 rounded-full"
          />
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Featured news */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Link
              href={`/tin-tuc/${featuredNews.id}`}
              className="group block h-full rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-full bg-gray-50 hover:bg-gradient-to-br from-orange-50 to-amber-50 border border-gray-200 hover:border-orange-300 rounded-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-32 sm:h-36 w-full overflow-hidden">
                  <motion.img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold text-gray-800 group-hover:text-orange-600 mb-1 transition-colors duration-300 line-clamp-2">
                    {featuredNews.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarOutlined className="mr-1 text-xs" />
                    <span>{featuredNews.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* News carousel */}
          <div className="lg:col-span-2 relative">
            {/* Navigation arrows */}
            {newsChunks.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110"
                >
                  <LeftOutlined className="text-orange-500" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110"
                >
                  <RightOutlined className="text-orange-500" />
                </button>
              </>
            )}

            {/* Carousel container */}
            <div ref={carouselRef} className="overflow-hidden relative h-full">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newsChunks.map((chunk, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {chunk.map((news) => (
                        <motion.div
                          key={news.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Link
                            href={`/tin-tuc/${news.id}`}
                            className="group relative bg-gray-50 hover:bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-gray-200 hover:border-orange-300 p-3 transition-all duration-300 overflow-hidden h-full block"
                          >
                            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            <div className="flex h-full">
                              <div className="flex-shrink-0 w-20 h-20 mr-3 overflow-hidden rounded-lg">
                                <motion.img
                                  src={news.image}
                                  alt={news.title}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                                  {news.title}
                                </h4>
                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                  <CalendarOutlined className="mr-1 text-xs" />
                                  <span>{news.date}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            {newsChunks.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {newsChunks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-orange-500 w-6" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-6"
        >
          <Link
            href="/tin-tuc"
            className="flex items-center justify-center px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            Xem tất cả tin tức
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NewsSection