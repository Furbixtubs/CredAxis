import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router";

// ─── Mock OTP (replace with real API check later) ────────────────────────────
const MOCK_OTP = "123456";
const OTP_LENGTH = 6;
const RESEND_COUNTDOWN = 60; // seconds

function useBreakpoint() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return { isMobile: width < 640 };
}

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useBreakpoint();

  // Data passed from Signup
  const email = location.state?.email || "your email";
  const name  = location.state?.name  || "";

  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(RESEND_COUNTDOWN);
  const [resending, setResending] = useState(false);

  const inputRefs = useRef([]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  function handleChange(value, index) {
    // Accept only digits
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    setError("");

    // Auto-advance
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
        const next = [...digits];
        next[index - 1] = "";
        setDigits(next);
      }
    }
    if (e.key === "ArrowLeft" && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  }

  // Handle paste — fills all boxes from paste position
  function handlePaste(e, index) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...digits];
    for (let i = 0; i < pasted.length; i++) {
      if (index + i < OTP_LENGTH) next[index + i] = pasted[i];
    }
    setDigits(next);
    const focusIdx = Math.min(index + pasted.length, OTP_LENGTH - 1);
    inputRefs.current[focusIdx]?.focus();
  }

  async function handleVerify(e) {
    e.preventDefault();
    const entered = digits.join("");
    if (entered.length < OTP_LENGTH) {
      setError("Please enter all 6 digits.");
      return;
    }

    setLoading(true);
    // Mock: simulate API verification
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);

    if (entered !== MOCK_OTP) {
      setError("Invalid OTP. Please try again.");
      setDigits(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
      return;
    }

    // Success state before redirect
    setSuccess(true);
    await new Promise((r) => setTimeout(r, 900));

    navigate("/login", {
      state: { verified: true, email, name },
    });
  }

  async function handleResend() {
    setResending(true);
    setError("");
    setDigits(Array(OTP_LENGTH).fill(""));
    await new Promise((r) => setTimeout(r, 600));
    setResending(false);
    setCountdown(RESEND_COUNTDOWN);
    inputRefs.current[0]?.focus();
  }

  const maskEmail = (em) => {
    const [user, domain] = em.split("@");
    if (!domain) return em;
    return `${user.slice(0, 2)}${"*".repeat(Math.max(user.length - 2, 3))}@${domain}`;
  };

  return (
    <div style={s.page}>
      <div style={{ ...s.card, width: isMobile ? "100%" : "420px", padding: isMobile ? "28px 20px" : "40px 36px" }}>

        {/* Icon */}
        <div style={s.iconWrap}>
          {success ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#007020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="#0B298C" strokeWidth="2" />
              <path d="M2 8l10 7 10-7" stroke="#0B298C" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>

        <h2 style={s.title}>{success ? "Verified!" : "Check your email"}</h2>
        <p style={s.sub}>
          {success
            ? "Your account has been verified. Redirecting to login…"
            : <>We sent a 6-digit code to <strong>{maskEmail(email)}</strong>. Enter it below to verify your account.</>
          }
        </p>

        {/* Mock hint */}
        {!success && (
          <div style={s.hint}>
            <strong>Demo OTP:</strong> {MOCK_OTP}
          </div>
        )}

        {/* OTP Form */}
        {!success && (
          <form onSubmit={handleVerify}>
            <div style={s.otpRow}>
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={(e) => handlePaste(e, i)}
                  style={{
                    ...s.otpInput,
                    borderColor: error ? "#EF4444" : d ? "#0B298C" : "#E5E7EB",
                    backgroundColor: d ? "#EFF6FF" : "#fff",
                    width: isMobile ? "42px" : "48px",
                    height: isMobile ? "48px" : "56px",
                    fontSize: isMobile ? "18px" : "22px",
                  }}
                />
              ))}
            </div>

            {error && <p style={s.error}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              style={{ ...s.btn, opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Verifying…" : "Verify OTP"}
            </button>
          </form>
        )}

        {/* Resend */}
        {!success && (
          <div style={s.resendRow}>
            <span style={{ fontSize: "13px", color: "#6B7280" }}>Didn't receive the code?</span>
            {countdown > 0 ? (
              <span style={{ fontSize: "13px", color: "#9CA3AF" }}>Resend in {countdown}s</span>
            ) : (
              <button
                onClick={handleResend}
                disabled={resending}
                style={s.resendBtn}
              >
                {resending ? "Sending…" : "Resend OTP"}
              </button>
            )}
          </div>
        )}

        {/* Back link */}
        {!success && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/signup" style={s.backLink}>← Back to Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    padding: "24px 16px",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    margin: "0 0 20px",
  },
  hint: {
    backgroundColor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    color: "#065F46",
    borderRadius: "8px",
    padding: "8px 14px",
    fontSize: "13px",
    marginBottom: "20px",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
  },
  otpRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "8px",
  },
  otpInput: {
    border: "2px solid",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: 700,
    outline: "none",
    transition: "border-color .15s, background .15s",
    caretColor: "#0B298C",
  },
  error: {
    color: "#DC2626",
    fontSize: "13px",
    textAlign: "center",
    marginBottom: "12px",
    marginTop: "4px",
  },
  btn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0B298C",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "12px",
    transition: "opacity .15s",
  },
  resendRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "16px",
    gap: "8px",
    flexWrap: "wrap",
  },
  resendBtn: {
    background: "none",
    border: "none",
    color: "#0B298C",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
  },
  backLink: {
    fontSize: "13px",
    color: "#6B7280",
    textDecoration: "none",
  },
};
