import { useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";

export default function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  const initials = user?.name
    ? user.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  return (
    <header style={s.bar}>
      <input
        type="search"
        placeholder="Search…"
        style={s.search}
        aria-label="Search"
      />

      <div style={s.right}>
        <button style={s.bell} aria-label="Notifications">🔔</button>

        <div style={s.userChip}>
          <div style={s.avatar}>{initials}</div>
          <span style={s.name}>{user?.name ?? "User"}</span>
        </div>

        <button onClick={handleLogout} style={s.signOut}>
          Sign out
        </button>
      </div>
    </header>
  );
}

const s = {
  bar:     { display: "flex", alignItems: "center", gap: "1rem", padding: "0 1.5rem", height: "56px", background: "#fff", borderBottom: "1px solid #e5e7eb", flexShrink: 0 },
  search:  { flex: 1, maxWidth: "340px", padding: "7px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", outline: "none", background: "#f9fafb" },
  right:   { marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.75rem" },
  bell:    { background: "none", border: "none", fontSize: "16px", cursor: "pointer", padding: "4px" },
  userChip:{ display: "flex", alignItems: "center", gap: "8px" },
  avatar:  { width: "30px", height: "30px", borderRadius: "50%", background: "#111", color: "#fff", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600" },
  name:    { fontSize: "14px", color: "#374151" },
  signOut: { background: "none", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "5px 12px", fontSize: "13px", color: "#6b7280", cursor: "pointer" },
};
