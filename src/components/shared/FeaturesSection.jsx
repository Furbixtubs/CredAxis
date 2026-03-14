import "./FeaturesSection.css";

const cards = [
  {
    title: "Real-time credit analytics",
    body: "CredAxis processes alternative data sources to deliver credit scores in seconds, not days.",
    // unsplash keyword search for technology/real-time
    bg: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Alternative data evaluation",
    body: "Beyond traditional credit bureaus and reports",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Secure risk assessment",
    body: "Enterprise-grade protection for sensitive borrower data",
    bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* White 3-D box / cube icon — matches the Figma exactly */
function CubeIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top face */}
      <path
        d="M18 4L32 11.5V19L18 26.5L4 19V11.5L18 4Z"
        fill="white"
        opacity="0.9"
      />
      {/* left face */}
      <path d="M4 19L18 26.5V34L4 26.5V19Z" fill="white" opacity="0.55" />
      {/* right face */}
      <path d="M32 19L18 26.5V34L32 26.5V19Z" fill="white" opacity="0.75" />
    </svg>
  );
}

/* Gray image placeholder with mountain icon — sits inside card overlapping title */
function ImgPlaceholder() {
  return (
    <div className="feat-card__img-placeholder">
      {/* mountain / landscape icon */}
      <svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="40" rx="2" fill="#9e9e9e" />
        {/* mountains */}
        <path d="M4 32L14 16L22 26L28 18L44 32H4Z" fill="#bdbdbd" />
        {/* sun circle */}
        <circle cx="36" cy="12" r="5" fill="#bdbdbd" />
      </svg>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {/* ── Header ── */}
      <div className="features-section__header">
        <span className="features-section__label">Capabilities</span>
        <h2 className="features-section__title">Real-time credit analytics</h2>
        <p className="features-section__subtitle">
          See borrower creditworthiness instantly
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="features-section__grid">
        {cards.map((card, i) => (
          <div
            className="feat-card"
            key={i}
            style={{ backgroundImage: `url(${card.bg})` }}
          >
            {/* cube icon top-left */}
            <div className="feat-card__icon">
              <CubeIcon />
            </div>

            {/* title + image placeholder row */}
            <div className="feat-card__title-row">
              <h3 className="feat-card__title">{card.title}</h3>
              <ImgPlaceholder />
            </div>

            {/* body */}
            <p className="feat-card__body">{card.body}</p>

            {/* learn link */}
            <a href="#" className="feat-card__learn">
              Learn
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M5 3L10 8L5 13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
