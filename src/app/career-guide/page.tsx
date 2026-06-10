import Link from 'next/link'

export const metadata = {
  title: 'Career Guide — CVPilot',
  description: 'Interview tips, ATS resume guide, do\'s and don\'ts for job seekers. Prepare for your next job interview.',
}

const guides = [
  {
    category: 'Resume Tips',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-600',
    icon: '📄',
    articles: [
      { title: 'How to write a resume with no experience', desc: 'Fresher guide to building a strong resume from scratch.' },
      { title: 'What is ATS and why it matters', desc: 'How applicant tracking systems filter resumes before a human sees them.' },
      { title: '10 resume mistakes to avoid', desc: 'Common errors that get resumes rejected instantly.' },
      { title: 'How to write a professional summary', desc: 'Craft a summary that makes recruiters read further.' },
    ],
  },
  {
    category: 'Interview Prep',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-600',
    icon: '🎯',
    articles: [
      { title: 'Top 20 interview questions and answers', desc: 'Prepare answers for the most common interview questions.' },
      { title: 'What to do before an interview', desc: 'Research, preparation and mindset tips for interview day.' },
      { title: 'What NOT to do in an interview', desc: 'Mistakes that cost candidates the job offer.' },
      { title: 'How to answer "Tell me about yourself"', desc: 'Structure a compelling intro that sets the right tone.' },
    ],
  },
  {
    category: 'Job Search',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-600',
    icon: '🔍',
    articles: [
      { title: 'How to find jobs on LinkedIn', desc: 'Step-by-step guide to using LinkedIn for job hunting.' },
      { title: 'How to write a cold email to a recruiter', desc: 'Message templates that actually get replies.' },
      { title: 'How to negotiate your salary', desc: 'When and how to ask for more without losing the offer.' },
      { title: 'Fresher vs experienced: what recruiters look for', desc: 'What matters at each stage of your career.' },
    ],
  },
  {
    category: 'ATS Guide',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-600',
    icon: '🤖',
    articles: [
      { title: 'How to make your resume ATS friendly', desc: 'Formatting rules that pass automated screening systems.' },
      { title: 'Keywords that get your resume noticed', desc: 'How to use job description keywords the right way.' },
      { title: 'Best resume format for ATS in 2026', desc: 'Which formats pass ATS and which ones get rejected.' },
      { title: 'Should you use a two-column resume?', desc: 'The truth about multi-column resumes and ATS compatibility.' },
    ],
  },
]

const quickTips = [
  { emoji: '✅', tip: 'Use a single-column layout for ATS compatibility' },
  { emoji: '✅', tip: 'Keep resume to 1 page if under 5 years experience' },
  { emoji: '✅', tip: 'Use bullet points for experience descriptions' },
  { emoji: '✅', tip: 'Include keywords from the job description' },
  { emoji: '✅', tip: 'Save as PDF before sending' },
  { emoji: '❌', tip: 'Don\'t use tables, graphics or text boxes' },
  { emoji: '❌', tip: 'Don\'t use the same resume for every job' },
  { emoji: '❌', tip: 'Don\'t include a photo (unless asked)' },
  { emoji: '❌', tip: 'Don\'t lie about skills or experience' },
  { emoji: '❌', tip: 'Don\'t use unprofessional email addresses' },
]

export default function CareerGuidePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="border-b border-gray-100 bg-gray-50 py-14 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Guide</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Everything you need to get hired. Resume tips, interview prep, job search strategies.
        </p>
      </section>

      {/* Quick tips */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Resume do's and don'ts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickTips.map((t, i) => (
              <div key={i} className={`flex items-start gap-3 rounded-xl p-4 ${
                t.emoji === '✅' ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
              }`}>
                <span className="text-lg shrink-0">{t.emoji}</span>
                <p className="text-sm text-gray-700">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Guides and articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map((g) => (
            <div key={g.category} className={`rounded-2xl border p-6 ${g.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-lg ${g.iconBg} flex items-center justify-center text-lg`}>
                  {g.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{g.category}</h3>
              </div>
              <div className="space-y-3">
                {g.articles.map((a) => (
                  <div key={a.title} className="bg-white rounded-xl p-4 border border-white hover:border-gray-200 transition-colors cursor-pointer">
                    <p className="font-medium text-gray-900 text-sm mb-1">{a.title}</p>
                    <p className="text-xs text-gray-500">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interview checklist */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview day checklist</h2>
          <p className="text-gray-500 mb-8">Run through this before every interview.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Night before',
                items: ['Research the company thoroughly', 'Prepare 3 questions to ask', 'Iron your clothes', 'Print resume copies', 'Plan your route'],
              },
              {
                title: 'Morning of',
                items: ['Eat a proper meal', 'Arrive 10 mins early', 'Switch phone to silent', 'Bring a pen and notepad', 'Breathe and stay calm'],
              },
              {
                title: 'During interview',
                items: ['Firm handshake and eye contact', 'Listen fully before answering', 'Use STAR method for answers', 'Ask your prepared questions', 'Thank them at the end'],
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-0.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to apply? Build your resume first.</h2>
        <p className="text-gray-500 mb-6">ATS-friendly, professional, free.</p>
        <Link
          href="/builder"
          className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Build my resume
        </Link>
      </section>

    </div>
  )
}