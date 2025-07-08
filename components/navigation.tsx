"use client"

import { Button } from "@/components/ui/button"
import { Github, Download } from "lucide-react"

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-lg font-bold text-white">
              <span className="text-pink-400">💖</span> ThemeMeBabe ✨
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("themes")}
              className="text-pink-200 hover:text-white transition-colors text-sm cursor-pointer"
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection("simulator")}
              className="text-pink-200 hover:text-white transition-colors text-sm cursor-pointer"
            >
              Try It
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-pink-200 hover:text-white transition-colors text-sm cursor-pointer"
            >
              Features
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-pink-200 hover:text-white text-sm" asChild>
              <a href="https://github.com/dikshaa2909/ThemeMeBabe" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 text-sm shadow-lg shadow-pink-500/25"
              asChild
            >
              <a href="vscode:extension/thememebabe.thememebabe">
                <Download className="w-4 h-4 mr-2" />
                Install Extension
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
