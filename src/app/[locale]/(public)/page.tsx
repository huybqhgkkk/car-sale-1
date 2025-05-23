import SearchSection from "@modules/public/components/SearchSection"

import ServiceSection from "@modules/public/components/ServiceSection"
import logger from "../../../utils/debug"
import UncompletedProcedureCar from "@modules/public/components/UncompletedProcedureCar"
import BrandList from "@modules/public/components/BrandList"
import PriceRangeFinder from "@modules/public/components/PriceRangeFinder"
import EngineTypeFinder from "@modules/public/components/EngineTypeFinder"
import BestSellingCars from "@modules/public/components/BestSellingCars"
import CarByPurpose from "@modules/public/components/CarByPurpose"
import NewsSection from "@modules/public/components/NewsSection"
import FAQSection from "@modules/public/components/FAQSection"
import RecentActivity from "@modules/public/components/RecentActivity"
import GoToTop from "@modules/public/components/goToTop";

interface Car {
  id: string
  name: string
  images: string
  price: number
  currency: string
}

interface HomePageProps {
  cars: Car[]
}

const data = [
  {
    "name": "Armando Ortiz",
    "images": "https://avatars.githubusercontent.com/u/67605501",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "709.35",
    "currency": "Brazilian Real",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.837832, 37.2292, 45.1934],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "1"
  },
  {
    "name": "Allen Thompson",
    "images": "https://avatars.githubusercontent.com/u/80656686",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "201.25",
    "currency": "Bhutanese Ngultrum",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.839407, -13.2096, 28.5531],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "2"
  },
  {
    "name": "Pamela Ritchie",
    "images": "https://avatars.githubusercontent.com/u/44213276",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "558.45",
    "currency": "Liberian Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.200419, 89.1684, -61.7603],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "3"
  },
  {
    "name": "Miss Jody Wolf",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/36.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "294.70",
    "currency": "Pula",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.630318, 98.4052, -92.6904],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "4"
  },
  {
    "name": "Vernon O'Connell",
    "images": "https://avatars.githubusercontent.com/u/81585181",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "485.05",
    "currency": "Libyan Dinar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.674955, -75.7948, -69.0359],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "5"
  },
  {
    "name": "Robin Bauch",
    "images": "https://avatars.githubusercontent.com/u/71848031",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "408.20",
    "currency": "Nuevo Sol",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.163689, 88.9148, -58.0627],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "6"
  },
  {
    "name": "Kelley Gutkowski",
    "images": "https://avatars.githubusercontent.com/u/77495517",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "977.69",
    "currency": "US Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.284728, 79.7757, 91.433],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "7"
  },
  {
    "name": "Dixie Wilkinson Sr.",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/92.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "849.94",
    "currency": "Trinidad and Tobago Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.151773, -45.8346, 54.09],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "8"
  },
  {
    "name": "Kristopher Greenfelder",
    "images": "https://avatars.githubusercontent.com/u/52293540",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "715.05",
    "currency": "Brunei Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.035232, -48.0511, 90.5711],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "9"
  },
  {
    "name": "Leonard Streich",
    "images": "https://avatars.githubusercontent.com/u/90893525",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "419.15",
    "currency": "Falkland Islands Pound",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.860949, 66.6028, -27.0454],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "10"
  },
  {
    "name": "Anita McLaughlin",
    "images": "https://avatars.githubusercontent.com/u/29874640",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "677.69",
    "currency": "Turkish Lira",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.083388, -80.2283, -88.0487],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "11"
  },
  {
    "name": "Victor Hoeger",
    "images": "https://avatars.githubusercontent.com/u/63454532",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "470.95",
    "currency": "Uzbekistan Sum",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.988755, -84.1611, 9.3891],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "12"
  },
  {
    "name": "Elaine Yost-Smitham",
    "images": "https://avatars.githubusercontent.com/u/78687680",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "288.35",
    "currency": "Guarani",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.960374, -64.1209, 13.9689],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "13"
  },
  {
    "name": "Carroll Bechtelar",
    "images": "https://avatars.githubusercontent.com/u/82951767",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "79.49",
    "currency": "Bhutanese Ngultrum",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.338841, 9.2095, 15.5109],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "14"
  },
  {
    "name": "Virginia Bogan",
    "images": "https://avatars.githubusercontent.com/u/19902921",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "857.89",
    "currency": "Norwegian Krone",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.062868, -13.0252, -73.8632],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "15"
  },
  {
    "name": "Manuel Pacocha",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/81.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "55.35",
    "currency": "Bulgarian Lev",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.13603, 17.3542, 20.9554],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "16"
  },
  {
    "name": "Mr. Christopher Ritchie",
    "images": "https://avatars.githubusercontent.com/u/10053470",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "385.95",
    "currency": "Solomon Islands Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.941646, -11.7983, 57.6278],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "17"
  },
  {
    "name": "Diane Stoltenberg-Kuhlman",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/25.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "118.80",
    "currency": "Lesotho Loti",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.52317, -4.7237, 39.3382],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "18"
  },
  {
    "name": "Brenda Miller",
    "images": "https://avatars.githubusercontent.com/u/68851796",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "837.71",
    "currency": "Aruban Guilder",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.147265, -46.8572, 32.4024],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "19"
  },
  {
    "name": "Harold Boyer",
    "images": "https://avatars.githubusercontent.com/u/35706718",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "154.45",
    "currency": "Seychelles Rupee",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.224537, 45.9412, -12.4847],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "20"
  },
  {
    "name": "Darin Davis-Abbott",
    "images": "https://avatars.githubusercontent.com/u/42062559",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "52.75",
    "currency": "Kip",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.333675, -68.9102, -35.5714],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "21"
  },
  {
    "name": "Dr. Johnnie Runolfsson",
    "images": "https://avatars.githubusercontent.com/u/8702110",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "731.79",
    "currency": "Moldovan Leu",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.074388, 36.8064, 74.8199],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "22"
  },
  {
    "name": "Kenny Torp",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/43.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "529.75",
    "currency": "Philippine Peso",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.352214, 53.8464, 2.1292],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "23"
  },
  {
    "name": "Terri Hayes II",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/0.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "149.65",
    "currency": "Nuevo Sol",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.278921, 90.7507, 93.8802],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "24"
  },
  {
    "name": "Dr. Gilbert Ernser",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/78.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "185.45",
    "currency": "Malagasy Ariary",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.916387, -46.9031, -3.6372],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "25"
  },
  {
    "name": "Miriam Heidenreich",
    "images": "https://avatars.githubusercontent.com/u/32683215",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "485.25",
    "currency": "Uganda Shilling",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.541975, 28.8378, -83.6147],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "26"
  },
  {
    "name": "Valerie Breitenberg",
    "images": "https://avatars.githubusercontent.com/u/33060842",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "199.59",
    "currency": "Venezuelan bolívar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.543026, -3.3841, 29.7715],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "27"
  },
  {
    "name": "Lindsey Fisher-Runolfsson",
    "images": "https://avatars.githubusercontent.com/u/33270863",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "786.49",
    "currency": "Egyptian Pound",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.410375, 77.1457, 31.5071],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "28"
  },
  {
    "name": "Sheryl Von",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/2.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "567.60",
    "currency": "Lari",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.647558, 98.7917, 52.7769],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "29"
  },
  {
    "name": "Frances Considine",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/48.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "88.89",
    "currency": "Metical",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.632311, 53.9924, 77.7948],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "30"
  },
  {
    "name": "Sonja Mitchell-Tillman",
    "images": "https://avatars.githubusercontent.com/u/48603473",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "526.85",
    "currency": "Egyptian Pound",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.21847, -14.0508, 9.1144],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "31"
  },
  {
    "name": "Domingo Medhurst",
    "images": "https://avatars.githubusercontent.com/u/91300901",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "582.20",
    "currency": "Quetzal",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.255889, 9.2905, -42.9759],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "32"
  },
  {
    "name": "Lynn Wehner",
    "images": "https://avatars.githubusercontent.com/u/32731489",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "426.69",
    "currency": "Guyana Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.300933, 87.4856, -11.0515],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "33"
  },
  {
    "name": "Molly O'Conner",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/71.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "189.79",
    "currency": "Riel",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.454406, -1.2488, 59.3159],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "34"
  },
  {
    "name": "Shawn Bruen",
    "images": "https://avatars.githubusercontent.com/u/39399687",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "54.55",
    "currency": "Kwanza",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.083485, -13.0972, 58.1439],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "35"
  },
  {
    "name": "Karl Torp",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/55.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "641.09",
    "currency": "Algerian Dinar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.039417, 5.6208, 79.3063],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "36"
  },
  {
    "name": "Darnell Graham DDS",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/81.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "389.99",
    "currency": "Denar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.59787, -97.1894, 36.2867],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "37"
  },
  {
    "name": "Donald Breitenberg",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/91.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "959.39",
    "currency": "Brunei Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.834706, 82.6031, 64.0486],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "38"
  },
  {
    "name": "Bonnie Hauck",
    "images": "https://avatars.githubusercontent.com/u/91912010",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "377.09",
    "currency": "Kwanza",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.927647, -44.0847, 87.8533],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "39"
  },
  {
    "name": "Kim Schiller",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/7.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "984.27",
    "currency": "Nepalese Rupee",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.543899, -61.403, -91.6848],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "40"
  },
  {
    "name": "Domingo Schuppe",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/50.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "309.55",
    "currency": "Ethiopian Birr",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.859642, -87.7077, 57.9423],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "41"
  },
  {
    "name": "Dr. Lowell Barton",
    "images": "https://avatars.githubusercontent.com/u/91617319",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "13.76",
    "currency": "Denar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.865162, 18.1353, -72.1814],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "42"
  },
  {
    "name": "Ann Hills",
    "images": "https://avatars.githubusercontent.com/u/19165300",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "994.39",
    "currency": "Saudi Riyal",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.968042, -10.0136, 32.0646],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "43"
  },
  {
    "name": "Tamara Dach DDS",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/47.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "752.20",
    "currency": "New Taiwan Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.817001, -42.411, -20.4312],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "44"
  },
  {
    "name": "Bryant Cronin",
    "images": "https://avatars.githubusercontent.com/u/54904003",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "251.59",
    "currency": "Zimbabwe Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.408064, 39.4876, 77.8036],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "45"
  },
  {
    "name": "Dr. Gail Torp",
    "images": "https://avatars.githubusercontent.com/u/5940165",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "207.16",
    "currency": "Hong Kong Dollar",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.259615, -22.8141, 74.1311],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "46"
  },
  {
    "name": "Clara Bergstrom",
    "images": "https://avatars.githubusercontent.com/u/49082798",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "403.30",
    "currency": "Yemeni Rial",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.549501, 71.2195, 15.5553],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "47"
  },
  {
    "name": "Kenny Gibson",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/45.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "648.90",
    "currency": "Lilangeni",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.308307, -64.6457, -51.9076],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "48"
  },
  {
    "name": "Leland Olson",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/5.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "410.50",
    "currency": "Yuan Renminbi",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.33262, -13.5269, 11.7834],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "49"
  },
  {
    "name": "Megan Hickle",
    "images": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/17.jpg",
    "make": "Invalid faker method - random.word",
    "model": "Invalid faker method - random.word",
    "price": "856.00",
    "currency": "Comoro Franc",
    "mileage": "Invalid faker method - random.word",
    "mileage_unit": "Invalid faker method - random.word",
    "color": [0.27617, 8.6069, 75.2997],
    "transmission": "Invalid faker method - random.word",
    "fuel_type": "Invalid faker method - random.word",
    "id": "50"
  }
]

export default async function HomePage() {
  const cars = await fetch(
    "https://6183570f91d76c00172d18d5.mockapi.io/api/test/v1/car"
  ).then((res) => res.json())
      .catch(() => data)

  logger.info("Cars fetched:", cars)

  return (
    <>
      <SearchSection />
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <UncompletedProcedureCar />
        <RecentActivity />
        <BrandList />
        <PriceRangeFinder />
        <EngineTypeFinder />
        <BestSellingCars />
        <CarByPurpose />
        <NewsSection />
        <FAQSection />
        <ServiceSection />
        <GoToTop />
      </div>
    </>
  )
}
