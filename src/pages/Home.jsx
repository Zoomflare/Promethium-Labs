import { useEffect, useRef } from "react";
import RotatingWord from "../components/hero/RotatingWord.jsx";

const Home = () => {
  const heroRef = useRef(null);
  const blobRefs = useRef([]);

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
      document
        .querySelectorAll(".rev, .rev-up, .rev-left, .rev-right, .rev-scale, .rev-clip")
        .forEach((el) => revObs.observe(el));

      const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        blobRefs.current.forEach((blob, i) => {
          if (!blob) return;
          const depth = (i + 1) * 12;
          blob.style.transform = `translate3d(${cx * depth}px, ${cy * depth}px, 0)`;
        });
      };

      const hero = heroRef.current;
      if (hero) hero.addEventListener("mousemove", handleMouseMove);
      return () => {
        revObs.disconnect();
        if (hero) hero.removeEventListener("mousemove", handleMouseMove);
      };
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ background: "#f4efe6", color: "#0d0d08" }}>

      {/* ══════════════════════════════════════════════════
          HERO — cream background, bold ink type
      ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="hero relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 max-md:px-6"
        style={{ borderBottom: "1px solid rgba(13,13,8,0.08)" }}
      >
        <div className="hero-blob hero-blob-1" ref={(el) => (blobRefs.current[0] = el)} />
        <div className="hero-blob hero-blob-2" ref={(el) => (blobRefs.current[1] = el)} />
        <div className="hero-blob hero-blob-3" ref={(el) => (blobRefs.current[2] = el)} />
        <div className="hero-blob hero-blob-4" ref={(el) => (blobRefs.current[3] = el)} />
        <div className="hero-grain" />

        <div className="mx-auto w-full max-w-7xl relative z-10">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-8" style={{ color: "#10b981" }}>
            Bootstrapped · India · Est. 2025
          </p>

          {/* Display headline */}
          <h1 className="display-h mb-10" style={{ fontSize: "clamp(3.5rem, 9.5vw, 8rem)" }}>
            <span className="block rev-up rev-d1" style={{ color: "#0d0d08" }}>We&apos;re a startup</span>
            <span className="block rev-up rev-d2" style={{ color: "#0d0d08" }}>
              that actually&nbsp;<RotatingWord />
            </span>
          </h1>

          {/* Rule + body row */}
          <div className="pt-10 mt-2" style={{ borderTop: "1px solid rgba(13,13,8,0.1)" }}>
            <div className="flex flex-wrap items-start justify-between gap-10">
              <p className="rev max-w-lg text-[1rem] leading-[1.75] font-light" style={{ color: "#7a7468" }}>
                <strong style={{ color: "#0d0d08", fontWeight: 600 }}>Promethium Labs</strong> does three things —
                builds real products, runs digital marketing that converts, and gives students{" "}
                <strong style={{ color: "#0d0d08", fontWeight: 600 }}>
                  internships that actually teach you something.
                </strong>{" "}
                No fluff. No bloat.
              </p>
              <div className="rev-right flex flex-wrap items-start gap-4 pt-1">
                <a href="/services" className="cta-main">See What We Do</a>
                <a href="/contact" className="cta-ghost">Start a project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS TICKER — ink background
      ══════════════════════════════════════════════════ */}
      <div style={{ borderTop: "1px solid rgba(13,13,8,0.06)", borderBottom: "1px solid rgba(13,13,8,0.06)" }}>
        <div className="stats-bar">
          <div className="stats-track">
            {[1, 2].map((i) => (
              <div key={i} className="flex">
                {[
                  ["12+", "Products Built"], ["40+", "Students Mentored"],
                  ["20+", "Clients Served"], ["3", "Core Services"],
                  ["100%", "Bootstrapped"], ["∞", "Ambition"],
                ].map(([n, l]) => (
                  <div key={n + l + i} className="stat-item"><span className="n">{n}</span><span className="l">{l}</span></div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="stats-bar" style={{ opacity: 0.65 }}>
          <div className="stats-track" style={{ animationDirection: "reverse", animationDuration: "42s" }}>
            {[1, 2].map((i) => (
              <div key={i} className="flex">
                {[
                  ["Fast", "Turnaround"], ["Real", "Mentorship"],
                  ["Zero", "Bullshit"], ["Live", "Client Work"],
                  ["India", "Based Team"], ["Remote", "Friendly"],
                ].map(([n, l]) => (
                  <div key={n + l + i} className="stat-item"><span className="n">{n}</span><span className="l">{l}</span></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          WHAT WE DO — vivid GREEN color block (OkAlpha style)
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#10b981", color: "#0d0d08" }} className="px-8 md:px-16 py-20 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8" style={{ borderBottom: "1px solid rgba(13,13,8,0.15)" }}>
            <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em]" style={{ color: "rgba(13,13,8,0.5)" }}>
              Three services
            </p>
            <a href="/services" className="rev-right font-mono text-[0.65rem] uppercase tracking-[0.14em] font-bold hover:underline" style={{ color: "#0d0d08" }}>
              See all →
            </a>
          </div>

          <div className="space-y-0">
            {[
              { n: "01", title: "Student Internships", desc: "Live projects. Real mentorship. Not coffee errands." },
              { n: "02", title: "Digital Marketing", desc: "Revenue, leads, retention. No vanity metrics." },
              { n: "03", title: "Product Development", desc: "From idea to live product without the mystery." },
            ].map((svc, i) => (
              <a
                key={svc.n}
                href="/services"
                className="group flex items-center justify-between py-8 transition-all duration-300"
                style={{
                  borderTop: "1px solid rgba(13,13,8,0.15)",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase" style={{ color: "rgba(13,13,8,0.4)" }}>
                    {svc.n}
                  </span>
                  <div>
                    <div className="display-h transition-all duration-300 group-hover:translate-x-2"
                      style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#0d0d08" }}>
                      {svc.title}
                    </div>
                    <p className="text-[0.85rem] mt-1 font-light" style={{ color: "rgba(13,13,8,0.6)" }}>{svc.desc}</p>
                  </div>
                </div>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: "rgba(13,13,8,0.4)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MANIFESTO — dark ink block (maximum contrast)
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#0d0d08", color: "#f4efe6" }} className="px-8 md:px-16 py-28 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="rev font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-10" style={{ color: "#10b981" }}>
            [ Who We Are ]
          </p>
          <h2 className="section-h rev-up mb-12" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", color: "#f4efe6" }}>
            We loathe mediocrity.
            <br />
            <span style={{ color: "#10b981" }}>We build things worth building.</span>
          </h2>
          <div className="pt-10" style={{ borderTop: "1px solid rgba(244,239,230,0.06)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="rev text-[1rem] leading-[1.9] font-light" style={{ color: "rgba(244,239,230,0.6)" }}>
                Promethium Labs is a{" "}
                <strong style={{ color: "#f4efe6", fontWeight: 500 }}>bootstrapped startup</strong>{" "}
                doing three things with full conviction. Small, hungry team. Moves fast, cares deeply,
                ships work we&apos;re actually proud of.
              </p>
              <div className="rev-right space-y-6">
                <p className="text-[1rem] leading-[1.9] font-light" style={{ color: "rgba(244,239,230,0.6)" }}>
                  Being early-stage means every decision is intentional. We&apos;re{" "}
                  <strong style={{ color: "#f4efe6", fontWeight: 500 }}>on the same side as you</strong> — your win is our win.
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[0.6rem] tracking-[0.12em] uppercase"
                  style={{ border: "1px solid rgba(45,186,110,0.3)", color: "#10b981" }}
                >
                  ✦ Promethium — the element of energy &amp; possibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          NUMBERS SECTION — cream bg, large bold numbers
          OkAlpha-style: big type, horizontal rules
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#f4efe6", color: "#0d0d08" }} className="px-8 md:px-16 py-24 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-12" style={{ color: "#10b981" }}>
            By the numbers
          </p>
          <div>
            {[
              { n: "12+", label: "Products shipped live" },
              { n: "40+", label: "Students actually mentored" },
              { n: "20+", label: "Clients who came back" },
            ].map((item, i) => (
              <div
                key={item.n}
                className="rev group flex items-center justify-between py-8 cursor-default hover:bg-ink/[0.02] transition-colors duration-200 num-item"
                style={{ borderTop: "1px solid rgba(13,13,8,0.08)" }}
              >
                <span
                  className="display-h"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#0d0d08", transitionDelay: `${i * 0.05}s` }}
                >
                  {item.n}
                </span>
                <span className="font-sans text-[0.95rem] font-light num-sub" style={{ color: "#7a7468" }}>
                  {item.label}
                </span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(13,13,8,0.08)" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA SECTION — vivid background block
      ══════════════════════════════════════════════════ */}
      <section
        style={{ background: "#0d0d08", color: "#f4efe6" }}
        className="px-8 md:px-16 py-24 max-md:px-6"
      >
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(244,239,230,0.3)" }}>
              Ready to start?
            </p>
            <h2 className="display-h rev-up" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#f4efe6" }}>
              Let&apos;s make something
              <br />
              <span style={{ color: "#10b981" }}>worth making.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="/contact"
              className="rev-right inline-flex items-center gap-3 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
              style={{ background: "#10b981", color: "#0d0d08" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#00e676")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
            >
              Start a project →
            </a>
            <a
              href="/internships"
              className="rev-right inline-flex items-center gap-3 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
              style={{ border: "1px solid rgba(244,239,230,0.2)", color: "#f4efe6" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.color = "#10b981"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(244,239,230,0.2)"; e.currentTarget.style.color = "#f4efe6"; }}
            >
              View Internships
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
