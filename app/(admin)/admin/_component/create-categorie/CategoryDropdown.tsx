"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  MoreVertical } from "lucide-react"
import { DeleteCategoryBTN } from "./DeleteCategoryBTN"


type Checked = DropdownMenuCheckboxItemProps["checked"]

interface Props{
  categoryID:string
}

export function DropdownCategorySide({categoryID}:Props) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'icon'}>
            <MoreVertical/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto bg-black  justify-center flex items-center">
        <div className=" flex flex-col items-center gap-2 w-full justify-center">
           
          <DeleteCategoryBTN categoryID={categoryID}/>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
