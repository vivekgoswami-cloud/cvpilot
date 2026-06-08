import BuilderClient from './BuilderClient'

export const metadata = {
  title: 'Resume Builder — CVPilot',
  description: 'Build your resume with live preview. Customize fonts, colors, layout and download as PDF.',
}

export default function BuilderPage() {
  return <BuilderClient />
}