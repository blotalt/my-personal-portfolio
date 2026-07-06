import { Link } from "react-router-dom";

export default function GymSystemAnalysis() {
  return (
    <div className="hp">
      <section className="hp-sec">
        <div className="hp-wrap">

          <Link to="/" className="hp-btn hp-btn-ghost">
            ← Back to Portfolio
          </Link>

          <div style={{ marginTop: "2rem" }}>
            <p className="hp-eyebrow">// case study</p>

            <h1 className="hp-h2">Gym System Analysis</h1>

            <p className="hp-proj-meta">
              CS233 Team Project • 8 Engineers
            </p>

            <p className="hp-about-text">
              A systems-analysis study of a small gym's paper-based workflow.
              I analyzed the current process using BPMN in Camunda and designed
              Context, Level-0, and Level-1 DFDs for a proposed digital gym
              management system with QR check-in and an analytics dashboard.
            </p>

            <div className="hp-cta-row">

              <a
                className="hp-btn hp-btn-primary"
                href="/pdf/CS233-Group7_ [STUDY_TITLE_ GYM].pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 View Report
              </a>

              <a
                className="hp-btn hp-btn-ghost"
                href="/pdf/CS233-Group7_ [STUDY_TITLE_ GYM].pdf"
                download
              >
                ⬇ Download PDF
              </a>

            </div>

            <ul className="hp-chips" style={{ marginTop: "2rem" }}>
              <li>BPMN</li>
              <li>DFD</li>
              <li>Camunda</li>
              <li>Fishbone</li>
            </ul>

          </div>

        </div>
      </section>
    </div>
  );
}