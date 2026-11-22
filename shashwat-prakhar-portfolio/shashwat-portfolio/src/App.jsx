npm installimport React, { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, ShieldCheck, BrainCircuit,
  Code2, Github, Linkedin, Mail, Menu, X, Terminal, LockKeyhole,
  Activity, Cpu, ExternalLink, Download, FileText, Layers3, Server,
  ChevronRight, Sparkles
} from "lucide-react";

const github = "https://github.com/shashwat-prakhar";

const projects = [
  {
    number: "01",
    name: "CloudGuard",
    category: "CLOUD SECURITY · AI",
    description: "An AI-assisted cloud security monitoring MVP that ingests AWS telemetry, evaluates security findings against a set of detection rules, and surfaces unusual activity for investigation.",
    details: ["18 MITRE/CIS-mapped detection rules", "AWS CloudTrail, VPC Flow Logs & AWS Config ingestion", "Isolation Forest anomaly detection", "FastAPI, Pydantic & Python"],
    tags: ["Python", "FastAPI", "AWS", "scikit-learn", "Security"],
    icon: ShieldCheck,
    link: `${github}/cloud-guard`,
    linkLabel: "View repository"
  },
  {
    number: "02",
    name: "Phishing Email Analysis",
    category: "CYBERSECURITY · SOC",
    description: "A Python-based workflow for phishing email triage and header forensics, supporting authentication checks, indicator extraction and MITRE ATT&CK-oriented analysis.",
    details: ["Email header and authentication analysis", "IOC extraction and reporting", "SOC-style threat triage workflow", "Structured samples, reports and documentation"],
    tags: ["Python", "Email Forensics", "MITRE ATT&CK", "SOC"],
    icon: Mail,
    link: "https://github.com/shashwat-prakhar/Phishing-Email-Analysis",
    linkLabel: "View repository"
  },
  {
    number: "03",
    name: "Parkinson’s Disease Detection",
    category: "MACHINE LEARNING · HEALTHCARE",
    description: "A machine learning project using structured acoustic features to explore Parkinson’s disease classification, from preprocessing and feature selection to model evaluation and an interactive app.",
    details: ["Data preprocessing and visualization", "SMOTE and Chi-square feature selection", "Logistic Regression, SVM & XGBoost", "Streamlit application"],
    tags: ["Python", "scikit-learn", "XGBoost", "Streamlit"],
    icon: BrainCircuit,
    link: github,
    linkLabel: "Explore GitHub"
  }
];

const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Python", "Java", "C / C++", "JavaScript"] },
  { title: "Security & Cloud", icon: LockKeyhole, items: ["Cloud Security", "AWS Telemetry", "Threat Analysis", "MITRE ATT&CK", "Email Forensics"] },
  { title: "AI & Machine Learning", icon: BrainCircuit, items: ["scikit-learn", "TensorFlow", "XGBoost", "Anomaly Detection", "Model Evaluation"] },
  { title: "Tools & Frameworks", icon: Terminal, items: ["FastAPI", "Streamlit", "Git & GitHub", "Linux", "REST APIs"] }
];

function SectionLabel({ children }) {
  return <div className="section-label"><span className="label-line" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">SP</span><span>SHASHWAT<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <h1>Building at the<br/><span className="gradient-text">intersection</span> of<br/>security & intelligence<span className="accent">.</span></h1>
            <p className="hero-intro">I’m <strong>Shashwat Prakhar</strong> — a computer science student exploring cloud security, cybersecurity, and machine learning. I turn technical curiosity into practical projects.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a>
              <span className="social-separator">/</span>
              <a href="#contact"><Mail size={16}/> Email</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative security and machine learning illustration">
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="visual-grid" />
            <div className="visual-core"><div className="core-glow" /><ShieldCheck size={70} strokeWidth={1.15}/><span>SECURE<br/>BY DESIGN</span></div>
            <div className="float-card card-top"><span className="mini-icon purple"><BrainCircuit size={16}/></span><div><b>ML SYSTEMS</b><small>Patterns → insights</small></div><span className="live-pip"/></div>
            <div className="float-card card-bottom"><span className="mini-icon green"><LockKeyhole size={16}/></span><div><b>CLOUD DEFENSE</b><small>Signals → detection</small></div><span className="live-pip"/></div>
            <div className="visual-coordinates">28.6139° N&nbsp; / &nbsp;77.2090° E<br/><span>BUILD · TEST · ITERATE</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading"><SectionLabel>01 / ABOUT</SectionLabel><h2>Curiosity is the<br/><span className="muted-heading">starting point.</span></h2></div>
          <div className="about-content">
            <p className="about-lead">I’m interested in how systems work, where they break, and how we can make them smarter and safer.</p>
            <p className="body-copy">My work sits across two connected areas: securing modern cloud environments and applying machine learning to real-world problems. I enjoy getting hands-on with data, building backend services, testing ideas, and documenting what I learn.</p>
            <div className="about-facts">
              <div><span className="fact-number">01</span><b>Think critically</b><small>Understand the problem before reaching for a tool.</small></div>
              <div><span className="fact-number">02</span><b>Build practically</b><small>Turn concepts into working, testable projects.</small></div>
              <div><span className="fact-number">03</span><b>Keep learning</b><small>Improve through experimentation and iteration.</small></div>
            </div>
          </div>
        </section>

        <section className="focus-strip">
          <div className="focus-item"><ShieldCheck/><div><b>Cybersecurity</b><span>Threat analysis & defense</span></div></div>
          <div className="focus-item"><Server/><div><b>Cloud Security</b><span>Monitoring & detection</span></div></div>
          <div className="focus-item"><BrainCircuit/><div><b>AI / ML</b><span>Models & applied learning</span></div></div>
          <div className="focus-item"><Code2/><div><b>Development</b><span>Tools that solve problems</span></div></div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading"><SectionLabel>02 / TOOLKIT</SectionLabel><h2>Tools I use to<br/><span className="muted-heading">make things work.</span></h2></div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>;
            })}
          </div>
          <p className="skills-note"><span className="note-star">✳</span> A working toolkit, not a checklist. I’m continuously learning and expanding it.</p>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="projects-heading"><div><SectionLabel>03 / SELECTED WORK</SectionLabel><h2>Projects with a<br/><span className="muted-heading">purpose.</span></h2></div><a className="text-link" href={github} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16}/></a></div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15}/></a>
                </div>
                <div className="project-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-icon"><Icon size={39} strokeWidth={1.2}/></div><span className="art-code">{project.number} / SYSTEM</span></div>
                <div className="project-details"><span>WHAT’S INSIDE</span>{project.details.map(detail => <div key={detail}><ChevronRight size={13}/>{detail}</div>)}</div>
              </article>;
            })}
          </div>
        </section>

        <section className="approach section-wrap section-block">
          <div className="approach-panel"><div className="approach-left"><SectionLabel>04 / HOW I WORK</SectionLabel><h2>Less hype.<br/><span className="muted-heading">More evidence.</span></h2></div><div className="approach-right"><p>I value clear problem statements, reproducible experiments, readable code, and honest evaluation. A project is only useful when its claims can be explained and its limitations are understood.</p><div className="principles"><span><Activity size={15}/> Measure outcomes</span><span><Layers3 size={15}/> Build in layers</span><span><Cpu size={15}/> Understand the system</span></div></div></div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <SectionLabel>05 / CONTACT</SectionLabel>
          <div className="contact-layout"><div><h2>Have a problem<br/>worth <span className="gradient-text">solving?</span></h2><p className="body-copy">I’m interested in connecting with people working across software, cybersecurity, cloud, and AI/ML.</p></div><div className="contact-actions"><a href={github} target="_blank" rel="noreferrer" className="contact-row"><span><Github/> GitHub</span><ArrowUpRight/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-row"><span><Linkedin/> LinkedIn <small>Replace with your profile URL</small></span><ArrowUpRight/></a><a href="mailto:YOUR_EMAIL@example.com" className="contact-row"><span><Mail/> Email <small>Replace with your email address</small></span><ArrowUpRight/></a></div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">SP</span><span>SHASHWAT<span className="brand-dot">.</span></span></a><span>Designed & built with intent.</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} Shashwat Prakhar</small></footer>
    </div>
  );
}

export default App;