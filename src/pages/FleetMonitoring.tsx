import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./ServicePage.css";
import "./FleetMonitoring.css";

const capabilities = [
  {
    title: "Advanced fleet monitoring",
    copy: "Live oversight of contractor fleets from mine release to destination, with continuous exception review.",
  },
  {
    title: "Commodity theft prevention",
    copy: "Approved corridors, stop checks and pattern detection that flag diversion risk while the load is still moving.",
  },
  {
    title: "Safety & compliance",
    copy: "Enforce route rules, working windows and operating standards so unsafe behaviour is escalated early.",
  },
  {
    title: "Contractor visibility",
    copy: "Give the mine a single, independent view of every transport contractor, not fragmented transporter dashboards.",
  },
];

const fmcgPillars = [
  {
    title: "Protect margins against spoilage",
    quote:
      "We don't just track the truck; we guarantee the integrity of the load so you never lose a pallet to temperature rejection.",
  },
  {
    title: "Eliminate blind-spot theft",
    quote:
      "By binding cargo door access directly to geofenced GPS coordinates, we remove unauthorized en-route offloading.",
  },
  {
    title: "Reduce cost-per-delivery",
    quote:
      "By tracking dock-dwell times and idling, we optimize the cost per kilometer across multi-stop retail routes.",
  },
];

const fmcgProtect = [
  {
    title: "Multi-zone geofencing & booking validation",
    copy: "We separate public queue and staging areas from active loading bays. If a truck arrives hours before its booked slot, our system automatically tags it as carrier early-arrival, so that time does not count against the client's free-time allowance.",
  },
  {
    title: "Sensor-backed operational proof",
    copy: "By integrating GPS with door-open sensors, ignition logs and weighbridge timestamps, we prove exactly when a truck entered the gate, when offloading actually started, and when it departed, ruling out inflated driver log sheets.",
  },
  {
    title: "Proactive dwell-time alerting",
    copy: "Before free time expires, automated notifications alert warehouse floor managers to prioritize trucks close to their SLA limit, preventing demurrage fees before they accrue.",
  },
  {
    title: "One-click dispute dossiers",
    copy: "When a transporter submits a disputed invoice, clients can instantly generate a tamper-proof evidence report with maps, minute-by-minute timestamps and SLA adherence scores to reject illegitimate charges immediately.",
  },
];

const caseStudies = [
  {
    ref: "Case 01",
    title: "Chrome shortfall on an approved corridor",
    outcome: "Theft pattern stopped within 72 hours",
    summary:
      "A chrome operation reported recurring tonnage gaps between weighbridges. Our bureau flagged repeated unauthorised stops outside the approved corridor. Escalation to the mine and contractor recovered evidence for dispute, and the diversion pattern ended within three days.",
  },
  {
    ref: "Case 02",
    title: "Night-shift route deviation alert cascade",
    outcome: "Load secured before destination arrival",
    summary:
      "During a night haul, a tipper left the geocoded corridor and lost signal for twelve minutes. Controllers verified the exception, contacted the contractor and redirected response while the vehicle was still en route. The load arrived intact and the stop was logged for compliance review.",
  },
  {
    ref: "Case 03",
    title: "Accident investigation after a corridor collision",
    outcome: "Evidence pack delivered to mine management",
    summary:
      "Following a collision involving a contractor horse, we reconstructed speed, stops and route history from the existing tracker feed. The investigation report supported the mine’s safety review and clarified contractor accountability without installing new hardware.",
  },
  {
    ref: "Case 04",
    title: "Multi-contractor visibility gap",
    outcome: "Unified oversight across three hauliers",
    summary:
      "A coal mine used three transporters with separate GPS systems. We integrated the existing feeds into one monitoring layer, standardised escalation rules and gave management a single report pack. Blind spots between contractors were closed within the first month.",
  },
  {
    ref: "Case 05",
    title: "FMCG demurrage claim rejected with dock proof",
    outcome: "R186k in unjustified waiting charges overturned",
    summary:
      "An FMCG distributor was billed for multi-day demurrage after a refrigerated truck allegedly waited at the DC. Our multi-zone geofence showed the vehicle staged in the public queue hours before its booked slot, then only entered the loading bay once free time had already been eroded by early arrival. Door-open and ignition logs proved offloading started promptly once bay access was granted. The one-click dispute dossier overturned the invoice and reset the carrier's billing rules for future slots.",
  },
];

export function FleetMonitoring() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img src={images.fleetBureau} alt="" />
          <div className="page-hero__shade" />
        </div>
        <div className="page-hero__content">
          <p className="eyebrow">Thinkers Afrika · Monitoring</p>
          <h1>
            Fleet
            <br />
            <em>monitoring</em>
          </h1>
          <p className="lead" style={{ color: "rgba(244,241,236,0.8)" }}>
            Advanced monitoring for mining haulage and FMCG fleets. Prevent
            commodity and cargo theft, enforce safety and compliance, and keep
            total visibility from departure to destination.
          </p>
        </div>
      </header>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="fleet-copy">
              <p className="eyebrow">What we do</p>
              <h2 className="service-h2">
                Independent eyes on every load, working for the mine.
              </h2>
              <p className="fleet-prose">
                Thinkers Afrika provides advanced fleet monitoring systems for
                mines that outsource haulage. We watch movement, stops,
                deviations and delivery outcomes so management can act on facts,
                not assumptions. Our role is client-side assurance: we answer to
                the mine, recommend realistic solutions, and stay with the
                exception until it is classified and closed.
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

      <section className="fleet-band">
        <div className="fleet-band__media" aria-hidden="true">
          <img src={images.fleetCorridor} alt="" loading="lazy" />
          <div className="fleet-band__shade" />
        </div>
        <div className="container">
          <Reveal>
            <div className="fleet-copy">
              <p className="eyebrow">How we connect</p>
              <h2 className="service-h2">
                We do not always install new devices.
              </h2>
              <p className="fleet-prose fleet-prose--on-dark">
                In most cases we use the tracking systems your transporters
                already run. We integrate those existing GPS feeds with our
                software, add approved corridors and monitoring rules, and turn
                raw movement data into a live assurance layer for the mine. That
                means faster start-up, no capital project for new trackers, and
                coverage across multiple contractors on one platform.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container grid-2">
          <Reveal>
            <div className="fleet-media">
              <img
                src={images.fleetDashboard}
                alt="Fleet monitoring dashboard showing a route deviation alert"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="fleet-copy">
              <p className="eyebrow">Bureau operations</p>
              <h2 className="service-h2">
                From mine to destination, with deviation alerts in real time.
              </h2>
              <p className="fleet-prose fleet-prose--on-dark">
                Our bureau watches fleets as they leave the mine and travel to
                destination. When a truck leaves an approved corridor, stops
                outside an authorised point, or shows a suspicious pattern, a
                deviation alert is triggered. Controllers verify the event,
                escalate on your behalf, and keep an evidence trail for
                management, claims and compliance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <div className="fleet-copy">
              <p className="eyebrow">Service model</p>
              <h2 className="service-h2">
                Reports, escalations and investigations, handled for you.
              </h2>
              <p className="fleet-prose fleet-prose--on-dark">
                We do more than display maps. Thinkers Afrika produces
                comprehensive reports, manages escalations on behalf of the
                client, and supports investigations when something goes wrong,
                including accidents and theft. The goal is simple: the mine
                retains total visibility of transport contractors and receives
                practical recommendations it can implement.
              </p>
            </div>
          </Reveal>
          <div className="fleet-service-grid">
            {[
              [
                "Comprehensive reports",
                "Clear packs for operations, safety and leadership covering exceptions, trends and contractor performance.",
              ],
              [
                "Escalation handling",
                "We contact, verify and escalate live events so your team is not left chasing alerts after the fact.",
              ],
              [
                "Investigations",
                "Accident and theft investigations supported by independent route, stop and timing evidence.",
              ],
              [
                "Practical recommendations",
                "Realistic actions for corridors, contractor rules and response processes, sized to your operation.",
              ],
            ].map(([title, copy], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <article className="fleet-service-card">
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="fleet-band fleet-band--fmcg" id="fmcg">
        <div className="fleet-band__media" aria-hidden="true">
          <img src={images.fmcgHighway} alt="" loading="lazy" />
          <div className="fleet-band__shade fleet-band__shade--deep" />
        </div>
        <div className="container">
          <Reveal>
            <div className="fleet-copy">
              <p className="eyebrow">Beyond mining</p>
              <h2 className="service-h2">
                We also monitor FMCG trucks.
              </h2>
              <p className="fleet-prose fleet-prose--on-dark">
                Thinkers Afrika does not only monitor mining fleets and
                commodities. We monitor FMCG trucks across cold chain, ambient
                distribution and multi-stop retail routes, protecting load
                integrity, stopping en-route theft and giving brands a clear
                clock on every delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="fleet-copy">
              <p className="eyebrow">FMCG outcomes</p>
              <h2 className="service-h2">
                Protect the load. Close the blind spots. Cut delivery cost.
              </h2>
            </div>
          </Reveal>
          <div className="fmcg-pillars">
            {fmcgPillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="fmcg-pillar">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <blockquote>{item.quote}</blockquote>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="fleet-band fleet-band--demurrage">
        <div className="fleet-band__media" aria-hidden="true">
          <img src={images.fmcgDriverIdle} alt="" loading="lazy" />
          <div className="fleet-band__shade fleet-band__shade--deep" />
        </div>
        <div className="container">
          <div className="fmcg-demurrage">
            <Reveal>
              <div className="fleet-copy">
                <p className="eyebrow">The demurrage problem</p>
                <h2 className="service-h2">
                  Unjustified waiting charges hide in paper gate-books.
                </h2>
                <p className="fleet-prose fleet-prose--on-dark">
                  Transporters frequently bill FMCG companies for unjustified
                  demurrage based on subjective paper gate-books, drivers
                  arriving hours ahead of their booked slots, or carriers
                  blaming warehouse congestion for what were actually off-site
                  or mechanical delays.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <aside className="fmcg-solution">
                <p className="eyebrow">The Thinkers Afrika solution</p>
                <h3>
                  An automated, immutable digital audit trail over "the clock."
                </h3>
                <p>
                  We replace manual disputes and guesswork with evidence that
                  gives FMCG companies full visibility of arrival, free time,
                  offloading and departure, so only legitimate waiting time
                  ever reaches an invoice.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <div className="grid-2 fmcg-assist">
            <Reveal>
              <div className="fleet-copy">
                <p className="eyebrow">How we assist & protect clients</p>
                <h2 className="service-h2">
                  Proof at the gate. Alerts on the floor. Evidence in one click.
                </h2>
                <p className="fleet-prose fleet-prose--on-dark">
                  From booking validation to dispute dossiers, our FMCG
                  monitoring layer turns every dock event into a verifiable
                  record your warehouse and finance teams can act on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="fleet-media">
                <img
                  src={images.fmcgGateProof}
                  alt="Warehouse floor manager verifying dock timestamps while trucks load at the bay"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <div className="fleet-service-grid fmcg-protect-grid">
            {fmcgProtect.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="fleet-service-card">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="case-studies">
        <div className="container">
          <Reveal>
            <div className="fleet-copy">
              <p className="eyebrow">Track record</p>
              <h2 className="service-h2">
                Case studies from issues we have dealt with.
              </h2>
              <p className="fleet-prose">
                These examples reflect the kinds of incidents our monitoring
                bureau investigates and resolves with mining and FMCG clients.
                Details are summarised to protect confidentiality while showing
                how the method works in practice.
              </p>
            </div>
          </Reveal>
          <div className="fleet-cases">
            {caseStudies.map((item, i) => (
              <Reveal key={item.ref} delay={i * 0.05}>
                <article className="fleet-case">
                  <div className="fleet-case__top">
                    <span>{item.ref}</span>
                    <strong>{item.outcome}</strong>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="service-actions">
              <Link to="/contact" className="btn btn-dark btn-arrow">
                Request fleet monitoring
              </Link>
              <a href="tel:+27100126094" className="btn btn-ghost fleet-ghost-dark">
                +27 10 012 6094
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
