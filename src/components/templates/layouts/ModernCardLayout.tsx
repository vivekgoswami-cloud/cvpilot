import { TemplateProps } from '../templateRegistry'

const fontSizes = {
  small: { name: 20, body: 10, label: 8 },
  medium: { name: 24, body: 11, label: 9 },
  large: { name: 28, body: 13, label: 10 }
}

export default function ModernCardLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: '#f8f9fa', color: '#1a1a1a' }}>
      {/* Gradient header */}
      <div style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`, padding: '36px 36px 28px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: fs.name + 2, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>{p.fullName || 'Your Name'}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, fontSize: fs.label + 1, opacity: 0.9 }}>
              {p.email && <span>✉ {p.email}</span>}
              {p.phone && <span>📞 {p.phone}</span>}
              {p.location && <span>📍 {p.location}</span>}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            {p.linkedin && <p style={{ fontSize: fs.label + 1, margin: '0 0 2px', opacity: 0.85 }}>{p.linkedin}</p>}
            {p.website && <p style={{ fontSize: fs.label + 1, margin: 0, opacity: 0.85 }}>{p.website}</p>}
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 24px' }}>
        {p.summary && (
          <div style={{ background: 'white', borderRadius: 8, padding: '16px 20px', marginBottom: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', borderLeft: `4px solid ${color}` }}>
            <p style={{ color: '#374151', lineHeight: 1.8, margin: 0 }}>{p.summary}</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr', gap: 16 }}>
          <div>
            {experience.length > 0 && (
              <MCSection title="Experience" color={color} fs={fs}>
                {experience.map((exp) => (
                  <div key={exp.id} style={{ background: 'white', borderRadius: 8, padding: '12px 14px', marginBottom: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <p style={{ fontWeight: 700, margin: 0, color: '#111' }}>{exp.jobTitle}</p>
                        <p style={{ color, fontSize: fs.label + 1, margin: '2px 0', fontWeight: 500 }}>{exp.company}</p>
                      </div>
                      <span style={{ fontSize: fs.label, color: '#9ca3af', background: '#f3f4f6', padding: '2px 7px', borderRadius: 10, whiteSpace: 'nowrap' }}>
                        {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    {exp.description && <p style={{ color: '#4b5563', marginTop: 6, lineHeight: 1.6, fontSize: fs.body - 1 }}>{exp.description}</p>}
                  </div>
                ))}
              </MCSection>
            )}

            {projects.length > 0 && (
              <MCSection title="Projects" color={color} fs={fs}>
                {projects.map((proj) => (
                  <div key={proj.id} style={{ background: 'white', borderRadius: 8, padding: '10px 14px', marginBottom: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <p style={{ fontWeight: 700, margin: 0 }}>{proj.name}</p>
                    {proj.technologies && <p style={{ color, fontSize: fs.label, margin: '3px 0', fontWeight: 500 }}>{proj.technologies}</p>}
                    {proj.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: '4px 0 0', fontSize: fs.body - 1 }}>{proj.description}</p>}
                  </div>
                ))}
              </MCSection>
            )}
          </div>

          <div>
            {education.length > 0 && (
              <MCSection title="Education" color={color} fs={fs}>
                {education.map((edu) => (
                  <div key={edu.id} style={{ background: 'white', borderRadius: 8, padding: '10px 12px', marginBottom: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <p style={{ fontWeight: 700, margin: 0, fontSize: fs.label + 1 }}>{edu.degree}</p>
                    <p style={{ color, fontSize: fs.label, margin: '2px 0', fontWeight: 500 }}>{edu.school}</p>
                    <p style={{ color: '#9ca3af', fontSize: fs.label - 1, margin: '2px 0 0' }}>{edu.startDate} — {edu.endDate}</p>
                    {edu.grade && <p style={{ color: '#6b7280', fontSize: fs.label - 1, margin: '2px 0 0' }}>{edu.grade}</p>}
                  </div>
                ))}
              </MCSection>
            )}

            {skills.length > 0 && (
              <MCSection title="Skills" color={color} fs={fs}>
                <div style={{ background: 'white', borderRadius: 8, padding: '10px 12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {skills.map((skill) => (
                      <span key={skill.id} style={{ background: `${color}12`, color, border: `1px solid ${color}25`, borderRadius: 4, padding: '2px 8px', fontSize: fs.label, fontWeight: 500 }}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </MCSection>
            )}

            {certifications.length > 0 && (
              <MCSection title="Certifications" color={color} fs={fs}>
                {certifications.map((cert) => (
                  <div key={cert.id} style={{ background: 'white', borderRadius: 8, padding: '8px 12px', marginBottom: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <p style={{ fontWeight: 600, margin: 0, fontSize: fs.label + 1 }}>{cert.name}</p>
                    <p style={{ color: '#6b7280', fontSize: fs.label - 1, margin: '2px 0 0' }}>{cert.issuer} · {cert.date}</p>
                  </div>
                ))}
              </MCSection>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MCSection({ title, color, fs, children }: { title: string; color: string; fs: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <div style={{ width: 3, height: 14, background: color, borderRadius: 2 }} />
        <h2 style={{ fontSize: fs.label + 2, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  )
}