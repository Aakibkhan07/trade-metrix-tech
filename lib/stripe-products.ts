export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  market: 'equity' | 'mcx'
  period: 'monthly' | 'quarterly' | 'half-yearly' | 'annual'
  features: string[]
  popular?: boolean
}

// All pricing plans in INR
// Convert to cents (multiply by 100)
export const PRODUCTS: Product[] = [
  // Equity Plans
  {
    id: 'equity-monthly',
    name: 'Monthly - Equity',
    description: 'Perfect for getting started with equity options',
    priceInCents: 1500000, // ₹15,000
    market: 'equity',
    period: 'monthly',
    features: [
      '2 Active Strategies',
      'Real-Time Signals',
      'One-Click Execution',
      'Basic Stoploss',
      'Email Support',
      'Single Broker',
    ],
  },
  {
    id: 'equity-quarterly',
    name: 'Quarterly - Equity',
    description: 'Save 22% with quarterly plan',
    priceInCents: 3500000, // ₹35,000
    market: 'equity',
    period: 'quarterly',
    features: [
      '4 Active Strategies',
      'Real-Time Signals',
      'One-Click Execution',
      'Smart Stoploss',
      '3 Broker Integrations',
      'Priority Email Support',
    ],
  },
  {
    id: 'equity-half-yearly',
    name: 'Half-Yearly - Equity',
    description: 'Save 28% with half-yearly plan',
    priceInCents: 6500000, // ₹65,000
    market: 'equity',
    period: 'half-yearly',
    features: [
      '8 Active Strategies',
      'Real-Time Signals',
      'One-Click Execution',
      'Smart Stoploss',
      'Auto Hedging',
      '5 Broker Integrations',
      'Strategy Builder Access',
      'Phone + Email Support',
    ],
    popular: true,
  },
  {
    id: 'equity-annual',
    name: 'Annual - Equity',
    description: 'Save 30% with annual plan',
    priceInCents: 12500000, // ₹1,25,000
    market: 'equity',
    period: 'annual',
    features: [
      '15 Active Strategies',
      'All Platform Features',
      'Smart + Trailing SL',
      'Auto Hedging',
      'Unlimited Brokers',
      'Custom Strategy Dev',
      'Strategy Builder Pro',
      '24/7 Priority Support',
      'Dedicated Account Manager',
    ],
  },

  // MCX Plans
  {
    id: 'mcx-monthly',
    name: 'Monthly - MCX',
    description: 'Perfect for getting started with MCX trading',
    priceInCents: 1800000, // ₹18,000
    market: 'mcx',
    period: 'monthly',
    features: [
      '2 Active Strategies',
      'Real-Time Signals',
      'One-Click Execution',
      'Basic Stoploss',
      'Email Support',
      'Single Broker',
    ],
  },
  {
    id: 'mcx-quarterly',
    name: 'Quarterly - MCX',
    description: 'Save 18% with quarterly plan',
    priceInCents: 4400000, // ₹44,000
    market: 'mcx',
    period: 'quarterly',
    features: [
      '4 Active Strategies',
      'Real-Time Signals',
      'One-Click Execution',
      'Smart Stoploss',
      '3 Broker Integrations',
      'Priority Email Support',
    ],
  },
  {
    id: 'mcx-half-yearly',
    name: 'Half-Yearly - MCX',
    description: 'Save 26% with half-yearly plan',
    priceInCents: 7500000, // ₹75,000
    market: 'mcx',
    period: 'half-yearly',
    features: [
      '8 Active Strategies',
      'Real-Time Signals',
      'One-Click Execution',
      'Smart Stoploss',
      'Auto Hedging',
      '5 Broker Integrations',
      'Strategy Builder Access',
      'Phone + Email Support',
    ],
    popular: true,
  },
  {
    id: 'mcx-annual',
    name: 'Annual - MCX',
    description: 'Save 28% with annual plan',
    priceInCents: 15500000, // ₹1,55,000
    market: 'mcx',
    period: 'annual',
    features: [
      '15 Active Strategies',
      'All Platform Features',
      'Smart + Trailing SL',
      'Auto Hedging',
      'Unlimited Brokers',
      'Custom Strategy Dev',
      'Strategy Builder Pro',
      '24/7 Priority Support',
      'Dedicated Account Manager',
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function formatPrice(priceInCents: number): string {
  const priceInRupees = priceInCents / 100
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(priceInRupees)
}
