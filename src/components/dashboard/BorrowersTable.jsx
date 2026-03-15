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
      <div className="border-dark-border border-b px-5 py-4">
        <h3 className="font-heading text-sm font-semibold text-neutral-50">
          Recent Borrowers
        </h3>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-dark-border hover:bg-transparent">
              <TableHead className="text-secondary-400 pl-5 text-center text-xs font-medium tracking-wider uppercase">
                Name
              </TableHead>
              <TableHead className="text-secondary-400 text-center text-xs font-medium tracking-wider uppercase">
                Risk Score
              </TableHead>
              <TableHead className="text-secondary-400 text-center text-xs font-medium tracking-wider uppercase">
                Risk Band
              </TableHead>
              <TableHead className="text-secondary-400 text-center text-xs font-medium tracking-wider uppercase">
                Recommended Limit
              </TableHead>
              <TableHead className="text-secondary-400 text-center text-xs font-medium tracking-wider uppercase">
                Decision
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {borrowersData.map((borrower) => (
              <TableRow
                key={borrower.id}
                className="border-dark-border hover:bg-surface-hover transition-fast cursor-pointer"
                // onClick={() => navigate(`/dashboard/borrowers/${borrower.id}`)}z
              >
                {/* Name + Avatar */}
                <TableCell className="py-3 pl-5">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-brand-blue/20 text-brand-teal text-xs font-semibold">
                        {getInitials(borrower.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-body text-sm leading-none font-medium text-neutral-50">
                        {borrower.name}
                      </p>
                      {borrower.verified && (
                        <div className="mt-0.5 flex items-center gap-1">
                          <ShieldCheck size={10} className="text-brand-teal" />
                          <span className="text-secondary-400 text-[10px]">
                            BVN verified
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>

                {/* Risk Score */}
                <TableCell className="py-3">
                  <p className="font-heading text-center text-sm font-semibold text-neutral-50">
                    {borrower.riskScore}
                  </p>
                </TableCell>

                {/* Risk Band */}
                <TableCell className="flex items-center justify-center py-3">
                  <RiskBadge type={getRiskType(borrower.riskBand)} />
                </TableCell>

                {/* Recommended Limit */}
                <TableCell className="py-3">
                  <p className="font-body text-center text-sm text-neutral-50">
                    ₦{borrower.recommendedLimit.toLocaleString()}
                  </p>
                </TableCell>

                {/* Decision */}
                <TableCell className="flex items-center justify-center py-3">
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
