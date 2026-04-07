import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { DashboardProvider } from "@/features/auth/dashboard/dashboardContext";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const title =
    PAGE_TITLES[pathname] ||
    (pathname.startsWith("/dashboard/borrowers/")
      ? "Borrower Details"
      : "Dashboard");

  return (
    <DashboardProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out md:static md:z-auto md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} `}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content*/}
        <div className="flex min-w-0 flex-1 flex-col bg-linear-to-br from-[#061546] via-[#0B298C] to-sky-500">
          {pathname !== "/dashboard/add-borrower" &&
            pathname !== "/dashboard/borrower-scoring" &&
            pathname !== "/dashboard/profile" && (
              <Topbar
                title={title}
                onMenuClick={() => setSidebarOpen(!sidebarOpen)}
              />
            )}

          <main
            className={`flex-1 overflow-auto p-4 md:p-6 ${
              pathname === "/dashboard/add-borrower" ||
              pathname === "/dashboard/borrower-scoring" ||
              pathname === "/dashboard/profile"
                ? "bg-white/90"
                : "mt-4 bg-linear-to-br from-[#061546] via-[#0B298C] to-sky-500"
            }`}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
