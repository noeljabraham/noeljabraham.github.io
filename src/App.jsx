import { useEffect } from "react";

const resumeUrl =
  "https://drive.google.com/file/d/1gL-2coObsURZEyCPAO6yxNGt837F7uaU/view?usp=sharing";

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
            <a
              className="btn primary"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero reveal" id="home">
          <div>
            <div className="kicker">Software - Security - Cloud</div>
            <h1>Software Engineer with a strong cybersecurity foundation</h1>
            <p>
              Building fast, secure, and reliable software - where performance
              meets protection.
            </p>

            <div className="hero-tags">
              <span className="tag">Flutter</span>
              <span className="tag">Cybersecurity</span>
              <span className="tag">Cloud Computing</span>
              <span className="tag">Mobile Development</span>
              <span className="tag">Innovation</span>
              <span className="tag">Continuous Learning</span>
              <span className="tag">Collaboration</span>
            </div>

            <p className="quote">
              "Success is not final, failure is not fatal: it is the courage to
              continue that counts." - Winston Churchill
            </p>
          </div>

          <div>
            <img src="/img/image.png" alt="Noel J Abraham" />
          </div>
        </section>

        <section id="about">
          <h2 className="section-title reveal">About</h2>
          <p className="subtext reveal">
            I am a dedicated and results-driven Computer Science Engineering
            graduate with a strong foundation in Software Engineering,
            Cybersecurity, Mobile Application Development, and Data Engineering.
          </p>
          <p className="subtext reveal">
            Currently, I work as a{" "}
            <strong>Mobile Android Developer at Stesalit Systems Limited</strong>{" "}
            in Kolkata, India, where I focus on building secure,
            high-performance mobile applications that meet modern industry
            standards.
          </p>
          <p className="subtext reveal">
            My professional experience includes developing scalable Android
            applications, ensuring secure coding practices, integrating APIs,
            and improving app performance. I also have hands-on exposure to
            cybersecurity concepts such as vulnerability assessment,
            penetration testing, and cloud-based security solutions.
          </p>
          <p className="subtext reveal">
            Committed to continuous learning and innovation, I aim to bridge
            the gap between software development and cybersecurity, creating
            impactful and resilient digital solutions. I am passionate about
            emerging technologies and aspire to contribute to projects that
            enhance digital safety and user experience.
          </p>
        </section>

        <section id="experience">
          <h2 className="section-title reveal">Experience</h2>

          <div className="card reveal">
            <p>
              <strong>Mobile Android Developer - Stesalit Systems Limited</strong>
              <br />
              Kolkata, India - Sept 2024 - Present
            </p>
            <ul>
              <li>
                Developing secure, scalable Android applications with Kotlin and
                Firebase.
              </li>
              <li>
                Focusing on performance, modular architecture, and secure API
                integrations.
              </li>
            </ul>
          </div>

          <div className="card reveal">
            <p>
              <strong>
                Mobile Application Developer Intern - Zaburb Pvt Ltd
              </strong>
              <br />
              Bangalore, India - Jun 2023 - Apr 2024
            </p>
            <ul>
              <li>
                Built accessibility-focused apps for elderly users with a
                privacy-first design approach.
              </li>
              <li>
                Integrated real-time location and improved UI/UX for smoother
                user experiences.
              </li>
            </ul>
          </div>

          <div className="card reveal">
            <p>
              <strong>Android Team Lead - GDG on Campus AJCE</strong>
              <br />
              Kerala, India - Aug 2023 - Jun 2024
            </p>
            <ul>
              <li>
                Led Android projects, mentored students, and conducted
                workshops on secure mobile development.
              </li>
              <li>
                Collaborated with team members to organize tech events and
                coding sessions.
              </li>
            </ul>
          </div>

          <div className="card reveal">
            <p>
              <strong>Coordinator - Arcane Society</strong>
              <br />
              Kerala, India - Jun 2023 - Mar 2024
            </p>
            <ul>
              <li>
                Managed cybersecurity awareness sessions and ethical hacking
                workshops.
              </li>
              <li>
                Coordinated events promoting digital safety and ethical
                computing.
              </li>
            </ul>
          </div>

          <div className="card reveal">
            <p>
              <strong>Volunteer - ACM AJCE Student Chapter</strong>
              <br />
              Kerala, India - Sep 2023 - Mar 2024
            </p>
            <ul>
              <li>
                Supported events promoting computer science and open-source
                contributions.
              </li>
              <li>
                Collaborated with peers to organize workshops and technical
                talks.
              </li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title reveal">Projects</h2>

          <div className="cards">
            <article className="card span-6 reveal">
              <div className="project-header">
                <h3>Elastic Stack SIEM Configuration and Management</h3>
                <small className="subtext">Aug 2024</small>
              </div>
              <ul className="project-list">
                <li>
                  Set up Elastic SIEM in a homelab with log collection and
                  security event monitoring.
                </li>
                <li>
                  Generated and analyzed traffic (Kali, nmap) and wrote queries
                  to investigate incidents.
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Elastic</span>
                <span className="tag">SIEM</span>
                <span className="tag">Kali</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3>ParkinCare: Deep Learning model to predict Parkinson's</h3>
                <small className="subtext">Jun 2023 - Apr 2024</small>
              </div>
              <ul className="project-list">
                <li>
                  Integrated handwriting, voice, and MRI data using
                  TensorFlow/Keras.
                </li>
                <li>Built a Python/Flask backend for processing and deployment.</li>
                <li>
                  <strong>Achievement:</strong> Received funding from APJ Abdul
                  Kalam Technological University.
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">TensorFlow</span>
                <span className="tag">Keras</span>
                <span className="tag">Flask</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3>Phishing Attack Simulator using Gophish</h3>
                <small className="subtext">Aug 2024</small>
              </div>
              <ul className="project-list">
                <li>
                  Ran phishing simulations with Gophish to improve awareness and
                  resilience.
                </li>
                <li>
                  Deployed on Railway, created templates/landing pages, and
                  analyzed campaign metrics.
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Gophish</span>
                <span className="tag">Railway</span>
                <span className="tag">Email Security</span>
              </div>
            </article>

            <article className="card span-6 reveal">
              <div className="project-header">
                <h3>QuitM8 - Addiction Relief Application</h3>
                <small className="subtext">Sep 2023 - Jan 2023</small>
              </div>
              <ul className="project-list">
                <li>
                  Designed and implemented an app to help users track specific
                  addictions.
                </li>
                <li>
                  Provided reminders, alerts, and behavior insights to support
                  better habits.
                </li>
              </ul>
              <div className="tags project-tags">
                <span className="tag">Mobile</span>
                <span className="tag">UX</span>
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
