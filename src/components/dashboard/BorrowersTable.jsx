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
    <div className="animate-fade-in overflow-hidden rounded-[20px] bg-white">
      {/* Table header row */}
      <div className="px-5 text-black">
        <p className="border-dark-border font-heading border-b py-4 text-sm font-semibold text-black">
          Recent Borrowers
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-primary-08 pl-5 text-center text-xs font-medium tracking-wider uppercase">
                Name
              </TableHead>
              <TableHead className="text-primary-08 text-center text-xs font-medium tracking-wider uppercase">
                Risk Score
              </TableHead>
              <TableHead className="text-primary-08 text-center text-xs font-medium tracking-wider uppercase">
                Risk Band
              </TableHead>
              <TableHead className="text-primary-08 text-center text-xs font-medium tracking-wider uppercase">
                Recommended Limit
              </TableHead>
              <TableHead className="text-primary-08 text-center text-xs font-medium tracking-wider uppercase">
                Decision
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {borrowersData.map((borrower) => (
              <TableRow
                key={borrower.id}
                className="transition-fast cursor-pointer hover:bg-gray-200"
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
                      <p className="font-body text-sm leading-none font-medium text-black">
                        {borrower.name}
                      </p>
                      {borrower.verified && (
                        <div className="mt-0.5 flex items-center gap-1">
                          <ShieldCheck size={10} className="text-brand-teal" />
                          <span className="text-[10px] text-black">
                            BVN verified
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>

                {/* Risk Score */}
                <TableCell className="py-3">
                  <p className="text-center text-sm text-black">
                    {borrower.riskScore}
                  </p>
                </TableCell>

                {/* Risk Band */}
                <TableCell className="flex items-center justify-center py-3">
                  <RiskBadge type={getRiskType(borrower.riskBand)} />
                </TableCell>

                {/* Recommended Limit */}
                <TableCell className="py-3">
                  <p className="font-body text-center text-sm text-black">
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
