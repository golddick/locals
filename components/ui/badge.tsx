import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { RequestInfoType} from '@/type/business_type'


const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {

    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        active: "border-transparent  border-[#9ABEFC] text-[#9ABEFC] hover:opacity-75",
        suspeneded: "border-transparent border-[#8FDB92] text-[#8FDB92] hover:opacity-75",
        in_active: "border-transparent border-[#F1A086] text-[#F1A086] hover:opacity-75",
        Active: "border-transparent border-none text-[#2CCA33] hover:opacity-75",
        Expired: "border-transparent border-none text-[#FF3D00] hover:opacity-75",
        Terminated: "border-transparent border-none text-[#FF3D00] hover:opacity-75",
        Pending: "border-transparent border-[#FF3D00] text-[#FF3D00] hover:opacity-75",
        pending: "border-transparent border-[#FF3D00] text-[#FF3D00] hover:opacity-75",
        Completed: "border-transparent border-[#176BFF] text-[#176BFF] hover:opacity-75",
        completed: "border-transparent border-[#176BFF] text-[#176BFF] hover:opacity-75",
        In_Progress: "border-transparent border-[#F4B400] text-[#F4B400] hover:opacity-75",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
