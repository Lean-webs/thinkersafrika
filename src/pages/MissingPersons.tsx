import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./MissingPersons.css";

const monitoringPillars = [
  {
    index: "01",
    title: "Locate with purpose",
    copy: "When a worker is unaccounted for underground, our systems help mine management pinpoint last known position, lamp status and movement patterns, so rescue teams move with clarity, not guesswork.",
  },
  {
    index: "02",
    title: "Monitor health in real time",
    copy: "We do not wait for a miner to go missing. Through technology linked to the mine, we actively monitor health indicators so emerging risk can be seen while the worker is still on shift.",
  },
  {
    index: "03",
    title: "Detect crisis early",
    copy: "Advanced AI-empowered systems analyse patterns that may signal an impending health crisis, including warning signs associated with heart attack and stroke, and escalate alerts while intervention is still possible.",
  },
  {
    index: "04",
    title: "Inform management fast",
    copy: "Complex sensor and operational data is turned into clear, simplified reports. Mine management receives evidence they can act on to protect people and to improve how the operation runs.",
  },
];

export function MissingPersons() {
  return (
    <>
      <header className="page-hero locator-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img src={images.undergroundWorkers} alt="" />
          <div className="page-hero__shade" />
        </div>
        <div className="page-hero__content">
          <div className="container">
            <div className="locator-copy">
              <p className="eyebrow">Thinkers Afrika · MRTL</p>
              <h1 className="locator-h1">
                Miner Real-Time
                <br />
                <em>Locator</em>
              </h1>
              <p className="locator-prose">
                Built for underground mine workers. We locate miners who cannot
                be accounted for, and we actively monitor health conditions so
                crises can be detected early, not after it is too late.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="band-section" id="why-underground">
        <div className="band-section__media" aria-hidden="true">
          <img src={images.undergroundTeam} alt="" loading="lazy" />
          <div className="band-section__shade" />
        </div>
        <div className="container">
          <Reveal>
            <div className="locator-copy">
              <p className="eyebrow">Why underground</p>
              <h2 className="locator-h2">
                Below ground, every minute matters.
              </h2>
              <p className="locator-prose">
                Underground crews work where radio fades, dust rises and refuge
                bays are often the last known mark. When a stoper, development
                operator, timberman or shift boss does not clock out at bank, or
                when a cap lamp still shows underground, time is the difference
                between a controlled response and a crisis. Thinkers Afrika
                supports the people behind every tonne: locating workers who
                cannot be accounted for, and protecting their health on the
                levels before silence on the radio becomes a search.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft" id="how-we-monitor">
        <div className="container">
          <Reveal>
            <div className="locator-copy">
              <p className="eyebrow">How we work</p>
              <h2 className="locator-h2">
                How MRTL monitors and locates missing miners.
              </h2>
              <p className="locator-prose">
                Thinkers Afrika does not only respond after a worker is reported
                missing. We combine location awareness with continuous health
                monitoring, linked to the mine’s own operating environment, so
                management can see risk forming, and intervene before a silence
                on the radio becomes a search.
              </p>
            </div>
          </Reveal>

          <div className="monitor-grid">
            {monitoringPillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="monitor-card">
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band-section band-section--tall" id="health">
        <div className="band-section__media" aria-hidden="true">
          <img src={images.healthMonitor} alt="" loading="lazy" />
          <div className="band-section__shade band-section__shade--strong" />
        </div>
        <div className="container">
          <Reveal>
            <div className="locator-copy">
              <p className="eyebrow">Proactive protection</p>
              <h2 className="locator-h2">
                We do not wait for a miner to go missing.
              </h2>
              <div className="locator-prose-stack">
                <p>
                  Many underground emergencies begin as a health event, not as a
                  disappearance. A heart attack, a stroke, or a sudden collapse
                  can leave a worker unable to call for help long before anyone
                  notices they are absent from the waiting place. That is why our
                  work starts earlier: we actively monitor health conditions
                  through technology linked to the mine, including personnel tags worn on shift, so warning signs can be seen while the
                  person is still underground.
                </p>
                <p>
                  In the bureau, controllers watch live health and location
                  feeds. Using advanced AI-empowered systems, we analyse
                  physiological and operational signals in context: movement,
                  exertion patterns and other indicators available through the
                  mine-linked technology stack. The aim is early detection:
                  identifying instances where a worker may be approaching a
                  health crisis, including risks associated with heart attack and
                  stroke, and escalating that insight while there is still time
                  to assist.
                </p>
                <p>
                  Alerts are not raw noise. They are reviewed against live
                  operational context so mine management receives clear,
                  actionable information: who may need help, where they were
                  last indicated, and what the system has flagged. That supports
                  faster, more informed decisions on rescue mobilisation, medical
                  response and shift oversight.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band-section band-section--tall" id="reports">
        <div className="band-section__media" aria-hidden="true">
          <img src={images.managementDashboard} alt="" loading="lazy" />
          <div className="band-section__shade band-section__shade--strong" />
        </div>
        <div className="container">
          <Reveal>
            <div className="locator-copy">
              <p className="eyebrow">For mine management</p>
              <h2 className="locator-h2">
                Simplified data. Decisions you can defend.
              </h2>
              <div className="locator-prose-stack">
                <p>
                  Mines already generate large volumes of operational data. What
                  leadership often lacks is a simple, trustworthy view of people
                  risk. Thinkers Afrika turns complex monitoring streams into
                  simplified reports and dashboard views that management can
                  read, share and act on, without needing a specialist to
                  interpret every signal.
                </p>
                <p>
                  These reports support day-to-day safety decisions and
                  longer-term operational improvement: where risk concentrates on
                  the levels, how response times perform, and where health and
                  location patterns suggest a change in practice. The outcome is
                  faster location when someone is missing, and a stronger,
                  evidence-based safety culture across the underground
                  workforce.
                </p>
                <ul className="locator-bullets">
                  <li>Early health-risk alerts for underground crews</li>
                  <li>Location support when a worker cannot be accounted for</li>
                  <li>Clear escalation paths for mine rescue and management</li>
                  <li>Simplified reports for audits, reviews and improvement</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
