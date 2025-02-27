'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
import { snakeCaseToTitleCase } from '@/lib/utils';
import { ActionBTN } from './ActionBTN';
import { UserInfoType } from '@/type/business_type';
import Image from 'next/image';



export const columns : ColumnDef<UserInfoType>[] = [

  {
    accessorKey: 'user',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        User
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.name; 
      const email = row.original.email; 
      const img = row.original.img; 
  
      return (

     <div className=' flex items-center gap-2'>
      {img ? (
        <div className='w-6 h-6 relative'>
          <Image 
          src={img} 
          alt="IMG" 
          fill
          className="rounded-full object-contain  absolute" 
        />
        </div>
      ) : (
        <p className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white font-semibold uppercase">
          {name ? name.charAt(0) : "?"}
        </p>
      )}
       <div className=' flex flex-col  items-start'>
        <p className=' text-[13px]'>{name}</p>
        <p className=' text-[9px]'>{email}</p>
      </div>
     </div>

      );
    }
  },
  
  {
    accessorKey: 'tier',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Membership Tier
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const Tier = row.original.planTier;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{Tier}</p>
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
    accessorKey: 'last_seen',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Last Active
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const last_seen = row.original.last_seen;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{last_seen}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'due_date',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       Registration Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const reg_date = row.original.reg_date;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{reg_date}</p>
        </div>

      );
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



