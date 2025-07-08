"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"
import { Palette, Code, Eye } from "lucide-react"

const themes = [
  {
    name: "Rizz Focused",
    mood: "Get in the Zone",
    description: "Minimal, clean, and high-contrast theme to get in the zone",
    image: "/theme-focused.png",
    colors: ["#059669", "#10B981", "#34D399"],
    accent: "from-green-500/20 to-emerald-500/20",
    emoji: "🎯",
    stats: { energy: "High", focus: "Intense", comfort: "Sharp" },
  },
  {
    name: "Rizz Neutral",
    mood: "Chill Vibes",
    description: "Balanced, calming tones for chill or in-between coding sessions",
    image: "/theme-neutral.png",
    colors: ["#1E40AF", "#3B82F6", "#60A5FA"],
    accent: "from-blue-500/20 to-cyan-500/20",
    emoji: "😊",
    stats: { energy: "Calm", focus: "Steady", comfort: "Balanced" },
  },
  {
    name: "Rizz Frustrated",
    mood: "Bug Hunt Mode",
    description: "Intense, high-saturation theme for aggressive bug-hunting sessions",
    image: "/theme-frustrated.png",
    colors: ["#8B1538", "#DC2626", "#EF4444"],
    accent: "from-red-500/20 to-orange-500/20",
    emoji: "💢",
    stats: { energy: "Intense", focus: "Aggressive", comfort: "High-Contrast" },
  },
  {
    name: "Rizz Tired",
    mood: "Brain Soothing",
    description: "Soft, muted palette to soothe your brain and reduce visual fatigue",
    image: "/theme-tired.png",
    colors: ["#EC4899", "#F472B6", "#FBBF24"],
    accent: "from-pink-500/20 to-purple-500/20",
    emoji: "😴",
    stats: { energy: "Low", focus: "Gentle", comfort: "Soothing" },
  },
]

const comingSoonThemes = [
  { name: "Sad Girl Coder", emoji: "😢", color: "text-purple-400" },
  { name: "Overcaffeinated Dev", emoji: "☕", color: "text-yellow-400" },
  { name: "Cracked Mode™", emoji: "🔥", color: "text-orange-400" },
]

export function ThemeShowcase() {
  const [activeTheme, setActiveTheme] = useState(0)

  return (
    <section id="themes" className="py-12 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* MUCH MORE COMPACT HEADER */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-md">
            <Palette className="w-3 h-3 text-pink-400" />
            <span className="text-pink-400 font-light text-xs tracking-wider">MOOD THEMES</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extralight mb-3 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
              Handcrafted Aesthetics
            </span>
          </h2>

          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Each mood has a handcrafted aesthetic optimized for both readability and vibes
          </p>
        </div>

        {/* MUCH MORE COMPACT LAYOUT */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* BIGGER Theme Preview */}
          <div className="lg:col-span-3 relative group">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/30 shadow-2xl">
              {/* VS Code header */}
              <div className="flex items-center gap-3 p-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs text-gray-400 font-light">VS Code - ThemeMeBabe</div>
              </div>

              <Image
                src={themes[activeTheme].image || "/placeholder.svg"}
                alt={themes[activeTheme].name}
                width={800}
                height={400}
                className="w-full h-auto transition-all duration-500"
              />

              {/* Status indicator */}
              <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-md rounded-lg px-3 py-1 border border-white/20 shadow-lg">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50" />
                  <span className="text-white font-light">{themes[activeTheme].name}</span>
                  <span className="text-sm">{themes[activeTheme].emoji}</span>
                </div>
              </div>
            </div>
          </div>

          {/* MUCH MORE COMPACT Theme List */}
          <div className="lg:col-span-2 space-y-2">
            {themes.map((theme, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-500 group relative overflow-hidden ${
                  activeTheme === index
                    ? `bg-gradient-to-r ${theme.accent} border-white/30 shadow-xl scale-105`
                    : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/25 hover:scale-102"
                }`}
                onClick={() => setActiveTheme(index)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-base">{theme.emoji}</div>
                    <div>
                      <h3 className="text-sm font-light text-white group-hover:text-pink-200 transition-colors">
                        {theme.name}
                      </h3>
                      <Badge className="mt-1 bg-white/15 text-gray-300 border-white/25 font-light text-xs">
                        {theme.mood}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-2 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {theme.description}
                  </p>

                  <div className="space-y-1">
                    {/* Color palette */}
                    <div className="flex items-center gap-2">
                      <Code className="w-3 h-3 text-gray-500" />
                      <div className="flex gap-1">
                        {theme.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="relative w-3 h-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Theme stats */}
                    <div className="flex items-center gap-2">
                      <Eye className="w-3 h-3 text-gray-500" />
                      <div className="flex gap-2 text-xs text-gray-400">
                        <span>
                          Energy: <span className="text-white">{theme.stats.energy}</span>
                        </span>
                        <span>
                          Focus: <span className="text-white">{theme.stats.focus}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Coming Soon Section */}
            <Card className="bg-white/5 border-white/15 border-dashed">
              <CardContent className="p-3">
                <h3 className="text-xs font-light text-white mb-2 flex items-center gap-2">
                  <span className="animate-pulse">✨</span>
                  Coming Soon
                </h3>
                <div className="space-y-1">
                  {comingSoonThemes.map((theme, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-400">
                      <span className="text-xs">{theme.emoji}</span>
                      <span className={`font-light text-xs ${theme.color}`}>{theme.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
