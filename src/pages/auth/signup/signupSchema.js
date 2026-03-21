import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),

    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Please select a gender" }),
    }),

    phone: z
      .string()
      .min(11, "Phone number must be at least 11 digits")
      .max(15, "Phone number is too long")
      .regex(/^\+?[0-9\s\-()]+$/, "Enter a valid phone number"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms of Service",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
