import { useLocation, Link } from "react-router";

export default function CheckEmail() {
  const location = useLocation();
  const email = location.state?.email || "your email";

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
        <h2 style={s.title}>Check your email</h2>
        <p style={s.sub}>
          We sent a verification link to <strong>{email}</strong>. Click the
          link in your email to activate your account.
        </p>
        <p style={s.note}>
          Didn't receive it? Check your spam folder or{" "}
          <Link to="/signup" style={s.link}>
            try signing up again
          </Link>
          .
        </p>
        <Link to="/login" style={s.btn}>
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
    textAlign: "center",
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
    margin: "0 0 10px",
  },
  sub: {
    fontSize: "14px",
    color: "#6B7280",
    lineHeight: 1.6,
    margin: "0 0 12px",
  },
  note: {
    fontSize: "13px",
    color: "#9CA3AF",
    margin: "0 0 24px",
  },
  link: {
    color: "#0B298C",
    fontWeight: 600,
  },
  btn: {
    display: "inline-block",
    backgroundColor: "#0B298C",
    color: "#fff",
    padding: "12px 32px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    textDecoration: "none",
  },
};
