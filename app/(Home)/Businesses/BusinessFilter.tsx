import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function BusinessFilter() {
  return (
    <div className=" mt-10 flex flex-col gap-10">

     <div>
     <div className=" flex flex-col gap-2  items-start mb-2">
     <h1 className=" text-[20px] font-semibold">Filters</h1>
     <h4 className=" text-[#706A6A] font-normal text-[15px]">Business Categories</h4>
     </div>
        <RadioGroup defaultValue="HS">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="HS" id="r1" />
        <Label htmlFor="r1">Home Services</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="CS" id="r2" />
        <Label htmlFor="r2">Catering Services</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="LS" id="r3" />
        <Label htmlFor="r3">Legal Services</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="SC" id="r4" />
        <Label htmlFor="r4">Spas & Wellness Centres</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="IT" id="r5" />
        <Label htmlFor="r5">Tech Support & IT Services</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="FT" id="r6" />
        <Label htmlFor="r6">Fitness Trainers</Label>
      </div>
    </RadioGroup>
     </div>


<div>
<div className=" flex flex-col gap-2  items-start mb-2">
     <h4 className=" text-[#706A6A] font-normal text-[15px]">Payment plan</h4>
     </div>
        <RadioGroup defaultValue="PH">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="PH" id="p1" />
        <Label htmlFor="p1">Per Hour</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="PD" id="p2" />
        <Label htmlFor="p2">Per Day</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="PW" id="p3" />
        <Label htmlFor="p3">Per Week</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="PM" id="p4" />
        <Label htmlFor="p4">Per Month</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="PJ" id="p5" />
        <Label htmlFor="p5">Per Month</Label>
      </div>
    </RadioGroup>
</div>

    </div>
  )
}
