


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
import EditBusiness from "./EditBusiness"
import { toast } from "sonner"


interface Prop{
  businessId:string 
}

export function EditBTN({businessId}:Prop) {

  if (!businessId) {
    toast.error('No Business ID')
    return 
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button   className=" mt-5 w-[100px] md:w-[200px]">Edit </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full lg:h-[600px] overflow-scroll hidden-scrollbar m-auto">
        <DialogHeader>
          <DialogTitle>Edit Business </DialogTitle>
          <DialogDescription>
          Edit Your Business Infomation
          </DialogDescription>
        </DialogHeader>
       <EditBusiness businessId={businessId}/>
      </DialogContent>
    </Dialog>
  )
}
