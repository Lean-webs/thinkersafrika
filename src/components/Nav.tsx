import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "./Logo";
import "./Nav.css";

const links = [
  { to: "/about", label: "About us" },
  { to: "/transport", label: "Commodity transport" },
  { to: "/diesel", label: "Diesel Supply" },
  { to: "/missing-persons", label: "MRTL" },
  { to: "/fleet-monitoring", label: "Fleet monitoring" },
  { to: "/total-mine-visibility", label: "Mine Visibility" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__bar container-wide">
        <Logo />
        <nav className="nav__desktop" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary nav__cta">
          Get in touch
        </Link>
        <button
          type="button"
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="nav__drawer-link"
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <span className="nav__drawer-index">0{i + 1}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="btn btn-primary btn-arrow"
          onClick={() => setOpen(false)}
        >
          Book a conversation
        </Link>
      </div>
    </header>
  );
}
