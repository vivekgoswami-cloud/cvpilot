'use client'

import { useResumeStore } from '@/store/resumeStore'
import { Project } from '@/types/resume'
import { useState } from 'react'

function generateId() { return Math.random().toString(36).slice(2, 9) }

export default function ProjectsForm() {
  const { data, updateProjects } = useResumeStore()
  const [open, setOpen] = useState<string | null>(null)

  const add = () => {
    const newProj: Project = { id: generateId(), name: '', description: '', link: '', technologies: '' }
    updateProjects([...data.projects, newProj])
    setOpen(newProj.id)
  }

  const update = (id: string, field: string, value: string) => {
    updateProjects(data.projects.map((p) => p.id === id ? { ...p, [field]: value } : p))
  }

  const remove = (id: string) => {
    updateProjects(data.projects.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Projects</h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Showcase work that demonstrates your skills.</p>
      </div>

      {data.projects.map((proj) => (
        <div key={proj.id} className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
          <button
            onClick={() => setOpen(open === proj.id ? null : proj.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
            style={{ background: open === proj.id ? 'var(--bg-secondary)' : 'transparent' }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{proj.name || 'Untitled project'}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{proj.technologies || 'Tech stack'}</p>
            </div>
            <span style={{ color: 'var(--text-muted)' }} className="text-lg">{open === proj.id ? '−' : '+'}</span>
          </button>

          {open === proj.id && (
            <div className="px-4 pb-4 space-y-3" style={{ borderTop: '1px solid var(--border)' }}>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. CVPilot Resume Builder"
                  value={proj.name}
                  onChange={(e) => update(proj.id, 'name', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Technologies Used</label>
                <input
                  type="text"
                  placeholder="e.g. Next.js, TypeScript, Tailwind"
                  value={proj.technologies}
                  onChange={(e) => update(proj.id, 'technologies', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Project Link (optional)</label>
                <input
                  type="text"
                  placeholder="github.com/you/project"
                  value={proj.link}
                  onChange={(e) => update(proj.id, 'link', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Description</label>
                <textarea
                  rows={3}
                  placeholder="What did you build and what was the impact?"
                  value={proj.description}
                  onChange={(e) => update(proj.id, 'description', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 resize-none"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>

              <button onClick={() => remove(proj.id)} className="text-xs font-medium text-red-500 hover:text-red-700">
                Remove this project
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={add}
        className="w-full rounded-xl py-3 text-sm font-medium transition-colors"
        style={{ border: '2px dashed var(--border)', color: 'var(--text-muted)' }}
      >
        + Add Project
      </button>
    </div>
  )
}