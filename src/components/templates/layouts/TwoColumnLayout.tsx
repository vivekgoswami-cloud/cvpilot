import { TemplateProps } from '../templateRegistry'

const fontSizes = { small: { name: 20, body: 10, label: 8 }, medium: { name: 24, body: 11, label: 9 }, large: { name: 28, body: 13, label: 10 } }

export default function TwoColumnLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', color: '#1a1a1a' }}>
      {/* Header */}
      <div style={{ padding: '28px 32px', borderBottom: `3px solid ${color}` }}>
        <h1 style={{ fontSize: fs.name, fontWeight: 700, margin: '0 0 6px' }}>{p.fullName || 'Your Name'}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: fs.label + 1, color: '#6b7280' }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.linkedin && <span>{p.linkedin}</span>}
        </div>
      </div>

      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 0, padding: '24px 32px 32px' }}>
        {/* Left - main */}
        <div style={{ paddingRight: 24, borderRight: `1px solid #f0f0f0` }}>
          {p.summary && (
            <TwoSection title="Summary" color={color} fontSize={fs}>
              <p style={{ color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{p.summary}</p>
            </TwoSection>
          )}
          {experience.length > 0 && (
            <TwoSection title="Experience" color={color} fontSize={fs}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: 14 }}>
                  <p style={{ fontWeight: 700, margin: 0, color: '#111' }}>{exp.jobTitle}</p>
                  <p style={{ color, fontSize: fs.label + 1, margin: '2px 0', fontWeight: 500 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  <p style={{ fontSize: fs.label, color: '#9ca3af', margin: '0 0 4px' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</p>
                  {exp.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{exp.description}</p>}
                </div>
              ))}
            </TwoSection>
          )}
          {projects.length > 0 && (
            <TwoSection title="Projects" color={color} fontSize={fs}>
              {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: 10 }}>
                  <p style={{ fontWeight: 600, margin: 0 }}>{proj.name}</p>
                  {proj.technologies && <p style={{ color, fontSize: fs.label, margin: '2px 0' }}>{proj.technologies}</p>}
                  {proj.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: '4px 0 0' }}>{proj.description}</p>}
                </div>
              ))}
            </TwoSection>
          )}
        </div>

        {/* Right - secondary */}
        <div style={{ paddingLeft: 24 }}>
          {education.length > 0 && (
            <TwoSection title="Education" color={color} fontSize={fs}>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 12 }}>
                  <p style={{ fontWeight: 600, margin: 0 }}>{edu.degree}</p>
                  <p style={{ color, fontSize: fs.label + 1, margin: '2px 0', fontWeight: 500 }}>{edu.school}</p>
                  <p style={{ color: '#9ca3af', fontSize: fs.label, margin: '2px 0 0' }}>{edu.startDate} — {edu.endDate}</p>
                  {edu.grade && <p style={{ color: '#6b7280', fontSize: fs.label, margin: '2px 0 0' }}>Grade: {edu.grade}</p>}
                </div>
              ))}
            </TwoSection>
          )}
          {skills.length > 0 && (
            <TwoSection title="Skills" color={color} fontSize={fs}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontSize: fs.label + 1 }}>{skill.name}</span>
                      <span style={{ fontSize: fs.label, color: '#9ca3af' }}>{skill.level}</span>
                    </div>
                    <div style={{ height: 3, background: '#f0f0f0', borderRadius: 2 }}>
                      <div style={{ height: 3, borderRadius: 2, background: color, width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : skill.level === 'Intermediate' ? '50%' : '25%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </TwoSection>
          )}
          {certifications.length > 0 && (
            <TwoSection title="Certifications" color={color} fontSize={fs}>
              {certifications.map((cert) => (
                <div key={cert.id} style={{ marginBottom: 8 }}>
                  <p style={{ fontWeight: 600, margin: 0, fontSize: fs.label + 1 }}>{cert.name}</p>
                  <p style={{ color: '#6b7280', fontSize: fs.label, margin: '2px 0 0' }}>{cert.issuer} · {cert.date}</p>
                </div>
              ))}
            </TwoSection>
          )}
        </div>
      </div>
    </div>
  )
}

function TwoSection({ title, color, fontSize, children }: { title: string; color: string; fontSize: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 14, background: color, borderRadius: 2 }} />
        <h2 style={{ fontSize: fontSize.label + 2, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  )
}