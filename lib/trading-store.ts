// Trading data store for paper trading and strategies
// Extends the existing store with trading functionality

export interface OptionData {
  strikePrice: number
  callOI: number
  callDelta: number
  callLTP: number
  callChange: number
  putOI: number
  putDelta: number
  putLTP: number
  putChange: number
  isATM?: boolean
}

export interface Strategy {
  id: string
  name: string
  rules: StrategyRule[]
  createdAt: string
  isActive: boolean
}

export interface StrategyRule {
  id: string
  indicator: string
  condition: ">" | "<" | "==" | ">=" | "<="
  value: number
  logic?: "AND" | "OR"
}

export interface Trade {
  id: string
  symbol: string
  type: "BUY" | "SELL"
  quantity: number
  price: number
  timestamp: string
  status: "OPEN" | "CLOSED"
  pnl?: number
}

export interface VirtualPortfolio {
  balance: number
  initialBalance: number
  positions: Trade[]
  totalPnl: number
}

export interface EconomicEvent {
  id: string
  title: string
  date: string
  time: string
  impact: "HIGH" | "MEDIUM" | "LOW"
  country: string
  forecast?: string
  previous?: string
}

export interface UserSettings {
  darkMode: boolean
  telegramChatId: string
  notifications: boolean
  soundAlerts: boolean
}

// Mock Option Chain Data for Nifty
export const niftyOptionChain: OptionData[] = [
  {
    strikePrice: 24000,
    callOI: 125000,
    callDelta: 0.85,
    callLTP: 485.5,
    callChange: 12.5,
    putOI: 45000,
    putDelta: -0.15,
    putLTP: 22.3,
    putChange: -8.2,
  },
  {
    strikePrice: 24050,
    callOI: 98000,
    callDelta: 0.78,
    callLTP: 442.75,
    callChange: 15.3,
    putOI: 52000,
    putDelta: -0.22,
    putLTP: 28.45,
    putChange: -6.8,
  },
  {
    strikePrice: 24100,
    callOI: 156000,
    callDelta: 0.72,
    callLTP: 398.2,
    callChange: 18.7,
    putOI: 68000,
    putDelta: -0.28,
    putLTP: 35.6,
    putChange: -5.4,
  },
  {
    strikePrice: 24150,
    callOI: 189000,
    callDelta: 0.65,
    callLTP: 355.8,
    callChange: 22.1,
    putOI: 85000,
    putDelta: -0.35,
    putLTP: 45.25,
    putChange: -4.1,
  },
  {
    strikePrice: 24200,
    callOI: 245000,
    callDelta: 0.58,
    callLTP: 312.4,
    callChange: 25.6,
    putOI: 112000,
    putDelta: -0.42,
    putLTP: 58.9,
    putChange: -2.8,
  },
  {
    strikePrice: 24250,
    callOI: 312000,
    callDelta: 0.51,
    callLTP: 268.95,
    callChange: 28.3,
    putOI: 156000,
    putDelta: -0.49,
    putLTP: 75.4,
    putChange: -1.2,
    isATM: true,
  },
  {
    strikePrice: 24300,
    callOI: 198000,
    callDelta: 0.44,
    callLTP: 228.6,
    callChange: 24.8,
    putOI: 198000,
    putDelta: -0.56,
    putLTP: 95.8,
    putChange: 2.5,
  },
  {
    strikePrice: 24350,
    callOI: 145000,
    callDelta: 0.37,
    callLTP: 192.35,
    callChange: 21.2,
    putOI: 225000,
    putDelta: -0.63,
    putLTP: 122.5,
    putChange: 5.8,
  },
  {
    strikePrice: 24400,
    callOI: 98000,
    callDelta: 0.3,
    callLTP: 158.7,
    callChange: 17.5,
    putOI: 268000,
    putDelta: -0.7,
    putLTP: 155.2,
    putChange: 8.4,
  },
  {
    strikePrice: 24450,
    callOI: 65000,
    callDelta: 0.24,
    callLTP: 128.45,
    callChange: 14.2,
    putOI: 312000,
    putDelta: -0.76,
    putLTP: 195.8,
    putChange: 11.2,
  },
  {
    strikePrice: 24500,
    callOI: 42000,
    callDelta: 0.18,
    callLTP: 102.3,
    callChange: 10.8,
    putOI: 356000,
    putDelta: -0.82,
    putLTP: 245.6,
    putChange: 14.5,
  },
]

// Mock Option Chain Data for Bank Nifty
export const bankNiftyOptionChain: OptionData[] = [
  {
    strikePrice: 51500,
    callOI: 85000,
    callDelta: 0.82,
    callLTP: 685.5,
    callChange: 18.5,
    putOI: 32000,
    putDelta: -0.18,
    putLTP: 42.3,
    putChange: -12.2,
  },
  {
    strikePrice: 51600,
    callOI: 112000,
    callDelta: 0.75,
    callLTP: 598.75,
    callChange: 22.3,
    putOI: 48000,
    putDelta: -0.25,
    putLTP: 58.45,
    putChange: -9.8,
  },
  {
    strikePrice: 51700,
    callOI: 156000,
    callDelta: 0.68,
    callLTP: 512.2,
    callChange: 26.7,
    putOI: 72000,
    putDelta: -0.32,
    putLTP: 78.6,
    putChange: -7.4,
  },
  {
    strikePrice: 51800,
    callOI: 198000,
    callDelta: 0.6,
    callLTP: 428.8,
    callChange: 30.1,
    putOI: 98000,
    putDelta: -0.4,
    putLTP: 105.25,
    putChange: -5.1,
  },
  {
    strikePrice: 51900,
    callOI: 256000,
    callDelta: 0.52,
    callLTP: 348.4,
    callChange: 32.6,
    putOI: 145000,
    putDelta: -0.48,
    putLTP: 138.9,
    putChange: -2.8,
    isATM: true,
  },
  {
    strikePrice: 52000,
    callOI: 225000,
    callDelta: 0.45,
    callLTP: 275.95,
    callChange: 28.3,
    putOI: 198000,
    putDelta: -0.55,
    putLTP: 178.4,
    putChange: 1.5,
  },
  {
    strikePrice: 52100,
    callOI: 178000,
    callDelta: 0.38,
    callLTP: 212.6,
    callChange: 24.8,
    putOI: 245000,
    putDelta: -0.62,
    putLTP: 225.8,
    putChange: 5.8,
  },
  {
    strikePrice: 52200,
    callOI: 125000,
    callDelta: 0.31,
    callLTP: 158.35,
    callChange: 20.2,
    putOI: 298000,
    putDelta: -0.69,
    putLTP: 282.5,
    putChange: 9.4,
  },
  {
    strikePrice: 52300,
    callOI: 85000,
    callDelta: 0.24,
    callLTP: 112.7,
    callChange: 15.5,
    putOI: 356000,
    putDelta: -0.76,
    putLTP: 348.2,
    putChange: 13.8,
  },
  {
    strikePrice: 52400,
    callOI: 52000,
    callDelta: 0.18,
    callLTP: 78.45,
    callChange: 11.2,
    putOI: 412000,
    putDelta: -0.82,
    putLTP: 425.8,
    putChange: 17.2,
  },
]

// Mock Economic Calendar Events
export const economicEvents: EconomicEvent[] = [
  {
    id: "1",
    title: "RBI Monetary Policy",
    date: "2025-01-08",
    time: "10:00",
    impact: "HIGH",
    country: "IN",
    forecast: "6.50%",
    previous: "6.50%",
  },
  {
    id: "2",
    title: "US Fed Interest Rate Decision",
    date: "2025-01-15",
    time: "19:30",
    impact: "HIGH",
    country: "US",
    forecast: "4.50%",
    previous: "4.75%",
  },
  {
    id: "3",
    title: "India GDP Growth Rate",
    date: "2025-01-20",
    time: "17:30",
    impact: "HIGH",
    country: "IN",
    forecast: "6.8%",
    previous: "6.5%",
  },
  {
    id: "4",
    title: "US Non-Farm Payrolls",
    date: "2025-01-10",
    time: "19:00",
    impact: "HIGH",
    country: "US",
    forecast: "180K",
    previous: "227K",
  },
  {
    id: "5",
    title: "India CPI Inflation",
    date: "2025-01-12",
    time: "17:30",
    impact: "MEDIUM",
    country: "IN",
    forecast: "5.2%",
    previous: "5.48%",
  },
  {
    id: "6",
    title: "India IIP Data",
    date: "2025-01-14",
    time: "17:30",
    impact: "MEDIUM",
    country: "IN",
    forecast: "4.5%",
    previous: "3.5%",
  },
  {
    id: "7",
    title: "US Retail Sales",
    date: "2025-01-16",
    time: "19:00",
    impact: "MEDIUM",
    country: "US",
    forecast: "0.5%",
    previous: "0.7%",
  },
  {
    id: "8",
    title: "India WPI Inflation",
    date: "2025-01-18",
    time: "12:00",
    impact: "LOW",
    country: "IN",
    forecast: "2.1%",
    previous: "1.89%",
  },
]

// Available indicators for strategy builder
export const availableIndicators = [
  { id: "rsi", name: "RSI (14)", category: "Momentum" },
  { id: "macd", name: "MACD", category: "Momentum" },
  { id: "ema20", name: "EMA (20)", category: "Trend" },
  { id: "ema50", name: "EMA (50)", category: "Trend" },
  { id: "sma200", name: "SMA (200)", category: "Trend" },
  { id: "close", name: "Close Price", category: "Price" },
  { id: "open", name: "Open Price", category: "Price" },
  { id: "high", name: "High Price", category: "Price" },
  { id: "low", name: "Low Price", category: "Price" },
  { id: "volume", name: "Volume", category: "Volume" },
  { id: "vwap", name: "VWAP", category: "Volume" },
  { id: "bb_upper", name: "Bollinger Upper", category: "Volatility" },
  { id: "bb_lower", name: "Bollinger Lower", category: "Volatility" },
  { id: "atr", name: "ATR (14)", category: "Volatility" },
  { id: "supertrend", name: "Supertrend", category: "Trend" },
]

// Trading store with localStorage persistence
const STORAGE_KEY = "trademetrix_trading_data"

interface TradingData {
  portfolio: VirtualPortfolio
  strategies: Strategy[]
  settings: UserSettings
}

const defaultData: TradingData = {
  portfolio: {
    balance: 1000000, // 10 Lakh INR
    initialBalance: 1000000,
    positions: [],
    totalPnl: 0,
  },
  strategies: [],
  settings: {
    darkMode: true,
    telegramChatId: "",
    notifications: true,
    soundAlerts: false,
  },
}

function loadData(): TradingData {
  if (typeof window === "undefined") return defaultData
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error("Failed to load trading data:", e)
  }
  return defaultData
}

function saveData(data: TradingData) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error("Failed to save trading data:", e)
  }
}

export const tradingStore = {
  getData: (): TradingData => loadData(),

  getPortfolio: (): VirtualPortfolio => loadData().portfolio,

  getStrategies: (): Strategy[] => loadData().strategies,

  getSettings: (): UserSettings => loadData().settings,

  updatePortfolio: (portfolio: VirtualPortfolio) => {
    const data = loadData()
    data.portfolio = portfolio
    saveData(data)
  },

  addStrategy: (strategy: Strategy) => {
    const data = loadData()
    data.strategies.push(strategy)
    saveData(data)
  },

  updateStrategy: (strategyId: string, updates: Partial<Strategy>) => {
    const data = loadData()
    const index = data.strategies.findIndex((s) => s.id === strategyId)
    if (index !== -1) {
      data.strategies[index] = { ...data.strategies[index], ...updates }
      saveData(data)
    }
  },

  deleteStrategy: (strategyId: string) => {
    const data = loadData()
    data.strategies = data.strategies.filter((s) => s.id !== strategyId)
    saveData(data)
  },

  updateSettings: (settings: Partial<UserSettings>) => {
    const data = loadData()
    data.settings = { ...data.settings, ...settings }
    saveData(data)
  },

  placeTrade: (trade: Omit<Trade, "id" | "timestamp" | "status">) => {
    const data = loadData()
    const newTrade: Trade = {
      ...trade,
      id: `trade-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: "OPEN",
    }

    // Deduct/add to balance
    const cost = trade.price * trade.quantity
    if (trade.type === "BUY") {
      data.portfolio.balance -= cost
    } else {
      data.portfolio.balance += cost
    }

    data.portfolio.positions.push(newTrade)
    saveData(data)
    return newTrade
  },

  closeTrade: (tradeId: string, closePrice: number) => {
    const data = loadData()
    const trade = data.portfolio.positions.find((t) => t.id === tradeId)
    if (trade && trade.status === "OPEN") {
      const pnl =
        trade.type === "BUY" ? (closePrice - trade.price) * trade.quantity : (trade.price - closePrice) * trade.quantity

      trade.status = "CLOSED"
      trade.pnl = pnl
      data.portfolio.balance += closePrice * trade.quantity
      data.portfolio.totalPnl += pnl
      saveData(data)
      return trade
    }
    return null
  },

  resetPortfolio: () => {
    const data = loadData()
    data.portfolio = defaultData.portfolio
    saveData(data)
  },
}
