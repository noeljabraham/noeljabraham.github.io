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
