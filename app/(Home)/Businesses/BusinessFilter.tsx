'use client'

import { getAllCategory } from "@/app/api/get/categorie";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CategoryType } from "@/type/business_type";
import { useEffect, useState } from "react";

export function BusinessFilter() {

  const [categories, setCategories] = useState<CategoryType[]> ([])
  const [error, setError] = useState<string>()

    // Fetch all categories
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const data = await getAllCategory();
          setCategories(data.data); 
        } catch (err) {
          setError('Failed to fetch categories');
        }
      };
  
      fetchCategories();
    }, []);

  return (
    <div className=" mt-10 flex flex-col gap-10">

     <div>
     <div className=" flex flex-col gap-2  items-start mb-2">
     <h1 className=" text-[20px] font-semibold">Filters</h1>
     <h4 className=" text-[#706A6A] font-normal text-[15px]">Business Categories</h4>
     </div>

    <RadioGroup
         defaultValue="all"
        >
          {/* "All" option */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="r0" />
            <Label htmlFor="r0">All Categories</Label>
          </div>

          {/* Dynamic category options */}
          {categories.map((category) => (
            <div key={category._id} className="flex items-center space-x-2">
              <RadioGroupItem value={category._id} id={`r${category._id}`} />
              <Label htmlFor={`r${category._id}`}>{category.name}</Label>
            </div>
          ))}
        </RadioGroup>

     </div>


    </div>
  )
}
