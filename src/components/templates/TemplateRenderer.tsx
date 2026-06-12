import { useResumeStore } from '@/store/resumeStore'
import { templateRegistry } from './templateRegistry'
import SingleLayout from './layouts/SingleLayout'
import SidebarLayout from './layouts/SidebarLayout'
import MinimalLayout from './layouts/MinimalLayout'
import TwoColumnLayout from './layouts/TwoColumnLayout'
import BoldLayout from './layouts/BoldLayout'
import ExecutiveLayout from './layouts/ExecutiveLayout'
import TechLayout from './layouts/TechLayout'
import CreativeLayout from './layouts/CreativeLayout'
import AcademicLayout from './layouts/AcademicLayout'
import ModernCardLayout from './layouts/ModernCardLayout'

const themeColorMap: Record<string, string> = {
  blue: '#2563eb', purple: '#9333ea', green: '#16a34a',
  red: '#dc2626', gray: '#4b5563', orange: '#ea580c',
  teal: '#0d9488', rose: '#e11d48',
}

export default function TemplateRenderer() {
  const { data, settings } = useResumeStore()
  const templateConfig = templateRegistry.find(t => t.id === settings.templateId)
  const color = settings.colorTheme === 'template'
    ? (templateConfig?.preview.headerColor || '#2563eb')
    : (themeColorMap[settings.colorTheme] || templateConfig?.preview.headerColor || '#2563eb')
  const layout = templateConfig?.preview.layout || 'single'
  const props = { data, settings, color }

  switch (layout) {
    case 'sidebar': return <SidebarLayout {...props} />
    case 'two-column': return <TwoColumnLayout {...props} />
    case 'minimal': return <MinimalLayout {...props} />
    case 'bold': return <BoldLayout {...props} />
    case 'executive': return <ExecutiveLayout {...props} />
    case 'tech': return <TechLayout {...props} />
    case 'creative': return <CreativeLayout {...props} />
    case 'academic': return <AcademicLayout {...props} />
    case 'modern-card': return <ModernCardLayout {...props} />
    default: return <SingleLayout {...props} />
  }
}