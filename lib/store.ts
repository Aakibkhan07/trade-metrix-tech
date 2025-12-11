// In-memory store for demo purposes
// In production, replace with a proper database like Supabase, Neon, etc.

export interface User {
  id: string
  fullName: string
  email: string
  mobile: string
  password: string
  plan: string
  role: "user" | "admin"
  consentStatus: "pending" | "accepted"
  consentTimestamp?: string
  consentIpAddress?: string
  createdAt: string
}

export function generateConsentToken(email: string): string {
  return btoa(email)
}

export function getConsentLink(email: string): string {
  const token = generateConsentToken(email)
  return `/consent/${token}`
}

// Initialize with admin user
const users: Map<string, User> = new Map([
  [
    "admin@trademetrix.com",
    {
      id: "admin-001",
      fullName: "Admin User",
      email: "admin@trademetrix.com",
      mobile: "+1234567890",
      password: "admin123", // In production, use hashed passwords
      plan: "yearly",
      role: "admin",
      consentStatus: "accepted",
      consentTimestamp: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ],
])

export const store = {
  getUser: (email: string): User | undefined => {
    return users.get(email.toLowerCase())
  },

  getUserByMobile: (mobile: string): User | undefined => {
    for (const user of users.values()) {
      if (user.mobile === mobile) {
        return user
      }
    }
    return undefined
  },

  createUser: (userData: Omit<User, "id" | "role" | "consentStatus" | "createdAt">): User => {
    const user: User = {
      ...userData,
      id: `user-${Date.now()}`,
      email: userData.email.toLowerCase(),
      role: "user",
      consentStatus: "pending",
      createdAt: new Date().toISOString(),
    }
    users.set(user.email, user)
    return user
  },

  updateUserConsent: (email: string, ipAddress: string): User | undefined => {
    const user = users.get(email.toLowerCase())
    if (user) {
      user.consentStatus = "accepted"
      user.consentTimestamp = new Date().toISOString()
      user.consentIpAddress = ipAddress
      users.set(user.email, user)
      return user
    }
    return undefined
  },

  getAllUsers: (): User[] => {
    return Array.from(users.values())
  },
}
