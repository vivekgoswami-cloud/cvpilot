'use client'

import { useState } from 'react'
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

export default function BuilderClient() {
  const [activeSection, setActiveSection] = useState('personal')
  const [showPreview, setShowPreview] = useState(false)
  const { settings, updateSettings } = useResumeStore()

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">

      {/* Left Panel */}
      <div className={`flex flex-col w-full lg:w-[480px] shrink-0 border-r border-gray-200 bg-white ${showPreview ? 'hidden lg:flex' : 'flex'}`}>

        {/* Toolbar */}
        <div className="border-b border-gray-100 px-4 py-3 flex items-center gap-3 bg-gray-50">
          <select
            value={settings.fontFamily}
            onChange={(e) => updateSettings({ fontFamily: e.target.value as any })}
            className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white"
          >
            <option value="Inter">Inter</option>
            <option value="Georgia">Georgia</option>
            <option value="Roboto">Roboto</option>
            <option value="Playfair Display">Playfair Display</option>
          </select>

          <select
            value={settings.fontSize}
            onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
            className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <div className="flex gap-1.5 ml-1">
            {['blue', 'purple', 'green', 'red', 'gray', 'orange'].map((color) => (
              <button
                key={color}
                onClick={() => updateSettings({ colorTheme: color as any })}
                className={`w-5 h-5 rounded-full transition-transform ${
                  settings.colorTheme === color ? 'scale-125 ring-2 ring-offset-1 ring-gray-400' : ''
                }`}
                style={{ backgroundColor: {
                  blue: '#2563eb', purple: '#9333ea', green: '#16a34a',
                  red: '#dc2626', gray: '#4b5563', orange: '#ea580c'
                }[color] }}
              />
            ))}
          </div>

          <button
            onClick={() => setShowPreview(true)}
            className="ml-auto lg:hidden text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg"
          >
            Preview
          </button>
        </div>

        {/* Section tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium shrink-0 border-b-2 transition-colors ${
                activeSection === s.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Form area */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeSection === 'personal' && <PersonalInfoForm />}
          {activeSection === 'experience' && <ExperienceForm />}
          {activeSection === 'education' && <EducationForm />}
          {activeSection === 'skills' && <SkillsForm />}
        </div>
      </div>

      {/* Right Panel — Live Preview */}
      <div className={`flex-1 bg-gray-100 overflow-y-auto ${showPreview ? 'flex flex-col' : 'hidden lg:block'}`}>
        {showPreview && (
          <div className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-200">
            <button
              onClick={() => setShowPreview(false)}
              className="text-sm text-blue-600 font-medium"
            >
              ← Back to editor
            </button>
          </div>
        )}
        <div className="p-6 flex justify-center">
          <ResumePreview />
        </div>
      </div>

    </div>
  )
}