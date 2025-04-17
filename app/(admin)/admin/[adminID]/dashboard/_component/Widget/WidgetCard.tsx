import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartLine } from "lucide-react";
import { cn } from "@/lib/utils"; 

interface WidgetCardProps {
  title: string;
  description: string;
  amount: number | undefined;
  change: string;
  type: "revenue" | string;
}

export const WidgetCard = ({
  title,
  description,
  amount,
  change,
  type, 
}: WidgetCardProps) => {
  return (
    <Card className="border-none flex flex-col justify-between w-auto p-0 bg-[#F8F8F8]">
      <CardHeader className="py-2">
        <CardTitle className="text-[15px] font-medium">{title}</CardTitle>
        <CardDescription className="text-[9px]">{description}</CardDescription>
      </CardHeader>

      <CardContent className="py-2">
        {/* Show amount only if the type is 'revenue' */}
        {type === "revenue" ? (
          <p className="text-[20px]">₦{amount?.toLocaleString()}</p>
        ) : (
          <p className="text-[20px]">{amount}</p>
        )}

      </CardContent>

      <CardFooter className="py-2 text-[12px]">
        <div className="flex items-center gap-2">
          <ChartLine
            className={cn(
              "size-4",
              parseFloat(change) > 0 ? "text-green-500" : "text-red-500"
            )}
          />
          <p
            className={cn(
              "flex gap-1",
              parseFloat(change) > 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {change}%
            <span
              className={cn(
                "text-gray-500",
                parseFloat(change) > 0 ? "text-green-500" : "text-red-500"
              )}
            >
              since last month
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
