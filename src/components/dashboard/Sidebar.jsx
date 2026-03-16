// src/components/dashboard/Sidebar.jsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Link2,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Activity,
} from "lucide-react";
import { useAuth } from "../../features/auth/authContext";

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
      { label: "All Borrowers", to: "/dashboard/borrowers" },
      { label: "Borrower Details", to: "/dashboard/borrowers/details" },
    ],
  },
  {
    label: "Credit Decision",
    icon: CreditCard,
    children: [{ label: "Credit Models", to: "/dashboard/credit-models" }],
  },
  {
    label: "Portfolio Monitoring",
    icon: BarChart3,
    children: [
      { label: "Risk Analysis", to: "/dashboard/risk-analysis" },
      { label: "Reports", to: "/dashboard/reports" },
    ],
  },
  {
    label: "Blockchain Logs",
    icon: Activity,
    children: [{ label: "Transactions", to: "/dashboard/transactions" }],
  },
  {
    label: "Integrations",
    icon: Link2,
    to: "/dashboard/integrations",
  },
  {
    label: "Settings",
    icon: Settings,
    children: [
      { label: "General", to: "/dashboard/settings" },
      { label: "Security", to: "/dashboard/settings/security" },
      { label: "Billing", to: "/dashboard/settings/billing" },
      { label: "Team", to: "/dashboard/settings/team" },
    ],
  },
];

function NavItem({ item }) {
  // const navigate = useNavigation();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        end={item.exact}
        className={({ isActive }) =>
          `sidebar-nav-item ${isActive ? "active" : ""}`
        }
      >
        <item.icon size={16} className="shrink-0" />
        <span className="flex-1">{item.label}</span>
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="sidebar-nav-item w-full"
      >
        <item.icon size={16} className="shrink-0" />
        <span className="flex-1 text-left">{item.label}</span>
        {open ? (
          <ChevronDown size={13} className="shrink-0 opacity-50" />
        ) : (
          <ChevronRight size={13} className="shrink-0 opacity-50" />
        )}
      </button>

      {open && (
        <div className="border-dark-border mt-0.5 ml-7 flex flex-col gap-0.5 border-l pl-3">
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              className={({ isActive }) =>
                `transition-fast rounded-md px-2 py-1.5 text-xs ${
                  isActive
                    ? "text-brand-teal font-medium"
                    : "text-secondary-400 hover:text-neutral-50"
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="bg-primary-08 border-dark-border text-white sticky top-0 flex h-screen w-full min-w-[16rem] shrink-0 flex-col gap-12 border-r">
      <h1 className="flex items-center justify-center p-4">CredAxis</h1>
    </aside>
  );
}
