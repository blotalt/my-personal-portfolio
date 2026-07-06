import { Link } from "react-router-dom";
import { useState } from "react";

const screenshots = [
  "/images/khmerrice/1.png",
  "/images/khmerrice/2.png",
  "/images/khmerrice/3.png",
  "/images/khmerrice/4.png",
  "/images/khmerrice/5.png",
  "/images/khmerrice/6.png",
  "/images/khmerrice/7.png",
  "/images/khmerrice/8.png",
  "/images/khmerrice/9.png",
];

export default function KhmerRice() {
    const [current, setCurrent] = useState(0);

const nextImage = () => {
  setCurrent((current + 1) % screenshots.length);
};

const prevImage = () => {
  setCurrent((current - 1 + screenshots.length) % screenshots.length);
};
  return (
    <div className="hp">
      <section className="hp-sec">
        <div className="hp-wrap">

          <Link to="/" className="hp-btn hp-btn-ghost">
            ← Back to Portfolio
          </Link>

          <div style={{ marginTop: "2rem" }}>
            <p className="hp-eyebrow">// full-stack web application</p>

            <h1 className="hp-h2">KhmerRice</h1>

            <p className="hp-proj-meta">
              CS262 Team Project • 8 Engineers
            </p>

            <p className="hp-about-text">
              KhmerRice is a Laravel + MySQL web application designed to help
              users explore Cambodian rice varieties, monitor market prices,
              browse agricultural news, and learn about Cambodia's rice
              industry. I contributed to the variety filtering system,
              AJAX-powered search, Bootstrap modal interactions, and backend
              database integration.
            </p>

            <div className="hp-cta-row">

              <a
                className="hp-btn hp-btn-primary"
                href="https://github.com/blotalt/cs262mtgroup5.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 View GitHub
              </a>

            </div>

            <ul className="hp-chips" style={{ marginTop: "2rem" }}>
              <li>Laravel</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
              <li>AJAX</li>
            </ul>

            {/* <div className="hp-gallery">

              {screenshots.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`KhmerRice Screenshot ${i + 1}`}
                />
              ))}

            </div> */}
            <div className="hp-carousel">

  <img
    src={screenshots[current]}
    alt={`Screenshot ${current + 1}`}
    className="hp-carousel-main"
  />

  <div className="hp-carousel-controls">

    <button
      className="hp-btn hp-btn-ghost"
      onClick={prevImage}
    >
      ← Previous
    </button>

    <span>
      {current + 1} / {screenshots.length}
    </span>

    <button
      className="hp-btn hp-btn-primary"
      onClick={nextImage}
    >
      Next →
    </button>

  </div>

  <div className="hp-thumbnails">

    {screenshots.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Thumbnail ${index + 1}`}
        className={current === index ? "hp-thumb active" : "hp-thumb"}
        onClick={() => setCurrent(index)}
      />
    ))}

  </div>

</div>

          </div>

        </div>
      </section>
    </div>
  );
}