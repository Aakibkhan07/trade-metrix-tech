// Advanced Strategy Store for No-Code Strategy Builder

export type IndicatorType =
  | "RSI"
  | "EMA_9"
  | "EMA_21"
  | "EMA_50"
  | "EMA_200"
  | "SMA_20"
  | "SMA_50"
  | "SMA_200"
  | "MACD"
  | "MACD_SIGNAL"
  | "MACD_HISTOGRAM"
  | "SUPERTREND"
  | "VWAP"
  | "ATR"
  | "BB_UPPER"
  | "BB_MIDDLE"
  | "BB_LOWER"
  | "CLOSE"
  | "OPEN"
  | "HIGH"
  | "LOW"
  | "VOLUME"

export type OperatorType =
  | "CROSSES_ABOVE"
  | "CROSSES_BELOW"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "EQUALS"
  | "GREATER_EQUAL"
  | "LESS_EQUAL"

export type CompareToType = "VALUE" | "INDICATOR"

export type LogicType = "AND" | "OR"

export type ActionType = "BUY" | "SELL" | "ALERT"

export interface StrategyCondition {
  id: string
  indicator: IndicatorType
  operator: OperatorType
  compareToType: CompareToType
  value?: number
  compareIndicator?: IndicatorType
  logic?: LogicType
}

export interface AdvancedStrategy {
  id: string
  name: string
  description: string
  symbol: string
  timeframe: string
  conditions: StrategyCondition[]
  action: ActionType
  quantity: number
  stopLoss?: number
  takeProfit?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  backtestResults?: {
    totalTrades: number
    winRate: number
    profitFactor: number
    maxDrawdown: number
  }
}

export const indicators: { value: IndicatorType; label: string; category: string; description: string }[] = [
  // Momentum
  { value: "RSI", label: "RSI (14)", category: "Momentum", description: "Relative Strength Index" },
  { value: "MACD", label: "MACD Line", category: "Momentum", description: "Moving Average Convergence Divergence" },
  { value: "MACD_SIGNAL", label: "MACD Signal", category: "Momentum", description: "MACD Signal Line" },
  { value: "MACD_HISTOGRAM", label: "MACD Histogram", category: "Momentum", description: "MACD Histogram" },

  // Trend
  { value: "EMA_9", label: "EMA (9)", category: "Trend", description: "9-period Exponential Moving Average" },
  { value: "EMA_21", label: "EMA (21)", category: "Trend", description: "21-period Exponential Moving Average" },
  { value: "EMA_50", label: "EMA (50)", category: "Trend", description: "50-period Exponential Moving Average" },
  { value: "EMA_200", label: "EMA (200)", category: "Trend", description: "200-period Exponential Moving Average" },
  { value: "SMA_20", label: "SMA (20)", category: "Trend", description: "20-period Simple Moving Average" },
  { value: "SMA_50", label: "SMA (50)", category: "Trend", description: "50-period Simple Moving Average" },
  { value: "SMA_200", label: "SMA (200)", category: "Trend", description: "200-period Simple Moving Average" },
  { value: "SUPERTREND", label: "Supertrend", category: "Trend", description: "Supertrend Indicator" },
  { value: "VWAP", label: "VWAP", category: "Trend", description: "Volume Weighted Average Price" },

  // Volatility
  { value: "ATR", label: "ATR (14)", category: "Volatility", description: "Average True Range" },
  { value: "BB_UPPER", label: "Bollinger Upper", category: "Volatility", description: "Upper Bollinger Band" },
  { value: "BB_MIDDLE", label: "Bollinger Middle", category: "Volatility", description: "Middle Bollinger Band" },
  { value: "BB_LOWER", label: "Bollinger Lower", category: "Volatility", description: "Lower Bollinger Band" },

  // Price
  { value: "CLOSE", label: "Close Price", category: "Price", description: "Closing Price" },
  { value: "OPEN", label: "Open Price", category: "Price", description: "Opening Price" },
  { value: "HIGH", label: "High Price", category: "Price", description: "High Price" },
  { value: "LOW", label: "Low Price", category: "Price", description: "Low Price" },

  // Volume
  { value: "VOLUME", label: "Volume", category: "Volume", description: "Trading Volume" },
]

export const operators: { value: OperatorType; label: string; symbol: string }[] = [
  { value: "CROSSES_ABOVE", label: "Crosses Above", symbol: "↗" },
  { value: "CROSSES_BELOW", label: "Crosses Below", symbol: "↘" },
  { value: "GREATER_THAN", label: "Greater Than", symbol: ">" },
  { value: "LESS_THAN", label: "Less Than", symbol: "<" },
  { value: "EQUALS", label: "Equals", symbol: "=" },
  { value: "GREATER_EQUAL", label: "Greater or Equal", symbol: "≥" },
  { value: "LESS_EQUAL", label: "Less or Equal", symbol: "≤" },
]

export const timeframes = [
  { value: "1m", label: "1 Minute" },
  { value: "5m", label: "5 Minutes" },
  { value: "15m", label: "15 Minutes" },
  { value: "30m", label: "30 Minutes" },
  { value: "1h", label: "1 Hour" },
  { value: "4h", label: "4 Hours" },
  { value: "1d", label: "1 Day" },
]

export const symbols = [
  { value: "NIFTY", label: "NIFTY 50" },
  { value: "BANKNIFTY", label: "BANK NIFTY" },
  { value: "FINNIFTY", label: "FIN NIFTY" },
  { value: "SENSEX", label: "SENSEX" },
  { value: "RELIANCE", label: "RELIANCE" },
  { value: "TCS", label: "TCS" },
  { value: "HDFCBANK", label: "HDFC BANK" },
  { value: "INFY", label: "INFOSYS" },
]

// Storage key
const STRATEGY_STORAGE_KEY = "trademetrix_advanced_strategies"

// Load strategies from localStorage
function loadStrategies(): AdvancedStrategy[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(STRATEGY_STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch (e) {
    console.error("Failed to load strategies:", e)
  }
  return []
}

// Save strategies to localStorage
function saveStrategies(strategies: AdvancedStrategy[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STRATEGY_STORAGE_KEY, JSON.stringify(strategies))
  } catch (e) {
    console.error("Failed to save strategies:", e)
  }
}

export const strategyStore = {
  getAll: (): AdvancedStrategy[] => loadStrategies(),

  getById: (id: string): AdvancedStrategy | undefined => {
    return loadStrategies().find((s) => s.id === id)
  },

  create: (strategy: Omit<AdvancedStrategy, "id" | "createdAt" | "updatedAt">): AdvancedStrategy => {
    const strategies = loadStrategies()
    const newStrategy: AdvancedStrategy = {
      ...strategy,
      id: `strategy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    strategies.push(newStrategy)
    saveStrategies(strategies)

    // Log JSON to console as requested
    console.log("[TradeMetrix] Strategy Created:", JSON.stringify(newStrategy, null, 2))

    return newStrategy
  },

  update: (id: string, updates: Partial<AdvancedStrategy>): AdvancedStrategy | null => {
    const strategies = loadStrategies()
    const index = strategies.findIndex((s) => s.id === id)
    if (index === -1) return null

    strategies[index] = {
      ...strategies[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    saveStrategies(strategies)
    return strategies[index]
  },

  delete: (id: string): boolean => {
    const strategies = loadStrategies()
    const filtered = strategies.filter((s) => s.id !== id)
    if (filtered.length === strategies.length) return false
    saveStrategies(filtered)
    return true
  },

  toggleActive: (id: string): AdvancedStrategy | null => {
    const strategies = loadStrategies()
    const strategy = strategies.find((s) => s.id === id)
    if (!strategy) return null

    strategy.isActive = !strategy.isActive
    strategy.updatedAt = new Date().toISOString()
    saveStrategies(strategies)
    return strategy
  },

  // Generate mock backtest results
  runBacktest: (id: string): AdvancedStrategy | null => {
    const strategies = loadStrategies()
    const strategy = strategies.find((s) => s.id === id)
    if (!strategy) return null

    strategy.backtestResults = {
      totalTrades: Math.floor(Math.random() * 100) + 50,
      winRate: Math.random() * 30 + 55, // 55-85%
      profitFactor: Math.random() * 1.5 + 1.2, // 1.2-2.7
      maxDrawdown: Math.random() * 15 + 5, // 5-20%
    }
    strategy.updatedAt = new Date().toISOString()
    saveStrategies(strategies)

    console.log("[TradeMetrix] Backtest Results:", JSON.stringify(strategy.backtestResults, null, 2))

    return strategy
  },
}

// Helper to get indicator label
export function getIndicatorLabel(value: IndicatorType): string {
  return indicators.find((i) => i.value === value)?.label || value
}

// Helper to get operator label
export function getOperatorLabel(value: OperatorType): string {
  return operators.find((o) => o.value === value)?.label || value
}

// Helper to get operator symbol
export function getOperatorSymbol(value: OperatorType): string {
  return operators.find((o) => o.value === value)?.symbol || value
}
