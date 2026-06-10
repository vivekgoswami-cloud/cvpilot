import { TemplateProps } from '../templateRegistry'

const fontSizes = { small: { name: 18, body: 10, label: 8 }, medium: { name: 22, body: 11, label: 9 }, large: { name: 26, body: 13, label: 10 } }

export default function SidebarLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '35%', background: color, padding: '32px 20px', color: 'white' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700 }}>
          {p.fullName ? p.fullName[0] : 'Y'}
        </div>
        <h1 style={{ fontSize: fs.name, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.2 }}>{p.fullName || 'Your Name'}</h1>
        <div style={{ marginTop: 16 }}>
          {[p.email, p.phone, p.location, p.linkedin, p.website].filter(Boolean).map((val, i) => (
            <p key={i} style={{ fontSize: fs.label, opacity: 0.85, margin: '0 0 6px', wordBreak: 'break-all' }}>{val}</p>
          ))}
        </div>

        {skills.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <h2 style={{ fontSize: fs.label + 1, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px', opacity: 0.7 }}>Skills</h2>
            {skills.map((skill) => (
              <div key={skill.id} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: fs.label, margin: '0 0 3px' }}>{skill.name}</p>
                <div style={{ height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                  <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.7)', width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : skill.level === 'Intermediate' ? '50%' : '25%' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {certifications.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <h2 style={{ fontSize: fs.label + 1, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px', opacity: 0.7 }}>Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: fs.label, fontWeight: 600, margin: 0 }}>{cert.name}</p>
                <p style={{ fontSize: fs.label - 1, opacity: 0.7, margin: '2px 0 0' }}>{cert.issuer} · {cert.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: '32px 24px' }}>
        {p.summary && (
          <SideSection title="About Me" color={color} fontSize={fs}>
            <p style={{ color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{p.summary}</p>
          </SideSection>
        )}

        {experience.length > 0 && (
          <SideSection title="Experience" color={color} fontSize={fs}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0, color: '#111827' }}>{exp.jobTitle}</p>
                    <p style={{ color: color, margin: '2px 0 0', fontSize: fs.label + 1, fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <p style={{ fontSize: fs.label, color: '#9ca3af', margin: 0, whiteSpace: 'nowrap' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</p>
                </div>
                {exp.description && <p style={{ color: '#4b5563', marginTop: 4, lineHeight: 1.6 }}>{exp.description}</p>}
              </div>
            ))}
          </SideSection>
        )}

        {education.length > 0 && (
          <SideSection title="Education" color={color} fontSize={fs}>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 600, margin: 0 }}>{edu.degree}</p>
                <p style={{ color: color, fontSize: fs.label + 1, margin: '2px 0 0' }}>{edu.school}</p>
                <p style={{ color: '#9ca3af', fontSize: fs.label, margin: '2px 0 0' }}>{edu.startDate} — {edu.endDate}{edu.grade ? ` · ${edu.grade}` : ''}</p>
              </div>
            ))}
          </SideSection>
        )}

        {projects.length > 0 && (
          <SideSection title="Projects" color={color} fontSize={fs}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 600, margin: 0 }}>{proj.name}</p>
                {proj.technologies && <p style={{ color: color, fontSize: fs.label, margin: '2px 0' }}>{proj.technologies}</p>}
                {proj.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: '4px 0 0' }}>{proj.description}</p>}
              </div>
            ))}
          </SideSection>
        )}
      </div>
    </div>
  )
}

function SideSection({ title, color, fontSize, children }: { title: string; color: string; fontSize: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <h2 style={{ fontSize: fontSize.label + 2, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: color, opacity: 0.2 }} />
      </div>
      {children}
    </div>
  )
}