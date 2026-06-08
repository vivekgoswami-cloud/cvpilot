'use client'

import { useResumeStore } from '@/store/resumeStore'

export default function PersonalInfoForm() {
  const { data, updatePersonalInfo } = useResumeStore()
  const info = data.personalInfo

  const fields = [
    { key: 'fullName', label: 'Full Name', placeholder: 'Vivek Goswami', type: 'text' },
    { key: 'email', label: 'Email', placeholder: 'vivek@gmail.com', type: 'email' },
    { key: 'phone', label: 'Phone', placeholder: '+91 98765 43210', type: 'tel' },
    { key: 'location', label: 'Location', placeholder: 'Ahmedabad, Gujarat', type: 'text' },
    { key: 'linkedin', label: 'LinkedIn URL', placeholder: 'linkedin.com/in/vivek', type: 'text' },
    { key: 'website', label: 'Website / Portfolio', placeholder: 'vivek.dev', type: 'text' },
  ]

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-1">Personal Information</h2>
        <p className="text-sm text-gray-400">This appears at the top of your resume.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              value={info[f.key as keyof typeof info]}
              onChange={(e) => updatePersonalInfo({ [f.key]: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Professional Summary</label>
        <textarea
          rows={4}
          placeholder="A brief summary about yourself, your experience and what you bring to the role..."
          value={info.summary}
          onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
        />
      </div>
    </div>
  )
}