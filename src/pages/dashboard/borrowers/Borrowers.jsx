import { useState } from "react";
import { Link } from "react-router";

const DATA = [
  {
    id: "b1",
    name: "Alice Johnson",
    email: "alice@acme.com",
    score: 720,
    tier: "Prime",
    status: "Active",
  },
  {
    id: "b2",
    name: "Carlos Mendes",
    email: "carlos@beta.io",
    score: 645,
    tier: "Near-prime",
    status: "Under Review",
  },
  {
    id: "b3",
    name: "Priya Sharma",
    email: "priya@delta.co",
    score: 580,
    tier: "Subprime",
    status: "Active",
  },
  {
    id: "b4",
    name: "James Wright",
    email: "james@ewcorp.net",
    score: 490,
    tier: "Deep sub",
    status: "Defaulted",
  },
  {
    id: "b5",
    name: "Dana Lee",
    email: "dana@foxtrot.com",
    score: 700,
    tier: "Prime",
    status: "Active",
  },
  {
    id: "b6",
    name: "Emeka Obi",
    email: "emeka@goldinv.ng",
    score: 610,
    tier: "Near-prime",
    status: "Active",
  },
];

const STATUS_STYLE = {
  Active: { background: "#ecfdf5", color: "#059669" },
  "Under Review": { background: "#fffbeb", color: "#d97706" },
  Defaulted: { background: "#fef2f2", color: "#dc2626" },
};

export default function Borrowers() {
  const [search, setSearch] = useState("");

  const rows = DATA.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Borrowers</h1>
          <p style={s.sub}>{DATA.length} total borrowers</p>
        </div>
        <button style={s.btnPrimary}>+ Add borrower</button>
      </div>

      <input
        type="search"
        placeholder="Search by name or email…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={s.search}
      />

      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              {["Name", "Email", "Score", "Tier", "Status", ""].map((h) => (
                <th key={h} style={s.th}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id} style={s.tr}>
                <td style={s.td}>
                  <strong>{b.name}</strong>
                </td>
                <td style={s.td}>{b.email}</td>
                <td style={s.td}>{b.score}</td>
                <td style={s.td}>{b.tier}</td>
                <td style={s.td}>
                  <span style={{ ...s.badge, ...STATUS_STYLE[b.status] }}>
                    {b.status}
                  </span>
                </td>
                <td style={s.td}>
                  <Link to={`/dashboard/borrowers/${b.id}`} style={s.viewLink}>
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const s = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
  },
  title: { fontSize: "22px", fontWeight: "700", marginBottom: "0.25rem" },
  sub: { color: "#6b7280", fontSize: "14px" },
  btnPrimary: {
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
  },
  search: {
    padding: "8px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    fontSize: "14px",
    marginBottom: "1.5rem",
    width: "320px",
  },
  tableWrap: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    overflow: "hidden",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    textAlign: "left",
    padding: "10px 16px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: ".05em",
    background: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
  },
  tr: { borderBottom: "1px solid #f3f4f6" },
  td: { padding: "12px 16px", fontSize: "14px" },
  badge: {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "500",
  },
  viewLink: {
    color: "#111",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "500",
  },
};
