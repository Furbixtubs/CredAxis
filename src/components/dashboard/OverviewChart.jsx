// src/components/dashboard/OverviewChart.jsx
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { overviewChartData } from "../../data/mockDashboard";

const PERIODS = ["Monthly", "Weekly", "Daily"];

// Custom tooltip
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="charts-card space-y-1 px-3 py-2 text-xs">
        <p className="text-secondary-400 mb-1">{label}</p>
        {payload.map((p) => (
          <div key={p.dataKey} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            <span className="text-neutral-50 capitalize">{p.dataKey}:</span>
            <span style={{ color: p.color }}>#{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function OverviewChart() {
  const [activePeriod, setActivePeriod] = useState("Monthly");

  return (
    <div className="charts-card animate-fade-in flex h-full flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-sm font-semibold text-neutral-50">
          Overview
        </h3>

        <div className="flex items-center gap-3">
          {/* Legend */}
          <div className="mr-2 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="bg-brand-teal h-2 w-2 rounded-full" />
              <span className="text-secondary-400 text-xs">Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-brand-blue h-2 w-2 rounded-full" />
              <span className="text-secondary-400 text-xs">Expenses</span>
            </div>
          </div>

          {/* Period selector */}
          <select
            value={activePeriod}
            onChange={(e) => setActivePeriod(e.target.value)}
            className="bg-surface-secondary text-secondary-400 border-dark-border cursor-pointer rounded-md border px-2 py-1 text-xs outline-none"
          >
            {PERIODS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={overviewChartData}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-dark-border)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{ fill: "var(--color-secondary-400)", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--color-secondary-400)", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#1FCB4F"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#1FCB4F" }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="var(--color-brand-blue)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "var(--color-brand-blue)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
