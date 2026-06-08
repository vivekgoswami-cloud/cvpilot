'use client'

import { useResumeStore } from '@/store/resumeStore'

const themeColors: Record<string, string> = {
  blue: '#2563eb', purple: '#9333ea', green: '#16a34a',
  red: '#dc2626', gray: '#4b5563', orange: '#ea580c',
}

const fontSizes: Record<string, string> = {
  small: '11px', medium: '13px', large: '15px',
}

export default function ResumePreview() {
  const { data, settings } = useResumeStore()
  const { personalInfo: p, experience, education, skills } = data
  const color = themeColors[settings.colorTheme] || themeColors.blue
  const fontSize = fontSizes[settings.fontSize] || fontSizes.medium

  return (
    <div
      style={{
        width: '210mm',
        minHeight: '297mm',
        backgroundColor: 'white',
        fontFamily: settings.fontFamily,
        fontSize,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        borderRadius: '4px',
      }}
    >
      {/* Header */}
      <div style={{ backgroundColor: color, padding: '28px 32px', color: 'white' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0, letterSpacing: '-0.3px' }}>
          {p.fullName || 'Your Name'}
        </h1>
        <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px', opacity: 0.9 }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.linkedin && <span>{p.linkedin}</span>}
          {p.website && <span>{p.website}</span>}
        </div>
      </div>

      <div style={{ padding: '24px 32px' }}>
        {/* Summary */}
        {p.summary && (
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Summary
            </h2>
            <div style={{ height: '1px', backgroundColor: color, marginBottom: '8px', opacity: 0.3 }} />
            <p style={{ color: '#374151', lineHeight: 1.6, margin: 0 }}>{p.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Experience
            </h2>
            <div style={{ height: '1px', backgroundColor: color, marginBottom: '12px', opacity: 0.3 }} />
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 600, color: '#111827', margin: 0 }}>{exp.jobTitle}</p>
                    <p style={{ color: '#6b7280', margin: '2px 0 0', fontSize: '12px' }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  </div>
                  <p style={{ fontSize: '11px', color: '#9ca3af', whiteSpace: 'nowrap', margin: 0 }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </p>
                </div>
                {exp.description && (
                  <p style={{ color: '#374151', marginTop: '6px', lineHeight: 1.6, margin: '6px 0 0' }}>{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Education
            </h2>
            <div style={{ height: '1px', backgroundColor: color, marginBottom: '12px', opacity: 0.3 }} />
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 600, color: '#111827', margin: 0 }}>{edu.degree}</p>
                    <p style={{ color: '#6b7280', margin: '2px 0 0', fontSize: '12px' }}>{edu.school}{edu.location ? ` · ${edu.location}` : ''}</p>
                    {edu.grade && <p style={{ color: '#9ca3af', margin: '2px 0 0', fontSize: '11px' }}>Grade: {edu.grade}</p>}
                  </div>
                  <p style={{ fontSize: '11px', color: '#9ca3af', whiteSpace: 'nowrap', margin: 0 }}>
                    {edu.startDate} — {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Skills
            </h2>
            <div style={{ height: '1px', backgroundColor: color, marginBottom: '12px', opacity: 0.3 }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map((skill) => (
                <span key={skill.id} style={{
                  backgroundColor: `${color}15`,
                  color,
                  border: `1px solid ${color}30`,
                  borderRadius: '4px',
                  padding: '3px 10px',
                  fontSize: '12px',
                  fontWeight: 500,
                }}>
                  {skill.name} {skill.level !== 'Intermediate' ? `· ${skill.level}` : ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!p.fullName && experience.length === 0 && education.length === 0 && skills.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#d1d5db' }}>
            <p style={{ fontSize: '14px' }}>Start filling your details on the left</p>
            <p style={{ fontSize: '12px', marginTop: '4px' }}>Your resume preview will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}