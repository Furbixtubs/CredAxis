import { useState } from "react";

const INITIAL = [
  { id: "plaid",      name: "Plaid",       category: "Banking",    desc: "Link bank accounts for income and transaction verification.",  connected: true  },
  { id: "experian",   name: "Experian",    category: "Credit",     desc: "Pull traditional credit bureau data for bureau-blend models.", connected: true  },
  { id: "stripe",     name: "Stripe",      category: "Payments",   desc: "Process loan disbursements and repayments via Stripe.",        connected: false },
  { id: "codat",      name: "Codat",       category: "Accounting", desc: "Connect borrower accounting software for SME underwriting.",   connected: false },
  { id: "twilio",     name: "Twilio",      category: "Comms",      desc: "Send SMS alerts for repayment reminders and notifications.",   connected: true  },
  { id: "salesforce", name: "Salesforce",  category: "CRM",        desc: "Sync borrower and lender data with your Salesforce instance.", connected: false },
];

export default function Integrations() {
  const [list, setList] = useState(INITIAL);

  function toggle(id) {
    setList((prev) => prev.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i)));
  }

  const connected = list.filter((i) => i.connected).length;

  return (
    <div>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Integrations</h1>
          <p style={s.sub}>{connected} of {list.length} connected</p>
        </div>
      </div>

      <div style={s.grid}>
        {list.map((item) => (
          <div key={item.id} style={s.card}>
            <div style={s.cardHeader}>
              <div style={s.logo}>{item.name[0]}</div>
              <div style={{ flex: 1 }}>
                <p style={s.name}>{item.name}</p>
                <span style={s.category}>{item.category}</span>
              </div>
              <button
                onClick={() => toggle(item.id)}
                style={{ ...s.toggle, background: item.connected ? "#111" : "#e5e7eb" }}
                aria-label={item.connected ? "Disconnect" : "Connect"}
              >
                <span style={{ ...s.thumb, transform: item.connected ? "translateX(20px)" : "translateX(2px)" }} />
              </button>
            </div>
            <p style={s.desc}>{item.desc}</p>
            <p style={{ ...s.status, color: item.connected ? "#059669" : "#9ca3af" }}>
              {item.connected ? "● Connected" : "○ Not connected"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const s = {
  header:     { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" },
  title:      { fontSize: "22px", fontWeight: "700", marginBottom: "0.25rem" },
  sub:        { color: "#6b7280", fontSize: "14px" },
  grid:       { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" },
  card:       { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" },
  cardHeader: { display: "flex", alignItems: "center", gap: "0.75rem" },
  logo:       { width: "40px", height: "40px", borderRadius: "8px", background: "#f3f4f6", display: "grid", placeItems: "center", fontWeight: "700", fontSize: "16px", flexShrink: 0 },
  name:       { fontWeight: "600", fontSize: "15px", marginBottom: "2px" },
  category:   { fontSize: "12px", color: "#6b7280", background: "#f3f4f6", padding: "1px 7px", borderRadius: "4px" },
  toggle:     { width: "44px", height: "24px", borderRadius: "999px", border: "none", cursor: "pointer", position: "relative", transition: "background .2s", flexShrink: 0 },
  thumb:      { position: "absolute", top: "2px", width: "20px", height: "20px", borderRadius: "50%", background: "#fff", transition: "transform .2s", display: "block" },
  desc:       { fontSize: "13px", color: "#6b7280", lineHeight: 1.5 },
  status:     { fontSize: "12px", fontWeight: "500" },
};
