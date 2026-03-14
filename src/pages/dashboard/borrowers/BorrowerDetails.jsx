import { Link, useParams } from "react-router";

const MOCK = {
  b1: { name: "Alice Johnson",  email: "alice@acme.com",   phone: "+234 801 234 5678", score: 720, tier: "Prime",      status: "Active",       joined: "Jan 2024", loans: 2, outstanding: "$14,200" },
  b2: { name: "Carlos Mendes",  email: "carlos@beta.io",   phone: "+234 802 345 6789", score: 645, tier: "Near-prime", status: "Under Review", joined: "Mar 2024", loans: 1, outstanding: "$8,500"  },
  b3: { name: "Priya Sharma",   email: "priya@delta.co",   phone: "+234 803 456 7890", score: 580, tier: "Subprime",   status: "Active",       joined: "Jun 2024", loans: 1, outstanding: "$5,000"  },
  b4: { name: "James Wright",   email: "james@ewcorp.net", phone: "+234 804 567 8901", score: 490, tier: "Deep sub",   status: "Defaulted",    joined: "Aug 2023", loans: 3, outstanding: "$21,000" },
  b5: { name: "Dana Lee",       email: "dana@foxtrot.com", phone: "+234 805 678 9012", score: 700, tier: "Prime",      status: "Active",       joined: "Nov 2023", loans: 1, outstanding: "$6,750"  },
  b6: { name: "Emeka Obi",      email: "emeka@goldinv.ng", phone: "+234 806 789 0123", score: 610, tier: "Near-prime", status: "Active",       joined: "Feb 2024", loans: 2, outstanding: "$11,300" },
};

const STATUS_STYLE = {
  "Active":       { background: "#ecfdf5", color: "#059669" },
  "Under Review": { background: "#fffbeb", color: "#d97706" },
  "Defaulted":    { background: "#fef2f2", color: "#dc2626" },
};

export default function BorrowerDetails() {
  const { id } = useParams();
  const b = MOCK[id];

  if (!b) return (
    <div>
      <Link to="/dashboard/borrowers" style={s.back}>← Back to borrowers</Link>
      <p style={{ color: "#dc2626", marginTop: "1rem" }}>Borrower not found.</p>
    </div>
  );

  const fields = [
    { label: "Email",           value: b.email },
    { label: "Phone",           value: b.phone },
    { label: "Credit score",    value: b.score },
    { label: "Credit tier",     value: b.tier },
    { label: "Member since",    value: b.joined },
    { label: "Active loans",    value: b.loans },
    { label: "Outstanding",     value: b.outstanding },
  ];

  return (
    <div>
      <Link to="/dashboard/borrowers" style={s.back}>← Back to borrowers</Link>

      <div style={s.topRow}>
        <div style={s.avatar}>{b.name.split(" ").map(w => w[0]).join("")}</div>
        <div>
          <h1 style={s.name}>{b.name}</h1>
          <span style={{ ...s.badge, ...STATUS_STYLE[b.status] }}>{b.status}</span>
        </div>
      </div>

      <div style={s.layout}>
        <div style={s.card}>
          <h2 style={s.cardTitle}>Borrower details</h2>
          <dl style={s.dl}>
            {fields.map(({ label, value }) => (
              <div key={label} style={s.dlRow}>
                <dt style={s.dt}>{label}</dt>
                <dd style={s.dd}>{value}</dd>
              </div>
            ))}
          </dl>
          <div style={s.actions}>
            <button style={s.btnPrimary}>Edit borrower</button>
            <button style={s.btnGhost}>Run credit check</button>
          </div>
        </div>

        <div style={s.card}>
          <h2 style={s.cardTitle}>Credit score history</h2>
          <div style={s.scoreBar}>
            <div style={s.scoreTrack}>
              <div style={{ ...s.scoreFill, width: `${((b.score - 300) / 550) * 100}%` }} />
            </div>
            <p style={s.scoreLabel}>{b.score} / 850</p>
          </div>
          <p style={s.scoreTier}>Tier: <strong>{b.tier}</strong></p>
          <p style={s.scoreNote}>Score last updated 3 days ago via Experian.</p>
        </div>
      </div>
    </div>
  );
}

const s = {
  back:       { display: "inline-block", marginBottom: "1.25rem", color: "#6b7280", textDecoration: "none", fontSize: "14px" },
  topRow:     { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" },
  avatar:     { width: "52px", height: "52px", borderRadius: "50%", background: "#111", color: "#fff", display: "grid", placeItems: "center", fontSize: "18px", fontWeight: "700", flexShrink: 0 },
  name:       { fontSize: "22px", fontWeight: "700", marginBottom: "4px" },
  badge:      { display: "inline-block", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" },
  layout:     { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" },
  card:       { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.5rem" },
  cardTitle:  { fontSize: "15px", fontWeight: "600", marginBottom: "1rem" },
  dl:         { border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden", marginBottom: "1.25rem" },
  dlRow:      { display: "flex", borderBottom: "1px solid #f3f4f6" },
  dt:         { width: "160px", padding: "9px 14px", fontSize: "13px", color: "#6b7280", background: "#f9fafb", flexShrink: 0 },
  dd:         { padding: "9px 14px", fontSize: "14px" },
  actions:    { display: "flex", gap: "0.75rem" },
  btnPrimary: { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 16px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  btnGhost:   { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "8px 16px", fontSize: "14px", cursor: "pointer" },
  scoreBar:   { marginBottom: "0.75rem" },
  scoreTrack: { height: "8px", background: "#f3f4f6", borderRadius: "999px", overflow: "hidden", marginBottom: "6px" },
  scoreFill:  { height: "100%", background: "#111", borderRadius: "999px" },
  scoreLabel: { fontSize: "20px", fontWeight: "700" },
  scoreTier:  { fontSize: "14px", marginBottom: "0.5rem" },
  scoreNote:  { fontSize: "12px", color: "#9ca3af" },
};
