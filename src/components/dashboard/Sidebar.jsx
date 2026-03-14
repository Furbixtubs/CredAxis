import { NavLink } from "react-router";

const NAV_ITEMS = [
  { label: "Overview",      to: "/dashboard",              end: true },
  { label: "Borrowers",     to: "/dashboard/borrowers" },
  { label: "Lenders",       to: "/dashboard/lenders" },
  { label: "Credit Models", to: "/dashboard/credit-models" },
  { label: "Risk Analysis", to: "/dashboard/risk-analysis" },
  { label: "Transactions",  to: "/dashboard/transactions" },
  { label: "Reports",       to: "/dashboard/reports" },
  { label: "Integrations",  to: "/dashboard/integrations" },
];

const BOTTOM_ITEMS = [
  { label: "Settings", to: "/dashboard/settings" },
  { label: "Profile",  to: "/dashboard/profile" },
];

function SidebarLink({ label, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      style={({ isActive }) => ({
        display:        "flex",
        alignItems:     "center",
        gap:            "10px",
        padding:        "9px 12px",
        borderRadius:   "7px",
        textDecoration: "none",
        fontSize:       "14px",
        fontWeight:     isActive ? "600" : "400",
        color:          isActive ? "#111" : "#6b7280",
        background:     isActive ? "#f0f0f0" : "transparent",
        transition:     "background .12s, color .12s",
      })}
    >
      {label}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside style={s.aside}>
      <div style={s.brand}>CredAxis</div>

      <nav style={s.nav}>
        {NAV_ITEMS.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
      </nav>

      <nav style={s.bottom}>
        <div style={s.divider} />
        {BOTTOM_ITEMS.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
      </nav>
    </aside>
  );
}

const s = {
  aside:   { width: "220px", flexShrink: 0, display: "flex", flexDirection: "column", background: "#fff", borderRight: "1px solid #e5e7eb", padding: "1rem 0.75rem" },
  brand:   { fontWeight: "700", fontSize: "17px", padding: "0.5rem 0.75rem", marginBottom: "1.25rem" },
  nav:     { display: "flex", flexDirection: "column", gap: "2px", flex: 1 },
  bottom:  { display: "flex", flexDirection: "column", gap: "2px" },
  divider: { height: "1px", background: "#e5e7eb", margin: "0.75rem 0" },
};
