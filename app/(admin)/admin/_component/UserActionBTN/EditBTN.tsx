


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import EditUser from "../EditUser"


interface Prop{
  userId:string
}

export function EditUserBTN({userId}:Prop) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'} variant='secondary'>Edit </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full md:h-[600px] overflow-scroll hidden-scrollbar m-auto">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
       <EditUser userId={userId}/>
      </DialogContent>
    </Dialog>
  )
}
