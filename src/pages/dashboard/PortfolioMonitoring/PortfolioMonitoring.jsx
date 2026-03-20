import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, ComposedChart,
} from "recharts";

// ── Data ──────────────────────────────────────────────────────────────────────
const repaymentData = [
  { month: "Jan",  repayments: 24000, defaultRate: 3.5 },
  { month: "Feb",  repayments: 18000, defaultRate: 3.2 },
  { month: "Mar",  repayments: 28000, defaultRate: 3.8 },
  { month: "Apr",  repayments: 22000, defaultRate: 3.6 },
  { month: "May",  repayments: 30000, defaultRate: 4.0 },
  { month: "Jun",  repayments: 26000, defaultRate: 3.9 },
  { month: "Jul",  repayments: 34000, defaultRate: 4.2 },
  { month: "Aug",  repayments: 28000, defaultRate: 4.1 },
  { month: "Sep",  repayments: 36000, defaultRate: 4.3 },
  { month: "Oct",  repayments: 30000, defaultRate: 4.0 },
  { month: "Nov",  repayments: 32000, defaultRate: 4.4 },
  { month: "Dec",  repayments: 28000, defaultRate: 4.2 },
  { month: "Cont", repayments: 50000, defaultRate: 4.5 },
];

const riskData = [
  { name: "Low Risk",    value: 35,  color: "#4ADE80" },
  { name: "Medium Risk", value: 45,  color: "#F8CE75" },
  { name: "High Risk",   value: 13,  color: "#F87171" },
  { name: "Very Low",    value: 7,   color: "#34D399" },
];

const borrowers = [
  { id: 1,  name: "John Agoh",         sub: "6YY (ber,bea)", avatar: "https://i.pravatar.cc/40?img=11", loanAmount: 150000, riskBand: "Low Risk",    repayment: null,    status: "On Track"  },
  { id: 2,  name: "Grace Uwemeddimo",  sub: "6YY (senbea)",  avatar: "https://i.pravatar.cc/40?img=48", loanAmount: 120000, riskBand: "Medium Risk", repayment: 100000,  status: "Late"      },
  { id: 3,  name: "Dele Smith",        sub: "6YI (oenbea)",  avatar: "https://i.pravatar.cc/40?img=13", loanAmount: 200000, riskBand: "Medium Risk", repayment: 100000,  status: "High Risk" },
  { id: 4,  name: "Bado Ibraala",      sub: "6YY (oaur,bea)",avatar: "https://i.pravatar.cc/40?img=17", loanAmount: 200000, riskBand: "High Risk",   repayment: 100000,  status: "Delayed"   },
];

const formatNaira = (v) => `₦${v.toLocaleString("en-NG")}`;

// ── Custom Tooltip ─────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#1E2A4A", border: "1px solid #2D3D6B", borderRadius: "8px", padding: "10px 14px" }}>
        <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#94A3B8" }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ margin: "2px 0", fontSize: "13px", fontWeight: 600, color: p.color || p.stroke }}>
            {p.dataKey === "repayments"
              ? `${formatNaira(p.value)} Repayments`
              : `${p.value}% Default Rate`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ── Pie label ─────────────────────────────────────────────────────────────────
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="700">
      {`${value}%`}
    </text>
  );
};

// ── Risk Badge ────────────────────────────────────────────────────────────────
const RiskBadge = ({ band }) => {
  const colors = {
    "Low Risk":    { bg: "#D1FAE5", text: "#065F46" },
    "Medium Risk": { bg: "#FEF3C7", text: "#92400E" },
    "High Risk":   { bg: "#FEE2E2", text: "#991B1B" },
  };
  const c = colors[band] || colors["Low Risk"];
  return (
    <span style={{ backgroundColor: c.bg, color: c.text, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
      {band}
    </span>
  );
};

// ── Status Badge ──────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const colors = {
    "On Track":  { bg: "#007020", text: "#fff" },
    "Late":      { bg: "#F8CE75", text: "#7A4F00" },
    "High Risk": { bg: "#A64C26", text: "#fff" },
    "Delayed":   { bg: "#166534", text: "#fff" },
  };
  const c = colors[status] || colors["On Track"];
  return (
    <span style={{ backgroundColor: c.bg, color: c.text, padding: "5px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap", display: "inline-block", minWidth: "80px", textAlign: "center" }}>
      {status}
    </span>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
export default function PortfolioMonitoring() {
  const [period, setPeriod] = useState("12 months");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0D1B2E", fontFamily: "'DM Sans', sans-serif", padding: "28px 32px", color: "#fff" }}>

      {/* Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <button onClick={() => window.history.back()} style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "18px", cursor: "pointer", padding: "4px" }}>←</button>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#fff" }}>Portfolio Monitoring</h1>
      </div>

      {/* ── Stat Cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>

        {/* Active Loans */}
        <div style={{ backgroundColor: "#132040", borderRadius: "10px", padding: "18px 20px" }}>
          <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "8px" }}>Active Loans</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "28px", fontWeight: 700 }}>680</span>
            <span style={{ backgroundColor: "#4ADE80", color: "#052e16", fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px" }}>680</span>
          </div>
        </div>

        {/* Total Outstanding */}
        <div style={{ backgroundColor: "#132040", borderRadius: "10px", padding: "18px 20px" }}>
          <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "8px" }}>Total Outstang</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "24px", fontWeight: 700 }}>₦41,250,000</span>
            <div style={{ backgroundColor: "#1E3A5F", borderRadius: "8px", padding: "6px 8px", fontSize: "18px" }}>🗂️</div>
          </div>
        </div>

        {/* Repayment Rate */}
        <div style={{ backgroundColor: "#132040", borderRadius: "10px", padding: "18px 20px" }}>
          <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "8px" }}>Repayment Rate</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "28px", fontWeight: 700 }}>92%</span>
            <span style={{ backgroundColor: "#4ADE80", color: "#052e16", fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px" }}>92%</span>
          </div>
        </div>

        {/* Default Rate */}
        <div style={{ backgroundColor: "#132040", borderRadius: "10px", padding: "18px 20px" }}>
          <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "8px" }}>Default Rate</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "28px", fontWeight: 700 }}>92%</span>
            <span style={{ backgroundColor: "#EF4444", color: "#fff", fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px" }}>5.2%</span>
          </div>
        </div>
      </div>

      {/* ── Charts Row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 0.5fr", gap: "20px", marginBottom: "24px" }}>

        {/* Loan Repayment Trends */}
        <div style={{ backgroundColor: "#132040", borderRadius: "12px", padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ margin: 0, fontSize: "15px", fontWeight: 600 }}>Loan Repayment Trends</h2>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              style={{ backgroundColor: "#1E3A5F", border: "1px solid #2D4A7A", color: "#94A3B8", fontSize: "12px", padding: "5px 10px", borderRadius: "6px", cursor: "pointer", outline: "none" }}
            >
              <option>12 months</option>
              <option>6 months</option>
              <option>3 months</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <ComposedChart data={repaymentData} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
              <XAxis dataKey="month" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false}
                tickFormatter={(v) => `${(v / 10000).toFixed(0)}k`} />
              <YAxis yAxisId="right" orientation="right" tick={false} axisLine={false} tickLine={false} domain={[0, 6]} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
              <Bar yAxisId="left" dataKey="repayments" fill="#4ADE80" radius={[3, 3, 0, 0]} barSize={20} />
              <Line yAxisId="right" type="monotone" dataKey="defaultRate" stroke="#F8CE75" strokeWidth={2.5} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>

          <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: 10, height: 10, borderRadius: "2px", backgroundColor: "#4ADE80" }} />
              <span style={{ fontSize: "11px", color: "#64748B" }}>Repayments</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: 14, height: 2, backgroundColor: "#F8CE75" }} />
              <span style={{ fontSize: "11px", color: "#64748B" }}>Default Rate</span>
            </div>
          </div>
        </div>

        {/* Risk Distribution */}
        <div style={{ backgroundColor: "#132040", borderRadius: "12px", padding: "20px" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 600 }}>Risk Distribution</h2>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                labelLine={false}
                label={renderLabel}
              >
                {riskData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Borrower Table ── */}
      <div style={{ backgroundColor: "#132040", borderRadius: "12px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#1A2D4A" }}>
              {["Activewear", "Loan Amount", "Risk Band", "Risk Band", "Status"].map((col, i) => (
                <th key={i} style={{
                  padding: "14px 20px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#64748B",
                  textAlign: i === 0 ? "left" : "center",
                  borderBottom: "1px solid #1E3A5F",
                }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {borrowers.map((b, i) => (
              <tr
                key={b.id}
                style={{ backgroundColor: i % 2 === 0 ? "#132040" : "#0F1E35", cursor: "pointer", transition: "background 0.15s" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1A2D4A"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#132040" : "#0F1E35"}
              >
                {/* Borrower */}
                <td style={{ padding: "14px 20px", borderBottom: "1px solid #1A2D4A" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <img
                      src={b.avatar}
                      alt={b.name}
                      style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                      onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(b.name)}&background=132040&color=fff&size=40`; }}
                    />
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{b.name}</div>
                      <div style={{ fontSize: "11px", color: "#64748B", marginTop: 2 }}>{b.sub}</div>
                    </div>
                  </div>
                </td>

                {/* Loan Amount */}
                <td style={{ padding: "14px 20px", borderBottom: "1px solid #1A2D4A", textAlign: "center" }}>
                  <span style={{ fontSize: "14px", color: "#E2E8F0" }}>{formatNaira(b.loanAmount)}</span>
                </td>

                {/* Risk Band */}
                <td style={{ padding: "14px 20px", borderBottom: "1px solid #1A2D4A", textAlign: "center" }}>
                  <RiskBadge band={b.riskBand} />
                </td>

                {/* Repayment */}
                <td style={{ padding: "14px 20px", borderBottom: "1px solid #1A2D4A", textAlign: "center" }}>
                  <span style={{ fontSize: "14px", color: "#E2E8F0" }}>
                    {b.repayment ? formatNaira(b.repayment) : "—"}
                  </span>
                </td>

                {/* Status */}
                <td style={{ padding: "14px 20px", borderBottom: "1px solid #1A2D4A", textAlign: "center" }}>
                  <StatusBadge status={b.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}