'use client'

interface Step {
  id: string
  label: string
  icon: string
}

const steps: Step[] = [
  { id: 'personal', label: 'Personal Info', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'certifications', label: 'Certifications', icon: '🏆' },
]

interface StepSidebarProps {
  activeStep: string
  onStepChange: (step: string) => void
  completeness: number
}

export default function StepSidebar({ activeStep, onStepChange, completeness }: StepSidebarProps) {
  const activeIndex = steps.findIndex(s => s.id === activeStep)

  return (
    <div
      className="hidden lg:flex flex-col w-64 shrink-0 p-5"
      style={{ borderRight: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
    >
      {/* Completeness */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Resume strength</span>
          <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>{completeness}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${completeness}%`, background: 'var(--accent)' }}
          />
        </div>
        <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
          {completeness < 40 ? 'Just getting started' : completeness < 80 ? 'Looking good, keep going' : 'Almost there!'}
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-1 relative">
        {/* Connector line */}
        <div
          className="absolute left-[19px] top-5 bottom-5 w-px"
          style={{ background: 'var(--border)' }}
        />

        {steps.map((step, i) => {
          const isActive = step.id === activeStep
          const isDone = i < activeIndex

          return (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className="flex items-center gap-3 px-2 py-2.5 rounded-xl text-left transition-all relative z-10"
              style={{
                background: isActive ? 'var(--accent-light)' : 'transparent',
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all"
                style={{
                  background: isActive ? 'var(--accent)' : isDone ? 'var(--accent-light)' : 'var(--bg-primary)',
                  color: isActive ? 'white' : isDone ? 'var(--accent)' : 'var(--text-muted)',
                  border: isActive ? 'none' : `1px solid ${isDone ? 'var(--accent-border)' : 'var(--border)'}`,
                }}
              >
                {isDone ? (
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                ) : (
                  <span>{step.icon}</span>
                )}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {step.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Auto-save indicator */}
      <div className="mt-auto pt-4 flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        Saved automatically
      </div>
    </div>
  )
}