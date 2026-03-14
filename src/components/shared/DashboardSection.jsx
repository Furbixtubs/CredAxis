import "./DashboardSection.css";

const bullets = [
  "Borrower profiles at a glance with risk scores and financial snapshots",
  "Real-time alerts for fraud and suspicious activity patterns",
  "Historical trends and cash flow analysis for informed decisions",
];

export default function DashboardSection() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-section__container">
        <div className="dashboard-section__inner">
          {/* ── LEFT: text content ── */}
          <div className="dashboard-section__left">
            <span className="dashboard-section__label">Dashboard</span>

            <h2 className="dashboard-section__title">
              Built for lenders who
              <br />
              demand clarity
            </h2>

            <p className="dashboard-section__body">
              The CredAxis dashboard strips away complexity. Every borrower
              profile, every risk signal, every decision point is right where
              you need it. Clean. Organized. Actionable.
            </p>

            <ul className="dashboard-section__bullets">
              {bullets.map((b, i) => (
                <li key={i} className="dashboard-section__bullet">
                  <span className="dashboard-section__bullet-dot" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="dashboard-section__actions">
              <button className="dashboard-section__btn-outline">
                Explore
              </button>
              <a href="#" className="dashboard-section__watch">
                Watch
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

          {/* ── RIGHT: photo ── */}
          <div className="dashboard-section__right">
            {/*
              Replace src with your actual image.
              This is the photo of two women at a desk with a colorful laptop.
              Import it: import dashPhoto from './assets/dashboard-photo.jpg'
              Then use: <img src={dashPhoto} ... />
            */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Two professionals reviewing data on a laptop"
              className="dashboard-section__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
