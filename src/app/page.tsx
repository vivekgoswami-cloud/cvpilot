import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          ATS-optimized · 50+ templates · Free to start
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Your first resume,{' '}
          <span className="text-blue-600 italic">done right.</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Built for freshers and career changers. Pick a template, fill your details,
          download a job-ready PDF in minutes. No design skills needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/builder"
            className="rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Build my resume — it's free
          </Link>
          <Link
            href="/templates"
            className="rounded-xl border border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Browse templates
          </Link>
        </div>

        {/* Fake browser preview */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
          <div className="grid grid-cols-2 gap-4 bg-white rounded-xl p-6 border border-gray-100">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Editor</div>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              <div className="h-4 bg-blue-100 rounded w-2/3"></div>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/3"></div>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Live Preview</div>
              <div className="h-4 bg-gray-900 rounded w-1/2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="h-3 bg-blue-600 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Resume templates' },
              { value: 'ATS', label: 'Friendly output' },
              { value: 'Free', label: 'To get started' },
              { value: 'PDF', label: 'Instant export' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything a fresher needs</h2>
          <p className="text-gray-500 text-lg">No design skills. No experience with resumes. Just your details.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🎨',
              title: '50+ Templates',
              desc: 'Designed for every role — tech, finance, creative, operations.',
            },
            {
              icon: '👁️',
              title: 'Live Preview',
              desc: 'See every change instantly as you type. No guessing.',
            },
            {
              icon: '🤖',
              title: 'ATS Friendly',
              desc: 'Passes automated hiring filters used by top companies.',
            },
            {
              icon: '📄',
              title: 'PDF Export',
              desc: 'Clean, printer-ready PDF. No watermark on free tier.',
            },
            {
              icon: '✏️',
              title: 'Full Customization',
              desc: 'Change fonts, colors, layout, spacing — full control.',
            },
            {
              icon: '💼',
              title: 'Career Guide',
              desc: 'Interview tips, do\'s and don\'ts, salary negotiation.',
            },
            {
              icon: '☁️',
              title: 'Auto Save',
              desc: 'Your resume saves automatically. Never lose progress.',
            },
            {
              icon: '📱',
              title: 'Mobile Friendly',
              desc: 'Edit from any device — phone, tablet, or desktop.',
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-100 bg-white p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-500 text-lg">Three steps to a job-ready resume.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Pick a template', desc: 'Choose from 50+ professionally designed resume templates.' },
              { step: '02', title: 'Fill your details', desc: 'Add your experience, education, skills. Live preview updates instantly.' },
              { step: '03', title: 'Download PDF', desc: 'Export a clean, ATS-friendly PDF ready to send to employers.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to build your resume?</h2>
        <p className="text-gray-500 text-lg mb-8">Free. No signup required to start.</p>
        <Link
          href="/builder"
          className="inline-block rounded-xl bg-blue-600 px-10 py-4 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Start building now
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold text-gray-900">CV<span className="text-blue-600">Pilot</span></span>
          <p className="text-sm text-gray-400">© 2026 CVPilot. Built for job seekers.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/templates" className="hover:text-gray-600">Templates</Link>
            <Link href="/career-guide" className="hover:text-gray-600">Career Guide</Link>
            <Link href="/builder" className="hover:text-gray-600">Builder</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}