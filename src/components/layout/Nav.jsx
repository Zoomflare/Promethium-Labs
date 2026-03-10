import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", id: "home" },
  { to: "/services", label: "Services", id: "services" },
  { to: "/internships", label: "Internships", id: "internships" },
  { to: "/about", label: "About", id: "about" },
  { to: "/contact", label: "Contact", id: "contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // Active link detection for sections on the home page or general page tracking
      const sections = document.querySelectorAll("section[id], div[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full pointer-events-none">
      <nav
        className={[
          "mx-auto flex max-w-6xl items-center justify-between transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1) pointer-events-auto",
          scrolled
            ? "py-4 px-16 bg-cream/98 backdrop-blur-md shadow-[0_1px_0_rgba(26,26,20,0.08)]"
            : "py-8 px-16 bg-transparent",
          "max-md:px-6",
        ].join(" ")}
      >
        <NavLink
          to="/"
          className="font-serif text-xl tracking-tight hover:text-ink transition-colors"
        >
          <span>Promethium</span>
          <span className="text-greenMid">.</span>
          <span>Labs</span>
        </NavLink>

        <div className="hidden gap-8 md:flex text-[0.62rem] font-mono uppercase tracking-[0.12em] text-gray">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "nav-link relative flex items-center gap-1 transition-colors duration-200",
                  isActive || activeSection === link.id ? "text-ink active" : "hover:text-ink",
                ].join(" ")
              }
            >
              <span>{link.label}</span>
              {(location.pathname === link.to || activeSection === link.id) && (
                <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-greenMid animate-scaleIn" />
              )}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="nav-btn hidden md:inline-flex items-center rounded-[2px] bg-ink text-cream px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] transition-all duration-300 hover:bg-greenMid"
        >
          Hire Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;

