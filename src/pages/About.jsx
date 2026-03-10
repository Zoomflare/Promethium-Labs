const AboutPage = () => {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-16">
        <div className="mx-auto max-w-5xl space-y-8">
          <h1 className="font-serif text-[clamp(3rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em]">
            Hey.
            <br />
            We&apos;re Promethium.
          </h1>
          <p className="max-w-3xl text-[1.02rem] text-gray leading-[1.85]">
            We&apos;re a small, bootstrapped studio in India trying to do three
            things well: build good products, grow good brands, and give students
            the kind of internships we wish we had. We&apos;re not chasing
            headcount or awards. We care about doing work we can stand behind,
            with people we actually like.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-ink/5 bg-cream2 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-green">
            What we believe
          </p>
          <div className="space-y-12">
            <article className="space-y-3">
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">
                Conviction over consensus.
              </h2>
              <p className="max-w-2xl text-sm text-gray leading-relaxed">
                We&apos;ll listen, ask questions, and then recommend what we
                actually believe will work — even if it&apos;s not the easiest
                sell. We&apos;re not here to nod along; we&apos;re here to help
                you win.
              </p>
            </article>
            <article className="space-y-3 md:text-right md:ml-auto md:max-w-2xl">
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">
                Ships over perfection.
              </h2>
              <p className="text-sm text-gray leading-relaxed">
                Perfect work that never launches is useless. We aim for
                &quot;excellent and live,&quot; not &quot;flawless and stuck in
                review.&quot; Small, frequent releases beat one giant reveal.
              </p>
            </article>
            <article className="space-y-3">
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.02em]">
                People over process.
              </h2>
              <p className="max-w-2xl text-sm text-gray leading-relaxed">
                We keep process light so people can do their best work. Fewer
                meetings, more ownership, clear communication. Enough structure
                to feel safe, not so much that it kills initiative.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-green">
                The studio
              </p>
              <h2 className="mt-2 font-serif text-[clamp(1.8rem,3vw,2.2rem)] tracking-[-0.02em]">
                Small on purpose.
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray leading-relaxed">
              Started as a side project. Refused to stay one. We&apos;re a
              handful of designers, developers, and marketers who&apos;d rather
              work closely with a few good clients than sit inside a giant
              agency machine.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-ink/8 bg-cream shadow-sm px-5 py-6">
              <h3 className="font-serif text-lg">Promethium Labs</h3>
              <p className="mt-1 text-[0.75rem] font-mono uppercase tracking-[0.16em] text-gray">
                Design · Code · Growth
              </p>
              <p className="mt-4 text-sm text-gray leading-relaxed">
                A small studio for founders and teams who want honest, fast,
                thoughtful work across product, marketing, and internships.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-[0.75rem] font-mono uppercase tracking-[0.16em] text-greenDark"
              >
                Meet us on LinkedIn <span className="text-xs">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

