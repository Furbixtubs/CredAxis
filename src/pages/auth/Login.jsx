import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";

export default function Login() {
  const { login }  = useAuth();
  const navigate   = useNavigate();
  const location   = useLocation();
  const from       = location.state?.from?.pathname || "/dashboard";

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState(null);
  const [loading,  setLoading]  = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Demo: any email + password works — swap with real API call
    try {
      await new Promise((r) => setTimeout(r, 600));
      if (password.length < 4) throw new Error("Invalid email or password.");
      login({ name: email.split("@")[0], email, role: "analyst" });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={s.page}>
      <div style={s.card}>
        <Link to="/" style={s.brand}>CredAxis</Link>
        <h1 style={s.title}>Welcome back</h1>
        <p style={s.sub}>Sign in to your account</p>

        {error && <div style={s.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={s.form}>
          <label style={s.label}>
            Email address
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={s.input}
              placeholder="you@company.com"
            />
          </label>

          <label style={s.label}>
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={s.input}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" disabled={loading} style={s.btn}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p style={s.footer}>
          No account?{" "}
          <Link to="/signup" style={s.link}>Create one</Link>
        </p>
      </div>
    </div>
  );
}

const s = {
  page:  { display: "grid", placeItems: "center", minHeight: "100vh", background: "#f8f9fb", padding: "2rem" },
  card:  { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "2.5rem", width: "100%", maxWidth: "400px" },
  brand: { textDecoration: "none", fontWeight: "700", fontSize: "18px", color: "#111", display: "block", marginBottom: "1.75rem" },
  title: { fontSize: "22px", fontWeight: "700", marginBottom: "0.25rem" },
  sub:   { color: "#6b7280", fontSize: "14px", marginBottom: "1.5rem" },
  error: { background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: "6px", padding: "10px 14px", fontSize: "14px", marginBottom: "1rem" },
  form:  { display: "flex", flexDirection: "column", gap: "1rem" },
  label: { display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "500" },
  input: { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", outline: "none" },
  btn:   { background: "#111", color: "#fff", border: "none", borderRadius: "7px", padding: "11px", fontSize: "15px", fontWeight: "500", cursor: "pointer", marginTop: "0.25rem" },
  footer:{ textAlign: "center", marginTop: "1.5rem", fontSize: "14px", color: "#6b7280" },
  link:  { color: "#111", fontWeight: "600", textDecoration: "none" },
};
