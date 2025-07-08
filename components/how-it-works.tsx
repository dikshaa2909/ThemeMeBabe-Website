const steps = [
  {
    number: "01",
    title: "Observe",
    description: "Quietly monitors your typing patterns, rhythm, and coding behavior with respect for your privacy",
    icon: "👁️",
  },
  {
    number: "02",
    title: "Understand",
    description: "Emotional AI gently processes your patterns to understand your current state and energy level",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Transform",
    description: "Seamlessly adapts your environment with the perfect aesthetic theme that matches your mood",
    icon: "✨",
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 px-6 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-cyan-400 font-light text-sm tracking-wide">PROCESS</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Gentle Intelligence
            </span>
          </h2>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto mb-8" />

          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the seamless fusion of technology and emotion as ThemeMeBabe creates harmony between your inner
            state and coding environment
          </p>
        </div>

        <div className="relative">
          {/* Elegant connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20" />

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-black border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-light text-white">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-light text-white mb-6 group-hover:text-pink-200 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-2xl font-light text-white mb-4">Future: Facial Recognition</h3>
            <p className="text-gray-300 leading-relaxed font-light">
              We're developing gentle webcam integration that will analyze facial expressions for even more intuitive
              mood detection and aesthetic harmony.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-light">
            Free and open source • Privacy-first design • No data collection • Respectful technology
          </p>
        </div>
      </div>
    </section>
  )
}
