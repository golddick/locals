

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
import { toast } from "sonner" // Assuming you use Sonner for toasts


export function Add_plan_tier_BTN() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: 1, 
    features: ["", ""],
  });

  // Add function to submit the form to the endpoint
  const createSubscription = async (subscriptionData: any) => {
    try {
      setLoading(true);
      const response = await createSubscriptionPlan(subscriptionData);
  
      if (!response) {
        throw new Error("Failed to create subscription plan.");
      }
  
      toast.success("Subscription Plan Created Successfully!");
      router.refresh(); // Refresh the page or re-fetch subscription list
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create subscription plan.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  


  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
    if (field === "features" && typeof index === "number") {
      const updatedFeatures = [...formData.features];
      updatedFeatures[index] = e.target.value;
      setFormData({ ...formData, features: updatedFeatures });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  // Add more feature fields
  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate if name, price, and features are filled
    if (!formData.name || !formData.price || formData.features.some(feature => !feature.trim())) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Send the form data to the server to create the subscription plan
    const subscriptionData = {
      name: formData.name,
      price: formData.price,
      duration: formData.duration,
      features: formData.features.filter(feature => feature.trim()), // Filter empty features
    };

    // Call the function to submit the data
    await createSubscription(subscriptionData);

    // Reset form
    setFormData({ name: "", price: "", duration: 1, features: ["", ""] });
  };

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

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              value={formData.price}
              onChange={(e) => handleInputChange(e, "price")}
              className="col-span-3"
              type="number"
              placeholder="Enter price"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-right">
              Duration (Months)
            </Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={(e) => handleInputChange(e, "duration")}
              className="col-span-3"
              type="number"
              min="1"
              placeholder="Duration in months"
            />
          </div>

          {/* Dynamic Features */}
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

          <div className="flex justify-end">
            <Button type="button" onClick={addFeature} className="text-sm text-white mt-2">
              Add More Features
            </Button>
          </div>

          <DialogFooter>
            <Button type="submit">
              {loading ? <Loader className=" size-4 animate-spin"/> : 'Save Plan'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
