import { useState } from "react";
import { Link } from "react-router";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const riskPie = [
  { name: "High Risk", value: 15, color: "#f87171" },
  { name: "Medium", value: 25, color: "#fbbf24" },
  { name: "Low", value: 60, color: "#4ade80" },
];

const timeline = [
  { m: "Jun", s: 50000 },
  { m: "Jul", s: 80000 },
  { m: "Aug", s: 120000 },
  { m: "Sep", s: 160000 },
  { m: "Oct", s: 200000 },
  { m: "Nov", s: 260000 },
  { m: "Dec", s: 300000 },
  { m: "Jan", s: 340000 },
  { m: "Feb", s: 370000 },
  { m: "Mar", s: 390000 },
  { m: "Apr", s: 420000 },
  { m: "May", s: 460000 },
  { m: "Jun", s: 500000 },
  { m: "Jul", s: 540000 },
  { m: "Aug", s: 580000 },
  { m: "Sep", s: 620000 },
  { m: "Oct", s: 650000 },
  { m: "Nov", s: 670000 },
  { m: "Dec", s: 700000 },
];

const S = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

/* Base styles */
.abs-page {
  font-family: 'Roboto', sans-serif;
  background: transparent;
  min-height: 100vh;
  padding: 24px 16px;
}

/* Header card */
.abs-header-card {
  background: rgba(30, 42, 58, 0.8);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 28px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.abs-header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.abs-back {
  font-size: 14px;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  transition: color 0.2s;
}

.abs-back:hover {
  color: #fff;
}

.abs-dots {
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  font-size: 22px;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}

.abs-dots:hover {
  color: #fff;
}

.abs-header-body {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.abs-header-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 40px;
  flex: 1;
  min-width: 280px;
}

.abs-hrow {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.abs-hlbl {
  font-size: 13px;
  color: #9ca3af;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
}

.abs-hval {
  font-size: 16px;
  color: #f3f4f6;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.abs-photo {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.abs-badges {
  display: flex;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.abadge {
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: 'Poppins', sans-serif;
  flex-shrink: 0;
  transition: all 0.2s;
}

.abadge:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.abadge-ap {
  background: #22c55e;
  color: #fff;
}

.abadge-rj {
  background: #ef4444;
  color: #fff;
}

.abadge-mn {
  background: transparent;
  color: #9ca3af;
  border: 1px solid #4b5563;
}

/* Risk section */
.abs-risk-title {
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
}

.abs-risk-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  align-items: stretch;
}

@media (max-width: 768px) {
  .abs-risk-row {
    grid-template-columns: 1fr;
  }
}

.abs-dist-card {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 200px;
}

.abs-dist-title {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Roboto', sans-serif;
}

.abs-dist-body {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.abs-legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.abs-leg {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Roboto', sans-serif;
}

.abs-dot {
  width: 8px;
  height: 8px;
  border-radius: 1px;
  flex-shrink: 0;
}

.abs-metric {
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.abs-m-green { background: #166534; }
.abs-m-teal { background: #0f766e; }
.abs-m-blue { background: #1e40af; }
.abs-m-emerald { background: #065f46; }

.abs-m-lbl {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  font-family: 'Roboto', sans-serif;
}

.abs-m-val {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  font-family: 'Poppins', sans-serif;
}

.abs-m-sub {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 6px;
  font-family: 'Roboto', sans-serif;
}

.abs-m-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  margin-bottom: 6px;
}

/* Two column layout */
.abs-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  .abs-two {
    grid-template-columns: 1fr;
  }
}

/* Dark cards */
.abs-dark-card {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
}

.abs-dc-title {
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.abs-alt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .abs-alt-grid {
    grid-template-columns: 1fr;
  }
}

.abs-alt-lbl {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
}

.abs-alt-li {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  list-style: disc;
  margin-left: 16px;
  font-family: 'Roboto', sans-serif;
}

.abs-alt-score {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin-top: 8px;
  font-family: 'Poppins', sans-serif;
}

.abs-tl-hdr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.abs-tabs {
  display: flex;
  gap: 6px;
}

.abs-tab {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  background: none;
  font-family: 'Roboto', sans-serif;
  transition: all 0.2s;
}

.abs-tab:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.abs-tab.on {
  background: #22c55e;
  border-color: #22c55e;
  color: #fff;
}

.abs-drv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .abs-drv-grid {
    grid-template-columns: 1fr;
  }
}

.abs-drv-title {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
}

.abs-drv-li {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  list-style: disc;
  margin-left: 16px;
  font-family: 'Roboto', sans-serif;
}

.abs-drv-pos {
  font-size: 13px;
  color: #4ade80;
  line-height: 1.8;
  font-family: 'Roboto', sans-serif;
}

.abs-note-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  border-left: 3px solid #22c55e;
  padding-left: 16px;
}

/* Modals */
.abs-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
}

.abs-modal-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);
  font-size: 48px;
  line-height: 1;
}

.abs-modal-title {
  font-size: 24px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.abs-modal-btn {
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 14px 48px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s;
}

.abs-modal-btn:hover {
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .abs-page {
    padding: 16px 12px;
  }
  
  .abs-header-card {
    padding: 16px;
    margin-bottom: 20px;
  }
  
  .abs-header-body {
    gap: 16px;
  }
  
  .abs-header-cols {
    gap: 12px 24px;
  }
  
  .abs-hval {
    font-size: 14px;
  }
  
  .abs-photo {
    width: 64px;
    height: 64px;
  }
  
  .abs-m-val {
    font-size: 22px;
  }
}
`;

export default function ApprovedBorrowerScoring() {
  const [tab, setTab] = useState("All");
  const [showApproved, setShowApproved] = useState(false);
  const [showRejected, setShowRejected] = useState(false);

  return (
    <>
      <style>{S}</style>
      <div className="abs-page">
        {/* Header Card */}
        <div className="abs-header-card">
          <div className="abs-header-top">
            <Link to="/dashboard">
              <button type="button" className="abs-back">
                Go to Dashboard
              </button>
            </Link>
            {/* For the button "back", linked to the Addborrowers page */}
            {/* <button type="button" className="abs-back">
                ← Back
              </button> */}
            <button className="abs-dots">•••</button>
          </div>
          <div className="abs-header-body">
            <div className="abs-header-cols">
              <div className="abs-hrow">
                <span className="abs-hlbl">Customer Name:</span>
                <span className="abs-hval">John Okafor</span>
              </div>
              <div className="abs-hrow">
                <span className="abs-hlbl">Customer ID:</span>
                <span className="abs-hval">CRD-20485</span>
              </div>
              <div className="abs-hrow">
                <span className="abs-hlbl">Phone Number:</span>
                <span className="abs-hval">+2348036782727</span>
              </div>
              <div className="abs-hrow">
                <span className="abs-hlbl">Application Date:</span>
                <span className="abs-hval">10 March 2026</span>
              </div>
              <div className="abs-hrow" style={{ gridColumn: "1/-1" }}>
                <span className="abs-hlbl">Application Status:</span>
                <div className="abs-badges">
                  <button
                    className="abadge abadge-ap"
                    onClick={() => setShowApproved(true)}
                  >
                    Approve
                  </button>
                  <button
                    className="abadge abadge-rj"
                    onClick={() => setShowRejected(true)}
                  >
                    Reject
                  </button>
                  <button className="abadge abadge-mn">Manual Review</button>
                </div>
              </div>
            </div>
            <img
              src="https://i.pravatar.cc/100?img=52"
              className="abs-photo"
              alt="customer"
            />
          </div>
        </div>

        {/* Risk Summary */}
        <div className="abs-risk-title">Risk Summary</div>
        <div className="abs-risk-row">
          <div className="abs-dist-card">
            <div className="abs-dist-title">Risk Distribution</div>
            <div className="abs-dist-body">
              <div
                style={{
                  position: "relative",
                  width: 64,
                  height: 64,
                  flexShrink: 0,
                }}
              >
                <PieChart width={64} height={64}>
                  <Pie
                    data={riskPie}
                    cx={28}
                    cy={28}
                    innerRadius={18}
                    outerRadius={30}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {riskPie.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#4ade80",
                      fontFamily: "'Poppins',sans-serif",
                    }}
                  >
                    60%
                  </div>
                </div>
              </div>
              <div className="abs-legend">
                {riskPie.map((d, i) => (
                  <div className="abs-leg" key={i}>
                    <div className="abs-dot" style={{ background: d.color }} />
                    {d.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="abs-metric abs-m-green">
            <div className="abs-m-lbl">Risk Score</div>
            <div>
              <div className="abs-m-sub">Score: 721/1000</div>
              <div className="abs-m-sub">Risk Level: Low</div>
            </div>
            <div
              style={{ marginTop: 8, position: "relative", paddingBottom: 20 }}
            >
              <div
                style={{
                  height: 8,
                  background: "rgba(255,255,255,.25)",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: "72%",
                    height: "100%",
                    background: "#4ade80",
                    borderRadius: 10,
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "72%",
                  top: "4px",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "2px solid transparent",
                  borderRight: "2px solid transparent",
                  borderBottom: "12px solid #fff",
                  zIndex: 10,
                }}
              />
              <div
                style={{
                  marginTop: 6,
                  paddingLeft: "64%",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "'Roboto',sans-serif",
                }}
              >
                72
              </div>
            </div>
          </div>

          <div className="abs-metric abs-m-teal">
            <div className="abs-m-lbl">Probability of Default</div>
            <div>
              <div className="abs-m-val" style={{ fontSize: 28 }}>
                6%
              </div>
              <div className="abs-m-sub">Low Risk</div>
            </div>
          </div>

          <div className="abs-metric abs-m-blue">
            <div className="abs-m-lbl">Recommended Limit</div>
            <div>
              <div className="abs-m-bullet" />
              <div className="abs-m-val" style={{ fontSize: 17 }}>
                ₦150,000
              </div>
            </div>
          </div>

          <div className="abs-metric abs-m-emerald">
            <div className="abs-m-lbl">Decision Confidence</div>
            <div>
              <div className="abs-m-bullet" />
              <div className="abs-m-val" style={{ fontSize: 17 }}>
                High
              </div>
            </div>
          </div>
        </div>

        {/* Alt Score + Timeline */}
        <div className="abs-two">
          <div className="abs-dark-card">
            <div className="abs-dc-title">Alternative Data Score Breakdown</div>
            <div className="abs-alt-grid">
              <div>
                <div className="abs-alt-lbl">Mobile Behavior Score</div>
                <ul>
                  <li className="abs-alt-li">SIM Stability</li>
                  <li className="abs-alt-li">Phone Usage Consistency</li>
                  <li className="abs-alt-li">Device Changes</li>
                </ul>
                <div className="abs-alt-score" style={{ color: "#4ade80" }}>
                  Score: 80/100
                </div>
              </div>
              <div>
                <div className="abs-alt-lbl">Financial Behavior Score</div>
                <ul>
                  <li className="abs-alt-li">Mobile money transaction</li>
                  <li className="abs-alt-li">Wallet balance trend</li>
                  <li className="abs-alt-li">Spending pattern</li>
                </ul>
                <div className="abs-alt-score" style={{ color: "#4ade80" }}>
                  Score: 70/100
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <div className="abs-alt-lbl">Identity Verification Score</div>
                <ul>
                  <li className="abs-alt-li">BVN/NID verified</li>
                  <li className="abs-alt-li">Phone match</li>
                  <li className="abs-alt-li">Device match</li>
                </ul>
                <div className="abs-alt-score" style={{ color: "#4ade80" }}>
                  Score: 92/100
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <div className="abs-alt-lbl">Digital Footprint Score</div>
                <ul>
                  <li className="abs-alt-li">App usage pattern</li>
                  <li className="abs-alt-li">Location stability</li>
                  <li className="abs-alt-li">Online payments</li>
                </ul>
                <div className="abs-alt-score" style={{ color: "#4ade80" }}>
                  Score: 70/100
                </div>
              </div>
            </div>
          </div>

          <div className="abs-dark-card">
            <div className="abs-tl-hdr">
              <div className="abs-dc-title" style={{ margin: 0 }}>
                Credit Timeline
              </div>
              <div className="abs-tabs">
                {["1M", "3M", "6M", "All"].map((t) => (
                  <button
                    key={t}
                    className={`abs-tab${tab === t ? " on" : ""}`}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={155}>
              <AreaChart
                data={timeline}
                margin={{ top: 4, right: 4, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,.06)"
                />
                <XAxis
                  dataKey="m"
                  tick={{ fontSize: 8, fill: "rgba(255,255,255,.4)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v) => `${v / 1000}k`}
                  tick={{ fontSize: 8, fill: "rgba(255,255,255,.4)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(v) => [`₦${v.toLocaleString()}`, ""]}
                  contentStyle={{
                    background: "#1e2d4a",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: 8,
                    fontSize: 10,
                    color: "#fff",
                  }}
                  labelStyle={{ color: "rgba(255,255,255,.6)" }}
                  itemStyle={{ color: "#4ade80" }}
                />
                <Area
                  type="monotone"
                  dataKey="s"
                  stroke="#22c55e"
                  strokeWidth={2}
                  fill="url(#greenGrad)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#22c55e" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Drivers + Analyst Notes */}
        <div className="abs-two">
          <div className="abs-dark-card">
            <div className="abs-dc-title" style={{ textAlign: "left" }}>
              Risk Drivers
            </div>
            <div className="abs-drv-grid">
              <div>
                <div className="abs-drv-title">Positive Signals</div>
                <div className="abs-drv-pos">• Stable phone usage</div>
                <div className="abs-drv-pos">• Verified Identity</div>
                <div className="abs-drv-pos">
                  • Consistent transaction activity
                </div>
              </div>
              <div>
                <div className="abs-drv-title">Risk Flags</div>
                <ul>
                  <li className="abs-drv-li">Limited credit history</li>
                  <li className="abs-drv-li">Income variability</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="abs-dark-card">
            <div className="abs-dc-title" style={{ textAlign: "left" }}>
              Analyst Notes
            </div>
            <div className="abs-note-text">
              "Customer has strong mobile behavior signals but limited formal
              credit history."
            </div>
          </div>
        </div>

        {/* Approve Modal */}
        {showApproved && (
          <div className="abs-modal">
            <div
              className="abs-modal-icon"
              style={{
                background: "#22c55e",
                boxShadow: "0 8px 24px rgba(34,197,94,.4)",
              }}
            >
              <span>✓</span>
            </div>
            <div className="abs-modal-title" style={{ color: "#22c55e" }}>
              Loan Approved!
            </div>
            <button
              onClick={() => setShowApproved(false)}
              className="abs-modal-btn"
              style={{ background: "#166534" }}
            >
              Done
            </button>
          </div>
        )}

        {/* Reject Modal */}
        {showRejected && (
          <div className="abs-modal">
            <div
              className="abs-modal-icon"
              style={{
                background: "#ef4444",
                boxShadow: "0 8px 24px rgba(239,68,68,.4)",
              }}
            >
              <span>✕</span>
            </div>
            <div className="abs-modal-title" style={{ color: "#ef4444" }}>
              Loan Rejected!
            </div>
            <button
              onClick={() => setShowRejected(false)}
              className="abs-modal-btn"
              style={{ background: "#1e3a5f" }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
}
