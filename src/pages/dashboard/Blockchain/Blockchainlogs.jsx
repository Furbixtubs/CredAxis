const blockchainLogs = [
    { id: 1, borrower: "John Doe",    decision: "Approved", riskScore: 720, hash: "0x7fa93d8bc2134f...", timestamp: "16 Mar 2026, 14:22" },
    { id: 2, borrower: "Mary Okon",   decision: "Rejected", riskScore: 540, hash: "0x8bc21af97e25d...", timestamp: "16 Mar 2026, 10:15" },
    { id: 3, borrower: "Samuel Ali",  decision: "Approved", riskScore: 690, hash: "0x2ac41bfda9123...", timestamp: "15 Mar 2026, 09:30" },
    { id: 4, borrower: "Aisha Bello", decision: "Approved", riskScore: 750, hash: "0x9e73d0c5a1b6f...", timestamp: "14 Mar 2026, 16:45" },
    { id: 5, borrower: "Tom Eze",     decision: "Rejected", riskScore: 510, hash: "0x3aeb5fd41c92...", timestamp: "13 Mar 2026, 11:10" },
];

export default function BlockchainLogs() {
    return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F0F2F5", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", width: "100%", maxWidth: "860px", overflow: "hidden" }}>

        {/* Title bar */}
        <div style={{ backgroundColor: "#0B298C", padding: "20px 28px" }}>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#fff" }}>Blockchain Logs</h1>
        </div>

        {/* Subtitle */}
        <div style={{ padding: "20px 28px 12px" }}>
            <p style={{ margin: 0, fontSize: "14px", color: "#6B7280" }}>Recent Credit Decisions Recorded on Blockchain</p>
        </div>

        {/* Table */}
        <div style={{ padding: "0 28px 28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr style={{ backgroundColor: "#0B298C" }}>
                {["Borrower", "Decision", "Risk Score", "Decision Hash", "Timestamp"].map((col, i) => (
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
              {/* FIX: empty state */}
                {blockchainLogs.length === 0 && (
                <tr>
                    <td colSpan={5} style={{ textAlign: "center", padding: "48px", color: "#9CA3AF", fontSize: "14px" }}>
                    No blockchain logs found.
                    </td>
                </tr>
                )}

                {blockchainLogs.map((log) => (
                // FIX: use log.id for stable stripe colour instead of loop index
                <tr key={log.id} style={{ backgroundColor: log.id % 2 === 0 ? "#F8F9FB" : "#fff" }}>

                  {/* Borrower */}
                    <td style={{ padding: "16px", fontSize: "14px", color: "#111827", borderBottom: "1px solid #F3F4F6" }}>
                    {log.borrower}
                    </td>

                  {/* Decision */}
                    <td style={{ padding: "16px", borderBottom: "1px solid #F3F4F6" }}>
                    <span style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: log.decision === "Approved" ? "#007020" : "#B91C1C",
                    }}>
                        {log.decision}
                    </span>
                    </td>

                  {/* Risk Score */}
                    <td style={{ padding: "16px", fontSize: "14px", color: "#111827", borderBottom: "1px solid #F3F4F6" }}>
                    {log.riskScore}
                    </td>

                  {/* Decision Hash */}
                    <td style={{ padding: "16px", fontSize: "14px", color: "#374151", fontFamily: "monospace", borderBottom: "1px solid #F3F4F6" }}>
                    {log.hash}
                    </td>

                  {/* Timestamp */}
                    <td style={{ padding: "16px", fontSize: "14px", color: "#111827", textAlign: "right", borderBottom: "1px solid #F3F4F6", whiteSpace: "nowrap" }}>
                    {log.timestamp}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        </div>
    </div>
    );
}