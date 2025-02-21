'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
import { BusinessType, PlanType } from '@/type/business_type';
import { snakeCaseToTitleCase } from '@/lib/utils';



export const columns : ColumnDef<PlanType>[] = [

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Subscription Tier
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.name; 
  
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>
       {snakeCaseToTitleCase(name)}
       </p>
        </div>

      );
    }
  },
  
  {
    accessorKey: 'Duration',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Duration
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const duration = row.original.duration;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium ">
       <p>{duration}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'start_date',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Start date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const start_date = row.original.start_date;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium ">
       <p>{start_date}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'end_date',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        End date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const end_date = row.original.end_date;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium ">
       <p>{end_date}</p>
        </div>

      );
    }
  },

 

  {
    accessorKey: 'status',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      return <Badge variant={status} className=' text-[14px]'>{status}</Badge>;
    }
  },

 
];



