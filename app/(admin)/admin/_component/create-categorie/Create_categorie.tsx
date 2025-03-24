"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { createCategory } from "@/app/api/post/Category";

export function CreateCategorie() {
  const [categoryName, setCategoryName] = useState(""); // State for the category name
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  // Function to handle form submission
  const handleCreateCategory = async () => {
    if (!categoryName.trim()) {
      toast.error("Category name cannot be empty");
      return;
    }

    setIsLoading(true);

    try {
      // Call the createCategory utility function
      const data = await createCategory(categoryName);

      // Display success message with the custom description
      toast.success(`Category created successfully!`);
      setCategoryName(""); // Clear the input field
    } catch (error) {
      console.error("Error creating category:", error);
      toast.error("Failed to create category");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <div className="flex items-center justify-between w-full p-2">
        <h1>Business Categories</h1>
        <DialogTrigger asChild>
          <Button variant="outline">Create</Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Business Category</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="Create" className="sr-only">
              Category
            </Label>
            <Input
              id="Create"
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={handleCreateCategory}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : <Plus />}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}