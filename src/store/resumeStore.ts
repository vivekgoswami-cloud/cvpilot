import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ResumeData, ResumeSettings } from '@/types/resume'

const defaultData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
}

const defaultSettings: ResumeSettings = {
  fontFamily: 'Inter',
  fontSize: 'medium',
  colorTheme: 'blue',
  templateId: 'classic',
}

interface ResumeStore {
  data: ResumeData
  settings: ResumeSettings
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void
  updateExperience: (experience: ResumeData['experience']) => void
  updateEducation: (education: ResumeData['education']) => void
  updateSkills: (skills: ResumeData['skills']) => void
  updateProjects: (projects: ResumeData['projects']) => void
  updateCertifications: (certifications: ResumeData['certifications']) => void
  updateSettings: (settings: Partial<ResumeSettings>) => void
  resetResume: () => void
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      data: defaultData,
      settings: defaultSettings,
      updatePersonalInfo: (info) =>
        set((state) => ({
          data: { ...state.data, personalInfo: { ...state.data.personalInfo, ...info } },
        })),
      updateExperience: (experience) =>
        set((state) => ({ data: { ...state.data, experience } })),
      updateEducation: (education) =>
        set((state) => ({ data: { ...state.data, education } })),
      updateSkills: (skills) =>
        set((state) => ({ data: { ...state.data, skills } })),
      updateProjects: (projects) =>
        set((state) => ({ data: { ...state.data, projects } })),
      updateCertifications: (certifications) =>
        set((state) => ({ data: { ...state.data, certifications } })),
      updateSettings: (settings) =>
        set((state) => ({ settings: { ...state.settings, ...settings } })),
      resetResume: () => set({ data: defaultData, settings: defaultSettings }),
    }),
    { name: 'cvpilot-resume' }
  )
)