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
import { MoreVertical } from "lucide-react"
import { RestrictUserBTN } from "./RestrictBTN"
import { DeleteUserBTN } from "./DeleteBTN"


interface Props {
  userId:string
}

export function UserAction({userId}:Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreVertical/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto flex items-center justify-center flex-col gap-2 bg-black border-none">

        <DropdownMenuItem>
            <RestrictUserBTN userId={userId}/>
        </DropdownMenuItem>

        <DropdownMenuItem >
        <DeleteUserBTN userId={userId}/>
        </DropdownMenuItem>
   
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
