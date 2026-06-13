'use client'

import { useResumeStore } from '@/store/resumeStore'
import { Certification } from '@/types/resume'

function generateId() { return Math.random().toString(36).slice(2, 9) }

export default function CertificationsForm() {
  const { data, updateCertifications } = useResumeStore()

  const add = () => {
    const newCert: Certification = { id: generateId(), name: '', issuer: '', date: '' }
    updateCertifications([...data.certifications, newCert])
  }

  const update = (id: string, field: string, value: string) => {
    updateCertifications(data.certifications.map((c) => c.id === id ? { ...c, [field]: value } : c))
  }

  const remove = (id: string) => {
    updateCertifications(data.certifications.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Certifications</h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Add courses, certifications, and awards.</p>
      </div>

      <div className="space-y-3">
        {data.certifications.map((cert) => (
          <div key={cert.id} className="rounded-xl p-3 space-y-2" style={{ border: '1px solid var(--border)' }}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Certification Name</label>
                <input
                  type="text"
                  placeholder="AWS Certified Developer"
                  value={cert.name}
                  onChange={(e) => update(cert.id, 'name', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Issuing Organization</label>
                <input
                  type="text"
                  placeholder="Amazon Web Services"
                  value={cert.issuer}
                  onChange={(e) => update(cert.id, 'issuer', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Date</label>
                <input
                  type="text"
                  placeholder="2024"
                  value={cert.date}
                  onChange={(e) => update(cert.id, 'date', e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                />
              </div>
              <button onClick={() => remove(cert.id)} className="text-gray-300 hover:text-red-500 text-lg font-bold mt-5 transition-colors">×</button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={add}
        className="w-full rounded-xl py-3 text-sm font-medium transition-colors"
        style={{ border: '2px dashed var(--border)', color: 'var(--text-muted)' }}
      >
        + Add Certification
      </button>
    </div>
  )
}