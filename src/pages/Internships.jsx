import { useEffect, useRef, useState } from "react";
import { useMagnetic } from "../hooks/useMagnetic";

const roles = [
  {
    id: "01",
    title: "Web Development",
    tags: ["Remote", "Mentored", "Certificate"],
    body: "Ship real interfaces for real users. React, Tailwind, backend basics. Unlearn tutorial-hell.",
  },
  {
    id: "02",
    title: "Digital Marketing",
    tags: ["Remote", "Stipend", "Certificate"],
    body: "Set up campaigns that don't waste money. Ad copy, audiences, landing pages, the whole loop.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    tags: ["Remote", "Portfolio-heavy", "Mentored"],
    body: "Design flows and details people actually notice. Low-fi to high-fi in Figma.",
  },
  {
    id: "04",
    title: "Content Strategy",
    tags: ["Remote", "Writing-heavy", "Certificate"],
    body: "Write words that make people care — emails, landing pages, scripts, posts.",
  },
];

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const terminalRef = useRef(null);
  const hasAnimated = useRef(false);

  const terminalData = [
    { text: "❯ ./check-openings.sh", dim: true },
    { text: "Connecting to portal...", dim: true },
    { text: "✓ Web Development — Open", green: true },
    { text: "✓ Digital Marketing — Open", green: true },
    { text: "✓ UI/UX Design — Open", green: true },
    { text: "✓ Content Strategy — Open", green: true },
    { text: "❯ apply --now_", dim: false },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let cumDelay = 0;
          terminalData.forEach((line, i) => {
            cumDelay += i === 0 ? 200 : 400;
            setTimeout(() => {
              setLines((prev) => [...prev, { ...line, currentText: "" }]);
              let charIdx = 0;
              const typeInterval = setInterval(() => {
                charIdx++;
                setLines((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1].currentText = line.text.slice(0, charIdx);
                  return updated;
                });
                if (charIdx >= line.text.length) clearInterval(typeInterval);
              }, 18);
            }, cumDelay);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={terminalRef}
      className="overflow-hidden font-mono text-[0.75rem] leading-relaxed"
      style={{
        background: "rgba(13,13,8,0.85)",
        border: "1px solid rgba(16,185,129,0.15)",
        backdropFilter: "blur(10px)",
        padding: "1.5rem",
        minHeight: "200px",
      }}
    >
      <div className="flex gap-2 mb-4 opacity-40">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full" style={{ background: "#10b981" }} />
      </div>
      <div className="space-y-1.5 min-h-[150px]">
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.green ? "#10b981" : line.dim ? "rgba(244,239,230,0.3)" : "rgba(244,239,230,0.75)" }}>
            {line.currentText}
            {i === lines.length - 1 && <span className="animate-pulse">_</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const InternshipsPage = () => {
  const internCtaRef = useMagnetic(0.25);

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
      document.querySelectorAll(".rev, .rev-left, .rev-right, .rev-up, .rev-scale").forEach((el) => revObs.observe(el));
      return () => revObs.disconnect();
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ background: "#0d0d08", color: "#f4efe6" }} className="min-h-screen overflow-x-hidden">

      {/* ── HERO: full-viewport with office photo ─────────── */}
      <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 max-md:px-6">
        {/* Background photo with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/internship-hero.png"
            alt="Promethium Labs intern workspace"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35) saturate(1.2)" }}
          />
          {/* Gradient fade from photo to page bottom */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(13,13,8,0.1) 0%, rgba(13,13,8,0.6) 60%, #0d0d08 100%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-8" style={{ color: "#10b981" }}>
            Internships — Open Roles
          </p>
          <h1 className="display-h rev-up mb-8" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", color: "#f4efe6" }}>
            Your career
            <br />
            <span style={{ color: "#10b981" }}>starts here.</span>
          </h1>
          <div className="pt-8 rev" style={{ borderTop: "1px solid rgba(244,239,230,0.08)" }}>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <p className="max-w-lg text-[1rem] leading-[1.8] font-light" style={{ color: "rgba(244,239,230,0.6)" }}>
                Real work. Real mentors. Real results. If you&apos;re just collecting
                certificates, this isn&apos;t for you. Our internships feel closer to a probation
                period than a classroom.
              </p>
              <a
                href="#roles"
                ref={internCtaRef}
                className="inline-flex items-center gap-3 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
                style={{ background: "#10b981", color: "#0d0d08" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#34d399")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
              >
                Browse Open Roles ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROLE ROWS — OkAlpha bordered list on dark ─────── */}
      <section id="roles" className="px-8 md:px-16 py-20 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-10" style={{ color: "rgba(244,239,230,0.3)" }}>
            Open positions — 2025
          </p>
          {roles.map((role, i) => (
            <a
              key={role.id}
              href="#apply"
              className="group flex items-start justify-between py-8 transition-all duration-300 rev"
              style={{
                borderTop: "1px solid rgba(244,239,230,0.06)",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              <div className="flex items-start gap-8 min-w-0">
                <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase mt-2 shrink-0" style={{ color: "rgba(244,239,230,0.2)" }}>
                  {role.id}
                </span>
                <div>
                  <div
                    className="section-h mb-2 transition-all duration-300 group-hover:translate-x-2"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#f4efe6" }}
                  >
                    {role.title}
                  </div>
                  <p className="text-[0.85rem] font-light max-w-xl" style={{ color: "rgba(244,239,230,0.45)" }}>
                    {role.body}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.6rem] uppercase tracking-[0.1em] px-3 py-1.5"
                        style={{ border: "1px solid rgba(16,185,129,0.25)", color: "#10b981" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span
                className="text-2xl shrink-0 mt-1 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                style={{ color: "rgba(244,239,230,0.2)" }}
              >
                ↗
              </span>
            </a>
          ))}
          <div style={{ borderTop: "1px solid rgba(244,239,230,0.06)" }} />
        </div>
      </section>

      {/* ── TERMINAL — live role checker ─────────────────── */}
      <section className="px-8 md:px-16 py-20 max-md:px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="rev-left">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-6" style={{ color: "#10b981" }}>
              Live openings
            </p>
            <h2 className="section-h mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f4efe6" }}>
              All four roles currently open.
            </h2>
            <p className="text-[0.95rem] leading-[1.85] font-light" style={{ color: "rgba(244,239,230,0.5)" }}>
              We run cohorts, not revolving doors. Apply now while spots are available for this cycle.
            </p>
          </div>
          <div className="rev-right">
            <Terminal />
          </div>
        </div>
      </section>

      {/* ── BENEFITS — emerald accent block ──────────────── */}
      <section style={{ background: "#10b981", color: "#0d0d08" }} className="px-8 md:px-16 py-20 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-12" style={{ color: "rgba(13,13,8,0.5)" }}>
            What you actually get
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "◈", title: "Real Projects", body: "Things that ship to real users, not fake assignments." },
              { icon: "◉", title: "Expert Mentorship", body: "Feedback that makes you better, not just 'good job'." },
              { icon: "◎", title: "Verified Certificate", body: "Backed by shipped work, not just attendance." },
              { icon: "◌", title: "Remote Friendly", body: "Work from anywhere in India with async habits." },
            ].map((item, i) => (
              <div key={item.title} className="rev space-y-3" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="text-2xl opacity-40">{item.icon}</div>
                <h3 className="font-sans font-bold text-[1rem] tracking-[-0.02em]">{item.title}</h3>
                <p className="text-[0.85rem] leading-[1.7] font-light" style={{ color: "rgba(13,13,8,0.65)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — dark with ruled steps ─────────── */}
      <section className="px-8 md:px-16 py-24 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-12" style={{ borderBottom: "1px solid rgba(244,239,230,0.06)" }}>
            <div>
              <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-4" style={{ color: "#10b981" }}>
                How it works
              </p>
              <h2 className="section-h rev-up" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f4efe6" }}>
                Simple. Honest.
                <br />
                No trick questions.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            {[
              { step: "01", title: "Apply Online", body: "Tell us who you are, what you've done, and what you want to learn." },
              { step: "02", title: "Quick Chat", body: "20-30 minutes to see if we can actually help you grow." },
              { step: "03", title: "Mini Project", body: "A small, focused task that mirrors real work. 48 hours. No trick questions." },
              { step: "04", title: "You're In", body: "We agree start dates, expectations, and how we'll measure success together." },
            ].map((item, i) => (
              <div
                key={item.step}
                className="rev py-10 pr-8"
                style={{
                  borderTop: "1px solid rgba(244,239,230,0.06)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase" style={{ color: "#10b981" }}>
                  {item.step}
                </span>
                <h3 className="section-h mt-3 mb-3" style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)", color: "#f4efe6" }}>
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.85] font-light" style={{ color: "rgba(244,239,230,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ─────────────────────────────────────── */}
      <section id="apply" className="px-8 md:px-16 py-24 max-md:px-6" style={{ borderTop: "1px solid rgba(244,239,230,0.06)" }}>
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <h2 className="display-h rev-up" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#f4efe6" }}>
              Ready?
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.85] font-light max-w-md" style={{ color: "rgba(244,239,230,0.5)" }}>
              Applications are reviewed within 3 business days. We read every one personally.
            </p>
          </div>
          <a
            href="/contact"
            className="rev-right inline-flex items-center gap-3 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-10 py-5 shrink-0 transition-all duration-300"
            style={{ background: "#10b981", color: "#0d0d08" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#34d399")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
          >
            Send your application →
          </a>
        </div>
      </section>

    </main>
  );
};

export default InternshipsPage;
