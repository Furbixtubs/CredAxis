import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "../../../features/auth/authContext";
import { authService } from "../../../services/authService";
import { loginSchema } from "./loginSchema";
import "./Login.css";
import logo from "../../../assets/CredAxis_logo.png";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  // Passed back from OTP page after successful verification
  const justVerified = location.state?.verified === true;
  const verifiedEmail = location.state?.email || "";

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: verifiedEmail,
      password: "",
    },
  });

const onSubmit = async (data) => {
  setServerError("");
  try {
    const res = await authService.login(data.email, data.password);

    if (res.status === "success") {
      if (res.message === "Logged in successfully without OTP") {
        // session still valid
        login(res.user);
        navigate(from, { replace: true });
      } else {
        // OTP required 
        navigate("/verify-otp", {
          state: {
            email: data.email,
            fromLogin: true,
            otp: res.user?.otp?.otp || null,  
          },
        });
      }
    }
  } catch (err) {
    setServerError(err.message || "Invalid email or password.");
  }
};

  return (
    <article className="login-page">
      <section className="login-container">
        {/* Left — Brand / Hero */}
        <div className="login-hero">
          <div className="login-brand">
            <img src={logo} alt="CredAxis Logo" className="logo-img" />
            <span className="brand-name">
              Cred<span className="brand-accent">Axis</span>
            </span>
          </div>
        </div>

        {/* Right — Form Card */}
        <section className="login-form-wrapper">
          <div className="login-card">
            <h2 className="login-title">Login</h2>

            {/* Verified success banner — inside card */}
            {justVerified && (
              <div className="login-banner login-banner--success">
                <span className="login-banner__icon">✓</span>
                <span>
                  Account verified! Your email <strong>{verifiedEmail}</strong>{" "}
                  is confirmed. Sign in to continue.
                </span>
              </div>
            )}

            {/* Server error banner — inside card */}
            {serverError && (
              <div className="login-banner login-banner--error">
                {serverError}
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              onChange={() => {
                if (serverError) setServerError("");
              }}
            >
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={`form-input ${errors.email ? "form-input--error" : ""}`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="form-field-error">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="form-group form-group--last">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="form-password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className={`form-input ${errors.password ? "form-input--error" : ""}`}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="form-password-toggle"
                    onClick={() => setShowPassword((p) => !p)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="form-field-error">{errors.password.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-continue"
              >
                {isSubmitting && <Loader2 size={16} className="btn-spinner" />}
                {isSubmitting ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <p className="signup-prompt">
              Don't have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </section>
    </article>
  );
}
