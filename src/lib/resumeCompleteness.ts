import { ResumeData } from '@/types/resume'

export function calculateCompleteness(data: ResumeData): number {
  let score = 0
  const weights = {
    personal: 30,
    experience: 25,
    education: 20,
    skills: 15,
    projects: 5,
    certifications: 5,
  }

  // Personal info
  const p = data.personalInfo
  const personalFields = [p.fullName, p.email, p.phone, p.location, p.summary]
  const filledPersonal = personalFields.filter(Boolean).length
  score += (filledPersonal / personalFields.length) * weights.personal

  // Experience
  if (data.experience.length > 0) {
    const hasContent = data.experience.some(e => e.jobTitle && e.company && e.description)
    score += hasContent ? weights.experience : weights.experience * 0.5
  }

  // Education
  if (data.education.length > 0) {
    const hasContent = data.education.some(e => e.degree && e.school)
    score += hasContent ? weights.education : weights.education * 0.5
  }

  // Skills
  if (data.skills.length > 0) {
    score += Math.min(data.skills.length / 5, 1) * weights.skills
  }

  // Projects
  if (data.projects.length > 0) score += weights.projects

  // Certifications
  if (data.certifications.length > 0) score += weights.certifications

  return Math.round(Math.min(score, 100))
}