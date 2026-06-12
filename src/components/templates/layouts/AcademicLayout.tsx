import { TemplateProps } from '../templateRegistry'

const fontSizes = {
  small: { name: 20, body: 10, label: 8 },
  medium: { name: 24, body: 11, label: 9 },
  large: { name: 28, body: 13, label: 10 }
}

export default function AcademicLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: 'Georgia, serif', fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', padding: '48px 52px', color: '#1a1a1a' }}>
      {/* Academic header — centered */}
      <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: `2px solid ${color}` }}>
        <h1 style={{ fontSize: fs.name + 2, fontWeight: 700, margin: '0 0 6px', letterSpacing: '0.5px' }}>{p.fullName || 'Your Name'}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16, fontSize: fs.label + 1, color: '#6b7280', marginTop: 8 }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.linkedin && <span style={{ color }}>{p.linkedin}</span>}
          {p.website && <span style={{ color }}>{p.website}</span>}
        </div>
      </div>

      {p.summary && (
        <ASection title="Research Interests / Profile" color={color} fs={fs}>
          <p style={{ color: '#374151', lineHeight: 1.9, margin: 0, textAlign: 'justify' }}>{p.summary}</p>
        </ASection>
      )}

      {education.length > 0 && (
        <ASection title="Education" color={color} fs={fs}>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontWeight: 700, margin: 0 }}>{edu.degree}</p>
                <p style={{ color: '#6b7280', fontSize: fs.label + 1, margin: 0 }}>{edu.startDate} — {edu.endDate}</p>
              </div>
              <p style={{ color, margin: '2px 0', fontStyle: 'italic' }}>{edu.school}{edu.location ? `, ${edu.location}` : ''}</p>
              {edu.grade && <p style={{ color: '#6b7280', fontSize: fs.label, margin: '2px 0 0' }}>Grade: {edu.grade}</p>}
            </div>
          ))}
        </ASection>
      )}

      {experience.length > 0 && (
        <ASection title="Academic & Professional Experience" color={color} fs={fs}>
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontWeight: 700, margin: 0 }}>{exp.jobTitle}</p>
                <p style={{ color: '#6b7280', fontSize: fs.label + 1, margin: 0 }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</p>
              </div>
              <p style={{ color, fontStyle: 'italic', margin: '2px 0 0' }}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
              {exp.description && <p style={{ color: '#374151', lineHeight: 1.8, margin: '6px 0 0', textAlign: 'justify' }}>{exp.description}</p>}
            </div>
          ))}
        </ASection>
      )}

      {projects.length > 0 && (
        <ASection title="Research & Projects" color={color} fs={fs}>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: 14 }}>
              <p style={{ fontWeight: 700, margin: 0 }}>{proj.name}{proj.link ? <span style={{ fontWeight: 400, color, fontSize: fs.label }}> [{proj.link}]</span> : ''}</p>
              {proj.technologies && <p style={{ color: '#6b7280', fontStyle: 'italic', fontSize: fs.label + 1, margin: '2px 0' }}>{proj.technologies}</p>}
              {proj.description && <p style={{ color: '#374151', lineHeight: 1.8, margin: '4px 0 0', textAlign: 'justify' }}>{proj.description}</p>}
            </div>
          ))}
        </ASection>
      )}

      {skills.length > 0 && (
        <ASection title="Skills & Competencies" color={color} fs={fs}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 24px' }}>
            {skills.map((skill) => (
              <p key={skill.id} style={{ margin: '2px 0', color: '#374151' }}>
                <span style={{ color, fontWeight: 600 }}>·</span> {skill.name}
                <span style={{ color: '#9ca3af', fontSize: fs.label }}> ({skill.level})</span>
              </p>
            ))}
          </div>
        </ASection>
      )}

      {certifications.length > 0 && (
        <ASection title="Certifications & Awards" color={color} fs={fs}>
          {certifications.map((cert) => (
            <div key={cert.id} style={{ marginBottom: 8 }}>
              <p style={{ fontWeight: 700, margin: 0 }}>{cert.name}</p>
              <p style={{ color: '#6b7280', fontStyle: 'italic', fontSize: fs.label + 1, margin: '2px 0 0' }}>{cert.issuer}, {cert.date}</p>
            </div>
          ))}
        </ASection>
      )}
    </div>
  )
}

function ASection({ title, color, fs, children }: { title: string; color: string; fs: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <h2 style={{ fontSize: fs.label + 3, fontWeight: 700, color, margin: '0 0 10px', paddingBottom: 4, borderBottom: `1px solid ${color}30` }}>{title}</h2>
      {children}
    </div>
  )
}