import type { Metadata } from 'next'
import TemplatesClient from './TemplatesClient'

export const metadata: Metadata = {
  title: 'Resume Templates — CVPilot',
  description: 'Choose from 50+ professional resume templates. ATS-friendly designs for every industry.',
}

export default function TemplatesPage() {
  return <TemplatesClient />
}