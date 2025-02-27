"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Category } from "./Category"

const chartData = [
  { category: "Cleaning Services", visitors: 275, fill: "#C50C7B" },
  { category: "Photography Services", visitors: 200, fill: "#FF3D00" },
  { category: "Catering Services", visitors: 287, fill: "#2CCA33" },
  { category: "Legal Services", visitors: 173, fill: "#FFCD0F" },
  { category: "IT & Tech Services", visitors: 153, fill: "#1976D2" },
  { category: "other", visitors: 190, fill: "#1436D2" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Cleaning: {
    label: "Cleaning Services",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function CircleChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col border-none">
      <CardContent className="flex-1  grid grid-cols-1  lg:grid-cols-2   justify-center ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Business
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className=" flex flex-col gap-4  bg-[#FFFFFF]   rounded-xl p-4 ">
            <h1>Top Listed Categories</h1>
            {chartData.map((item, index) => (
            <Category
              key={index}
              value={item.visitors.toString()}
              des=""
              name={item.category}
              color={item.fill} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
