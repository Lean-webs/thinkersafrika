import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <Logo />
          <p>
            Commodity transport, diesel supply, Miner Real-Time Locator (MRTL),
            fleet monitoring and Total Mine Visibility, built for South African
            mining operations.
          </p>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/thinkersafrika/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <h4 style={{ marginTop: "1.75rem" }}>Operations</h4>
            <ul>
              <li>
                <Link to="/transport">Commodity transport</Link>
              </li>
              <li>
                <Link to="/diesel">Diesel Supply</Link>
              </li>
              <li>
                <Link to="/missing-persons">Miner Real-Time Locator (MRTL)</Link>
              </li>
              <li>
                <Link to="/fleet-monitoring">Fleet monitoring</Link>
              </li>
              <li>
                <Link to="/total-mine-visibility">Total Mine Visibility</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@thinkersafrika.co.za">
                  info@thinkersafrika.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27100126094">+27 10 012 6094</a>
              </li>
              <li>
                Mindspace Offices, 3rd Floor
                <br />
                1122 Burnett St, Hatfield
                <br />
                Pretoria, 0028
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Thinkers Afrika. All rights reserved.</p>
        <p className="footer__credit">
          Developed and designed by Vincent Phemelo Mogashoa © 2026
        </p>
        <p className="footer__mono">Think differently · South Africa</p>
      </div>
    </footer>
  );
}
