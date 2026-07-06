import { Link } from "react-router-dom";

export default function SalacyberCertification() {
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
              SALACYBER Network & Cybersecurity Foundation
            </h1>

            <p className="hp-proj-meta">
              SALACYBER • October 2025
            </p>

            <p className="hp-about-text">
              Successfully completed the SALACYBER Network and Cybersecurity
              Foundation certification program. The course covered fundamental
              networking concepts, cybersecurity principles, common attack
              vectors, security best practices, and defensive techniques,
              providing a strong foundation for future cybersecurity studies
              and hands-on security practice.
            </p>

            <div className="hp-cta-row">

              <a
                className="hp-btn hp-btn-primary"
                href="/certificates/salacyber-foundation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 View Certificate
              </a>

              <a
                className="hp-btn hp-btn-ghost"
                href="/certificates/salacyber-foundation.pdf"
                download
              >
                ⬇ Download Certificate
              </a>

            </div>

            <ul className="hp-chips" style={{ marginTop: "2rem" }}>
              <li>Cybersecurity</li>
              <li>Networking</li>
              <li>Security Fundamentals</li>
              <li>Threat Awareness</li>
              <li>Defensive Security</li>
            </ul>

          </div>

        </div>
      </section>
    </div>
  );
}