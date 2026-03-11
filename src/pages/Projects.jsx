import { useEffect } from "react";
import { useSEO } from "../hooks/useSEO.js";

const projects = [
  {
    id: "01",
    name: "Promethium Learn",
    tagline: "Developer learning platform",
    desc: "Structured learning paths for modern technologies — Web Development, AI/ML, Backend, and DevOps. Built for students and self-taught developers who want to learn by building.",
    tags: ["Education", "Platform", "React", "Node.js"],
    status: "In Progress",
  },
  {
    id: "02",
    name: "DevForge",
    tagline: "Developer toolkit",
    desc: "An experimental toolkit for building and deploying modern web applications. Aimed at simplifying the developer workflow from local setup to production.",
    tags: ["Developer Tools", "CLI", "Node.js", "Cloud"],
    status: "In Progress",
  },
  {
    id: "03",
    name: "AI Assist",
    tagline: "AI productivity assistant",
    desc: "An AI-powered productivity assistant designed to help developers and small teams automate repetitive workflows, generate code snippets, and move faster.",
    tags: ["AI", "Productivity", "Python", "Automation"],
    status: "In Progress",
  },
];

const ProjectsPage = () => {
  useSEO({
    title: "Projects",
    description: "See what Promethium Labs is building — Promethium Learn (developer learning platform), DevForge (developer toolkit), and AI Assist (AI productivity tool). All in progress.",
    keywords: "Promethium Learn, DevForge, AI Assist, developer tools, learning platform Chennai",
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      const revObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );
      document.querySelectorAll(".rev, .rev-up, .rev-left, .rev-right").forEach((el) => revObs.observe(el));
      return () => revObs.disconnect();
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ background: "#0d0d08", color: "#f4efe6" }} className="min-h-screen overflow-x-hidden">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative px-8 md:px-16 pt-36 pb-20 max-md:px-6 overflow-hidden">
        {/* Glow blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)",
            top: "-120px", right: "-80px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-8" style={{ color: "#10b981" }}>
            Projects — What We&apos;re Building
          </p>
          <h1
            className="display-h rev-up mb-8"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#f4efe6" }}
          >
            In Progress.
            <br />
            <span style={{ color: "#10b981" }}>Built in public.</span>
          </h1>
          <div className="pt-8 rev" style={{ borderTop: "1px solid rgba(244,239,230,0.08)" }}>
            <p className="max-w-lg text-[1rem] leading-[1.8] font-light" style={{ color: "rgba(244,239,230,0.55)" }}>
              We&apos;re an early-stage lab. These are the products we&apos;re currently building. No smoke, no
              marketing — just honest progress updates as we ship.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ─────────────────────── */}
      <section className="px-8 md:px-16 pb-8 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-10" style={{ color: "rgba(244,239,230,0.3)" }}>
            Active projects — 2026
          </p>
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="rev group py-10"
              style={{
                borderTop: "1px solid rgba(244,239,230,0.06)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-5">
                    <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase" style={{ color: "rgba(244,239,230,0.2)" }}>{p.id}</span>
                    <span
                      className="font-mono text-[0.58rem] uppercase tracking-[0.1em] px-3 py-1"
                      style={{ border: "1px solid rgba(16,185,129,0.3)", color: "#10b981" }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] mb-2" style={{ color: "#10b981" }}>{p.tagline}</p>
                  <h2
                    className="section-h mb-4 transition-all duration-300 group-hover:translate-x-1"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f4efe6" }}
                  >
                    {p.name}
                  </h2>
                  <p className="text-[0.92rem] leading-[1.85] font-light max-w-2xl mb-6" style={{ color: "rgba(244,239,230,0.5)" }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.58rem] uppercase tracking-[0.1em] px-2.5 py-1"
                        style={{ border: "1px solid rgba(244,239,230,0.1)", color: "rgba(244,239,230,0.35)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="shrink-0 flex items-center justify-center font-mono text-[0.65rem] uppercase tracking-[0.12em] px-6 py-3 self-start transition-all duration-300"
                  style={{ border: "1px solid rgba(244,239,230,0.12)", color: "rgba(244,239,230,0.3)" }}
                >
                  Coming Soon
                </div>
              </div>
            </article>
          ))}
          <div style={{ borderTop: "1px solid rgba(244,239,230,0.06)" }} />
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────── */}
      <section className="px-8 md:px-16 py-24 max-md:px-6" style={{ borderTop: "1px solid rgba(244,239,230,0.04)" }}>
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(244,239,230,0.3)" }}>
              Interested?
            </p>
            <h2 className="display-h rev-up" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f4efe6" }}>
              Want to build with us?
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
              style={{ background: "#10b981", color: "#0d0d08" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#34d399")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
            >
              Work With Us →
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
              style={{ border: "1px solid rgba(244,239,230,0.15)", color: "#f4efe6" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.color = "#10b981"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(244,239,230,0.15)"; e.currentTarget.style.color = "#f4efe6"; }}
            >
              Join Our Team →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProjectsPage;
