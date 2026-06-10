import Link from 'next/link'

export const metadata = {
  title: 'CVPilot — Free Resume Builder',
  description: 'Build a professional, ATS-friendly resume in minutes. 50+ templates, live preview, free PDF export.',
}

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-8"
          style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          ATS-optimized · 50+ templates · Free to start
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-none" style={{ color: 'var(--text-primary)' }}>
          Your first resume,<br />
          <span style={{ color: 'var(--accent)' }} className="italic">done right.</span>
        </h1>

        <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Built for freshers and career changers. Pick a template, fill your details, download a job-ready PDF in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
          <Link
            href="/builder"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--accent)', boxShadow: '0 4px 14px rgba(37,99,235,0.4)' }}
          >
            Build my resume — free →
          </Link>
          <Link
            href="/templates"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            Browse templates
          </Link>
        </div>

        {/* Browser mockup */}
        <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', background: 'var(--bg-secondary)' }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-tertiary)' }}>
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <div className="flex-1 mx-4 rounded-lg px-3 py-1 text-xs text-center" style={{ background: 'var(--bg-primary)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
              cvpilot.vercel.app/builder
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-6" style={{ borderRight: '1px solid var(--border)' }}>
              <p className="text-xs font-semibold mb-4 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Editor</p>
              <div className="space-y-3">
                <div className="h-3 rounded-full w-3/4" style={{ background: 'var(--border-strong)' }}></div>
                <div className="h-3 rounded-full w-1/2" style={{ background: 'var(--border)' }}></div>
                <div className="h-px" style={{ background: 'var(--border)' }}></div>
                <div className="h-3 rounded-full w-3/4" style={{ background: 'var(--border)' }}></div>
                <div className="h-3 rounded-full w-2/3" style={{ background: 'var(--border)' }}></div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold mb-4 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Live Preview</p>
              <div className="space-y-2">
                <div className="h-5 rounded w-1/2" style={{ background: 'var(--accent)' }}></div>
                <div className="h-2.5 rounded-full w-1/3" style={{ background: 'var(--border-strong)' }}></div>
                <div className="h-px" style={{ background: 'var(--border)' }}></div>
                <div className="h-2.5 rounded-full w-3/4" style={{ background: 'var(--border)' }}></div>
                <div className="h-2.5 rounded-full w-2/3" style={{ background: 'var(--border)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Resume templates' },
              { value: 'ATS', label: 'Friendly output' },
              { value: 'Free', label: 'To get started' },
              { value: 'PDF', label: 'Instant export' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Everything a fresher needs</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>No design skills. No experience with resumes. Just your details.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🎨', title: '50+ Templates', desc: 'Designed for every role — tech, finance, creative, operations.' },
            { icon: '👁️', title: 'Live Preview', desc: 'See every change instantly as you type. No guessing.' },
            { icon: '🤖', title: 'ATS Friendly', desc: 'Passes automated hiring filters used by top companies.' },
            { icon: '📄', title: 'PDF Export', desc: 'Clean, printer-ready PDF. No watermark on free tier.' },
            { icon: '✏️', title: 'Full Customization', desc: 'Change fonts, colors, layout, spacing — full control.' },
            { icon: '💼', title: 'Career Guide', desc: "Interview tips, do's and don'ts, salary negotiation." },
            { icon: '☁️', title: 'Auto Save', desc: 'Your resume saves automatically. Never lose progress.' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Edit from any device — phone, tablet, or desktop.' },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 transition-all hover:scale-[1.02]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>How it works</h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Three steps to a job-ready resume.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick a template', desc: 'Choose from 50+ professionally designed templates for every industry.' },
              { step: '02', title: 'Fill your details', desc: 'Add your experience, education, skills. Live preview updates instantly.' },
              { step: '03', title: 'Download PDF', desc: 'Export a clean, ATS-friendly PDF ready to send to employers.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-lg font-bold text-white" style={{ background: 'var(--accent)' }}>
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="rounded-3xl p-12" style={{ background: 'var(--accent)' }}>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to build your resume?</h2>
          <p className="text-blue-100 text-lg mb-8">Free. No signup required to start.</p>
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all hover:scale-[1.02]"
            style={{ background: 'white', color: 'var(--accent)' }}
          >
            Start building now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>CV<span style={{ color: 'var(--accent)' }}>Pilot</span></span>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>© 2026 CVPilot. Built for job seekers.</p>
          <div className="flex gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Link href="/templates" className="hover:text-blue-500 transition-colors">Templates</Link>
            <Link href="/career-guide" className="hover:text-blue-500 transition-colors">Career Guide</Link>
            <Link href="/builder" className="hover:text-blue-500 transition-colors">Builder</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}