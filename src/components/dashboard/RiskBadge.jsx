// src/components/dashboard/RiskBadge.jsx

/**
 * RiskBadge — reusable badge for risk band and decision columns
 *
 * Props:
 * - type: "low" | "medium" | "high" | "approved" | "rejected" | "pending"
 * - label: string (optional override)
 */
export default function RiskBadge({ type, label }) {
  const map = {
    low: { className: "badge-low-risk", defaultLabel: "Low Risk" },
    medium: { className: "badge-medium-risk", defaultLabel: "Medium Risk" },
    high: { className: "badge-high-risk", defaultLabel: "High Risk" },
    approved: { className: "badge-approved", defaultLabel: "Approved" },
    rejected: { className: "badge-rejected", defaultLabel: "Rejected" },
    pending: { className: "badge-pending", defaultLabel: "Pending" },
  };

  const config = map[type] || map["pending"];

  return (
    <span className={config.className}>{label || config.defaultLabel}</span>
  );
}
