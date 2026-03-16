// src/data/mockDashboard.js
// Replace these with real API calls when backend is ready

export const statsData = {
  totalBorrowers: 1500,
  approvalRate: 58,
  approvalRateChange: +3.2,
  averageRiskScore: 675,
  savings: 41210,
};

export const riskDistributionData = [
  { label: "Low Risk", value: 640, color: "var(--color-risk-low)" },
  { label: "Medium Risk", value: 530, color: "var(--color-risk-medium)" },
  { label: "High Risk", value: 330, color: "var(--color-risk-high)" },
];

export const overviewChartData = [
  { month: "Jan", income: 400, expenses: 300 },
  { month: "Feb", income: 600, expenses: 450 },
  { month: "Mar", income: 500, expenses: 400 },
  { month: "Apr", income: 750, expenses: 500 },
  { month: "May", income: 700, expenses: 600 },
  { month: "Jun", income: 900, expenses: 700 },
  { month: "Jul", income: 850, expenses: 620 },
  { month: "Aug", income: 950, expenses: 700 },
  { month: "Sep", income: 880, expenses: 650 },
  { month: "Oct", income: 1000, expenses: 800 },
  { month: "Nov", income: 950, expenses: 750 },
  { month: "Dec", income: 1100, expenses: 850 },
];

export const borrowersData = [
  {
    id: "B001",
    name: "John Agoh",
    verified: true,
    avatar: null,
    riskScore: 720,
    riskBand: "Low Risk",
    recommendedLimit: 150000,
    decision: "Approved",
  },
  {
    id: "B002",
    name: "Siemon Goodman",
    verified: true,
    avatar: null,
    riskScore: 650,
    riskBand: "Medium Risk",
    recommendedLimit: 120000,
    decision: "Approved",
  },
  {
    id: "B003",
    name: "Samuel Okon",
    verified: true,
    avatar: null,
    riskScore: 580,
    riskBand: "Medium Risk",
    recommendedLimit: 120000,
    decision: "Approved",
  },
  {
    id: "B004",
    name: "Sandra Ada",
    verified: true,
    avatar: null,
    riskScore: 580,
    riskBand: "Medium Risk",
    recommendedLimit: 120000,
    decision: "Approved",
  },
  {
    id: "B005",
    name: "Grace Samuel",
    verified: true,
    avatar: null,
    riskScore: 700,
    riskBand: "Low Risk",
    recommendedLimit: 150000,
    decision: "Approved",
  },
  {
    id: "B006",
    name: "Chika Emeka",
    verified: true,
    avatar: null,
    riskScore: 510,
    riskBand: "High Risk",
    recommendedLimit: 50000,
    decision: "Rejected",
  },
  {
    id: "B007",
    name: "Kunle Oluwaseun",
    verified: true,
    avatar: null,
    riskScore: 640,
    riskBand: "Medium Risk",
    recommendedLimit: 120000,
    decision: "Approved",
  },
  {
    id: "B008",
    name: "Fatima Aliyu",
    verified: true,
    avatar: null,
    riskScore: 490,
    riskBand: "High Risk",
    recommendedLimit: 50000,
    decision: "Rejected",
  },
];
