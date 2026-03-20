import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!terms) {
      setError("You must agree to the Terms of Service.");
      return;
    }

    setLoading(true);
    // Mock: simulate sending OTP to email
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);

    // Pass email & name to OTP page via router state
    navigate("/verify-otp", {
      state: { email, name: `${name} ${Lname}`.trim(), fromSignup: true },
    });
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create an account</h2>

        {error && <div style={s.errorBox}>{error}</div>}

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
              required
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
            <select
              id="gender"
              className="field-input field-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          {/* Terms Checkbox */}
          <div className="field-group field-group--full">
            <label className="checkbox-label" htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                className="checkbox-input"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              I agree to Terms of service
            </label>
          </div>

          {/* Submit */}
          <div className="field-group field-group--full">
            <button type="submit" disabled={loading} className="btn-create">
              {loading ? "Sending OTP…" : "Create account"}
            </button>
          </div>

          {/* Login link */}
          <div className="field-group field-group--full login-redirect">
            <span className="redirect-text">
              Already have an account?{" "}
              <Link to="/login" className="redirect-link">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

const s = {
  errorBox: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    marginBottom: "16px",
    border: "1px solid #FECACA",
  },
};
