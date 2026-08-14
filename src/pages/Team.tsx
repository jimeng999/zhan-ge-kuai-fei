import { useState } from 'react'

const teamMembers = [
  { id: 1, name: '战鸽-A', role: '领航员', status: 'flying', tasks: 7, streak: 12, avatar: '🦅' },
  { id: 2, name: '战鸽-B', role: '侦察兵', status: 'flying', tasks: 5, streak: 8, avatar: '🕊️' },
  { id: 3, name: '战鸽-C', role: '传递手', status: 'landing', tasks: 9, streak: 15, avatar: '🐦' },
  { id: 4, name: '战鸽-D', role: '后勤官', status: 'pending', tasks: 3, streak: 6, avatar: '🦋' },
  { id: 5, name: '战鸽-E', role: '指挥官', status: 'flying', tasks: 11, streak: 20, avatar: '🦉' },
]

const statusConfig = {
  flying: { label: '飞行中', emoji: '✈️', color: 'text-pigeon-400' },
  landing: { label: '即将抵达', emoji: '🛬', color: 'text-swift-400' },
  pending: { label: '待命', emoji: '🕐', color: 'text-war-500' },
}

export function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-war-100">🐦 战鸽团队</h2>
          <p className="text-war-500 mt-1">{teamMembers.length} 只战鸽在线 · 随时待命</p>
        </div>
        <button className="pigeon-btn">+ 招募新鸽</button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Team Grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {teamMembers.map((member) => {
            const status = statusConfig[member.status]
            return (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`card text-left transition-all hover:scale-[1.02] ${
                  selectedMember?.id === member.id ? 'border-pigeon-500 ring-1 ring-pigeon-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{member.avatar}</div>
                  <span className={`flex items-center gap-1 text-sm ${status.color}`}>
                    {status.emoji} {status.label}
                  </span>
                </div>
                <div className="font-bold text-war-100 text-lg">{member.name}</div>
                <div className="text-sm text-war-500 mb-4">{member.role}</div>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <div className="text-war-200 font-medium">{member.tasks}</div>
                    <div className="text-war-600 text-xs">任务</div>
                  </div>
                  <div>
                    <div className="text-swift-400 font-medium">🔥 {member.streak}</div>
                    <div className="text-war-600 text-xs">连续送达</div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Detail Panel */}
        <div className="card-glow">
          {selectedMember ? (
            <div>
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{selectedMember.avatar}</div>
                <h3 className="text-xl font-bold text-war-100">{selectedMember.name}</h3>
                <p className="text-pigeon-400 text-sm">{selectedMember.role}</p>
                <div className={`mt-2 inline-flex items-center gap-1 text-sm ${statusConfig[selectedMember.status].color}`}>
                  {statusConfig[selectedMember.status].emoji} {statusConfig[selectedMember.status].label}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-war-950 rounded-lg">
                  <div className="text-sm text-war-500 mb-1">当前任务</div>
                  <div className="font-medium text-war-200">部署 API 网关 v3.2</div>
                  <div className="text-xs text-pigeon-400 mt-1">预计 12 分钟后抵达</div>
                </div>
                <div className="p-4 bg-war-950 rounded-lg">
                  <div className="text-sm text-war-500 mb-1">今日飞行记录</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-war-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pigeon-600 to-swift-500 rounded-full" style={{ width: '75%' }} />
                    </div>
                    <span className="text-sm text-war-400">7/10</span>
                  </div>
                </div>
                <div className="p-4 bg-war-950 rounded-lg">
                  <div className="text-sm text-war-500 mb-1">战鸽精神评分</div>
                  <div className="flex gap-1">
                    {['🎯', '⚡', '🛡️', '🧭', '🤝', '🔥'].map((icon) => (
                      <span key={icon} className="text-lg">{icon}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="pigeon-btn flex-1 text-sm">派发新任务</button>
                <button className="pigeon-btn-secondary flex-1 text-sm">查看档案</button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="text-6xl mb-4">🐦‍⬛</div>
              <h3 className="text-lg font-medium text-war-300 mb-2">选择一只战鸽</h3>
              <p className="text-sm text-war-600">点击团队成员查看详情<br />和派发任务</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
