import { useState } from "react";
import { useAuth } from "../../../features/auth/authContext";

export default function Profile() {
  const { user } = useAuth();

  const [name,  setName]  = useState(user?.name  ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [saved, setSaved] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2) || "?";

  return (
    <div style={{ maxWidth: "560px" }}>
      <h1 style={s.title}>My Profile</h1>

      {/* Avatar row */}
      <div style={s.avatarRow}>
        <div style={s.avatar}>{initials}</div>
        <div>
          <p style={s.avatarName}>{name || "Your name"}</p>
          <p style={s.avatarRole}>{user?.role ?? "Member"}</p>
          <button style={s.btnGhost}>Change photo</button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} style={s.form}>
        <label style={s.label}>
          Full name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={s.input} />
        </label>
        <label style={s.label}>
          Email address
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={s.input} />
        </label>
        <div style={s.formFooter}>
          <button type="submit" style={s.btnPrimary}>Save changes</button>
          {saved && <span style={s.saved}>✓ Saved</span>}
        </div>
      </form>

      {/* Danger zone */}
      <div style={s.danger}>
        <p style={s.dangerTitle}>Danger zone</p>
        <p style={s.dangerSub}>Once you delete your account, there is no going back.</p>
        <button style={s.btnDanger}>Delete account</button>
      </div>
    </div>
  );
}

const s = {
  title:      { fontSize: "22px", fontWeight: "700", marginBottom: "1.5rem" },
  avatarRow:  { display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem", padding: "1.5rem", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px" },
  avatar:     { width: "64px", height: "64px", borderRadius: "50%", background: "#111", color: "#fff", display: "grid", placeItems: "center", fontSize: "22px", fontWeight: "700", flexShrink: 0 },
  avatarName: { fontWeight: "600", fontSize: "16px", marginBottom: "2px" },
  avatarRole: { color: "#6b7280", fontSize: "13px", textTransform: "capitalize", marginBottom: "8px" },
  btnGhost:   { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "5px", padding: "5px 10px", fontSize: "12px", cursor: "pointer" },
  form:       { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" },
  label:      { display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "500" },
  input:      { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px" },
  formFooter: { display: "flex", alignItems: "center", gap: "1rem", paddingTop: "0.5rem" },
  btnPrimary: { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "9px 18px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  saved:      { color: "#059669", fontSize: "14px", fontWeight: "500" },
  danger:     { border: "1px solid #fca5a5", borderRadius: "10px", padding: "1.25rem 1.5rem", background: "#fff" },
  dangerTitle:{ fontWeight: "600", color: "#dc2626", fontSize: "15px", marginBottom: "0.25rem" },
  dangerSub:  { fontSize: "13px", color: "#6b7280", marginBottom: "1rem" },
  btnDanger:  { background: "#fff", color: "#dc2626", border: "1px solid #fca5a5", borderRadius: "6px", padding: "7px 14px", fontSize: "13px", fontWeight: "500", cursor: "pointer" },
};
