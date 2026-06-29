import { useState, useEffect, useRef } from "react";
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

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const STACK = [
  { label: "frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { label: "backend", icon: Layers, items: ["Laravel", "PHP", "MySQL", "phpMyAdmin", "REST APIs"] },
  { label: "security", icon: Shield, items: ["CTF", "Cryptography", "OSINT", "Networking", "Kali Linux"] },
  { label: "tools", icon: Cpu, items: ["Git & GitHub", "Figma", "Linux / WSL", "VMware", "Packet Tracer"] },
];

const FEATURED = {
  tag: "full-stack · laravel",
  title: "KhmerRice",
  meta: "CS262 team project · 8 engineers",
  desc:
    "A Cambodian rice-market web app for browsing varieties and tracking prices. I built the variety filtering, AJAX-powered search, paginated market news, and the Bootstrap modal flows on a Laravel + MySQL backend.",
  stack: ["Laravel", "PHP", "MySQL", "AJAX", "Bootstrap"],
};

const PROJECTS = [
  {
    tag: "web · laravel",
    title: "Feane Restaurant",
    meta: "Course assignment · solo",
    desc:
      "A small solo assignment where I took a static restaurant template to a working application — custom authentication, image-upload CRUD for the menu, and a table-booking feature.",
    stack: ["Laravel", "PHP", "Auth", "CRUD"],
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
    tag: "hobby · ctf",
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
  ["about", "About"],
  ["work", "Work"],
  ["stack", "Stack"],
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
      <style>{CSS}</style>
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

      {/* ABOUT */}
      <section id="about" className="hp-sec">
        <div className="hp-wrap hp-about">
          <Reveal className="hp-about-main">
            <p className="hp-eyebrow">// about</p>
            <p className="hp-about-text">
              I'm a computer science sophomore in Phnom Penh focused on software engineering — I like the whole
              stack, from designing an interface to wiring up the backend and getting it to actually run. Most of
              my work comes from coursework and team projects: rice-market web apps, restaurant systems, and
              network labs.
            </p>
            <p className="hp-about-text">
              Capture-the-flag is a hobby I keep on the side to stay sharp. I work in both Khmer and English, and
              I care about shipping things that run rather than demos that only look the part.
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
          <Reveal delay={80}>
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
              <div className="hp-feature-aside" aria-hidden="true">
                <pre className="hp-pre hp-pre-dim">
{`GET /api/rice?variety=jasmine
> 200 OK · 14 results
> filtered, sorted, paged`}
                </pre>
              </div>
            </article>
          </Reveal>

          {/* grid */}
          <div className="hp-proj-grid">
            {PROJECTS.map((p, i) => (
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
                    <h3 className="hp-tl-title">{t.title}</h3>
                    <span className="hp-tl-when">{t.when}</span>
                  </div>
                  <p className="hp-tl-place">{t.place}</p>
                  <p className="hp-tl-note">{t.note}</p>
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
             <a className="hp-contact-card" href="https://github.com/blotalt" target="_blank" rel="noreferrer"></a>
              <a className="hp-contact-card" href="#" target="_blank" rel="noreferrer">
              <ExternalLink size={18} strokeWidth={2} />
                <span className="hp-c ontact-label">github</span>
                <span className="hp-contact-val">add your handle →</span>
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

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');

.hp{
  --bg:#0E1117; --bg2:#12161D; --panel:#161B23; --panel2:#1A202A;
  --line:#242C37; --line-soft:#1D232C;
  --text:#E7EDF3; --dim:#9AA7B4; --faint:#5E6B77;
  --amber:#FFB454; --amber-soft:rgba(255,180,84,.10); --amber-line:rgba(255,180,84,.32);
  --green:#5BD17A;
  --sans:'Inter',system-ui,sans-serif;
  --disp:'Space Grotesk',system-ui,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
  position:relative; background:var(--bg); color:var(--text);
  font-family:var(--sans); line-height:1.6; min-height:100vh;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
.hp *{box-sizing:border-box}
.hp ::selection{background:var(--amber);color:#0E1117}

.hp-grid{
  position:fixed; inset:0; pointer-events:none; z-index:0;
  background-image:
    linear-gradient(var(--line-soft) 1px,transparent 1px),
    linear-gradient(90deg,var(--line-soft) 1px,transparent 1px);
  background-size:64px 64px;
  opacity:.4;
  -webkit-mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,#000 0%,transparent 75%);
          mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,#000 0%,transparent 75%);
}

.hp-wrap{ width:100%; max-width:1080px; margin:0 auto; padding:0 24px; position:relative; z-index:1 }

/* nav */
.hp-nav{ position:sticky; top:0; z-index:50; backdrop-filter:blur(10px);
  background:rgba(14,17,23,.6); border-bottom:1px solid transparent; transition:border-color .3s,background .3s }
.hp-nav.is-stuck{ border-bottom-color:var(--line); background:rgba(14,17,23,.82) }
.hp-nav-inner{ display:flex; align-items:center; justify-content:space-between; height:60px }
.hp-logo{ display:flex; align-items:center; gap:8px; background:none; border:0; cursor:pointer;
  color:var(--text); font-family:var(--mono); font-weight:700; font-size:.92rem; letter-spacing:.06em }
.hp-logo svg{ color:var(--amber) }
.hp-cursor{ width:7px; height:15px; background:var(--amber); display:inline-block; margin-left:1px;
  animation:blink 1.1s step-end infinite }
@keyframes blink{ 50%{opacity:0} }
.hp-links{ display:flex; gap:4px }
.hp-link{ background:none; border:0; cursor:pointer; color:var(--dim); font-family:var(--mono);
  font-size:.8rem; padding:8px 12px; border-radius:7px; transition:color .2s,background .2s }
.hp-link:hover{ color:var(--text); background:var(--panel) }
.hp-link:focus-visible,.hp-logo:focus-visible{ outline:2px solid var(--amber); outline-offset:3px; border-radius:6px }

/* hero */
.hp-hero{ padding:84px 0 64px }
.hp-prompt{ font-family:var(--mono); font-size:.92rem; color:var(--dim); margin:0 0 22px;
  letter-spacing:.02em }
.hp-amber{ color:var(--amber) }
.hp-name{ font-family:var(--disp); font-weight:700; line-height:.96; letter-spacing:-.03em;
  font-size:clamp(2.7rem,9vw,5.6rem); margin:0; color:var(--text) }
.hp-last{ color:var(--dim) }
.hp-flagline{ font-family:var(--mono); font-weight:500; margin-top:18px;
  font-size:clamp(1.05rem,3.4vw,1.6rem); display:flex; align-items:baseline; flex-wrap:wrap }
.hp-brace{ color:var(--faint) }
.hp-flag{ color:var(--text); background:var(--amber-soft); padding:1px 7px; border-radius:5px;
  border:1px solid var(--amber-line) }
.hp-lede{ max-width:600px; margin:26px 0 0; font-size:clamp(1.02rem,2.2vw,1.18rem);
  color:var(--dim); line-height:1.65 }
.hp-cta-row{ display:flex; flex-wrap:wrap; align-items:center; gap:14px; margin-top:34px }
.hp-btn{ display:inline-flex; align-items:center; gap:8px; font-family:var(--mono); font-size:.86rem;
  font-weight:500; padding:11px 18px; border-radius:9px; text-decoration:none; cursor:pointer;
  transition:transform .18s, background .2s, border-color .2s, color .2s; border:1px solid transparent }
.hp-btn:active{ transform:translateY(1px) }
.hp-btn-primary{ background:var(--amber); color:#0E1117; font-weight:700 }
.hp-btn-primary:hover{ background:#ffc274; transform:translateY(-2px) }
.hp-btn-ghost{ background:var(--panel); color:var(--text); border-color:var(--line) }
.hp-btn-ghost:hover{ border-color:var(--amber-line); color:var(--amber) }
.hp-btn:focus-visible{ outline:2px solid var(--amber); outline-offset:3px }
.hp-status{ display:inline-flex; align-items:center; gap:8px; font-family:var(--mono);
  font-size:.8rem; color:var(--dim) }
.hp-dot{ width:8px; height:8px; border-radius:50%; background:var(--green);
  box-shadow:0 0 0 0 rgba(91,209,122,.5); animation:pulse 2.2s infinite }
@keyframes pulse{ 0%{box-shadow:0 0 0 0 rgba(91,209,122,.45)} 70%{box-shadow:0 0 0 7px rgba(91,209,122,0)} 100%{box-shadow:0 0 0 0 rgba(91,209,122,0)} }

.hp-stats{ display:grid; grid-template-columns:repeat(3,1fr); gap:1px; margin:52px 0 0;
  background:var(--line); border:1px solid var(--line); border-radius:12px; overflow:hidden }
.hp-stats > div{ background:var(--bg2); padding:18px 20px }
.hp-stats dt{ font-family:var(--mono); font-size:.72rem; color:var(--faint); text-transform:uppercase;
  letter-spacing:.12em; margin-bottom:6px }
.hp-stats dd{ margin:0; font-family:var(--disp); font-weight:500; font-size:.98rem; color:var(--text) }

/* sections */
.hp-sec{ padding:64px 0 }
.hp-eyebrow{ font-family:var(--mono); font-size:.8rem; color:var(--amber); margin:0 0 14px; letter-spacing:.03em }
.hp-sec-head{ margin-bottom:38px }
.hp-h2{ font-family:var(--disp); font-weight:600; letter-spacing:-.02em; margin:0;
  font-size:clamp(1.6rem,4vw,2.3rem); color:var(--text) }

/* about */
.hp-about{ display:grid; grid-template-columns:1.4fr 1fr; gap:48px; align-items:start }
.hp-about-text{ font-size:1.08rem; color:var(--dim); margin:0 0 18px; line-height:1.72; max-width:46ch }
.hp-card-mono{ background:var(--panel); border:1px solid var(--line); border-radius:12px; overflow:hidden }
.hp-mono-head{ font-family:var(--mono); font-size:.76rem; color:var(--faint); margin:0;
  padding:12px 16px; border-bottom:1px solid var(--line); background:var(--bg2) }
.hp-pre{ font-family:var(--mono); font-size:.84rem; line-height:1.75; color:var(--dim);
  margin:0; padding:18px 18px; white-space:pre-wrap }
.hp-pre-dim{ color:var(--faint); font-size:.8rem }

/* work */
.hp-feature{ display:grid; grid-template-columns:1.6fr 1fr; gap:0; margin-bottom:20px;
  background:var(--panel); border:1px solid var(--line); border-radius:14px; overflow:hidden;
  transition:border-color .25s, transform .25s }
.hp-feature:hover{ border-color:var(--amber-line) }
.hp-feature-body{ padding:30px 32px }
.hp-feature-aside{ border-left:1px solid var(--line); background:var(--bg2);
  display:flex; align-items:center; padding:24px }
.hp-proj-grid{ display:grid; grid-template-columns:1fr 1fr; gap:20px }
.hp-proj{ background:var(--panel); border:1px solid var(--line); border-radius:14px;
  padding:26px 26px; height:100%; transition:border-color .25s, transform .25s, background .25s }
.hp-proj:hover{ border-color:var(--amber-line); transform:translateY(-3px); background:var(--panel2) }
.hp-proj-top{ display:flex; align-items:center; justify-content:space-between }
.hp-proj-arrow{ color:var(--faint); transition:color .2s, transform .2s }
.hp-proj:hover .hp-proj-arrow{ color:var(--amber); transform:translate(2px,-2px) }
.hp-tag{ font-family:var(--mono); font-size:.72rem; color:var(--amber); text-transform:lowercase;
  letter-spacing:.04em }
.hp-proj-title{ font-family:var(--disp); font-weight:600; font-size:1.35rem; margin:14px 0 2px;
  letter-spacing:-.01em; color:var(--text) }
.hp-proj-meta{ font-family:var(--mono); font-size:.78rem; color:var(--faint); margin:0 0 14px }
.hp-proj-desc{ font-size:.96rem; color:var(--dim); margin:0 0 18px; line-height:1.62 }
.hp-chips{ list-style:none; display:flex; flex-wrap:wrap; gap:7px; margin:0; padding:0 }
.hp-chips li{ font-family:var(--mono); font-size:.72rem; color:var(--dim);
  border:1px solid var(--line); padding:4px 9px; border-radius:6px; background:var(--bg2) }

/* stack */
.hp-stack-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px }
.hp-stack-card{ background:var(--panel); border:1px solid var(--line); border-radius:12px;
  padding:22px 20px; height:100%; transition:border-color .25s }
.hp-stack-card:hover{ border-color:var(--amber-line) }
.hp-stack-head{ display:flex; align-items:center; gap:9px; font-family:var(--mono);
  font-size:.82rem; color:var(--amber); margin-bottom:16px; padding-bottom:14px;
  border-bottom:1px solid var(--line); text-transform:lowercase }
.hp-stack-list{ list-style:none; margin:0; padding:0 }
.hp-stack-list li{ font-size:.92rem; color:var(--dim); padding:6px 0;
  display:flex; align-items:center; gap:9px }
.hp-stack-list li::before{ content:""; width:4px; height:4px; border-radius:50%;
  background:var(--faint); flex:none }

/* timeline */
.hp-timeline{ list-style:none; margin:0; padding:0; position:relative }
.hp-timeline::before{ content:""; position:absolute; left:5px; top:6px; bottom:6px;
  width:1px; background:var(--line) }
.hp-tl-item{ position:relative; padding:0 0 30px 34px }
.hp-tl-item:last-child{ padding-bottom:0 }
.hp-tl-node{ position:absolute; left:0; top:5px; width:11px; height:11px; border-radius:50%;
  background:var(--bg); border:2px solid var(--faint) }
.hp-tl-node.is-study{ border-color:var(--amber); box-shadow:0 0 0 4px var(--amber-soft) }
.hp-tl-top{ display:flex; align-items:baseline; gap:14px; flex-wrap:wrap }
.hp-tl-title{ font-family:var(--disp); font-weight:600; font-size:1.12rem; margin:0; color:var(--text) }
.hp-tl-when{ font-family:var(--mono); font-size:.74rem; color:var(--faint) }
.hp-tl-place{ font-family:var(--mono); font-size:.84rem; color:var(--amber); margin:3px 0 8px }
.hp-tl-note{ font-size:.95rem; color:var(--dim); margin:0; max-width:60ch; line-height:1.6 }

/* contact */
.hp-contact{ padding-bottom:40px }
.hp-contact-head{ font-family:var(--disp); font-weight:600; letter-spacing:-.02em;
  font-size:clamp(1.8rem,5vw,3rem); margin:0 0 14px; max-width:16ch; line-height:1.08 }
.hp-contact-sub{ color:var(--dim); font-size:1.06rem; max-width:48ch; margin:0 0 36px }
.hp-contact-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:16px }
.hp-contact-card{ display:flex; flex-direction:column; gap:4px; text-decoration:none;
  background:var(--panel); border:1px solid var(--line); border-radius:12px; padding:22px 24px;
  color:var(--text); transition:border-color .25s, transform .25s, background .25s }
a.hp-contact-card:hover{ border-color:var(--amber-line); transform:translateY(-2px); background:var(--panel2) }
.hp-contact-card svg{ color:var(--amber); margin-bottom:8px }
.hp-contact-static{ cursor:default }
.hp-contact-label{ font-family:var(--mono); font-size:.72rem; color:var(--faint);
  text-transform:uppercase; letter-spacing:.1em }
.hp-contact-val{ font-family:var(--mono); font-size:.94rem; color:var(--text); word-break:break-all }
.hp-contact-card:focus-visible{ outline:2px solid var(--amber); outline-offset:3px }

/* footer */
.hp-footer{ border-top:1px solid var(--line); padding:26px 0; margin-top:24px }
.hp-footer-inner{ display:flex; justify-content:space-between; align-items:center;
  font-family:var(--mono); font-size:.78rem; color:var(--faint); flex-wrap:wrap; gap:8px }

/* responsive */
@media (max-width:860px){
  .hp-about{ grid-template-columns:1fr; gap:28px }
  .hp-feature{ grid-template-columns:1fr }
  .hp-feature-aside{ border-left:0; border-top:1px solid var(--line) }
  .hp-stack-grid{ grid-template-columns:repeat(2,1fr) }
}
@media (max-width:620px){
  .hp-links{ display:none }
  .hp-proj-grid{ grid-template-columns:1fr }
  .hp-stats{ grid-template-columns:1fr }
  .hp-contact-grid{ grid-template-columns:1fr }
  .hp-hero{ padding:56px 0 48px }
  .hp-feature-body{ padding:24px 22px }
}

@media (prefers-reduced-motion:reduce){
  .hp-cursor,.hp-dot{ animation:none }
  .hp *{ transition:none !important }
}
`;