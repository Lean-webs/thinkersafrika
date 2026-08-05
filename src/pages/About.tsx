import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./ServicePage.css";
import "./About.css";

const credentials = [
  { label: "Registered", value: "2015" },
  { label: "CIPC reg. no.", value: "2015/073963/07" },
  { label: "Years of delivering excellent service", value: "10+" },
  { label: "Based in", value: "Hatfield, Pretoria" },
];

const values = [
  {
    title: "Accountability",
    copy: "Every load, litre and alert must leave a clear record that stands up to scrutiny.",
  },
  {
    title: "Safety first",
    copy: "People, corridors and plant come before speed. We design operations to reduce harm.",
  },
  {
    title: "Integrity",
    copy: "We tell clients what the data shows, even when the answer is uncomfortable.",
  },
  {
    title: "Excellence in delivery",
    copy: "Service is measured in reliability, response time and outcomes that protect the client.",
  },
];

const safetyPillars = [
  {
    title: "Safety preparedness",
    copy: "Route rules, underground health monitoring, operator behaviour scoring and escalation protocols that put people ahead of production pressure.",
  },
  {
    title: "Operational integrity",
    copy: "Immutable evidence trails for haulage, diesel, contractor SLAs and pit utilisation so decisions are grounded in fact, not paper claims.",
  },
  {
    title: "Compliance discipline",
    copy: "RTMS-aligned haulage practice, corridor control and site parameters enforced with independent verification on behalf of the client.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Company registered",
    copy: "Thinkers Afrika (Pty) Ltd is registered with the CIPC and begins building mining logistics capability in South Africa.",
  },
  {
    year: "Decade+",
    title: "Commodity corridors",
    copy: "Sustained haulage across coal, chrome and bulk routes, including siding and Eskom delivery experience.",
  },
  {
    year: "Today",
    title: "Full operating stack",
    copy: "Transport, Diesel Supply, MRTL, fleet monitoring and Total Mine Visibility under one accountable team.",
  },
];

const miningClients = [
  {
    name: "Manungu Colliery",
    role: "Coal operation",
    copy: "Live haul-fleet monitoring across routes, shift discipline and safety signals so management has a clear record when movement or compliance does not match what was approved.",
  },
  {
    name: "Ntshovelo Colliery",
    role: "Coal operation",
    copy: "High-volume fleet movement across long shifts, with route exceptions, unauthorised stops and compliance gaps classified while trips are still current.",
  },
  {
    name: "Khashani Colliery",
    role: "Coal operation",
    copy: "Disciplined fleet movement between dispatch points, tying route adherence, safety events and compliance checks into one audit-ready record.",
  },
  {
    name: "Mavungwani Colliery",
    role: "Coal operation",
    copy: "Corridor timing, safety and compliance risk monitored from release to arrival, with every exception turned into a named, reviewable record.",
  },
];

const partners = [
  {
    name: "Sasol",
    role: "Energy partner",
    copy: "A strategic energy partner in the South African fuel landscape, supporting reliable supply pathways for industrial and logistics demand.",
  },
  {
    name: "Engen",
    role: "Diesel supplier",
    copy: "Engen supplies diesel to Thinkers Afrika, anchoring product access for our Diesel Supply operations and the fleets and sites we keep fuelled.",
  },
  {
    name: "Nexus Fuel Solutions",
    role: "Fuel solutions partner",
    copy: "Partnered for fuel solutions that help keep mining and logistics operations supplied with commercial clarity and dependable fulfilment.",
  },
];

const dieselClients = [
  {
    name: "River Energy",
    role: "Diesel supply client",
    copy: "Thinkers Afrika supplies diesel to River Energy, delivering reliable fulfilment with the commercial clarity and continuity their operations require.",
  },
];

const companyLinkedIn = "https://www.linkedin.com/company/thinkersafrika/";

export function About() {
  return (
    <>
      <header className="page-hero about-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img src={images.contactHero} alt="" />
          <div className="page-hero__shade about-hero__shade" />
        </div>
        <div className="page-hero__content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Thinkers Afrika · About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Think differently.
            <br />
            <em>Deliver with proof.</em>
          </motion.h1>
          <motion.p
            className="lead"
            style={{ color: "rgba(244,241,236,0.82)" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            We are a South African mining operations partner registered in 2015.
            Our work sits where logistics, diesel, people safety and plant
            intelligence meet, so mines never have to guess what happened on
            the road or in the pit.
          </motion.p>
          <motion.div
            className="about-hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={companyLinkedIn}
              className="btn btn-primary btn-arrow"
              target="_blank"
              rel="noreferrer"
            >
              Follow on LinkedIn
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </header>

      <section className="about-cred-strip">
        <div className="container">
          <div className="about-cred-strip__grid">
            {credentials.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="about-cred">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container about-story">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Our story</p>
              <h2 className="service-h2">
                Registered in 2015. Built for the long haul.
              </h2>
            </div>
          </Reveal>
          <div className="grid-2 about-story__body">
            <Reveal>
              <p className="about-prose">
                Thinkers Afrika (Pty) Ltd was first registered in South Africa in
                2015 under CIPC registration number{" "}
                <strong className="about-reg">2015/073963/07</strong>. From
                Mindspace Offices in Hatfield, Pretoria, we serve mines and
                logistics companies that need more than movement. They need
                evidence, escalation and outcomes they can defend.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-prose">
                For more than a decade we have hauled commodities across hard
                corridors, supplied diesel on commercial terms that respect cash
                flow, and built monitoring platforms that turn GPS, sensor and
                plant data into decisions executives can trust.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-ink about-timeline">
        <div className="container">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Journey</p>
              <h2 className="service-h2">From registration to full stack.</h2>
            </div>
          </Reveal>
          <div className="about-timeline__list">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <article className="about-timeline__item">
                  <span className="about-timeline__year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Purpose</p>
              <h2 className="service-h2">Mission. Vision. Values.</h2>
            </div>
          </Reveal>
          <div className="about-purpose-grid">
            <Reveal>
              <article className="about-purpose-card about-purpose-card--mission">
                <span>Mission</span>
                <h3>Protect movement and people with proof.</h3>
                <p>
                  To give South African mines and logistics companies independent
                  control over commodity haulage, diesel supply, underground
                  worker safety and plant performance through verified data,
                  disciplined operations and rapid response.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="about-purpose-card about-purpose-card--vision">
                <span>Vision</span>
                <h3>No blind spots on the road or in the pit.</h3>
                <p>
                  To be the partner mining clients trust when tonnage, fuel,
                  contractors and human lives cannot be left to assumption, so
                  every critical kilometre and every shift is governed with
                  clarity.
                </p>
              </article>
            </Reveal>
          </div>
          <div className="about-values">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="about-value">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="about-band__media" aria-hidden="true">
          <img src={images.homeHero} alt="" loading="lazy" />
          <div className="about-band__shade" />
        </div>
        <div className="container">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Leadership</p>
              <h2 className="service-h2">
                Ownership and the accountability behind the brand.
              </h2>
              <p className="about-prose about-prose--on-dark">
                Thinkers Afrika is director-led. Leadership is measured in how
                clearly we own outcomes for clients, partners and the people who
                keep operations moving.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-director">
              <div className="about-director__info">
                <span>Director</span>
                <h3>Phillip Mahlinza</h3>
                <p>
                  Director of Thinkers Afrika, accountable for strategic
                  direction, delivery standards and the partnerships that keep
                  mining clients protected.
                </p>
              </div>
              <div className="about-director__links">
                <a
                  href="https://za.linkedin.com/in/phillip-mahlinza-318703151"
                  className="btn btn-primary btn-arrow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Director on LinkedIn
                </a>
                <a
                  href={companyLinkedIn}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Company on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Safety & integrity</p>
              <h2 className="service-h2">
                Prepared for safety. Built for integrity.
              </h2>
              <p className="about-prose about-prose--on-dark">
                Our preparedness is not a policy paragraph. It is how we haul,
                monitor, escalate and report: protecting people, protecting
                product and protecting the client’s commercial position.
              </p>
            </div>
          </Reveal>
          <div className="about-safety-grid">
            {safetyPillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="about-safety-card">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light about-partners">
        <div className="container">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Clients & partners</p>
              <h2 className="service-h2">
                The network behind our delivery.
              </h2>
              <p className="about-prose">
                Thinkers Afrika works alongside mining clients, diesel supply
                customers and energy partners that keep haulage, fuel and fleet
                assurance delivering on the ground across South Africa.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="about-partners__block">
              <p className="about-partners__label">Mining clients</p>
            </div>
          </Reveal>
          <div className="about-partners__grid about-partners__grid--energy">
            {miningClients.map((client, i) => (
              <Reveal key={client.name} delay={i * 0.04}>
                <article className="about-partner">
                  <span>{client.role}</span>
                  <h3>{client.name}</h3>
                  <p>{client.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="about-partners__block about-partners__block--spaced">
              <p className="about-partners__label">Diesel supply clients</p>
              <p className="about-partners__intro">
                Operations we fuel through Thinkers Afrika Diesel Supply.
              </p>
            </div>
          </Reveal>
          <div className="about-partners__grid about-partners__grid--energy">
            {dieselClients.map((client, i) => (
              <Reveal key={client.name} delay={i * 0.04}>
                <article className="about-partner">
                  <span>{client.role}</span>
                  <h3>{client.name}</h3>
                  <p>{client.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="about-partners__block about-partners__block--spaced">
              <p className="about-partners__label">Energy partners</p>
              <p className="about-partners__intro">
                Suppliers and fuel partners behind our Diesel Supply capability,
                including Engen as the diesel supplier to Thinkers Afrika.
              </p>
            </div>
          </Reveal>
          <div className="about-partners__grid about-partners__grid--energy">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 0.04}>
                <article className="about-partner">
                  <span>{partner.role}</span>
                  <h3>{partner.name}</h3>
                  <p>{partner.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container about-connect">
          <Reveal>
            <div className="about-copy">
              <p className="eyebrow">Thinkers Afrika · Connect</p>
              <h2 className="service-h2">Follow the work. Reach the team.</h2>
              <p className="about-prose">
                Stay close to how Thinkers Afrika shows up for mining and
                logistics clients. Visit our company page, or speak to us
                directly about transport, diesel, MRTL, fleet monitoring or
                Total Mine Visibility.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-connect__panel">
              <a
                href={companyLinkedIn}
                className="about-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="about-linkedin__tag">LinkedIn</span>
                <strong>Thinkers Afrika</strong>
                <p>Company updates, partnerships and operating insight.</p>
                <span className="about-linkedin__cta">
                  Open company page →
                </span>
              </a>
              <div className="about-connect__meta">
                <p>
                  <span>Email</span>
                  <a href="mailto:info@thinkersafrika.co.za">
                    info@thinkersafrika.co.za
                  </a>
                </p>
                <p>
                  <span>Phone</span>
                  <a href="tel:+27100126094">+27 10 012 6094</a>
                </p>
                <p>
                  <span>Office</span>
                  Mindspace Offices, 3rd Floor
                  <br />
                  1122 Burnett St, Hatfield
                  <br />
                  Pretoria, 0028
                </p>
                <Link to="/contact" className="btn btn-dark btn-arrow">
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
