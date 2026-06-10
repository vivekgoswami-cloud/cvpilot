export type FontFamily = 'Inter' | 'Georgia' | 'Roboto' | 'Playfair Display'
export type FontSize = 'small' | 'medium' | 'large'
export type ColorTheme = 'template' | 'blue' | 'purple' | 'green' | 'red' | 'gray' | 'orange' | 'teal' | 'rose'

export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  summary: string
}

export interface Experience {
  id: string
  jobTitle: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  startDate: string
  endDate: string
  grade: string
}

export interface Skill {
  id: string
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

export interface Project {
  id: string
  name: string
  description: string
  link: string
  technologies: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
  certifications: Certification[]
}

export interface ResumeSettings {
  fontFamily: FontFamily
  fontSize: FontSize
  colorTheme: ColorTheme
  templateId: string
}

export interface Resume {
  id: string
  name: string
  data: ResumeData
  settings: ResumeSettings
  createdAt: string
  updatedAt: string
}