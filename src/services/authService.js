import { api } from "./api";

export const authService = {
  // Signup
  signup: (userData) => api.post("/user/signup", userData),

  // Trigger signup OTP when user clicks verification link
  // POST /user/verify-user?token=...
  triggerSignupOtp: (token) => api.post(`/user/verify-user?token=${token}`),

  // PATCH /user/verify-user?token=... { otp_code }
  // returns { status, user: { user: { ... } } }
  verifySignupOtp: (token, otp_code) =>
    api.patch(`/user/verify-user?token=${token}`, { otp_code }),

  login: (email, password) => api.post("/user/login", { email, password }),

  // PATCH /user/authOtp { otp_code }
  // returns { status, data: { user, otp } }
  verifyOtp: (otp_code) => api.patch("/user/authOtp", { otp_code }),

  // Resend OTP
  resendOtp: (email) => api.post("/user/authOtp?status=login", { email }),

  // Forgot password
  forgotPassword: (email) => api.put("/user/forget-password", { email }),

  // Reset password
  resetPassword: (token, newPassword) =>
    api.put(`/user/reset-password?token=${token}`, { newPassword }),

  // Get user profile
  getProfile: (userId) => api.get(`/user/${userId}`),
};
