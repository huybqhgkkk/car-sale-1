
export const COOKIE_NAMES = {
  ACCESS_TOKEN: "APP_JWT",
  REFRESH_TOKEN: "APP_REFRESH_TOKEN",
} as const;

export type CookieName = keyof typeof COOKIE_NAMES;


export type CookieValue = typeof COOKIE_NAMES[CookieName];

export interface AppCookies {
  [COOKIE_NAMES.ACCESS_TOKEN]?: string;
  [COOKIE_NAMES.REFRESH_TOKEN]?: string;
}

export const  xAcessToken = "x-access-token"
export const  xRefreshToken = "x-refresh-token"

export const WHITELIST_ROUTES = [
    "/",
  "/login",
  "/403",
  "/401",
  "/500",
  "/login",
  "/vn/account",
  "/vn",
  "/en/account",
  "/signup",
  "/about",
  "/public",
  "error/*",
  "/assets/*",
  "/posts/*",
  "/vn/used-car",
  "/vn/rent",
  "/vn/installment",
  "/vn/rent",
  "/vn/insurance",
  "/vn/installment",
  "/vn/news",
  "/vn/news/*",
  "/vn/showroom",
  "/vn/services",
]


export const MENU_ITEMS = [
  { href: "/vn/used-car", label: "Xe cũ" },
  { href: "/vn/showroom", label: "Showroom" },
  { href: "/vn/rent", label: "Thuê xe" },
  { href: "/vn/installment", label: "Mua xe trả góp" },
  { href: "/vn/insurance", label: "Bảo hiểm" },
  { href: "/vn/news", label: "Tin tức" },
]
