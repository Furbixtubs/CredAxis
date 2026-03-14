import { useState } from "react";

const DATA = [
  { id: "tx001", borrower: "Alice Johnson", type: "Disbursement", amount: "$12,500", date: "14 Mar 2026", status: "Completed" },
  { id: "tx002", borrower: "Carlos Mendes", type: "Repayment",    amount: "$3,200",  date: "13 Mar 2026", status: "Completed" },
  { id: "tx003", borrower: "Priya Sharma",  type: "Disbursement", amount: "$8,000",  date: "12 Mar 2026", status: "Pending"   },
  { id: "tx004", borrower: "James Wright",  type: "Repayment",    amount: "$1,100",  date: "11 Mar 2026", status: "Failed"    },
  { id: "tx005", borrower: "Alice Johnson", type: "Repayment",    amount: "$2,400",  date: "10 Mar 2026", status: "Completed" },
  { id: "tx006", borrower: "Dana Lee",      type: "Disbursement", amount: "$5,750",  date: "9 Mar 2026",  status: "Pending"   },
];

const STATUS_STYLE = {
  Completed: { background: "#ecfdf5", color: "#059669" },
  Pending:   { background: "#fffbeb", color: "#d97706" },
  Failed:    { background: "#fef2f2", color: "#dc2626" },
};

export default function Transactions() {
  const [search,  setSearch]  = useState("");
  const [type,    setType]    = useState("All");

  const types = ["All", "Disbursement", "Repayment"];

  const rows = DATA.filter((tx) => {
    const matchSearch = tx.borrower.toLowerCase().includes(search.toLowerCase()) || tx.id.includes(search);
    const matchType   = type === "All" || tx.type === type;
    return matchSearch && matchType;
  });

  return (
    <div>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Transactions</h1>
          <p style={s.sub}>{rows.length} transactions</p>
        </div>
        <button style={s.btnPrimary}>Export CSV</button>
      </div>

      <div style={s.filters}>
        <input
          type="search"
          placeholder="Search by borrower or ID…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={s.search}
        />
        <div style={s.tabs}>
          {types.map((t) => (
            <button key={t} onClick={() => setType(t)} style={{ ...s.tab, ...(type === t ? s.tabActive : {}) }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>{["ID", "Borrower", "Type", "Amount", "Date", "Status"].map((h) => <th key={h} style={s.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((tx) => (
              <tr key={tx.id} style={s.tr}>
                <td style={{ ...s.td, fontFamily: "monospace", fontSize: "13px", color: "#6b7280" }}>{tx.id}</td>
                <td style={s.td}>{tx.borrower}</td>
                <td style={s.td}>{tx.type}</td>
                <td style={{ ...s.td, fontWeight: "600" }}>{tx.amount}</td>
                <td style={{ ...s.td, color: "#6b7280" }}>{tx.date}</td>
                <td style={s.td}><span style={{ ...s.badge, ...STATUS_STYLE[tx.status] }}>{tx.status}</span></td>
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
  filters:   { display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" },
  search:    { padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", width: "260px" },
  tabs:      { display: "flex", gap: "0.5rem" },
  tab:       { background: "none", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "6px 14px", fontSize: "13px", cursor: "pointer", color: "#6b7280" },
  tabActive: { background: "#111", color: "#fff", borderColor: "#111" },
  tableWrap: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden" },
  table:     { width: "100%", borderCollapse: "collapse" },
  th:        { textAlign: "left", padding: "10px 16px", fontSize: "12px", fontWeight: "600", color: "#6b7280", textTransform: "uppercase", letterSpacing: ".05em", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" },
  tr:        { borderBottom: "1px solid #f3f4f6" },
  td:        { padding: "12px 16px", fontSize: "14px" },
  badge:     { display: "inline-block", padding: "2px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" },
};
