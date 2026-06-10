import { TemplateProps } from '../templateRegistry'

const fontSizes = { small: { name: 22, body: 10, label: 8 }, medium: { name: 26, body: 11, label: 9 }, large: { name: 30, body: 13, label: 10 } }

export default function SingleLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', color: '#1a1a1a' }}>
      {/* Header */}
      <div style={{ background: color, padding: '32px 36px', color: 'white' }}>
        <h1 style={{ fontSize: fs.name, fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>{p.fullName || 'Your Name'}</h1>
        <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: fs.label, opacity: 0.9 }}>
          {p.email && <span>✉ {p.email}</span>}
          {p.phone && <span>📞 {p.phone}</span>}
          {p.location && <span>📍 {p.location}</span>}
          {p.linkedin && <span>🔗 {p.linkedin}</span>}
          {p.website && <span>🌐 {p.website}</span>}
        </div>
      </div>

      <div style={{ padding: '24px 36px' }}>
        {p.summary && (
          <Section title="Summary" color={color} fontSize={fs}>
            <p style={{ color: '#374151', lineHeight: 1.7, margin: 0 }}>{p.summary}</p>
          </Section>
        )}

        {experience.length > 0 && (
          <Section title="Experience" color={color} fontSize={fs}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0, fontSize: fs.body + 1 }}>{exp.jobTitle}</p>
                    <p style={{ color: '#6b7280', margin: '2px 0 0', fontSize: fs.label + 1 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  </div>
                  <p style={{ fontSize: fs.label, color: '#9ca3af', whiteSpace: 'nowrap', margin: 0 }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </p>
                </div>
                {exp.description && <p style={{ color: '#4b5563', marginTop: 6, lineHeight: 1.6 }}>{exp.description}</p>}
              </div>
            ))}
          </Section>
        )}

        {education.length > 0 && (
          <Section title="Education" color={color} fontSize={fs}>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0 }}>{edu.degree}</p>
                    <p style={{ color: '#6b7280', margin: '2px 0 0', fontSize: fs.label + 1 }}>{edu.school}{edu.location ? ` · ${edu.location}` : ''}</p>
                    {edu.grade && <p style={{ color: '#9ca3af', margin: '2px 0 0', fontSize: fs.label }}>Grade: {edu.grade}</p>}
                  </div>
                  <p style={{ fontSize: fs.label, color: '#9ca3af', whiteSpace: 'nowrap', margin: 0 }}>{edu.startDate} — {edu.endDate}</p>
                </div>
              </div>
            ))}
          </Section>
        )}

        {skills.length > 0 && (
          <Section title="Skills" color={color} fontSize={fs}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skills.map((skill) => (
                <span key={skill.id} style={{ background: `${color}15`, color, border: `1px solid ${color}30`, borderRadius: 4, padding: '3px 10px', fontSize: fs.label + 1, fontWeight: 500 }}>
                  {skill.name}{skill.level !== 'Intermediate' ? ` · ${skill.level}` : ''}
                </span>
              ))}
            </div>
          </Section>
        )}

        {projects.length > 0 && (
          <Section title="Projects" color={color} fontSize={fs}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ fontWeight: 600, margin: 0 }}>{proj.name}</p>
                  {proj.link && <a href={proj.link} style={{ color, fontSize: fs.label }}>{proj.link}</a>}
                </div>
                {proj.technologies && <p style={{ color: '#6b7280', fontSize: fs.label, margin: '2px 0' }}>{proj.technologies}</p>}
                {proj.description && <p style={{ color: '#4b5563', margin: '4px 0 0', lineHeight: 1.6 }}>{proj.description}</p>}
              </div>
            ))}
          </Section>
        )}

        {certifications.length > 0 && (
          <Section title="Certifications" color={color} fontSize={fs}>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <div>
                  <p style={{ fontWeight: 600, margin: 0 }}>{cert.name}</p>
                  <p style={{ color: '#6b7280', fontSize: fs.label, margin: '2px 0 0' }}>{cert.issuer}</p>
                </div>
                <p style={{ color: '#9ca3af', fontSize: fs.label, margin: 0 }}>{cert.date}</p>
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  )
}

function Section({ title, color, fontSize, children }: { title: string; color: string; fontSize: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontSize: fontSize.label + 2, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px' }}>{title}</h2>
      <div style={{ height: 1, background: color, opacity: 0.25, marginBottom: 10 }} />
      {children}
    </div>
  )
}