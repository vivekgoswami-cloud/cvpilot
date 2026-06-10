import { ResumeData, ResumeSettings } from '@/types/resume'

export interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export interface TemplateConfig {
  id: string
  name: string
  category: string
  desc: string
  tags: string[]
  preview: {
    headerColor: string
    accentColor: string
    layout: 'single' | 'sidebar' | 'two-column' | 'minimal' | 'bold'
  }
}

export const templateRegistry: TemplateConfig[] = [
  // General
  { id: 'classic', name: 'Classic', category: 'General', desc: 'Clean and timeless. Works for any industry.', tags: ['popular', 'ats-friendly'], preview: { headerColor: '#2563eb', accentColor: '#2563eb', layout: 'single' } },
  { id: 'minimal', name: 'Minimal', category: 'General', desc: 'Less is more. Let your experience speak.', tags: ['clean', 'simple'], preview: { headerColor: '#111827', accentColor: '#111827', layout: 'minimal' } },
  { id: 'bold', name: 'Bold', category: 'General', desc: 'Strong typography, maximum impact.', tags: ['modern', 'strong'], preview: { headerColor: '#dc2626', accentColor: '#dc2626', layout: 'single' } },
  { id: 'sidebar', name: 'Sidebar', category: 'General', desc: 'Two-panel layout with sidebar for skills.', tags: ['two-panel', 'modern'], preview: { headerColor: '#7c3aed', accentColor: '#7c3aed', layout: 'sidebar' } },
  { id: 'clean', name: 'Clean', category: 'General', desc: 'Ultra-clean with generous whitespace.', tags: ['minimal', 'professional'], preview: { headerColor: '#059669', accentColor: '#059669', layout: 'single' } },
  { id: 'modern-general', name: 'Modern', category: 'General', desc: 'Contemporary design with accent lines.', tags: ['modern', 'fresh'], preview: { headerColor: '#0891b2', accentColor: '#0891b2', layout: 'single' } },
  { id: 'compact', name: 'Compact', category: 'General', desc: 'Fit more content without feeling crowded.', tags: ['dense', 'experienced'], preview: { headerColor: '#374151', accentColor: '#374151', layout: 'single' } },
  { id: 'elegant', name: 'Elegant', category: 'General', desc: 'Sophisticated serif typography.', tags: ['classic', 'formal'], preview: { headerColor: '#78350f', accentColor: '#78350f', layout: 'single' } },
  { id: 'two-column', name: 'Two Column', category: 'General', desc: 'Split layout for balanced presentation.', tags: ['two-column', 'modern'], preview: { headerColor: '#1d4ed8', accentColor: '#1d4ed8', layout: 'two-column' } },
  { id: 'simple', name: 'Simple', category: 'General', desc: 'No frills. Pure content focus.', tags: ['basic', 'ats-friendly'], preview: { headerColor: '#6b7280', accentColor: '#6b7280', layout: 'minimal' } },

  // Tech
  { id: 'developer', name: 'Developer', category: 'Tech', desc: 'Built for software engineers.', tags: ['tech', 'coding'], preview: { headerColor: '#1e293b', accentColor: '#22d3ee', layout: 'single' } },
  { id: 'github-style', name: 'GitHub Style', category: 'Tech', desc: 'Inspired by developer profiles.', tags: ['tech', 'open-source'], preview: { headerColor: '#24292e', accentColor: '#2da44e', layout: 'single' } },
  { id: 'dark-tech', name: 'Dark Mode', category: 'Tech', desc: 'Dark background, neon accents.', tags: ['dark', 'tech'], preview: { headerColor: '#0f172a', accentColor: '#818cf8', layout: 'single' } },
  { id: 'grid-tech', name: 'Grid', category: 'Tech', desc: 'Grid-based layout for technical roles.', tags: ['grid', 'structured'], preview: { headerColor: '#0369a1', accentColor: '#0369a1', layout: 'two-column' } },
  { id: 'coder', name: 'Coder', category: 'Tech', desc: 'Terminal-inspired monospace design.', tags: ['terminal', 'coding'], preview: { headerColor: '#14532d', accentColor: '#22c55e', layout: 'single' } },
  { id: 'engineer', name: 'Engineer', category: 'Tech', desc: 'Structured for engineering roles.', tags: ['engineering', 'technical'], preview: { headerColor: '#1e40af', accentColor: '#3b82f6', layout: 'single' } },
  { id: 'data', name: 'Data Analyst', category: 'Tech', desc: 'Highlights data skills and tools.', tags: ['data', 'analytics'], preview: { headerColor: '#7c3aed', accentColor: '#a78bfa', layout: 'sidebar' } },
  { id: 'fullstack', name: 'Fullstack', category: 'Tech', desc: 'For full-stack developers.', tags: ['fullstack', 'web'], preview: { headerColor: '#0f766e', accentColor: '#14b8a6', layout: 'single' } },
  { id: 'devops', name: 'DevOps', category: 'Tech', desc: 'Cloud and infrastructure focused.', tags: ['devops', 'cloud'], preview: { headerColor: '#92400e', accentColor: '#f59e0b', layout: 'single' } },
  { id: 'product', name: 'Product Manager', category: 'Tech', desc: 'For PMs and product roles.', tags: ['product', 'management'], preview: { headerColor: '#be185d', accentColor: '#ec4899', layout: 'single' } },

  // Management
  { id: 'executive', name: 'Executive', category: 'Management', desc: 'Bold and authoritative for senior roles.', tags: ['senior', 'leadership'], preview: { headerColor: '#1e293b', accentColor: '#94a3b8', layout: 'single' } },
  { id: 'corporate', name: 'Corporate', category: 'Management', desc: 'Structured and formal for corporate roles.', tags: ['formal', 'corporate'], preview: { headerColor: '#1e3a5f', accentColor: '#2563eb', layout: 'single' } },
  { id: 'director', name: 'Director', category: 'Management', desc: 'For director-level positions.', tags: ['director', 'senior'], preview: { headerColor: '#3b0764', accentColor: '#a855f7', layout: 'single' } },
  { id: 'leadership', name: 'Leadership', category: 'Management', desc: 'Emphasizes leadership achievements.', tags: ['leadership', 'impact'], preview: { headerColor: '#7f1d1d', accentColor: '#ef4444', layout: 'single' } },
  { id: 'strategy', name: 'Strategy', category: 'Management', desc: 'For strategy and consulting roles.', tags: ['strategy', 'consulting'], preview: { headerColor: '#064e3b', accentColor: '#10b981', layout: 'single' } },
  { id: 'senior', name: 'Senior Manager', category: 'Management', desc: 'Clean layout for senior managers.', tags: ['senior', 'management'], preview: { headerColor: '#1c1917', accentColor: '#78716c', layout: 'single' } },
  { id: 'csuite', name: 'C-Suite', category: 'Management', desc: 'For CEO, CFO, CTO level roles.', tags: ['c-level', 'executive'], preview: { headerColor: '#0c0a09', accentColor: '#d4a853', layout: 'single' } },
  { id: 'operations', name: 'Operations', category: 'Management', desc: 'For operations and process roles.', tags: ['operations', 'process'], preview: { headerColor: '#1e3a8a', accentColor: '#60a5fa', layout: 'two-column' } },
  { id: 'hr-manager', name: 'HR Manager', category: 'Management', desc: 'People and HR leadership roles.', tags: ['hr', 'people'], preview: { headerColor: '#831843', accentColor: '#f472b6', layout: 'single' } },
  { id: 'project-manager', name: 'Project Manager', category: 'Management', desc: 'Highlights delivery and execution.', tags: ['pm', 'delivery'], preview: { headerColor: '#065f46', accentColor: '#34d399', layout: 'single' } },

  // Creative
  { id: 'creative', name: 'Creative', category: 'Creative', desc: 'Stand out with a unique visual layout.', tags: ['design', 'visual'], preview: { headerColor: '#db2777', accentColor: '#f472b6', layout: 'sidebar' } },
  { id: 'designer', name: 'Designer', category: 'Creative', desc: 'For UI/UX and graphic designers.', tags: ['design', 'ux'], preview: { headerColor: '#7c3aed', accentColor: '#c4b5fd', layout: 'sidebar' } },
  { id: 'portfolio', name: 'Portfolio', category: 'Creative', desc: 'Showcases projects prominently.', tags: ['portfolio', 'projects'], preview: { headerColor: '#0ea5e9', accentColor: '#38bdf8', layout: 'two-column' } },
  { id: 'agency', name: 'Agency', category: 'Creative', desc: 'Bold design for agency professionals.', tags: ['agency', 'bold'], preview: { headerColor: '#000000', accentColor: '#facc15', layout: 'single' } },
  { id: 'magazine', name: 'Magazine', category: 'Creative', desc: 'Editorial-style layout.', tags: ['editorial', 'magazine'], preview: { headerColor: '#831843', accentColor: '#fb7185', layout: 'single' } },
  { id: 'brand', name: 'Brand', category: 'Creative', desc: 'For branding and marketing roles.', tags: ['branding', 'marketing'], preview: { headerColor: '#ea580c', accentColor: '#fb923c', layout: 'single' } },
  { id: 'visual', name: 'Visual', category: 'Creative', desc: 'Visual-first with strong color blocks.', tags: ['visual', 'colorful'], preview: { headerColor: '#0891b2', accentColor: '#22d3ee', layout: 'sidebar' } },
  { id: 'ux-designer', name: 'UX Designer', category: 'Creative', desc: 'Tailored for UX/product design.', tags: ['ux', 'product-design'], preview: { headerColor: '#4f46e5', accentColor: '#818cf8', layout: 'sidebar' } },
  { id: 'illustrator', name: 'Illustrator', category: 'Creative', desc: 'For illustrators and artists.', tags: ['art', 'illustration'], preview: { headerColor: '#be123c', accentColor: '#fda4af', layout: 'single' } },
  { id: 'content', name: 'Content Creator', category: 'Creative', desc: 'For writers and content roles.', tags: ['content', 'writing'], preview: { headerColor: '#15803d', accentColor: '#4ade80', layout: 'single' } },

  // Professional
  { id: 'healthcare', name: 'Healthcare', category: 'Professional', desc: 'Clean layout for medical professionals.', tags: ['medical', 'healthcare'], preview: { headerColor: '#0e7490', accentColor: '#06b6d4', layout: 'single' } },
  { id: 'finance', name: 'Finance', category: 'Professional', desc: 'Conservative and professional for finance.', tags: ['finance', 'banking'], preview: { headerColor: '#14532d', accentColor: '#16a34a', layout: 'single' } },
  { id: 'academic', name: 'Academic', category: 'Professional', desc: 'Detailed layout for research and academia.', tags: ['research', 'academic'], preview: { headerColor: '#78350f', accentColor: '#d97706', layout: 'single' } },
  { id: 'legal', name: 'Legal', category: 'Professional', desc: 'Formal layout for law professionals.', tags: ['law', 'legal'], preview: { headerColor: '#1c1917', accentColor: '#44403c', layout: 'single' } },
  { id: 'sales', name: 'Sales', category: 'Professional', desc: 'Results-driven layout for sales roles.', tags: ['sales', 'results'], preview: { headerColor: '#991b1b', accentColor: '#ef4444', layout: 'single' } },
  { id: 'teacher', name: 'Teacher', category: 'Professional', desc: 'For educators and training roles.', tags: ['education', 'teaching'], preview: { headerColor: '#1d4ed8', accentColor: '#60a5fa', layout: 'single' } },
  { id: 'banker', name: 'Banker', category: 'Professional', desc: 'For banking and investment roles.', tags: ['banking', 'investment'], preview: { headerColor: '#0f172a', accentColor: '#475569', layout: 'single' } },
  { id: 'consultant', name: 'Consultant', category: 'Professional', desc: 'For consulting and advisory roles.', tags: ['consulting', 'advisory'], preview: { headerColor: '#312e81', accentColor: '#6366f1', layout: 'single' } },
  { id: 'fresher', name: 'Fresher', category: 'Professional', desc: 'Perfect for your very first job application.', tags: ['entry-level', 'fresher'], preview: { headerColor: '#166534', accentColor: '#22c55e', layout: 'single' } },
  { id: 'startup', name: 'Startup', category: 'Professional', desc: 'Dynamic and bold for startup environments.', tags: ['startup', 'dynamic'], preview: { headerColor: '#c2410c', accentColor: '#f97316', layout: 'single' } },
]

export const categories = ['All', 'General', 'Tech', 'Management', 'Creative', 'Professional']