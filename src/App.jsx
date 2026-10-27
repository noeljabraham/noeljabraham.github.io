import retroImage from "../assets/img/retro-img.png";

const projects = [
  {
    title: "SIEM Log Monitoring Lab",
    type: "Threat detection and investigation",
    description: "Deployed Splunk Enterprise to monitor Ubuntu authentication logs, wrote SPL detections for SSH brute-force activity, and investigated a triggered high-severity alert through a documented six-step workflow.",
    tags: ["Splunk", "SPL", "Ubuntu", "Incident Response"],
    links: [{ label: "GitHub", href: "https://github.com/noeljabraham" }]
  },
  {
    title: "Self-Hosted Mesh VPN Exit Node",
    type: "Network security infrastructure",
    description: "Deployed and hardened an Armbian-based Tailscale exit node for secure overseas routing, with Linux IP forwarding, persistent services, and SSH administration across six devices.",
    tags: ["Tailscale", "Armbian", "SSH", "Linux Networking"],
    links: []
  },
  {
    title: "Cloud Security Compliance Dashboard",
    type: "Multi-cloud security posture",
    description: "Built plugin-based checks for AWS, Azure, and GCP misconfigurations mapped to CIS, SOC 2, HIPAA, and PCI-DSS, with risk scoring, drift detection, and Terraform remediation.",
    tags: ["AWS IAM", "Rust", "React", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/noeljabraham/Cloud-Security-Compliance-Dashboard" }]
  },
  {
    title: "LearnCyber",
    type: "Cybersecurity learning platform",
    description: "Created structured roadmaps across application, cloud, DevSecOps, network, and API security, with mobile-first filtering and dedicated career preparation.",
    tags: ["Next.js", "TypeScript", "AppSec", "DevSecOps"],
    links: [{ label: "Website", href: "https://blogno3l.vercel.app" }]
  },
  {
    title: "GAIL India Fleet App",
    type: "Secure government fleet operations",
    description: "Implemented role-based authentication for five user roles alongside live map tracking, background polling, and secure data-handling workflows validated with client stakeholders.",
    tags: ["RBAC", "Flutter", "API Security", "GovTech"],
    links: [{ label: "TestFlight", href: "https://testflight.apple.com/v1/invite/28da93f13e4847af85d09db7b60be05d835990509a7941c5acc944083b42c0f119303e0cf?ct=K2J53QC4V2&advp=10000&platform=ios" }]
  },
  {
    title: "Agartala Property Tax Platform",
    type: "Secure offline-first e-governance",
    description: "Built a municipal survey app with GIS layers, geo-tagged evidence capture, EXIF GPS metadata, and offline storage with multipart synchronization across multiple municipalities.",
    tags: ["Data Integrity", "GIS", "Flutter", "Offline Security"],
    links: []
  }
];

const experience = [
  {
    role: "Software Development Engineer",
    company: "Stesalit Systems Limited",
    location: "Kolkata, India",
    date: "Sep 2024 — Aug 2026",
    summary: "Secured REST API communication across 11 enterprise mobile apps serving 45,000+ users, reviewed 120+ pull requests, and flagged 25 security and reliability issues before release."
  },
  {
    role: "Student Voice Leader",
    company: "Middlesex University",
    location: "Dubai, UAE",
    date: "Oct 2026 — Present",
    summary: "Represent 249 MSc students in faculty and leadership meetings, translating student feedback into practical recommendations."
  },
  {
    role: "Software Engineer Intern",
    company: "Zaburb Pvt Ltd",
    location: "Bangalore, India",
    date: "Jun 2023 — Apr 2024",
    summary: "Developed secure REST APIs and a Flutter frontend serving 2,000+ users, protecting sensitive user data at rest and in transit."
  },
  {
    role: "Lead Android Developer",
    company: "Google Developer Student Club, AJCE",
    location: "Kerala, India",
    date: "Sep 2023 — May 2024",
    summary: "Led five developers across four applications, applying secure coding throughout delivery and mentoring the team through six technical sessions."
  }
];

const education = [
  {
    degree: "MSc Cybersecurity and Emerging Threats",
    school: "Middlesex University",
    location: "Dubai, UAE",
    date: "Sep 2026 — Present",
    focus: "Advanced study focused on contemporary threats, security operations, risk, and defensive security practice."
  },
  {
    degree: "BTech Computer Science and Engineering",
    school: "Amal Jyothi College of Engineering",
    location: "Kerala, India",
    date: "May 2020 — May 2024",
    focus: "Foundation in software engineering, computer systems, networking, and applied research."
  }
];

const certifications = [
  "Google Cybersecurity Professional Certificate",
  "Certified Ethical Hacker — Pearson",
  "Oracle Cloud Infrastructure Foundations",
  "Splunk Core — Splunk Technology",
  "Python Full Stack Development — QSpiders",
  "Introduction to Cybersecurity — Cisco"
];

function App() {
  return (
    <>
      <header className="site-header">
        <div className="shell nav">
          <a className="wordmark" href="#top" aria-label="Noel J Abraham, home">Noel J Abraham<span>.</span></a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Cybersecurity professional · Dubai, UAE</p>
            <h1 id="hero-title">I secure digital systems through <em>defensive engineering and analysis.</em></h1>
            <p className="hero-intro">I&apos;m Noel, a cybersecurity-focused engineer specializing in security operations, API and network security, threat detection, and vulnerability management.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore security work <span aria-hidden="true">↘</span></a>
              <a className="button" href="mailto:noeljabraham2023@gmail.com">Get in touch</a>
              {/* Resume button hidden until the updated resume is ready.
              <a className="button" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
              */}
            </div>
          </div>

          {/* Portrait intentionally hidden for the current minimal layout.
          <img className="hero-image" src="/assets/img/image.png" alt="Noel J Abraham" />
          */}

          <figure className="hero-portrait">
            <img src={retroImage} alt="Pixel-art portrait of Noel J Abraham" />
            <figcaption>Noel J Abraham · Cybersecurity professional</figcaption>
          </figure>

          <div className="hero-note" aria-label="Current focus">
            <span className="status-dot" aria-hidden="true" />
            <p>Available immediately for Security Analyst and SOC Analyst opportunities.</p>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="section-label"><span>01</span><h2>About</h2></div>
          <div className="about-grid">
            <p className="about-lead">I combine hands-on security operations with the engineering experience to fix what I find.</p>
            <div className="about-copy">
              <p>My work spans log analysis, SIEM detections, vulnerability assessment, network hardening, secure API design, and cloud security. I use tools including Splunk, Wazuh, Nessus, Burp Suite, Nmap, Wireshark, and OpenVAS.</p>
              <p>More than two years of application engineering across enterprise and government platforms gives me a practical view of how vulnerabilities enter systems—and how security controls must work in production.</p>
              <ul className="skills" aria-label="Core skills">
                <li>Security Operations & SIEM</li><li>Threat Detection & Log Analysis</li><li>Network & API Security</li>
                <li>Vulnerability Management</li><li>Incident Response Fundamentals</li><li>AWS, Azure & GCP Security</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section shell" id="experience">
          <div className="section-label"><span>02</span><h2>Experience</h2></div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={`${item.company}-${item.role}`}>
                <p className="experience-date">{item.date}</p>
                <div><h3>{item.role}</h3><p className="experience-company">{item.company} · {item.location}</p></div>
                <p className="experience-summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-label"><span>03</span><h2>Selected work</h2></div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <p className="project-number">{String(index + 1).padStart(2, "0")}</p>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <div className="project-links">
                  {project.links.length ? project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
                  )) : <span>Private project</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="education">
          <div className="section-label"><span>04</span><h2>Education</h2></div>
          <div className="experience-list">
            {education.map((item) => (
              <article className="experience-row" key={item.degree}>
                <p className="experience-date">{item.date}</p>
                <div><h3>{item.degree}</h3><p className="experience-company">{item.school} · {item.location}</p></div>
                <p className="experience-summary">{item.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="certifications">
          <div className="section-label"><span>05</span><h2>Certifications</h2></div>
          <ol className="certification-list">
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ol>
        </section>

        <section className="contact shell" id="contact">
          <p className="eyebrow">Building a stronger security team?</p>
          <h2>Let&apos;s secure what matters.</h2>
          <a className="contact-email" href="mailto:noeljabraham2023@gmail.com">noeljabraham2023@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/noeljabraham/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/noeljabraham" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://blogno3l.vercel.app" target="_blank" rel="noreferrer">Blog</a>
            {/* Resume link hidden until the updated resume is ready.
            <a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
            */}
          </div>
        </section>
      </main>

      <footer className="footer shell"><p>© {new Date().getFullYear()} Noel J Abraham</p><a href="#top">Back to top ↑</a></footer>
    </>
  );
}

export default App;
