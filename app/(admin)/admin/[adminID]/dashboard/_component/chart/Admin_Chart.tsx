"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", Revenue: 186 },
  { month: "February", Revenue: 305},
  { month: "March", Revenue: 237,  },
  { month: "April", Revenue: 73, },
  { month: "May", Revenue: 209,  },
  { month: "June", Revenue: 214, },
  { month: "July", Revenue: 214,  },
  { month: "Agu", Revenue: 214,  },
  { month: "Sep", Revenue: 104,  },
  { month: "Oct", Revenue: 214,  },
  { month: "November", Revenue: 304, },
  { month: "Dec", Revenue: 4,},
]

const chartConfig = {
    Revenue: {
    label: "Revenue",
    color: "#101010",
  },
} satisfies ChartConfig

export function AdminChart() {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-4 flex flex-col gap-4">

    <h1 className=" font-semibold text-[20px]">Statistics</h1>
   
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full ">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Revenue" fill="var(--color-Revenue)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}
