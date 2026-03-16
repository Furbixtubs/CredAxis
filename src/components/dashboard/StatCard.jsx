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
    <section
      style={{
        backgroundColor: "#113ed2",
        border: "none",
        borderRadius: "0.75rem",
      }}
      className="stat-card animate-fade-in flex flex-col justify-center gap-2 border-none p-4"
    >
      {/* Top row — title + icon */}
      <div className="flex items-center justify-between">
        <p className="font-body text-xs font-medium tracking-widest text-[#F0F4F8] uppercase">
          {title}
        </p>
        {icon && (
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              iconBg || "bg-brand-blue/10"
            }`}
          >
            {icon}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        {/* Value */}
        <p className="font-heading text-2xl leading-none text-white">{value}</p>

        {/* Change indicator */}
        {change !== undefined && (
          <div
            className={`flex items-center gap-1 text-xs font-medium text-[#F0F4F8]`}
          >
            {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            <span>
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
