const AboutPage = () => {
  return (
    <main className="min-h-screen bg-cream text-ink">

      {/* ── HERO ───────────────────────────────── */}
      <section className="px-8 md:px-16 pt-36 pb-20 max-md:px-6 border-b border-ink/[0.08]">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-greenMid mb-8">
            About
          </p>
          <h1 className="section-h text-[clamp(3.5rem,8vw,7rem)] mb-10">
            Hey.
            <br />
            <em className="not-italic text-greenMid">We&apos;re Promethium.</em>
          </h1>
          <div className="rule-top pt-8">
            <p className="max-w-2xl text-[1rem] text-gray leading-[1.85] font-light">
              We&apos;re a small, bootstrapped studio in India trying to do three things well: build
              good products, grow good brands, and give students the kind of internships we wish we
              had. We&apos;re not chasing headcount or awards. We care about doing work we can stand
              behind, with people we actually like.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES — OkAlpha list rows on light bg ── */}
      <section className="bg-ink text-cream px-8 md:px-16 py-24 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-greenMid mb-12">
            What we believe
          </p>

          {[
            {
              title: "Conviction over consensus.",
              body: "We'll listen, ask questions, and then recommend what we actually believe will work — even if it's not the easiest sell. We're not here to nod along; we're here to help you win.",
            },
            {
              title: "Ships over perfection.",
              body: "Perfect work that never launches is useless. We aim for 'excellent and live,' not 'flawless and stuck in review.' Small, frequent releases beat one giant reveal.",
            },
            {
              title: "People over process.",
              body: "We keep process light so people can do their best work. Fewer meetings, more ownership, clear communication.",
            },
          ].map((v, i) => (
            <article
              key={i}
              className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t border-white/[0.06] last:border-b last:border-white/[0.06]"
            >
              <h2 className="section-h text-[clamp(1.5rem,2.5vw,2rem)] text-cream">{v.title}</h2>
              <p className="text-cream/55 text-[0.95rem] leading-[1.85] font-light max-w-xl self-center">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── STUDIO ──────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 max-md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between rule-bottom pb-10 mb-12">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-greenMid mb-3">
                The studio
              </p>
              <h2 className="section-h text-[clamp(2rem,4vw,3.5rem)]">Small on purpose.</h2>
            </div>
            <p className="max-w-md text-[0.95rem] text-gray leading-[1.85] font-light">
              Started as a side project. Refused to stay one. We&apos;re a handful of designers,
              developers, and marketers who&apos;d rather work closely with a few good clients than
              sit inside a giant agency machine.
            </p>
          </div>

          {/* Studio card — flat bordered, no shadow */}
          <article className="border border-ink/[0.1] px-8 py-8">
            <h3 className="section-h text-xl mb-1">Promethium Labs</h3>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-greenMid mb-5">
              Design · Code · Growth
            </p>
            <p className="text-[0.95rem] text-gray leading-[1.85] max-w-md font-light">
              A small studio for founders and teams who want honest, fast, thoughtful work across
              product, marketing, and internships.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-mono uppercase tracking-[0.14em] text-greenMid border-b border-greenMid/40 pb-0.5 hover:border-greenMid transition-colors"
            >
              Meet us on LinkedIn ↗
            </a>
          </article>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
