import { TemplateProps } from '../templateRegistry'

const fontSizes = {
  small: { name: 20, body: 10, label: 8 },
  medium: { name: 24, body: 11, label: 9 },
  large: { name: 28, body: 13, label: 10 }
}

export default function TechLayout({ data, settings, color }: TemplateProps & { color: string }) {
  const { personalInfo: p, experience, education, skills, projects, certifications } = data
  const fs = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div style={{ fontFamily: "'Courier New', monospace", fontSize: fs.body, width: '210mm', minHeight: '297mm', background: '#0d1117', color: '#e6edf3' }}>
      {/* Terminal header */}
      <div style={{ padding: '32px 36px', borderBottom: `1px solid #30363d` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }}></span>
          <span style={{ marginLeft: 8, color: '#6e7681', fontSize: fs.label }}>~/resume.json</span>
        </div>
        <p style={{ color: '#6e7681', fontSize: fs.label, margin: '0 0 4px' }}>$ cat profile.txt</p>
        <h1 style={{ fontSize: fs.name, fontWeight: 700, color, margin: '0 0 8px' }}>{p.fullName || 'Your Name'}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: fs.label + 1, color: '#8b949e' }}>
          {p.email && <span><span style={{ color: '#6e7681' }}>email:</span> {p.email}</span>}
          {p.phone && <span><span style={{ color: '#6e7681' }}>tel:</span> {p.phone}</span>}
          {p.location && <span><span style={{ color: '#6e7681' }}>loc:</span> {p.location}</span>}
          {p.linkedin && <span><span style={{ color: '#6e7681' }}>link:</span> <span style={{ color }}>{p.linkedin}</span></span>}
        </div>
      </div>

      <div style={{ padding: '24px 36px' }}>
        {p.summary && (
          <TSection title="// about" color={color} fs={fs}>
            <p style={{ color: '#8b949e', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>{p.summary}</p>
          </TSection>
        )}

        {skills.length > 0 && (
          <TSection title="// skills" color={color} fs={fs}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {skills.map((skill) => (
                <span key={skill.id} style={{ background: `${color}20`, color, border: `1px solid ${color}40`, borderRadius: 4, padding: '2px 10px', fontSize: fs.label + 1, fontFamily: "'Courier New', monospace" }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </TSection>
        )}

        {experience.length > 0 && (
          <TSection title="// experience" color={color} fs={fs}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 16, paddingLeft: 12, borderLeft: `2px solid ${color}40` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontWeight: 700, margin: 0, color: '#e6edf3' }}>{exp.jobTitle}</p>
                    <p style={{ color, margin: '2px 0 0', fontSize: fs.label + 1 }}>{exp.company}{exp.location ? ` @ ${exp.location}` : ''}</p>
                  </div>
                  <p style={{ fontSize: fs.label, color: '#6e7681', margin: 0 }}>{exp.startDate} → {exp.current ? 'now' : exp.endDate}</p>
                </div>
                {exp.description && <p style={{ color: '#8b949e', marginTop: 6, lineHeight: 1.6 }}>{exp.description}</p>}
              </div>
            ))}
          </TSection>
        )}

        {projects.length > 0 && (
          <TSection title="// projects" color={color} fs={fs}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 12, padding: '8px 12px', background: '#161b22', borderRadius: 6, border: '1px solid #30363d' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <p style={{ fontWeight: 700, margin: 0, color: '#e6edf3' }}>{proj.name}</p>
                  {proj.link && <span style={{ color, fontSize: fs.label }}>{proj.link}</span>}
                </div>
                {proj.technologies && <p style={{ color, fontSize: fs.label, margin: '4px 0' }}>[{proj.technologies}]</p>}
                {proj.description && <p style={{ color: '#8b949e', margin: '4px 0 0', lineHeight: 1.6 }}>{proj.description}</p>}
              </div>
            ))}
          </TSection>
        )}

        {education.length > 0 && (
          <TSection title="// education" color={color} fs={fs}>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 10, paddingLeft: 12, borderLeft: `2px solid ${color}40` }}>
                <p style={{ fontWeight: 700, margin: 0, color: '#e6edf3' }}>{edu.degree}</p>
                <p style={{ color, margin: '2px 0', fontSize: fs.label + 1 }}>{edu.school}</p>
                <p style={{ color: '#6e7681', fontSize: fs.label, margin: 0 }}>{edu.startDate} — {edu.endDate}{edu.grade ? ` · ${edu.grade}` : ''}</p>
              </div>
            ))}
          </TSection>
        )}
      </div>
    </div>
  )
}

function TSection({ title, color, fs, children }: { title: string; color: string; fs: any; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <p style={{ color, fontSize: fs.label + 2, fontWeight: 700, margin: '0 0 10px', letterSpacing: '0.5px' }}>{title}</p>
      {children}
    </div>
  )
}