"use client"; 

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Category } from "./Category";
import { CreateCategorie } from "@/app/(admin)/admin/_component/create-categorie/Create_categorie";
import { getAllCategory } from "@/app/api/get/categorie";
import { CategoryType } from "@/type/business_type";

export function CircleChart() {
  const [categoryData, setCategoryData] = React.useState<CategoryType[]>([]);

  // Fetch category data from the API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCategory();
        setCategoryData(data.data); 
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = React.useMemo(() => {
    const colors = [
      "#C50C7B",
      "#FF3D00",
      "#2CCA33",
      "#FFCD0F",
      "#1976D2",
      "#1436D2",
    ]; 

    return categoryData.map((item, index) => ({
      category: item.name || '', 
      visitors: item.visitors || 1,
      fill: colors[index % colors.length], 
      id: item._id
    }));
  }, [categoryData]);


  const chartConfig = React.useMemo(() => {
    const config: ChartConfig = {
      visitors: {
        label: "Visitors",
      },
    };

    // Add each category to the chartConfig
    categoryData.forEach((item, index) => {
      config[item.name] = {
        label: item.name,
        color: chartData[index].fill,
      };
    });

    return config;
  }, [categoryData, chartData]);

  // Calculate the total number of visitors
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col border-none">
      <CardContent className="flex-1 grid grid-cols-1 lg:grid-cols-2 justify-center">
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
                          Categories
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col gap-4 bg-[#FFFFFF] rounded-xl p-4">
          <CreateCategorie />
          {chartData.map((item, index) => (
            <Category
              key={index}
              value={item.visitors.toString()}
              name={item.category}
              color={item.fill}
              categoryID={item.id}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}