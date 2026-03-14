import { useState } from "react";

const SESSIONS = [
  { device: "Chrome · macOS",   location: "Lagos, NG",  last: "Now",         current: true  },
  { device: "Safari · iPhone",  location: "Lagos, NG",  last: "2 hours ago", current: false },
  { device: "Chrome · Windows", location: "Abuja, NG",  last: "Yesterday",   current: false },
];

export default function Security() {
  const [mfaOn,  setMfaOn]  = useState(false);
  const [pwSaved,setPwSaved] = useState(false);

  function handlePwSave(e) {
    e.preventDefault();
    setPwSaved(true);
    setTimeout(() => setPwSaved(false), 2500);
  }

  return (
    <div style={s.stack}>
      <h2 style={s.heading}>Security</h2>

      {/* Password */}
      <section style={s.section}>
        <p style={s.sectionTitle}>Change password</p>
        <form onSubmit={handlePwSave} style={s.form}>
          <label style={s.label}>Current password    <input type="password" style={s.input} placeholder="••••••••" /></label>
          <label style={s.label}>New password         <input type="password" style={s.input} placeholder="Min 8 characters" /></label>
          <label style={s.label}>Confirm new password <input type="password" style={s.input} placeholder="••••••••" /></label>
          <div style={s.row}>
            <button type="submit" style={s.btn}>Update password</button>
            {pwSaved && <span style={s.saved}>✓ Password updated</span>}
          </div>
        </form>
      </section>

      {/* 2FA */}
      <section style={s.section}>
        <div style={s.mfaRow}>
          <div>
            <p style={s.sectionTitle}>Two-factor authentication</p>
            <p style={s.sectionSub}>Add an extra layer of security to your account.</p>
          </div>
          <button onClick={() => setMfaOn((v) => !v)} style={{ ...s.toggle, background: mfaOn ? "#111" : "#e5e7eb" }}>
            <span style={{ ...s.thumb, transform: mfaOn ? "translateX(20px)" : "translateX(2px)" }} />
          </button>
        </div>
        {mfaOn && <p style={s.mfaNote}>✓ Two-factor authentication is enabled.</p>}
      </section>

      {/* Sessions */}
      <section style={s.section}>
        <p style={s.sectionTitle}>Active sessions</p>
        {SESSIONS.map((sess) => (
          <div key={sess.device} style={s.sessRow}>
            <div>
              <p style={s.sessDevice}>
                {sess.device}
                {sess.current && <span style={s.currentBadge}>Current</span>}
              </p>
              <p style={s.sessMeta}>{sess.location} · {sess.last}</p>
            </div>
            {!sess.current && <button style={s.revokeBtn}>Revoke</button>}
          </div>
        ))}
      </section>
    </div>
  );
}

const s = {
  stack:       { display: "flex", flexDirection: "column", gap: "1.5rem" },
  heading:     { fontSize: "17px", fontWeight: "600", marginBottom: "0.5rem" },
  section:     { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.25rem 1.5rem" },
  sectionTitle:{ fontWeight: "600", fontSize: "15px", marginBottom: "0.25rem" },
  sectionSub:  { fontSize: "13px", color: "#6b7280", marginBottom: "1rem" },
  form:        { display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.75rem" },
  label:       { display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "500" },
  input:       { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px" },
  row:         { display: "flex", alignItems: "center", gap: "1rem" },
  btn:         { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "9px 18px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  saved:       { color: "#059669", fontSize: "14px", fontWeight: "500" },
  mfaRow:      { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  toggle:      { width: "44px", height: "24px", borderRadius: "999px", border: "none", cursor: "pointer", position: "relative", transition: "background .2s", flexShrink: 0, marginTop: "2px" },
  thumb:       { position: "absolute", top: "2px", width: "20px", height: "20px", borderRadius: "50%", background: "#fff", transition: "transform .2s", display: "block" },
  mfaNote:     { marginTop: "0.75rem", fontSize: "13px", color: "#059669", background: "#ecfdf5", padding: "8px 12px", borderRadius: "6px" },
  sessRow:     { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f3f4f6" },
  sessDevice:  { fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2px" },
  sessMeta:    { fontSize: "12px", color: "#9ca3af" },
  currentBadge:{ background: "#ecfdf5", color: "#059669", fontSize: "11px", padding: "1px 7px", borderRadius: "4px" },
  revokeBtn:   { background: "none", border: "1px solid #fca5a5", color: "#dc2626", borderRadius: "5px", padding: "4px 10px", fontSize: "12px", cursor: "pointer" },
};
