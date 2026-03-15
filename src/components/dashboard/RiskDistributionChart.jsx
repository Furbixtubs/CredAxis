// src/components/dashboard/RiskDistributionChart.jsx
import { riskDistributionData } from "../../data/mockDashboard";

export default function RiskDistributionChart() {
  const total = riskDistributionData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="charts-card animate-fade-in flex h-full flex-col gap-6 p-4">
      {/* Header */}
      <p className="text-2xl font-normal text-neutral-50">
        Borrower Risk Distribution
      </p>

      {/* Risk rows */}
      <div className="flex flex-col gap-6">
        {riskDistributionData.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            {/* Label row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {/* Dot indicator */}
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-body text-base text-neutral-50">
                  {item.label}
                </span>
              </div>

              {/* Count */}
              <span className="font-heading text-2xl text-neutral-50">
                {item.value}
              </span>
            </div>

            {/* Progress bar */}
            <div
              className="w-full overflow-hidden rounded-full"
              style={{
                height: "12px",
                backgroundColor: "var(--color-secondary-700)",
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${(item.value / total) * 100}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
