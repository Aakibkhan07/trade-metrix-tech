// Portfolio Store - Enhanced Paper Trading Engine
// Separate from user auth store for cleaner architecture

export interface Position {
  id: string
  symbol: string
  type: "BUY" | "SELL"
  quantity: number
  avgPrice: number
  currentPrice: number
  timestamp: string
  orderType: "MARKET" | "LIMIT"
  limitPrice?: number
  status: "OPEN" | "CLOSED" | "PENDING"
  pnl?: number
  closedAt?: string
}

export interface Order {
  id: string
  symbol: string
  type: "BUY" | "SELL"
  quantity: number
  orderType: "MARKET" | "LIMIT"
  limitPrice?: number
  status: "EXECUTED" | "PENDING" | "CANCELLED"
  executedPrice?: number
  timestamp: string
}

export interface Portfolio {
  virtualBalance: number
  initialBalance: number
  positions: Position[]
  orderHistory: Order[]
  totalRealizedPnl: number
}

const PORTFOLIO_STORAGE_KEY = "trademetrix_portfolio"

const defaultPortfolio: Portfolio = {
  virtualBalance: 1000000, // 10,00,000 INR
  initialBalance: 1000000,
  positions: [],
  orderHistory: [],
  totalRealizedPnl: 0,
}

// In-memory current prices (updated by LiveMarketTicker)
let currentPrices: Record<string, number> = {
  "NIFTY 50": 24285.55,
  "BANK NIFTY": 51942.3,
  SENSEX: 80142.65,
  "FIN NIFTY": 23856.4,
  RELIANCE: 2456.8,
  TCS: 3842.5,
  INFY: 1592.35,
  "HDFC BANK": 1728.9,
  "ICICI BANK": 1245.6,
  "BHARTI AIRTEL": 1685.4,
}

function loadPortfolio(): Portfolio {
  if (typeof window === "undefined") return defaultPortfolio
  try {
    const stored = localStorage.getItem(PORTFOLIO_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error("Failed to load portfolio:", e)
  }
  return defaultPortfolio
}

function savePortfolio(portfolio: Portfolio) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(portfolio))
  } catch (e) {
    console.error("Failed to save portfolio:", e)
  }
}

export const portfolioStore = {
  // Get current portfolio
  getPortfolio: (): Portfolio => loadPortfolio(),

  // Update current market prices (called by LiveMarketTicker)
  updatePrices: (prices: Record<string, number>) => {
    currentPrices = { ...currentPrices, ...prices }
  },

  // Get current price for a symbol
  getPrice: (symbol: string): number => {
    return currentPrices[symbol] || 0
  },

  // Get all current prices
  getAllPrices: (): Record<string, number> => ({ ...currentPrices }),

  // Place a new order
  placeOrder: (
    symbol: string,
    type: "BUY" | "SELL",
    quantity: number,
    orderType: "MARKET" | "LIMIT",
    limitPrice?: number,
  ): { success: boolean; message: string; order?: Order } => {
    const portfolio = loadPortfolio()
    const currentPrice = currentPrices[symbol]

    if (!currentPrice) {
      return { success: false, message: "Invalid symbol or price not available" }
    }

    const executionPrice = orderType === "MARKET" ? currentPrice : limitPrice || currentPrice
    const orderValue = executionPrice * quantity

    // Check if we have enough balance for BUY orders
    if (type === "BUY" && orderValue > portfolio.virtualBalance) {
      return { success: false, message: `Insufficient balance. Required: ₹${orderValue.toLocaleString("en-IN")}` }
    }

    // For LIMIT orders, check if it can be executed immediately
    let status: "EXECUTED" | "PENDING" = "EXECUTED"
    if (orderType === "LIMIT") {
      if (type === "BUY" && limitPrice! < currentPrice) {
        status = "PENDING"
      } else if (type === "SELL" && limitPrice! > currentPrice) {
        status = "PENDING"
      }
    }

    const order: Order = {
      id: `ORD-${Date.now()}`,
      symbol,
      type,
      quantity,
      orderType,
      limitPrice,
      status,
      executedPrice: status === "EXECUTED" ? executionPrice : undefined,
      timestamp: new Date().toISOString(),
    }

    portfolio.orderHistory.unshift(order)

    if (status === "EXECUTED") {
      // Execute the order
      if (type === "BUY") {
        portfolio.virtualBalance -= orderValue

        // Check if we already have a position in this symbol
        const existingPosition = portfolio.positions.find(
          (p) => p.symbol === symbol && p.status === "OPEN" && p.type === "BUY",
        )

        if (existingPosition) {
          // Average the position
          const totalQty = existingPosition.quantity + quantity
          const totalValue = existingPosition.avgPrice * existingPosition.quantity + executionPrice * quantity
          existingPosition.avgPrice = totalValue / totalQty
          existingPosition.quantity = totalQty
          existingPosition.currentPrice = currentPrice
        } else {
          // Create new position
          const position: Position = {
            id: `POS-${Date.now()}`,
            symbol,
            type: "BUY",
            quantity,
            avgPrice: executionPrice,
            currentPrice,
            timestamp: new Date().toISOString(),
            orderType,
            status: "OPEN",
          }
          portfolio.positions.push(position)
        }
      } else {
        // SELL order - close existing position or create short
        const existingPosition = portfolio.positions.find(
          (p) => p.symbol === symbol && p.status === "OPEN" && p.type === "BUY",
        )

        if (existingPosition) {
          const sellQty = Math.min(quantity, existingPosition.quantity)
          const pnl = (executionPrice - existingPosition.avgPrice) * sellQty

          portfolio.virtualBalance += executionPrice * sellQty
          portfolio.totalRealizedPnl += pnl

          if (sellQty >= existingPosition.quantity) {
            existingPosition.status = "CLOSED"
            existingPosition.pnl = pnl
            existingPosition.closedAt = new Date().toISOString()
          } else {
            existingPosition.quantity -= sellQty
          }
        } else {
          // Short sell (virtual)
          portfolio.virtualBalance += orderValue
          const position: Position = {
            id: `POS-${Date.now()}`,
            symbol,
            type: "SELL",
            quantity,
            avgPrice: executionPrice,
            currentPrice,
            timestamp: new Date().toISOString(),
            orderType,
            status: "OPEN",
          }
          portfolio.positions.push(position)
        }
      }
    }

    savePortfolio(portfolio)
    return { success: true, message: `Order ${status === "EXECUTED" ? "executed" : "placed"} successfully`, order }
  },

  // Close a position
  closePosition: (positionId: string): { success: boolean; message: string; pnl?: number } => {
    const portfolio = loadPortfolio()
    const position = portfolio.positions.find((p) => p.id === positionId && p.status === "OPEN")

    if (!position) {
      return { success: false, message: "Position not found" }
    }

    const currentPrice = currentPrices[position.symbol] || position.currentPrice
    const pnl =
      position.type === "BUY"
        ? (currentPrice - position.avgPrice) * position.quantity
        : (position.avgPrice - currentPrice) * position.quantity

    position.status = "CLOSED"
    position.pnl = pnl
    position.closedAt = new Date().toISOString()
    position.currentPrice = currentPrice

    portfolio.virtualBalance += currentPrice * position.quantity
    portfolio.totalRealizedPnl += pnl

    savePortfolio(portfolio)
    return { success: true, message: "Position closed successfully", pnl }
  },

  // Cancel a pending order
  cancelOrder: (orderId: string): boolean => {
    const portfolio = loadPortfolio()
    const order = portfolio.orderHistory.find((o) => o.id === orderId && o.status === "PENDING")

    if (order) {
      order.status = "CANCELLED"
      savePortfolio(portfolio)
      return true
    }
    return false
  },

  // Get unrealized P&L
  getUnrealizedPnl: (): number => {
    const portfolio = loadPortfolio()
    return portfolio.positions
      .filter((p) => p.status === "OPEN")
      .reduce((sum, pos) => {
        const currentPrice = currentPrices[pos.symbol] || pos.currentPrice
        const pnl =
          pos.type === "BUY"
            ? (currentPrice - pos.avgPrice) * pos.quantity
            : (pos.avgPrice - currentPrice) * pos.quantity
        return sum + pnl
      }, 0)
  },

  // Get portfolio summary
  getSummary: () => {
    const portfolio = loadPortfolio()
    const openPositions = portfolio.positions.filter((p) => p.status === "OPEN")
    const unrealizedPnl = portfolioStore.getUnrealizedPnl()
    const totalValue =
      portfolio.virtualBalance +
      openPositions.reduce((sum, pos) => {
        const currentPrice = currentPrices[pos.symbol] || pos.currentPrice
        return sum + currentPrice * pos.quantity
      }, 0)

    return {
      virtualBalance: portfolio.virtualBalance,
      initialBalance: portfolio.initialBalance,
      totalValue,
      unrealizedPnl,
      realizedPnl: portfolio.totalRealizedPnl,
      totalPnl: unrealizedPnl + portfolio.totalRealizedPnl,
      openPositionsCount: openPositions.length,
      totalTrades: portfolio.orderHistory.filter((o) => o.status === "EXECUTED").length,
      winRate: calculateWinRate(portfolio),
    }
  },

  // Reset portfolio
  resetPortfolio: () => {
    savePortfolio(defaultPortfolio)
  },
}

function calculateWinRate(portfolio: Portfolio): number {
  const closedPositions = portfolio.positions.filter((p) => p.status === "CLOSED")
  if (closedPositions.length === 0) return 0
  const wins = closedPositions.filter((p) => (p.pnl || 0) > 0).length
  return (wins / closedPositions.length) * 100
}
