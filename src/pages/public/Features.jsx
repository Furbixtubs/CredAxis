import { Link } from "react-router";

const FEATURES = [
  {
    category: "Credit Modelling",
    items: [
      { title: "Custom scorecard builder",  desc: "Drag-and-drop interface to build rule-based and ML scorecards without writing code." },
      { title: "Ensemble models",            desc: "Combine bureau, alt-data and behavioural signals into a single blended score." },
      { title: "Champion/challenger testing",desc: "A/B test new models against your live scorecard before full rollout." },
    ],
  },
  {
    category: "Risk Analysis",
    items: [
      { title: "Portfolio heat maps",   desc: "Visualise risk concentration across geographies, segments and products in real time." },
      { title: "Stress testing",        desc: "Simulate macroeconomic shocks on your book and see the projected impact instantly." },
      { title: "Early warning system",  desc: "Automated triggers flag deteriorating borrowers before they miss a payment." },
    ],
  },
  {
    category: "Data & Integrations",
    items: [
      { title: "50+ data connectors", desc: "Bank statements, telco, utilities, e-commerce — plug in alternative data sources in minutes." },
      { title: "REST & webhook API",   desc: "Score borrowers, fetch decisions and receive events in your own systems." },
      { title: "Bureau aggregation",   desc: "Single API call to query multiple bureaus and normalise the response." },
    ],
  },
];

export default function Features() {
  return (
    <div style={s.page}>
      <section style={s.hero}>
        <h1 style={s.heading}>Features</h1>
        <p style={s.sub}>
          Everything a modern lender needs to build, deploy and monitor
          credit decisions — from raw data to final outcome.
        </p>
      </section>

      {FEATURES.map((group) => (
        <section key={group.category} style={s.group}>
          <h2 style={s.groupTitle}>{group.category}</h2>
          <div style={s.grid}>
            {group.items.map((item) => (
              <div key={item.title} style={s.card}>
                <h3 style={s.cardTitle}>{item.title}</h3>
                <p style={s.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section style={s.cta}>
        <h2 style={s.ctaTitle}>See it in action</h2>
        <p style={s.ctaSub}>Start a free account — no credit card required.</p>
        <Link to="/signup" style={s.btn}>Get started →</Link>
      </section>
    </div>
  );
}

const s = {
  page:       { maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" },
  hero:       { marginBottom: "3rem" },
  heading:    { fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "700", marginBottom: "1rem" },
  sub:        { fontSize: "17px", color: "#6b7280", lineHeight: 1.7, maxWidth: "560px" },
  group:      { marginBottom: "3rem" },
  groupTitle: { fontSize: "18px", fontWeight: "700", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e5e7eb" },
  grid:       { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" },
  card:       { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem" },
  cardTitle:  { fontWeight: "600", fontSize: "15px", marginBottom: "0.5rem" },
  cardDesc:   { fontSize: "14px", color: "#6b7280", lineHeight: 1.55 },
  cta:        { background: "#111", borderRadius: "12px", padding: "3rem", textAlign: "center", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" },
  ctaTitle:   { fontSize: "22px", fontWeight: "700" },
  ctaSub:     { color: "#9ca3af", fontSize: "15px" },
  btn:        { textDecoration: "none", background: "#fff", color: "#111", padding: "11px 24px", borderRadius: "7px", fontWeight: "600", fontSize: "15px", marginTop: "0.5rem" },
};
