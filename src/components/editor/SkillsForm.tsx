'use client'

import { useResumeStore } from '@/store/resumeStore'
import { Skill } from '@/types/resume'

function generateId() { return Math.random().toString(36).slice(2, 9) }

export default function SkillsForm() {
  const { data, updateSkills } = useResumeStore()

  const add = () => {
    const newSkill: Skill = { id: generateId(), name: '', level: 'Intermediate' }
    updateSkills([...data.skills, newSkill])
  }

  const update = (id: string, field: string, value: string) => {
    updateSkills(data.skills.map((s) => s.id === id ? { ...s, [field]: value } : s))
  }

  const remove = (id: string) => {
    updateSkills(data.skills.filter((s) => s.id !== id))
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-1">Skills</h2>
        <p className="text-sm text-gray-400">Add your key skills with proficiency level.</p>
      </div>

      <div className="space-y-2">
        {data.skills.map((skill) => (
          <div key={skill.id} className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="e.g. Event Planning"
              value={skill.name}
              onChange={(e) => update(skill.id, 'name', e.target.value)}
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <select
              value={skill.level}
              onChange={(e) => update(skill.id, 'level', e.target.value)}
              className="rounded-lg border border-gray-200 px-2 py-2 text-sm bg-white focus:border-blue-400 focus:outline-none"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
            <button onClick={() => remove(skill.id)}
              className="text-gray-300 hover:text-red-500 text-lg font-bold transition-colors"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button onClick={add}
        className="w-full rounded-xl border-2 border-dashed border-gray-200 py-3 text-sm font-medium text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
      >
        + Add Skill
      </button>
    </div>
  )
}