"use client"
import React, { useState } from "react"
import { Button, Carousel } from "antd"
import {
  HeartFilled,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"

const BestSellingCars: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      name: "Toyota Camry 2023",
      price: "1.2 tỷ",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop",
      likes: 128,
    },
    {
      id: 2,
      name: "Honda CR-V 2023",
      price: "1.5 tỷ",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&auto=format&fit=crop",
      likes: 95,
    },
    {
      id: 3,
      name: "Ford Ranger Raptor",
      price: "1.8 tỷ",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&auto=format&fit=crop",
      likes: 156,
    },
    {
      id: 4,
      name: "Mazda CX-5",
      price: "1.1 tỷ",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop",
      likes: 87,
    },
    {
      id: 5,
      name: "Hyundai Tucson",
      price: "1.3 tỷ",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop",
      likes: 112,
    },
  ])

  // Xử lý yêu thích
  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  // Custom arrow components
  const SampleNextArrow = (props: any) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <RightOutlined className="text-orange-500" />
      </button>
    )
  }

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <LeftOutlined className="text-orange-500" />
      </button>
    )
  }

  // Cấu hình carousel
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Xe bán chạy nhất
            </h2>
            <p className="text-gray-500 mt-1">
              Những mẫu xe được ưa chuộng nhất hiện nay
            </p>
          </div>
          <Button type="primary" className="bg-orange-500 hover:bg-orange-600">
            Xem tất cả
          </Button>
        </div>

        {/* Carousel của Ant Design */}
        <Carousel arrows={true} className="custom-carousel" {...settings}>
          {bestSellers.map((car) => (
            <div key={car.id} className="px-2">
              <div className="group bg-gray-50 hover:bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-orange-300 h-full">
                {/* Cố định kích thước ảnh */}
                <div className="relative pb-[70%] overflow-hidden rounded-lg mb-3">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Nút yêu thích */}
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-2 right-2 z-10"
                  >
                    {favorites.includes(car.id) ? (
                      <HeartFilled className="text-red-500 text-xl" />
                    ) : (
                      <HeartOutlined className="text-white text-xl bg-black/30 rounded-full p-1" />
                    )}
                  </button>
                  {/* Số lượt thích */}
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {car.likes} ♥
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                  {car.name}
                </h3>
                <p className="text-orange-500 font-medium mt-1">{car.price}</p>
                <Button className="mt-3 w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default BestSellingCars