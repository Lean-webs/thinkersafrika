import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { images } from "../data/images";
import "./Contact.css";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Thinkers Afrika enquiry: ${data.get("interest") || "General"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nPhone: ${data.get("phone")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:info@thinkersafrika.co.za?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <header className="page-hero contact-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img
            src={images.contactHero}
            alt="Transport, diesel, mining plant, miners and fleet monitoring operations"
          />
          <div className="page-hero__shade contact-hero__shade" />
        </div>
        <div className="page-hero__content">
          <p className="eyebrow">Get in touch</p>
          <h1>
            Let’s talk about
            <br />
            <em>what you need.</em>
          </h1>
          <p className="lead" style={{ color: "rgba(244,241,236,0.8)" }}>
            Transport capacity, diesel contracts, Miner Real-Time Locator
            (MRTL), fleet monitoring or Total Mine Visibility. Reach the same
            team.
          </p>
        </div>
      </header>

      <section className="section section-ink contact-section">
        <div className="container grid-2">
          <Reveal>
            <div className="contact-details">
              <div>
                <h3>Email</h3>
                <a href="mailto:info@thinkersafrika.co.za">
                  info@thinkersafrika.co.za
                </a>
              </div>
              <div>
                <h3>Phone</h3>
                <a href="tel:+27100126094">+27 10 012 6094</a>
              </div>
              <div>
                <h3>Office</h3>
                <p>
                  Mindspace Offices, 3rd Floor
                  <br />
                  1122 Burnett St, Hatfield
                  <br />
                  Pretoria, 0028
                </p>
              </div>
              <div>
                <h3>Also</h3>
                <Link to="/fleet-monitoring">Fleet monitoring →</Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="contact-success" role="status">
                <strong>Opening your email client…</strong>
                <p>
                  If nothing opens, write us directly at{" "}
                  <a href="mailto:info@thinkersafrika.co.za">
                    info@thinkersafrika.co.za
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form className="form-grid cols-2 contact-form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="company">Company / organisation</label>
                  <input id="company" name="company" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="interest">Interest</label>
                  <select id="interest" name="interest" required defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>About Thinkers Afrika</option>
                    <option>Commodity transport</option>
                    <option>Diesel Supply</option>
                    <option>Miner Real-Time Locator (MRTL)</option>
                    <option>Fleet monitoring</option>
                    <option>Total Mine Visibility</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div className="field" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <button type="submit" className="btn btn-primary btn-arrow">
                    Open email to send
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
