export function Principles() {
  const principles = [
    {
      icon: '🎯',
      title: '使命必达',
      en: 'Mission Delivered',
      desc: '每一封信都必须在正确的时间抵达正确的地址。任务一旦发出，就必须完成。没有"尽力而为"，只有"使命必达"。',
      color: 'pigeon',
    },
    {
      icon: '⚡',
      title: '快飞精神',
      en: 'Swift Flight',
      desc: '快不是仓促，而是精准的效率。战鸽从不徘徊——发现目标，锁定路径，全速抵达。每一步都朝着结果前进。',
      color: 'swift',
    },
    {
      icon: '🛡️',
      title: '可靠如鸽',
      en: 'Reliable as a Pigeon',
      desc: '战鸽穿越战场，风雨无阻。无论环境多么恶劣，信息必须送达。可靠性不是选项，是底线。',
      color: 'war',
    },
    {
      icon: '🧭',
      title: '精准导航',
      en: 'Precision Navigation',
      desc: '战鸽从未迷航。我们有明确的目标、清晰的路线和持续的校准。方向对了，速度才有意义。',
      color: 'pigeon',
    },
    {
      icon: '🤝',
      title: '协同飞行',
      en: 'Flock Coordination',
      desc: '单鸽可独行，群鸽能远航。团队协作不是消耗，是乘数。每一次交接、每一次配合，都在提升整体飞行高度。',
      color: 'swift',
    },
    {
      icon: '🔥',
      title: 'Day 1 心态',
      en: 'Day 1 Mindset',
      desc: '永远保持创业第一天的好奇心和紧迫感。成功不是终点，新的征程随时开始。战鸽永远在路上。',
      color: 'war',
    },
  ]

  const colorMaps: Record<string, { bg: string; border: string; text: string }> = {
    pigeon: { bg: 'from-pigeon-950/50 to-pigeon-900/30', border: 'border-pigeon-800/50', text: 'text-pigeon-400' },
    swift: { bg: 'from-swift-900/50 to-swift-800/30', border: 'border-swift-800/50', text: 'text-swift-400' },
    war: { bg: 'from-war-800/50 to-war-900/30', border: 'border-war-700/50', text: 'text-war-400' },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 tag-swift px-4 py-1.5 mb-6">
          <span>🕊️</span>
          <span>企业精神</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-war-50 mb-6">
          战鸽快飞 <span className="text-pigeon-400">六条铁律</span>
        </h2>
        <p className="text-lg text-war-400 max-w-2xl mx-auto">
          每一条原则都刻在我们的基因里。这不是墙上的标语，是每一个决策的准绳。
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((p, i) => {
          const colors = colorMaps[p.color]
          return (
            <div
              key={p.title}
              className={`card bg-gradient-to-br ${colors.bg} border ${colors.border}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-war-100 mb-1">{p.title}</h3>
              <p className={`text-sm ${colors.text} mb-4 uppercase tracking-wider`}>{p.en}</p>
              <p className="text-war-400 leading-relaxed">{p.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Motto Section */}
      <div className="mt-16 card-glow text-center">
        <div className="text-5xl mb-6">🐦‍⬛</div>
        <blockquote className="text-2xl sm:text-3xl font-bold text-war-100 mb-4">
          "信已发出，必达无疑；路在前方，飞必至之。"
        </blockquote>
        <p className="text-war-500 text-lg">
          — 战鸽快飞 · 团队格言
        </p>
      </div>
    </div>
  )
}
