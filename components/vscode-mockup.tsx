export function VSCodeMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
        {/* Browser-like header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-700 px-4 py-1 rounded text-sm text-gray-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              VS Code - ThemeMeBabe Extension
            </div>
          </div>
        </div>

        {/* VS Code interface */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 bg-gray-800 border-r border-gray-700">
            <div className="p-3 space-y-3">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </div>
          </div>

          {/* File explorer */}
          <div className="w-64 bg-gray-850 border-r border-gray-700 p-4">
            <div className="text-xs text-gray-400 mb-3">EXPLORER</div>
            <div className="space-y-1 text-sm">
              <div className="text-gray-300">📁 src</div>
              <div className="text-gray-300 ml-4">📄 main.js</div>
              <div className="text-gray-300 ml-4">📄 app.css</div>
              <div className="text-pink-400 ml-4">📄 mood-detector.js</div>
            </div>
          </div>

          {/* Code editor */}
          <div className="flex-1 bg-gray-900 relative">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
              <div className="text-sm text-gray-300">mood-detector.js</div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-gray-500">1</div>
              <div className="text-gray-500">2</div>
              <div className="text-gray-500">3</div>
              <div className="text-gray-500">4</div>
              <div className="text-gray-500">5</div>
              <div className="text-gray-500">6</div>
              <div className="text-gray-500">7</div>
              <div className="text-gray-500">8</div>
            </div>
            <div className="absolute top-20 left-80 p-4 font-mono text-sm space-y-1">
              <div>
                <span className="text-purple-400">const</span> <span className="text-blue-300">detectMood</span>{" "}
                <span className="text-white">=</span> <span className="text-yellow-300">()</span>{" "}
                <span className="text-white">=&gt;</span> <span className="text-yellow-300">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-gray-400">// Analyzing typing patterns...</span>
              </div>
              <div className="ml-4">
                <span className="text-purple-400">if</span> <span className="text-yellow-300">(</span>
                <span className="text-blue-300">typingSpeed</span> <span className="text-white">&gt;</span>{" "}
                <span className="text-green-300">100</span>
                <span className="text-yellow-300">)</span> <span className="text-yellow-300">{"{"}</span>
              </div>
              <div className="ml-8">
                <span className="text-purple-400">return</span> <span className="text-green-300">'frustrated'</span>
                <span className="text-white">;</span>
              </div>
              <div className="ml-4">
                <span className="text-yellow-300">{"}"}</span>
              </div>
              <div className="ml-4">
                <span className="text-purple-400">return</span> <span className="text-green-300">'focused'</span>
                <span className="text-white">;</span>
              </div>
              <div>
                <span className="text-yellow-300">{"}"}</span>
              </div>
            </div>

            {/* Theme notification */}
            <div className="absolute bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              🎨 Theme switched to "Rizz Focused"
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
