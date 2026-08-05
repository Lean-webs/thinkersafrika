import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./ServicePage.css";
import "./Transport.css";

const capabilities = [
  {
    title: "Bulk commodities",
    copy: "Coal, chrome and industrial bulk moved with weighbridge reconciliation and a clear evidence trail.",
  },
  {
    title: "Siding & Eskom routes",
    copy: "Hands-on experience on rail siding corridors and Eskom delivery routes where timing and compliance matter.",
  },
  {
    title: "RTMS accredited",
    copy: "We operate with Road Transport Management System standards so safety, compliance and load integrity stay on record.",
  },
  {
    title: "Route discipline",
    copy: "Approved corridors, live deviation awareness and handover proof at every critical gate.",
  },
];

const subcontractServices = [
  {
    title: "Fleet management on your behalf",
    copy: "Busy fleet owners stay focused on the load. We manage the fleet day to day so trucks keep earning.",
  },
  {
    title: "Maintenance activities",
    copy: "We coordinate and oversee maintenance so vehicles stay roadworthy, available and compliant.",
  },
  {
    title: "Full onboarding",
    copy: "Drivers, documents, fleet requirements and systems are onboarded properly before the first dispatch.",
  },
  {
    title: "Driver management",
    copy: "We understand fleet requirements and driver management, from behaviour standards to operational readiness.",
  },
];

export function Transport() {
  return (
    <>
      <header className="page-hero transport-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img
            src={images.transportTruck}
            alt="Thinkers Afrika branded Scania truck with coal tipper"
          />
          <div className="page-hero__shade" />
        </div>
        <div className="page-hero__content">
          <p className="eyebrow">Operations · Commodity transport</p>
          <h1>
            Commodity transport
            <br />
            <em>that holds the line.</em>
          </h1>
          <p className="lead" style={{ color: "rgba(244,241,236,0.8)" }}>
            For 10 years Thinkers Afrika has moved bulk commodities across South
            African corridors. RTMS-accredited haulage, siding and Eskom route
            experience, and disciplined fleet control that keeps tonnage on the
            record.
          </p>
        </div>
      </header>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="transport-copy">
              <p className="eyebrow">Track record</p>
              <h2 className="service-h2">
                A decade on the road, built for hard routes.
              </h2>
              <p className="transport-prose">
                Thinkers Afrika has been transporting commodities for 10 years.
                We haul coal, chrome and industrial bulk with the discipline of a
                logistics partner that understands mine release, corridor risk
                and destination accountability. Our experience covers rail
                siding routes and Eskom routes, where schedules, safety rules and
                delivery standards leave no room for guesswork.
              </p>
              <p className="transport-prose">
                We hold RTMS accreditation. That means our Road Transport
                Management System practices support safer operations, clearer
                compliance and stronger control over how every load is planned,
                driven and handed over.
              </p>
            </div>
          </Reveal>
          <div className="capability-grid" style={{ marginTop: "2.5rem" }}>
            {capabilities.map((item, i) => (
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

      <section className="transport-band">
        <div className="transport-band__media" aria-hidden="true">
          <img src={images.transportFleet} alt="" loading="lazy" />
          <div className="transport-band__shade" />
        </div>
        <div className="container">
          <Reveal>
            <div className="transport-copy">
              <p className="eyebrow">Subcontractor management</p>
              <h2 className="service-h2">
                We manage fleets on behalf of busy owners.
              </h2>
              <p className="transport-prose transport-prose--on-dark">
                Not every fleet owner wants to run the full operational load.
                Thinkers Afrika manages fleets on behalf of busy owners: we
                handle maintenance activities, run full onboarding processes,
                and stay hands-on with fleet requirements and driver management
                so the trucks keep moving and the paperwork stays clean.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <Reveal>
            <div className="transport-copy">
              <p className="eyebrow">What we take on</p>
              <h2 className="service-h2">
                Maintenance, onboarding and driver control, handled.
              </h2>
            </div>
          </Reveal>
          <div className="transport-service-grid">
            {subcontractServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="transport-service-card">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-2">
          <Reveal>
            <div className="service-media transport-media">
              <img
                src={images.transportPhoto}
                alt="Thinkers Afrika branded Scania truck with coal tipper trailers"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">How we haul</p>
            <h2 className="service-h2">From release to arrival, on the record.</h2>
            <ul className="service-list">
              <li>RTMS-aligned planning and compliance controls</li>
              <li>Siding and Eskom route experience on every shift pattern</li>
              <li>Approved corridor locked before departure</li>
              <li>Weighbridge and handover reconciliation</li>
              <li>Optional fleet monitoring for client-side verification</li>
            </ul>
            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary btn-arrow">
                Request transport capacity
              </Link>
              <Link to="/fleet-monitoring" className="btn btn-ghost">
                Add fleet monitoring
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
