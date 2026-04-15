"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Settings,
  Moon,
  Sun,
  Bell,
  Volume2,
  MessageCircle,
  Shield,
  User,
  Save,
  Check,
  Palette,
  Monitor,
  Smartphone,
} from "lucide-react"
import { tradingStore, type UserSettings } from "@/lib/trading-store"

export default function SettingsPage() {
  const router = useRouter()
  const [settings, setSettings] = useState<UserSettings>({
    darkMode: true,
    telegramChatId: "",
    notifications: true,
    soundAlerts: false,
  })
  const [saved, setSaved] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light" | "system">("dark")

  useEffect(() => {
    const storedSettings = tradingStore.getSettings()
    setSettings(storedSettings)

    // Check current theme
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const updateSetting = <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  const saveSettings = () => {
    tradingStore.updateSettings(settings)

    // Apply theme
    if (settings.darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const applyTheme = (newTheme: "dark" | "light" | "system") => {
    setTheme(newTheme)

    if (newTheme === "dark" || (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
      updateSetting("darkMode", true)
    } else {
      document.documentElement.classList.remove("dark")
      updateSetting("darkMode", false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
                className="hover:bg-purple-500/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">
                  <Settings className="h-5 w-5 text-purple-400" />
                  Settings
                </h1>
                <p className="text-sm text-muted-foreground">Customize your trading experience</p>
              </div>
            </div>
            <Button
              onClick={saveSettings}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {saved ? <Check className="h-4 w-4 mr-2" /> : <Save className="h-4 w-4 mr-2" />}
              {saved ? "Saved!" : "Save Changes"}
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="space-y-6">
            {/* Appearance */}
            <Card className="glass glow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Palette className="h-5 w-5 text-purple-400 icon-glow" />
                  </div>
                  Appearance
                </CardTitle>
                <CardDescription>Customize how the dashboard looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Theme Mode</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => applyTheme("light")}
                      className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                        theme === "light"
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-border/50 hover:border-purple-500/50"
                      }`}
                    >
                      <div className="h-12 w-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                        <Sun className="h-6 w-6 text-yellow-500" />
                      </div>
                      <span className="text-sm font-medium">Light</span>
                      {theme === "light" && <Badge className="bg-purple-500">Active</Badge>}
                    </button>
                    <button
                      onClick={() => applyTheme("dark")}
                      className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                        theme === "dark"
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-border/50 hover:border-purple-500/50"
                      }`}
                    >
                      <div className="h-12 w-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center">
                        <Moon className="h-6 w-6 text-purple-400" />
                      </div>
                      <span className="text-sm font-medium">Dark</span>
                      {theme === "dark" && <Badge className="bg-purple-500">Active</Badge>}
                    </button>
                    <button
                      onClick={() => applyTheme("system")}
                      className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                        theme === "system"
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-border/50 hover:border-purple-500/50"
                      }`}
                    >
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-white to-gray-900 border border-gray-400 flex items-center justify-center">
                        <Monitor className="h-6 w-6 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium">System</span>
                      {theme === "system" && <Badge className="bg-purple-500">Active</Badge>}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="glass glow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-blue-400 icon-glow-blue" />
                  </div>
                  Notifications
                </CardTitle>
                <CardDescription>Manage your alert preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive trade alerts and market updates</p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(checked) => updateSetting("notifications", checked)}
                  />
                </div>

                <Separator className="bg-border/50" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Volume2 className="h-4 w-4" />
                      Sound Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">Play sound when receiving alerts</p>
                  </div>
                  <Switch
                    checked={settings.soundAlerts}
                    onCheckedChange={(checked) => updateSetting("soundAlerts", checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Telegram Integration */}
            <Card className="glass glow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-blue-400 icon-glow-blue" />
                  </div>
                  Telegram Alerts
                </CardTitle>
                <CardDescription>Connect your Telegram for real-time alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="telegram-chat-id">Telegram Chat ID</Label>
                  <div className="flex gap-3">
                    <Input
                      id="telegram-chat-id"
                      placeholder="Enter your Telegram Chat ID"
                      value={settings.telegramChatId}
                      onChange={(e) => updateSetting("telegramChatId", e.target.value)}
                      className="bg-background/50 border-border/50"
                    />
                    <Button
                      variant="outline"
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                    >
                      Verify
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    To get your Chat ID, message our bot @TradeMetrixBot and type /start
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <h4 className="font-medium text-blue-400 mb-2">How to connect:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Open Telegram and search for @TradeMetrixBot</li>
                    <li>Start a conversation with /start</li>
                    <li>Copy your Chat ID from the bot response</li>
                    <li>Paste it above and click Verify</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Account */}
            <Card className="glass glow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-green-400" />
                  </div>
                  Account
                </CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-sm text-muted-foreground">Your subscription details</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500">Pro Plan</Badge>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
                  >
                    Enable
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-muted-foreground">Download for iOS or Android</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                    Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="glass border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <div className="h-10 w-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-red-400" />
                  </div>
                  Danger Zone
                </CardTitle>
                <CardDescription>Irreversible actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
