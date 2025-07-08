"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Sparkles, ExternalLink, Heart, Star } from "lucide-react"
import { useState, useEffect } from "react"

const moods = [
  { name: "focused", color: "text-green-400", bg: "bg-green-500/10", glow: "shadow-green-500/20", emoji: "🎯" },
  { name: "neutral", color: "text-blue-400", bg: "bg-blue-500/10", glow: "shadow-blue-500/20", emoji: "😊" },
  { name: "frustrated", color: "text-red-400", bg: "bg-red-500/10", glow: "shadow-red-500/20", emoji: "💢" },
  { name: "tired", color: "text-pink-400", bg: "bg-pink-500/10", glow: "shadow-pink-500/20", emoji: "😴" },
]

export function Hero() {
  const [currentMood, setCurrentMood] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMood((prev) => (prev + 1) % moods.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-8 relative overflow-hidden"
    >
      {/* PERFECT ATTRACTIVE DARK BACKGROUND */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-black"></div>

        {/* Animated gradient mesh - darker but beautiful */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-gradient-to-r from-yellow-400/10 to-pink-500/10 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-r from-purple-600/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse-medium" />
        </div>

        {/* Enhanced sparkly grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:80px_80px] animate-twinkle" />

        {/* More floating girly elements */}
        <div className="absolute top-20 left-20 text-pink-400/50 animate-float-heart">
          <Heart className="w-5 h-5" />
        </div>
        <div className="absolute top-32 right-32 text-purple-400/50 animate-float-star">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-40 left-1/3 text-cyan-400/50 animate-float-sparkle">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute bottom-40 right-40 text-pink-500/50 animate-float-heart-reverse">
          <Heart className="w-7 h-7" />
        </div>
        <div className="absolute bottom-32 left-40 text-purple-500/50 animate-float-star-reverse">
          <Star className="w-5 h-5" />
        </div>
        <div className="absolute top-1/3 right-20 text-yellow-400/50 animate-float-sparkle-reverse">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-pink-400/50 animate-float-heart">
          <Heart className="w-4 h-4" />
        </div>
        <div className="absolute top-60 left-1/4 text-purple-400/50 animate-float-star">
          <Star className="w-5 h-5" />
        </div>
        <div className="absolute top-1/2 left-16 text-cyan-400/50 animate-float-sparkle">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-1/3 right-16 text-pink-500/50 animate-float-heart-reverse">
          <Heart className="w-6 h-6" />
        </div>

        {/* Enhanced glittery particles */}
        <div className="absolute top-24 left-24 w-3 h-3 bg-pink-400/40 rounded-full animate-glitter-1" />
        <div className="absolute top-48 right-48 w-2 h-2 bg-purple-400/40 rounded-full animate-glitter-2" />
        <div className="absolute bottom-48 left-48 w-4 h-4 bg-cyan-400/40 rounded-full animate-glitter-3" />
        <div className="absolute bottom-24 right-24 w-3 h-3 bg-pink-500/40 rounded-full animate-glitter-4" />
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-yellow-400/40 rounded-full animate-glitter-5" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/40 rounded-full animate-glitter-6" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-400/40 rounded-full animate-glitter-1" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-glitter-2" />

        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-400/30 to-purple-500/30 transform rotate-45 animate-spin-slow" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-bl from-cyan-400/30 to-blue-500/30 transform rotate-12 animate-bounce-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-gradient-to-tr from-yellow-400/25 to-orange-500/25 transform -rotate-12 animate-wiggle" />
        <div className="absolute bottom-16 right-1/4 w-7 h-7 bg-gradient-to-tl from-purple-400/30 to-pink-500/30 transform rotate-45 animate-spin-reverse" />

        {/* Dreamy light rays */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-pink-400/20 via-transparent to-transparent transform rotate-12 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-400/15 via-transparent to-transparent transform -rotate-12 animate-pulse delay-1000" />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent transform rotate-6 animate-pulse delay-2000" />

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Girly badge */}
        <Badge className="mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-300/30 text-white hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-500 backdrop-blur-md shadow-lg shadow-pink-500/20">
          <Sparkles className="w-4 h-4 mr-2 animate-pulse text-pink-300" />
          Live on VS Code • 6+ installs ✨
        </Badge>

        <p className="text-pink-200 text-base mb-6 font-light tracking-wide">
          Because your code should match your energy 💖
        </p>

        {/* Sparkly main title */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-7xl font-extralight mb-4 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              ThemeMeBabe
            </span>
          </h1>

          {/* Girly decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-400/50" />
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/50" />
          </div>
        </div>

        {/* Cute description */}
        <div className="relative mb-10">
          <p className="text-xl text-pink-100 mb-4 leading-relaxed font-light max-w-3xl mx-auto">
            A VS Code extension that changes your theme based on your{" "}
            <span className="relative text-white font-normal">
              coding mood
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-pink-400/80 to-purple-400/80" />
            </span>{" "}
            — focused, tired, neutral, or frustrated.
          </p>
          <p className="text-base text-pink-300 font-light">
            <span className="text-pink-400">Mood-based vibes</span>, automatically. ✨
          </p>
        </div>

        {/* Fixed CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-2xl shadow-pink-500/30 group"
            asChild
          >
            <a href="vscode:extension/thememebabe.thememebabe">
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Install Extension ✨
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-pink-300/30 text-pink-100 hover:bg-pink-500/10 hover:border-pink-300/50 px-8 py-3 bg-pink-500/5 backdrop-blur-sm rounded-full font-medium transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a href="https://github.com/dikshaa2909/ThemeMeBabe" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              View Source 💖
            </a>
          </Button>
        </div>

        {/* Girly mood indicators */}
        <div className="flex flex-wrap justify-center gap-3">
          {moods.map((mood, index) => (
            <div
              key={index}
              className={`relative px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-700 hover:scale-105 ${
                currentMood === index
                  ? `${mood.bg} border-pink-300/40 shadow-2xl ${mood.glow}`
                  : "bg-pink-500/10 border-pink-300/20 hover:bg-pink-500/15"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{mood.emoji}</span>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-700 ${
                    currentMood === index ? mood.color.replace("text-", "bg-") + " shadow-lg" : "bg-pink-400"
                  }`}
                />
                <span
                  className={`text-sm font-light transition-colors duration-700 ${
                    currentMood === index ? "text-white" : "text-pink-200"
                  }`}
                >
                  {mood.name}
                </span>
              </div>

              {/* Enhanced girly glow effect */}
              {currentMood === index && (
                <div className={`absolute inset-0 rounded-full ${mood.bg} blur-xl -z-10 opacity-60 animate-pulse`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cute scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-300/40 rounded-full flex justify-center backdrop-blur-sm bg-pink-500/10 shadow-lg">
          <div className="w-1 h-3 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2 animate-pulse shadow-lg" />
        </div>
      </div>
    </section>
  )
}
