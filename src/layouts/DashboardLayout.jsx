import { Outlet, useLocation } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/dashboard/borrowers": "Borrowers",
  "/dashboard/credit-models": "Credit Models",
  "/dashboard/risk-analysis": "Risk Analysis",
  "/dashboard/transactions": "Transactions",
  "/dashboard/reports": "Reports",
  "/dashboard/integrations": "Integrations",
  "/dashboard/settings": "Settings",
  "/dashboard/settings/security": "Security Settings",
  "/dashboard/settings/billing": "Billing",
  "/dashboard/settings/team": "Team",
  "/dashboard/profile": "Profile",
};

export default function DashboardLayout() {
  const { pathname } = useLocation();

  const title =
    PAGE_TITLES[pathname] ||
    (pathname.startsWith("/dashboard/borrowers/")
      ? "Borrower Details"
      : "Dashboard");

  return (
    <div className=" dashboard-grid gap-4">
      <Sidebar />

      <div className="flex-1 flex flex-col gap-4">
        <Topbar title={title} />

        <main className="flex-1 p-6 overflow-auto bg-surface-primary">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
