import { useState } from "react";

// Brand colors
// #A64C26 → High Risk, Rejected badge, active pagination
// #F8CE75 → Medium Risk badge
// #007020 → Low Risk badge
// #0B298C → Table headers

const rejectedLoans = [
  { id: 1,  name: "John Agoh",        bvn: true, avatar: "https://i.pravatar.cc/40?img=11", riskScore: 720, riskBand: "High Risk", recommendedLimit: 50000, decision: "Rejected" },
  { id: 2,  name: "Siemon Goodman",   bvn: true, avatar: "https://i.pravatar.cc/40?img=12", riskScore: 650, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
  { id: 3,  name: "Samuel Okon",      bvn: true, avatar: "https://i.pravatar.cc/40?img=13", riskScore: 590, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
  { id: 4,  name: "Sandra Ada",       bvn: true, avatar: "https://i.pravatar.cc/40?img=47", riskScore: 580, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
  { id: 5,  name: "Grace Samuel",     bvn: true, avatar: "https://i.pravatar.cc/40?img=48", riskScore: 700, riskBand: "High Risk", recommendedLimit: 50000, decision: "Rejected" },
  { id: 6,  name: "Chika Emeka",      bvn: true, avatar: "https://i.pravatar.cc/40?img=49", riskScore: 510, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
  { id: 7,  name: "Kunle Oluwafemi",  bvn: true, avatar: "https://i.pravatar.cc/40?img=15", riskScore: 600, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
  { id: 8,  name: "Olaitan Folakemi", bvn: true, avatar: "https://i.pravatar.cc/40?img=50", riskScore: 800, riskBand: "High Risk", recommendedLimit: 50000, decision: "Rejected" },
  { id: 9,  name: "Kelvin Samson",    bvn: true, avatar: "https://i.pravatar.cc/40?img=16", riskScore: 695, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
  { id: 10, name: "Adora Igwe",       bvn: true, avatar: "https://i.pravatar.cc/40?img=51", riskScore: 700, riskBand: "High Risk", recommendedLimit: 50000, decision: "Rejected" },
  { id: 11, name: "Kashim Ibrahim",   bvn: true, avatar: "https://i.pravatar.cc/40?img=17", riskScore: 750, riskBand: "High Risk", recommendedLimit: 50000, decision: "Rejected" },
  { id: 12, name: "Jimo Adekunle",    bvn: true, avatar: "https://i.pravatar.cc/40?img=18", riskScore: 700, riskBand: "High Risk", recommendedLimit: 50000, decision: "Rejected" },
  { id: 13, name: "Esther Bassey",    bvn: true, avatar: "https://i.pravatar.cc/40?img=52", riskScore: 690, riskBand: "High Risk", recommendedLimit: 20000, decision: "Rejected" },
];

const ROWS_PER_PAGE = 10;

const formatNaira = (amount) => `₦${amount.toLocaleString("en-NG")}`;

const RiskBadge = ({ band }) => {
  const colors = {
    "Low Risk":    { bg: "#007020", text: "#fff" },
    "Medium Risk": { bg: "#F8CE75", text: "#7A4F00" },
    "High Risk":   { bg: "#A64C26", text: "#fff" },
  };
  const style = colors[band] || colors["High Risk"];
  return (
    <span style={{ backgroundColor: style.bg, color: style.text, padding: "5px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, display: "inline-block", minWidth: "90px", textAlign: "center" }}>
      {band}
    </span>
  );
};

const DecisionBadge = ({ decision }) => {
  const colors = {
    Rejected: { bg: "#A64C26", text: "#fff" },
    Approved: { bg: "#166534", text: "#fff" },
    Pending:  { bg: "#92400E", text: "#fff" },
  };
  const style = colors[decision] || colors["Rejected"];
  return (
    <span style={{ backgroundColor: style.bg, color: style.text, padding: "5px 22px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, display: "inline-block", minWidth: "90px", textAlign: "center" }}>
      {decision}
    </span>
  );
};

const thBase = {
  textAlign: "left",
  padding: "12px 16px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#0B298C",
  cursor: "pointer",
  userSelect: "none",
  whiteSpace: "nowrap",
  borderBottom: "1px solid #F3F4F6",
};

const btnBase = {
  padding: "6px 16px",
  borderRadius: "6px",
  border: "1px solid #E5E7EB",
  fontSize: "13px",
  cursor: "pointer",
  transition: "all 0.15s",
};

const getPaginationItems = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items = [];
  if (current > 3) { items.push(1); if (current > 4) items.push("..."); }
  for (let i = Math.max(1, current - 2); i <= Math.min(total, current + 2); i++) items.push(i);
  if (current < total - 2) { if (current < total - 3) items.push("..."); items.push(total); }
  return items;
};

export default function RejectedLoans() {
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
    setCurrentPage(1);
  };

  const filtered = rejectedLoans
    .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortField) return 0;
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === "number") return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      return sortDir === "asc" ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
    });

  const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + ROWS_PER_PAGE);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <span style={{ opacity: 0.3, marginLeft: 4 }}>↕</span>;
    return <span style={{ marginLeft: 4 }}>{sortDir === "asc" ? "↑" : "↓"}</span>;
  };

  const rowBg = (id) => (id % 2 === 0 ? "#FAFAFA" : "#fff");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ padding: "24px 32px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <button
            onClick={() => window.history.back()}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: "#374151", padding: "4px", lineHeight: 1 }}
          >
            ←
          </button>
          <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#111827", margin: 0 }}>Rejected Loans</h1>
          <span style={{ backgroundColor: "#FEE2E2", color: "#991B1B", borderRadius: "20px", padding: "2px 10px", fontSize: "12px", fontWeight: 600 }}>
            {filtered.length}
          </span>
        </div>

        {/* Search */}
        <div style={{ marginBottom: "16px", maxWidth: "320px" }}>
          <input
            type="text"
            placeholder="Search borrower..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            style={{ width: "100%", padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px", outline: "none", backgroundColor: "#fff", color: "#374151", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Table Card */}
      <div style={{ margin: "0 32px 32px", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#fff" }}>
                <th style={{ ...thBase, textAlign: "left"   }} onClick={() => handleSort("name")}>Names <SortIcon field="name" /></th>
                <th style={{ ...thBase, textAlign: "center" }} onClick={() => handleSort("riskScore")}>Risk Score <SortIcon field="riskScore" /></th>
                <th style={{ ...thBase, textAlign: "center" }} onClick={() => handleSort("riskBand")}>Risk Band <SortIcon field="riskBand" /></th>
                <th style={{ ...thBase, textAlign: "center" }} onClick={() => handleSort("recommendedLimit")}>Recommended Limit <SortIcon field="recommendedLimit" /></th>
                <th style={{ ...thBase, textAlign: "center" }} onClick={() => handleSort("decision")}>Decision <SortIcon field="decision" /></th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((loan) => (
                <tr
                  key={loan.id}
                  style={{ backgroundColor: rowBg(loan.id), transition: "background 0.15s", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF7ED")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = rowBg(loan.id))}
                >
                  <td style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <img
                        src={loan.avatar}
                        alt={loan.name}
                        style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(loan.name)}&background=A64C26&color=fff&size=40`; }}
                      />
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{loan.name}</div>
                        {loan.bvn && <div style={{ fontSize: "11px", color: "#6B7280", marginTop: 2 }}>BVN (verified)</div>}
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6", textAlign: "center" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>{loan.riskScore}</span>
                  </td>

                  <td style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6", textAlign: "center" }}>
                    <RiskBadge band={loan.riskBand} />
                  </td>

                  <td style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6", textAlign: "center" }}>
                    <span style={{ fontSize: "14px", color: "#374151" }}>{formatNaira(loan.recommendedLimit)}</span>
                  </td>

                  <td style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6", textAlign: "center" }}>
                    <DecisionBadge decision={loan.decision} />
                  </td>
                </tr>
              ))}

              {paginated.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "48px", color: "#9CA3AF", fontSize: "14px" }}>
                    No rejected loans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
            Showing {filtered.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + ROWS_PER_PAGE, filtered.length)} of {filtered.length} entries
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              style={{ ...btnBase, background: currentPage === 1 ? "#F9FAFB" : "#fff", color: currentPage === 1 ? "#D1D5DB" : "#374151" }}
            >
              Previous
            </button>

            {getPaginationItems(currentPage, totalPages).map((item, idx) =>
              item === "..." ? (
                <span key={`ellipsis-${idx}`} style={{ fontSize: "13px", color: "#9CA3AF", padding: "0 4px" }}>…</span>
              ) : (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  style={{
                    width: "32px", height: "32px", borderRadius: "6px", border: "1px solid",
                    borderColor: currentPage === item ? "#A64C26" : "#E5E7EB",
                    backgroundColor: currentPage === item ? "#A64C26" : "#fff",
                    color: currentPage === item ? "#fff" : "#374151",
                    fontSize: "13px", fontWeight: currentPage === item ? 600 : 400,
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              style={{ ...btnBase, background: (currentPage === totalPages || totalPages === 0) ? "#F9FAFB" : "#fff", color: (currentPage === totalPages || totalPages === 0) ? "#D1D5DB" : "#374151" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}