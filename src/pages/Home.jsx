import { useEffect, useRef } from "react";
import RotatingWord from "../components/hero/RotatingWord.jsx";
import { useMagnetic } from "../hooks/useMagnetic";

const Home = () => {
  const heroRef = useRef(null);
  const blobRefs = useRef([]);
  const cta1Ref = useMagnetic(0.2);
  const cta2Ref = useMagnetic(0.25);

  useEffect(() => {
    // Scroll Reveal Observer
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

    document.querySelectorAll(".rev, .rev-left, .rev-right, .rev-scale, .rev-clip").forEach((el) => {
      revObs.observe(el);
    });

    // Parallax Blobs
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;

      blobRefs.current.forEach((blob, i) => {
        if (!blob) return;
        const depth = (i + 1) * 15;
        const x = cx * depth;
        const y = cy * depth;
        blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (hero) hero.removeEventListener("mousemove", handleMouseMove);
      revObs.disconnect();
    };
  }, []);

  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        className="hero min-h-screen grid grid-rows-[1fr_auto] px-16 pb-16 pt-40 max-md:px-6 relative"
      >
        <div className="hero-blob hero-blob-1" ref={(el) => (blobRefs.current[0] = el)} />
        <div className="hero-blob hero-blob-2" ref={(el) => (blobRefs.current[1] = el)} />
        <div className="hero-blob hero-blob-3" ref={(el) => (blobRefs.current[2] = el)} />
        <div className="hero-blob hero-blob-4" ref={(el) => (blobRefs.current[3] = el)} />
        <div className="hero-grain" />

        <div className="relative z-10">
          <div className="hero-eyebrow rev-left inline-flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.14em] uppercase text-greenMid">
            Bootstrapped · India · Est. 2025
          </div>
          <h1 className="hero-h mt-6 font-serif text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.91] font-light tracking-[-0.04em]">
            We&apos;re a startup
            <br />
            <span className="line2 block italic text-greenMid rev-clip">
              that actually <RotatingWord />
            </span>
          </h1>
        </div>

        <div className="hero-sub-row flex flex-wrap items-end justify-between gap-8 border-t border-ink/10 pt-12 max-w-5xl relative z-10">
          <p className="hero-desc rev max-w-md text-[0.95rem] leading-[1.75] text-gray">
            <strong className="font-medium text-ink">Promethium Labs</strong> does
            three things — builds real products, runs digital marketing that
            converts, and gives students{" "}
            <strong className="font-medium text-ink">
              internships that actually teach you something.
            </strong>{" "}
            No fluff. No bloat.
          </p>
          <div className="hero-ctas flex flex-wrap items-center gap-4 rev-right">
            <a href="/services" ref={cta1Ref} className="cta-main">
              See What We Do
            </a>
            <a href="/contact" ref={cta2Ref} className="cta-ghost">
              Start a project →
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR - TWO LANE TICKER */}
      <div className="stats-bar-wrapper">
        <div className="stats-bar">
          <div className="stats-track">
            {[1, 2].map((i) => (
              <div key={i} className="flex">
                <div className="stat-item"><span className="n">12+</span><span className="l">Products Built</span></div>
                <div className="stat-item"><span className="n">40+</span><span className="l">Students Mentored</span></div>
                <div className="stat-item"><span className="n">20+</span><span className="l">Clients Served</span></div>
                <div className="stat-item"><span className="n">3</span><span className="l">Core Services</span></div>
                <div className="stat-item"><span className="n">100%</span><span className="l">Bootstrapped</span></div>
                <div className="stat-item"><span className="n">∞</span><span className="l">Ambition</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="stats-bar border-t-0 opacity-80" style={{ borderTop: "none" }}>
          <div className="stats-track" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {[1, 2].map((i) => (
              <div key={i} className="flex">
                <div className="stat-item"><span className="n">Fast</span><span className="l">Turnaround</span></div>
                <div className="stat-item"><span className="n">Real</span><span className="l">Mentorship</span></div>
                <div className="stat-item"><span className="n">Zero</span><span className="l">Bullshit</span></div>
                <div className="stat-item"><span className="n">Live</span><span className="l">Client Work</span></div>
                <div className="stat-item"><span className="n">India</span><span className="l">Based Team</span></div>
                <div className="stat-item"><span className="n">Remote</span><span className="l">Friendly</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section
        id="about"
        className="manifesto grid gap-16 border-t border-ink/5 bg-cream px-16 py-32 max-md:grid-cols-1 max-md:gap-8 max-md:px-6 max-md:py-24"
      >
        <div className="manifesto-label rev-left font-mono text-[0.62rem] tracking-[0.18em] uppercase text-greenMid pt-1">
          [ Who We Are ]
        </div>
        <div className="manifesto-right space-y-6">
          <h2 className="manifesto-h rev-clip font-serif text-[clamp(2rem,3.5vw,3.8rem)] font-light leading-[1.06] tracking-[-0.022em]">
            We loathe mediocrity.
            <br />
            We build things <em>worth building.</em>
          </h2>
          <p className="manifesto-body rev-scale max-w-xl text-[1.05rem] leading-[1.85] text-gray font-light">
            Promethium Labs is a <strong>bootstrapped startup</strong> doing
            three things with full conviction. We&apos;re not trying to be a
            hundred-person agency. We&apos;re a small, hungry team that moves
            fast, cares deeply, and ships work we&apos;re actually proud of.
            <br />
            <br />
            Being early-stage means every decision is intentional. It means
            we&apos;re <strong>on the same side as you</strong> — your win is
            our win. Nothing about us is accidental.
          </p>
          <div className="manifesto-note rev-scale inline-flex items-center gap-2 rounded-full border border-greenPale bg-greenPale px-4 py-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-greenMid">
            ✦ Promethium — the element of energy &amp; possibility
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

