'use client'

import TemplateRenderer from '@/components/templates/TemplateRenderer'

export default function ResumePreview() {
  return (
    <div style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.15)', borderRadius: 4 }}>
      <TemplateRenderer />
    </div>
  )
}