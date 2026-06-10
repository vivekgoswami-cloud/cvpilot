import { TemplateProps } from '../templateRegistry'

const fontSizes = { small: { name: 20, body: 10, label: 8 }, medium: { name: 24, body: 11, label: 9 }, large: { name: 28, body: 13, label: 10 } }

export default function MinimalLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', padding: '48px 48px', color: '#1a1a1a' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: fs.name, fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.5px' }}>{p.fullName || 'Your Name'}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: fs.label + 1, color: '#6b7280' }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.linkedin && <span>{p.linkedin}</span>}
        </div>
        <div style={{ height: 2, background: color, width: 40, marginTop: 16 }} />
      </div>

      {p.summary && (
        <MinSection title="Profile" color={color} fontSize={fs}>
          <p style={{ color: '#4b5563', lineHeight: 1.8 }}>{p.summary}</p>
        </MinSection>
      )}

      {experience.length > 0 && (
        <MinSection title="Experience" color={color} fontSize={fs}>
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 16, paddingLeft: 12, borderLeft: `2px solid ${color}20` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontWeight: 600, margin: 0 }}>{exp.jobTitle} <span style={{ fontWeight: 400, color: '#6b7280' }}>@ {exp.company}</span></p>
                <p style={{ fontSize: fs.label, color: '#9ca3af', margin: 0 }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</p>
              </div>
              {exp.description && <p style={{ color: '#4b5563', marginTop: 4, lineHeight: 1.6 }}>{exp.description}</p>}
            </div>
          ))}
        </MinSection>
      )}

      {education.length > 0 && (
        <MinSection title="Education" color={color} fontSize={fs}>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: 10, paddingLeft: 12, borderLeft: `2px solid ${color}20` }}>
              <p style={{ fontWeight: 600, margin: 0 }}>{edu.degree} <span style={{ fontWeight: 400, color: '#6b7280' }}>· {edu.school}</span></p>
              <p style={{ fontSize: fs.label, color: '#9ca3af', margin: '2px 0 0' }}>{edu.startDate} — {edu.endDate}{edu.grade ? ` · ${edu.grade}` : ''}</p>
            </div>
          ))}
        </MinSection>
      )}

      {skills.length > 0 && (
        <MinSection title="Skills" color={color} fontSize={fs}>
          <p style={{ color: '#4b5563' }}>{skills.map(s => s.name).join(' · ')}</p>
        </MinSection>
      )}

      {projects.length > 0 && (
        <MinSection title="Projects" color={color} fontSize={fs}>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: 10, paddingLeft: 12, borderLeft: `2px solid ${color}20` }}>
              <p style={{ fontWeight: 600, margin: 0 }}>{proj.name}{proj.technologies ? <span style={{ fontWeight: 400, color: '#6b7280' }}> · {proj.technologies}</span> : ''}</p>
              {proj.description && <p style={{ color: '#4b5563', margin: '4px 0 0', lineHeight: 1.6 }}>{proj.description}</p>}
            </div>
          ))}
        </MinSection>
      )}
    </div>
  )
}

function MinSection({ title, color, fontSize, children }: { title: string; color: string; fontSize: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: fontSize.label + 1, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 12px' }}>{title}</h2>
      {children}
    </div>
  )
}