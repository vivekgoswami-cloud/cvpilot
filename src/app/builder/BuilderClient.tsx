'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useResumeStore } from '@/store/resumeStore'
import { calculateCompleteness } from '@/lib/resumeCompleteness'
import StepSidebar from '@/components/builder/StepSidebar'
import PersonalInfoForm from '@/components/editor/PersonalInfoForm'
import ExperienceForm from '@/components/editor/ExperienceForm'
import EducationForm from '@/components/editor/EducationForm'
import SkillsForm from '@/components/editor/SkillsForm'
import ResumePreview from '@/components/preview/ResumePreview'
import DownloadButton from '@/components/preview/DownloadButton'

const colorMap: Record<string, string> = {
  classic: 'blue', modern: 'purple', minimal: 'gray',
  executive: 'gray', creative: 'red', fresher: 'green',
  finance: 'green', academic: 'orange', startup: 'orange',
  corporate: 'purple', healthcare: 'green', sales: 'red',
}

function BuilderInner() {
  const [activeStep, setActiveStep] = useState('personal')
  const [showPreview, setShowPreview] = useState(false)
  const { data, settings, updateSettings } = useResumeStore()
  const searchParams = useSearchParams()
  const completeness = calculateCompleteness(data)

  useEffect(() => {
    const template = searchParams.get('template')
    if (template) {
      updateSettings({ templateId: template, colorTheme: 'template' })
    }
  }, [searchParams])

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Step Sidebar */}
      <StepSidebar activeStep={activeStep} onStepChange={setActiveStep} completeness={completeness} />

      {/* Editor Panel */}
      <div
        className={`flex flex-col w-full lg:w-[420px] shrink-0 ${showPreview ? 'hidden lg:flex' : 'flex'}`}
        style={{ borderRight: '1px solid var(--border)', background: 'var(--bg-primary)' }}
      >
        {/* Top toolbar */}
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

          <div className="ml-auto flex items-center gap-2">
            <DownloadButton />
            <button
              onClick={() => setShowPreview(true)}
              className="lg:hidden text-sm px-3 py-1.5 rounded-lg text-white"
              style={{ background: 'var(--accent)' }}
            >
              Preview
            </button>
          </div>
        </div>

        {/* Mobile step nav */}
        <div className="lg:hidden flex overflow-x-auto" style={{ borderBottom: '1px solid var(--border)' }}>
          {['personal','experience','education','skills','projects','certifications'].map((id) => (
            <button
              key={id}
              onClick={() => setActiveStep(id)}
              className="px-4 py-3 text-sm font-medium shrink-0 border-b-2 transition-colors capitalize"
              style={{
                borderBottomColor: activeStep === id ? 'var(--accent)' : 'transparent',
                color: activeStep === id ? 'var(--accent)' : 'var(--text-muted)',
              }}
            >
              {id}
            </button>
          ))}
        </div>

        {/* Form area */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeStep === 'personal' && <PersonalInfoForm />}
          {activeStep === 'experience' && <ExperienceForm />}
          {activeStep === 'education' && <EducationForm />}
          {activeStep === 'skills' && <SkillsForm />}
          {activeStep === 'projects' && (
            <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
              Projects form coming next
            </div>
          )}
          {activeStep === 'certifications' && (
            <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
              Certifications form coming next
            </div>
          )}
        </div>

        {/* Next/Prev navigation */}
        <StepNav activeStep={activeStep} onStepChange={setActiveStep} />
      </div>

      {/* Right Panel — Preview */}
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

const stepOrder = ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']

function StepNav({ activeStep, onStepChange }: { activeStep: string; onStepChange: (s: string) => void }) {
  const index = stepOrder.indexOf(activeStep)
  const prev = stepOrder[index - 1]
  const next = stepOrder[index + 1]

  return (
    <div className="flex items-center justify-between px-5 py-3" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
      <button
        onClick={() => prev && onStepChange(prev)}
        disabled={!prev}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-30"
        style={{ background: 'var(--bg-primary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
        Back
      </button>
      <button
        onClick={() => next && onStepChange(next)}
        disabled={!next}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-30"
        style={{ background: 'var(--accent)' }}
      >
        Next
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
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