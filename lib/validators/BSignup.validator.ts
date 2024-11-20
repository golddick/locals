import * as z from 'zod';

export const BSingupFormSchema = z.object({
  businessEmail: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format", })
  .min(1, "Email is required"),
  businessName: z.string({ message: ' Business Name required',}),
  businessAddress: z.string({ message: ' Business Address required',}),
  businessMember: z.string({ message: ' Business Address required',}),
  businessImg: z.string().optional(),
  businessDec: z.string().optional(),
  businessCategory: z.string({ message: ' Business Category required',}),
  businessNumber: z.number({ message: ' Business Number required',}),

});
