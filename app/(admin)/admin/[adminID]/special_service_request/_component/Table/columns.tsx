'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
import { snakeCaseToTitleCase } from '@/lib/utils';
import { ActionBTN } from './ActionBTN';
import { RequestInfoType } from '@/type/business_type';


export const columns : ColumnDef<RequestInfoType>[] = [

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.user_name; 
  
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{name}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const email = row.original.email; 
  
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{email}</p>
        </div>

      );
    }
  },
  
  {
    accessorKey: 'service',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Service
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const service = row.original.service;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{service}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'sub_date',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Submission Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const sub_date = row.original.sub_date;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{sub_date}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'due_date',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Due Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const due_date = row.original.due_date;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{due_date}</p>
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
      return <Badge variant={status}>{snakeCaseToTitleCase(status)}</Badge>;
    }
  },



  {
    id:'actions',
    cell: ({ row }) => {
        const id = row.original.id;
        return (
        <ActionBTN requestID={id}/>
        )

      }
}
];



