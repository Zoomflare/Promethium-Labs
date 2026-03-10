import { useEffect } from "react";
import { useMagnetic } from "../hooks/useMagnetic";

const services = [
  {
    id: "01",
    title: "Student Internships",
    eyebrow: "Built like a first job",
    body: "You don’t make coffee. You don’t sit in fake “shadowing” calls. You work on live projects, with real constraints, real deadlines, and real mentorship.",
    bullets: [
      "Live client work from week one",
      "1:1 mentorship from people who’ve actually shipped",
      "Portfolio pieces that aren’t made up",
      "Flexible duration: 4–12 weeks",
      "Stipends for top performers",
    ],
    tag: "View open roles →",
    href: "/internships",
  },
  {
    id: "02",
    title: "Digital Marketing",
    eyebrow: "Zero vanity metrics",
    body: "We don’t chase impressions for a slide deck. We care about the numbers that pay rent: revenue, qualified leads, and retention.",
    bullets: [
      "Search: SEO audits & content engines",
      "Performance: paid search & paid social",
      "Social: channels that sound human",
      "Analytics: clear dashboards, honest reporting",
    ],
    tag: "Talk growth →",
    href: "/contact",
  },
  {
    id: "03",
    title: "Product Development",
    eyebrow: "From Figma to “it’s live”",
    body: "We help you go from idea → prototype → product without disappearing for six months and coming back with something you never asked for.",
    bullets: [
      "MVPs & first versions",
      "SaaS dashboards & internal tools",
      "Marketing sites & systems",
      "Post‑launch support & iteration",
    ],
    tag: "Scope a build →",
    href: "/contact",
  },
];

const ServiceCard = ({ svc, index }) => {
  const magneticRef = useMagnetic(0.2);

  return (
    <article
      className={`svc-panel group relative border-b border-white/5 bg-gradient-to-b from-white/0 to-white/[0.02] px-6 py-10 md:px-8 md:py-14 transition-colors duration-500 hover:bg-white/[0.03] rev rev-d${index + 1}`}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-greenMid to-greenBright opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center justify-between text-[0.6rem] font-mono uppercase tracking-[0.12em] text-cream/30">
        <span className="svc-num transition-all duration-300 group-hover:text-greenMid group-hover:translate-x-1">
          {svc.id} / 03
        </span>
      </div>
      <p className="mt-6 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-greenMid">
        {svc.eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-none tracking-[-0.02em] text-cream group-hover:text-greenMid transition-colors">
        {svc.title}
      </h2>
      <p className="mt-4 text-sm text-cream/60 leading-relaxed">
        {svc.body}
      </p>
      <ul className="mt-6 space-y-1.5 text-[0.8rem] text-cream/55">
        {svc.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[0.25rem] h-[3px] w-[3px] rounded-full bg-greenMid" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={svc.href}
        ref={magneticRef}
        className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-mono uppercase tracking-[0.14em] text-greenMid/80 hover:text-greenBright transition-colors"
      >
        {svc.tag}
      </a>
      {/* radial glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(45,186,110,0.06),transparent_70%)] blur-3xl" />
      </div>
    </article>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggering is handled by CSS classes rev-d1, rev-d2
            setTimeout(() => {
              entry.target.classList.add("in");
            }, 0);
            revObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".rev, .rev-left, .rev-right, .rev-clip").forEach((el) => {
      revObs.observe(el);
    });

    return () => revObs.disconnect();
  }, []);

  return (
    <main className="bg-ink text-cream min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-16 overflow-hidden">
        <div className="mx-auto max-w-5xl space-y-8">
          <p className="rev-left font-mono text-[0.65rem] uppercase tracking-[0.18em] text-greenMid">
            Services
          </p>
          <h1 className="services-h font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.04] tracking-[-0.035em] rev-clip">
            What we do,
            <br />
            <span className="italic text-greenMid">and how.</span>
          </h1>
          <p className="rev max-w-2xl text-sm md:text-base text-cream/70 leading-relaxed">
            Three things, done with unreasonable care: internships that actually
            train you, marketing that moves real numbers, and products that
            don’t fall apart the moment they go live.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t border-white/5 bg-ink">
        <div className="mx-auto grid max-w-6xl border-x border-white/5 md:grid-cols-3">
          {services.map((svc, idx) => (
            <ServiceCard key={svc.id} svc={svc} index={idx} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

