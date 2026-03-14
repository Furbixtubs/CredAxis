import "./StatsSection.css";

const stats = [
  {
    label: "Lenders onboarded",
    value: "500+",
    desc: "Financial institutions using CredAxis daily",
  },
  {
    label: "Applications processed",
    value: "2M+",
    desc: "Borrower profiles analyzed with precision",
  },
  {
    label: "Risk reduction",
    value: "35%",
    desc: "Average improvement in approval accuracy",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-section__container">
        {/* Header block */}
        <div className="stats-section__header">
          <span className="stats-section__label">Results</span>
          <h2 className="stats-section__title">
            Trusted by lenders across the
            <br />
            country
          </h2>
          <p className="stats-section__body">
            CredAxis has transformed how lenders evaluate risk and make credit
            decisions. The numbers speak for themselves.
          </p>
        </div>

        {/* Stat cards */}
        <div className="stats-section__grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-card__label">{s.label}</span>
              <div className="stat-card__value">{s.value}</div>
              <hr className="stat-card__divider" />
              <p className="stat-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom actions */}
        <div className="stats-section__actions">
          <button className="stats-section__btn-outline">View reports</button>
          <a href="#" className="stats-section__explore">
            Explore
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5 3L11 8L5 13"
                stroke="#111111"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
