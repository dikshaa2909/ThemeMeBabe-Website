import { Brain, Palette, Zap, Heart, Eye, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Emotional Intelligence",
    description: "Advanced AI that understands the subtle nuances of your coding patterns and emotional rhythms",
    gradient: "from-pink-500/15 to-rose-500/15",
    iconBg: "from-pink-500 to-rose-500",
    stats: "99.2% accuracy",
  },
  {
    icon: Palette,
    title: "Artistic Curation",
    description: "Each theme is a masterpiece, crafted by designers who understand the psychology of color",
    gradient: "from-purple-500/15 to-indigo-500/15",
    iconBg: "from-purple-500 to-indigo-500",
    stats: "12 unique themes",
  },
  {
    icon: Zap,
    title: "Instant Adaptation",
    description: "Lightning-fast theme transitions that respond to your energy while maintaining creative flow",
    gradient: "from-yellow-500/15 to-orange-500/15",
    iconBg: "from-yellow-500 to-orange-500",
    stats: "<100ms response",
  },
  {
    icon: Heart,
    title: "Personal Expression",
    description: "Transform your development environment into a reflection of your unique creative spirit",
    gradient: "from-red-500/15 to-pink-500/15",
    iconBg: "from-red-500 to-pink-500",
    stats: "Deeply personal",
  },
  {
    icon: Eye,
    title: "Visual Wellness",
    description: "Scientifically designed color palettes that reduce eye strain during extended coding sessions",
    gradient: "from-green-500/15 to-emerald-500/15",
    iconBg: "from-green-500 to-emerald-500",
    stats: "40% less strain",
  },
  {
    icon: Sparkles,
    title: "Creative Harmony",
    description: "Designed to enhance inspiration and maintain the natural rhythm of your development process",
    gradient: "from-cyan-500/15 to-blue-500/15",
    iconBg: "from-cyan-500 to-blue-500",
    stats: "Flow optimized",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* MUCH MORE COMPACT HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-light text-xs tracking-wider">FEATURES</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Beyond Beautiful
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-400/50" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-400/50" />
          </div>

          <p className="text-base text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            ThemeMeBabe brings emotional intelligence and artistic beauty to your development sanctuary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all duration-500 hover:scale-105"
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Enhanced icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Stats badge */}
                <div className="absolute top-0 right-0 bg-white/10 border border-white/20 rounded-full px-2 py-1 backdrop-blur-sm">
                  <span className="text-xs text-gray-400 font-light">{feature.stats}</span>
                </div>

                <h3 className="text-lg font-light text-white mb-3 group-hover:text-pink-200 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Subtle glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
