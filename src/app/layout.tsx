import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CVPilot — Free Resume Builder',
  description: 'Build a professional, ATS-friendly resume in minutes. 50+ templates, live preview, free PDF export.',
  keywords: 'resume builder, cv maker, free resume, ATS resume, resume templates India',
  openGraph: {
    title: 'CVPilot — Free Resume Builder',
    description: 'Build a professional resume in minutes. Free, ATS-friendly, 50+ templates.',
    url: 'https://cvpilot.vercel.app',
    siteName: 'CVPilot',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}