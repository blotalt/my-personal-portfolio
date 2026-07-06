import { Link } from "react-router-dom";

export default function JavaCertification() {
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
              Java & Database Development
            </h1>

            <p className="hp-proj-meta">
              ETEC Center • December 2025
            </p>

            <p className="hp-about-text">
              Completed professional training in Java programming,
              Advanced Java, MySQL database development, JasperReports
              (iReport), and project-based software development.
              The course emphasized object-oriented programming,
              database connectivity, CRUD applications, and desktop
              software development using Java.
            </p>

            <div className="hp-cta-row">

              <a
                className="hp-btn hp-btn-primary"
                href="/certificates/java-mysql-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 View Certificate
              </a>

              <a
                className="hp-btn hp-btn-ghost"
                href="/certificates/java-mysql-certificate.jpg"
                download
              >
                ⬇ Download Certificate
              </a>

            </div>

            <ul className="hp-chips" style={{ marginTop: "2rem" }}>
              <li>Java</li>
              <li>Advanced Java</li>
              <li>MySQL</li>
              <li>JasperReports</li>
              <li>Desktop Development</li>
            </ul>

          </div>

        </div>
      </section>
    </div>
  );
}