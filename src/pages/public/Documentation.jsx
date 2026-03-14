const SECTIONS = [
  {
    title: "Getting started",
    articles: [
      { title: "Introduction to CredAxis",       desc: "Overview of the platform and how the pieces fit together." },
      { title: "Quick start guide",              desc: "Create your first credit model and score a borrower in 10 minutes." },
      { title: "Invite your team",               desc: "Add analysts, viewers and admins to your organisation." },
    ],
  },
  {
    title: "Credit models",
    articles: [
      { title: "Building a scorecard",           desc: "Step-by-step guide to creating a rule-based scorecard." },
      { title: "Connecting alt-data sources",    desc: "How to link bank feeds, telco data and utility records." },
      { title: "Champion / challenger testing",  desc: "Run two models in parallel and compare outcomes." },
    ],
  },
  {
    title: "API reference",
    articles: [
      { title: "Authentication",                 desc: "Generate API keys and authenticate requests." },
      { title: "Score a borrower",               desc: "POST /v1/score — payload, response and error codes." },
      { title: "Webhooks",                        desc: "Receive real-time events when decisions are made." },
    ],
  },
  {
    title: "Integrations",
    articles: [
      { title: "Plaid",                          desc: "Connect bank accounts for income and transaction data." },
      { title: "Experian",                        desc: "Pull bureau data through a single normalised API." },
      { title: "Stripe",                          desc: "Trigger loan disbursements and repayment collections." },
    ],
  },
];

export default function Documentation() {
  return (
    <div style={s.page}>
      <h1 style={s.heading}>Documentation</h1>
      <p style={s.sub}>Guides, references and integration docs for the CredAxis platform.</p>

      <div style={s.layout}>
        {/* Sticky sidebar */}
        <aside style={s.sidebar}>
          {SECTIONS.map((sec) => (
            <div key={sec.title} style={s.sideGroup}>
              <p style={s.sideGroupTitle}>{sec.title}</p>
              {sec.articles.map((a) => (
                <a key={a.title} href="#" style={s.sideLink}>{a.title}</a>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div style={s.content}>
          {SECTIONS.map((sec) => (
            <section key={sec.title} style={s.section}>
              <h2 style={s.sectionTitle}>{sec.title}</h2>
              <div style={s.articleList}>
                {sec.articles.map((a) => (
                  <a key={a.title} href="#" style={s.articleCard}>
                    <p style={s.articleTitle}>{a.title}</p>
                    <p style={s.articleDesc}>{a.desc}</p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

const s = {
  page:         { maxWidth: "1000px", margin: "0 auto", padding: "3rem 2rem" },
  heading:      { fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "700", marginBottom: "0.75rem" },
  sub:          { color: "#6b7280", fontSize: "16px", marginBottom: "2.5rem" },
  layout:       { display: "flex", gap: "3rem", alignItems: "flex-start" },
  sidebar:      { width: "200px", flexShrink: 0, position: "sticky", top: "80px" },
  sideGroup:    { marginBottom: "1.5rem" },
  sideGroupTitle:{ fontSize: "11px", fontWeight: "700", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" },
  sideLink:     { display: "block", fontSize: "13px", color: "#374151", textDecoration: "none", padding: "4px 0", lineHeight: 1.5 },
  content:      { flex: 1 },
  section:      { marginBottom: "2.5rem" },
  sectionTitle: { fontSize: "18px", fontWeight: "700", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e5e7eb" },
  articleList:  { display: "flex", flexDirection: "column", gap: "0.75rem" },
  articleCard:  { display: "block", textDecoration: "none", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1rem 1.25rem", transition: "border-color .15s" },
  articleTitle: { fontWeight: "600", fontSize: "14px", color: "#111", marginBottom: "3px" },
  articleDesc:  { fontSize: "13px", color: "#6b7280", lineHeight: 1.5 },
};
