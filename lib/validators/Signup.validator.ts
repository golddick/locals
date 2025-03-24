import { z } from "zod";

export const SingupFormSchema = z.object({
  email: z.string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" })
    .min(1, "Email is required"),

  firstName: z.string().min(1, "First name is required"),

  lastName: z.string().min(1, "Last name is required"),

  occupation: z.string().min(1, "Occupation is required"),

  password: z.string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),

  confirmPassword: z.string()
    .min(1, "Please confirm your password"),

  displayImg: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // This indicates that the error should appear on the confirmPassword field
});
