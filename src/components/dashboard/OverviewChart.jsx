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
      <div className="card-base px-3 py-2 text-xs space-y-1">
        <p className="text-secondary-400 mb-1">{label}</p>
        {payload.map((p) => (
          <div key={p.dataKey} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
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
    <div className="card-base p-5 flex flex-col gap-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-50 font-heading">
          Overview
        </h3>

        <div className="flex items-center gap-3">
          {/* Legend */}
          <div className="flex items-center gap-3 mr-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-teal" />
              <span className="text-xs text-secondary-400">Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="text-xs text-secondary-400">Expenses</span>
            </div>
          </div>

          {/* Period selector */}
          <select
            value={activePeriod}
            onChange={(e) => setActivePeriod(e.target.value)}
            className="text-xs bg-surface-secondary text-secondary-400 border border-dark-border rounded-md px-2 py-1 outline-none cursor-pointer"
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
              stroke="var(--color-brand-teal)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "var(--color-brand-teal)" }}
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
