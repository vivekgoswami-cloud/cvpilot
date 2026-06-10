'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useResumeStore } from '@/store/resumeStore'
import PersonalInfoForm from '@/components/editor/PersonalInfoForm'
import ExperienceForm from '@/components/editor/ExperienceForm'
import EducationForm from '@/components/editor/EducationForm'
import SkillsForm from '@/components/editor/SkillsForm'
import ResumePreview from '@/components/preview/ResumePreview'

const sections = [
  { id: 'personal', label: 'Personal Info', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
]

const colorMap: Record<string, string> = {
  classic: 'blue', modern: 'purple', minimal: 'gray',
  executive: 'gray', creative: 'red', fresher: 'green',
  finance: 'green', academic: 'orange', startup: 'orange',
  corporate: 'purple', healthcare: 'green', sales: 'red',
}

function BuilderInner() {
  const [activeSection, setActiveSection] = useState('personal')
  const [showPreview, setShowPreview] = useState(false)
  const { settings, updateSettings } = useResumeStore()
  const searchParams = useSearchParams()

  useEffect(() => {
    const template = searchParams.get('template')
    if (template) {
      updateSettings({
        templateId: template,
        colorTheme: (colorMap[template] as any) || 'blue',
      })
    }
  }, [searchParams])

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Left Panel */}
      <div
        className={`flex flex-col w-full lg:w-[500px] shrink-0 ${showPreview ? 'hidden lg:flex' : 'flex'}`}
        style={{ borderRight: '1px solid var(--border)', background: 'var(--bg-primary)' }}
      >
        {/* Toolbar */}
        <div className="px-4 py-3 flex items-center gap-2 flex-wrap" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
          <select
            value={settings.fontFamily}
            onChange={(e) => updateSettings({ fontFamily: e.target.value as any })}
            className="text-sm rounded-lg px-2 py-1.5"
            style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            <option value="Inter">Inter</option>
            <option value="Georgia">Georgia</option>
            <option value="Roboto">Roboto</option>
            <option value="Playfair Display">Playfair</option>
          </select>

          <select
            value={settings.fontSize}
            onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
            className="text-sm rounded-lg px-2 py-1.5"
            style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <div className="flex gap-1.5">
            {[
              { id: 'blue', hex: '#2563eb' },
              { id: 'purple', hex: '#9333ea' },
              { id: 'green', hex: '#16a34a' },
              { id: 'red', hex: '#dc2626' },
              { id: 'gray', hex: '#4b5563' },
              { id: 'orange', hex: '#ea580c' },
              { id: 'teal', hex: '#0d9488' },
              { id: 'rose', hex: '#e11d48' },
            ].map((color) => (
              <button
                key={color.id}
                onClick={() => updateSettings({ colorTheme: color.id as any })}
                title={color.id}
                className="w-5 h-5 rounded-full transition-all hover:scale-110"
                style={{
                  backgroundColor: color.hex,
                  transform: settings.colorTheme === color.id ? 'scale(1.3)' : undefined,
                  outline: settings.colorTheme === color.id ? `2px solid ${color.hex}` : 'none',
                  outlineOffset: '2px',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setShowPreview(true)}
            className="ml-auto lg:hidden text-sm px-3 py-1.5 rounded-lg text-white"
            style={{ background: 'var(--accent)' }}
          >
            Preview
          </button>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto" style={{ borderBottom: '1px solid var(--border)' }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium shrink-0 border-b-2 transition-colors"
              style={{
                borderBottomColor: activeSection === s.id ? 'var(--accent)' : 'transparent',
                color: activeSection === s.id ? 'var(--accent)' : 'var(--text-muted)',
              }}
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeSection === 'personal' && <PersonalInfoForm />}
          {activeSection === 'experience' && <ExperienceForm />}
          {activeSection === 'education' && <EducationForm />}
          {activeSection === 'skills' && <SkillsForm />}
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`flex-1 overflow-y-auto ${showPreview ? 'flex flex-col' : 'hidden lg:block'}`}
        style={{ background: 'var(--bg-tertiary)' }}
      >
        {showPreview && (
          <div className="lg:hidden flex items-center gap-2 px-4 py-2" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
            <button onClick={() => setShowPreview(false)} className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              ← Back to editor
            </button>
          </div>
        )}
        <div className="p-6 flex justify-center min-h-full items-start">
          <ResumePreview />
        </div>
      </div>
    </div>
  )
}

export default function BuilderClient() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen" style={{ color: 'var(--text-secondary)' }}>Loading...</div>}>
      <BuilderInner />
    </Suspense>
  )
}