import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { type AboutData } from "./types";
import { 
  Cpu, 
  Sun, 
  Moon
} from "lucide-react";

// Layout wrapper component to inject shared header, footer, and active link states
function LayoutWrapper({ children, data }: { children: React.ReactNode; data: AboutData }) {
  const location = useLocation();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-layout">
      {/* Header / Navigation Bar */}
      <header>
        <div className="container nav-container">
          <Link to="/" className="logo-link gradient-text">
            <Cpu size={24} className="terminal-highlight" style={{ marginRight: '4px' }} />
            {data.name}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Console Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                  Resume Timeline
                </Link>
              </li>
              <li>
                <button 
                  onClick={toggleTheme} 
                  className="footer-social-btn" 
                  aria-label="Toggle Theme"
                  style={{ width: '36px', height: '36px', border: 'none', background: 'rgba(255,255,255,0.05)', cursor: 'pointer' }}
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>

      {/* Shared Footer Section */}
      <footer>
        <div className="container footer-container">
          <div className="footer-info">
            <div className="logo-link gradient-text" style={{ fontSize: '18px', marginBottom: '8px' }}>
              <Cpu size={18} />
              {data.name}
            </div>
            <p style={{ fontSize: '13px', margin: 0 }}>
              Aspiring Full-Stack & MERN Stack Developer | Electrical & Electronics Engineer
            </p>
            <p style={{ fontSize: '12px', margin: 0, color: 'var(--text-muted)' }}>
              © 2026 Varun Kishore R A. All Rights Reserved.
            </p>
          </div>

          <div className="footer-status">
            <span className="status-dot"></span>
            Portfolio Engine: Synced & Active
          </div>

          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:kishorevarun75@gmail.com" className="footer-social-btn" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const aboutData: AboutData = {
    name: "Varun Kishore R A",
    title: "Full-Stack Developer | MERN Stack Developer | EEE Student",
    subtitle: "Passionate Full-Stack Developer and Electrical & Electronics Engineering student specializing in MERN Stack development, cloud technologies, and AI-powered applications.",
    college: "Sri Eshwar College of Engineering",
    bio: "Varun Kishore R A is currently pursuing a Bachelor of Engineering in Electrical and Electronics Engineering at Sri Eshwar College of Engineering. He is passionate about full-stack web development, cloud computing, artificial intelligence integration, and solving real-world problems through technology.",
    goal: "Dedicated to building innovative solutions that solve real-world problems, specializing in real-time frameworks, server designs, database modeling, and LLM integrations.",
    stats: [
      {
        label: "Skillrack Solved",
        value: "800+",
        description: "Competitive programming problems solved"
      },
      {
        label: "LeetCode Solved",
        value: "300+",
        description: "Data Structures & Algorithms problems"
      },
      {
        label: "CodeChef Solved",
        value: "100+",
        description: "Active programming challenge rounds"
      },
      {
        label: "Project Expo",
        value: "4th Place",
        description: "Secured at Freshathon Expo"
      }
    ],
    skills: [
      // Programming Languages
      { name: "C Language", level: "Expert", percentage: 88, category: "Programming Languages" },
      { name: "Python", level: "Expert", percentage: 85, category: "Programming Languages" },
      { name: "Java", level: "Advanced", percentage: 75, category: "Programming Languages" },
      // Frontend Development
      { name: "HTML & Semantic Markup", level: "Expert", percentage: 95, category: "Frontend Development" },
      { name: "CSS Grid & Flexbox", level: "Expert", percentage: 90, category: "Frontend Development" },
      { name: "JavaScript (ES6+)", level: "Expert", percentage: 92, category: "Frontend Development" },
      { name: "React.js Framework", level: "Expert", percentage: 90, category: "Frontend Development" },
      // Backend Development
      { name: "Node.js Environment", level: "Expert", percentage: 88, category: "Backend Development" },
      { name: "Express.js Architecture", level: "Expert", percentage: 88, category: "Backend Development" },
      { name: "REST APIs & Endpoints", level: "Expert", percentage: 90, category: "Backend Development" },
      // Databases
      { name: "MongoDB Atlas", level: "Expert", percentage: 85, category: "Databases" },
      { name: "SQL Databases", level: "Advanced", percentage: 80, category: "Databases" },
      // Cloud & Tools
      { name: "AWS Cloud Services", level: "Advanced", percentage: 78, category: "Cloud & Tools" },
      { name: "Git & Version Control", level: "Expert", percentage: 90, category: "Cloud & Tools" },
      { name: "GitHub & Actions", level: "Expert", percentage: 92, category: "Cloud & Tools" },
      { name: "VS Code Editor", level: "Expert", percentage: 95, category: "Cloud & Tools" },
      { name: "Socket.io Syncing", level: "Advanced", percentage: 82, category: "Cloud & Tools" },
      { name: "OpenAI API Core", level: "Advanced", percentage: 80, category: "Cloud & Tools" }
    ],
    projects: [
      {
        title: "Smart Attendance System",
        category: "MERN Stack Development",
        tagline: "Classroom QR Scanning & location validator to defend proxy attendance.",
        description: "A MERN-based Smart Attendance System that uses QR code scanning and classroom location verification to prevent proxy attendance.",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
        features: [
          "JWT Authentication & Role-Based Login",
          "Dynamic QR Code Generation & Scanning Verification",
          "Geofencing / Classroom Location Validation",
          "Secure MongoDB Atlas cloud integration",
          "Comprehensive Student Attendance Management Dashboard"
        ]
      },
      {
        title: "AI Collaborative Coding Platform",
        category: "AI & Real-Time Sync",
        tagline: "Socket.io editor with direct LLM code reviews and optimizations.",
        description: "A collaborative coding platform enabling multiple users to code together while receiving AI-powered code reviews and optimization suggestions.",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "OpenAI API"],
        features: [
          "Real-Time Multi-User Collaborative Coding",
          "Bidirectional WebSocket Syncing via Socket.io",
          "Automated AI Code Reviews & Suggestions by OpenAI API",
          "JWT Authentication & Secure Project Workspaces",
          "Interactive Project Management boards"
        ]
      }
    ],
    experience: [
      {
        role: "Full-Stack Developer Intern",
        company: "Sri Eshwar College Project Labs",
        period: "2024 - Present",
        description: "Architecting interactive web frameworks and MERN dashboards, securing recognition at top-tier expos.",
        achievements: [
          "Secured 4th Place in Sri Eshwar College Freshathon Project Expo for excellent systems engineering.",
          "Designed location-validation geo scripts in Smart Attendance System, protecting against proxy attempts.",
          "Wired multi-thread Socket.io pipelines for instantaneous document syncs."
        ]
      }
    ],
    education: [
      {
        degree: "B.E. Electrical and Electronics Engineering",
        institution: "Sri Eshwar College of Engineering",
        period: "2024 – 2028",
        achievements: ["Current CGPA: 7.4", "Focusing on Full-Stack, cloud architectures, competitive coding, and microservices."]
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Palanigounder Higher Secondary School",
        period: "2022 – 2024",
        achievements: ["Score: 80%", "Core subjects: Mathematics, Physics, Chemistry, Computer Science."]
      },
      {
        degree: "Secondary School Leaving Certificate (SSLC)",
        institution: "Sri Vagisvari Vidya Mandir",
        period: "2021 – 2022",
        achievements: ["Score: 74%", "Specialized in General Science and Mathematics."]
      }
    ],
    certifications: [
      {
        name: "Design Thinking",
        issuer: "NPTEL (Swayam)",
        date: "2024"
      },
      {
        name: "Mobile App Development",
        issuer: "MCET College",
        date: "2024"
      },
      {
        name: "Python Programming",
        issuer: "CodeChef",
        date: "2025"
      },
      {
        name: "Data Structures and Algorithms",
        issuer: "Udemy",
        date: "2025"
      },
      {
        name: "Cloud Computing",
        issuer: "NPTEL (Swayam)",
        date: "2025"
      }
    ],
    services: [
      {
        title: "Full-Stack Web Development",
        description: "End-to-end building of complex scalable websites featuring secure routing, business logics, and modern UI/UX workflows.",
        iconName: "Code2"
      },
      {
        title: "MERN Stack Development",
        description: "Designing ultra-responsive web ecosystems utilizing MongoDB, Express.js, React.js, and Node.js.",
        iconName: "Database"
      },
      {
        title: "REST API Development",
        description: "Constructing robust, secure, and fast endpoints and data pathways using clean JWT authentications.",
        iconName: "Settings2"
      },
      {
        title: "Real-Time Application Development",
        description: "Engineering highly responsive real-time data syncs, collaborative text editors, and chat matrices using Socket.io.",
        iconName: "CloudLightning"
      },
      {
        title: "Database Design and Integration",
        description: "Architecting flexible database schemas, relational mapping patterns, and rapid indices structures with SQL and MongoDB.",
        iconName: "Cpu"
      },
      {
        title: "AI Integration using OpenAI API",
        description: "Integrating state-of-the-art LLMs, automated code reviews, content generation, and vector caches directly into websites.",
        iconName: "BrainCircuit"
      }
    ]
  };

  return (
    <BrowserRouter>
      <LayoutWrapper data={aboutData}>
        <Routes>
          <Route path="/" element={<Home data={aboutData} />} />
          <Route path="/about" element={<About data={aboutData} />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;