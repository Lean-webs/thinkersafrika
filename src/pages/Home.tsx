import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { HeroLightField } from "../components/HeroLightField";
import { images } from "../data/images";
import "./Home.css";

const pillars = [
  {
    to: "/transport",
    index: "01",
    title: "Commodity transport",
    copy: "Coal, chrome and bulk freight on monitored corridors. RTMS, siding and Eskom route experience over a decade on the road.",
    image: images.transportPhoto,
  },
  {
    to: "/diesel",
    index: "02",
    title: "Diesel Supply",
    copy: "Competitive diesel for mines and logistics. Fleets, bowsers, yellow plant and mining machines with 30 to 60 day payment terms.",
    image: images.dieselTruck,
  },
  {
    to: "/missing-persons",
    index: "03",
    title: "Miner Real-Time Locator",
    copy: "MRTL actively monitors underground worker health, detects emerging crises early, and supports location when a miner is unaccounted for.",
    image: images.undergroundTeam,
  },
  {
    to: "/fleet-monitoring",
    index: "04",
    title: "Fleet monitoring",
    copy: "Prevent commodity and FMCG cargo theft, enforce compliance, handle escalations, and give mines total contractor visibility.",
    image: images.fleetBureau,
  },
  {
    to: "/total-mine-visibility",
    index: "05",
    title: "Total Mine Visibility",
    copy: "Executive AI overlay for pit-level yellow plant: diesel governance, operator scoring and contractor accountability.",
    image: images.tmvPit,
  },
];

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <img
            src={images.homeHero}
            alt=""
            width={2400}
            height={1600}
            fetchPriority="high"
          />
          <HeroLightField />
          <div className="home-hero__shade" />
          <div className="home-hero__beam home-hero__beam--a" />
          <div className="home-hero__beam home-hero__beam--b" />
          <div className="home-hero__grid" />
          <div className="home-hero__scan" />
        </div>

        <div className="home-hero__content container">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            South Africa · Think differently
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            Thinkers
            <br />
            <em>Afrika</em>
          </motion.h1>
          <motion.p
            className="home-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            Commodity transport. Diesel Supply. Miner Real-Time Locator.
            Fleet monitoring. Total Mine Visibility. One South African team
            built for mining operations that cannot afford blind spots.
          </motion.p>
          <motion.div
            className="home-hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
          >
            <Link to="/contact" className="btn btn-primary btn-arrow">
              Get in touch
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About us
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="home-hero__ticker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          <div className="home-hero__ticker-track">
            {[
              "Commodity transport",
              "Diesel Supply",
              "MRTL",
              "Fleet monitoring",
              "Total Mine Visibility",
              "Registered 2015",
              "Think differently",
            ]
              .concat([
                "Commodity transport",
                "Diesel Supply",
                "MRTL",
                "Fleet monitoring",
                "Total Mine Visibility",
                "Registered 2015",
                "Think differently",
              ])
              .map((item, i) => (
                <span key={`${item}-${i}`}>{item}</span>
              ))}
          </div>
        </motion.div>
      </section>

      <section className="section section-light home-intro">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Thinkers Afrika · About</p>
            <h2>
              A registered South African
              <br />
              mining operations partner.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lead">
              Since 2015 we have helped mines and logistics companies move
              product, fuel fleets, protect underground workers and govern
              contractors with evidence. Read the full company story, mission
              and leadership on About us.
            </p>
            <div className="home-split__actions">
              <Link to="/about" className="btn btn-dark btn-arrow">
                About Thinkers Afrika
              </Link>
              <a
                href="https://www.linkedin.com/company/thinkersafrika/"
                className="btn btn-ghost home-about-ghost"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink home-pillars">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Thinkers Afrika · What we do</p>
            <h2 className="home-pillars__title">
              Five capabilities.
              <br />
              One operating standard.
            </h2>
            <p className="home-pillars__lead home-pillars__lead--on-dark">
              Every service page on this site exists for one reason: give mining
              clients control they can prove, from the weighbridge to the pit
              floor.
            </p>
          </Reveal>
        </div>
        <div className="home-pillars__list container-wide">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.to} delay={i * 0.06}>
              <Link to={pillar.to} className="pillar">
                <div className="pillar__media">
                  <img src={pillar.image} alt="" loading="lazy" />
                </div>
                <div className="pillar__body">
                  <span className="pillar__index">{pillar.index}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                  <span className="pillar__cta">
                    View service <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-soft home-split">
        <div className="container grid-2">
          <Reveal>
            <div className="home-split__visual">
              <img
                src={images.transportPhoto}
                alt="Thinkers Afrika branded commodity transport truck"
                loading="lazy"
              />
              <div className="home-split__badge">
                <span className="home-split__pulse" />
                RTMS · Siding · Eskom
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Operations · Commodity transport & Diesel Supply</p>
            <h2>Product and fuel that arrive, and can be proven.</h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              Decade-long commodity haulage with RTMS accreditation, plus
              competitive diesel supply for fleets, bowsers and yellow plant on
              30 to 60 day payment arrangements for qualifying customers.
            </p>
            <div className="home-split__actions">
              <Link to="/transport" className="btn btn-primary btn-arrow">
                Commodity transport
              </Link>
              <Link to="/diesel" className="btn btn-ghost">
                Diesel Supply
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-locator-band">
        <div className="home-locator-band__media" aria-hidden="true">
          <img src={images.undergroundWorkers} alt="" loading="lazy" />
          <div className="home-locator-band__shade" />
        </div>
        <div className="container home-locator-band__content">
          <Reveal>
            <p className="eyebrow">Thinkers Afrika · MRTL</p>
            <h2>
              When a miner goes missing,
              <br />
              <em>the shaft must respond.</em>
            </h2>
            <p className="lead">
              Miner Real-Time Locator actively monitors underground health
              conditions, detects emerging crises early, and supports location
              when someone does not come back from the levels.
            </p>
            <Link to="/missing-persons" className="btn btn-primary btn-arrow">
              Explore MRTL
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-light home-tihlo">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Thinkers Afrika · Monitoring</p>
            <h2>
              Mining corridors and
              <br />
              FMCG clocks, governed.
            </h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              Integrate existing trackers, prevent commodity and cargo theft,
              handle escalations and demurrage disputes, and give mines total
              contractor visibility.
            </p>
            <div className="home-split__actions">
              <Link to="/fleet-monitoring" className="btn btn-dark btn-arrow">
                Explore fleet monitoring
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="home-tihlo__panel">
              <div className="home-tihlo__row">
                <span>01</span>
                <div>
                  <strong>Integrate</strong>
                  <p>Connect existing GPS feeds into one monitoring layer.</p>
                </div>
              </div>
              <div className="home-tihlo__row">
                <span>02</span>
                <div>
                  <strong>Detect</strong>
                  <p>Flag theft risk, deviations and compliance breaches live.</p>
                </div>
              </div>
              <div className="home-tihlo__row">
                <span>03</span>
                <div>
                  <strong>Escalate</strong>
                  <p>Handle alerts and investigations on the client’s behalf.</p>
                </div>
              </div>
              <div className="home-tihlo__row">
                <span>04</span>
                <div>
                  <strong>Report</strong>
                  <p>Deliver clear reports and practical recommendations.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-tmv-band">
        <div className="home-tmv-band__media" aria-hidden="true">
          <img src={images.tmvPit} alt="" loading="lazy" />
          <div className="home-tmv-band__shade" />
        </div>
        <div className="container home-tmv-band__content">
          <Reveal>
            <p className="eyebrow">Thinkers Afrika · Pit intelligence</p>
            <h2>
              Yellow plant performance,
              <br />
              <em>board-ready.</em>
            </h2>
            <p className="lead">
              An executive AI decision layer over pit-level yellow plant:
              diesel anomalies, operator scoring, predictive signals and
              contractor SLA proof for collieries that refuse blind spots.
            </p>
            <Link
              to="/total-mine-visibility"
              className="btn btn-primary btn-arrow"
            >
              Explore Mine Visibility
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink home-cta">
        <div className="container home-cta__inner">
          <Reveal>
            <p className="eyebrow">Thinkers Afrika · Get in touch</p>
            <h2>Tell us what your operation needs.</h2>
            <p className="lead">
              Commodity transport, Diesel Supply, MRTL, fleet monitoring or
              Total Mine Visibility. One registered South African team. One
              number.
            </p>
            <div className="home-split__actions">
              <Link to="/contact" className="btn btn-primary btn-arrow">
                Get in touch
              </Link>
              <Link to="/about" className="btn btn-ghost">
                About us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
