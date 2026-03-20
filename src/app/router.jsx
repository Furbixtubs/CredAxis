import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import SettingsLayout from "../layouts/SettingsLayout";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import { action as addBorrowerAction } from "../pages/dashboard/add-borrower/AddBorrower";

// ── Loading fallback ──────────────────────────────────────────────────────────
function Loader() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "60vh" }}>
      <p style={{ color: "#9ca3af" }}>Loading…</p>
    </div>
  );
}

function wrap(Component) {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}

// ── Public pages ──────────────────────────────────────────────────────────────
const Home = lazy(() => import("../pages/public/Home"));
const About = lazy(() => import("../pages/public/About"));
const Features = lazy(() => import("../pages/public/Features"));
const Documentation = lazy(() => import("../pages/public/Documentation"));
const Contact = lazy(() => import("../pages/public/Contact"));

// ── Auth pages ────────────────────────────────────────────────────────────────
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const VerifyOTP = lazy(() => import("../pages/auth/VerifyOTP"));

// ── Dashboard pages ───────────────────────────────────────────────────────────
const Overview = lazy(() => import("../pages/dashboard/overview/Overview"));
const AddBorrower = lazy(
  () => import("../pages/dashboard/add-borrower/AddBorrower"),
);
const Borrowers = lazy(() => import("../pages/dashboard/borrowers/Borrowers"));
const BorrowerDetails = lazy(
  () => import("../pages/dashboard/borrowers/BorrowerDetails"),
);
const Lenders = lazy(() => import("../pages/dashboard/lenders/Lenders"));
const ApprovedModels = lazy(
  () => import("../pages/dashboard/credit-models/ApprovedLoans"),
);
const RejectedModels = lazy(
  () => import("../pages/dashboard/credit-models/RejectedLoans"),
);
const RiskAnalysis = lazy(
  () => import("../pages/dashboard/risk-analysis/RiskAnalysis"),
);
const BlockchainLogs = lazy(
  () => import("../pages/dashboard/blockchainlogs/Blockchainlogs"),
);
const Reports = lazy(() => import("../pages/dashboard/reports/Reports"));
const PortfolioMonitoring = lazy(
  () => import("../pages/dashboard/portfolio-monitoring/PortfolioMonitoring"),
);
const Profile = lazy(() => import("../pages/dashboard/profile/Profile"));
const ApprovedBorrowerScoring = lazy(
  () => import("../pages/dashboard/borrower-scoring/ApprovedBorrowerScoring"),
);

// Settings sub-pages
const SettingsGeneral = lazy(
  () => import("../pages/dashboard/settings/General"),
);
const SettingsSecurity = lazy(
  () => import("../pages/dashboard/settings/Security"),
);
const SettingsBilling = lazy(
  () => import("../pages/dashboard/settings/Billing"),
);
const SettingsTeam = lazy(() => import("../pages/dashboard/settings/Team"));

// 404
const NotFound = lazy(() => import("../pages/NotFound"));

// ── Router ────────────────────────────────────────────────────────────────────
export const router = createBrowserRouter([
  // ── Public website ──────────────────────────────────────────────────────────
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: wrap(Home) },
      { path: "about", element: wrap(About) },
      { path: "features", element: wrap(Features) },
      { path: "docs", element: wrap(Documentation) },
      { path: "contact", element: wrap(Contact) },
    ],
  },

  // ── Auth pages (no layout wrapper) ─────────────────────────────────────────
  { path: "/login", element: wrap(Login) },
  { path: "/signup", element: wrap(Signup) },
  { path: "/verify-otp", element: wrap(VerifyOTP) },

  // ── Protected dashboard ─────────────────────────────────────────────────────
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: wrap(Overview) },
      {
        path: "add-borrower",
        element: wrap(AddBorrower),
        action: addBorrowerAction,
      },
      { path: "borrowers", element: wrap(Borrowers) },
      { path: "borrowers/:id", element: wrap(BorrowerDetails) },
      { path: "lenders", element: wrap(Lenders) },
      { path: "approved-loans", element: wrap(ApprovedModels) },
      { path: "rejected-loans", element: wrap(RejectedModels) },
      { path: "risk-analysis", element: wrap(RiskAnalysis) },
      { path: "blockchain-logs", element: wrap(BlockchainLogs) },
      { path: "reports", element: wrap(Reports) },
      { path: "portfolio-monitoring", element: wrap(PortfolioMonitoring) },
      { path: "profile", element: wrap(Profile) },
      // { path: "borrowers/:id", element: wrap(BorrowerDetails) },
      { path: "borrower-scoring", element: wrap(ApprovedBorrowerScoring) },

      // Settings with nested tab layout
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          { index: true, element: wrap(SettingsGeneral) },
          { path: "security", element: wrap(SettingsSecurity) },
          { path: "billing", element: wrap(SettingsBilling) },
          { path: "team", element: wrap(SettingsTeam) },
        ],
      },
    ],
  },

  // ── 404 ────────────────────────────────────────────────────────────────────
  { path: "*", element: wrap(NotFound) },
]);
