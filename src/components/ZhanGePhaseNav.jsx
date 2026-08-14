import React from 'react';

/**
 * 战鸽快飞 · 创业阶段导航
 * 显示当前创业阶段和下一步行动
 */
export function ZhanGePhaseNav() {
  const phases = [
    { id: 'ideation', name: '创意孵化', emoji: '🌱', desc: '找到值得解决的问题' },
    { id: 'research', name: '深度研究', emoji: '🔭', desc: '验证市场需求' },
    { id: 'planning', name: '作战规划', emoji: '🗺️', desc: '制定执行计划' },
    { id: 'execution', name: '快速执行', emoji: '⚡', desc: '打造MVP' },
    { id: 'validation', name: '验证求证', emoji: '🎯', desc: '确认PMF' },
    { id: 'iteration', name: '迭代进化', emoji: '🔄', desc: '持续优化' },
    { id: 'scaling', name: '规模扩张', emoji: '🚀', desc: '从1到N' }
  ];

  const activeIndex = 2; // 假设当前在规划阶段

  return React.createElement('div', {
    style: {
      padding: '16px',
      backgroundColor: 'var(--dsh-surface-1, #0f0f1a)',
      borderRadius: '12px',
      border: '1px solid var(--dsh-border, #2a2a4a)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('h3', {
      style: {
        margin: '0 0 16px 0',
        color: 'var(--dsh-text-primary, #e0e0f0)',
        fontSize: '14px',
        fontWeight: 600
      }
    }, '🗺️ 创业阶段导航'),

    // 阶段进度条
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        position: 'relative'
      }
    },
      // 进度线
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: 'var(--dsh-border, #2a2a4a)',
          zIndex: 0
        }
      }),
      // 进度填充
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: '50%',
          left: 0,
          width: `${(activeIndex / (phases.length - 1)) * 100}%`,
          height: '2px',
          backgroundColor: 'var(--dsh-accent, #FF6B35)',
          zIndex: 1,
          transform: 'translateY(-50%)'
        }
      }),
      // 阶段节点
      ...phases.map((phase, i) =>
        React.createElement('div', {
          key: phase.id,
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
            cursor: i <= activeIndex ? 'pointer' : 'default'
          }
        },
          React.createElement('div', {
            style: {
              width: i <= activeIndex ? '24px' : '16px',
              height: i <= activeIndex ? '24px' : '16px',
              borderRadius: '50%',
              backgroundColor: i === activeIndex ? 'var(--dsh-accent, #FF6B35)' :
                i < activeIndex ? 'var(--dsh-accent, #FF6B35)' :
                  'var(--dsh-surface-2, #1a1a2e)',
              border: `2px solid ${i === activeIndex ? 'var(--dsh-accent, #FF6B35)' : 'var(--dsh-border, #2a2a4a)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: i <= activeIndex ? '10px' : '8px',
              transition: 'all 0.3s'
            }
          }, i < activeIndex ? '✓' : phase.emoji),
          React.createElement('span', {
            style: {
              fontSize: '9px',
              color: i === activeIndex ? 'var(--dsh-accent, #FF6B35)' :
                i < activeIndex ? 'var(--dsh-text-secondary, #a0a0c0)' :
                  'var(--dsh-text-tertiary, #606080)',
              marginTop: '4px',
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }
          }, phase.name)
        )
      )
    ),

    // 当前阶段详情
    React.createElement('div', {
      style: {
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 107, 53, 0.08)',
        border: '1px solid rgba(255, 107, 53, 0.2)'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px'
        }
      },
        React.createElement('span', { style: { fontSize: '20px' } }, phases[activeIndex].emoji),
        React.createElement('span', {
          style: {
            color: 'var(--dsh-text-primary, #e0e0f0)',
            fontWeight: 600,
            fontSize: '14px'
          }
        }, phases[activeIndex].name),
        React.createElement('span', {
          style: {
            fontSize: '11px',
            color: 'var(--dsh-accent, #FF6B35)',
            marginLeft: 'auto'
          }
        }, '当前阶段')
      ),
      React.createElement('p', {
        style: {
          margin: 0,
          color: 'var(--dsh-text-secondary, #a0a0c0)',
          fontSize: '12px'
        }
      }, phases[activeIndex].desc)
    )
  );
}
