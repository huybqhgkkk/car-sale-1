import { Area, Brand, Model, PriceRange } from "../../types/search/search"

export const vehicleData = [
  {
    vehicleName: "Toyota Land Cruiser 250",
    price: "3.2 billion VND",
    engineCapacity: "3000cc",
    drivetrain: "4WD",
    mileage: "4,567 km",
    installment: "Installment from 500 million",
    status: "Pending procedure",
    location: "Hanoi",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "Ford Ranger Raptor",
    price: "1.8 billion VND",
    engineCapacity: "2000cc",
    drivetrain: "4WD",
    mileage: "8,200 km",
    installment: "Installment from 300 million",
    status: "Pending procedure",
    location: "Ho Chi Minh City",
    imageUrl:
      "https://images.unsplash.com/photo-1632660671010-8a768e86a6d7?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "Mercedes GLC 300",
    price: "2.5 billion VND",
    engineCapacity: "2000cc",
    drivetrain: "AWD",
    mileage: "12,500 km",
    installment: "Installment from 400 million",
    status: "Pending procedure",
    location: "Da Nang",
    imageUrl:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "Honda CR-V",
    price: "1.2 billion VND",
    engineCapacity: "1500cc",
    drivetrain: "FWD",
    mileage: "15,000 km",
    installment: "Installment from 200 million",
    status: "Pending procedure",
    location: "Hai Phong",
    imageUrl:
      "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&auto=format&fit=crop",
  },
  {
    vehicleName: "BMW X5",
    price: "4.5 billion VND",
    engineCapacity: "3000cc",
    drivetrain: "AWD",
    mileage: "7,800 km",
    installment: "Installment from 800 million",
    status: "Pending procedure",
    location: "Can Tho",
    imageUrl:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop",
  },
]

// Mock data for models by brand
export const MODELS_BY_BRAND: Record<number, Model[]> = {
  1: [
    // Toyota
    {
      id: 1,
      name: "Camry",
      imageUrl:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Corolla",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "RAV4",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
  2: [
    // Honda
    {
      id: 4,
      name: "Civic",
      imageUrl:
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Accord",
      imageUrl:
        "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "CR-V",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
  3: [
    // Ford
    {
      id: 7,
      name: "F-150",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Mustang",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Explorer",
      imageUrl:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
}

export const BRANDS: Brand[] = [
  { id: 1, name: "Toyota", logo: "/assets/brand/toyota.png" },
  { id: 2, name: "Honda", logo: "/assets/brand/honda.png" },
  { id: 3, name: "Ford", logo: "/assets/brand/ford.png" },
  { id: 4, name: "Hyundai", logo: "/assets/brand/hyundai.png" },
  { id: 5, name: "BMW", logo: "/assets/brand/bmw.png" },
  { id: 6, name: "Mercedes", logo: "/assets/brand/mercedes.png" },
  { id: 7, name: "Audi", logo: "/assets/brand/audi.png" },
  { id: 8, name: "Lexus", logo: "/assets/brand/lexus.png" },
  { id: 9, name: "Mazda", logo: "/assets/brand/mazda.png" },
  { id: 10, name: "VinFast", logo: "/assets/brand/vinfast.png" },
  { id: 11, name: "Chevrolet", logo: "/assets/brand/bmw.png" },
  { id: 12, name: "Kia", logo: "/assets/brand/bmw.png" },
  { id: 13, name: "Volkswagen", logo: "/assets/brand/bmw.png" },
  { id: 14, name: "Nissan", logo: "/assets/brand/bmw.png" },
  { id: 15, name: "Subaru", logo: "/assets/brand/bmw.png" },
  { id: 16, name: "Mitsubishi", logo: "/assets/brand/bmw.png" },
  { id: 17, name: "Volvo", logo: "/assets/brand/bmw.png" },
  { id: 18, name: "Porsche", logo: "/assets/brand/bmw.png" },
  { id: 19, name: "Tesla", logo: "/assets/brand/bmw.png" },
  { id: 20, name: "Land Rover", logo: "/assets/brand/bmw.png" },
]

export const AREAS: Area[] = [
  { id: 1, name: "Hà Nội" },
  { id: 2, name: "TP.HCM" },
  { id: 3, name: "Đà Nãng" },
  { id: 4, name: "Hải Phòng" },
]

export const PRICE_RANGES: PriceRange[] = [
  { id: 1, range: "Dưới 200 triệu", min: 0, max: 200 },
  { id: 2, range: "200 - 500 triệu", min: 200, max: 500 },
  { id: 3, range: "500 triệu - 1 tỷ", min: 500, max: 1000 },
  { id: 4, range: "Trên 1 tỷ", min: 1000, max: 9999 },
]