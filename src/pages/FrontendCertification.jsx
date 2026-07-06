import { Link } from "react-router-dom";

export default function FrontendCertification() {
  return (
    <div className="hp">
      <section className="hp-sec">
        <div className="hp-wrap">

          <Link to="/" className="hp-btn hp-btn-ghost">
            ← Back to Portfolio
          </Link>

          <div style={{ marginTop: "2rem" }}>
            <p className="hp-eyebrow">// certification</p>

            <h1 className="hp-h2">
              Front-End Web Development
            </h1>

            <p className="hp-proj-meta">
              ETEC Center • December 2025
            </p>

            <p className="hp-about-text">
              Successfully completed front-end web development training
              covering HTML5, CSS3, Bootstrap, JavaScript, and React.
              The program focused on building responsive websites,
              reusable components, and modern web applications.
            </p>

            <div className="hp-cta-row">

              <a
                className="hp-btn hp-btn-primary"
                href="/certificates/frontend-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 View Certificate
              </a>

              <a
                className="hp-btn hp-btn-ghost"
                href="/certificates/frontend-certificate.jpg"
                download
              >
                ⬇ Download Certificate
              </a>

            </div>

            <ul className="hp-chips" style={{ marginTop: "2rem" }}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>

          </div>

        </div>
      </section>
    </div>
  );
}