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
    layout: 'single' | 'sidebar' | 'two-column' | 'minimal' | 'bold' | 'executive' | 'tech' | 'creative' | 'academic' | 'modern-card'
  }
}

export const templateRegistry: TemplateConfig[] = [
  // General (10)
  { id: 'classic', name: 'Classic', category: 'General', desc: 'Clean and timeless. Works for any industry.', tags: ['popular', 'ats-friendly'], preview: { headerColor: '#2563eb', accentColor: '#2563eb', layout: 'single' } },
  { id: 'minimal', name: 'Minimal', category: 'General', desc: 'Less is more. Let your experience speak.', tags: ['clean'], preview: { headerColor: '#111827', accentColor: '#111827', layout: 'minimal' } },
  { id: 'bold', name: 'Bold', category: 'General', desc: 'Strong typography, maximum impact.', tags: ['modern'], preview: { headerColor: '#dc2626', accentColor: '#dc2626', layout: 'bold' } },
  { id: 'sidebar', name: 'Sidebar', category: 'General', desc: 'Two-panel layout with sidebar for skills.', tags: ['two-panel'], preview: { headerColor: '#7c3aed', accentColor: '#7c3aed', layout: 'sidebar' } },
  { id: 'clean', name: 'Clean', category: 'General', desc: 'Ultra-clean with generous whitespace.', tags: ['minimal'], preview: { headerColor: '#059669', accentColor: '#059669', layout: 'single' } },
  { id: 'modern-general', name: 'Modern', category: 'General', desc: 'Contemporary design with accent lines.', tags: ['modern'], preview: { headerColor: '#0891b2', accentColor: '#0891b2', layout: 'modern-card' } },
  { id: 'compact', name: 'Compact', category: 'General', desc: 'Fit more content without feeling crowded.', tags: ['dense'], preview: { headerColor: '#374151', accentColor: '#374151', layout: 'two-column' } },
  { id: 'elegant', name: 'Elegant', category: 'General', desc: 'Sophisticated serif typography.', tags: ['formal'], preview: { headerColor: '#78350f', accentColor: '#78350f', layout: 'academic' } },
  { id: 'two-column', name: 'Two Column', category: 'General', desc: 'Split layout for balanced presentation.', tags: ['two-column'], preview: { headerColor: '#1d4ed8', accentColor: '#1d4ed8', layout: 'two-column' } },
  { id: 'simple', name: 'Simple', category: 'General', desc: 'No frills. Pure content focus.', tags: ['basic'], preview: { headerColor: '#6b7280', accentColor: '#6b7280', layout: 'minimal' } },

  // Tech (10)
  { id: 'developer', name: 'Developer', category: 'Tech', desc: 'Built for software engineers.', tags: ['tech'], preview: { headerColor: '#22d3ee', accentColor: '#22d3ee', layout: 'tech' } },
  { id: 'github-style', name: 'GitHub Style', category: 'Tech', desc: 'Inspired by developer profiles.', tags: ['tech'], preview: { headerColor: '#2da44e', accentColor: '#2da44e', layout: 'tech' } },
  { id: 'dark-tech', name: 'Dark Mode', category: 'Tech', desc: 'Dark background, neon accents.', tags: ['dark'], preview: { headerColor: '#818cf8', accentColor: '#818cf8', layout: 'tech' } },
  { id: 'grid-tech', name: 'Grid', category: 'Tech', desc: 'Grid-based layout for technical roles.', tags: ['grid'], preview: { headerColor: '#0369a1', accentColor: '#0369a1', layout: 'two-column' } },
  { id: 'coder', name: 'Coder', category: 'Tech', desc: 'Terminal-inspired monospace design.', tags: ['terminal'], preview: { headerColor: '#22c55e', accentColor: '#22c55e', layout: 'tech' } },
  { id: 'engineer', name: 'Engineer', category: 'Tech', desc: 'Structured for engineering roles.', tags: ['engineering'], preview: { headerColor: '#3b82f6', accentColor: '#3b82f6', layout: 'modern-card' } },
  { id: 'data', name: 'Data Analyst', category: 'Tech', desc: 'Highlights data skills and tools.', tags: ['data'], preview: { headerColor: '#a78bfa', accentColor: '#a78bfa', layout: 'sidebar' } },
  { id: 'fullstack', name: 'Fullstack', category: 'Tech', desc: 'For full-stack developers.', tags: ['fullstack'], preview: { headerColor: '#14b8a6', accentColor: '#14b8a6', layout: 'single' } },
  { id: 'devops', name: 'DevOps', category: 'Tech', desc: 'Cloud and infrastructure focused.', tags: ['devops'], preview: { headerColor: '#f59e0b', accentColor: '#f59e0b', layout: 'bold' } },
  { id: 'product', name: 'Product Manager', category: 'Tech', desc: 'For PMs and product roles.', tags: ['product'], preview: { headerColor: '#ec4899', accentColor: '#ec4899', layout: 'executive' } },

  // Management (10)
  { id: 'executive', name: 'Executive', category: 'Management', desc: 'Bold and authoritative for senior roles.', tags: ['senior'], preview: { headerColor: '#d4a853', accentColor: '#d4a853', layout: 'executive' } },
  { id: 'corporate', name: 'Corporate', category: 'Management', desc: 'Structured and formal for corporate roles.', tags: ['formal'], preview: { headerColor: '#2563eb', accentColor: '#2563eb', layout: 'executive' } },
  { id: 'director', name: 'Director', category: 'Management', desc: 'For director-level positions.', tags: ['director'], preview: { headerColor: '#a855f7', accentColor: '#a855f7', layout: 'bold' } },
  { id: 'leadership', name: 'Leadership', category: 'Management', desc: 'Emphasizes leadership achievements.', tags: ['leadership'], preview: { headerColor: '#ef4444', accentColor: '#ef4444', layout: 'single' } },
  { id: 'strategy', name: 'Strategy', category: 'Management', desc: 'For strategy and consulting roles.', tags: ['strategy'], preview: { headerColor: '#10b981', accentColor: '#10b981', layout: 'two-column' } },
  { id: 'senior', name: 'Senior Manager', category: 'Management', desc: 'Clean layout for senior managers.', tags: ['senior'], preview: { headerColor: '#78716c', accentColor: '#78716c', layout: 'minimal' } },
  { id: 'csuite', name: 'C-Suite', category: 'Management', desc: 'For CEO, CFO, CTO level roles.', tags: ['c-level'], preview: { headerColor: '#ca8a04', accentColor: '#ca8a04', layout: 'executive' } },
  { id: 'operations', name: 'Operations', category: 'Management', desc: 'For operations and process roles.', tags: ['operations'], preview: { headerColor: '#60a5fa', accentColor: '#60a5fa', layout: 'modern-card' } },
  { id: 'hr-manager', name: 'HR Manager', category: 'Management', desc: 'People and HR leadership roles.', tags: ['hr'], preview: { headerColor: '#f472b6', accentColor: '#f472b6', layout: 'sidebar' } },
  { id: 'project-manager', name: 'Project Manager', category: 'Management', desc: 'Highlights delivery and execution.', tags: ['pm'], preview: { headerColor: '#34d399', accentColor: '#34d399', layout: 'two-column' } },

  // Creative (10)
  { id: 'creative', name: 'Creative', category: 'Creative', desc: 'Stand out with a unique visual layout.', tags: ['design'], preview: { headerColor: '#db2777', accentColor: '#db2777', layout: 'creative' } },
  { id: 'designer', name: 'Designer', category: 'Creative', desc: 'For UI/UX and graphic designers.', tags: ['ux'], preview: { headerColor: '#7c3aed', accentColor: '#7c3aed', layout: 'creative' } },
  { id: 'portfolio', name: 'Portfolio', category: 'Creative', desc: 'Showcases projects prominently.', tags: ['portfolio'], preview: { headerColor: '#0ea5e9', accentColor: '#0ea5e9', layout: 'modern-card' } },
  { id: 'agency', name: 'Agency', category: 'Creative', desc: 'Bold design for agency professionals.', tags: ['agency'], preview: { headerColor: '#facc15', accentColor: '#facc15', layout: 'bold' } },
  { id: 'magazine', name: 'Magazine', category: 'Creative', desc: 'Editorial-style layout.', tags: ['editorial'], preview: { headerColor: '#fb7185', accentColor: '#fb7185', layout: 'creative' } },
  { id: 'brand', name: 'Brand', category: 'Creative', desc: 'For branding and marketing roles.', tags: ['branding'], preview: { headerColor: '#fb923c', accentColor: '#fb923c', layout: 'single' } },
  { id: 'visual', name: 'Visual', category: 'Creative', desc: 'Visual-first with strong color blocks.', tags: ['visual'], preview: { headerColor: '#22d3ee', accentColor: '#22d3ee', layout: 'creative' } },
  { id: 'ux-designer', name: 'UX Designer', category: 'Creative', desc: 'Tailored for UX/product design.', tags: ['ux'], preview: { headerColor: '#818cf8', accentColor: '#818cf8', layout: 'sidebar' } },
  { id: 'illustrator', name: 'Illustrator', category: 'Creative', desc: 'For illustrators and artists.', tags: ['art'], preview: { headerColor: '#fda4af', accentColor: '#fda4af', layout: 'creative' } },
  { id: 'content', name: 'Content Creator', category: 'Creative', desc: 'For writers and content roles.', tags: ['content'], preview: { headerColor: '#4ade80', accentColor: '#4ade80', layout: 'modern-card' } },

  // Professional (10)
  { id: 'healthcare', name: 'Healthcare', category: 'Professional', desc: 'Clean layout for medical professionals.', tags: ['medical'], preview: { headerColor: '#06b6d4', accentColor: '#06b6d4', layout: 'single' } },
  { id: 'finance', name: 'Finance', category: 'Professional', desc: 'Conservative and professional for finance.', tags: ['finance'], preview: { headerColor: '#16a34a', accentColor: '#16a34a', layout: 'academic' } },
  { id: 'academic', name: 'Academic', category: 'Professional', desc: 'Detailed layout for research and academia.', tags: ['research'], preview: { headerColor: '#d97706', accentColor: '#d97706', layout: 'academic' } },
  { id: 'legal', name: 'Legal', category: 'Professional', desc: 'Formal layout for law professionals.', tags: ['law'], preview: { headerColor: '#44403c', accentColor: '#44403c', layout: 'academic' } },
  { id: 'sales', name: 'Sales', category: 'Professional', desc: 'Results-driven layout for sales roles.', tags: ['sales'], preview: { headerColor: '#ef4444', accentColor: '#ef4444', layout: 'bold' } },
  { id: 'teacher', name: 'Teacher', category: 'Professional', desc: 'For educators and training roles.', tags: ['education'], preview: { headerColor: '#60a5fa', accentColor: '#60a5fa', layout: 'single' } },
  { id: 'banker', name: 'Banker', category: 'Professional', desc: 'For banking and investment roles.', tags: ['banking'], preview: { headerColor: '#475569', accentColor: '#475569', layout: 'executive' } },
  { id: 'consultant', name: 'Consultant', category: 'Professional', desc: 'For consulting and advisory roles.', tags: ['consulting'], preview: { headerColor: '#6366f1', accentColor: '#6366f1', layout: 'two-column' } },
  { id: 'fresher', name: 'Fresher', category: 'Professional', desc: 'Perfect for your very first job application.', tags: ['entry-level'], preview: { headerColor: '#22c55e', accentColor: '#22c55e', layout: 'modern-card' } },
  { id: 'startup', name: 'Startup', category: 'Professional', desc: 'Dynamic and bold for startup environments.', tags: ['startup'], preview: { headerColor: '#f97316', accentColor: '#f97316', layout: 'bold' } },
]

export const categories = ['All', 'General', 'Tech', 'Management', 'Creative', 'Professional']