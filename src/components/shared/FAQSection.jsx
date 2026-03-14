import { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    q: "How fast is the evaluation?",
    a: "CredAxis delivers credit scores and risk assessments in seconds by processing alternative data sources simultaneously. Traditional bureaus take days. We work in real time, so your team can make decisions immediately without waiting.",
  },
  {
    q: "What data sources does CredAxis use?",
    a: "We analyze transaction history, cash flow patterns, savings behavior, and connected financial accounts to build a complete picture of creditworthiness. This alternative approach captures borrowers that traditional credit reports miss entirely.",
  },
  {
    q: "Is borrower data secure?",
    a: "CredAxis meets enterprise-grade security standards with encryption, compliance certifications, and strict access controls. Your borrowers' sensitive financial information is protected with the same rigor as major financial institutions.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most lenders are operational within days. Our team handles API integration, data mapping, and staff training so you can start evaluating borrowers without disrupting your existing workflow.",
  },
  {
    q: "Can CredAxis integrate with our systems?",
    a: "Yes. ACE connects to your loan management platform, underwriting software, and reporting tools through standard APIs. Our technical team ensures smooth integration with minimal friction.",
  },
];

export default function FAQSection() {
  // All open by default — matching the Figma screenshot
  const [openItems, setOpenItems] = useState(new Set([0, 1, 2, 3, 4]));

  function toggle(i) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        {/* ── Header ── */}
        <div className="faq-section__header">
          <h2 className="faq-section__title">Questions</h2>
          <p className="faq-section__subtitle">
            Everything you need to know about CredAxis and getting started with
            alternative credit evaluation.
          </p>
        </div>

        {/* ── FAQ accordion ── */}
        <div className="faq-section__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openItems.has(i) ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-item__header"
                onClick={() => toggle(i)}
                aria-expanded={openItems.has(i)}
              >
                <span className="faq-item__question">{item.q}</span>
                {/* × when open, + when closed */}
                <span className="faq-item__icon" aria-hidden="true">
                  {openItems.has(i) ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 2L14 14M14 2L2 14"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 2V14M2 8H14"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {openItems.has(i) && (
                <div className="faq-item__answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Need more help ── */}
        <div className="faq-section__help">
          <h3 className="faq-section__help-title">Need more help?</h3>
          <p className="faq-section__help-body">
            Our team is ready to answer your questions about implementation and
            pricing.
          </p>
          <button className="faq-section__contact-btn">Contact us</button>
        </div>
      </div>
    </section>
  );
}
