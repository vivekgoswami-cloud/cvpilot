import { useResumeStore } from '@/store/resumeStore'
import { templateRegistry } from './templateRegistry'
import SingleLayout from './layouts/SingleLayout'
import SidebarLayout from './layouts/SidebarLayout'
import MinimalLayout from './layouts/MinimalLayout'
import TwoColumnLayout from './layouts/TwoColumnLayout'
import BoldLayout from './layouts/BoldLayout'

const themeColorMap: Record<string, string> = {
  blue: '#2563eb',
  purple: '#9333ea',
  green: '#16a34a',
  red: '#dc2626',
  gray: '#4b5563',
  orange: '#ea580c',
  teal: '#0d9488',
  rose: '#e11d48',
}

export default function TemplateRenderer() {
  const { data, settings } = useResumeStore()

  const templateConfig = templateRegistry.find(t => t.id === settings.templateId)

  // If user picked a specific color use it, otherwise use template's own color
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
    default: return <SingleLayout {...props} />
  }
}