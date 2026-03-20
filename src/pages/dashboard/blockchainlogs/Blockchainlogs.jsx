import { useState, useEffect } from "react";

const blockchainLogs = [
  {
    id: 1,
    borrower: "John Doe",
    decision: "Approved",
    riskScore: 720,
    hash: "0x7fa93d8bc2134f...",
    timestamp: "16 Mar 2026, 14:22",
  },
  {
    id: 2,
    borrower: "Mary Okon",
    decision: "Rejected",
    riskScore: 540,
    hash: "0x8bc21af97e25d...",
    timestamp: "16 Mar 2026, 10:15",
  },
  {
    id: 3,
    borrower: "Samuel Ali",
    decision: "Approved",
    riskScore: 690,
    hash: "0x2ac41bfda9123...",
    timestamp: "15 Mar 2026, 09:30",
  },
  {
    id: 4,
    borrower: "Aisha Bello",
    decision: "Approved",
    riskScore: 750,
    hash: "0x9e73d0c5a1b6f...",
    timestamp: "14 Mar 2026, 16:45",
  },
  {
    id: 5,
    borrower: "Tom Eze",
    decision: "Rejected",
    riskScore: 510,
    hash: "0x3aeb5fd41c92...",
    timestamp: "13 Mar 2026, 11:10",
  },
  {
    id: 5,
    borrower: "Tom Eze",
    decision: "Rejected",
    riskScore: 510,
    hash: "0x3aeb5fd41c92...",
    timestamp: "13 Mar 2026, 11:10",
  },
  {
    id: 6,
    borrower: "Tom Eze",
    decision: "Rejected",
    riskScore: 510,
    hash: "0x3aeb5fd41c92...",
    timestamp: "13 Mar 2026, 11:10",
  },
  {
    id: 7,
    borrower: "Tom Eze",
    decision: "Rejected",
    riskScore: 510,
    hash: "0x3aeb5fd41c92...",
    timestamp: "13 Mar 2026, 11:10",
  },
  {
    id: 8,
    borrower: "Tom Eze",
    decision: "Rejected",
    riskScore: 510,
    hash: "0x3aeb5fd41c92...",
    timestamp: "13 Mar 2026, 11:10",
  },
];

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return { isMobile: width < 640, isTablet: width < 1024 };
}

// Mobile card per log entry
function LogCard({ log }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Top: borrower + decision */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>
          {log.borrower}
        </span>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: log.decision === "Approved" ? "#007020" : "#B91C1C",
            background: log.decision === "Approved" ? "#DCFCE7" : "#FEE2E2",
            padding: "3px 10px",
            borderRadius: "6px",
          }}
        >
          {log.decision}
        </span>
      </div>

      {/* Details grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "3px",
            }}
          >
            Risk Score
          </div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>
            {log.riskScore}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "3px",
            }}
          >
            Timestamp
          </div>
          <div style={{ fontSize: "13px", color: "#374151" }}>
            {log.timestamp}
          </div>
        </div>
      </div>

      {/* Hash */}
      <div>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "3px",
          }}
        >
          Decision Hash
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#374151",
            fontFamily: "monospace",
            wordBreak: "break-all",
            background: "#F9FAFB",
            padding: "6px 8px",
            borderRadius: "6px",
            border: "1px solid #F3F4F6",
          }}
        >
          {log.hash}
        </div>
      </div>
    </div>
  );
}

export default function BlockchainLogs() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "'DM Sans', sans-serif",
        padding: isMobile ? "1.25rem 1rem" : "2rem 2.5rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0B298C",
          borderRadius: "10px 10px 0 0",
          padding: isMobile ? "16px 18px" : "20px 28px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: isMobile ? "18px" : "22px",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Blockchain Logs
        </h1>
      </div>

      {/* Subtitle */}
      <div
        style={{
          background: "#fff",
          padding: isMobile ? "14px 18px 10px" : "20px 28px 12px",
          borderLeft: "1px solid #E5E7EB",
          borderRight: "1px solid #E5E7EB",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", color: "#6B7280" }}>
          Recent Credit Decisions Recorded on Blockchain
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          background: isMobile ? "transparent" : "#fff",
          padding: isMobile ? "0" : "0 28px 28px",
          border: isMobile ? "none" : "1px solid #E5E7EB",
          borderTop: "none",
          borderRadius: "0 0 10px 10px",
          boxShadow: isMobile ? "none" : "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {isMobile ? (
          // — Mobile: cards —
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "10px",
            }}
          >
            {blockchainLogs.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "48px 0",
                  color: "#9CA3AF",
                  fontSize: "14px",
                }}
              >
                No blockchain logs found.
              </div>
            ) : (
              blockchainLogs.map((log) => <LogCard key={log.id} log={log} />)
            )}
          </div>
        ) : (
          // — Tablet / Desktop: table —
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: isTablet ? "640px" : "unset",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#0B298C" }}>
                  {[
                    "Borrower",
                    "Decision",
                    "Risk Score",
                    "Decision Hash",
                    "Timestamp",
                  ].map((col, i) => (
                    <th
                      key={col}
                      style={{
                        padding: "14px 16px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#fff",
                        textAlign: i === 4 ? "right" : "left",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {blockchainLogs.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      style={{
                        textAlign: "center",
                        padding: "48px",
                        color: "#9CA3AF",
                        fontSize: "14px",
                      }}
                    >
                      No blockchain logs found.
                    </td>
                  </tr>
                )}
                {blockchainLogs.map((log) => (
                  <tr
                    key={log.id}
                    style={{
                      backgroundColor: log.id % 2 === 0 ? "#F8F9FB" : "#fff",
                      transition: "background .12s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#EFF6FF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        log.id % 2 === 0 ? "#F8F9FB" : "#fff")
                    }
                  >
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #F3F4F6",
                      }}
                    >
                      {log.borrower}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        borderBottom: "1px solid #F3F4F6",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color:
                            log.decision === "Approved" ? "#007020" : "#B91C1C",
                          background:
                            log.decision === "Approved" ? "#DCFCE7" : "#FEE2E2",
                          padding: "3px 10px",
                          borderRadius: "6px",
                        }}
                      >
                        {log.decision}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#111827",
                        borderBottom: "1px solid #F3F4F6",
                      }}
                    >
                      {log.riskScore}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "13px",
                        color: "#374151",
                        fontFamily: "monospace",
                        borderBottom: "1px solid #F3F4F6",
                      }}
                    >
                      {log.hash}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#111827",
                        textAlign: "right",
                        borderBottom: "1px solid #F3F4F6",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {log.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
