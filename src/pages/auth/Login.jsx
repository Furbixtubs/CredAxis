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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="login-page">
      <div className="login-container">
        {/* Logo/Hero */}
        <div className="login-hero">
          <div className="login-brand">
            <img src={logo} alt="CredAxis Logo" className="logo-img" />
            <span className="brand-name">
              Cred<span className="brand-accent">Axis</span>
            </span>
          </div>
        </div>

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

              {/* Continue Button */}
              <button type="submit" disabled={loading} className="btn-continue">
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="signup-prompt">
              Don't Have an account?{" "}
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
