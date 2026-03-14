import { Link } from "react-router";
import { useAuth } from "../../../features/auth/authContext";

const KPI = [
  { label: "Active Borrowers",   value: "2,481",  delta: "+12%",  up: true  },
  { label: "Active Lenders",     value: "347",    delta: "+5%",   up: true  },
  { label: "Loan Volume (MTD)",  value: "$4.2M",  delta: "-3%",   up: false },
  { label: "Avg Credit Score",   value: "681",    delta: "+8 pts",up: true  },
];

const QUICK_ACTIONS = [
  { label: "Add borrower",    to: "/dashboard/borrowers" },
  { label: "Run risk model",  to: "/dashboard/risk-analysis" },
  { label: "View reports",    to: "/dashboard/reports" },
  { label: "Integrations",    to: "/dashboard/integrations" },
];

const RECENT_ACTIVITY = [
  { text: "Loan disbursed to Alice Johnson",    time: "2 min ago",  type: "success" },
  { text: "New borrower Carlos Mendes added",   time: "18 min ago", type: "info"    },
  { text: "Credit model SME v2 ran 45 scores",  time: "1 hr ago",   type: "info"    },
  { text: "Repayment failed — James Wright",    time: "3 hrs ago",  type: "danger"  },
  { text: "Lender Apex Capital connected",      time: "Yesterday",  type: "success" },
];

const typeColor = { success: "#059669", info: "#2563eb", danger: "#dc2626" };

export default function Overview() {
  const { user } = useAuth();
  const hour     = new Date().getHours();
  const greeting = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";

  return (
    <div>
      <h1 style={s.title}>Good {greeting}, {user?.name ?? "there"} 👋</h1>
      <p style={s.sub}>Here's what's happening in CredAxis today.</p>

      {/* KPI row */}
      <div style={s.kpiGrid}>
        {KPI.map((k) => (
          <div key={k.label} style={s.kpiCard}>
            <p style={s.kpiLabel}>{k.label}</p>
            <p style={s.kpiValue}>{k.value}</p>
            <p style={{ ...s.kpiDelta, color: k.up ? "#059669" : "#dc2626" }}>{k.delta}</p>
          </div>
        ))}
      </div>

      <div style={s.lower}>
        {/* Quick actions */}
        <div style={s.section}>
          <h2 style={s.sectionTitle}>Quick actions</h2>
          <div style={s.quickGrid}>
            {QUICK_ACTIONS.map(({ label, to }) => (
              <Link key={to} to={to} style={s.quickCard}>{label} →</Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div style={s.section}>
          <h2 style={s.sectionTitle}>Recent activity</h2>
          <div style={s.activityList}>
            {RECENT_ACTIVITY.map((a, i) => (
              <div key={i} style={s.activityRow}>
                <span style={{ ...s.activityDot, background: typeColor[a.type] }} />
                <p style={s.activityText}>{a.text}</p>
                <p style={s.activityTime}>{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  title:        { fontSize: "22px", fontWeight: "700", marginBottom: "0.25rem" },
  sub:          { color: "#6b7280", fontSize: "14px", marginBottom: "2rem" },
  kpiGrid:      { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" },
  kpiCard:      { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem" },
  kpiLabel:     { fontSize: "13px", color: "#6b7280", marginBottom: "0.5rem" },
  kpiValue:     { fontSize: "28px", fontWeight: "700", marginBottom: "0.25rem" },
  kpiDelta:     { fontSize: "13px", fontWeight: "500" },
  lower:        { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" },
  section:      { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem" },
  sectionTitle: { fontSize: "15px", fontWeight: "600", marginBottom: "1rem" },
  quickGrid:    { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" },
  quickCard:    { display: "block", padding: "0.875rem 1rem", background: "#f8f9fb", border: "1px solid #e5e7eb", borderRadius: "8px", textDecoration: "none", color: "#111", fontSize: "14px", fontWeight: "500" },
  activityList: { display: "flex", flexDirection: "column", gap: "0" },
  activityRow:  { display: "flex", alignItems: "center", gap: "0.75rem", padding: "10px 0", borderBottom: "1px solid #f3f4f6" },
  activityDot:  { width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0 },
  activityText: { flex: 1, fontSize: "13px", color: "#374151" },
  activityTime: { fontSize: "12px", color: "#9ca3af", flexShrink: 0 },
};
