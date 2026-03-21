import { useLocation, Link } from "react-router";

export default function CheckEmail() {
  const location = useLocation();
  const email = location.state?.email || "your email";
  const verificationLink = location.state?.link || null;

  console.log("location.state:", location.state);

  // Extract token from backend link and build frontend URL
  const frontendLink = verificationLink
    ? `/verify-otp?token=${new URL(verificationLink).searchParams.get("token")}`
    : null;

  return (
    <main style={s.page}>
      {/* Then use frontendLink instead of verificationLink */}
      {frontendLink && (
        <div style={s.linkBox}>
          <p style={s.linkLabel}>Verification link:</p>
          <Link to={frontendLink} style={s.linkAnchor}>
            Click here to verify your account
          </Link>
        </div>
      )}
    </main>
  );
}

const s = {
  linkBox: {
    backgroundColor: "#EFF6FF",
    border: "1px solid #BFDBFE",
    borderRadius: "8px",
    padding: "12px 16px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "16px",
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
