const Footer = () => {
  return (
    <footer className="border-t border-cream2 bg-cream2/80 text-gray mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs md:flex-row md:items-center md:justify-between">
        <p>© 2025 Promethium Labs — All rights reserved</p>
        <div className="flex gap-6">
          <a href="mailto:hello@promethiumlabs.in">Email</a>
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

