'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { templateRegistry, categories, TemplateConfig } from '@/components/templates/templateRegistry'
import { ResumeData, ResumeSettings } from '@/types/resume'

const dummyData: ResumeData = {
  personalInfo: {
    fullName: 'Priya Sharma',
    email: 'priya@email.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    website: 'priyasharma.dev',
    linkedin: 'linkedin.com/in/priya',
    summary: 'Results-driven professional with 4+ years of experience delivering high-impact solutions. Strong communicator with proven leadership skills.',
  },
  experience: [
    {
      id: '1',
      jobTitle: 'Senior Manager',
      company: 'TechCorp India',
      location: 'Mumbai',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: 'Led a team of 12, drove 40% revenue growth and launched 3 products.',
    },
    {
      id: '2',
      jobTitle: 'Associate',
      company: 'StartupXYZ',
      location: 'Pune',
      startDate: '2020-06',
      endDate: '2021-12',
      current: false,
      description: 'Managed client relationships and delivered projects on time.',
    },
  ],
  education: [
    {
      id: '1',
      degree: 'B.Tech Computer Science',
      school: 'IIT Bombay',
      location: 'Mumbai',
      startDate: '2016-07',
      endDate: '2020-05',
      grade: '8.7 CGPA',
    },
  ],
  skills: [
    { id: '1', name: 'Leadership', level: 'Expert' },
    { id: '2', name: 'React', level: 'Advanced' },
    { id: '3', name: 'Strategy', level: 'Advanced' },
    { id: '4', name: 'Python', level: 'Intermediate' },
  ],
  projects: [
    {
      id: '1',
      name: 'CVPilot Platform',
      description: 'Built a full-stack SaaS resume builder used by 10k+ users.',
      link: 'github.com/priya/cvpilot',
      technologies: 'Next.js, Supabase, Tailwind',
    },
  ],
  certifications: [
    { id: '1', name: 'AWS Solutions Architect', issuer: 'Amazon', date: '2023' },
  ],
}

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
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }} className="py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-5"
          style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
          50 templates · 5 categories · Real previews
        </div>
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Resume Templates</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          See exactly how your resume will look. Pick a template and make it yours.
        </p>
      </section>

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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          Showing {filtered.length} templates{activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group rounded-2xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              onClick={() => handleUseTemplate(t.id)}
            >
              {/* Real preview */}
              <div className="relative overflow-hidden" style={{ height: '280px', background: '#f1f3f5' }}>
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '794px',
                  transformOrigin: 'top left',
                  transform: 'scale(0.36)',
                  pointerEvents: 'none',
                }}>
                  <RealPreview config={t} data={dummyData} />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg">
                    Use this template →
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>{t.category}</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t.desc}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleUseTemplate(t.id) }}
                  className="mt-3 w-full py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}
                >
                  Use template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

function RealPreview({ config, data }: { config: TemplateConfig; data: ResumeData }) {
  const color = config.preview.headerColor
  const layout = config.preview.layout
  const settings: ResumeSettings = {
    fontFamily: 'Inter',
    fontSize: 'medium',
    colorTheme: 'template',
    templateId: config.id,
  }

  const p = data.personalInfo
  const { experience, education, skills, projects, certifications } = data

  // Shared section title style
  const secTitle = (title: string) => (
    <p style={{ fontSize: 9, fontWeight: 700, color, textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 5px' }}>{title}</p>
  )

  const divider = () => <div style={{ height: 1, background: `${color}30`, margin: '0 0 8px' }} />

  if (layout === 'tech') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: '#0d1117', color: '#e6edf3', fontFamily: 'monospace', fontSize: 11 }}>
        <div style={{ background: '#161b22', padding: '28px 32px', borderBottom: '1px solid #30363d' }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }}></span>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }}></span>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }}></span>
          </div>
          <p style={{ color: '#6e7681', fontSize: 9, margin: '0 0 4px' }}>$ cat resume.json</p>
          <h1 style={{ fontSize: 26, fontWeight: 700, color, margin: '0 0 8px' }}>{p.fullName}</h1>
          <div style={{ display: 'flex', gap: 16, fontSize: 9, color: '#8b949e' }}>
            <span>{p.email}</span><span>{p.phone}</span><span>{p.location}</span>
          </div>
        </div>
        <div style={{ padding: '20px 32px' }}>
          <p style={{ color, fontSize: 10, fontWeight: 700, margin: '0 0 6px' }}>// skills</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
            {skills.map(s => <span key={s.id} style={{ background: `${color}20`, color, border: `1px solid ${color}40`, borderRadius: 3, padding: '1px 8px', fontSize: 9 }}>{s.name}</span>)}
          </div>
          <p style={{ color, fontSize: 10, fontWeight: 700, margin: '0 0 6px' }}>// experience</p>
          {experience.map(e => (
            <div key={e.id} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: `2px solid ${color}40` }}>
              <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle} <span style={{ color, fontWeight: 400 }}>@ {e.company}</span></p>
              <p style={{ color: '#6e7681', fontSize: 8, margin: '2px 0' }}>{e.startDate} → {e.current ? 'now' : e.endDate}</p>
              <p style={{ color: '#8b949e', fontSize: 9, margin: 0, lineHeight: 1.5 }}>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (layout === 'sidebar') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: 'white', display: 'flex', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
        <div style={{ width: '32%', background: color, padding: '28px 16px', color: 'white' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
            {p.fullName.split(' ').map((n: string) => n[0]).join('').slice(0,2)}
          </div>
          <h1 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.2 }}>{p.fullName}</h1>
          <p style={{ fontSize: 8, opacity: 0.7, margin: '0 0 16px' }}>{p.email}</p>
          <p style={{ fontSize: 8, opacity: 0.7, margin: '0 0 4px' }}>{p.phone}</p>
          <p style={{ fontSize: 8, opacity: 0.7, margin: '0 0 16px' }}>{p.location}</p>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', opacity: 0.6, margin: '0 0 8px' }}>Skills</p>
          {skills.map(s => (
            <div key={s.id} style={{ marginBottom: 6 }}>
              <p style={{ fontSize: 9, margin: '0 0 2px' }}>{s.name}</p>
              <div style={{ height: 2, background: 'rgba(255,255,255,0.2)', borderRadius: 1 }}>
                <div style={{ height: 2, borderRadius: 1, background: 'rgba(255,255,255,0.7)', width: s.level === 'Expert' ? '100%' : s.level === 'Advanced' ? '75%' : '50%' }} />
              </div>
            </div>
          ))}
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', opacity: 0.6, margin: '16px 0 8px' }}>Education</p>
          {education.map(e => (
            <div key={e.id} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 9, fontWeight: 700, margin: 0 }}>{e.degree}</p>
              <p style={{ fontSize: 8, opacity: 0.7, margin: '2px 0 0' }}>{e.school}</p>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '28px 20px' }}>
          <p style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.6, margin: '0 0 16px' }}>{p.summary}</p>
          <p style={{ fontSize: 9, fontWeight: 700, color, textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 8px' }}>Experience</p>
          {experience.map(e => (
            <div key={e.id} style={{ marginBottom: 12 }}>
              <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle}</p>
              <p style={{ color, fontSize: 9, margin: '1px 0', fontWeight: 500 }}>{e.company}</p>
              <p style={{ color: '#9ca3af', fontSize: 8, margin: '0 0 3px' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
              <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.5, margin: 0 }}>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (layout === 'creative') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: 'white', display: 'flex', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
        <div style={{ width: '40%', background: color, padding: '32px 20px', color: 'white' }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            {p.fullName.split(' ').map((n: string) => n[0]).join('').slice(0,2)}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 8px', lineHeight: 1.1 }}>{p.fullName}</h1>
          <div style={{ height: 3, width: 36, background: 'rgba(255,255,255,0.5)', margin: '10px 0 16px' }} />
          <p style={{ fontSize: 8, opacity: 0.6, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: '0 0 6px' }}>Contact</p>
          <p style={{ fontSize: 9, opacity: 0.9, margin: '0 0 3px' }}>{p.email}</p>
          <p style={{ fontSize: 9, opacity: 0.9, margin: '0 0 3px' }}>{p.phone}</p>
          <p style={{ fontSize: 9, opacity: 0.9, margin: '0 0 16px' }}>{p.location}</p>
          <p style={{ fontSize: 8, opacity: 0.6, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: '0 0 8px' }}>Skills</p>
          {skills.map(s => (
            <div key={s.id} style={{ marginBottom: 7 }}>
              <p style={{ fontSize: 9, margin: '0 0 2px', fontWeight: 500 }}>{s.name}</p>
              <div style={{ height: 2, background: 'rgba(255,255,255,0.2)', borderRadius: 1 }}>
                <div style={{ height: 2, borderRadius: 1, background: 'rgba(255,255,255,0.8)', width: s.level === 'Expert' ? '100%' : s.level === 'Advanced' ? '75%' : '50%' }} />
              </div>
            </div>
          ))}
          <p style={{ fontSize: 8, opacity: 0.6, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: '16px 0 8px' }}>Education</p>
          {education.map(e => (
            <div key={e.id} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 9, fontWeight: 700, margin: 0 }}>{e.degree}</p>
              <p style={{ fontSize: 8, opacity: 0.7, margin: '2px 0 0' }}>{e.school}</p>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '32px 24px' }}>
          <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.7, margin: '0 0 16px' }}>{p.summary}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <p style={{ fontSize: 10, fontWeight: 800, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: 0 }}>Experience</p>
            <div style={{ flex: 1, height: 2, background: `${color}20` }} />
          </div>
          {experience.map(e => (
            <div key={e.id} style={{ marginBottom: 12, paddingLeft: 10, borderLeft: `3px solid ${color}` }}>
              <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle}</p>
              <p style={{ color, fontSize: 9, margin: '1px 0', fontWeight: 600 }}>{e.company}</p>
              <p style={{ color: '#9ca3af', fontSize: 8, margin: '0 0 3px' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
              <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.5, margin: 0 }}>{e.description}</p>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0 8px' }}>
            <p style={{ fontSize: 10, fontWeight: 800, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: 0 }}>Projects</p>
            <div style={{ flex: 1, height: 2, background: `${color}20` }} />
          </div>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: 10, padding: '6px 10px', border: `1px solid ${color}20`, borderRadius: 4, borderLeft: `3px solid ${color}` }}>
              <p style={{ fontWeight: 700, margin: 0, fontSize: 9 }}>{proj.name}</p>
              <p style={{ color, fontSize: 8, margin: '2px 0', fontWeight: 500 }}>{proj.technologies}</p>
              <p style={{ color: '#4b5563', fontSize: 8, lineHeight: 1.5, margin: 0 }}>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (layout === 'executive') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: '#fafaf9', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
        <div style={{ background: '#0f0f0f', padding: '32px 36px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '35%', height: '100%', background: color, opacity: 0.2 }} />
          <p style={{ color, fontSize: 8, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' as const, margin: '0 0 6px', position: 'relative' }}>Curriculum Vitae</p>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: 'white', margin: '0 0 10px', position: 'relative' }}>{p.fullName}</h1>
          <div style={{ height: 2, width: 48, background: color, margin: '0 0 12px', position: 'relative' }} />
          <div style={{ display: 'flex', gap: 20, fontSize: 9, position: 'relative' }}>
            <span style={{ color: '#a3a3a3' }}>{p.email}</span>
            <span style={{ color: '#a3a3a3' }}>{p.phone}</span>
            <span style={{ color: '#a3a3a3' }}>{p.location}</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.38fr' }}>
          <div style={{ padding: '20px 24px', borderRight: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.7, fontStyle: 'italic', borderLeft: `3px solid ${color}`, paddingLeft: 10, margin: '0 0 16px' }}>{p.summary}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 16, height: 2, background: color }} />
              <p style={{ fontSize: 9, fontWeight: 800, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: 0 }}>Professional Experience</p>
            </div>
            {experience.map(e => (
              <div key={e.id} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle}</p>
                    <p style={{ color, fontWeight: 600, margin: '1px 0', fontSize: 9 }}>{e.company}</p>
                  </div>
                  <span style={{ background: color, color: 'white', fontSize: 7, padding: '2px 7px', borderRadius: 20 }}>
                    {e.startDate} — {e.current ? 'Present' : e.endDate}
                  </span>
                </div>
                <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.6, margin: '4px 0 0' }}>{e.description}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '20px 16px', background: '#f9f9f8' }}>
            <p style={{ fontSize: 9, fontWeight: 800, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 8px' }}>Education</p>
            {education.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, margin: 0, fontSize: 9 }}>{e.degree}</p>
                <p style={{ color, fontSize: 8, margin: '1px 0', fontWeight: 600 }}>{e.school}</p>
                <p style={{ color: '#9ca3af', fontSize: 7, margin: 0 }}>{e.startDate} — {e.endDate}</p>
              </div>
            ))}
            <p style={{ fontSize: 9, fontWeight: 800, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '14px 0 8px' }}>Skills</p>
            {skills.map(s => (
              <div key={s.id} style={{ marginBottom: 7 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9 }}>{s.name}</span>
                  <span style={{ fontSize: 7, color: '#9ca3af' }}>{s.level}</span>
                </div>
                <div style={{ height: 2, background: '#e5e5e5', borderRadius: 1 }}>
                  <div style={{ height: 2, borderRadius: 1, background: color, width: s.level === 'Expert' ? '100%' : s.level === 'Advanced' ? '75%' : '50%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'academic') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Georgia, serif', fontSize: 11, padding: '40px 48px', color: '#1a1a1a' }}>
        <div style={{ textAlign: 'center', marginBottom: 24, paddingBottom: 20, borderBottom: `2px solid ${color}` }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 6px' }}>{p.fullName}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 9, color: '#6b7280' }}>
            <span>{p.email}</span><span>{p.phone}</span><span>{p.location}</span>
          </div>
        </div>
        {p.summary && <p style={{ textAlign: 'justify', color: '#374151', lineHeight: 1.9, fontSize: 10, marginBottom: 18 }}>{p.summary}</p>}
        <h2 style={{ fontSize: 11, fontWeight: 700, color, borderBottom: `1px solid ${color}30`, paddingBottom: 4, margin: '0 0 10px' }}>Education</h2>
        {education.map(e => (
          <div key={e.id} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.degree}</p>
              <p style={{ color: '#6b7280', fontSize: 9, margin: 0 }}>{e.startDate} — {e.endDate}</p>
            </div>
            <p style={{ color, fontStyle: 'italic', margin: '2px 0 0', fontSize: 9 }}>{e.school}</p>
          </div>
        ))}
        <h2 style={{ fontSize: 11, fontWeight: 700, color, borderBottom: `1px solid ${color}30`, paddingBottom: 4, margin: '14px 0 10px' }}>Experience</h2>
        {experience.map(e => (
          <div key={e.id} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle}</p>
              <p style={{ color: '#6b7280', fontSize: 9, margin: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
            </div>
            <p style={{ color, fontStyle: 'italic', margin: '2px 0 4px', fontSize: 9 }}>{e.company}</p>
            <p style={{ color: '#374151', lineHeight: 1.8, fontSize: 9, margin: 0, textAlign: 'justify' }}>{e.description}</p>
          </div>
        ))}
        <h2 style={{ fontSize: 11, fontWeight: 700, color, borderBottom: `1px solid ${color}30`, paddingBottom: 4, margin: '14px 0 10px' }}>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 20px' }}>
          {skills.map(s => <p key={s.id} style={{ margin: '2px 0', fontSize: 9, color: '#374151' }}><span style={{ color, fontWeight: 600 }}>·</span> {s.name} <span style={{ color: '#9ca3af' }}>({s.level})</span></p>)}
        </div>
      </div>
    )
  }

  if (layout === 'modern-card') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: '#f8f9fa', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
        <div style={{ background: color, padding: '28px 32px', color: 'white' }}>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 8px' }}>{p.fullName}</h1>
          <div style={{ display: 'flex', gap: 16, fontSize: 9, opacity: 0.9 }}>
            <span>✉ {p.email}</span><span>📞 {p.phone}</span><span>📍 {p.location}</span>
          </div>
        </div>
        <div style={{ padding: '16px 20px' }}>
          <div style={{ background: 'white', borderRadius: 6, padding: '12px 16px', marginBottom: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', borderLeft: `4px solid ${color}` }}>
            <p style={{ color: '#374151', lineHeight: 1.7, margin: 0, fontSize: 9 }}>{p.summary}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr', gap: 12 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <div style={{ width: 3, height: 12, background: color, borderRadius: 1 }} />
                <p style={{ fontSize: 9, fontWeight: 700, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: 0 }}>Experience</p>
              </div>
              {experience.map(e => (
                <div key={e.id} style={{ background: 'white', borderRadius: 6, padding: '8px 10px', marginBottom: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: 700, margin: 0, fontSize: 9 }}>{e.jobTitle}</p>
                    <span style={{ fontSize: 7, color: '#9ca3af', background: '#f3f4f6', padding: '1px 5px', borderRadius: 8 }}>{e.startDate} — {e.current ? 'Now' : e.endDate}</span>
                  </div>
                  <p style={{ color, fontSize: 8, margin: '1px 0', fontWeight: 500 }}>{e.company}</p>
                  <p style={{ color: '#4b5563', fontSize: 8, lineHeight: 1.5, margin: 0 }}>{e.description}</p>
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <div style={{ width: 3, height: 12, background: color, borderRadius: 1 }} />
                <p style={{ fontSize: 9, fontWeight: 700, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: 0 }}>Education</p>
              </div>
              {education.map(e => (
                <div key={e.id} style={{ background: 'white', borderRadius: 6, padding: '8px 10px', marginBottom: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: 9 }}>{e.degree}</p>
                  <p style={{ color, fontSize: 8, margin: '1px 0', fontWeight: 500 }}>{e.school}</p>
                  <p style={{ color: '#9ca3af', fontSize: 7, margin: 0 }}>{e.startDate} — {e.endDate}</p>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '10px 0 8px' }}>
                <div style={{ width: 3, height: 12, background: color, borderRadius: 1 }} />
                <p style={{ fontSize: 9, fontWeight: 700, color: '#111', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: 0 }}>Skills</p>
              </div>
              <div style={{ background: 'white', borderRadius: 6, padding: '8px 10px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {skills.map(s => <span key={s.id} style={{ background: `${color}12`, color, border: `1px solid ${color}25`, borderRadius: 3, padding: '1px 6px', fontSize: 8 }}>{s.name}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'bold') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
        <div style={{ padding: '32px 36px 24px', borderBottom: `6px solid ${color}` }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, margin: '0 0 8px', letterSpacing: '-1px', textTransform: 'uppercase' as const }}>{p.fullName}</h1>
          <div style={{ display: 'flex', gap: 20, fontSize: 9, color: '#6b7280' }}>
            <span>{p.email}</span><span>{p.phone}</span><span>{p.location}</span>
          </div>
        </div>
        <div style={{ padding: '20px 36px' }}>
          <p style={{ color: '#374151', lineHeight: 1.7, fontSize: 10, margin: '0 0 16px' }}>{p.summary}</p>
          <div style={{ background: `${color}12`, borderLeft: `4px solid ${color}`, padding: '5px 10px', marginBottom: 10 }}>
            <p style={{ fontSize: 9, fontWeight: 900, color, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: 0 }}>Experience</p>
          </div>
          {experience.map(e => (
            <div key={e.id} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontWeight: 800, margin: 0, fontSize: 11 }}>{e.jobTitle}</p>
                  <p style={{ color, fontWeight: 600, margin: '1px 0', fontSize: 9 }}>{e.company}</p>
                </div>
                <span style={{ fontSize: 7, color: '#9ca3af', background: '#f9fafb', padding: '2px 7px', borderRadius: 3 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</span>
              </div>
              <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.6, margin: '4px 0 0' }}>{e.description}</p>
            </div>
          ))}
          <div style={{ background: `${color}12`, borderLeft: `4px solid ${color}`, padding: '5px 10px', margin: '12px 0 10px' }}>
            <p style={{ fontSize: 9, fontWeight: 900, color, textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: 0 }}>Skills</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {skills.map(s => <span key={s.id} style={{ background: color, color: 'white', borderRadius: 3, padding: '3px 10px', fontSize: 9, fontWeight: 600 }}>{s.name}</span>)}
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'two-column') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
        <div style={{ padding: '24px 32px', borderBottom: `3px solid ${color}` }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 6px' }}>{p.fullName}</h1>
          <div style={{ display: 'flex', gap: 14, fontSize: 9, color: '#6b7280' }}>
            <span>{p.email}</span><span>{p.phone}</span><span>{p.location}</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', padding: '20px 32px', gap: 0 }}>
          <div style={{ paddingRight: 20, borderRight: '1px solid #f0f0f0' }}>
            <p style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.7, margin: '0 0 14px' }}>{p.summary}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <div style={{ width: 3, height: 12, background: color, borderRadius: 1 }} />
              <p style={{ fontSize: 9, fontWeight: 700, color: '#111', textTransform: 'uppercase' as const, margin: 0 }}>Experience</p>
            </div>
            {experience.map(e => (
              <div key={e.id} style={{ marginBottom: 12 }}>
                <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle}</p>
                <p style={{ color, fontSize: 9, margin: '1px 0', fontWeight: 500 }}>{e.company}</p>
                <p style={{ color: '#9ca3af', fontSize: 8, margin: '0 0 3px' }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
                <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.5, margin: 0 }}>{e.description}</p>
              </div>
            ))}
          </div>
          <div style={{ paddingLeft: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <div style={{ width: 3, height: 12, background: color, borderRadius: 1 }} />
              <p style={{ fontSize: 9, fontWeight: 700, color: '#111', textTransform: 'uppercase' as const, margin: 0 }}>Education</p>
            </div>
            {education.map(e => (
              <div key={e.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, margin: 0, fontSize: 9 }}>{e.degree}</p>
                <p style={{ color, fontSize: 8, margin: '1px 0', fontWeight: 500 }}>{e.school}</p>
                <p style={{ color: '#9ca3af', fontSize: 7, margin: 0 }}>{e.endDate}</p>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '12px 0 8px' }}>
              <div style={{ width: 3, height: 12, background: color, borderRadius: 1 }} />
              <p style={{ fontSize: 9, fontWeight: 700, color: '#111', textTransform: 'uppercase' as const, margin: 0 }}>Skills</p>
            </div>
            {skills.map(s => (
              <div key={s.id} style={{ marginBottom: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 9 }}>{s.name}</span>
                  <span style={{ fontSize: 7, color: '#9ca3af' }}>{s.level}</span>
                </div>
                <div style={{ height: 2, background: '#f0f0f0', borderRadius: 1 }}>
                  <div style={{ height: 2, borderRadius: 1, background: color, width: s.level === 'Expert' ? '100%' : s.level === 'Advanced' ? '75%' : '50%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'minimal') {
    return (
      <div style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Inter, sans-serif', fontSize: 11, padding: '44px 52px', color: '#1a1a1a' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.5px' }}>{p.fullName}</h1>
        <div style={{ display: 'flex', gap: 16, fontSize: 9, color: '#6b7280', margin: '0 0 4px' }}>
          <span>{p.email}</span><span>{p.phone}</span><span>{p.location}</span>
        </div>
        <div style={{ height: 2, background: color, width: 36, margin: '12px 0 18px' }} />
        <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: 10, margin: '0 0 18px' }}>{p.summary}</p>
        <p style={{ fontSize: 8, fontWeight: 700, color, textTransform: 'uppercase' as const, letterSpacing: '2px', margin: '0 0 10px' }}>Experience</p>
        {experience.map(e => (
          <div key={e.id} style={{ marginBottom: 12, paddingLeft: 10, borderLeft: `2px solid ${color}20` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 600, margin: 0, fontSize: 10 }}>{e.jobTitle} <span style={{ fontWeight: 400, color: '#6b7280' }}>@ {e.company}</span></p>
              <p style={{ fontSize: 8, color: '#9ca3af', margin: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
            </div>
            <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.6, margin: '3px 0 0' }}>{e.description}</p>
          </div>
        ))}
        <p style={{ fontSize: 8, fontWeight: 700, color, textTransform: 'uppercase' as const, letterSpacing: '2px', margin: '14px 0 8px' }}>Skills</p>
        <p style={{ color: '#4b5563', fontSize: 9 }}>{skills.map(s => s.name).join(' · ')}</p>
      </div>
    )
  }

  // Default single
  return (
    <div style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
      <div style={{ background: color, padding: '28px 32px', color: 'white' }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 8px' }}>{p.fullName}</h1>
        <div style={{ display: 'flex', gap: 16, fontSize: 9, opacity: 0.9 }}>
          <span>{p.email}</span><span>{p.phone}</span><span>{p.location}</span>
        </div>
      </div>
      <div style={{ padding: '20px 32px' }}>
        <p style={{ color: '#374151', lineHeight: 1.7, fontSize: 9, margin: '0 0 14px' }}>{p.summary}</p>
        {secTitle('Experience')}{divider()}
        {experience.map(e => (
          <div key={e.id} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontWeight: 700, margin: 0, fontSize: 10 }}>{e.jobTitle}</p>
                <p style={{ color: '#6b7280', fontSize: 8, margin: '1px 0' }}>{e.company}</p>
              </div>
              <p style={{ fontSize: 8, color: '#9ca3af', margin: 0 }}>{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
            </div>
            <p style={{ color: '#4b5563', fontSize: 9, lineHeight: 1.5, margin: '3px 0 0' }}>{e.description}</p>
          </div>
        ))}
        {secTitle('Education')}{divider()}
        {education.map(e => (
          <div key={e.id} style={{ marginBottom: 8 }}>
            <p style={{ fontWeight: 700, margin: 0, fontSize: 9 }}>{e.degree}</p>
            <p style={{ color: '#6b7280', fontSize: 8, margin: '1px 0' }}>{e.school} · {e.endDate}</p>
          </div>
        ))}
        {secTitle('Skills')}{divider()}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {skills.map(s => <span key={s.id} style={{ background: `${color}15`, color, border: `1px solid ${color}30`, borderRadius: 3, padding: '2px 8px', fontSize: 8 }}>{s.name}</span>)}
        </div>
      </div>
    </div>
  )
}