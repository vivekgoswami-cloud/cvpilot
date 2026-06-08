'use client'

import { useResumeStore } from '@/store/resumeStore'
import { Education } from '@/types/resume'
import { useState } from 'react'

function generateId() { return Math.random().toString(36).slice(2, 9) }

export default function EducationForm() {
  const { data, updateEducation } = useResumeStore()
  const [open, setOpen] = useState<string | null>(null)

  const add = () => {
    const newEdu: Education = {
      id: generateId(), degree: '', school: '',
      location: '', startDate: '', endDate: '', grade: '',
    }
    updateEducation([...data.education, newEdu])
    setOpen(newEdu.id)
  }

  const update = (id: string, field: string, value: string) => {
    updateEducation(data.education.map((e) => e.id === id ? { ...e, [field]: value } : e))
  }

  const remove = (id: string) => {
    updateEducation(data.education.filter((e) => e.id !== id))
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-1">Education</h2>
        <p className="text-sm text-gray-400">Add your degrees and certifications.</p>
      </div>

      {data.education.map((edu) => (
        <div key={edu.id} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === edu.id ? null : edu.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{edu.degree || 'Untitled degree'}</p>
              <p className="text-xs text-gray-400">{edu.school || 'School name'}</p>
            </div>
            <span className="text-gray-400 text-lg">{open === edu.id ? '−' : '+'}</span>
          </button>

          {open === edu.id && (
            <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
              {[
                { key: 'degree', label: 'Degree / Course', placeholder: 'B.Com / BBA / B.Tech' },
                { key: 'school', label: 'School / University', placeholder: 'Gujarat University' },
                { key: 'location', label: 'Location', placeholder: 'Ahmedabad, Gujarat' },
                { key: 'grade', label: 'Grade / CGPA', placeholder: '8.5 CGPA / 75%' },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                  <input type="text" placeholder={f.placeholder}
                    value={edu[f.key as keyof Education] as string}
                    onChange={(e) => update(edu.id, f.key, e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Start Year</label>
                  <input type="month" value={edu.startDate}
                    onChange={(e) => update(edu.id, 'startDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">End Year</label>
                  <input type="month" value={edu.endDate}
                    onChange={(e) => update(edu.id, 'endDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              <button onClick={() => remove(edu.id)}
                className="text-xs text-red-500 hover:text-red-700 font-medium"
              >
                Remove this education
              </button>
            </div>
          )}
        </div>
      ))}

      <button onClick={add}
        className="w-full rounded-xl border-2 border-dashed border-gray-200 py-3 text-sm font-medium text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
      >
        + Add Education
      </button>
    </div>
  )
}