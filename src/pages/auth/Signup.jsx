import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/authContext";
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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    login({ name, email, role: "admin" });
    navigate("/dashboard", { replace: true });
  }

  return (
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
      </div>
    </div>
  );
}
