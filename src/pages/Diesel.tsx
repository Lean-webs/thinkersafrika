import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./ServicePage.css";
import "./Diesel.css";

const supplyLines = [
  {
    title: "Mine fleets",
    copy: "Diesel for haul trucks and site vehicles that keep mining operations moving.",
  },
  {
    title: "Logistics companies",
    copy: "Reliable supply for transporters and logistics fleets that depend on consistent fuelling.",
  },
  {
    title: "Bowsers & bulk tanks",
    copy: "Bulk diesel for bowsers and on-site storage so plant and fleets stay fuelled on schedule.",
  },
  {
    title: "Yellow plant & machines",
    copy: "Fuel for excavators, loaders, dozers and other yellow plant mining machines on site.",
  },
];

const requirements = [
  "Own a fleet (or operate fleet equipment under your company)",
  "Be willing to pay an agreed percentage upfront",
  "Be a registered company",
  "Have a proven record of paying on time",
];

export function Diesel() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img src={images.dieselTruck} alt="" />
          <div className="page-hero__shade" />
        </div>
        <div className="page-hero__content">
          <p className="eyebrow">Thinkers Afrika · Diesel Supply</p>
          <h1>
            Diesel Supply
            <br />
            <em>for mines and fleets.</em>
          </h1>
          <p className="lead" style={{ color: "rgba(244,241,236,0.8)" }}>
            Thinkers Afrika supplies diesel to mines and logistics companies.
            We fuel fleets, bowsers, yellow plant and mining machines with
            competitive pricing and flexible payment terms.
          </p>
        </div>
      </header>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="locator-copy diesel-copy">
              <p className="eyebrow">Who we supply</p>
              <h2 className="service-h2">
                Built for operations that burn diesel every day.
              </h2>
              <p className="diesel-prose">
                Thinkers Afrika sells and supplies diesel to mining houses and
                logistics companies across South Africa. Whether you run a
                road fleet, keep bowsers topped up, or fuel yellow plant and
                heavy mining machines on site, we deliver the diesel your
                operation needs to stay productive.
              </p>
            </div>
          </Reveal>
          <div className="capability-grid" style={{ marginTop: "2.5rem" }}>
            {supplyLines.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="capability capability--light">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h2 className="service-h2">
              Competitive diesel pricing that works for your burn rate.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Fuel is one of the largest operating costs for mines and logistics
              fleets. Thinkers Afrika offers competitive diesel pricing sized to
              commercial volumes, so you can plan fuel spend with clarity and
              keep more value in the operation. We focus on fair, transparent
              supply agreements rather than short-term price games.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="diesel-band">
        <div className="diesel-band__media" aria-hidden="true">
          <img src={images.dieselPayment} alt="" loading="lazy" />
          <div className="diesel-band__shade diesel-band__shade--payment" />
        </div>
        <div className="container">
          <Reveal>
            <div className="diesel-copy">
              <p className="eyebrow">Payment terms</p>
              <h2 className="service-h2">
                30 to 60 days diesel payment arrangements.
              </h2>
              <p className="diesel-prose diesel-prose--on-dark">
                Qualifying customers can access diesel payment terms of 30 to 60
                days. This arrangement helps mines and logistics companies manage
                cash flow while keeping fleets, bowsers and yellow plant fuelled.
                Terms are agreed upfront, with clear expectations on deposits,
                volumes and settlement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Requirements</p>
            <h2 className="service-h2">
              What you need to qualify for supply terms.
            </h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              To protect both sides of the agreement, diesel payment arrangements
              are offered to companies that meet our supply requirements.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="diesel-requirements">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary btn-arrow">
                Enquire about diesel supply
              </Link>
              <a href="tel:+27100126094" className="btn btn-ghost">
                +27 10 012 6094
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
