import React from 'react';

/**
 * 战鸽快飞 · 团队状态面板
 * 显示当前团队角色、任务和目标
 */
export function ZhanGeTeamPanel() {
  return React.createElement('div', {
    style: {
      padding: '16px',
      backgroundColor: 'var(--dsh-surface-1, #0f0f1a)',
      borderRadius: '12px',
      border: '1px solid var(--dsh-border, #2a2a4a)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // 标题
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px'
      }
    },
      React.createElement('span', { style: { fontSize: '24px' } }, '🕊️'),
      React.createElement('h3', {
        style: {
          margin: 0,
          color: 'var(--dsh-text-primary, #e0e0f0)',
          fontSize: '16px',
          fontWeight: 600
        }
      }, '战鸽快飞 · 团队面板')
    ),

    // 角色卡片
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
        marginBottom: '16px'
      }
    },
      ...['commander', 'scout', 'striker', 'messenger'].map((role, i) => {
        const roles = [
          { emoji: '🎯', name: '指挥鸽', active: i === 0 },
          { emoji: '🔍', name: '侦察鸽', active: false },
          { emoji: '⚡', name: '突击鸽', active: false },
          { emoji: '📡', name: '传信鸽', active: false }
        ];
        const r = roles[i];
        return React.createElement('div', {
          key: role,
          style: {
            padding: '12px 8px',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: r.active ? 'var(--dsh-accent, #FF6B35)' : 'var(--dsh-surface-2, #1a1a2e)',
            border: r.active ? '2px solid var(--dsh-accent, #FF6B35)' : '1px solid var(--dsh-border, #2a2a4a)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }
        },
          React.createElement('div', { style: { fontSize: '20px' } }, r.emoji),
          React.createElement('div', {
            style: {
              fontSize: '11px',
              color: r.active ? '#fff' : 'var(--dsh-text-secondary, #a0a0c0)',
              marginTop: '4px',
              fontWeight: r.active ? 600 : 400
            }
          }, r.name)
        );
      })
    ),

    // 价值观展示
    React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '12px'
      }
    },
      ...['速度 ⚡', '可靠 🛡️', '协同 🤝', '方向 🧭', '韧性 💪', '透明 👁️'].map(v =>
        React.createElement('span', {
          key: v,
          style: {
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            backgroundColor: 'var(--dsh-surface-2, #1a1a2e)',
            color: 'var(--dsh-text-secondary, #a0a0c0)',
            border: '1px solid var(--dsh-border, #2a2a4a)'
          }
        }, v)
      )
    ),

    // 口号
    React.createElement('div', {
      style: {
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
        border: '1px solid rgba(255, 107, 53, 0.3)',
        textAlign: 'center'
      }
    },
      React.createElement('p', {
        style: {
          margin: 0,
          color: 'var(--dsh-text-primary, #e0e0f0)',
          fontSize: '13px',
          fontWeight: 500
        }
      }, '使命必达，快飞不息')
    )
  );
}
