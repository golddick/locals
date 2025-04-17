






'use client'

import { createSubscriptionPlan } from "@/app/api/post/createPlan"
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
import { Loader, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { toast } from "sonner"

export function Add_plan_tier_BTN() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: 1,
    features: ["", ""],
  })

  const createSubscription = async (subscriptionData: any) => {

    try {
      setLoading(true)
      const response = await createSubscriptionPlan(subscriptionData)
      if (!response) throw new Error("Failed to create subscription plan.")

      toast.success("Subscription Plan Created Successfully!")
      router.refresh()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create subscription plan.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string,
    index?: number
  ) => {
    const value = e.target.value
  
    if (field === "features" && typeof index === "number") {
      const updatedFeatures = [...formData.features]
      updatedFeatures[index] = value
      setFormData({ ...formData, features: updatedFeatures })
    } else if (field === "duration") {
      // Ensure duration is always a number
      setFormData({ ...formData, duration: parseInt(value, 10) })
    } else {
      setFormData({ ...formData, [field]: value })
    }
  }
  

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.price ||
      formData.features.some((feature) => !feature.trim()) ||
      Number(formData.duration) < 1 ||
      Number(formData.duration) > 12
    ) {
      toast.error("Please fill in all fields and ensure duration is between 1 and 12 months.")
      return
    }



    const subscriptionData = {
      name: formData.name,
      price: parseFloat(formData.price),
      duration: Number(formData.duration), // ✅ force number type here
      features: formData.features.filter((feature) => feature.trim()),
    };   

    await createSubscription(subscriptionData)
    setFormData({ name: "", price: "", duration: 1, features: ["", ""] })
  }

  return (
    <Dialog>
      <div className="absolute border-t bottom-0 p-2 flex items-center gap-4 bg-white w-full rounded-lg">
        <DialogTrigger asChild>
          <Button className="rounded-full size-6 p-2">
            <Plus className="size-4" />
          </Button>
        </DialogTrigger>
        <span>Add New Subscription Tier</span>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Subscription Plan</DialogTitle>
          <DialogDescription>
            Fill in the details for the new subscription plan and click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {/* Plan Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, "name")}
              className="col-span-3"
              placeholder="Enter plan name"
            />
          </div>

          {/* Price */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={(e) => handleInputChange(e, "price")}
              className="col-span-3"
              placeholder="Enter price"
            />
          </div>

          {/* Duration Selector */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-right">
              Duration
            </Label>
            <select
              id="duration"
              value={formData.duration}
              onChange={(e) => handleInputChange(e, "duration")}
              className="col-span-3 border rounded-md px-3 py-2 text-sm"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month} {month === 1 ? "month" : month === 12 ? "months (1 year)" : "months"}
                </option>
              ))}
            </select>
          </div>

          {/* Features List */}
          {formData.features.map((feature, index) => (
            <div key={index} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={`feature-${index}`} className="text-right">
                Feature {index + 1}
              </Label>
              <Input
                id={`feature-${index}`}
                value={feature}
                onChange={(e) => handleInputChange(e, "features", index)}
                className="col-span-3"
                placeholder={`Enter feature ${index + 1}`}
              />
            </div>
          ))}

          {/* Add More Features */}
          <div className="flex justify-end">
            <Button type="button" onClick={addFeature} className="text-sm text-white mt-2">
              Add More Features
            </Button>
          </div>

          {/* Submit Button */}
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader className="size-4 animate-spin" /> : "Save Plan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
