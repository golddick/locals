import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectProps{
    status: string
}

export function SelectStatus({status}:SelectProps) {
    console.log(status)
  return (
    <Select >
      <SelectTrigger className="w-[180px] rounded-md border" defaultValue={status}>
        <SelectValue placeholder="Update status" defaultValue={status}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="In_Progress">In Progress</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
