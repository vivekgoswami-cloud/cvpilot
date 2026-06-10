import { TemplateProps } from '../templateRegistry'

const fontSizes = { small: { name: 28, body: 10, label: 8 }, medium: { name: 34, body: 11, label: 9 }, large: { name: 40, body: 13, label: 10 } }

export default function BoldLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', color: '#1a1a1a' }}>
      {/* Bold Header */}
      <div style={{ padding: '40px 36px 32px', borderBottom: `6px solid ${color}` }}>
        <h1 style={{ fontSize: fs.name, fontWeight: 900, margin: '0 0 8px', letterSpacing: '-1px', textTransform: 'uppercase', color: '#0f0f0f' }}>{p.fullName || 'YOUR NAME'}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: fs.label + 1, color: '#6b7280' }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.linkedin && <span>{p.linkedin}</span>}
          {p.website && <span>{p.website}</span>}
        </div>
      </div>

      <div style={{ padding: '28px 36px' }}>
        {p.summary && (
          <BoldSection title="Profile" color={color} fontSize={fs}>
            <p style={{ color: '#374151', lineHeight: 1.7, margin: 0, fontSize: fs.body + 1 }}>{p.summary}</p>
          </BoldSection>
        )}

        {experience.length > 0 && (
          <BoldSection title="Experience" color={color} fontSize={fs}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 800, margin: 0, fontSize: fs.body + 2, color: '#0f0f0f' }}>{exp.jobTitle}</p>
                    <p style={{ color, margin: '3px 0 0', fontSize: fs.label + 2, fontWeight: 600 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  </div>
                  <span style={{ fontSize: fs.label, color: '#9ca3af', background: '#f9fafb', padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.description && <p style={{ color: '#4b5563', marginTop: 6, lineHeight: 1.65 }}>{exp.description}</p>}
              </div>
            ))}
          </BoldSection>
        )}

        {education.length > 0 && (
          <BoldSection title="Education" color={color} fontSize={fs}>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 12 }}>
                <p style={{ fontWeight: 800, margin: 0, fontSize: fs.body + 1 }}>{edu.degree}</p>
                <p style={{ color, margin: '2px 0', fontWeight: 600, fontSize: fs.label + 1 }}>{edu.school}{edu.location ? ` · ${edu.location}` : ''}</p>
                <p style={{ color: '#9ca3af', fontSize: fs.label, margin: 0 }}>{edu.startDate} — {edu.endDate}{edu.grade ? ` · ${edu.grade}` : ''}</p>
              </div>
            ))}
          </BoldSection>
        )}

        {skills.length > 0 && (
          <BoldSection title="Skills" color={color} fontSize={fs}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skills.map((skill) => (
                <span key={skill.id} style={{ background: color, color: 'white', borderRadius: 4, padding: '4px 12px', fontSize: fs.label + 1, fontWeight: 600 }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </BoldSection>
        )}

        {projects.length > 0 && (
          <BoldSection title="Projects" color={color} fontSize={fs}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 12 }}>
                <p style={{ fontWeight: 800, margin: 0, fontSize: fs.body + 1 }}>{proj.name}</p>
                {proj.technologies && <p style={{ color, fontSize: fs.label + 1, margin: '2px 0', fontWeight: 600 }}>{proj.technologies}</p>}
                {proj.description && <p style={{ color: '#4b5563', margin: '4px 0 0', lineHeight: 1.6 }}>{proj.description}</p>}
              </div>
            ))}
          </BoldSection>
        )}
      </div>
    </div>
  )
}

function BoldSection({ title, color, fontSize, children }: { title: string; color: string; fontSize: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ background: `${color}12`, borderLeft: `4px solid ${color}`, padding: '6px 12px', marginBottom: 12 }}>
        <h2 style={{ fontSize: fontSize.label + 3, fontWeight: 900, color, textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  )
}