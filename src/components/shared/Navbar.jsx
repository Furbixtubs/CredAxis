import { Link, NavLink } from "react-router";
import { useAuth } from "../../features/auth/authContext";

const NAV_LINKS = [
  { label: "Features",      to: "/features" },
  { label: "Documentation", to: "/docs" },
  { label: "About",         to: "/about" },
  { label: "Contact",       to: "/contact" },
];

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header style={s.bar}>
      <Link to="/" style={s.brand}>CredAxis</Link>

      <nav style={s.links}>
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              ...s.link,
              color:      isActive ? "#111" : "#6b7280",
              fontWeight: isActive ? "600"  : "400",
            })}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div style={s.cta}>
        {user ? (
          <Link to="/dashboard" style={s.btnPrimary}>Dashboard →</Link>
        ) : (
          <>
            <Link to="/login"  style={s.btnGhost}>Sign in</Link>
            <Link to="/signup" style={s.btnPrimary}>Get started</Link>
          </>
        )}
      </div>
    </header>
  );
}

const s = {
  bar:       { display: "flex", alignItems: "center", padding: "0 2rem", height: "60px", background: "#fff", borderBottom: "1px solid #e5e7eb", gap: "2rem", position: "sticky", top: 0, zIndex: 100 },
  brand:     { textDecoration: "none", fontWeight: "700", fontSize: "18px", color: "#111", marginRight: "auto" },
  links:     { display: "flex", gap: "1.5rem" },
  link:      { textDecoration: "none", fontSize: "14px", transition: "color .15s" },
  cta:       { display: "flex", gap: "0.75rem", marginLeft: "auto" },
  btnPrimary:{ textDecoration: "none", background: "#111", color: "#fff", padding: "8px 16px", borderRadius: "6px", fontSize: "14px", fontWeight: "500" },
  btnGhost:  { textDecoration: "none", color: "#111", padding: "8px 16px", borderRadius: "6px", fontSize: "14px", border: "1px solid #e5e7eb" },
};
