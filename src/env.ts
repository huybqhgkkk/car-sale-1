export const getBaseURL = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "https://localhost:3000"
}


/**
 * Application configuration from environment variables
 *
 * Benefits:
 * - Centralizes all environment variables in one place
 * - Handles validation and data type conversion
 * - Provides sensible default values
 * - Easy to modify when needed
 */
// ==================== GENERAL CONFIGURATION ====================
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_TEST = NODE_ENV === 'test';
// ==================== API CONFIGURATION ====================
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ||
  (IS_PRODUCTION ? 'https://api.yourdomain.com' : 'http://localhost:8080');
const API_TIMEOUT = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000', 10);
// ==================== AUTH CONFIGURATION ====================
const ACCESS_TOKEN_EXPIRE = parseInt(
  process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRE || '604800', // 7 days
  10
);

const COOKIE_MAX_AGE = parseInt(
  process.env.NEXT_PUBLIC_COOKIE_MAX_AGE || '604800', // 7 days
  10
);

const REFRESH_TOKEN_EXPIRE = parseInt(
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPIRE || '2592000', // 30 days
  10
);
const AUTH_COOKIE_CONFIG = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: IS_PRODUCTION,
};
// ==================== FEATURE FLAGS CONFIGURATION ====================
const FEATURE_FLAGS = {
  ENABLE_NEW_DASHBOARD: process.env.NEXT_PUBLIC_ENABLE_NEW_DASHBOARD === 'true',
  ENABLE_EXPERIMENTAL_FEATURES: process.env.NEXT_PUBLIC_ENABLE_EXPERIMENTAL_FEATURES === 'true',
};
// ==================== THIRD-PARTY CONFIGURATION ====================
const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || '';
// ==================== VALIDATION ====================
if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not configured');
}
if (IS_PRODUCTION && !GOOGLE_ANALYTICS_ID) {
  console.warn('Google Analytics ID is missing in production');
}
// ==================== EXPORT ====================
export const EnvConfig = {
  // Core config
  NODE_ENV,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
  IS_TEST,
  // API config
  API: {
    BASE_URL: API_BASE_URL,
    TIMEOUT: API_TIMEOUT,
  },
  // Auth config
  AUTH: {
    ACCESS_TOKEN_EXPIRE,
    REFRESH_TOKEN_EXPIRE,
    COOKIE_MAX_AGE,
    COOKIE_CONFIG: AUTH_COOKIE_CONFIG,
  },
  // Features
  FEATURE_FLAGS,
  // Third-party services
  THIRD_PARTY: {
    GOOGLE_ANALYTICS_ID,
    SENTRY_DSN,
  },
};
// TypeScript type definition
export type AppConfig = typeof EnvConfig;