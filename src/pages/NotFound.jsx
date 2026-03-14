import { Link } from "react-router";
import { useAuth } from "../features/auth/authContext";

export default function NotFound() {
  const { user } = useAuth();

  return (
    <div style={s.page}>
      <p style={s.code}>404</p>
      <h1 style={s.title}>Page not found</h1>
      <p style={s.sub}>The page you're looking for doesn't exist or has been moved.</p>
      <Link to={user ? "/dashboard" : "/"} style={s.btn}>
        {user ? "← Back to dashboard" : "← Back to home"}
      </Link>
    </div>
  );
}

const s = {
  page:  { display: "grid", placeItems: "center", minHeight: "100vh", textAlign: "center", padding: "2rem" },
  code:  { fontSize: "80px", fontWeight: "700", color: "#e5e7eb", lineHeight: 1, marginBottom: "0.5rem" },
  title: { fontSize: "24px", fontWeight: "700", marginBottom: "0.75rem" },
  sub:   { color: "#6b7280", fontSize: "16px", marginBottom: "2rem" },
  btn:   { textDecoration: "none", background: "#111", color: "#fff", padding: "10px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: "500" },
};
