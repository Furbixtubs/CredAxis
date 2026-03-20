// src/components/dashboard/Sidebar.jsx
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  Activity,
  FileText,
  ShieldCheck,
  UserPlus,
  TrendingUp,
  ClipboardList,
  Globe,
  Lock,
  Receipt,
  UsersRound,
  Sliders,
  Blocks,
  ChevronDown,
} from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";
import { useAuth } from "../../features/auth/authContext";
import logo from "../../assets/CredAxis_logo.png";
const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
    exact: true,
  },
  {
    label: "Borrowers",
    icon: Users,
    children: [
      { label: "Borrower's Profile", to: "/dashboard/borrowers" },
      { label: "Add borrower", to: "/dashboard/add-borrower" },
    ],
  },
  {
    label: "Credit Decision",
    icon: CreditCard,
    children: [
      // { label: "Credit Models", to: "/dashboard/credit-models" },
      {
        label: "Approved Loans",
        to: "/dashboard/approved-loans",
      },
      {
        label: "Rejected Loans",
        to: "/dashboard/rejected-loans",
      },
    ],
  },
  {
    label: "Portfolio monitoring",
    icon: BarChart3,
    to: "/dashboard/portfolio",
    // children: [
    //   { label: "Risk Analysis", to: "/dashboard/risk-analysis" },
    //   { label: "Reports", to: "/dashboard/reports" },
    // ],
  },
  {
    label: "Blockchain Logs",
    icon: Activity,
    to: "/dashboard/blockchain-logs",
    // children: [
    //   { label: "Transactions", to: "/dashboard/transactions" },
    //   { label: "Audit Trail", to: "/dashboard/transactions/audit" },
    // ],
  },
  {
    label: "Settings",
    icon: Settings,
    children: [
      { label: "Profile", to: "/dashboard/profile" },
      // { label: "Security", to: "/dashboard/settings/security" },
      // { label: "Billing", to: "/dashboard/settings/billing" },
      // { label: "Team", to: "/dashboard/settings/team" },
    ],
  },
];

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const itemRef = useRef(null);
  const dropdownRef = useRef(null);
  const hasChildren = item.children && item.children.length > 0;
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (
        itemRef.current &&
        !itemRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    // Also close on scroll so dropdown doesn't drift from its anchor
    const handleScroll = () => setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  const handleToggle = () => {
    if (!open && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.top,
        left: rect.right + 8, // 8px gap from sidebar edge
      });
    }
    setOpen((prev) => !prev);
  };

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        end={item.exact}
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          `relative flex items-center gap-4 px-6 py-4 text-[17px] font-semibold transition-colors duration-150 ${
            isActive ? "text-emerald-400" : "text-white hover:text-emerald-300"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <span
                className="absolute top-1/2 right-0 -translate-y-1/2 rounded-l-full bg-yellow-400"
                style={{ width: 5, height: 36 }}
              />
            )}
            <item.icon
              size={28}
              strokeWidth={1.6}
              className={`shrink-0 ${isActive ? "text-emerald-400" : "text-white"}`}
            />
            <span className="truncate">{item.label}</span>
          </>
        )}
      </NavLink>
    );
  }

  return (
    <div ref={itemRef}>
      <button
        onClick={handleToggle}
        className="flex w-full items-center gap-4 px-6 py-4 text-[17px] font-semibold text-white transition-colors duration-150 hover:text-emerald-300"
        style={{ background: "none", border: "none" }}
      >
        <item.icon
          size={28}
          strokeWidth={1.6}
          className="shrink-0 text-white"
        />
        <span className="flex-1 truncate text-left">{item.label}</span>
        {/* Chevron - rotate on mobile when open */}
        <span
          className={`ml-1 shrink-0 transition-transform duration-200 ${open && isMobile ? "rotate-180" : ""}`}
          style={{
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "7px solid #ffffff",
            display: "inline-block",
          }}
        />
      </button>

      {/* Mobile: Expandable section within sidebar */}
      {isMobile && open && (
        <div className="mr-4 ml-12 border-l-2 border-white/20 pl-4">
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-100 ${
                  isActive
                    ? "bg-white/10 text-emerald-300"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Desktop: Portal dropdown */}
      {!isMobile &&
        open &&
        createPortal(
          <div
            ref={dropdownRef}
            className="overflow-hidden bg-white shadow-2xl"
            style={{
              position: "fixed",
              zIndex: 9999,
              top: dropdownPos.top,
              left: dropdownPos.left,
              minWidth: 190,
            }}
          >
            {item.children.map((child) => (
              <NavLink
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  `flex items-center px-5 py-3 text-[13.5px] font-medium transition-colors duration-100 ${
                    isActive
                      ? "bg-[#c5cce8] text-[#1a2060]"
                      : "text-[#1a2060] hover:bg-[#eef0f8] hover:text-white"
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
}

function CredAxisLogo() {
  return (
    <img
      src={logo}
      alt="CredAxis logo"
      style={{ width: "56px", height: "56px" }}
    />
  );
}

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className="sticky top-0 flex h-screen shrink-0 flex-col"
      style={{
        width: isMobile ? "100%" : "17rem",
        backgroundColor: "#1535d0",
        maxWidth: isMobile ? "100vw" : "17rem",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 pt-6 pb-8">
        <CredAxisLogo />
        <span
          className="truncate text-xl font-bold tracking-tight text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          CredAxis
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </nav>

      {/* Logout */}
      <div className="pt-2 pb-6">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-4 px-6 py-4 text-[17px] font-semibold text-white transition-colors hover:text-red-400"
          style={{ background: "none", border: "none" }}
        >
          <LogOut size={28} strokeWidth={1.6} className="shrink-0" />
          <span className="truncate">Logout</span>
        </button>
      </div>
    </aside>
  );
}
