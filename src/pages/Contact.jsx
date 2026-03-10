import { useEffect, useState } from "react";
import { useMagnetic } from "../hooks/useMagnetic";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fn: "", ln: "", em: "", sv: "", msg: "" });
  const submitRef = useMagnetic(0.15);

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const { fn, em, msg } = formData;
    if (!fn || !em || !msg) {
      const form = document.querySelector(".ct-form");
      if (form) {
        form.style.animation = "shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97)";
        setTimeout(() => (form.style.animation = ""), 400);
      }
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-ink text-cream overflow-x-hidden">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left copy */}
        <div className="flex flex-col justify-center gap-8 px-6 py-24 md:px-16 rev-left">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-greenMid">
            Get in touch
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.03em]">
            Let&apos;s make
            <br />
            <span className="italic text-greenMid">something</span>
            <br />
            worth making.
          </h1>
          <p className="max-w-md text-sm md:text-base text-cream/60 leading-relaxed font-light">
            A product idea you can’t shake, a brand that deserves better
            marketing, or an internship you wish existed — send it over. We read
            every message ourselves.
          </p>
          <div className="space-y-4 text-sm mt-4">
            <a
              href="mailto:hello@promethiumlabs.in"
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-4 transition-all hover:border-greenMid/30 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-base">
                ✉️
              </span>
              <span>
                <span className="block text-[0.65rem] font-mono uppercase tracking-[0.16em] text-white/40">
                  Email
                </span>
                <span className="text-white/80">hello@promethiumlabs.in</span>
              </span>
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] py-4 text-white/40 transition-all hover:border-greenMid/30 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] py-4 text-white/40 transition-all hover:border-greenMid/30 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="flex items-center bg-[#fcfaf7] text-ink px-6 py-24 md:px-16 rev-right">
          <div className="ct-form mx-auto w-full max-w-md rounded-2xl border border-ink/5 bg-cream p-10 shadow-2xl relative">
            {!submitted ? (
              <>
                <h2 className="font-serif text-2xl mb-2">Send us a message</h2>
                <p className="mb-8 text-sm text-gray/60 leading-relaxed font-light">
                  Tell us what you&apos;re working on, where you are, and what success looks like.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="cf-g">
                      <input
                        id="fn"
                        type="text"
                        required
                        placeholder="Arjun"
                        onChange={handleInputChange}
                        className="w-full border-b border-ink/10 bg-transparent py-2 text-sm outline-none focus:border-greenMid transition-all placeholder:opacity-0"
                      />
                      <label htmlFor="fn" className="absolute left-0 top-2 text-[0.65rem] font-mono uppercase tracking-widest text-gray/40">First Name</label>
                    </div>
                    <div className="cf-g">
                      <input
                        id="ln"
                        type="text"
                        placeholder="Sharma"
                        onChange={handleInputChange}
                        className="w-full border-b border-ink/10 bg-transparent py-2 text-sm outline-none focus:border-greenMid transition-all placeholder:opacity-0"
                      />
                      <label htmlFor="ln" className="absolute left-0 top-2 text-[0.65rem] font-mono uppercase tracking-widest text-gray/40">Last Name</label>
                    </div>
                  </div>
                  <div className="cf-g">
                    <input
                      id="em"
                      type="email"
                      required
                      placeholder="you@example.com"
                      onChange={handleInputChange}
                      className="w-full border-b border-ink/10 bg-transparent py-2 text-sm outline-none focus:border-greenMid transition-all placeholder:opacity-0"
                    />
                    <label htmlFor="em" className="absolute left-0 top-2 text-[0.65rem] font-mono uppercase tracking-widest text-gray/40">Email</label>
                  </div>
                  <div className="cf-g">
                    <select
                      id="sv"
                      required
                      onChange={handleInputChange}
                      className="w-full border-b border-ink/10 bg-transparent py-2 text-sm outline-none focus:border-greenMid transition-all"
                    >
                      <option value="">I&apos;m interested in...</option>
                      <option key="opt-1" value="Internship Program">Internship Program</option>
                      <option key="opt-2" value="Digital Marketing">Digital Marketing</option>
                      <option key="opt-3" value="Product Development">Product Development</option>
                      <option key="opt-4" value="Something Else">Something Else</option>
                    </select>
                  </div>
                  <div className="cf-g">
                    <textarea
                      id="msg"
                      rows={4}
                      required
                      placeholder="Your message"
                      onChange={handleInputChange}
                      className="w-full border-b border-ink/10 bg-transparent py-2 text-sm outline-none focus:border-greenMid transition-all placeholder:opacity-0"
                    />
                    <label htmlFor="msg" className="absolute left-0 top-2 text-[0.65rem] font-mono uppercase tracking-widest text-gray/40">Message</label>
                  </div>
                  <button
                    type="submit"
                    ref={submitRef}
                    className="cf-submit mt-4 w-full rounded-sm bg-ink px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] text-cream transition-all hover:bg-greenMid"
                  >
                    Send Message ✦
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[350px] text-center gap-6 animate-scaleIn">
                <div className="w-16 h-16 rounded-full bg-greenPale border-2 border-greenMid flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div className="font-serif text-2xl font-light">
                  We got it.
                </div>
                <p className="text-sm text-gray/60 leading-relaxed max-w-[280px] font-light">
                  Expect a reply within 24 hours. We read every message personally.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
