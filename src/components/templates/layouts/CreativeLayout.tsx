import { TemplateProps } from '../templateRegistry'

const fontSizes = {
  small: { name: 22, body: 10, label: 8 },
  medium: { name: 26, body: 11, label: 9 },
  large: { name: 30, body: 13, label: 10 }
}

export default function CreativeLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: settings.fontFamily, fontSize: fs.body, width: '210mm', minHeight: '297mm', background: 'white', display: 'flex' }}>
      {/* Left color block */}
      <div style={{ width: '42%', background: color, padding: '40px 24px', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
            {p.fullName ? p.fullName.split(' ').map((n: string) => n[0]).join('').slice(0,2) : 'YN'}
          </div>
          <h1 style={{ fontSize: fs.name, fontWeight: 800, margin: '0 0 4px', lineHeight: 1.1 }}>{p.fullName || 'Your Name'}</h1>
          <div style={{ height: 3, width: 40, background: 'rgba(255,255,255,0.5)', margin: '12px 0' }} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <CLeftSection title="Contact" fs={fs}>
            {p.email && <p style={{ margin: '0 0 4px', fontSize: fs.label + 1, wordBreak: 'break-all', opacity: 0.9 }}>{p.email}</p>}
            {p.phone && <p style={{ margin: '0 0 4px', fontSize: fs.label + 1, opacity: 0.9 }}>{p.phone}</p>}
            {p.location && <p style={{ margin: '0 0 4px', fontSize: fs.label + 1, opacity: 0.9 }}>{p.location}</p>}
            {p.linkedin && <p style={{ margin: '0 0 4px', fontSize: fs.label + 1, opacity: 0.9, wordBreak: 'break-all' }}>{p.linkedin}</p>}
            {p.website && <p style={{ margin: 0, fontSize: fs.label + 1, opacity: 0.9 }}>{p.website}</p>}
          </CLeftSection>
        </div>

        {skills.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <CLeftSection title="Skills" fs={fs}>
              {skills.map((skill) => (
                <div key={skill.id} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: fs.label + 1, fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ fontSize: fs.label - 1, opacity: 0.6 }}>{skill.level}</span>
                  </div>
                  <div style={{ height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                    <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.8)', width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : skill.level === 'Intermediate' ? '50%' : '25%' }} />
                  </div>
                </div>
              ))}
            </CLeftSection>
          </div>
        )}

        {education.length > 0 && (
          <CLeftSection title="Education" fs={fs}>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 10 }}>
                <p style={{ fontWeight: 700, margin: 0, fontSize: fs.label + 1 }}>{edu.degree}</p>
                <p style={{ margin: '2px 0', fontSize: fs.label, opacity: 0.8 }}>{edu.school}</p>
                <p style={{ margin: 0, fontSize: fs.label - 1, opacity: 0.6 }}>{edu.startDate} — {edu.endDate}</p>
              </div>
            ))}
          </CLeftSection>
        )}
      </div>

      {/* Right content */}
      <div style={{ flex: 1, padding: '40px 28px' }}>
        {p.summary && (
          <CRightSection title="About Me" color={color} fs={fs}>
            <p style={{ color: '#4b5563', lineHeight: 1.8, margin: 0 }}>{p.summary}</p>
          </CRightSection>
        )}

        {experience.length > 0 && (
          <CRightSection title="Experience" color={color} fs={fs}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 16, paddingLeft: 14, borderLeft: `3px solid ${color}` }}>
                <p style={{ fontWeight: 700, margin: 0, color: '#111', fontSize: fs.body + 1 }}>{exp.jobTitle}</p>
                <p style={{ color, margin: '2px 0', fontSize: fs.label + 1, fontWeight: 600 }}>{exp.company}</p>
                <p style={{ color: '#9ca3af', fontSize: fs.label, margin: '0 0 4px' }}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</p>
                {exp.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{exp.description}</p>}
              </div>
            ))}
          </CRightSection>
        )}

        {projects.length > 0 && (
          <CRightSection title="Projects" color={color} fs={fs}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 12, padding: '8px 12px', border: `1px solid ${color}20`, borderRadius: 6, borderLeft: `3px solid ${color}` }}>
                <p style={{ fontWeight: 700, margin: 0 }}>{proj.name}</p>
                {proj.technologies && <p style={{ color, fontSize: fs.label, margin: '2px 0', fontWeight: 500 }}>{proj.technologies}</p>}
                {proj.description && <p style={{ color: '#4b5563', lineHeight: 1.6, margin: '4px 0 0' }}>{proj.description}</p>}
              </div>
            ))}
          </CRightSection>
        )}

        {certifications.length > 0 && (
          <CRightSection title="Certifications" color={color} fs={fs}>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>
                <div>
                  <p style={{ fontWeight: 600, margin: 0 }}>{cert.name}</p>
                  <p style={{ color: '#6b7280', fontSize: fs.label, margin: '2px 0 0' }}>{cert.issuer}</p>
                </div>
                <p style={{ color, fontSize: fs.label, margin: 0, fontWeight: 500 }}>{cert.date}</p>
              </div>
            ))}
          </CRightSection>
        )}
      </div>
    </div>
  )
}

function CLeftSection({ title, fs, children }: { title: string; fs: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <p style={{ fontSize: fs.label, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, margin: '0 0 8px' }}>{title}</p>
      {children}
    </div>
  )
}

function CRightSection({ title, color, fs, children }: { title: string; color: string; fs: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <h2 style={{ fontSize: fs.label + 3, fontWeight: 800, color: '#111', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h2>
        <div style={{ flex: 1, height: 2, background: `${color}20` }} />
      </div>
      {children}
    </div>
  )
}