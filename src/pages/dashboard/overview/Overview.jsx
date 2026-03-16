import { useState } from "react";
import {
  Users,
  TrendingUp,
  ShieldAlert,
  // PiggyBank,
  CircleDollarSign,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RiskDistributionChart from "@/components/dashboard/RiskDistributionChart";
import OverviewChart from "@/components/dashboard/OverviewChart";
import BorrowersTable from "@/components/dashboard/BorrowersTable";
import { statsData } from "@/data/mockDashboard";

export default function Overview() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-full flex-col gap-6">
      {/* ── Stat Cards ── */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
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
