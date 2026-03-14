import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar  from "../components/dashboard/Topbar";

export default function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
