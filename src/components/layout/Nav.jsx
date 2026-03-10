import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/internships", label: "Internships" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Pages with dark (ink) backgrounds — nav needs cream text
const DARK_BG_ROUTES = ["/services", "/internships"];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isDarkPage = DARK_BG_ROUTES.some(r => location.pathname.startsWith(r));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On dark-bg pages: always cream text, frosted dark bg when scrolled
  // On light-bg pages: ink text, cream bg when scrolled
  const navBg = isDarkPage
    ? scrolled ? "rgba(13,13,8,0.95)" : "transparent"
    : scrolled ? "#f4efe6" : "transparent";

  const textColor = isDarkPage ? "#f4efe6" : "#0d0d08";
  const logoAccent = "#10b981";
  const hireColor = isDarkPage ? "text-cream" : "text-cream";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full pointer-events-none transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? isDarkPage
            ? "1px solid rgba(244,239,230,0.08)"
            : "1px solid rgba(13,13,8,0.1)"
          : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 pointer-events-auto max-md:px-5">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-sans font-black text-lg tracking-[-0.03em] transition-colors duration-200"
          style={{ color: textColor }}
        >
          Promethium
          <span style={{ color: logoAccent }}>.</span>
          Labs
        </NavLink>

        {/* Links */}
        <div className="hidden gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "nav-link text-[0.78rem] font-sans font-medium tracking-[0.02em] transition-colors duration-200",
                  isActive ? "active" : "",
                ].join(" ")
              }
              style={({ isActive }) => ({
                color: isActive
                  ? isDarkPage ? "#f4efe6" : "#0d0d08"
                  : isDarkPage ? "rgba(244,239,230,0.55)" : "#7a7468",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-cream text-[0.72rem] font-sans font-bold tracking-[0.1em] uppercase px-5 py-[0.65rem] transition-all duration-300"
          style={{
            background: isDarkPage ? "#10b981" : "#0d0d08",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#10b981")}
          onMouseLeave={(e) => (e.currentTarget.style.background = isDarkPage ? "#10b981" : "#0d0d08")}
        >
          Hire Us →
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
