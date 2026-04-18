import { useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { Button } from "@/components/ui/button";

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

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleResumeClick = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

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
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header>
        <div className="container nav">
          <div className="logo" aria-label="logo">
            <span className="dot" aria-hidden="true"></span>
            <span>Noel J Abraham</span>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="nav-actions">
            <Button
              onClick={handleResumeClick}
              className="min-w-[180px]"
              aria-label="Download Resume"
            >
              Download Resume
            </Button>
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

            <p className="quote">
              {rotatingQuotes[quoteIndex]}
            </p>
          </div>

          <div>
            <img src="/img/image.png" alt="Noel J Abraham" />
          </div>
        </section>

        <section id="about">
          <h2 className="section-title reveal">About</h2>
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
          <h2 className="section-title reveal">Experience</h2>

          <div className="card reveal">
            <p>
              <strong>Software Development Engineer</strong>
              <br />
              Stesalit Systems Limited - Kolkata, India
              <br />
              Sep 2024 - Present
            </p>
            <ul>
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

          <div className="card reveal">
            <p>
              <strong>Software Engineer Intern</strong>
              <br />
              Zaburb Pvt Ltd - Bangalore, India
              <br />
              Jun 2023 - Apr 2024
            </p>
            <ul>
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

          <div className="card reveal">
            <p>
              <strong>Lead Android Developer</strong>
              <br />
              Google Developer Student Club (GDSC), AJCE - Kerala, India
              <br />
              Sep 2023 - May 2024
            </p>
            <ul>
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
        </section>

        <section id="projects">
          <h2 className="section-title reveal">Projects</h2>

          <div className="cards">
            <article className="card span-6 reveal">
              <div className="project-header">
                <h3 className="project-title">
                  GAIL India Fleet App - Government Project
                </h3>
                <small className="subtext">Flutter | iOS TestFlight Beta</small>
              </div>
              <ul className="project-list">
                <li>
                  Built a Flutter fleet operations app for monitoring CNG
                  logistics, station activity, and route movement.
                </li>
                <li>
                  Implemented secure role-based workflows and live
                  map-visualization for multi-level operations teams.
                </li>
                <li>
                  Added APIs, notifications, and report exports for real-time
                  field and management visibility. TestFlight:{" "}
                  <a
                    href="https://testflight.apple.com/v1/invite/28da93f13e4847af85d09db7b60be05d835990509a7941c5acc944083b42c0f119303e0cf?ct=K2J53QC4V2&advp=10000&platform=ios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Link
                  </a>
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Flutter</span>
                <span className="tag">Google Maps</span>
                <span className="tag">GovTech</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3 className="project-title">
                  Agartala Property Tax Platform - e-Governance
                </h3>
                <small className="subtext">Flutter | GIS | Offline-First</small>
              </div>
              <ul className="project-list">
                <li>
                  Developed a Flutter platform for municipal tax surveys and
                  digital field data collection.
                </li>
                <li>
                  Integrated GIS maps (Google Maps + GeoServer) with offline
                  sync using Isar for low-connectivity workflows.
                </li>
                <li>
                  Added geo-tagged evidence capture, secure form flows, and
                  Excel-based admin reporting modules.
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Flutter</span>
                <span className="tag">GeoServer</span>
                <span className="tag">Isar</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3 className="project-title">
                  Bruma OS - Debian-Based Operating System
                </h3>
                <small className="subtext">Linux Distribution | GitHub</small>
              </div>
              <ul className="project-list">
                <li>
                  Built Bruma OS on Debian Testing with focus on customization
                  and desktop experience refinement.
                </li>
                <li>
                  Created a GNOME-centric UI with custom themes, wallpapers, and
                  branded system identity components.
                </li>
                <li>
                  Automated reproducible ISO builds with `live-build` and
                  maintained repositories on GitHub.
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Debian</span>
                <span className="tag">GNOME</span>
                <span className="tag">Live-Build</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3 className="project-title">
                  Vokabelly - German Vocabulary Learning App
                </h3>
                <small className="subtext">Flutter | Google Play</small>
              </div>
              <ul className="project-list">
                <li>
                  Developed and published a Flutter-based German vocabulary app
                  for beginners on Google Play.
                </li>
                <li>
                  Built lesson-based learning flow with TTS, streak reminders,
                  and progress tracking.
                </li>
                <li>
                  Implemented Riverpod-based state management, analytics charts,
                  and reusable UI components. Google Play:{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.noelcore.german_words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Link
                  </a>
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Flutter</span>
                <span className="tag">Riverpod</span>
                <span className="tag">EdTech</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3 className="project-title">Zaburb Platform</h3>
                <small className="subtext">
                  Website | Google Play | App Store
                </small>
              </div>
              <ul className="project-list">
                <li>
                  Developed and launched an on-demand safety and mobility
                  platform focused on senior citizen security.
                </li>
                <li>
                  Built end-to-end cross-platform mobile apps with Flutter and
                  integrated Firebase + Razorpay.
                </li>
                <li>
                  Managed website + app releases across Web, Google Play, and
                  Apple App Store. Links:{" "}
                  <a
                    href="https://zaburb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Link
                  </a>{" "}
                  | Google Play:{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zaburb.customer&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Link
                  </a>{" "}
                  | App Store:{" "}
                  <a
                    href="https://apps.apple.com/in/app/zaburb/id6742676344"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Link
                  </a>
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Flutter</span>
                <span className="tag">Firebase</span>
                <span className="tag">Razorpay</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title reveal">Contact</h2>
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
