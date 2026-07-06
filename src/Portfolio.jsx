import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Terminal,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Shield,
  Code2,
  Layers,
  Cpu,
} from "lucide-react";
// Your face photo — swap src/assets/hero.png for your selfie (same filename).
import heroImg from "./assets/hero.png";


/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const STACK = [
  { label: "frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { label: "backend", icon: Layers, items: ["Laravel", "PHP", "MySQL", "phpMyAdmin"] },
  { label: "Data Structure", icon: Shield, items: ["Link List", "Tree", "Queue", "Stack", "Graph"] },
  { label: "tools", icon: Cpu, items: ["Git & GitHub", "Figma", "Linux / WSL", "VMware", "Packet Tracer"] },
];

const FEATURED = {
  tag: "full-stack · laravel",
  title: "KhmerRice",
  meta: "CS262 team project · 8 engineers",
  desc:
    "A Cambodian rice-market web app for browsing varieties and tracking prices. I built the variety filtering, AJAX-powered search, paginated market news, and the Bootstrap modal flows on a Laravel + MySQL backend.",
  stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
};

const PROJECTS = [
  {
    tag: "analysis · systems",
    title: "Gym System Analysis",
    meta: "CS233 team project · 8 engineers",
    desc:
      "A systems-analysis study of a small gym's paper-based workflow. I modeled the current process as BPMN diagrams in Camunda, then designed the context and level-0/1 DFDs for a proposed digital system with QR check-in and an analytics dashboard.",
    stack: ["BPMN", "DFD", "Camunda", "Fishbone"],
  },
  {
    tag: "networking · labs",
    title: "Routed Network Labs",
    meta: "Cisco Packet Tracer",
    desc:
      "Multi-router topologies configured from the CLI — single/multi-area OSPF, NAT/PAT, access control lists, and SSH — written up as formal lab reports.",
    stack: ["Cisco", "OSPF", "NAT", "ACL"],
  },
  {
    tag: "design · ux",
    title: "SleepTrack",
    meta: "Mobile app · in progress",
    desc:
      "A sleep-tracking app I'm designing in Figma — building out keyframed button animations and linking screens into a navigable prototype. Still a work in progress.",
    stack: ["Figma", "Prototyping", "UI/UX"],
  },
  {
    tag: "hobby · ctf . extra interest besides programming",
    title: "CTF Challenges",
    meta: "picoCTF · MPTC · for fun",
    desc:
      "A hobby on the side that keeps my problem-solving sharp — working through cryptography, web, OSINT, and forensics puzzles in my spare time.",
    stack: ["Cryptography", "Web", "OSINT"],
  },
];

const TIMELINE = [
  {
    kind: "study",
    when: "2024 — now",
    title: "BSc Computer Science",
    place: "Paragon International University",
    note: "Sophomore. Coursework spanning data structures, applied statistics, digital logic, and computer networking.",
  },
  {
    kind: "train",
    when: "Certificate",
    title: "Security & Networking Foundations",
    place: "Salacyber",
    note: "Foundations of security and networking, plus IT-system essentials.",
  },
  {
    kind: "train",
    when: "Certificate",
    title: "Java & Front-End Web Development",
    place: "ETEC Center",
    note: "Programming fundamentals and front-end build skills.",
  },
  {
    kind: "study",
    when: "2024",
    title: "High School Graduate",
    place: "BELTEI International School",
    note: "Active in public speaking, Khmer debate, and English writing — competing in both languages.",
  },
];

const NAV = [
  ["work", "Work"],
  ["stack", "Stack"],
  ["about", "About"],
  ["path", "Path"],
  ["contact", "Contact"],
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function Reveal({ children, delay = 0, as = "div", className = "" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVis(true);
      return;
    }
    const el = ref.current;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          ob.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (el) ob.observe(el);
    return () => ob.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(20px)",
        transition: "opacity .7s cubic-bezier(.2,.6,.2,1), transform .7s cubic-bezier(.2,.6,.2,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const FINAL = "flag{software_engineer}";
  const [flag, setFlag] = useState(FINAL);
  const [scrolled, setScrolled] = useState(false);

  // hero flag "decrypt"
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setFlag(FINAL);
      return;
    }
    const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const revealed = Math.floor(frame / 2);
      let out = "";
      for (let i = 0; i < FINAL.length; i++) {
        const c = FINAL[i];
        if (i < revealed || c === "{" || c === "}") out += c;
        else out += pool[Math.floor(Math.random() * pool.length)];
      }
      setFlag(out);
      if (revealed >= FINAL.length) {
        clearInterval(id);
        setFlag(FINAL);
      }
    }, 45);
    return () => clearInterval(id);
  }, []);

  // nav shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hp">
      {/* <style>{CSS}</style> */}
      <div className="hp-grid" aria-hidden="true" />

      {/* NAV */}
      <header className={`hp-nav ${scrolled ? "is-stuck" : ""}`}>
        <div className="hp-wrap hp-nav-inner">
          <button className="hp-logo" onClick={() => scrollTo("top")}>
            <Terminal size={16} strokeWidth={2.4} />
            <span>HOUR</span>
            <i className="hp-cursor" />
          </button>
          <nav className="hp-links">
            {NAV.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hp-link">
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hp-hero">
        <div className="hp-wrap">
          {/* your face — circular, top-right */}
          <img src={heroImg} alt="Chhayhour Ly" className="hp-hero-photo" />

          <Reveal>
            <p className="hp-prompt">
              <span className="hp-amber">$</span> whoami
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="hp-name">
              Chhayhour <span className="hp-last">Ly</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="hp-flagline">
              <span className="hp-amber">flag</span>
              <span className="hp-brace">{"{"}</span>
              <span className="hp-flag">{flag.slice(5, -1)}</span>
              <span className="hp-brace">{"}"}</span>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="hp-lede">
              I'm a software engineer who builds web applications end to end — React on the surface, Laravel
              underneath. On the side, capture-the-flag challenges keep my problem-solving sharp.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hp-cta-row">
              <a className="hp-btn hp-btn-primary" href="#work" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>
                View work <ArrowUpRight size={16} strokeWidth={2.4} />
              </a>
              <a className="hp-btn hp-btn-ghost" href="mailto:baska7gzihkara71@gmail.com">
                <Mail size={15} strokeWidth={2.2} /> Get in touch
              </a>
              <span className="hp-status">
                <i className="hp-dot" /> Open to internships
              </span>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="hp-stats">
              <div>
                <dt>location</dt>
                <dd>Phnom Penh, KH</dd>
              </div>
              <div>
                <dt>studying</dt>
                <dd>B.CS · Paragon Univ.</dd>
              </div>
              <div>
                <dt>focus</dt>
                <dd>Full-stack web</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="hp-sec">
        <div className="hp-wrap">
          <Reveal>
            <div className="hp-sec-head">
              <p className="hp-eyebrow">// selected work</p>
              <h2 className="hp-h2">Things I've shipped and solved</h2>
            </div>
          </Reveal>

          {/* featured */}
          {/* <Reveal delay={80}>
            <article className="hp-feature"> */}
            <Reveal delay={80}>
  <Link
    to="/projects/khmerrice"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <article className="hp-feature">
              <div className="hp-feature-body">
                <span className="hp-tag">{FEATURED.tag}</span>
                <h3 className="hp-proj-title">{FEATURED.title}</h3>
                <p className="hp-proj-meta">{FEATURED.meta}</p>
                <p className="hp-proj-desc">{FEATURED.desc}</p>
                <ul className="hp-chips">
                  {FEATURED.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="hp-feature-aside" aria-hidden="true">
                <pre className="hp-pre hp-pre-dim">
{`GET /api/rice?variety=jasmine
> 200 OK · 14 results
> filtered, sorted, paged`}
                </pre>
              </div> */}
              {/* <div className="hp-feature-aside">
  <img
    src="/images/khmerrice/1.png"
    alt="KhmerRice Homepage"
    className="hp-feature-img"
  />
</div> */}
<div className="hp-feature-aside">
  <img
    src="/images/khmerrice/1.png"
    alt="KhmerRice"
    className="hp-feature-img"
  />
</div>
            </article>
            </Link>
          </Reveal>

          {/* grid */}
          <div className="hp-proj-grid">
            {/* {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={60 + i * 70}>
                <article className="hp-proj">
                  <div className="hp-proj-top">
                    <span className="hp-tag">{p.tag}</span>
                    <ArrowUpRight className="hp-proj-arrow" size={18} strokeWidth={2} />
                  </div>
                  <h3 className="hp-proj-title">{p.title}</h3>
                  <p className="hp-proj-meta">{p.meta}</p>
                  <p className="hp-proj-desc">{p.desc}</p>
                  <ul className="hp-chips">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))} */}
            {PROJECTS.map((p, i) => (
  <Reveal key={p.title} delay={60 + i * 70}>
    {p.title === "Gym System Analysis" ? (
      <Link
        to="/projects/gym-system-analysis"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <article className="hp-proj">
          <div className="hp-proj-top">
            <span className="hp-tag">{p.tag}</span>
            <ArrowUpRight className="hp-proj-arrow" size={18} strokeWidth={2} />
          </div>

          <h3 className="hp-proj-title">{p.title}</h3>
          <p className="hp-proj-meta">{p.meta}</p>
          <p className="hp-proj-desc">{p.desc}</p>

          <ul className="hp-chips">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>
      </Link>
    ) : (
      <article className="hp-proj">
        <div className="hp-proj-top">
          <span className="hp-tag">{p.tag}</span>
          <ArrowUpRight className="hp-proj-arrow" size={18} strokeWidth={2} />
        </div>

        <h3 className="hp-proj-title">{p.title}</h3>
        <p className="hp-proj-meta">{p.meta}</p>
        <p className="hp-proj-desc">{p.desc}</p>

        <ul className="hp-chips">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </article>
    )}
  </Reveal>
))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="hp-sec">
        <div className="hp-wrap">
          <Reveal>
            <div className="hp-sec-head">
              <p className="hp-eyebrow">// toolkit</p>
              <h2 className="hp-h2">What I reach for</h2>
            </div>
          </Reveal>
          <div className="hp-stack-grid">
            {STACK.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.label} delay={i * 80}>
                  <div className="hp-stack-card">
                    <div className="hp-stack-head">
                      <Icon size={16} strokeWidth={2.2} />
                      <span>{g.label}</span>
                    </div>
                    <ul className="hp-stack-list">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="hp-sec">
        <div className="hp-wrap hp-about">
          <Reveal className="hp-about-main">
            <p className="hp-eyebrow">// about</p>
            <p className="hp-about-text">
              I'm a computer science sophomore in Phnom Penh focused on software engineering — I like the whole
              stack, from designing an interface to wiring up the backend and getting it to actually run. Most of
              my work comes from coursework and team projects: rice-market web apps, system-analysis studies, and
              network labs.
            </p>
            <p className="hp-about-text">
              Capture-the-flag is a hobby I keep on the side to stay sharp. I work in both Khmer and English, and
              I care about shipping things that run rather than demos that only look the part.
            </p>
            <p className="hp-about-text">
             I enjoy working with others to turn ideas into practical solutions. I believe discipline, clear communication, and teamwork are just as important as technical skills. When facing challenges, I like to analyze the problem, discuss different approaches, and find solutions that are efficient and easy for everyone on the team to understand and maintain. I'm always willing to learn from others, share what I know, and contribute to building projects that are reliable and meaningful.
            </p>
          </Reveal>
          <Reveal className="hp-about-side" delay={120}>
            <div className="hp-card-mono">
              <p className="hp-mono-head">~/profile.json</p>
              <pre className="hp-pre">
{`{
  "role": "software engineer",
  "based": "Phnom Penh 🇰🇭",
  "langs": ["Khmer", "English"],
  "builds": "full-stack web",
  "hobby": "CTF, for fun",
  "status": "available"
}`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PATH */}
      <section id="path" className="hp-sec">
        <div className="hp-wrap">
          <Reveal>
            <div className="hp-sec-head">
              <p className="hp-eyebrow">// education + training</p>
              <h2 className="hp-h2">How I got here</h2>
            </div>
          </Reveal>
          <ol className="hp-timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} as="li" delay={i * 70} className="hp-tl-item">
                <span className={`hp-tl-node ${t.kind === "study" ? "is-study" : ""}`} aria-hidden="true" />
                <div className="hp-tl-body">
                  <div className="hp-tl-top">
                    {/* <h3 className="hp-tl-title">{t.title}</h3> */}
                    {t.title === "Java & Front-End Web Development" ? (
  <Link
    to="/certificates/frontend"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <h3 className="hp-tl-title">{t.title}</h3>
  </Link>
) : (
  <h3 className="hp-tl-title">{t.title}</h3>
)}
                    <span className="hp-tl-when">{t.when}</span>
                  </div>
                  <p className="hp-tl-place">{t.place}</p>
                  {/* <p className="hp-tl-note">{t.note}</p> */}
                  {t.title === "Java & Front-End Web Development" && (
  <div
    style={{
      display: "flex",
      gap: "12px",
      marginTop: "16px",
      flexWrap: "wrap",
    }}
  >
    <Link to="/certificates/java" className="hp-btn hp-btn-primary">
       Java Certificate
    </Link>

    <Link to="/certificates/frontend" className="hp-btn hp-btn-ghost">
       Front-End Certificate
    </Link>

  
  </div>
)}

{t.title === "Security & Networking Foundations" && (
  <div
    style={{
      display: "flex",
      gap: "12px",
      marginTop: "16px",
      flexWrap: "wrap",
    }}
  >
    <Link
      to="/certificates/salacyber"
      className="hp-btn hp-btn-primary"
    >
       SALACYBER Certificate
    </Link>
  </div>
)}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="hp-sec hp-contact">
        <div className="hp-wrap">
          <Reveal>
            <p className="hp-eyebrow">// contact</p>
            <h2 className="hp-contact-head">
              Let's build something <span className="hp-amber">worth shipping</span>.
            </h2>
            <p className="hp-contact-sub">
              Open to internships, collaboration, and good engineering problems. The fastest way to reach me is
              email.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="hp-contact-grid">
              <a className="hp-contact-card" href="mailto:baska7gzihkara71@gmail.com">
                <Mail size={18} strokeWidth={2} />
                <span className="hp-contact-label">email</span>
                <span className="hp-contact-val">baska7gzihkara71@gmail.com</span>
              </a>
              <a className="hp-contact-card" href="tel:+85578800234">
                <Phone size={18} strokeWidth={2} />
                <span className="hp-contact-label">phone</span>
                <span className="hp-contact-val">+855 78 800 234</span>
              </a>
              <a className="hp-contact-card" href="https://github.com/blotalt" target="_blank" rel="noreferrer">
                <ExternalLink size={18} strokeWidth={2} />
                <span className="hp-contact-label">github</span>
                <span className="hp-contact-val">github.com/blotalt</span>
              </a>
              <div className="hp-contact-card hp-contact-static">
                <MapPin size={18} strokeWidth={2} />
                <span className="hp-contact-label">based in</span>
                <span className="hp-contact-val">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="hp-footer">
        <div className="hp-wrap hp-footer-inner">
          <span>© {new Date().getFullYear()} Chhayhour Ly</span>
          <span className="hp-foot-mono">designed &amp; built · Phnom Penh</span>
        </div>
      </footer>
    </div>
  );
}

