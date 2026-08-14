import { useState } from 'react'

const tasks = [
  { id: 1, title: '部署新服务到生产环境', status: 'flying', priority: 'high', assignee: '鸽子-A', time: '2分钟前' },
  { id: 2, title: '完成用户反馈数据分析', status: 'landed', priority: 'medium', assignee: '鸽子-B', time: '15分钟前' },
  { id: 3, title: '修复认证模块的边界情况', status: 'flying', priority: 'high', assignee: '鸽子-C', time: '刚出发' },
  { id: 4, title: '更新产品文档 v2.0', status: 'pending', priority: 'low', assignee: '待定', time: '待分配' },
  { id: 5, title: '设计新品牌视觉系统', status: 'landed', priority: 'medium', assignee: '鸽子-A', time: '1小时前' },
]

const stats = [
  { label: '今日飞行任务', value: '23', icon: '🛫', change: '+12%' },
  { label: '已精准投递', value: '18', icon: '📬', change: '+8%' },
  { label: '在途任务', value: '5', icon: '✈️', change: '稳' },
  { label: '平均响应时间', value: '0.8s', icon: '⚡', change: '-15%' },
]

export function Dashboard() {
  const [filter, setFilter] = useState<'all' | 'flying' | 'landed' | 'pending'>('all')

  const filteredTasks = tasks.filter(t => filter === 'all' || t.status === filter)

  const statusLabels = {
    flying: '飞行中',
    landed: '已抵达',
    pending: '待命',
  }

  const statusColors = {
    flying: 'bg-pigeon-950 text-pigeon-300 border-pigeon-800',
    landed: 'bg-swift-900 text-swift-300 border-swift-800',
    pending: 'bg-war-800 text-war-400 border-war-700',
  }

  const priorityColors = {
    high: 'text-red-400',
    medium: 'text-swift-400',
    low: 'text-war-500',
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-war-100">📊 飞行仪表盘</h2>
          <p className="text-war-500 mt-1">实时任务态势 · 战鸽快飞 · {new Date().toLocaleDateString('zh-CN')}</p>
        </div>
        <button className="pigeon-btn">+ 发布新任务</button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-xs ${stat.change.startsWith('+') ? 'text-pigeon-400' : stat.change === '稳' ? 'text-swift-400' : 'text-war-500'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-war-100">{stat.value}</div>
            <div className="text-sm text-war-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {(['all', 'flying', 'landed', 'pending'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f ? 'bg-pigeon-950 text-pigeon-300' : 'text-war-500 hover:text-war-300'
            }`}
          >
            {f === 'all' ? '全部' : statusLabels[f]}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="card-glow">
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 bg-war-950/50 rounded-lg hover:bg-war-950 transition-colors">
              <div className="flex items-center gap-4">
                <span className="text-xl">
                  {task.status === 'flying' ? '✈️' : task.status === 'landed' ? '📬' : '🕐'}
                </span>
                <div>
                  <div className="font-medium text-war-200">{task.title}</div>
                  <div className="text-sm text-war-500 mt-0.5">
                    指派: {task.assignee} · {task.time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`tag ${statusColors[task.status]}`}>
                  {statusLabels[task.status]}
                </span>
                <span className={`text-sm font-medium ${priorityColors[task.priority]}`}>
                  {task.priority === 'high' ? '🔴 高' : task.priority === 'medium' ? '🟡 中' : '🟢 低'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
