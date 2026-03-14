import { useState } from "react";

const DATA = [
  { id: "m1", name: "Standard Consumer v3",  type: "Classification", accuracy: "87%", lastRun: "2 hours ago",  status: "Active" },
  { id: "m2", name: "SME Scorecard v1",       type: "Regression",     accuracy: "82%", lastRun: "Yesterday",    status: "Active" },
  { id: "m3", name: "Alt-Data Blend v2",      type: "Ensemble",       accuracy: "91%", lastRun: "3 days ago",   status: "Draft" },
  { id: "m4", name: "Gig Worker Model v1",    type: "Classification", accuracy: "78%", lastRun: "1 week ago",   status: "Archived" },
];

const STATUS_STYLE = {
  Active:   { background: "#ecfdf5", color: "#059669" },
  Draft:    { background: "#fffbeb", color: "#d97706" },
  Archived: { background: "#f3f4f6", color: "#6b7280" },
};

export default function CreditModels() {
  const [filter, setFilter] = useState("All");
  const tabs = ["All", "Active", "Draft", "Archived"];
  const rows = filter === "All" ? DATA : DATA.filter((m) => m.status === filter);

  return (
    <div>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Credit Models</h1>
          <p style={s.sub}>{DATA.length} models configured</p>
        </div>
        <button style={s.btnPrimary}>+ New model</button>
      </div>

      <div style={s.tabs}>
        {tabs.map((t) => (
          <button key={t} onClick={() => setFilter(t)} style={{ ...s.tab, ...(filter === t ? s.tabActive : {}) }}>
            {t}
          </button>
        ))}
      </div>

      <div style={s.grid}>
        {rows.map((m) => (
          <div key={m.id} style={s.card}>
            <div style={s.cardTop}>
              <span style={s.cardName}>{m.name}</span>
              <span style={{ ...s.badge, ...STATUS_STYLE[m.status] }}>{m.status}</span>
            </div>
            <div style={s.cardMeta}>
              <span>{m.type}</span>
              <span>Accuracy: <strong>{m.accuracy}</strong></span>
            </div>
            <p style={s.lastRun}>Last run: {m.lastRun}</p>
            <div style={s.cardActions}>
              <button style={s.btnRun}>Run model</button>
              <button style={s.btnEdit}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const s = {
  header:     { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" },
  title:      { fontSize: "22px", fontWeight: "700", marginBottom: "0.25rem" },
  sub:        { color: "#6b7280", fontSize: "14px" },
  btnPrimary: { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 16px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  tabs:       { display: "flex", gap: "0.5rem", marginBottom: "1.5rem" },
  tab:        { background: "none", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "6px 14px", fontSize: "13px", cursor: "pointer", color: "#6b7280" },
  tabActive:  { background: "#111", color: "#fff", borderColor: "#111" },
  grid:       { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" },
  card:       { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" },
  cardTop:    { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" },
  cardName:   { fontWeight: "600", fontSize: "15px", lineHeight: 1.3 },
  badge:      { display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500", flexShrink: 0 },
  cardMeta:   { display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#6b7280" },
  lastRun:    { fontSize: "12px", color: "#9ca3af" },
  cardActions:{ display: "flex", gap: "0.5rem" },
  btnRun:     { background: "#111", color: "#fff", border: "none", borderRadius: "5px", padding: "5px 12px", fontSize: "13px", cursor: "pointer" },
  btnEdit:    { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "5px", padding: "5px 12px", fontSize: "13px", cursor: "pointer" },
};
