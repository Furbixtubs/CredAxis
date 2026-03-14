import { useState } from "react";

const INITIAL = [
  { id: 1, name: "Amara Osei",   email: "amara@acme.com",  role: "Admin",   joined: "Jan 2023" },
  { id: 2, name: "Ben Adeyemi",  email: "ben@acme.com",    role: "Analyst", joined: "Mar 2023" },
  { id: 3, name: "Chioma Eze",   email: "chioma@acme.com", role: "Viewer",  joined: "Jul 2023" },
  { id: 4, name: "David Mensah", email: "david@acme.com",  role: "Analyst", joined: "Nov 2023" },
];

const ROLES = ["Admin", "Analyst", "Viewer"];

export default function Team() {
  const [members, setMembers] = useState(INITIAL);
  const [invite,  setInvite]  = useState("");

  function changeRole(id, role) {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
  }

  function remove(id) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  function handleInvite(e) {
    e.preventDefault();
    alert(`Invite sent to ${invite}`);
    setInvite("");
  }

  return (
    <div style={s.stack}>
      <h2 style={s.heading}>Team</h2>

      <section style={s.section}>
        <p style={s.sectionTitle}>Invite a team member</p>
        <form onSubmit={handleInvite} style={s.inviteForm}>
          <input type="email" placeholder="colleague@company.com" value={invite} onChange={(e) => setInvite(e.target.value)} required style={s.input} />
          <select style={s.select} defaultValue="Analyst">{ROLES.map((r) => <option key={r}>{r}</option>)}</select>
          <button type="submit" style={s.btnPrimary}>Send invite</button>
        </form>
      </section>

      <section style={s.section}>
        <p style={s.sectionTitle}>{members.length} members</p>
        {members.map((m) => (
          <div key={m.id} style={s.memberRow}>
            <div style={s.avatar}>{m.name.split(" ").map(w => w[0]).join("")}</div>
            <div style={s.info}>
              <p style={s.memberName}>{m.name}</p>
              <p style={s.memberEmail}>{m.email}</p>
            </div>
            <select value={m.role} onChange={(e) => changeRole(m.id, e.target.value)} style={s.roleSelect}>
              {ROLES.map((r) => <option key={r}>{r}</option>)}
            </select>
            <p style={s.joined}>Since {m.joined}</p>
            <button onClick={() => remove(m.id)} style={s.removeBtn}>Remove</button>
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
  sectionTitle:{ fontWeight: "600", fontSize: "15px", marginBottom: "1rem" },
  inviteForm:  { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
  input:       { flex: 1, minWidth: "200px", padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px" },
  select:      { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", background: "#fff" },
  btnPrimary:  { background: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "9px 18px", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
  memberRow:   { display: "flex", alignItems: "center", gap: "0.75rem", padding: "12px 0", borderBottom: "1px solid #f3f4f6", flexWrap: "wrap" },
  avatar:      { width: "36px", height: "36px", borderRadius: "50%", background: "#111", color: "#fff", display: "grid", placeItems: "center", fontSize: "13px", fontWeight: "600", flexShrink: 0 },
  info:        { flex: 1, minWidth: "150px" },
  memberName:  { fontSize: "14px", fontWeight: "500", marginBottom: "2px" },
  memberEmail: { fontSize: "12px", color: "#9ca3af" },
  roleSelect:  { padding: "5px 10px", border: "1px solid #e5e7eb", borderRadius: "5px", fontSize: "13px", background: "#fff", cursor: "pointer" },
  joined:      { fontSize: "12px", color: "#9ca3af" },
  removeBtn:   { background: "none", border: "none", color: "#9ca3af", fontSize: "13px", cursor: "pointer" },
};
