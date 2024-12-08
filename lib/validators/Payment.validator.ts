import * as z from 'zod';

export const PaymentFormSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email format",
  }),
  
  date: z.string().regex(
    /^\d{4}-\d{2}-\d{2}$/, 
    { message: "Date must be in YYYY-MM-DD format" }
  ).refine(date => !isNaN(new Date(date).getTime()), {
    message: "Add a valid date",
  }),

  CVV: z.string({
    required_error: "Credit Card CVV is required",
  })
    .min(3, "CVV must be 3 digits")
    .max(3, "CVV must be 3 digits"),

  CCN: z.string({
    required_error: "Credit Card Number is required",
  })
    .min(13, "Credit Card Number must be at least 13 characters")
    .max(19, "Credit Card Number must be less than 20 characters"),
});
