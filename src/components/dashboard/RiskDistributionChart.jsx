// src/components/dashboard/RiskDistributionChart.jsx
import { riskDistributionData } from "../../data/mockDashboard";

export default function RiskDistributionChart() {
  const total = riskDistributionData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="card-base p-4 flex flex-col gap-6 animate-fade-in h-full">
      {/* Header */}
      <h3 className="text-lg font-semibold text-neutral-50 font-heading">
        Borrower Risk Distribution
      </h3>

      {/* Risk rows */}
      <div className="flex flex-col gap-6">
        {riskDistributionData.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            {/* Label row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {/* Dot indicator */}
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-base text-neutral-50 font-body">
                  {item.label}
                </span>
              </div>

              {/* Count — large bold number */}
              <span className="text-2xl font-bold text-neutral-50 font-heading">
                {item.value}
              </span>
            </div>

            {/* Progress bar */}
            <div
              className="w-full rounded-full overflow-hidden"
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
