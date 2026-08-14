import { useState } from 'react'
import { Hero } from './pages/Hero'
import { Dashboard } from './pages/Dashboard'
import { Principles } from './pages/Principles'
import { Team } from './pages/Team'

type Page = 'home' | 'dashboard' | 'principles' | 'team'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: '首页' },
    { id: 'dashboard', label: '仪表盘' },
    { id: 'principles', label: '战鸽精神' },
    { id: 'team', label: '团队' },
  ]

  return (
    <div className="min-h-screen bg-war-950 flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-war-800 bg-war-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🐦</span>
              <span className="font-bold text-lg text-war-100">AgentTeams</span>
              <span className="text-xs tag-swift hidden sm:inline">战鸽快飞</span>
            </div>
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    page === item.id
                      ? 'bg-pigeon-950 text-pigeon-300'
                      : 'text-war-400 hover:text-war-200 hover:bg-war-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="pigeon-btn text-sm">
              启动任务
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {page === 'home' && <Hero onGetStarted={() => setPage('dashboard')} />}
        {page === 'dashboard' && <Dashboard />}
        {page === 'principles' && <Principles />}
        {page === 'team' && <Team />}
      </main>

      {/* Footer */}
      <footer className="border-t border-war-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-war-500 text-sm">
            <span>🐦</span>
            <span>AgentTeams · 战鸽快飞</span>
          </div>
          <div className="text-war-600 text-sm">
            像战鸽一样可靠，像快飞一样迅捷
          </div>
        </div>
      </footer>
    </div>
  )
}
