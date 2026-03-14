// src/components/dashboard/StatCard.jsx
import { TrendingUp, TrendingDown } from "lucide-react";

/**
 * StatCard — reusable metric card for the dashboard overview
 *
 * Props:
 * - title: string       e.g. "Total Borrowers"
 * - value: string       e.g. "1,500" or "$41,210"
 * - change: number      e.g. +3.2 or -1.5 (optional)
 * - icon: ReactNode     lucide icon (optional)
 * - iconBg: string      tailwind bg class for icon circle (optional)
 */
export default function StatCard({ title, value, change, icon, iconBg }) {
  const isPositive = change >= 0;

  return (
    <section className="card-base card-hover p-5 flex flex-col gap-3 animate-fade-in">
      {/* Top row — title + icon */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted uppercase tracking-widest font-body">
          {title}
        </p>
        {icon && (
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              iconBg || "bg-brand-blue/10"
            }`}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-bold text-neutral-50 font-heading leading-none">
        {value}
      </p>

      {/* Change indicator */}
      {change !== undefined && (
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            isPositive ? "text-risk-low" : "text-risk-high"
          }`}
        >
          {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          <span>
            {isPositive ? "+" : ""}
            {change}%
          </span>
          <span className="text-secondary-500 font-normal">vs last month</span>
        </div>
      )}
    </section>
  );
}
