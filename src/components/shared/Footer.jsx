import { useState } from "react";
import "./Footer.css";

const columns = [
  {
    heading: "Product",
    links: [
      "Dashboard",
      "Borrower profiles",
      "Risk monitoring",
      "Reports",
      "Credit inquiries",
    ],
  },
  {
    heading: "Company",
    links: ["About us", "Blog", "Careers", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: [
      "Documentation",
      "API reference",
      "Guides",
      "Support",
      "Help center",
    ],
  },
  {
    heading: "Legal",
    links: [
      "Privacy policy",
      "Terms of service",
      "Cookie policy",
      "Compliance",
      "Security",
    ],
  },
  {
    heading: "Connect",
    links: ["Twitter", "LinkedIn", "GitHub", "Discord", "Email us"],
  },
  {
    heading: "Integrations",
    links: [
      "Plaid integration",
      "Stripe integration",
      "API webhooks",
      "Custom connectors",
      "Marketplace",
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* ── TOP: newsletter row ── */}
        <div className="footer__newsletter">
          <div className="footer__newsletter-left">
            <span className="footer__newsletter-title">Stay in the loop</span>
            <span className="footer__newsletter-sub">
              Get updates on credit insights and lending trends
            </span>
          </div>
          <div className="footer__newsletter-right">
            <div className="footer__newsletter-form">
              <input
                type="email"
                className="footer__email-input"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="footer__subscribe-btn">Subscribe</button>
            </div>
            <p className="footer__privacy">
              We respect your privacy. Unsubscribe anytime.{" "}
              <a href="#" className="footer__privacy-link">
                We respect your privacy. Unsubscribe anytime.
              </a>
            </p>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <hr className="footer__divider" />

        {/* ── MIDDLE: 6-column links ── */}
        <div className="footer__links-grid">
          {columns.map((col) => (
            <div key={col.heading} className="footer__col">
              <span className="footer__col-heading">{col.heading}</span>
              <ul className="footer__col-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <hr className="footer__divider" />

        {/* ── BOTTOM BAR ── */}
        <div className="footer__bottom">
          {/* Cursive logo text */}
          <span className="footer__logo">Logo</span>
          <span className="footer__copyright">
            © 2025 CredAxis. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
