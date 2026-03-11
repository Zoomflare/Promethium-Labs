import { useEffect } from "react";
import { useSEO } from "../hooks/useSEO.js";

const services = [
  {
    id: "01",
    title: "AI & Software Development",
    eyebrow: "From idea to live product",
    body: "We build custom software and AI solutions for startups, businesses, and developers. Web applications, APIs, automation systems, and AI-powered tools — shipped with care and built to scale.",
    bullets: [
      "Web application development (full-stack)",
      "APIs and backend systems",
      "AI integrations and automation tools",
      "SaaS dashboards and internal tools",
      "Post-launch support and iteration",
    ],
    tag: "Start a project",
    href: "/contact",
  },
  {
    id: "02",
    title: "Digital Marketing",
    eyebrow: "Zero vanity metrics",
    body: "We don't chase impressions for a slide deck. We care about numbers that matter: revenue, qualified leads, and retention. Data-driven campaigns that actually grow your business.",
    bullets: [
      "SEO audits and content strategy",
      "Social media marketing",
      "Content marketing and copywriting",
      "Growth strategy and analytics",
    ],
    tag: "Talk growth",
    href: "/contact",
  },
  {
    id: "03",
    title: "Internship Program",
    eyebrow: "Built like a first job",
    body: "A learning-focused program designed for students and freshers. You work on real projects, get mentored by the core team, and leave with a portfolio that actually proves something.",
    bullets: [
      "Real project experience from day one",
      "Mentorship from the development team",
      "Certificate of completion",
      "Duration: 8–12 weeks",
      "Open to students and self-taught developers",
    ],
    tag: "View open roles",
    href: "/careers",
  },
];

const ServiceRow = ({ svc }) => {
  return (
    <a
      href={svc.href}
      className="svc-row group"
    >
      {/* Left: Number + Title */}
      <div className="flex items-baseline gap-6 min-w-0">
        <span
          className="font-mono text-[0.55rem] tracking-[0.14em] uppercase shrink-0 transition-colors duration-300"
          style={{ color: "rgba(244,239,230,0.3)" }}
        >
          {svc.id}
        </span>
        <div>
          <p
            className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-greenMid mb-2 group-hover:text-cream/70 transition-colors duration-300"
          >
            {svc.eyebrow}
          </p>
          <span className="svc-row-title">{svc.title}</span>
        </div>
      </div>

      {/* Right: Tag + Arrow */}
      <div className="flex items-center gap-6 shrink-0">
        <span className="svc-row-tag hidden md:inline-flex">{svc.tag}</span>
        <span className="svc-row-arrow">↗</span>
      </div>
    </a>
  );
};

const ServiceDetail = ({ svc }) => (
  <div className="px-8 md:px-16 py-14 border-t border-white/[0.06] bg-ink/50 rev">
    <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
      <p className="text-cream/60 text-[0.95rem] leading-[1.85] font-light">{svc.body}</p>
      <ul className="space-y-3">
        {svc.bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.85rem] text-cream/55">
            <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-greenMid shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesPage = () => {
  useSEO({
    title: "Services",
    description: "Promethium Labs offers AI & Software Development, Digital Marketing, and an Internship Program. Custom AI tools, web apps, SEO, social media, and mentored internships.",
    keywords: "AI development, software development, digital marketing, internship program Chennai",
  });
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
      { threshold: 0.08 }
    );
    document
      .querySelectorAll(".rev, .rev-up, .rev-left, .rev-right, .rev-clip")
      .forEach((el) => revObs.observe(el));
    return () => revObs.disconnect();
  }, []);

  return (
    <main style={{ background: "#0d0d08", color: "#f4efe6" }} className="min-h-screen">

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="px-8 md:px-16 pt-36 pb-20 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="rev-left font-mono text-[0.6rem] uppercase tracking-[0.2em] text-greenMid mb-8">
            Services
          </p>
          <h1 className="section-h text-[clamp(3rem,8vw,7rem)] rev-up mb-8">
            What we do,
            <br />
            <span style={{ color: "#10b981" }}>and how.</span>
          </h1>
          <div className="rule-top-dark pt-8">
            <p className="rev max-w-2xl text-cream/55 text-[0.95rem] leading-[1.85] font-light">
              Three things, done with unreasonable care: AI and software products built to scale,
              digital marketing that moves real numbers, and an internship program where students
              actually learn by doing.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE ROWS — OkAlpha list rows ─────────── */}
      <section className="mx-auto max-w-7xl px-8 md:px-16 pb-4 max-md:px-6">
        {services.map((svc, idx) => (
          <ServiceRow key={svc.id} svc={svc} index={idx} />
        ))}
      </section>

      {/* ── SERVICE DETAIL PANELS ────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(244,239,230,0.06)" }} className="mt-4">
        {services.map((svc) => (
          <ServiceDetail key={svc.id} svc={svc} />
        ))}
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 max-md:px-6" style={{ borderTop: "1px solid rgba(244,239,230,0.06)" }}>
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(244,239,230,0.3)" }}>Ready?</p>
            <h2 className="display-h rev-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#f4efe6" }}>
              Let&apos;s work together.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
              style={{ background: "#10b981", color: "#0d0d08" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#34d399")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
            >
              Start a project →
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-3 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
              style={{ border: "1px solid rgba(244,239,230,0.2)", color: "#f4efe6" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.color = "#10b981"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(244,239,230,0.2)"; e.currentTarget.style.color = "#f4efe6"; }}
            >
              Join the team →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;
