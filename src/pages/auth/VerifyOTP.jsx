import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams, Link } from "react-router";
import { useAuth } from "../../features/auth/authContext";
import { authService } from "../../services/authService";

const OTP_LENGTH = 6;
const RESEND_COUNTDOWN = 300;

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return { isMobile: width < 640 };
}

export default function VerifyOTP() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { isMobile } = useBreakpoint();

  // Data passed from Login
  const email = location.state?.email || "your email";
  const fromLogin = location.state?.fromLogin === true;
  const otpFromLogin = location.state?.otp || null;

  // token exists in URL when coming from signup verification link
  const token = searchParams.get("token");
  const fromSignupLink = !!token;

  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(RESEND_COUNTDOWN);
  const [resending, setResending] = useState(false);
  const [displayOtp, setDisplayOtp] = useState(null);

  const inputRefs = useRef([]);

  // If coming from signup link, trigger OTP generation immediately
  // Otherwise focus first input for manual entry
  useEffect(() => {
    if (fromSignupLink && token) {
      triggerSignupOtp();
    } else {
      // autofill OTP from login
      if (otpFromLogin) {
        const otp = otpFromLogin.toString();
        setDisplayOtp(otp);
        setDigits(otp.split(""));
        inputRefs.current[OTP_LENGTH - 1]?.focus();
      } else {
        inputRefs.current[0]?.focus();
      }
    }
  }, []);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  async function triggerSignupOtp() {
    try {
      const res = await authService.triggerSignupOtp(token);
      if (res.data?.otp?.otp) {
        const otp = res.data.otp.otp.toString();
        setDisplayOtp(otp);
        setDigits(otp.split(""));
        inputRefs.current[OTP_LENGTH - 1]?.focus();
      }
    } catch (err) {
      setError(err.message || "Invalid or expired verification link.");
    }
  }

  function handleChange(value, index) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    setError("");
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
    if (e.key === "ArrowLeft" && index > 0)
      inputRefs.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1)
      inputRefs.current[index + 1]?.focus();
  }

  function handlePaste(e, index) {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
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
    setError("");

    try {
      if (fromSignupLink) {
        // PATCH /user/verify-user?token=... { otp_code }
        // response: { status, user: { user: { ... } } }
        const res = await authService.verifySignupOtp(token, entered);

        if (res.status === "Success") {
          setSuccess(true);
          await new Promise((r) => setTimeout(r, 900));
          navigate("/login", {
            state: {
              verified: true,
              email: res.user.user.email,
            },
          });
        }
      } else {
        // PATCH /user/authOtp { otp_code }
        // response: { status, data: { user, otp } }
        const res = await authService.verifyOtp(entered);

        if (res.status === "success") {
          setSuccess(true);
          await new Promise((r) => setTimeout(r, 900));
          login(res.data.user);
          navigate("/dashboard", { replace: true });
        }
      }
    } catch (err) {
      setError(err.message || "Invalid OTP. Please try again.");
      setDigits(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    setResending(true);
    setError("");
    setDigits(Array(OTP_LENGTH).fill(""));

    try {
      if (fromSignupLink) {
        // Re-trigger signup OTP using the same token
        await triggerSignupOtp();
      } else {
        // Re-trigger login OTP using email
        await authService.resendOtp(email);
      }
    } catch (err) {
      setError(err.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResending(false);
      setCountdown(RESEND_COUNTDOWN);
      inputRefs.current[0]?.focus();
    }
  }

  return (
    <div style={s.page}>
      <div
        style={{
          ...s.card,
          width: isMobile ? "100%" : "420px",
          padding: isMobile ? "28px 20px" : "40px 36px",
        }}
      >
        {/* Icon */}
        <div style={s.iconWrap}>
          {success ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17L4 12"
                stroke="#007020"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
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
          )}
        </div>

        {/* Display OTP on screen since email service is not active */}
        {displayOtp ? (
          <div style={s.hint}>
            <strong>Your OTP:</strong> {displayOtp}
          </div>
        ) : (
          <p style={s.sub}>Please wait while we generate your OTP code.</p>
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
            <span style={{ fontSize: "13px", color: "#6B7280" }}>
              Didn't receive the code?
            </span>
            {countdown > 0 ? (
              <span style={{ fontSize: "13px", color: "#9CA3AF" }}>
                Resend in {countdown}s
              </span>
            ) : (
              <button
                type="button"
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
            <Link to={fromLogin ? "/login" : "/signup"} style={s.backLink}>
              ← Back to {fromLogin ? "Login" : "Sign up"}
            </Link>
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
  hint: {
    backgroundColor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    color: "#065F46",
    borderRadius: "8px",
    padding: "8px 14px",
    fontSize: "14px",
    marginBottom: "16px",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
  },
  sub: {
    fontSize: "14px",
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 1.6,
    margin: "0 0 20px",
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
