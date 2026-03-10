import { useEffect, useRef, useState } from "react";
import { useMagnetic } from "../hooks/useMagnetic";

const roles = [
  {
    title: "Web Development Intern",
    tags: ["Remote", "Mentored", "Certificate"],
    body: "You ship interfaces and features for real users. React, Tailwind, a bit of backend. We’ll help you unlearn tutorial‑hell and build for production.",
  },
  {
    title: "Digital Marketing Intern",
    tags: ["Remote", "Stipend", "Certificate"],
    body: "You learn how to set up campaigns that don’t waste money. Ad copy, audiences, landing pages, reporting — the whole loop.",
  },
  {
    title: "UI/UX Design Intern",
    tags: ["Remote", "Portfolio‑heavy", "Mentored"],
    body: "You design flows, interfaces, and tiny details people actually notice. From low‑fi scribbles to high‑fi prototypes in Figma.",
  },
  {
    title: "Content Strategy Intern",
    tags: ["Remote", "Writing‑heavy", "Certificate"],
    body: "You write words that make people care — emails, landing pages, scripts, posts. Clear, honest, on‑brand.",
  },
];

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const terminalRef = useRef(null);
  const hasAnimated = useRef(false);

  const terminalData = [
    { text: "❯ ./check-openings.sh", class: "text-white/50", delay: 0 },
    { text: "Connecting to portal...", class: "text-white/20", delay: 600 },
    { text: "✓ Web Development — Open", class: "text-greenBright", delay: 1000, type: "status" },
    { text: "✓ Digital Marketing — Open", class: "text-greenBright", delay: 1400, type: "status" },
    { text: "✓ UI/UX Design — Open", class: "text-greenBright", delay: 1800, type: "status" },
    { text: "✓ Content Strategy — Open", class: "text-greenBright", delay: 2200, type: "status" },
    { text: "❯ apply --role=", class: "text-white/70", delay: 2800 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startTypewriter();
        }
      },
      { threshold: 0.5 }
    );

    if (terminalRef.current) observer.observe(terminalRef.current);

    const startTypewriter = async () => {
      for (const line of terminalData) {
        await new Promise((resolve) => setTimeout(resolve, line.delay / 2)); // speed up a bit
        setLines((prev) => [...prev, { ...line, currentText: "" }]);
        
        const text = line.text;
        for (let i = 0; i <= text.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20));
          setLines((prev) => {
            const last = [...prev];
            last[last.length - 1].currentText = text.slice(0, i);
            return last;
          });
        }
      }
    };

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={terminalRef} className="icard overflow-hidden rounded-xl bg-[#0d0d08] p-6 font-mono text-xs leading-relaxed shadow-2xl">
      <div className="icard-body relative z-10 space-y-1.5 min-h-[180px]">
        {lines.map((line, i) => (
          <div key={i} className={line.class}>
            {line.type === "status" ? (
              <>
                <span className="text-greenBright">✓ </span>
                <span className="text-white/60">{line.currentText.slice(2, line.currentText.indexOf(" —") !== -1 ? line.currentText.indexOf(" —") : undefined)}</span>
                {line.currentText.includes(" —") && (
                  <span className="text-white/20">{line.currentText.slice(line.currentText.indexOf(" —"))}</span>
                )}
              </>
            ) : (
              line.currentText
            )}
            {i === lines.length - 1 && <span className="animate-pulse">_</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const InternshipsPage = () => {
  const ctaRefs = useRef([]);
  const internCtaRef = useMagnetic(0.25);

  useEffect(() => {
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".rev, .rev-left, .rev-right, .rev-scale").forEach((el) => {
      revObs.observe(el);
    });

    return () => revObs.disconnect();
  }, []);

  return (
    <main className="bg-cream2 text-ink min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:px-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 rev-left">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-greenMid">
              Internships
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-[-0.035em]">
              Your career <span className="italic text-greenDark">starts here.</span>
            </h1>
            <p className="max-w-md text-sm md:text-base text-gray leading-relaxed">
              Real work. Real mentors. Real results. If you&apos;re just collecting
              certificates, this isn&apos;t for you. Promethium Labs internships feel
              closer to a probation period than a classroom.
            </p>
            <div className="pt-4">
              <a href="#roles" ref={internCtaRef} className="intern-cta inline-flex items-center rounded-sm bg-ink text-cream px-8 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-all hover:bg-greenMid">
                Browse Roles ↓
              </a>
            </div>
          </div>
          <div className="rev-right">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section id="roles" className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {roles.map((role, idx) => (
            <article
              key={role.title}
              className={`group flex flex-col justify-between rounded-xl border border-ink/5 bg-cream shadow-sm transition-all duration-500 hover:shadow-2xl rev-scale`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-1 flex-col gap-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-serif text-2xl leading-tight">{role.title}</h2>
                  <span className="text-xl text-gray/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-greenMid">
                    ↗
                  </span>
                </div>
                <p className="text-sm text-gray/70 leading-relaxed font-light">{role.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="irole rounded-full border border-ink/5 bg-cream2 px-4 py-1.5 text-[0.65rem] font-mono uppercase tracking-[0.12em] text-gray/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="flex items-center justify-between border-t border-ink/5 px-8 py-5 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-ink/60 transition-colors duration-300 group-hover:bg-greenPale group-hover:text-ink">
                <span>View details &amp; apply</span>
                <span className="text-sm">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-ink text-cream px-6 py-20 md:px-16 border-y border-white/5">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-4">
          {[
            {
              title: "Real Projects",
              body: "Work on things that ship, not fake assignments.",
            },
            {
              title: "Expert Mentorship",
              body: "Feedback that makes you better, not just “good job”.",
            },
            {
              title: "Verified Certificate",
              body: "Backed by shipped work, not just attendance.",
            },
            {
              title: "Remote Friendly",
              body: "Work from anywhere in India with async habits.",
            },
          ].map((item, idx) => (
            <article key={item.title} className="space-y-3 rev" style={{ transitionDelay: `${idx * 100}ms` }}>
              <h3 className="font-serif text-xl italic text-greenMid">{item.title}</h3>
              <p className="text-[0.85rem] text-cream/50 leading-relaxed font-light">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Application process */}
      <section className="bg-cream2 px-6 py-32 md:px-16">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="space-y-4 rev-left">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-greenMid">
              How it works
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] leading-tight">
              Simple. Honest. No trick questions.
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                step: "01 — Apply Online",
                body: "Tell us who you are, what you’ve done, and what you want to learn.",
              },
              {
                step: "02 — Quick Chat",
                body: "20–30 minutes to see if we vibe and if we can actually help you grow.",
              },
              {
                step: "03 — Mini Project",
                body: "A small, focused task that mirrors real work. 48 hours. No trick questions.",
              },
              {
                step: "04 — You’re In",
                body: "We agree start dates, expectations, and how we’ll measure success together.",
              },
            ].map((item, idx) => (
              <li key={item.step} className="space-y-4 rev" style={{ transitionDelay: `${idx * 150}ms` }}>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-greenMid border-b border-greenMid/20 pb-2 inline-block">
                  {item.step}
                </p>
                <p className="text-base text-gray leading-relaxed font-light">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default InternshipsPage;

