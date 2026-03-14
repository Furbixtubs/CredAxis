import { useState } from "react";

const BANDS = [
  { band: "Low",      range: "720–850", count: 1240, pct: 50, color: "#059669", bg: "#ecfdf5" },
  { band: "Medium",   range: "640–719", count:  740, pct: 30, color: "#d97706", bg: "#fffbeb" },
  { band: "High",     range: "580–639", count:  370, pct: 15, color: "#ea580c", bg: "#fff7ed" },
  { band: "Critical", range: "300–579", count:  131, pct:  5, color: "#dc2626", bg: "#fef2f2" },
];

export default function RiskAnalysis() {
  const [borrowerId, setBorrowerId] = useState("");
  const [result,     setResult]     = useState(null);

  function runScore(e) {
    e.preventDefault();
    setResult({
      id:      borrowerId,
      score:   Math.floor(Math.random() * 300 + 550),
      band:    "Medium",
      factors: ["Thin credit file", "High utilisation (78%)", "Short account history (8 months)"],
    });
  }

  return (
    <div>
      <h1 style={s.title}>Risk Analysis</h1>

      <div style={s.layout}>
        {/* Portfolio breakdown */}
        <div style={s.card}>
          <h2 style={s.cardTitle}>Portfolio risk breakdown</h2>
          <p style={s.cardSub}>2,481 active borrowers</p>
          <div style={s.bands}>
            {BANDS.map((r) => (
              <div key={r.band} style={s.bandRow}>
                <div style={s.bandLeft}>
                  <span style={{ ...s.dot, background: r.color }} />
                  <div>
                    <p style={s.bandName}>{r.band} risk</p>
                    <p style={s.bandRange}>{r.range}</p>
                  </div>
                </div>
                <div style={s.bandRight}>
                  <div style={s.track}>
                    <div style={{ ...s.fill, width: `${r.pct}%`, background: r.color }} />
                  </div>
                  <span style={s.count}>{r.count.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scorer */}
        <div style={s.card}>
          <h2 style={s.cardTitle}>Score a borrower</h2>
          <p style={s.cardSub}>Run the active credit model on any borrower ID</p>
          <form onSubmit={runScore} style={s.form}>
            <input
              type="text"
              placeholder="Enter borrower ID (e.g. b1)"
              value={borrowerId}
              onChange={(e) => setBorrowerId(e.target.value)}
              required
              style={s.input}
            />
            <button type="submit" style={s.btn}>Run analysis</button>
          </form>

          {result && (
            <div style={s.result}>
              <p style={s.resultScore}>{result.score}</p>
              <p style={s.resultLabel}>Score for <strong>{result.id}</strong></p>
              <p style={s.resultBand}>Risk band: <strong>{result.band}</strong></p>
              <div style={s.factors}>
                <p style={s.factorsTitle}>Key risk factors</p>
                <ul style={s.ul}>
                  {result.factors.map((f) => <li key={f} style={s.li}>{f}</li>)}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const s = {
  title:      { fontSize: "22px", fontWeight: "700", marginBottom: "1.5rem" },
  layout:     { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" },
  card:       { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.5rem" },
  cardTitle:  { fontSize: "16px", fontWeight: "600", marginBottom: "0.25rem" },
  cardSub:    { color: "#6b7280", fontSize: "13px", marginBottom: "1.5rem" },
  bands:      { display: "flex", flexDirection: "column", gap: "1rem" },
  bandRow:    { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" },
  bandLeft:   { display: "flex", alignItems: "center", gap: "10px", minWidth: "130px" },
  dot:        { width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0 },
  bandName:   { fontSize: "14px", fontWeight: "500" },
  bandRange:  { fontSize: "12px", color: "#9ca3af" },
  bandRight:  { display: "flex", alignItems: "center", gap: "10px", flex: 1 },
  track:      { flex: 1, height: "6px", background: "#f3f4f6", borderRadius: "999px", overflow: "hidden" },
  fill:       { height: "100%", borderRadius: "999px" },
  count:      { fontSize: "13px", color: "#6b7280", minWidth: "36px", textAlign: "right" },
  form:       { display: "flex", gap: "0.5rem", marginBottom: "1.25rem" },
  input:      { flex: 1, padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px" },
  btn:        { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 14px", fontSize: "14px", fontWeight: "500", cursor: "pointer", whiteSpace: "nowrap" },
  result:     { background: "#f9fafb", borderRadius: "8px", padding: "1.25rem", border: "1px solid #e5e7eb" },
  resultScore:{ fontSize: "42px", fontWeight: "700", marginBottom: "0.25rem" },
  resultLabel:{ fontSize: "14px", color: "#6b7280", marginBottom: "0.25rem" },
  resultBand: { fontSize: "14px", marginBottom: "1rem" },
  factors:    { borderTop: "1px solid #e5e7eb", paddingTop: "1rem" },
  factorsTitle:{ fontSize: "12px", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: "0.5rem" },
  ul:         { paddingLeft: "1.25rem", margin: 0 },
  li:         { fontSize: "14px", color: "#374151", marginBottom: "0.25rem" },
};
