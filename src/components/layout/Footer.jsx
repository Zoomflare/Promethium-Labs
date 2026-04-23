const Footer = () => {
  return (
    <footer style={{ background: "#0d0d08", color: "#f4efe6" }} className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-8 py-14 max-md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10" style={{ borderBottom: "1px solid rgba(244,239,230,0.06)" }}>

          {/* Brand */}
          <div>
            <a href="/" className="font-sans font-black text-lg tracking-[-0.03em] text-cream">
              Promethium<span style={{ color: "#10b981" }}>.</span>Labs
            </a>
            <p className="mt-3 text-[0.85rem] font-light leading-[1.7]" style={{ color: "rgba(244,239,230,0.4)" }}>
              An experimental software lab building AI tools, developer platforms, and digital products.
            </p>
            <p className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.16em]" style={{ color: "rgba(244,239,230,0.2)" }}>
              Chennai, Tamil Nadu, India · Est. 2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(244,239,230,0.3)" }}>Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Projects", href: "/projects" },
                { label: "Learn", href: "/learn" },
                { label: "Careers", href: "/careers" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.82rem] font-sans transition-colors duration-200 hover:text-greenMid"
                  style={{ color: "rgba(244,239,230,0.5)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(244,239,230,0.3)" }}>Get in touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@promethiumlabs.in"
                className="text-[0.82rem] font-sans transition-colors duration-200 hover:text-greenMid"
                style={{ color: "rgba(244,239,230,0.5)" }}
              >
                contact@promethiumlabs.in
              </a>
              <a
                href="https://github.com/promethiumlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.82rem] font-sans transition-colors duration-200 hover:text-greenMid"
                style={{ color: "rgba(244,239,230,0.5)" }}
              >
                GitHub ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em]" style={{ color: "rgba(244,239,230,0.2)" }}>
            © 2026 Promethium Labs — All rights reserved
          </p>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em]" style={{ color: "rgba(244,239,230,0.15)" }}>
            Built in Chennai ✦ Bootstrapped
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
