const TEAM = [
  { name: "Adaeze Okonkwo", role: "CEO & Co-founder",    bio: "10 years in fintech lending at Access Bank and Carbon." },
  { name: "Tunde Fashola",  role: "CTO & Co-founder",    bio: "Previously ML engineering lead at Flutterwave." },
  { name: "Sade Williams",  role: "Head of Risk",         bio: "Credit risk specialist with background at Moody's." },
  { name: "James Okorie",   role: "Head of Partnerships", bio: "Built integrations for 40+ financial institutions." },
];

export default function About() {
  return (
    <div style={s.page}>
      <section style={s.hero}>
        <h1 style={s.heading}>Our mission</h1>
        <p style={s.sub}>
          CredAxis exists to help lenders make better, fairer credit decisions —
          by making alternative data usable, credit models explainable, and risk
          analysis accessible to every lending business, not just the giants.
        </p>
      </section>

      <section style={s.section}>
        <h2 style={s.sectionTitle}>The team</h2>
        <div style={s.grid}>
          {TEAM.map((m) => (
            <div key={m.name} style={s.card}>
              <div style={s.avatar}>{m.name.split(" ").map(w => w[0]).join("")}</div>
              <h3 style={s.memberName}>{m.name}</h3>
              <p style={s.memberRole}>{m.role}</p>
              <p style={s.memberBio}>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...s.section, background: "#f8f9fb", borderRadius: "12px", padding: "2.5rem" }}>
        <h2 style={s.sectionTitle}>By the numbers</h2>
        <div style={s.stats}>
          {[
            { value: "50+",  label: "Lenders on platform" },
            { value: "$2B+", label: "Loans processed" },
            { value: "99.9%",label: "Uptime SLA" },
            { value: "12ms", label: "Avg scoring latency" },
          ].map(({ value, label }) => (
            <div key={label} style={s.stat}>
              <p style={s.statVal}>{value}</p>
              <p style={s.statLabel}>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const s = {
  page:        { maxWidth: "860px", margin: "0 auto", padding: "3rem 2rem" },
  hero:        { marginBottom: "3rem" },
  heading:     { fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "700", marginBottom: "1rem" },
  sub:         { fontSize: "17px", color: "#6b7280", lineHeight: 1.7, maxWidth: "640px" },
  section:     { marginBottom: "3rem" },
  sectionTitle:{ fontSize: "20px", fontWeight: "700", marginBottom: "1.5rem" },
  grid:        { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" },
  card:        { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem" },
  avatar:      { width: "44px", height: "44px", borderRadius: "50%", background: "#111", color: "#fff", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "14px", marginBottom: "0.75rem" },
  memberName:  { fontWeight: "600", fontSize: "15px", marginBottom: "2px" },
  memberRole:  { fontSize: "12px", color: "#6b7280", marginBottom: "0.5rem" },
  memberBio:   { fontSize: "13px", color: "#374151", lineHeight: 1.5 },
  stats:       { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.5rem" },
  stat:        { textAlign: "center" },
  statVal:     { fontSize: "32px", fontWeight: "700", marginBottom: "4px" },
  statLabel:   { fontSize: "13px", color: "#6b7280" },
};
