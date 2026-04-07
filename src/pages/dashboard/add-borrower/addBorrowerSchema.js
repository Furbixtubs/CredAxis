import { z } from "zod";

export const addBorrowerSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),

  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),

  phone_no: z
    .string()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(/^\+?[\d\s\-()]{7,15}$/, "Enter a valid phone number"),

  bvn: z
    .string()
    .length(11, "BVN must be exactly 11 digits")
    .regex(/^\d{11}$/, "BVN must contain only digits"),
});
