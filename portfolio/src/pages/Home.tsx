import { useState, useEffect } from "react";
import { type AboutData } from "../types";
import { 
  Cpu, 
  Terminal as TerminalIcon, 
  CloudLightning, 
  ArrowRight,
  Code2,
  Database,
  BrainCircuit,
  Settings2,
  Send,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Trophy,
  Award,
  ArrowUp
} from "lucide-react";

type HomeProps = {
  data: AboutData;
};

// Typewriter component for animated hero titles
const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000); // Hold words
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80); // Speed control

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words]);

  return (
    <span style={{ position: 'relative' }}>
      {words[index].substring(0, subIndex)}
      <span className="typing-cursor"></span>
    </span>
  );
};

const Home = ({ data }: HomeProps) => {
  // Navigation active capabilities tab
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Project filter state
  const [projectFilter, setProjectFilter] = useState<string>("All");

  // Scroll metrics
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  // Scroll listener for progress bar and back to top button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
      
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Form Submit Handler
  
      const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill all required fields");
    return;
  }

  setIsSending(true);

  try {
    await fetch(
"https://script.google.com/macros/s/AKfycbzvRHqkt-SxEdP0beci0-BvSl3z2EPT6LHV41QDprdwi5---koXn17pMc34DrVtHsJE/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }),
  }
);

    setFormSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error("Submission failed:", error);
    alert("Something went wrong while sending the message.");
  } finally {
    setIsSending(false);
  }
};

  // Map service icon name strings to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 size={24} />;
      case "Database": return <Database size={24} />;
      case "Settings2": return <Settings2 size={24} />;
      case "CloudLightning": return <CloudLightning size={24} />;
      case "Cpu": return <Cpu size={24} />;
      case "BrainCircuit": return <BrainCircuit size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  // Filter skills based on category tab
  const filteredSkills = activeCategory === "All"
    ? data.skills
    : data.skills.filter(s => s.category === activeCategory);

  // Filter projects based on tech selection
  const filteredProjects = projectFilter === "All"
    ? data.projects
    : data.projects.filter(p => {
        if (projectFilter === "MERN Stack") {
          return p.category.toLowerCase().includes("mern");
        }
        if (projectFilter === "AI & Real-Time") {
          return p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("real-time");
        }
        return true;
      });

  const getSkillCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages": return <Code2 size={18} />;
      case "Frontend Development": return <Cpu size={18} />;
      case "Backend Development": return <Database size={18} />;
      case "Databases": return <Settings2 size={18} />;
      case "Cloud & Tools": return <CloudLightning size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  return (
    <div>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Back to top float action button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container">
        {/* 1. HERO SECTION */}
        <section className="hero-section">
          <div className="hero-badge">
            <TerminalIcon size={14} className="terminal-accent" />
            <span>MERN & FULL-STACK SYSTEMS ARCHITECT</span>
          </div>
          
          <h1 className="hero-title" style={{ marginBottom: '16px' }}>
            Hi, I'm <span className="gradient-text">{data.name}</span>
          </h1>

          <div style={{ fontSize: '28px', fontWeight: '700', minHeight: '42px', marginBottom: '24px', fontFamily: 'var(--mono)', color: 'var(--accent-secondary)' }}>
            <Typewriter 
              words={[
                "Full-Stack Developer", 
                "MERN Stack Developer", 
                "Software Engineer", 
                "Problem Solver", 
                "Tech Enthusiast"
              ]} 
            />
          </div>

          <p className="hero-subtitle">
            {data.subtitle} Passionate about building intelligent web platforms, optimizing server states, and creating real-time collaborative platforms.
          </p>

          <div className="hero-actions">
            <a href="mailto:kishorevarun75@gmail.com" className="btn btn-primary">
              Download Resume
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects Blueprint
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          {/* Social media connections */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:kishorevarun75@gmail.com" className="footer-social-btn" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </section>

        {/* 2. STATS & COMPETITIVE PROGRAMMING HIGHLIGHTS */}
        <section className="stats-grid">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
              <div className="stat-val gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.description}</div>
            </div>
          ))}
        </section>

        {/* 3. PROFESSIONAL SERVICES OFFERED */}
        <section style={{ marginBottom: '100px' }}>
          <div className="section-header">
            <span className="section-tag">Capabilities Spectrum</span>
            <h2 className="section-title">Professional Services</h2>
            <p>High-performance web consulting, structural database models, and intelligent AI integrations.</p>
          </div>

          <div className="services-grid">
            {data.services.map((srv, idx) => (
              <div key={idx} className="glass-card service-card">
                <div className="service-icon">
                  {getServiceIcon(srv.iconName)}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{srv.title}</h3>
                <p style={{ fontSize: '13px', margin: 0, color: 'var(--text-secondary)' }}>
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DYNAMIC SKILLS MATRIX SECTION */}
        <section style={{ marginBottom: '100px' }}>
          <div className="section-header">
            <span className="section-tag">Technology Matrix</span>
            <h2 className="section-title">Technical Expertise</h2>
            <p>Categorized skill blocks compiled through rigorous testing, projects development, and competitive scoring.</p>
          </div>

          <div className="skills-filters">
            {["All", "Programming Languages", "Frontend Development", "Backend Development", "Databases", "Cloud & Tools"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, idx) => (
              <div key={idx} className="glass-card skill-card">
                <div className="skill-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                      {getSkillCategoryIcon(skill.category)}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-track">
                  <div 
                    className="skill-bar" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROJECTS SECTION WITH DYNAMIC FILTERING */}
        <section id="projects" style={{ marginBottom: '100px' }}>
          <div className="section-header">
            <span className="section-tag">Portfolio Showrooms</span>
            <h2 className="section-title">Featured Projects</h2>
            <p>Detailed analysis of core full-stack codebases and real-time AI implementations built from scratch.</p>
          </div>

          <div className="skills-filters" style={{ marginBottom: '40px' }}>
            {["All", "MERN Stack", "AI & Real-Time"].map(filterOpt => (
              <button
                key={filterOpt}
                onClick={() => setProjectFilter(filterOpt)}
                className={`filter-btn ${projectFilter === filterOpt ? 'active' : ''}`}
              >
                {filterOpt}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="glass-card project-card">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p style={{ color: 'var(--accent-secondary)', fontSize: '13px', fontWeight: '500', marginTop: '-8px', marginBottom: '16px' }}>
                  {project.tagline}
                </p>
                <p className="project-desc">{project.description}</p>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Key Capabilities Engineered:
                  </h4>
                  <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ marginBottom: '4px' }}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                    Source Code
                  </a>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={14} />
                    Live System
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. ACHIEVEMENTS HIGHLIGHT CARDS */}
        <section style={{ marginBottom: '100px' }}>
          <div className="section-header">
            <span className="section-tag">Acclaimed Milestones</span>
            <h2 className="section-title">Key Achievements</h2>
            <p>Industry and academic accolades awarded for rapid code production and problem-solving metrics.</p>
          </div>

          <div className="achievements-grid">
            <div className="glass-card achievement-card">
              <div className="achievement-icon">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="achievement-title">800+ Solved Problems</h3>
                <p className="achievement-desc">Completed challenging algorithms and logic tasks on Skillrack index.</p>
              </div>
            </div>

            <div className="glass-card achievement-card">
              <div className="achievement-icon">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="achievement-title">300+ Solved Problems</h3>
                <p className="achievement-desc">Advanced data structures, graphs, and system modeling tasks on LeetCode.</p>
              </div>
            </div>

            <div className="glass-card achievement-card">
              <div className="achievement-icon">
                <TerminalIcon size={24} />
              </div>
              <div>
                <h3 className="achievement-title">100+ Solved Problems</h3>
                <p className="achievement-desc">Participated in timed algorithmic competitive coding rounds on CodeChef.</p>
              </div>
            </div>

            <div className="glass-card achievement-card">
              <div className="achievement-icon">
                <Award size={24} />
              </div>
              <div>
                <h3 className="achievement-title">Freshathon Project Expo</h3>
                <p className="achievement-desc">Secured **4th Place** at the Sri Eshwar Freshathon Project Exhibition showcase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RECRUITER CONTACT FORM */}
        <section id="contact" className="contact-section">
          <div className="section-header">
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title">Get in Touch</h2>
            <p>Contact me directly for recruitment pipelines, technical interviews, or structural collaborations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Contact Information Card */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
              <h3 style={{ fontSize: '22px', margin: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                Contact Information
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.08)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>Email Address</span>
                    <a href="mailto:kishorevarun75@gmail.com" style={{ fontSize: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>
                      kishorevarun75@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.08)', color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>Phone Number</span>
                    <a href="tel:+919361601840" style={{ fontSize: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>
                      +91 9361601840
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.08)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>Workspace Location</span>
                    <span style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '500' }}>
                      Pollachi, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter Submission Form */}
            <div className="glass-card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <CheckCircle size={48} className="terminal-accent" style={{ marginBottom: '16px', display: 'inline-block' }} />
                  <h3>Message Sent</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Your message has been processed successfully. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <label htmlFor="name" className="form-label">Full Name *</label>
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <label htmlFor="email" className="form-label">Email Address *</label>
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <input
                      type="text"
                      id="subject"
                      className="form-input"
                      placeholder=" "
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                    <label htmlFor="subject" className="form-label">Subject</label>
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <textarea
                      id="message"
                      className="form-input"
                      placeholder=" "
                      rows={3}
                      style={{ resize: 'vertical' }}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                    <label htmlFor="message" className="form-label">Your Message *</label>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={isSending}>
                    {isSending ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;