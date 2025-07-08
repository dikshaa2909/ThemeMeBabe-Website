"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Eye, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GitHubStats() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-md">
            <Github className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-light text-sm tracking-wider">OPEN SOURCE</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-extralight mb-8 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-green-100 to-cyan-100 bg-clip-text text-transparent">
              Built in the Open
            </span>
          </h2>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-green-400/50" />
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            ThemeMeBabe is completely open source and built with love by the developer community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Repository Preview */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/15 to-cyan-500/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <Card className="relative bg-gray-900/80 border-white/20 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-0">
                {/* GitHub Header */}
                <div className="bg-gray-800/80 p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 text-white" />
                    <div>
                      <h3 className="text-white font-medium">dikshaa2909/ThemeMeBabe</h3>
                      <Badge className="mt-1 bg-green-500/20 text-green-400 border-green-500/30 text-xs">Public</Badge>
                    </div>
                  </div>
                </div>

                {/* Repository Stats */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    🎭 <strong>ThemeMeBabe — Mood-Based VS Code Theme Switcher</strong>
                    <br />
                    <span className="text-gray-400 italic">Because your code should match your energy.</span>
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>0 stars</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <GitFork className="w-4 h-4" />
                      <span>0 forks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>0 watching</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Code className="w-4 h-4" />
                      <span>TypeScript 100%</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Latest: v0.0.3 - mood-based theme switching</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span>2 contributors</span>
                    </div>
                    <div className="text-gray-400">📁 Includes: themes/, src/, vscode/, dist/</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-white mb-4">Join the Development</h3>
              <p className="text-gray-400 leading-relaxed font-light mb-8">
                ThemeMeBabe is actively developed and welcomes contributions from developers who want to make coding
                more expressive and emotionally intelligent.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/25"
                asChild
              >
                <a href="https://github.com/dikshaa2909/ThemeMeBabe" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3" />
                  View on GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full font-medium transition-all duration-300"
                asChild
              >
                <a href="https://github.com/dikshaa2909/ThemeMeBabe/issues" target="_blank" rel="noopener noreferrer">
                  Report Issues & Suggestions
                </a>
              </Button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-white font-medium mb-3">Quick Start</h4>
              <div className="space-y-2 text-sm text-gray-400 font-mono">
                <div>git clone https://github.com/dikshaa2909/ThemeMeBabe</div>
                <div>cd ThemeMeBabe</div>
                <div>npm install</div>
                <div>npm run compile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
