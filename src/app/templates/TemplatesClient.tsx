'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { templateRegistry, categories } from '@/components/templates/templateRegistry'

export default function TemplatesClient() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? templateRegistry
    : templateRegistry.filter((t) => t.category === activeCategory)

  const handleUseTemplate = (templateId: string) => {
    router.push(`/builder?template=${templateId}`)
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }} className="py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-5"
          style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
          50 templates across 5 categories
        </div>
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Resume Templates</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Professional designs for every industry. Pick one and make it yours in minutes.
        </p>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-40" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-primary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all"
                style={{
                  background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-secondary)',
                  color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                  border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                }}
              >
                {cat}
                <span className="ml-2 text-xs opacity-70">
                  {cat === 'All' ? templateRegistry.length : templateRegistry.filter(t => t.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          Showing {filtered.length} templates{activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group rounded-2xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              onClick={() => handleUseTemplate(t.id)}
            >
              {/* Preview */}
              <div className="h-52 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
                <TemplateMiniPreview config={t} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-lg">
                    Use this template →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</h3>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>{t.category}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }} className="py-14 text-center">
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Not sure which to pick?</h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Start with Classic — switch anytime without losing your data.</p>
        <button
          onClick={() => handleUseTemplate('classic')}
          className="inline-block rounded-xl px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-all"
          style={{ background: 'var(--accent)' }}
        >
          Start with Classic
        </button>
      </section>
    </div>
  )
}

function TemplateMiniPreview({ config }: { config: typeof templateRegistry[0] }) {
  const { preview } = config

  if (preview.layout === 'sidebar') {
    return (
      <div className="h-full flex m-2 rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className="w-1/3 p-2" style={{ background: preview.headerColor }}>
          <div className="w-8 h-8 rounded-full bg-white/20 mb-2"></div>
          <div className="h-1.5 bg-white/40 rounded mb-1 w-full"></div>
          <div className="h-1 bg-white/30 rounded w-3/4 mb-3"></div>
          <div className="h-1 bg-white/20 rounded w-full mb-1"></div>
          <div className="h-1 bg-white/20 rounded w-3/4 mb-1"></div>
          <div className="h-1 bg-white/20 rounded w-1/2"></div>
        </div>
        <div className="flex-1 p-2">
          <div className="h-1.5 rounded mb-1 w-1/2" style={{ background: preview.accentColor, opacity: 0.7 }}></div>
          <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
          <div className="h-1 bg-gray-100 rounded mb-2 w-3/4"></div>
          <div className="h-1.5 rounded mb-1 w-1/3" style={{ background: preview.accentColor, opacity: 0.7 }}></div>
          <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
          <div className="h-1 bg-gray-100 rounded mb-0.5 w-2/3"></div>
          <div className="h-1 bg-gray-100 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  if (preview.layout === 'two-column') {
    return (
      <div className="h-full m-2 rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className="h-8 flex items-center px-3" style={{ background: preview.headerColor }}>
          <div className="h-2 bg-white/60 rounded w-1/3"></div>
          <div className="h-1.5 bg-white/30 rounded w-1/4 ml-2"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          <div>
            <div className="h-1.5 rounded mb-1 w-2/3" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
            <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
            <div className="h-1 bg-gray-100 rounded mb-2 w-3/4"></div>
            <div className="h-1.5 rounded mb-1 w-1/2" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
            <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
            <div className="h-1 bg-gray-100 rounded w-2/3"></div>
          </div>
          <div>
            <div className="h-1.5 rounded mb-1 w-2/3" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
            <div className="flex gap-1 flex-wrap mb-2">
              <div className="h-3 rounded-full w-8" style={{ background: `${preview.accentColor}30` }}></div>
              <div className="h-3 rounded-full w-6" style={{ background: `${preview.accentColor}30` }}></div>
              <div className="h-3 rounded-full w-10" style={{ background: `${preview.accentColor}30` }}></div>
            </div>
            <div className="h-1.5 rounded mb-1 w-1/2" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
            <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
            <div className="h-1 bg-gray-100 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  if (preview.layout === 'minimal') {
    return (
      <div className="h-full m-2 rounded-xl overflow-hidden bg-white p-3" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className="h-3 rounded w-1/2 mb-0.5" style={{ background: preview.headerColor }}></div>
        <div className="h-1.5 bg-gray-300 rounded w-1/3 mb-3"></div>
        <div className="h-px mb-2" style={{ background: preview.accentColor, opacity: 0.3 }}></div>
        <div className="h-1.5 rounded w-1/4 mb-1" style={{ background: preview.accentColor, opacity: 0.6 }}></div>
        <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
        <div className="h-1 bg-gray-100 rounded mb-2 w-3/4"></div>
        <div className="h-px mb-2" style={{ background: preview.accentColor, opacity: 0.3 }}></div>
        <div className="h-1.5 rounded w-1/4 mb-1" style={{ background: preview.accentColor, opacity: 0.6 }}></div>
        <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
        <div className="h-1 bg-gray-100 rounded w-2/3"></div>
      </div>
    )
  }

  if (preview.layout === 'bold') {
    return (
      <div className="h-full m-2 rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className="p-3" style={{ background: preview.headerColor }}>
          <div className="h-4 bg-white/90 rounded w-2/3 mb-1"></div>
          <div className="h-2 bg-white/50 rounded w-1/2"></div>
        </div>
        <div className="p-2">
          <div className="h-1.5 rounded w-full mb-1" style={{ background: preview.accentColor, opacity: 0.2 }}></div>
          <div className="h-1.5 rounded mb-1 w-1/3" style={{ background: preview.accentColor }}></div>
          <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
          <div className="h-1 bg-gray-100 rounded mb-2 w-3/4"></div>
          <div className="h-1.5 rounded mb-1 w-1/4" style={{ background: preview.accentColor }}></div>
          <div className="h-1 bg-gray-200 rounded mb-0.5 w-full"></div>
          <div className="h-1 bg-gray-100 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  // Default single column
  return (
    <div className="h-full m-2 rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div className="h-10 px-3 flex flex-col justify-center" style={{ background: preview.headerColor }}>
        <div className="h-2 bg-white/80 rounded w-1/2 mb-1"></div>
        <div className="h-1.5 bg-white/40 rounded w-1/3"></div>
      </div>
      <div className="p-2 space-y-1">
        <div className="h-1.5 rounded w-1/4" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
        <div className="h-1 bg-gray-200 rounded w-full"></div>
        <div className="h-1 bg-gray-100 rounded w-3/4 mb-1"></div>
        <div className="h-px" style={{ background: `${preview.accentColor}30` }}></div>
        <div className="h-1.5 rounded w-1/4" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
        <div className="h-1 bg-gray-200 rounded w-full"></div>
        <div className="h-1 bg-gray-100 rounded w-2/3 mb-1"></div>
        <div className="h-px" style={{ background: `${preview.accentColor}30` }}></div>
        <div className="h-1.5 rounded w-1/4" style={{ background: preview.accentColor, opacity: 0.8 }}></div>
        <div className="flex gap-1 flex-wrap">
          <div className="h-2.5 rounded-full w-7" style={{ background: `${preview.accentColor}25` }}></div>
          <div className="h-2.5 rounded-full w-9" style={{ background: `${preview.accentColor}25` }}></div>
          <div className="h-2.5 rounded-full w-5" style={{ background: `${preview.accentColor}25` }}></div>
        </div>
      </div>
    </div>
  )
}