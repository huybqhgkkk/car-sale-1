interface LogMeta {
  [key: string]: any
}

interface LoggerCustomMethods {
  logPerformance: (label: string, durationMs: number, meta?: LogMeta) => void
  logAuth: (action: string, meta?: LogMeta) => void
  logApi: (method: string, url: string, meta?: LogMeta) => void
  logHttp: (message: string, meta?: LogMeta) => void
  logDb: (action: string, meta?: LogMeta) => void
  logError: (message: string, error?: Error, meta?: LogMeta) => void
}

interface EdgeLogger extends LoggerCustomMethods {
  debug: (message: string, meta?: LogMeta) => void
  info: (message: string, meta?: LogMeta) => void
  warn: (message: string, meta?: LogMeta) => void
  error: (message: string, meta?: LogMeta) => void
}

const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
}

const LOG_LEVELS = {
  error: {
    color: COLORS.red,
    icon: "❌",
    label: "ERROR",
  },
  warn: {
    color: COLORS.yellow,
    icon: "⚠️",
    label: "WARN",
  },
  info: {
    color: COLORS.green,
    icon: "ℹ️",
    label: "INFO",
  },
  debug: {
    color: COLORS.blue,
    icon: "🔍",
    label: "DEBUG",
  },
  performance: {
    color: COLORS.magenta,
    icon: "⚡",
    label: "PERF",
  },
  auth: {
    color: COLORS.cyan,
    icon: "🔐",
    label: "AUTH",
  },
  api: {
    color: COLORS.green,
    icon: "🌐",
    label: "API",
  },
  http: {
    color: COLORS.blue,
    icon: "📡",
    label: "HTTP",
  },
  db: {
    color: COLORS.yellow,
    icon: "🗄️",
    label: "DB",
  },
}

export const isDebugMode = (): boolean => process.env.DEBUG === "true"
export const isProd = process.env.NODE_ENV === "production"
export const isDev = process.env.NODE_ENV === "development"

const formatMessage = (
  level: keyof typeof LOG_LEVELS,
  message: string,
  meta?: LogMeta
): string => {
  const timestamp = new Date().toISOString()
  const { color, icon, label } = LOG_LEVELS[level]

  const timestampStr = `${COLORS.gray}[${timestamp}]${COLORS.reset}`
  const levelStr = `${color}${icon} ${label}${COLORS.reset}`
  const messageStr = `${COLORS.bright}${message}${COLORS.reset}`

  const metaStr = meta
    ? `\n${COLORS.dim}${JSON.stringify(meta, null, 2)}${COLORS.reset}`
    : ""

  return `${timestampStr} ${levelStr}: ${messageStr}${metaStr}`
}

const createEdgeLogger = (): EdgeLogger => {
  if (!isDebugMode()) {
    return {
      debug: () => {},
      info: () => {},
      warn: () => {},
      error: () => {},
      logPerformance: () => {},
      logAuth: () => {},
      logApi: () => {},
      logHttp: () => {},
      logDb: () => {},
      logError: () => {},
    }
  }

  const log = (
    level: keyof typeof LOG_LEVELS,
    message: string,
    meta?: LogMeta
  ) => {
    const formattedMessage = formatMessage(level, message, meta)

    switch (level) {
      case "error":
        console.error(formattedMessage)
        break
      case "warn":
        console.warn(formattedMessage)
        break
      case "debug":
        console.debug(formattedMessage)
        break
      default:
        console.log(formattedMessage)
    }
  }

  return {
    debug: (message: string, meta?: LogMeta) => {
      log("debug", message, meta)
    },

    info: (message: string, meta?: LogMeta) => {
      log("info", message, meta)
    },

    warn: (message: string, meta?: LogMeta) => {
      log("warn", message, meta)
    },

    error: (message: string, meta?: LogMeta) => {
      log("error", message, meta)
    },

    logPerformance: (label: string, durationMs: number, meta?: LogMeta) => {
      log("performance", `${label}: ${durationMs}ms`, {
        ...meta,
        duration: durationMs,
        metric: "performance",
        label,
      })
    },

    logAuth: (action: string, meta?: LogMeta) => {
      log("auth", action, {
        ...meta,
        category: "auth",
        action,
      })
    },

    logApi: (method: string, url: string, meta?: LogMeta) => {
      log("api", `${method} ${url}`, {
        ...meta,
        category: "api",
        method,
        url,
      })
    },

    logHttp: (message: string, meta?: LogMeta) => {
      log("http", message, {
        ...meta,
        category: "http",
      })
    },

    logDb: (action: string, meta?: LogMeta) => {
      log("db", action, {
        ...meta,
        category: "database",
        action,
      })
    },

    logError: (message: string, error?: Error, meta?: LogMeta) => {
      const errorMeta = {
        ...meta,
        timestamp: new Date().toISOString(),
      }

      if (error instanceof Error) {
        Object.assign(errorMeta, {
          errorName: error.name,
          errorMessage: error.message,
          stack: error.stack,
        })
      }

      log("error", message, errorMeta)
    },
  }
}

const logger = createEdgeLogger()

export default logger
export type { EdgeLogger, LogMeta }
