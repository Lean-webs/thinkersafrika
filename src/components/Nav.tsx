import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import "./Nav.css";

const links = [
  { to: "/about", label: "About us", hint: "Company & partners" },
  { to: "/transport", label: "Commodity transport", hint: "Haulage corridors" },
  { to: "/diesel", label: "Diesel Supply", hint: "Fuel for operations" },
  { to: "/missing-persons", label: "MRTL", hint: "Miner Real-Time Locator" },
  { to: "/fleet-monitoring", label: "Fleet monitoring", hint: "Routes & assurance" },
  {
    to: "/total-mine-visibility",
    label: "Mine Visibility",
    hint: "Pit intelligence",
  },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}
    >
      <div className="nav__shell">
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
      </div>

      <div
        className={`nav__drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav__drawer-bg" aria-hidden="true">
          <div className="nav__drawer-glow" />
          <div className="nav__drawer-grid" />
        </div>

        <div className="nav__drawer-inner">
          <p className="nav__drawer-eyebrow">
            <span>Menu</span>
            <span className="nav__drawer-live">Think differently</span>
          </p>

          <nav className="nav__drawer-nav" aria-label="Mobile">
            {links.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav__drawer-link ${isActive ? "nav__drawer-link--active" : ""}`
                }
                style={{
                  transitionDelay: open ? `${90 + i * 55}ms` : "0ms",
                }}
                onClick={() => setOpen(false)}
              >
                <span className="nav__drawer-index">0{i + 1}</span>
                <span className="nav__drawer-copy">
                  <span className="nav__drawer-label">{link.label}</span>
                  <span className="nav__drawer-hint">{link.hint}</span>
                </span>
                <span className="nav__drawer-arrow" aria-hidden="true">
                  →
                </span>
              </NavLink>
            ))}
          </nav>

          <div
            className="nav__drawer-foot"
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
          >
            <Link
              to="/contact"
              className="btn btn-primary btn-arrow nav__drawer-cta"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
            <div className="nav__drawer-meta">
              <a href="tel:+27100126094">+27 10 012 6094</a>
              <a href="mailto:info@thinkersafrika.co.za">
                info@thinkersafrika.co.za
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
