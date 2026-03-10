const Footer = () => {
  return (
    <footer className="bg-ink text-cream/40 border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-7 text-[0.65rem] font-mono tracking-[0.1em] uppercase md:flex-row md:items-center md:justify-between">
        <p>© 2025 Promethium Labs — All rights reserved</p>
        <div className="flex gap-8">
          <a href="mailto:hello@promethiumlabs.in" className="hover:text-greenMid transition-colors">Email</a>
          <a href="#" className="hover:text-greenMid transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-greenMid transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
