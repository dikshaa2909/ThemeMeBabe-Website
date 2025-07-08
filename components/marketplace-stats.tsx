"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Star, Users, Calendar, Code, ExternalLink } from "lucide-react"

export function MarketplaceStats() {
  return (
    <section className="py-20 px-6 relative">
      {/* Girly background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-300/30 backdrop-blur-md">
            <Download className="w-4 h-4 text-pink-300" />
            <span className="text-pink-300 font-light text-sm tracking-wider">INSTALL EXTENSION ✨</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Live & Available 💖
            </span>
          </h2>

          <p className="text-lg text-pink-200 max-w-2xl mx-auto font-light leading-relaxed">
            ThemeMeBabe is officially published on VS Code and ready for installation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Marketplace Preview */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <Card className="relative bg-gray-900/80 border-pink-300/20 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-0">
                {/* Marketplace Header */}
                <div className="bg-gray-800/80 p-4 border-b border-pink-300/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-white">ThemeMeBabe ✨</h3>
                      <p className="text-pink-200 text-sm">ThemeMeBabe by Diksha</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">Free</Badge>
                        <div className="flex items-center gap-1 text-xs text-pink-300">
                          <Download className="w-3 h-3" />
                          <span>6 installs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketplace Details */}
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-pink-100 leading-relaxed text-sm">
                      A VS Code extension that changes your theme based on your coding mood — focused, tired, neutral,
                      or frustrated. Mood-based vibes, automatically. ✨
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-pink-300">
                      <Calendar className="w-3 h-3" />
                      <span>Version 0.0.3</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-300">
                      <Code className="w-3 h-3" />
                      <span>Universal</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-300">
                      <Users className="w-3 h-3" />
                      <span>By Diksha</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-300">
                      <Star className="w-3 h-3" />
                      <span>No ratings yet</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Installation Guide */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-white mb-3">Easy Installation 💖</h3>
              <p className="text-pink-200 leading-relaxed font-light mb-6">
                Get ThemeMeBabe up and running in your VS Code environment in seconds.
              </p>
            </div>

            <div className="space-y-4">
              {/* Method 1: Direct Install */}
              <Card className="bg-pink-500/10 border-pink-300/20 hover:bg-pink-500/15 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-pink-500/30 rounded-lg flex items-center justify-center">
                      <Download className="w-4 h-4 text-pink-300" />
                    </div>
                    <h4 className="text-base font-light text-white">Direct Install ✨</h4>
                  </div>
                  <p className="text-pink-200 text-sm mb-3">Install directly from VS Code Extensions panel</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-500/25"
                    asChild
                  >
                    <a href="vscode:extension/thememebabe.thememebabe">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Install Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Method 2: Command Line */}
              <Card className="bg-purple-500/10 border-purple-300/20 hover:bg-purple-500/15 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-purple-300" />
                    </div>
                    <h4 className="text-base font-light text-white">Command Line 💻</h4>
                  </div>
                  <p className="text-purple-200 text-sm mb-3">Use VS Code's Quick Open (Ctrl+P)</p>
                  <div className="bg-black/50 rounded p-2 font-mono text-sm text-pink-300 border border-pink-500/20">
                    ext install thememebabe.thememebabe
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
