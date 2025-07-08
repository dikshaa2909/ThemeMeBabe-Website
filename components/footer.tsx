import { Github, Twitter, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center space-x-3 justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ThemeMeBabe
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
            Making coding feel less robotic and more like self-expression. Your mood, your theme, your code.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/dikshaa2909/"
              className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://x.com/diiksshaaaa"
              className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
              <span className="text-sm">Twitter / X</span>
            </a>
            <a
              href="https://www.linkedin.com/in/diksha-deware-77a9772b5/"
              className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Made with love */}
          <div className="pt-8 border-t border-white/10 w-full text-center">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-pink-500" /> by Diksha
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
