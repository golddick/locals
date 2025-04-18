'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
import { snakeCaseToTitleCase } from '@/lib/utils';
import { ActionBTN } from './ActionBTN';
import { RequestInfoType, SpecialRequestType } from '@/type/business_type';


export const columns : ColumnDef<SpecialRequestType>[] = [

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.user?.firstname; 
  
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
      const email = row.original.user?.email; 
  
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
      const service = row.original.services;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       {service.map((item, index) => (
         <p key={index}>{item.name}</p>
       ))}
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
      const sub_date = row.original.dueDate;
       // Ensure the date is valid before calling toLocaleDateString
    const parsedDate = new Date(sub_date);

    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      return <p>Invalid Date</p>;  
    }
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{parsedDate.toLocaleDateString()}</p>
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
      const due_date = row.original.dueDate;
          // Ensure the date is valid before calling toLocaleDateString
    const parsedDate = new Date(due_date);

    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      return <p>Invalid Date</p>; 
    }
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{parsedDate.toLocaleDateString()}</p>
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
        const id = row.original._id;
        return (
        <ActionBTN requestID={id}/>
        )

      }
}
];



