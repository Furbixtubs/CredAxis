import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";
<<<<<<< HEAD
import "./Signup.css";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
=======

export default function Signup() {
  const { login }  = useAuth();
  const navigate   = useNavigate();

  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [loading,  setLoading]  = useState(false);
>>>>>>> e05516a (Repo codebase structure created)

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    login({ name, email, role: "admin" });
    navigate("/dashboard", { replace: true });
  }

  return (
<<<<<<< HEAD
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create an account</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="field-group">
            <label htmlFor="firstName" className="field-label">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              required
              className="field-input"
              placeholder="Enter first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="field-group">
            <label htmlFor="lastName" className="field-label">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              className="field-input"
              placeholder="Enter last name"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          {/* Work Email */}
          <div className="field-group">
            <label htmlFor="workEmail" className="field-label">
              Work email
            </label>
            <input
              id="workEmail"
              type="email"
              className="field-input"
              placeholder="Enter work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Gender */}
          <div className="field-group">
            <label htmlFor="gender" className="field-label">
              Gender
            </label>
            <select id="gender" className="field-input field-select">
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="field-group">
            <label htmlFor="phone" className="field-label">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              className="field-input"
              placeholder="Enter phone number"
            />
          </div>

          {/* Password */}
          <div className="field-group">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="field-input"
              placeholder="Enter password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Staff ID — was duplicate phone in original, fixed */}
          <div className="field-group">
            <label htmlFor="staffId" className="field-label">
              Staff ID
            </label>
            <input
              id="staffId"
              type="text"
              className="field-input"
              placeholder="Enter staff ID"
            />
          </div>

          {/* Confirm Password */}
          <div className="field-group">
            <label htmlFor="confirmPassword" className="field-label">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              className="field-input"
              placeholder="Confirm password"
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Terms Checkbox — full width */}
          <div className="field-group field-group--full">
            <label className="checkbox-label" htmlFor="terms">
              <input id="terms" type="checkbox" className="checkbox-input" />I
              agree to Terms of service
            </label>
          </div>

          {/* Submit — full width */}
          <div className="field-group field-group--full">
            <button type="submit" disabled={loading} className="btn-create">
              {loading ? "Creating account…" : "Create account"}
            </button>
          </div>

          {/* Login link — full width */}
          <div className="field-group field-group--full login-redirect">
            <span className="redirect-text">
              Already have an account?{" "}
              <Link to="/login" className="redirect-link">
                Sign in
              </Link>
            </span>
          </div>
        </form>
=======
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
>>>>>>> e05516a (Repo codebase structure created)
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

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
>>>>>>> e05516a (Repo codebase structure created)
