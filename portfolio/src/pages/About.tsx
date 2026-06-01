import { type AboutData } from "../types";
import { 
  Award, 
  Calendar, 
  Mail, 
  FileText,
  ChevronRight,
  Compass
} from "lucide-react";

type AboutProps = {
  data: AboutData;
};

const About = ({ data }: AboutProps) => {
  return (
    <div className="container">
      {/* 1. BIOGRAPHY GRID */}
      <section className="about-hero">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="hero-badge" style={{ alignSelf: 'flex-start' }}>
            <Compass size={14} className="terminal-highlight" />
            <span>PERSONAL BRAND & BIO</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1', margin: 0 }}>
            About <span className="gradient-text">Me</span>
          </h1>
          <h2 style={{ fontSize: '18px', color: 'var(--accent-secondary)', fontWeight: '600', margin: 0 }}>
            Aspiring Full-Stack & MERN Developer | EEE Student
          </h2>
          <p className="about-bio-text">
            {data.bio}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="mailto:kishorevarun75@gmail.com" className="btn btn-primary">
              <Mail size={16} />
              Get In Touch
            </a>
            <a href="mailto:kishorevarun75@gmail.com" className="btn btn-secondary">
              <FileText size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Technical focus areas card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h3 style={{ fontSize: '20px', margin: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            Areas of Interest
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ChevronRight size={18} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Full-Stack Dev</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ChevronRight size={18} style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>MERN Stack</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ChevronRight size={18} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Cloud Systems</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ChevronRight size={18} style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>AI Integration</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ChevronRight size={18} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Real-Time Systems</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <ChevronRight size={18} style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Comp Programming</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDUCATION TIMELINE */}
      <section style={{ marginBottom: '100px', marginTop: '60px' }}>
        <div className="section-header">
          <span className="section-tag">Learning Pathways</span>
          <h2 className="section-title">Education Timeline</h2>
          <p>Chronological academic trace of engineering degrees, high schooling credentials, and key grading matrices.</p>
        </div>

        <div className="timeline">
          {data.education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot-indicator"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-header-block">
                  <div>
                    <h3 className="timeline-role" style={{ fontSize: '20px' }}>{edu.degree}</h3>
                    <span className="timeline-company" style={{ fontSize: '15px', color: 'var(--accent-secondary)', fontWeight: '600' }}>
                      {edu.institution}
                    </span>
                  </div>
                  <span className="timeline-period">
                    <Calendar size={13} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline-block' }} />
                    {edu.period}
                  </span>
                </div>
                <ul className="timeline-achievements">
                  {edu.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="timeline-achitem">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RESUME CREDENTIALS (CERTIFICATIONS) */}
      <section style={{ marginBottom: '100px' }}>
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
            <Award size={24} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '24px', margin: 0 }}>Verified Professional Certifications</h3>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {data.certifications.map((cert, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                gap: '16px', 
                alignItems: 'flex-start',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)',
                padding: '16px',
                borderRadius: '12px',
                transition: 'all 0.3s'
              }} className="cert-item-card">
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '8px', 
                  background: 'rgba(99, 102, 241, 0.08)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  flexShrink: 0
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', margin: '0 0 6px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {cert.name}
                  </h4>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    Provider: <strong style={{ color: 'var(--text-primary)' }}>{cert.issuer}</strong>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--mono)', marginTop: '4px' }}>
                    Certified: {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GOAL & COLLABORATION FOOTER */}
      <section style={{ marginBottom: '100px' }}>
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', background: 'var(--accent-gradient)', color: '#ffffff', border: 'none' }}>
          <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Career Aspirations & Focus
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '720px', margin: '0 auto 24px', fontSize: '16px', lineHeight: '1.7' }}>
            "{data.goal}"
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '6px 18px', borderRadius: '100px', fontSize: '13px', fontWeight: '600' }}>
            <span>Currently optimizing responsive full-stack applications in active dev server.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;