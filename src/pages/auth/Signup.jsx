import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";

export default function Signup() {
  const { login }  = useAuth();
  const navigate   = useNavigate();

  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [loading,  setLoading]  = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    login({ name, email, role: "admin" });
    navigate("/dashboard", { replace: true });
  }

  return (
    <div style={s.page}>
      <div style={s.card}>
        <Link to="/" style={s.brand}>CredAxis</Link>
        <h1 style={s.title}>Create your account</h1>
        <p style={s.sub}>Start your free trial — no credit card required.</p>

        <form onSubmit={handleSubmit} style={s.form}>
          <label style={s.label}>
            Full name
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={s.input}
              placeholder="Jane Smith"
            />
          </label>
          <label style={s.label}>
            Work email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={s.input}
              placeholder="jane@company.com"
            />
          </label>
          <label style={s.label}>
            Password
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={s.input}
              placeholder="Minimum 8 characters"
            />
          </label>
          <button type="submit" disabled={loading} style={s.btn}>
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p style={s.footer}>
          Already have an account?{" "}
          <Link to="/login" style={s.link}>Sign in</Link>
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
  form:  { display: "flex", flexDirection: "column", gap: "1rem" },
  label: { display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "500" },
  input: { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", outline: "none" },
  btn:   { background: "#111", color: "#fff", border: "none", borderRadius: "7px", padding: "11px", fontSize: "15px", fontWeight: "500", cursor: "pointer", marginTop: "0.25rem" },
  footer:{ textAlign: "center", marginTop: "1.5rem", fontSize: "14px", color: "#6b7280" },
  link:  { color: "#111", fontWeight: "600", textDecoration: "none" },
};
