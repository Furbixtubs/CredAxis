import { useState, useEffect } from "react";
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

const STATUS_CONFIG = {
  Active: { bg: "#f0fdf4", color: "#16a34a", dot: "#22c55e" },
  "Under Review": { bg: "#fffbeb", color: "#b45309", dot: "#f59e0b" },
  Defaulted: { bg: "#fef2f2", color: "#dc2626", dot: "#ef4444" },
};

const TIER_CONFIG = {
  Prime: { bg: "#eff6ff", color: "#1d4ed8" },
  "Near-prime": { bg: "#f5f3ff", color: "#7c3aed" },
  Subprime: { bg: "#fff7ed", color: "#c2410c" },
  "Deep sub": { bg: "#fef2f2", color: "#b91c1c" },
};

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return { isMobile: width < 640, isTablet: width < 1024, width };
}

function ScoreBar({ score }) {
  const pct = Math.min(100, Math.max(0, ((score - 300) / 550) * 100));
  const color =
    score >= 700
      ? "#22c55e"
      : score >= 600
        ? "#f59e0b"
        : score >= 500
          ? "#f97316"
          : "#ef4444";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span
        style={{
          fontSize: "13px",
          fontWeight: "600",
          color: "#111827",
          minWidth: "32px",
        }}
      >
        {score}
      </span>
      <div
        style={{
          flex: 1,
          height: "5px",
          background: "#f3f4f6",
          borderRadius: "99px",
          overflow: "hidden",
          minWidth: "50px",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: color,
            borderRadius: "99px",
          }}
        />
      </div>
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const colors = [
    "#dbeafe",
    "#fce7f3",
    "#dcfce7",
    "#fef9c3",
    "#ede9fe",
    "#ffedd5",
  ];
  const textColors = [
    "#1d4ed8",
    "#be185d",
    "#15803d",
    "#a16207",
    "#7c3aed",
    "#c2410c",
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return (
    <div
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        background: colors[idx],
        color: textColors[idx],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: "700",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

function BorrowerCard({ b }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar name={b.name} />
          <div>
            <div
              style={{ fontWeight: "600", fontSize: "14px", color: "#111827" }}
            >
              {b.name}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>{b.email}</div>
          </div>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "3px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "600",
            background: STATUS_CONFIG[b.status].bg,
            color: STATUS_CONFIG[b.status].color,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: STATUS_CONFIG[b.status].dot,
              flexShrink: 0,
            }}
          />
          {b.status}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "5px",
            }}
          >
            Credit Score
          </div>
          <ScoreBar score={b.score} />
        </div>
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "5px",
            }}
          >
            Tier
          </div>
          <span
            style={{
              display: "inline-block",
              padding: "3px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "600",
              ...TIER_CONFIG[b.tier],
            }}
          >
            {b.tier}
          </span>
        </div>
      </div>

      <Link
        to={`/dashboard/borrowers/${b.id}`}
        style={{
          display: "block",
          textAlign: "center",
          padding: "8px",
          borderRadius: "7px",
          fontSize: "13px",
          fontWeight: "600",
          textDecoration: "none",
          border: "1px solid #e5e7eb",
          transition: "all .15s",
          background: hover ? "#0f172a" : "#fff",
          color: hover ? "#fff" : "#374151",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        View Profile →
      </Link>
    </div>
  );
}

const STATS = [
  { label: "Total Borrowers", value: DATA.length },
  { label: "Active", value: DATA.filter((d) => d.status === "Active").length },
  {
    label: "Under Review",
    value: DATA.filter((d) => d.status === "Under Review").length,
  },
  {
    label: "Defaulted",
    value: DATA.filter((d) => d.status === "Defaulted").length,
  },
];

export default function Borrowers() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [hoverRow, setHoverRow] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(null);
  const { isMobile, isTablet } = useBreakpoint();

  const rows = DATA.filter((b) => {
    const matchSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || b.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div
      style={{
        padding: isMobile ? "1.25rem 1rem" : "2rem 2.5rem",
        fontFamily: "'Poppins', sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          marginBottom: "1.5rem",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: isMobile ? "20px" : "26px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "4px",
              letterSpacing: "-0.02em",
            }}
          >
            Borrowers
          </h1>
          <p style={{ color: "#f1f1f1", fontSize: "14px" }}>
            Manage and monitor all borrower profiles
          </p>
        </div>
        <Link
          to="/dashboard/add-borrower"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#0f172a",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
            whiteSpace: "nowrap",
          }}
        >
          + Add Borrower
        </Link>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "12px",
          marginBottom: "1.5rem",
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "16px 18px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "22px" : "28px",
                fontWeight: "700",
                color: "#0f172a",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "5px",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "stretch" : "center",
          marginBottom: "1rem",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "8px 14px",
            background: "#fff",
            width: isMobile ? "100%" : "300px",
            boxSizing: "border-box",
            boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            style={{ color: "#9ca3af", flexShrink: 0 }}
          >
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="M16 16l-3.5-3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              fontSize: "14px",
              background: "transparent",
              width: "100%",
              color: "#111827",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {["All", "Active", "Under Review", "Defaulted"].map((f) => (
            <button
              key={f}
              onClick={() => setFilterStatus(f)}
              style={{
                padding: "7px 14px",
                borderRadius: "7px",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                background: filterStatus === f ? "#0f172a" : "#fff",
                color: filterStatus === f ? "#fff" : "#6b7280",
                border:
                  filterStatus === f
                    ? "1px solid #0f172a"
                    : "1px solid #e5e7eb",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: Cards / Desktop: Table */}
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {rows.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#9ca3af",
                padding: "48px 0",
                fontSize: "14px",
              }}
            >
              No borrowers match your search.
            </div>
          ) : (
            rows.map((b) => <BorrowerCard key={b.id} b={b} />)
          )}
          {rows.length > 0 && (
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#9ca3af",
                marginTop: "6px",
              }}
            >
              Showing <strong>{rows.length}</strong> of{" "}
              <strong>{DATA.length}</strong> borrowers
            </p>
          )}
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: isTablet ? "680px" : "unset",
              }}
            >
              <thead>
                <tr>
                  {[
                    "Borrower",
                    "Email",
                    "Credit Score",
                    "Tier",
                    "Status",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "11px 18px",
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: ".07em",
                        background: "#f9fafb",
                        borderBottom: "1px solid #e5e7eb",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      style={{
                        textAlign: "center",
                        color: "#9ca3af",
                        padding: "48px 16px",
                        fontSize: "14px",
                      }}
                    >
                      No borrowers match your search.
                    </td>
                  </tr>
                ) : (
                  rows.map((b, i) => (
                    <tr
                      key={b.id}
                      style={{
                        borderBottom: "1px solid #f3f4f6",
                        transition: "background .1s",
                        background:
                          hoverRow === b.id
                            ? "#f5f7ff"
                            : i % 2 !== 0
                              ? "#fafafa"
                              : "#fff",
                      }}
                      onMouseEnter={() => setHoverRow(b.id)}
                      onMouseLeave={() => setHoverRow(null)}
                    >
                      <td style={{ padding: "13px 18px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Avatar name={b.name} />
                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "14px",
                              color: "#111827",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {b.name}
                          </span>
                        </div>
                      </td>
                      <td
                        style={{
                          padding: "13px 18px",
                          fontSize: "14px",
                          color: "#6b7280",
                        }}
                      >
                        {b.email}
                      </td>
                      <td style={{ padding: "13px 18px" }}>
                        <ScoreBar score={b.score} />
                      </td>
                      <td style={{ padding: "13px 18px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "3px 10px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                            ...TIER_CONFIG[b.tier],
                          }}
                        >
                          {b.tier}
                        </span>
                      </td>
                      <td style={{ padding: "13px 18px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "3px 10px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                            background: STATUS_CONFIG[b.status].bg,
                            color: STATUS_CONFIG[b.status].color,
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: STATUS_CONFIG[b.status].dot,
                              flexShrink: 0,
                            }}
                          />
                          {b.status}
                        </span>
                      </td>
                      <td style={{ padding: "13px 18px", textAlign: "right" }}>
                        <Link
                          to={`/dashboard/borrowers/${b.id}`}
                          style={{
                            display: "inline-block",
                            padding: "6px 14px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            transition: "all .15s",
                            background: hoverBtn === b.id ? "#0f172a" : "#fff",
                            color: hoverBtn === b.id ? "#fff" : "#374151",
                            border:
                              hoverBtn === b.id
                                ? "1px solid #0f172a"
                                : "1px solid #e5e7eb",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                          }}
                          onMouseEnter={() => setHoverBtn(b.id)}
                          onMouseLeave={() => setHoverBtn(null)}
                        >
                          View Profile →
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div
            style={{
              padding: "12px 18px",
              borderTop: "1px solid #f3f4f6",
              fontSize: "13px",
              color: "#9ca3af",
              background: "#fafafa",
            }}
          >
            Showing <strong>{rows.length}</strong> of{" "}
            <strong>{DATA.length}</strong> borrowers
          </div>
        </div>
      )}
    </div>
  );
}
