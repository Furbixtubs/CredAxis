// src/services/authService.js
import { api } from "./api";

export const authService = {
  // signup
  signup: (userData) => api.post("/user/signup", userData),

  // Step 1 — send email + password, triggers OTP email
  login: (email, password) => api.post("/user/login", { email, password }),

  // Step 2 — verify OTP, sets auth cookie + returns user
  verifyOtp: (otp_code) => api.patch("/user/authOtp", { otp_code }),

  // Resend OTP — re-triggers login with stored email
  resendOtp: (email) => api.post("/user/authOtp?status=login", { email }),

  // Get logged-in user's profile
  getProfile: (userId) => api.get(`/user/${userId}`),
};
