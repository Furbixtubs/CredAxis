import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";
import "./Login.css";
import logo from "../../assets/CredAxis_logo.png";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  // Passed from VerifyOTP on successful verification
  const justVerified = location.state?.verified === true;
  const verifiedEmail = location.state?.email || "";

  const [email, setEmail] = useState(verifiedEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

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
    <div className="login-page">
      <div className="login-container">
        {/* Logo / Hero */}
        <div className="login-hero">
          <div className="login-brand">
            <img src={logo} alt="CredAxis Logo" className="logo-img" />
            <span className="brand-name">
              Cred<span className="brand-accent">Axis</span>
            </span>
          </div>
        </div>

        {/* ── Verified success banner ── */}
        {justVerified && (
          <div style={s.successBanner}>
            <span style={s.successIcon}>✓</span>
            <span>
              Account verified! Your email <strong>{verifiedEmail}</strong> is
              confirmed. Sign in to continue.
            </span>
          </div>
        )}

        {/* ── Error banner ── */}
        {error && <div style={s.error}>{error}</div>}

        {/* Form Card */}
        <div className="login-form-wrapper">
          <div className="login-card">
            <h2 className="login-title">Login</h2>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="form-group form-group--last">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="form-input"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <button type="submit" disabled={loading} className="btn-continue">
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <p className="signup-prompt">
              Don't have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const s = {
  successBanner: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    backgroundColor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    color: "#065F46",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "13px",
    lineHeight: 1.5,
    marginBottom: "16px",
  },
  successIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    backgroundColor: "#007020",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "11px",
    fontWeight: 700,
    flexShrink: 0,
    marginTop: "1px",
  },
  error: {
    background: "#fef2f2",
    color: "#dc2626",
    border: "1px solid #fecaca",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "14px",
    marginBottom: "1rem",
  },
};
