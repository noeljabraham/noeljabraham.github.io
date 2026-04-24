import { useEffect } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { BubbleText } from "@/components/ui/bubble-text";

const resumeUrl =
  "https://drive.google.com/drive/folders/1F1GMt4gN_XKCpLNXYf1O5XUo3WO4GNgx?usp=sharing";

const projects = [
  {
    title: "GAIL India Fleet App - Government Project",
    subtitle: "Flutter | iOS TestFlight Beta",
    description:
      "Built and maintained a production Flutter fleet operations app for monitoring CNG logistics, live station activity, and route movement across multiple operational zones. Implemented map-driven workflows, performance-focused UI states, and reliable API syncing so field teams could track assets faster and reduce reporting delays.",
    tags: ["Flutter", "Google Maps", "GovTech"],
    links: [
      {
        label: "TestFlight",
        href: "https://testflight.apple.com/v1/invite/28da93f13e4847af85d09db7b60be05d835990509a7941c5acc944083b42c0f119303e0cf?ct=K2J53QC4V2&advp=10000&platform=ios"
      }
    ]
  },
  {
    title: "Agartala Property Tax Platform - e-Governance",
    subtitle: "Flutter | GIS | Offline-First",
    description:
      "Developed an offline-first Flutter platform for municipal tax surveys and on-ground property data capture with GIS-assisted workflows. Designed robust local persistence and sync reconciliation to keep survey progress safe in low-connectivity areas while improving completeness and auditability of city records.",
    tags: ["Flutter", "GeoServer", "Isar"],
    links: []
  },
  {
    title: "Bruma OS - Debian-Based Operating System",
    subtitle: "Linux Distribution | GitHub",
    description:
      "Engineered Bruma OS on Debian Testing with focus on desktop usability, package curation, and a cleaner out-of-box developer experience. Customized system behavior, tuned default tooling, and refined release scripts to create a stable, lightweight distribution that is easier to install and iterate on.",
    tags: ["Debian", "GNOME", "Live-Build"],
    links: [{ label: "GitHub", href: "https://github.com/noeljabraham/bruma-packages" }]
  },
  {
    title: "Vokabelly - German Vocabulary Learning App",
    subtitle: "Flutter | Google Play",
    description:
      "Developed and published a Flutter-based German vocabulary app for beginners on Google Play with structured learning flows and spaced-repetition-friendly sessions. Optimized app startup, lesson interaction speed, and progress persistence to improve retention and daily usage consistency.",
    tags: ["Flutter", "Riverpod", "EdTech"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.noelcore.german_words"
      }
    ]
  },
  {
    title: "Zaburb Platform",
    subtitle: "Website | Google Play | App Store",
    description:
      "Built and launched an on-demand safety and mobility platform focused on senior citizen security across web and mobile channels. Delivered core flows including service booking, payment integration, real-time status visibility, and operational dashboards to support reliable emergency and assistance response.",
    tags: ["Flutter", "Firebase", "Razorpay"],
    links: [
      { label: "Website", href: "https://zaburb.com/" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zaburb.customer&hl=en_IN"
      },
      { label: "App Store", href: "https://apps.apple.com/in/app/zaburb/id6742676344" }
    ]
  },
  {
    title: "Liver Disease Prediction App",
    subtitle: "Python | scikit-learn | Streamlit",
    description:
      "Built a machine learning web app to predict liver disease likelihood from patient medical data. Cleaned and preprocessed the dataset, trained a Random Forest classifier, and integrated the serialized model into an interactive Streamlit interface for real-time predictions with probability scoring.",
    tags: ["Python", "scikit-learn", "Streamlit"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/noeljabraham/Liver-Disease-Prediction"
      },
      {
        label: "Website",
        href: "https://liver-disease-prediction-noel.streamlit.app/"
      }
    ]
  }
];

const getPrimaryProjectLink = (links) =>
  links.find((link) => /github|source|website|web/i.test(link.label)) ?? links[0];

const getPrimaryLinkLabel = (link) =>
  link && /github|source/i.test(link.label) ? "View Source" : "View Project";

const contactItems = [
  {
    label: "Email",
    value: "noeljabraham2023@gmail.com",
    href: "mailto:noeljabraham2023@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin/noeljabraham",
    href: "https://www.linkedin.com/in/noeljabraham/"
  },
  {
    label: "GitHub",
    value: "github.com/noeljabraham",
    href: "https://github.com/noeljabraham"
  },
  {
    label: "Resume",
    value: "Download CV",
    href: resumeUrl
  }
];

const certifications = [
  "Google Cybersecurity Professional Certificate (GCPC)",
  "Certified Ethical Hacker (CEH) - Pearson",
  "Oracle Cloud Infrastructure Foundations",
  "Python Full Stack Development - QSpiders",
  "Introduction to Cybersecurity - Cisco",
  "TryHackMe - Advent of Cyber"
];

function App() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.06}s`;
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    const hero = document.querySelector(".hero.reveal");
    if (hero && window.scrollY < 40) {
      hero.classList.add("in-view");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="simple-header">
        <div className="container simple-nav">
          <a className="simple-brand" href="#home">
            Noel J Abraham
          </a>
          <nav className="simple-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero reveal" id="home">
          <div>
            {/* <div className="kicker">
              Software Engineer | AI Generalist | Cybersecurity
            </div> */}
            <h1 className="hero-title">Hi all, I'm Noel 👋</h1>
            <p className="hero-subtext">
              A passionate Full Stack Software Developer having an experience
              of building Web and Mobile applications with Flutter / Javascript
              / Reactjs / Nodejs / React Native , PHP, Python(FastApi | Flask)
              and some other cool libraries and frameworks.
            </p>

            <p className="hero-typewriter">
              And I'm also a{" "}
              <Typewriter
                text={[
                  "AI Generalist",
                  "Cybersecurity & InfoSec Enthusiast",
                  "Flutter Developer",
                  "Full-Stack Developer",
                  "Network Infrastructure Builder",
                  "Google Cybersecurity Certified Professional"
                ]}
                speed={65}
                waitTime={1400}
                deleteSpeed={35}
                className="hero-typewriter-text"
                cursorChar="_"
              />
            </p>

            <div className="hero-cta">
              <a href="#contact" className="hero-cta-btn primary">
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/noeljabraham/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/noeljabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                GitHub
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div>
            <img src="/img/image.png" alt="Noel J Abraham" />
          </div>
        </section>

        <section id="about">
          <div className="reveal">
            <BubbleText text="About" className="section-title" />
          </div>
          <p className="subtext reveal">
            I am a cross-platform Software Engineer who enjoys building products
            people actually use in the real world. I have shipped applications
            across Android, iOS, Windows, macOS, and the web, and I care deeply
            about making software both reliable and easy to maintain.
          </p>
          <p className="subtext reveal">
            My core strengths are in Flutter and native Android (Kotlin), along
            with full-stack development from frontend interfaces to backend API
            integration. I regularly work with clean architecture, CI/CD
            pipelines, and multi-platform release workflows for Google Play and
            the Apple App Store.
          </p>
          <p className="subtext reveal">
            Security is a major part of how I build. I follow secure coding and
            OWASP-aligned practices so applications are not only fast and
            scalable, but also trustworthy, auditable, and resilient in
            production.
          </p>
          <p className="subtext reveal">
            Across the stack, I am comfortable with Dart/Flutter,
            JavaScript/TypeScript, and Python, and I have hands-on experience
            with cloud platforms including AWS, GCP, and Azure. I am always
            learning, and I enjoy solving problems where product quality,
            performance, and security all matter together.
          </p>
        </section>

        <section id="experience">
          <div className="reveal">
            <BubbleText text="Experience" className="section-title" />
          </div>
          <div className="experience-timeline">
            <article className="experience-item reveal">
              <div className="experience-marker">
                <div className="experience-dot" aria-hidden="true" />
              </div>
              <div className="experience-content">
                <p className="experience-role">
                  <strong>Software Development Engineer</strong>
                </p>
                <p className="experience-company">Stesalit Systems Limited - Kolkata, India</p>
                <p className="experience-date">Sep 2024 - Present</p>
                <ul className="experience-points">
                  <li>
                    Designed and maintained production Android applications,
                    implementing clean architecture patterns and improving app
                    stability and performance.
                  </li>
                  <li>
                    Integrated RESTful APIs with token-based authentication, HTTPS
                    enforcement, and robust error handling to ensure reliable
                    client-server communication.
                  </li>
                  <li>
                    Collaborated in agile sprints, participating in code reviews,
                    sprint planning, and retrospectives to ship features on
                    schedule.
                  </li>
                  <li>
                    Documented system architecture and technical design decisions to
                    support long-term maintainability and onboarding of new team
                    members.
                  </li>
                </ul>
              </div>
            </article>

            <article className="experience-item reveal">
              <div className="experience-marker">
                <div className="experience-dot" aria-hidden="true" />
              </div>
              <div className="experience-content">
                <p className="experience-role">
                  <strong>Software Engineer Intern</strong>
                </p>
                <p className="experience-company">Zaburb Pvt Ltd - Bangalore, India</p>
                <p className="experience-date">Jun 2023 - Apr 2024</p>
                <ul className="experience-points">
                  <li>
                    Contributed to the development and testing of a location-based
                    mobile application, building features across the UI and data
                    layers.
                  </li>
                  <li>
                    Designed and implemented data flows for handling sensitive user
                    information, ensuring privacy-compliant data storage and
                    transmission.
                  </li>
                  <li>
                    Applied secure API communication patterns and mobile design best
                    practices in collaboration with a cross-functional engineering
                    team.
                  </li>
                </ul>
              </div>
            </article>

            <article className="experience-item reveal">
              <div className="experience-marker">
                <div className="experience-dot" aria-hidden="true" />
              </div>
              <div className="experience-content">
                <p className="experience-role">
                  <strong>Lead Android Developer</strong>
                </p>
                <p className="experience-company">
                  Google Developer Student Club (GDSC), AJCE - Kerala, India
                </p>
                <p className="experience-date">Sep 2023 - May 2024</p>
                <ul className="experience-points">
                  <li>
                    Led a team of Android developers to plan, build, and deliver
                    applications following industry-standard coding practices.
                  </li>
                  <li>
                    Mentored junior developers on Android architecture, Kotlin best
                    practices, and efficient use of Jetpack libraries.
                  </li>
                  <li>
                    Organized technical workshops and hands-on sessions, improving
                    team proficiency in Android development and DevOps tooling.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="projects">
          <div className="reveal">
            <BubbleText text="Projects" className="section-title" />
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => {
              const primaryLink = getPrimaryProjectLink(project.links);
              return (
              <article className="project-showcase-card reveal" key={project.title}>
                <div className="project-showcase-meta">
                  <span className="project-serial">{String(index + 1).padStart(2, "0")}</span>
                  {primaryLink ? (
                    <a
                      className="project-source-link"
                      href={primaryLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getPrimaryLinkLabel(primaryLink)}
                    </a>
                  ) : (
                    <span className="project-source-link is-muted">Private Project</span>
                  )}
                </div>
                <h3 className="project-showcase-title">{project.title}</h3>
                <p className="project-showcase-description">{project.description}</p>
                <div className="tags project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-showcase-footer">
                  <span>{project.subtitle}</span>
                  {primaryLink ? (
                    <a href={primaryLink.href} target="_blank" rel="noopener noreferrer">
                      {"->"}
                    </a>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </article>
              );
            })}
          </div>
        </section>

        <section id="certifications">
          <div className="reveal">
            <BubbleText text="Certifications" className="section-title" />
          </div>
          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <article className="certification-card reveal" key={certification}>
                <span className="certification-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="certification-text">{certification}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="contact-head reveal">
            <p className="contact-kicker">// LET'S CONNECT</p>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-intro">
              Open to software engineering, mobile, full-stack, and cloud-focused
              opportunities. Let&apos;s build secure and impactful products together.
            </p>
          </div>
          <div className="contact-links reveal">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span className="contact-link-label">{item.label}</span>
                <span className="contact-link-value">{item.value}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
