'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
import {  BusinessType,  } from '@/type/business_type';
import { snakeCaseToTitleCase } from '@/lib/utils';
import { ActionBTN } from './ActionBTN';


export const columns : ColumnDef<BusinessType>[] = [

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Business Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.name; 
  
      return (

        <div className="flex items-center gap-x-2 text-xm font-medium capitalize truncate">
       <p>{name}</p>
        </div>

      );
    }
  },
  
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Category
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const category = row.original.category;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
  
          <p  className="truncate max-w-[200px]" >
            {category.name}
          </p>
    
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
      return <Badge variant={status}>{snakeCaseToTitleCase(status || 'ACTIVE')}</Badge>;
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
        <p>{email}</p>
      )
     
    }
  },

  {
    accessorKey: 'rating',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Avg.Rating
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const rating = row.original.ratings;

      return (
        <div className=' flex items-center gap-2'>
          <Star className=' size-5 fill-[#FFCC00] text-[#FFCC00]'/>
          <p>{rating}</p>
        </div>
      )
     
    }
  },


  {
    id:'actions',
    cell: ({ row }) => {
        const id = row.original._id;
        return (
        <ActionBTN businessID={id}/>
        )

      }
}
];



