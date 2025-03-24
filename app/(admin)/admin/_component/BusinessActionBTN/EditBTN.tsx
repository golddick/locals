


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
import EditBusinessProfile from "../EditBusiness"

interface Prop{
  businessId:string
}

export function EditBTN({businessId}:Prop) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'} variant='secondary'>Edit </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full lg:h-[600px] overflow-scroll hidden-scrollbar m-auto">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
       <EditBusinessProfile businessId={businessId}/>
      </DialogContent>
    </Dialog>
  )
}
