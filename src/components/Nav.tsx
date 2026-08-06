import { useEffect, useId, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import "./Nav.css";

const homeLink = { to: "/", label: "Home", hint: "Thinkers Afrika" };
const aboutLink = { to: "/about", label: "About us", hint: "Company & partners" };

const services = [
  {
    to: "/transport",
    label: "Commodity transport",
    hint: "Haulage corridors",
    index: "01",
  },
  {
    to: "/diesel",
    label: "Diesel Supply",
    hint: "Fuel for operations",
    index: "02",
  },
  {
    to: "/missing-persons",
    label: "Miner Real-Time Locator",
    hint: "MRTL · underground safety",
    index: "03",
  },
  {
    to: "/fleet-monitoring",
    label: "Fleet monitoring",
    hint: "Routes & assurance",
    index: "04",
  },
  {
    to: "/total-mine-visibility",
    label: "Total Mine Visibility",
    hint: "Pit intelligence",
    index: "05",
  },
];

const servicePaths = services.map((s) => s.to);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const servicesId = useId();
  const desktopServicesRef = useRef<HTMLDivElement>(null);

  const onServiceRoute = servicePaths.some((path) =>
    location.pathname.startsWith(path),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (desktopServicesRef.current?.contains(target)) return;
      setServicesOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header
      className={[
        "nav",
        scrolled ? "nav--scrolled" : "",
        open ? "nav--open" : "",
        servicesOpen ? "nav--services-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="nav__shell">
        <div className="nav__bar container-wide">
          <Logo />
          <nav className="nav__desktop" aria-label="Primary">
            <NavLink
              to={homeLink.to}
              end
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {homeLink.label}
            </NavLink>
            <NavLink
              to={aboutLink.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {aboutLink.label}
            </NavLink>

            <div className="nav__services" ref={desktopServicesRef}>
              <button
                type="button"
                className={`nav__link nav__services-trigger ${
                  servicesOpen || onServiceRoute ? "nav__link--active" : ""
                }`}
                aria-expanded={servicesOpen}
                aria-controls={servicesId}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Our Services
                <span
                  className={`nav__services-caret ${servicesOpen ? "is-open" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={servicesId}
                className={`nav__mega ${servicesOpen ? "is-open" : ""}`}
                aria-hidden={!servicesOpen}
              >
                <div className="nav__mega-inner container-wide">
                  <div className="nav__mega-head">
                    <p className="nav__mega-eyebrow">Thinkers Afrika · Services</p>
                    <p className="nav__mega-lead">
                      Five capabilities. One operating standard for mining
                      clients who need proof, not promises.
                    </p>
                  </div>
                  <div className="nav__mega-rail">
                    {services.map((service, i) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) =>
                          `nav__mega-item ${isActive ? "nav__mega-item--active" : ""}`
                        }
                        style={{
                          transitionDelay: servicesOpen
                            ? `${70 + i * 55}ms`
                            : "0ms",
                        }}
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="nav__mega-index">{service.index}</span>
                        <span className="nav__mega-label">{service.label}</span>
                        <span className="nav__mega-hint">{service.hint}</span>
                        <span className="nav__mega-go" aria-hidden="true">
                          Open →
                        </span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            <NavLink
              to={homeLink.to}
              end
              className={({ isActive }) =>
                `nav__drawer-link ${isActive ? "nav__drawer-link--active" : ""}`
              }
              style={{ transitionDelay: open ? "90ms" : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <span className="nav__drawer-index">01</span>
              <span className="nav__drawer-copy">
                <span className="nav__drawer-label">{homeLink.label}</span>
                <span className="nav__drawer-hint">{homeLink.hint}</span>
              </span>
              <span className="nav__drawer-arrow" aria-hidden="true">
                →
              </span>
            </NavLink>

            <NavLink
              to={aboutLink.to}
              className={({ isActive }) =>
                `nav__drawer-link ${isActive ? "nav__drawer-link--active" : ""}`
              }
              style={{ transitionDelay: open ? "145ms" : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <span className="nav__drawer-index">02</span>
              <span className="nav__drawer-copy">
                <span className="nav__drawer-label">{aboutLink.label}</span>
                <span className="nav__drawer-hint">{aboutLink.hint}</span>
              </span>
              <span className="nav__drawer-arrow" aria-hidden="true">
                →
              </span>
            </NavLink>

            <button
              type="button"
              className={`nav__drawer-link nav__drawer-services-trigger ${
                mobileServicesOpen || onServiceRoute
                  ? "nav__drawer-link--active"
                  : ""
              }`}
              style={{ transitionDelay: open ? "200ms" : "0ms" }}
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <span className="nav__drawer-index">03</span>
              <span className="nav__drawer-copy">
                <span className="nav__drawer-label">Our Services</span>
                <span className="nav__drawer-hint">
                  {mobileServicesOpen ? "Tap to close" : "Five capabilities"}
                </span>
              </span>
              <span
                className={`nav__drawer-arrow nav__drawer-arrow--caret ${
                  mobileServicesOpen ? "is-open" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`nav__drawer-services ${mobileServicesOpen ? "is-open" : ""}`}
              aria-hidden={!mobileServicesOpen}
            >
              <div className="nav__drawer-services-rail">
                {services.map((service) => (
                  <NavLink
                    key={service.to}
                    to={service.to}
                    className={({ isActive }) =>
                      `nav__drawer-chip ${isActive ? "nav__drawer-chip--active" : ""}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    <span>{service.index}</span>
                    <strong>{service.label}</strong>
                    <em>{service.hint}</em>
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          <div
            className="nav__drawer-foot"
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
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
