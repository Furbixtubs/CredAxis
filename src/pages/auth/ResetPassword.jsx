import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { authService } from "@/services/authService";

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const token = location.state?.token || null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { newPassword: "", confirmPassword: "" },
  });

  const onSubmit = async (data) => {
    setServerError("");

    if (!token) {
      setServerError(
        "Invalid or missing reset token. Please request a new link.",
      );
      return;
    }

    try {
      const res = await authService.resetPassword(token, data.newPassword);

      const status = res.status || res.staus;

      if (status === "success") {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  // Success state
  if (success) {
    return (
      <main style={s.page}>
        <section style={s.card}>
          <div
            style={{
              ...s.iconWrap,
              backgroundColor: "#f0fdf4",
            }}
          >
            <CheckCircle2 size={32} color="#22c55e" />
          </div>
          <h1 style={s.title}>Password Reset!</h1>
          <p style={s.sub}>
            Your password has been successfully reset. Redirecting you to login…
          </p>
        </section>
      </main>
    );
  }

  // Form state
  return (
    <main style={s.page}>
      <section style={s.card}>
        <div style={s.iconWrap}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="11"
              width="18"
              height="11"
              rx="2"
              stroke="#0B298C"
              strokeWidth="2"
            />
            <path
              d="M7 11V7a5 5 0 0 1 10 0v4"
              stroke="#0B298C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 style={s.title}>Reset Password</h1>
        <p style={s.sub}>Enter your new password below.</p>

        {/* Server error */}
        {serverError && <div style={s.errorBanner}>{serverError}</div>}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ width: "100%" }}
        >
          {/* New password */}
          <div style={s.fieldGroup}>
            <label htmlFor="newPassword" style={s.label}>
              New Password
            </label>
            <div style={s.passwordWrapper}>
              <input
                id="newPassword"
                type={showNew ? "text" : "password"}
                placeholder="Min. 8 characters"
                autoComplete="new-password"
                style={{
                  ...s.input,
                  paddingRight: "42px",
                  border: errors.newPassword
                    ? "1.5px solid #ef4444"
                    : "1.5px solid #d1d5db",
                }}
                {...register("newPassword")}
              />
              <button
                type="button"
                onClick={() => setShowNew((p) => !p)}
                style={s.eyeBtn}
                tabIndex={-1}
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.newPassword && (
              <p style={s.fieldError}>{errors.newPassword.message}</p>
            )}
          </div>

          {/* Confirm password */}
          <div style={s.fieldGroup}>
            <label htmlFor="confirmPassword" style={s.label}>
              Confirm Password
            </label>
            <div style={s.passwordWrapper}>
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Repeat your password"
                autoComplete="new-password"
                style={{
                  ...s.input,
                  paddingRight: "42px",
                  border: errors.confirmPassword
                    ? "1.5px solid #ef4444"
                    : "1.5px solid #d1d5db",
                }}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((p) => !p)}
                style={s.eyeBtn}
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p style={s.fieldError}>{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...s.btn,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
              textDecoration: "none",
              display: "flex",
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2
                  size={16}
                  style={{ animation: "spin 0.7s linear infinite" }}
                />
                Resetting…
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <Link to="/login" style={s.backLink}>
          Back to Login
        </Link>
      </section>
    </main>
  );
}

const s = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
    padding: "24px 16px",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    padding: "40px 36px",
    width: "100%",
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },
  iconWrap: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#EFF6FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#111827",
    margin: "0 0 8px",
    textAlign: "center",
  },
  sub: {
    fontSize: "14px",
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 1.6,
    margin: "0 0 24px",
  },
  errorBanner: {
    width: "100%",
    backgroundColor: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#dc2626",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    marginBottom: "16px",
    boxSizing: "border-box",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "16px",
    width: "100%",
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#374151",
  },
  passwordWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderRadius: "8px",
    padding: "11px 14px",
    fontSize: "14px",
    color: "#374151",
    backgroundColor: "#fff",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
    transition: "border-color 0.2s ease",
  },
  eyeBtn: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  fieldError: {
    fontSize: "12px",
    color: "#ef4444",
    margin: 0,
  },
  btn: {
    width: "100%",
    backgroundColor: "#0B298C",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "15px",
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "20px",
    fontFamily: "'Poppins', sans-serif",
    transition: "opacity 0.15s ease",
  },
  backLink: {
    fontSize: "13px",
    color: "#6B7280",
    textDecoration: "none",
  },
};
