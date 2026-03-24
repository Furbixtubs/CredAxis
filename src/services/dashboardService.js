import { api } from "./api";

export const dashboardService = {
  // add borrower
  addBorrower: (borrowerData) => api.post("/bank/add-borrower", borrowerData),
};
