import { useAuth } from "../../features/auth/authContext";
import { Link } from "react-router";
import "./Navbars.css";

export default function Navbars() {
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <a href="#" className="navbar__link">
            Borrower Profiles
          </a>
          <a href="#" className="navbar__link">
            Reports
          </a>
          <a href="#" className="navbar__link navbar__link--dropdown">
            Tools
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 5L7 9L11 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="navbar__right">
          {user ? (
            <Link to="/dashboard" className="navbar__menu-btn">
              Dashboard →
            </Link>
          ) : (
            <>
              <Link to="/login" className="navbar__menu-btn">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
