import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowLeft } from "lucide-react";
import { authService } from "@/services/authService";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export default function ForgotPassword() {
  const [searchParams] = useSearchParams();
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    setServerError("");

    try {
      const res = await authService.forgotPassword(data.email);

      const status = res.staus || res.status;

      if (status === "Success") {
        const linkUrl = new URL(res.data.link);
        const token = linkUrl.searchParams.get("token");
        navigate(`/reset-password?token=${token}`, {
          state: {
            token,
          },
        });
      }
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main style={s.page}>
      <section style={s.card}>
        <div style={s.iconWrap}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="3"
              stroke="#0B298C"
              strokeWidth="2"
            />
            <path
              d="M2 8l10 7 10-7"
              stroke="#0B298C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 style={s.title}>Forgot Password?</h1>
        <p style={s.sub}>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        {/* Server error */}
        {serverError && <div style={s.errorBanner}>{serverError}</div>}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ width: "100%" }}
        >
          <div style={s.fieldGroup}>
            <label htmlFor="email" style={s.label}>
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              style={{
                ...s.input,
                border: errors.email
                  ? "1.5px solid #ef4444"
                  : "1.5px solid #d1d5db",
              }}
              {...register("email")}
            />
            {errors.email && <p style={s.fieldError}>{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...s.btn,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} style={s.spinner} />
                Sending…
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <Link to="/login" style={s.backLink}>
          <ArrowLeft size={14} />
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "20px",
    fontFamily: "'Poppins', sans-serif",
    transition: "opacity 0.15s ease",
  },
  spinner: {
    animation: "spin 0.7s linear infinite",
  },
  backLink: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#6B7280",
    textDecoration: "none",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#6B7280",
    textDecoration: "none",
    marginTop: "8px",
  },
  linkBox: {
    backgroundColor: "#EFF6FF",
    border: "1px solid #BFDBFE",
    borderRadius: "8px",
    padding: "12px 16px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "20px",
  },
  linkLabel: {
    fontSize: "12px",
    color: "#6B7280",
    margin: "0 0 6px",
  },
  linkAnchor: {
    color: "#0B298C",
    fontWeight: 600,
    fontSize: "14px",
    wordBreak: "break-all",
  },
};
