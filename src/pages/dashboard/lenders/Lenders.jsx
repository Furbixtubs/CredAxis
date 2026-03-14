import { useState } from "react";

const DATA = [
  { id: "l1", name: "Apex Capital",      type: "Institutional", allocated: "$2.1M",  rate: "18%", status: "Active" },
  { id: "l2", name: "Bridgepoint Fund",  type: "Private",       allocated: "$850K",  rate: "21%", status: "Active" },
  { id: "l3", name: "Coral Investments", type: "Institutional", allocated: "$3.4M",  rate: "16%", status: "Paused" },
  { id: "l4", name: "Delta Credit Co.",  type: "Private",       allocated: "$420K",  rate: "23%", status: "Active" },
  { id: "l5", name: "Echo Finance",      type: "Institutional", allocated: "$1.2M",  rate: "17%", status: "Active" },
];

const STATUS_STYLE = {
  Active: { background: "#ecfdf5", color: "#059669" },
  Paused: { background: "#fffbeb", color: "#d97706" },
};

export default function Lenders() {
  const [search, setSearch] = useState("");

  const rows = DATA.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Lenders</h1>
          <p style={s.sub}>{DATA.length} lenders on platform</p>
        </div>
        <button style={s.btnPrimary}>+ Add lender</button>
      </div>

      <input
        type="search"
        placeholder="Search lenders…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={s.search}
      />

      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>{["Name", "Type", "Allocated", "Target rate", "Status", ""].map((h) => <th key={h} style={s.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((l) => (
              <tr key={l.id} style={s.tr}>
                <td style={s.td}><strong>{l.name}</strong></td>
                <td style={s.td}>{l.type}</td>
                <td style={s.td}>{l.allocated}</td>
                <td style={s.td}>{l.rate}</td>
                <td style={s.td}><span style={{ ...s.badge, ...STATUS_STYLE[l.status] }}>{l.status}</span></td>
                <td style={s.td}><button style={s.viewBtn}>View →</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const s = {
  header:    { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" },
  title:     { fontSize: "22px", fontWeight: "700", marginBottom: "0.25rem" },
  sub:       { color: "#6b7280", fontSize: "14px" },
  btnPrimary:{ background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 16px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  search:    { padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", marginBottom: "1.5rem", width: "320px" },
  tableWrap: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden" },
  table:     { width: "100%", borderCollapse: "collapse" },
  th:        { textAlign: "left", padding: "10px 16px", fontSize: "12px", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", letterSpacing: ".05em", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" },
  tr:        { borderBottom: "1px solid #f3f4f6" },
  td:        { padding: "12px 16px", fontSize: "14px" },
  badge:     { display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" },
  viewBtn:   { background: "none", border: "none", color: "#111", fontSize: "13px", fontWeight: "500", cursor: "pointer" },
};
