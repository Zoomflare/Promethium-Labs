import { useEffect } from "react";

const services = [
  {
    id: "01",
    title: "Student Internships",
    eyebrow: "Built like a first job",
    body: "You don't make coffee. You don't sit in fake 'shadowing' calls. You work on live projects, with real constraints, real deadlines, and real mentorship.",
    bullets: [
      "Live client work from week one",
      "1:1 mentorship from people who have actually shipped",
      "Portfolio pieces that are not made up",
      "Flexible duration: 4–12 weeks",
      "Stipends for top performers",
    ],
    tag: "View open roles",
    href: "/internships",
  },
  {
    id: "02",
    title: "Digital Marketing",
    eyebrow: "Zero vanity metrics",
    body: "We don't chase impressions for a slide deck. We care about the numbers that pay rent: revenue, qualified leads, and retention.",
    bullets: [
      "Search: SEO audits & content engines",
      "Performance: paid search & paid social",
      "Social: channels that sound human",
      "Analytics: clear dashboards, honest reporting",
    ],
    tag: "Talk growth",
    href: "/contact",
  },
  {
    id: "03",
    title: "Product Development",
    eyebrow: "From Figma to 'it is live'",
    body: "We help you go from idea to prototype to product without disappearing for six months and coming back with something you never asked for.",
    bullets: [
      "MVPs & first versions",
      "SaaS dashboards & internal tools",
      "Marketing sites & systems",
      "Post-launch support & iteration",
    ],
    tag: "Scope a build",
    href: "/contact",
  },
];

const ServiceRow = ({ svc, index }) => {
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

// Expanded detail panel shown below the service list
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
          {/* OkAlpha rule below hero text */}
          <div className="rule-top-dark pt-8">
            <p className="rev max-w-2xl text-cream/55 text-[0.95rem] leading-[1.85] font-light">
              Three things, done with unreasonable care: internships that actually train you,
              marketing that moves real numbers, and products that don&apos;t fall apart the moment
              they go live.
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

    </main>
  );
};

export default ServicesPage;
