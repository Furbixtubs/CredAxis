import { NavLink, Outlet } from "react-router";

const TABS = [
  { label: "General", to: "/dashboard/settings" },
  { label: "Security", to: "/dashboard/settings/security" },
  { label: "Billing", to: "/dashboard/settings/billing" },
  { label: "Team", to: "/dashboard/settings/team" },
];

export default function SettingsLayout() {
  return (
    <div>
      <h1 style={{ margin: "0 0 1.5rem", fontSize: "22px", fontWeight: "700" }}>
        Settings
      </h1>

      <nav style={s.tabBar}>
        {TABS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/dashboard/settings"}
            style={({ isActive }) => ({
              ...s.tab,
              borderBottom: isActive
                ? "2px solid #111"
                : "2px solid transparent",
              color: isActive ? "#111" : "#6b7280",
              fontWeight: isActive ? "600" : "400",
            })}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div style={{ maxWidth: "640px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const s = {
  tabBar: {
    display: "flex",
    borderBottom: "1px solid #e5e7eb",
    marginBottom: "2rem",
  },
  tab: {
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: "14px",
    transition: "color .12s",
  },
};
