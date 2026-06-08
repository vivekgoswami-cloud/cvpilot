import Link from 'next/link'

const templates = [
  { id: 'classic', name: 'Classic', category: 'General', color: 'bg-blue-600', desc: 'Clean and timeless. Works for any industry.' },
  { id: 'modern', name: 'Modern', category: 'Tech', color: 'bg-purple-600', desc: 'Sleek layout for software and tech roles.' },
  { id: 'minimal', name: 'Minimal', category: 'General', color: 'bg-gray-800', desc: 'Less is more. Let your experience speak.' },
  { id: 'executive', name: 'Executive', category: 'Management', color: 'bg-slate-700', desc: 'Bold and authoritative for senior roles.' },
  { id: 'creative', name: 'Creative', category: 'Design', color: 'bg-pink-600', desc: 'Stand out with a unique visual layout.' },
  { id: 'fresher', name: 'Fresher', category: 'Entry Level', color: 'bg-green-600', desc: 'Perfect for your very first job application.' },
  { id: 'finance', name: 'Finance', category: 'Finance', color: 'bg-emerald-700', desc: 'Conservative and professional for finance roles.' },
  { id: 'academic', name: 'Academic', category: 'Research', color: 'bg-amber-700', desc: 'Detailed layout for research and academia.' },
  { id: 'startup', name: 'Startup', category: 'Tech', color: 'bg-orange-600', desc: 'Dynamic and bold for startup environments.' },
  { id: 'corporate', name: 'Corporate', category: 'Management', color: 'bg-indigo-600', desc: 'Structured and formal for corporate roles.' },
  { id: 'healthcare', name: 'Healthcare', category: 'Medical', color: 'bg-teal-600', desc: 'Clean layout for medical professionals.' },
  { id: 'sales', name: 'Sales', category: 'Sales', color: 'bg-red-600', desc: 'Results-driven layout for sales professionals.' },
]

const categories = ['All', 'General', 'Tech', 'Management', 'Design', 'Entry Level', 'Finance', 'Research', 'Medical', 'Sales']

export const metadata = {
  title: 'Resume Templates — CVPilot',
  description: 'Choose from 50+ professional resume templates. ATS-friendly designs for every industry and career level.',
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="border-b border-gray-100 bg-gray-50 py-14 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Professional designs for every industry. Pick one and customize it in minutes.
        </p>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-40 border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors first:border-blue-600 first:bg-blue-600 first:text-white"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((t) => (
            <div
              key={t.id}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:border-blue-200 hover:shadow-md transition-all"
            >
              {/* Template preview mockup */}
              <div className="h-52 bg-gray-50 p-4 relative">
                <div className="h-full rounded-lg bg-white border border-gray-100 p-3 flex flex-col gap-2">
                  <div className={`h-6 ${t.color} rounded w-2/3`}></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                </div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors rounded-t-2xl flex items-center justify-center">
                  <Link
                    href={`/builder?template=${t.id}`}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg"
                  >
                    Use this template
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{t.category}</span>
                </div>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-14 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Can't decide? Start with Classic.</h2>
        <p className="text-gray-500 mb-6">You can always switch templates later without losing your data.</p>
        <Link
          href="/builder?template=classic"
          className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Start with Classic
        </Link>
      </section>

    </div>
  )
}