import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/projects/gym-system-analysis" className="block">
        <div className="project-card">
          <span className="category">analysis · systems</span>

          <h2>Gym System Analysis</h2>

          <p className="subtitle">
            CS233 team project · 8 engineers
          </p>

          <p>
            A systems-analysis study of a small gym's paper-based workflow.
            I modeled the current process as BPMN diagrams in Camunda,
            then designed the context and level-0/1 DFDs for a proposed
            digital system with QR check-in and an analytics dashboard.
          </p>

          <div className="tags">
            <span>BPMN</span>
            <span>DFD</span>
            <span>Camunda</span>
            <span>Fishbone</span>
          </div>
        </div>
      </Link>
    </div>
  );
}