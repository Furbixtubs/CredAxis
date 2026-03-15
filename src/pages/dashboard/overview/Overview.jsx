// src/pages/dashboard/overview/Overview.jsx
import {
  Users,
  TrendingUp,
  ShieldAlert,
  PiggyBank,
  CircleDollarSign,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RiskDistributionChart from "@/components/dashboard/RiskDistributionChart";
import OverviewChart from "@/components/dashboard/OverviewChart";
import BorrowersTable from "@/components/dashboard/BorrowersTable";
import { statsData } from "@/data/mockDashboard";

export default function Overview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Borrowers"
          value={statsData.totalBorrowers.toLocaleString()}
          icon={<Users size={15} className="text-brand-teal" />}
          iconBg="bg-brand-teal/10"
        />
        <StatCard
          title="Approval Rate"
          value={`${statsData.approvalRate}%`}
          change={statsData.approvalRateChange}
          icon={<TrendingUp size={15} className="text-brand-teal" />}
          iconBg="bg-brand-teal/10"
        />
        <StatCard
          title="Average Risk Score"
          value={statsData.averageRiskScore}
          icon={<ShieldAlert size={15} className="text-risk-medium" />}
          iconBg="bg-risk-medium-bg/20"
        />
        <StatCard
          title="Savings"
          value={`$${statsData.savings.toLocaleString()}`}
          icon={<CircleDollarSign size={15} className="text-risk-medium" />}
          iconBg="bg-risk-low-bg/20"
        />
      </div>

      {/* ── Charts Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Risk Distribution — narrower */}
        <div className="lg:col-span-2">
          <RiskDistributionChart />
        </div>

        {/* Overview Line Chart — wider */}
        <div className="lg:col-span-3">
          <OverviewChart />
        </div>
      </div>

      {/* ── Borrowers Table ── */}
      <BorrowersTable />
    </div>
  );
}
