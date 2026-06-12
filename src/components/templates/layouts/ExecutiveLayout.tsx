import { TemplateProps } from '../templateRegistry'

const fontSizes = {
  small: { name: 22, body: 10, label: 8 },
  medium: { name: 26, body: 11, label: 9 },
  large: { name: 30, body: 13, label: 10 }
}

export default function ExecutiveLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: '#fafaf9', color: '#1a1a1a' }}>
      <div style={{ background: '#0f0f0f', padding: '40px 40px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, width: '35%', height: '100%', background: color, opacity: 0.2 }} />
        <div style={{ position: 'relative' }}>
          <p style={{ color, fontSize: fs.label + 1, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 8px' }}>Curriculum Vitae</p>
          <h1 style={{ fontSize: fs.name + 4, fontWeight: 800, color: 'white', margin: '0 0 12px', letterSpacing: '-0.5px' }}>{p.fullName || 'Your Name'}</h1>
          <div style={{ height: 2, width: 60, background: color, margin: '0 0 16px' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: fs.label + 1 }}>
            {p.email && <span style={{ color: '#a3a3a3' }}>{p.email}</span>}
            {p.phone && <span style={{ color: '#a3a3a3' }}>{p.phone}</span>}
            {p.location && <span style={{ color: '#a3a3a3' }}>{p.location}</span>}
            {p.linkedin && <span style={{ color }}>{p.linkedin}</span>}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.38fr' }}>
        <div style={{ padding: '28px 28px 32px', borderRight: '1px solid #e5e5e5' }}>
          {p.summary && (
            <ESection title="Executive Summary" color={color} fs={fs}>
              <p style={{ color: '#374151', lineHeight: 1.8, fontStyle: 'italic', borderLeft: `3px solid ${color}`, paddingLeft: 12, margin: 0 }}>{p.summary}</p>
            </ESection>
          )}
          {experience.length > 0 && (
            <ESection title="Professional Experience" color={color} fs={fs}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #f5f5f5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: fs.body + 1, margin: 0 }}>{exp.jobTitle}</p>
                      <p style={{ color, fontWeight: 600, margin: '2px 0 0', fontSize: fs.label + 1 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                    </div>
                    <span style={{ background: color, color: 'white', fontSize: fs.label - 1, padding: '2px 8px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.description && <p style={{ color: '#4b5563', lineHeight: 1.7, margin: '6px 0 0' }}>{exp.description}</p>}
                </div>
              ))}
            </ESection>
          )}
          {projects.length > 0 && (
            <ESection title="Key Projects" color={color} fs={fs}>
              {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: 10 }}>
                  <p style={{ fontWeight: 700, margin: 0 }}>{proj.name}</p>
                  {proj.technologies && <p style={{ color, fontSize: fs.label + 1, margin: '2px 0', fontWeight: 500 }}>{proj.technologies}</p>}
                  {proj.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: '4px 0 0' }}>{proj.description}</p>}
                </div>
              ))}
            </ESection>
          )}
        </div>

        <div style={{ padding: '28px 20px', background: '#f9f9f8' }}>
          {education.length > 0 && (
            <ESection title="Education" color={color} fs={fs}>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 12 }}>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: fs.label + 1 }}>{edu.degree}</p>
                  <p style={{ color, margin: '2px 0', fontSize: fs.label, fontWeight: 600 }}>{edu.school}</p>
                  <p style={{ color: '#9ca3af', fontSize: fs.label - 1, margin: 0 }}>{edu.startDate} — {edu.endDate}</p>
                  {edu.grade && <p style={{ color: '#6b7280', fontSize: fs.label - 1, margin: '2px 0 0' }}>{edu.grade}</p>}
                </div>
              ))}
            </ESection>
          )}
          {skills.length > 0 && (
            <ESection title="Core Skills" color={color} fs={fs}>
              {skills.map((skill) => (
                <div key={skill.id} style={{ marginBottom: 7 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <span style={{ fontSize: fs.label + 1, fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ fontSize: fs.label - 1, color: '#9ca3af' }}>{skill.level}</span>
                  </div>
                  <div style={{ height: 3, background: '#e5e5e5', borderRadius: 2 }}>
                    <div style={{ height: 3, borderRadius: 2, background: color, width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : skill.level === 'Intermediate' ? '50%' : '25%' }} />
                  </div>
                </div>
              ))}
            </ESection>
          )}
          {certifications.length > 0 && (
            <ESection title="Certifications" color={color} fs={fs}>
              {certifications.map((cert) => (
                <div key={cert.id} style={{ marginBottom: 8, padding: '6px 8px', background: 'white', borderRadius: 4, border: `1px solid ${color}20` }}>
                  <p style={{ fontWeight: 600, margin: 0, fontSize: fs.label + 1 }}>{cert.name}</p>
                  <p style={{ color: '#6b7280', fontSize: fs.label - 1, margin: '2px 0 0' }}>{cert.issuer} · {cert.date}</p>
                </div>
              ))}
            </ESection>
          )}
        </div>
      </div>
    </div>
  )
}

function ESection({ title, color, fs, children }: { title: string; color: string; fs: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ width: 20, height: 2, background: color }} />
        <h2 style={{ fontSize: fs.label + 2, fontWeight: 800, color: '#111', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  )
}