"use client"

import { Button } from "@/components/ui/button"
import { Github, Heart, Sparkles } from "lucide-react"

export function Download() {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-pink-400" />
          <span className="text-pink-400 font-medium">JOIN THE COMMUNITY ✨</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
          Ready to Code with Soul? 💖
        </h2>

        <p className="text-lg text-pink-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your coding experience into something deeply personal and expressive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-3 text-base font-medium rounded-full shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
            asChild
          >
            <a href="vscode:extension/thememebabe.thememebabe">Install Extension ✨</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-pink-300/30 text-pink-100 hover:bg-pink-500/10 px-10 py-3 text-base font-medium rounded-full bg-transparent backdrop-blur-sm"
            asChild
          >
            <a href="https://github.com/dikshaa2909/ThemeMeBabe" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-3" />
              View Source Code 💖
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-pink-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Free & Open Source</span>
          </div>
          <div className="w-1 h-1 bg-pink-400 rounded-full" />
          <span>VS Code 1.60+</span>
          <div className="w-1 h-1 bg-pink-400 rounded-full" />
          <span>No Registration Required</span>
        </div>
      </div>
    </section>
  )
}
