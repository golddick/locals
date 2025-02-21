'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
import { PlanType } from '@/type/business_type';



export const columns : ColumnDef<PlanType>[] = [

  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Transaction Reference
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ), 
    cell: ({ row }) => {
      const id = row.original.id; 
  
      return (

        <div className="flex items-center text-xm   ">
       <p>{id}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Subscription Tier
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const Tier = row.original.name

  
      return (

        <div className="flex items-center text-xm text-[#706A6A]">
          <p>{Tier}</p>
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

        <div className="flex items-center text-xm text-[#706A6A] ">
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

        <div className="flex items-center text-xm text-[#706A6A]">
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



