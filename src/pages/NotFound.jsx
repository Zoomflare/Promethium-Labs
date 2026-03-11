import { useSEO } from "../hooks/useSEO";

const NotFoundPage = () => {
  useSEO({ title: "404 — Page Not Found" });

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8"
      style={{ background: "#0d0d08", color: "#f4efe6" }}
    >
      {/* Glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 text-center max-w-xl">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] mb-6" style={{ color: "#10b981" }}>
          Error 404
        </p>
        <h1
          className="font-sans font-black mb-6"
          style={{ fontSize: "clamp(5rem, 18vw, 12rem)", color: "#f4efe6", lineHeight: 1, letterSpacing: "-0.04em" }}
        >
          404
        </h1>
        <p className="text-[1rem] leading-[1.8] font-light mb-10" style={{ color: "rgba(244,239,230,0.5)" }}>
          This page doesn&apos;t exist. We&apos;re a small lab — we can&apos;t build everything at once.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
            style={{ background: "#10b981", color: "#0d0d08" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#34d399")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#10b981")}
          >
            Go Home →
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-sans font-bold text-[0.75rem] tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300"
            style={{ border: "1px solid rgba(244,239,230,0.15)", color: "#f4efe6" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.color = "#10b981"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(244,239,230,0.15)"; e.currentTarget.style.color = "#f4efe6"; }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom label */}
      <p
        className="absolute bottom-8 font-mono text-[0.55rem] uppercase tracking-[0.2em]"
        style={{ color: "rgba(244,239,230,0.15)" }}
      >
        Promethium Labs · Chennai, India
      </p>
    </main>
  );
};

export default NotFoundPage;
