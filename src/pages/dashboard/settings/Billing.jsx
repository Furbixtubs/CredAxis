const INVOICES = [
  { id: "INV-0024", date: "1 Mar 2026", amount: "$299.00", status: "Paid" },
  { id: "INV-0023", date: "1 Feb 2026", amount: "$299.00", status: "Paid" },
  { id: "INV-0022", date: "1 Jan 2026", amount: "$299.00", status: "Paid" },
];

const LIMITS = [
  { label: "Borrowers",  used: 2481,  max: 5000   },
  { label: "Models",     used: 4,     max: 10     },
  { label: "API calls",  used: 38200, max: 100000 },
];

export default function Billing() {
  return (
    <div style={s.stack}>
      <h2 style={s.heading}>Billing</h2>

      {/* Plan */}
      <section style={s.section}>
        <div style={s.planRow}>
          <div>
            <p style={s.sectionTitle}>Growth plan</p>
            <p style={s.sectionSub}>$299 / month · Renews 1 Apr 2026</p>
          </div>
          <button style={s.btnGhost}>Change plan</button>
        </div>
        <div style={s.limits}>
          {LIMITS.map(({ label, used, max }) => (
            <div key={label}>
              <div style={s.limitMeta}>
                <span style={s.limitLabel}>{label}</span>
                <span style={s.limitCount}>{used.toLocaleString()} / {max.toLocaleString()}</span>
              </div>
              <div style={s.track}>
                <div style={{ ...s.fill, width: `${Math.round((used / max) * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment method */}
      <section style={s.section}>
        <p style={s.sectionTitle}>Payment method</p>
        <div style={s.cardRow}>
          <span style={{ fontSize: "24px" }}>💳</span>
          <div>
            <p style={s.cardBrand}>Visa ending in 4242</p>
            <p style={s.cardExp}>Expires 09 / 2028</p>
          </div>
          <button style={{ ...s.btnGhost, marginLeft: "auto" }}>Update</button>
        </div>
      </section>

      {/* Invoices */}
      <section style={s.section}>
        <p style={s.sectionTitle}>Invoice history</p>
        <table style={s.table}>
          <thead>
            <tr>{["Invoice", "Date", "Amount", "Status", ""].map((h) => <th key={h} style={s.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {INVOICES.map((inv) => (
              <tr key={inv.id} style={s.tr}>
                <td style={{ ...s.td, fontFamily: "monospace", fontSize: "13px" }}>{inv.id}</td>
                <td style={s.td}>{inv.date}</td>
                <td style={{ ...s.td, fontWeight: "600" }}>{inv.amount}</td>
                <td style={s.td}><span style={s.paidBadge}>{inv.status}</span></td>
                <td style={s.td}><button style={s.dlBtn}>Download ↓</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

const s = {
  stack:      { display: "flex", flexDirection: "column", gap: "1.5rem" },
  heading:    { fontSize: "17px", fontWeight: "600", marginBottom: "0.5rem" },
  section:    { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem 1.5rem" },
  sectionTitle:{ fontWeight: "600", fontSize: "15px", marginBottom: "0.25rem" },
  sectionSub: { fontSize: "13px", color: "#6b7280", marginBottom: "1.25rem" },
  planRow:    { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" },
  btnGhost:   { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "7px 14px", fontSize: "13px", cursor: "pointer" },
  limits:     { display: "flex", flexDirection: "column", gap: "1rem" },
  limitMeta:  { display: "flex", justifyContent: "space-between", marginBottom: "4px" },
  limitLabel: { fontSize: "13px", color: "#374151" },
  limitCount: { fontSize: "13px", color: "#6b7280" },
  track:      { height: "6px", background: "#f3f4f6", borderRadius: "999px", overflow: "hidden" },
  fill:       { height: "100%", background: "#111", borderRadius: "999px" },
  cardRow:    { display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.75rem" },
  cardBrand:  { fontSize: "14px", fontWeight: "500", marginBottom: "2px" },
  cardExp:    { fontSize: "12px", color: "#9ca3af" },
  table:      { width: "100%", borderCollapse: "collapse", marginTop: "0.75rem" },
  th:         { textAlign: "left", padding: "8px 0", fontSize: "12px", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", letterSpacing: ".05em", borderBottom: "1px solid #e5e7eb" },
  tr:         { borderBottom: "1px solid #f3f4f6" },
  td:         { padding: "10px 0", fontSize: "14px" },
  paidBadge:  { background: "#ecfdf5", color: "#059669", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500" },
  dlBtn:      { background: "none", border: "none", color: "#6b7280", fontSize: "13px", cursor: "pointer" },
};
