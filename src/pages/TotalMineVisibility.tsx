import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./ServicePage.css";
import "./TotalMineVisibility.css";

const challenges = [
  {
    title: "Siloed visibility",
    copy: "Constrained real-time line of sight across heavy yellow machines working the pit.",
  },
  {
    title: "Uncontrolled fuel overhead",
    copy: "High-volume diesel is hard to audit accurately per machine, per operator and per shift.",
  },
  {
    title: "Reactive maintenance",
    copy: "Unexpected breakdowns and component failures arrive without automated anomaly warnings.",
  },
  {
    title: "Operational waste",
    copy: "Over-idling and aggressive handling inflate fuel cost and shorten machine lifecycles.",
  },
  {
    title: "Delayed decisions",
    copy: "Manual tracking, spreadsheet exports and trailing reports block active intervention.",
  },
  {
    title: "Contractor governance",
    copy: "Holding third-party operators to SLAs and site rules is entangled without empirical proof.",
  },
];

const enhancements = [
  {
    title: "Unified visibility",
    copy: "Complete asset transparency across all deployed yellow plant lines.",
  },
  {
    title: "Downtime mitigation",
    copy: "Fewer catastrophic failures through localised predictive early-warning alerts.",
  },
  {
    title: "Speed & handling compliance",
    copy: "Live oversight of aggressive cornering, over-revving, harsh braking and speed breaches.",
  },
  {
    title: "Fact-based contractor auditing",
    copy: "Empirical telemetry to govern contractor site rules and validate billed operations.",
  },
  {
    title: "Data-driven asset alignment",
    copy: "Schedule plant lines and crews against real utilisation curves, not assumptions.",
  },
  {
    title: "Definitive governance",
    copy: "Immutable granular logs for dispute resolution and incident investigations.",
  },
];

const solutionPoints = [
  {
    title: "Single pane-of-glass",
    copy: "One diagnostic dashboard for internal yellow plant and contractual infrastructure assets.",
  },
  {
    title: "Netstar Profleet integration",
    copy: "Native real-time pipeline consuming hardware metrics via secured Netstar Profleet gateways.",
  },
  {
    title: "AI-driven insight layer",
    copy: "Machine learning tracks diesel anomalies, operator hazard profiles and utilisation metrics.",
  },
  {
    title: "Automated exception escalation",
    copy: "Severe anomalies are flagged instantly, without manual lookup or data hunting.",
  },
  {
    title: "Standardised executive reporting",
    copy: "Daily, weekly and monthly briefs delivered automatically to named stakeholders.",
  },
  {
    title: "Objective commercial mediation",
    copy: "Transparent oversight for contract validation and vendor SLA compliance reviews.",
  },
];

const analyticsPillars = [
  {
    title: "Diesel & fuel insights",
    points: [
      "Consumption mapped per operational hour, per shifted metric ton, per shift and per operator.",
      "Idling hotspot maps that translate waste into financial loss metrics.",
      "Refuelling anomaly tracking for suspicious drops, sensor drift and potential theft.",
    ],
  },
  {
    title: "Driver & machine behaviour",
    points: [
      "Mechanical stress events: severe braking, abrupt acceleration, over-revving and speed violations.",
      "Operator safety scorecards that benchmark people on identical machine lines.",
      "Training diagnostics that point skills programmes at real operating deficiencies.",
    ],
  },
  {
    title: "Contractor oversight",
    points: [
      "SLA attainment checks on availability, uptime and real utilisation.",
      "Spatial boundary logs separating on-site activation from off-site idling.",
      "Attributable costs linking fuel and wear liabilities to specific third-party vendors.",
    ],
  },
];

const aiValue = [
  {
    title: "Diesel anomaly detection",
    copy: "Fuel burn is benchmarked against payload, route topography and operator trends. Deviations flag siphoning, leaks or compromised operating standards.",
  },
  {
    title: "Intelligent idling management",
    copy: "Idle thresholds are tailored by machine class and zone. Out-of-standard idling is quantified as diesel drain and rand loss per event.",
  },
  {
    title: "Operator behaviour scoring",
    copy: "Handling violations, utilisation gaps and stress variables become comparative risk and efficiency indexes across shifts.",
  },
  {
    title: "Predictive maintenance signals",
    copy: "Runtime, vibration, temperature and handling profiles build early-warning wear curves so crews intervene before critical failure.",
  },
];

const comparison = [
  {
    standard: "Machine location data",
    advanced: "Pit geofencing and zone balancing across haul loops and cycle bottlenecks",
  },
  {
    standard: "Fuel level logging",
    advanced: "AI theft and siphoning detection against fuel-sensor drift models",
  },
  {
    standard: "Idle time metrics",
    advanced: "Idle cost quantification with targeted reduction tasks",
  },
  {
    standard: "Uptime statistics",
    advanced: "Bottleneck and queue intelligence with cost-per-delay analytics",
  },
  {
    standard: "Basic machine faults",
    advanced: "AI maintenance and predictive failure-risk models",
  },
  {
    standard: "Operator logs",
    advanced: "AI safety risk scoring across handling and operational gaps",
  },
];

export function TotalMineVisibility() {
  return (
    <>
      <header className="page-hero tmv-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img src={images.tmvPit} alt="" />
          <div className="page-hero__shade" />
        </div>
        <div className="page-hero__content">
          <p className="eyebrow">Thinkers Afrika · Pit intelligence</p>
          <h1>
            Total Mine
            <br />
            <em>Visibility</em>
          </h1>
          <p className="lead" style={{ color: "rgba(244,241,236,0.8)" }}>
            High-fidelity, data-driven optimisation of pit-level yellow plant.
            We turn internal extraction from an operational blind spot into a
            governed revenue-protection asset for mine executives.
          </p>
        </div>
      </header>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">Our philosophy</p>
              <h2 className="service-h2">
                Beyond passive telemetry. An executive AI decision layer.
              </h2>
              <p className="tmv-prose">
                Standard diagnostic suites give local maintenance teams raw
                engineering telemetry. Mine executives need more. Total Mine
                Visibility converts isolated hardware streams from yellow plant
                into immediate, board-ready financial and operational directives.
                We interface with active control rooms to enforce structural site
                behaviour, optimise operator performance, lock down fuel reserves
                and maximise net pit utilisation in real time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">Business context</p>
              <h2 className="service-h2">
                Current challenges in managing yellow machines.
              </h2>
              <p className="tmv-prose tmv-prose--on-dark">
                Modern pits generate vast data that stays underused because
                systems are fragmented. Management faces liabilities that
                quietly erode extraction velocity and daily profitability.
              </p>
            </div>
          </Reveal>
          <div className="tmv-grid">
            {challenges.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="tmv-card">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tmv-band">
        <div className="tmv-band__media" aria-hidden="true">
          <img src={images.tmvControl} alt="" loading="lazy" />
          <div className="tmv-band__shade" />
        </div>
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">What changes</p>
              <h2 className="service-h2">
                Targeted operational and safety enhancements.
              </h2>
              <p className="tmv-prose tmv-prose--on-dark">
                By resolving those liabilities, the platform secures mine-level
                improvements across visibility, downtime, contractor control and
                governance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="tmv-grid">
            {enhancements.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="tmv-card tmv-card--light">
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
            <div className="tmv-media">
              <img
                src={images.tmvDashboard}
                alt="Executive Total Mine Visibility dashboard for yellow plant"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="tmv-copy">
              <p className="eyebrow">Solution overview</p>
              <h2 className="service-h2">
                From reactive pit to predictive fleet ecosystem.
              </h2>
              <p className="tmv-prose tmv-prose--on-dark">
                A central executive overview consolidates the on-site yellow
                plant landscape into one governed operating picture.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="container">
          <div className="tmv-grid tmv-grid--tight">
            {solutionPoints.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="tmv-card">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">Granular analytics</p>
              <h2 className="service-h2">
                Three pillars that drive executive decisions.
              </h2>
            </div>
          </Reveal>
          <div className="tmv-pillars">
            {analyticsPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.06}>
                <article className="tmv-pillar">
                  <span>0{i + 1}</span>
                  <h3>{pillar.title}</h3>
                  <ul>
                    {pillar.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tmv-band tmv-band--fuel">
        <div className="tmv-band__media" aria-hidden="true">
          <img src={images.tmvFuel} alt="" loading="lazy" />
          <div className="tmv-band__shade" />
        </div>
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">How AI adds value</p>
              <h2 className="service-h2">
                Beyond basic telematics. Real-time course correction.
              </h2>
              <p className="tmv-prose tmv-prose--on-dark">
                Basic packages archive history. Our platform layers specialised
                machine-learning engines on raw datasets so the pit can correct
                course while the shift is still live.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <div className="tmv-grid">
            {aiValue.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="tmv-card">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">System comparison</p>
              <h2 className="service-h2">
                Standard telematics vs advanced fleet intelligence.
              </h2>
              <p className="tmv-prose">
                Platforms such as Caterpillar VisionLink remain essential for
                machine tracking and local mechanical maintenance. We overlay
                that engine-level telemetry, consolidate heterogeneous data and
                elevate it into board-ready commercial action.
              </p>
            </div>
          </Reveal>
          <div className="tmv-compare">
            <div className="tmv-compare__head">
              <span>Standard telematics</span>
              <span>Advanced intelligence add-on</span>
            </div>
            {comparison.map((row) => (
              <Reveal key={row.standard}>
                <div className="tmv-compare__row">
                  <p>{row.standard}</p>
                  <p>{row.advanced}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-2">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">Commercial & ROI</p>
              <h2 className="service-h2">
                Built to self-fund through localised waste reduction.
              </h2>
              <p className="tmv-prose tmv-prose--on-dark">
                Deployment typically includes a one-off implementation fee with
                optional ongoing data refinement and reporting. Engagement can
                align to a performance-based gain-share on verified operational
                savings.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="tmv-roi">
              <p className="eyebrow">Illustrative model</p>
              <p className="tmv-roi__base">
                On a conservative diesel baseline of{" "}
                <strong>R10,000,000 / month</strong>:
              </p>
              <div className="tmv-roi__row">
                <span>Conservative 2%</span>
                <strong>R200,000 / month</strong>
              </div>
              <div className="tmv-roi__row">
                <span>Targeted 10%</span>
                <strong>R1,000,000 / month</strong>
              </div>
              <p className="tmv-roi__note">
                Even at the lower bound, the architecture supports rapid,
                self-funding amortisation through idling elimination, theft and
                leakage interception, mechanical stress reduction and fleet
                right-sizing.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="tmv-copy">
              <p className="eyebrow">Contractor control</p>
              <h2 className="service-h2">
                Unassailable transparency for third-party plant.
              </h2>
              <p className="tmv-prose">
                Third-party equipment networks are major financial exposure. The
                system gives mines empirical utilisation baselines, high-fidelity
                dispute evidence, pathways into performance-based contracting,
                and less administrative friction over billing variances.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="service-actions">
              <Link to="/contact" className="btn btn-dark btn-arrow">
                Request Total Mine Visibility
              </Link>
              <a href="tel:+27100126094" className="btn btn-ghost tmv-ghost-dark">
                +27 10 012 6094
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
