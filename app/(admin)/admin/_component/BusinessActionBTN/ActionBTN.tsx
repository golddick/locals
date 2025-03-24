import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DeleteBTN } from "./DeleteBTN"
import { EditBTN } from "./EditBTN"
import { MoreVertical } from "lucide-react"
import { RestrictBTN } from "./RestrictBTN"

interface Props {
  businessId:string
}

export function BusinessAction({businessId}:Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreVertical/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto flex items-center justify-center flex-col gap-2 bg-black border-none">

        <DropdownMenuItem>
            <RestrictBTN businessId={businessId}/>
        </DropdownMenuItem>

        <DropdownMenuItem >
        <DeleteBTN businessId={businessId}/>
        </DropdownMenuItem>
   
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
