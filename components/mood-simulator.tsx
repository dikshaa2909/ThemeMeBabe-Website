"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Zap, Coffee, Target, Smile } from "lucide-react"

const moodStates = [
  {
    name: "Frustrated",
    icon: Zap,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    description: "Rapid, aggressive typing detected",
    theme: "Rizz Frustrated",
    speed: "15+ keys/s",
    pattern: "Burst typing with long pauses",
  },
  {
    name: "Tired",
    icon: Coffee,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    description: "Slow, deliberate keystrokes",
    theme: "Rizz Tired",
    speed: "< 5 keys/s",
    pattern: "Long pauses between words",
  },
  {
    name: "Focused",
    icon: Target,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    description: "Steady, consistent rhythm",
    theme: "Rizz Focused",
    speed: "8-12 keys/s",
    pattern: "Consistent flow, minimal backspacing",
  },
  {
    name: "Neutral",
    icon: Smile,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    description: "Balanced typing patterns",
    theme: "Rizz Neutral",
    speed: "5-8 keys/s",
    pattern: "Regular rhythm with normal pauses",
  },
]

export function MoodSimulator() {
  const [currentMood, setCurrentMood] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)
  const [typingText, setTypingText] = useState("")

  const simulateTyping = (moodIndex: number) => {
    setCurrentMood(moodIndex)
    setIsSimulating(true)
    setTypingText("")

    const texts = [
      "function debugThis() { console.log('WHY WON\\'T YOU WORK?!'); }",
      "const sleepyCode = () => { return 'almost... done...'; }",
      "class ProductiveMode { constructor() { this.focus = 'maximum'; } }",
      "const balancedApproach = () => { return 'steady progress'; }",
    ]

    const text = texts[moodIndex]
    const speeds = [50, 200, 80, 120] // Different typing speeds for each mood

    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypingText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setIsSimulating(false), 1000)
      }
    }, speeds[moodIndex])
  }

  return (
    <section id="simulator" className="py-16 px-6 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Try the <span className="text-purple-400">Mood Detector</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See how ThemeMeBabe analyzes different typing patterns to detect your emotional state and switch themes
            accordingly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mood Buttons */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white mb-4">Simulate Your Mood</h3>
            {moodStates.map((mood, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  currentMood === index && isSimulating
                    ? `${mood.bgColor} border-white/20`
                    : "bg-white/5 border-white/10 hover:bg-white/8"
                }`}
              >
                <CardContent className="p-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto"
                    onClick={() => simulateTyping(index)}
                    disabled={isSimulating}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={`w-10 h-10 rounded-xl ${mood.bgColor} flex items-center justify-center`}>
                        <mood.icon className={`w-5 h-5 ${mood.color}`} />
                      </div>
                      <div className="text-left flex-1">
                        <h4 className="text-base font-semibold text-white">{mood.name}</h4>
                        <p className="text-xs text-gray-400">{mood.description}</p>
                        <div className="flex gap-3 mt-1 text-xs text-gray-500">
                          <span>Speed: {mood.speed}</span>
                          <span>Theme: {mood.theme}</span>
                        </div>
                      </div>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Typing Simulator */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Live Typing Analysis</h3>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-4">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Current Mood</span>
                    <div
                      className={`px-2 py-1 rounded-full text-xs ${moodStates[currentMood].bgColor} ${moodStates[currentMood].color}`}
                    >
                      {moodStates[currentMood].name}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Pattern: {moodStates[currentMood].pattern}</div>
                </div>

                <div className="bg-black rounded-lg p-3 font-mono text-sm min-h-[80px] flex items-center">
                  <span className="text-green-400">
                    {typingText}
                    {isSimulating && <span className="animate-pulse">|</span>}
                  </span>
                </div>

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>Speed: {moodStates[currentMood].speed}</span>
                  <span>Theme: {moodStates[currentMood].theme}</span>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Click any mood above to see how ThemeMeBabe detects and responds to different typing patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
