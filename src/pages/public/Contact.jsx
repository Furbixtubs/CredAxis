import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={s.page}>
      <div style={s.left}>
        <h1 style={s.heading}>Get in touch</h1>
        <p style={s.sub}>
          Have a question about CredAxis, need a demo, or want to discuss
          enterprise pricing? We typically respond within one business day.
        </p>

        <div style={s.infoList}>
          {[
            { label: "Email",   value: "hello@credaxis.io" },
            { label: "Phone",   value: "+234 800 CREDAXIS" },
            { label: "Office",  value: "14 Wole Ariyo St, Lekki, Lagos" },
          ].map(({ label, value }) => (
            <div key={label} style={s.infoRow}>
              <p style={s.infoLabel}>{label}</p>
              <p style={s.infoValue}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={s.right}>
        {sent ? (
          <div style={s.success}>
            <p style={s.successIcon}>✓</p>
            <h2 style={s.successTitle}>Message sent!</h2>
            <p style={s.successSub}>We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={s.form}>
            <div style={s.row}>
              <label style={s.label}>First name<input type="text"  required style={s.input} /></label>
              <label style={s.label}>Last name <input type="text"  required style={s.input} /></label>
            </div>
            <label style={s.label}>Work email  <input type="email" required style={s.input} placeholder="you@company.com" /></label>
            <label style={s.label}>Company     <input type="text"  required style={s.input} /></label>
            <label style={s.label}>
              Message
              <textarea required rows={5} style={{ ...s.input, resize: "vertical" }} />
            </label>
            <button type="submit" style={s.btn}>Send message</button>
          </form>
        )}
      </div>
    </div>
  );
}

const s = {
  page:         { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", alignItems: "flex-start" },
  left:         {},
  heading:      { fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "700", marginBottom: "1rem" },
  sub:          { color: "#6b7280", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" },
  infoList:     { display: "flex", flexDirection: "column", gap: "1rem" },
  infoRow:      { display: "flex", flexDirection: "column", gap: "2px" },
  infoLabel:    { fontSize: "11px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" },
  infoValue:    { fontSize: "15px", color: "#111" },
  right:        { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "2rem" },
  form:         { display: "flex", flexDirection: "column", gap: "1rem" },
  row:          { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  label:        { display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "500" },
  input:        { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", outline: "none", width: "100%" },
  btn:          { background: "#111", color: "#fff", border: "none", borderRadius: "7px", padding: "11px", fontSize: "15px", fontWeight: "500", cursor: "pointer", marginTop: "0.25rem" },
  success:      { textAlign: "center", padding: "2rem 0" },
  successIcon:  { fontSize: "40px", color: "#059669", marginBottom: "0.75rem" },
  successTitle: { fontSize: "20px", fontWeight: "700", marginBottom: "0.5rem" },
  successSub:   { color: "#6b7280", fontSize: "15px" },
};
