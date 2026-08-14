import { useState } from 'react'

export function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pigeon-950/50 via-war-950 to-swift-900/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pigeon-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-swift-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 tag-swift px-4 py-1.5 mb-8 animate-soar">
            <span className="w-2 h-2 rounded-full bg-swift-400 animate-pulse" />
            <span className="text-swift-200 text-sm">从零到一 · 创业启航</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-7xl font-bold text-war-50 mb-6 tracking-tight">
            <span className="block">战鸽快飞</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pigeon-400 to-swift-400">
              AgentTeams
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-war-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            像战鸽一样<strong className="text-pigeon-300">可靠</strong>，像快飞一样<strong className="text-swift-300">迅捷</strong>。
            新一代 AI 团队协同平台，让每一个任务精准抵达。
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              className="pigeon-btn text-lg px-8 py-3 animate-soar"
              style={{ animationDelay: '0.2s' }}
              onClick={onGetStarted}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center gap-2">
                {isHovered ? '🚀' : '✨'}
                立即启动
              </span>
            </button>
            <button className="pigeon-btn-secondary text-lg px-8 py-3">
              了解精神 →
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { label: '使命必达', value: '100%', icon: '🎯' },
              { label: '响应速度', value: '<1s', icon: '⚡' },
              { label: '团队协同', value: '∞', icon: '🐦' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-war-100">{stat.value}</div>
                <div className="text-sm text-war-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-war-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-pigeon-400 rounded-full" />
        </div>
      </div>
    </div>
  )
}
