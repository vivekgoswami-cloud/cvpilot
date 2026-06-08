'use client'

import { useResumeStore } from '@/store/resumeStore'
import { Experience } from '@/types/resume'
import { useState } from 'react'

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

const empty: Omit<Experience, 'id'> = {
  jobTitle: '', company: '', location: '',
  startDate: '', endDate: '', current: false, description: '',
}

export default function ExperienceForm() {
  const { data, updateExperience } = useResumeStore()
  const [open, setOpen] = useState<string | null>(null)

  const add = () => {
    const newExp: Experience = { id: generateId(), ...empty }
    updateExperience([...data.experience, newExp])
    setOpen(newExp.id)
  }

  const update = (id: string, field: string, value: string | boolean) => {
    updateExperience(data.experience.map((e) => e.id === id ? { ...e, [field]: value } : e))
  }

  const remove = (id: string) => {
    updateExperience(data.experience.filter((e) => e.id !== id))
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-1">Work Experience</h2>
        <p className="text-sm text-gray-400">Add your work history, most recent first.</p>
      </div>

      {data.experience.map((exp) => (
        <div key={exp.id} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === exp.id ? null : exp.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{exp.jobTitle || 'Untitled role'}</p>
              <p className="text-xs text-gray-400">{exp.company || 'Company name'}</p>
            </div>
            <span className="text-gray-400 text-lg">{open === exp.id ? '−' : '+'}</span>
          </button>

          {open === exp.id && (
            <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
              {[
                { key: 'jobTitle', label: 'Job Title', placeholder: 'Event Manager' },
                { key: 'company', label: 'Company', placeholder: 'Luxurito Events' },
                { key: 'location', label: 'Location', placeholder: 'Surat, Gujarat' },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    value={exp[f.key as keyof Experience] as string}
                    onChange={(e) => update(exp.id, f.key, e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Start Date</label>
                  <input type="month" value={exp.startDate}
                    onChange={(e) => update(exp.id, 'startDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">End Date</label>
                  <input type="month" value={exp.endDate} disabled={exp.current}
                    onChange={(e) => update(exp.id, 'endDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none disabled:bg-gray-50"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" checked={exp.current}
                  onChange={(e) => update(exp.id, 'current', e.target.checked)}
                  className="rounded"
                />
                Currently working here
              </label>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                <textarea rows={3} placeholder="Describe your responsibilities and achievements..."
                  value={exp.description}
                  onChange={(e) => update(exp.id, 'description', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none resize-none"
                />
              </div>

              <button onClick={() => remove(exp.id)}
                className="text-xs text-red-500 hover:text-red-700 font-medium"
              >
                Remove this experience
              </button>
            </div>
          )}
        </div>
      ))}

      <button onClick={add}
        className="w-full rounded-xl border-2 border-dashed border-gray-200 py-3 text-sm font-medium text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
      >
        + Add Experience
      </button>
    </div>
  )
}