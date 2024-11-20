import * as z from 'zod';

export const ResetPasswordFormSchema = z.object({
 

  password: z.string({message: 'input your password', })
  .min(1, "Password is required")
  .min(8, "Password must be more than 8 characters")
  .max(32, "Password must be less than 32 characters"),

  ConfirmPassword: z.string({message: 'Confirm your password', })
  .min(1, "Password is required")
  .min(8, "Password must be more than 8 characters")
  .max(32, "Password must be less than 32 characters"),
});
