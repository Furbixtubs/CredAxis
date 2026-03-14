import { useState } from "react";

export default function General() {
  const [orgName,  setOrgName]  = useState("Acme Lending Co.");
  const [timezone, setTimezone] = useState("UTC");
  const [currency, setCurrency] = useState("USD");
  const [saved,    setSaved]    = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <form onSubmit={handleSave} style={s.form}>
      <h2 style={s.heading}>General</h2>

      <label style={s.label}>
        Organisation name
        <input type="text" value={orgName} onChange={(e) => setOrgName(e.target.value)} style={s.input} />
      </label>

      <label style={s.label}>
        Timezone
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)} style={s.input}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Africa/Lagos">Lagos (WAT)</option>
        </select>
      </label>

      <label style={s.label}>
        Default currency
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={s.input}>
          <option value="USD">USD — US Dollar</option>
          <option value="GBP">GBP — British Pound</option>
          <option value="NGN">NGN — Nigerian Naira</option>
          <option value="EUR">EUR — Euro</option>
        </select>
      </label>

      <div style={s.footer}>
        <button type="submit" style={s.btn}>Save changes</button>
        {saved && <span style={s.saved}>✓ Saved</span>}
      </div>
    </form>
  );
}

const s = {
  heading: { fontSize: "17px", fontWeight: "600", marginBottom: "1.5rem" },
  form:    { display: "flex", flexDirection: "column", gap: "1.25rem" },
  label:   { display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "500" },
  input:   { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", background: "#fff" },
  footer:  { display: "flex", alignItems: "center", gap: "1rem", paddingTop: "0.5rem" },
  btn:     { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "9px 18px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  saved:   { color: "#059669", fontSize: "14px", fontWeight: "500" },
};
