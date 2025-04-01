'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, Settings } from "lucide-react";
import { getSinglePlan } from "@/app/api/get/singlePlan";
import { PlanSubscriptionType } from "@/type/business_type";
import { updateSubscriptionPlan } from "@/app/api/put/subscription";

export function Modify_plan_tier_BTN({ subscriptionId }: { subscriptionId: string }) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<PlanSubscriptionType | null>(null);
  const router = useRouter();

  // Reset data when dialog closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) setInitialData(null);
  };

  // Fetch data when dialog opens
  useEffect(() => {
    const fetchData = async () => {
      if (isOpen) {
        try {
          const data = await getSinglePlan(subscriptionId);
          setInitialData({
            _id: data?._id || '',
            name: data?.name || '',
            price: Number(data?.price) || 0,
            duration: Number(data?.duration) || 1,
            features: data?.features?.length ? data.features : [''],
          });
        } catch (error) {
          toast.error("Failed to load subscription data");
          setIsOpen(false);
        }
      }
    };

    fetchData();
  }, [isOpen, subscriptionId]); // Removed initialData from dependencies

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!initialData) return;

    // Validate numeric inputs
    if (isNaN(initialData.price) || isNaN(initialData.duration)) {
      toast.error("Please enter valid numbers for price and duration");
      return;
    }

    const validFeatures = initialData.features.filter(feature => feature.trim());
    if (!initialData.name || validFeatures.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      await updateSubscriptionPlan(subscriptionId, {
        ...initialData,
        features: validFeatures
      });
      
      toast.success("Subscription updated successfully!");
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    initialData && setInitialData({
      ...initialData,
      features: initialData.features.map((f, i) => i === index ? value : f)
    });
  };

  const addFeature = () => {
    initialData && setInitialData({
      ...initialData,
      features: [...initialData.features, '']
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="rounded-full size-6 p-2">
          <Settings className="size-4 text-white bg-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Subscription Plan</DialogTitle>
          <DialogDescription>
            Modify the plan details below. Changes will be saved when you click update.
          </DialogDescription>
        </DialogHeader>

        {!initialData ? (
          <div className="flex justify-center py-8">
            <Loader className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            {/* Name Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={initialData.name}
                onChange={(e) => setInitialData({...initialData, name: e.target.value})}
                className="col-span-3"
              />
            </div>

            {/* Price Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                value={initialData.price}
                onChange={(e) => setInitialData({
                  ...initialData,
                  price: Math.max(0, Number(e.target.value))
                })}
                className="col-span-3"
              />
            </div>

            {/* Duration Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration (Months)
              </Label>
              <Input
                id="duration"
                type="number"
                min="1"
                value={initialData.duration}
                onChange={(e) => setInitialData({
                  ...initialData,
                  duration: Math.max(1, Number(e.target.value))
                })}
                className="col-span-3"
              />
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <Label className="block">Features</Label>
              {initialData.features.map((feature, index) => (
                <div key={index} className="grid grid-cols-4 items-center gap-4">
                  <span className="text-right text-sm">Feature {index + 1}</span>
                  <Input
                    value={feature}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="col-span-3"
                    placeholder={`Enter feature ${index + 1}`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={addFeature}
                variant="outline"
                className="w-full mt-2"
              >
                Add Feature
              </Button>
            </div>

            <DialogFooter>
              <Button 
                type="submit" 
                disabled={loading}
                className="mt-4"
              >
                {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Update Plan"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}