import { useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { BubbleText } from "@/components/ui/bubble-text";
import { TextScramble } from "@/components/ui/text-scramble";
import { SlideTabs } from "@/components/ui/slide-tabs";

const resumeUrl =
  "https://drive.google.com/file/d/1gL-2coObsURZEyCPAO6yxNGt837F7uaU/view?usp=sharing";

const rotatingQuotes = [
  '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
  '"First, solve the problem. Then, write the code." - John Johnson',
  '"The best way to predict the future is to invent it." - Alan Kay',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
  '"It always seems impossible until it is done." - Nelson Mandela',
  '"Security is not a product, but a process." - Bruce Schneier'
];

const defaultProjectImage = "/assets/img/image.png";

const projects = [
  {
    title: "GAIL India Fleet App - Government Project",
    subtitle: "Flutter | iOS TestFlight Beta",
    image: "/assets/proj/gail.jpg",
    description:
      "Built a Flutter fleet operations app for monitoring CNG logistics, station activity, and route movement.",
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
    image: "/assets/proj/agartala.jpg",
    description:
      "Developed a Flutter platform for municipal tax surveys and digital field data collection.",
    tags: ["Flutter", "GeoServer", "Isar"],
    links: []
  },
  {
    title: "Bruma OS - Debian-Based Operating System",
    subtitle: "Linux Distribution | GitHub",
    image: "/assets/proj/burma.png",
    description:
      "Built Bruma OS on Debian Testing with focus on customization and desktop experience refinement.",
    tags: ["Debian", "GNOME", "Live-Build"],
    links: [{ label: "GitHub", href: "https://github.com/noeljabraham/bruma-packages" }]
  },
  {
    title: "Vokabelly - German Vocabulary Learning App",
    subtitle: "Flutter | Google Play",
    image: "/assets/proj/vokabelly.png",
    description:
      "Developed and published a Flutter-based German vocabulary app for beginners on Google Play.",
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
    image: "/assets/proj/zaburb.webp",
    description:
      "Developed and launched an on-demand safety and mobility platform focused on senior citizen security.",
    tags: ["Flutter", "Firebase", "Razorpay"],
    links: [
      { label: "Website", href: "https://zaburb.com/" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zaburb.customer&hl=en_IN"
      },
      { label: "App Store", href: "https://apps.apple.com/in/app/zaburb/id6742676344" }
    ]
  }
];

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [theme, setTheme] = useState(getPreferredTheme);

  const handleResumeClick = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header>
        <div className="container nav">
          <div className="logo" aria-label="logo">
            <span className="dot" aria-hidden="true"></span>
            <TextScramble as="span" className="logo-scramble" duration={1} speed={0.03}>
              Noel J Abraham
            </TextScramble>
          </div>
          <nav>
            <SlideTabs />
          </nav>
          <div className="nav-actions">
            <Button
              onClick={handleResumeClick}
              className="min-w-[180px]"
              aria-label="Download Resume"
            >
              Download Resume
            </Button>
            <button
              type="button"
              onClick={handleThemeToggle}
              className={`theme-switch ${theme === "dark" ? "is-dark" : ""}`}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              aria-pressed={theme === "dark"}
            >
              <span className="theme-switch-track" aria-hidden="true">
                <span className="theme-switch-thumb"></span>
              </span>
              <span className="theme-switch-text">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
            </button>
          </div>
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
              A passionate Full Stack Software Developer 🚀 having an experience
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

            <p className="quote-blur">
              <BlurTextEffect className="quote-blur-text">
                {rotatingQuotes[quoteIndex]}
              </BlurTextEffect>
            </p>
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
            {projects.map((project) => (
              <article className="project-showcase-card reveal" key={project.title}>
                <div className="project-media-wrap">
                  <img
                    src={project.image || defaultProjectImage}
                    alt={`${project.title} preview`}
                    className="project-media"
                  />
                </div>
                <h3 className="project-showcase-title">{project.title}</h3>
                <p className="project-showcase-subtitle">{project.subtitle}</p>
                <p className="project-showcase-description">{project.description}</p>

                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="tags project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="reveal">
            <BubbleText text="Contact" className="section-title" />
          </div>
          <p className="subtext reveal">Connect with me on:</p>
          <div className="socials reveal">
            <a
              href="https://github.com/noeljabraham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/noel-j-abraham-69412b1b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a href="mailto:noeljabraham2023@gmail.com" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                alt="Email"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
