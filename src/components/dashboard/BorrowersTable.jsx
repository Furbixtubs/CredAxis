// src/components/dashboard/BorrowersTable.jsx
import { useNavigate } from "react-router";
import { ShieldCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback } from "../ui/avatar";
import RiskBadge from "./RiskBadge";
import { borrowersData } from "../../data/mockDashboard";

// Derive initials from name
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Map riskBand string → RiskBadge type
function getRiskType(band) {
  if (band === "Low Risk") return "low";
  if (band === "Medium Risk") return "medium";
  if (band === "High Risk") return "high";
  return "pending";
}

// Map decision string → RiskBadge type
function getDecisionType(decision) {
  if (decision === "Approved") return "approved";
  if (decision === "Rejected") return "rejected";
  return "pending";
}

export default function BorrowersTable() {
  const navigate = useNavigate();

  return (
    <div className="card-base animate-fade-in overflow-hidden">
      {/* Table header row */}
      <div className="px-5 py-4 border-b border-dark-border">
        <h3 className="text-sm font-semibold text-neutral-50 font-heading">
          Recent Borrowers
        </h3>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-dark-border hover:bg-transparent">
              <TableHead className="text-secondary-400 text-xs font-medium uppercase tracking-wider pl-5">
                Name
              </TableHead>
              <TableHead className="text-secondary-400 text-xs font-medium uppercase tracking-wider">
                Risk Score
              </TableHead>
              <TableHead className="text-secondary-400 text-xs font-medium uppercase tracking-wider">
                Risk Band
              </TableHead>
              <TableHead className="text-secondary-400 text-xs font-medium uppercase tracking-wider">
                Recommended Limit
              </TableHead>
              <TableHead className="text-secondary-400 text-xs font-medium uppercase tracking-wider">
                Decision
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {borrowersData.map((borrower) => (
              <TableRow
                key={borrower.id}
                className="border-dark-border hover:bg-surface-hover cursor-pointer transition-fast"
                onClick={() => navigate(`/dashboard/borrowers/${borrower.id}`)}
              >
                {/* Name + Avatar */}
                <TableCell className="pl-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-brand-blue/20 text-brand-teal text-xs font-semibold">
                        {getInitials(borrower.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-neutral-50 font-body leading-none">
                        {borrower.name}
                      </p>
                      {borrower.verified && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <ShieldCheck size={10} className="text-brand-teal" />
                          <span className="text-[10px] text-secondary-400">
                            BVN verified
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>

                {/* Risk Score */}
                <TableCell className="py-3">
                  <span className="text-sm font-semibold text-neutral-50 font-heading">
                    {borrower.riskScore}
                  </span>
                </TableCell>

                {/* Risk Band */}
                <TableCell className="py-3">
                  <RiskBadge type={getRiskType(borrower.riskBand)} />
                </TableCell>

                {/* Recommended Limit */}
                <TableCell className="py-3">
                  <span className="text-sm text-neutral-50 font-body">
                    ₦{borrower.recommendedLimit.toLocaleString()}
                  </span>
                </TableCell>

                {/* Decision */}
                <TableCell className="py-3">
                  <RiskBadge type={getDecisionType(borrower.decision)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
