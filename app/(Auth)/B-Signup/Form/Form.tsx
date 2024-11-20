
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"
import { Mail, TriangleAlert } from "lucide-react"
import { useState } from "react"
import { BSingupFormSchema } from "@/lib/validators/BSignup.validator"
import Image from "next/image"



export function BSignUpFormInput() {


    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    };
  


    const form = useForm<z.infer<typeof BSingupFormSchema>>({
        resolver: zodResolver(BSingupFormSchema),
        // defaultValues:initialValues
      })
    
      const onSubmit = async (credentials: any) => {
        console.log(credentials); 
    
      };

  return (

    

     <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-auto w-full flex-col gap-2  ">

      <FormField
          control={form.control}
          name="businessImg"
          render={({ field }) => (
            <FormItem>
    <div className="flex flex-col items-center">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="hidden" 
        id="file-input" 
        accept="image/*" 
      />
      <label htmlFor="file-input" className="cursor-pointer">
        <div className="w-[200px] h-[200px] bg-[#A3C8ED4D] m-auto flex items-center justify-center rounded-xl">
          {selectedImage ? (
            <Image 
              src={selectedImage} 
              alt="Uploaded Image" 
              width={200} 
              height={200} 
              className="rounded-xl object-cover" 
            />
          ) : (
            <Image 
              src="/addImg.png" 
              alt="Add Image" 
              width={40} 
              height={40} 
              className="bg-white p-1 rounded-full object-contain" 
            />
          )}
        </div>
      </label>
    </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
      <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Business Name</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" placeholder="John Doe" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
              <div>
              <Mail className="w-4 h-4 text-gray-600"/>
              </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="businessEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Business Email</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" placeholder="joe@gmail.com" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
              <div>
              <Mail className="w-4 h-4 text-gray-600"/>
              </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" grid  grid-cols-1 md:grid-cols-2 items-center w-full justify-between gap-4">
      

      <FormField
          control={form.control}
          name='businessCategory'
          render={({ field }) => (
            <FormItem >
                 <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Business Category</FormLabel>
              <FormControl>

              <div className="flex items-center  border rounded-[20px] px-2">
              <Select  {...field} >
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="Catering services" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
                </div>

            
        

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


      <FormField
          control={form.control}
          name="businessNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Phone Number</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <div className="">
            <span>+234</span>
            </div>
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" placeholder="90-3882-332" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />


        </div>

        <FormField
          control={form.control}
          name="businessAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Address</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" placeholder="No2. Aja lagos" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
              <div>
              <Mail className="w-4 h-4 text-gray-600"/>
              </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="businessDec"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Description</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <FormControl>
                <Textarea className="border-none shadow-none h-[40px] w-[560px]" placeholder="We sell Love" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="businessMember"
          render={({ field }) => (
            <FormItem >
                 <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Membership Tier</FormLabel>
              <FormControl>

              <div className="flex items-center  border rounded-[20px] px-2">
              <Select  {...field} >
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="Blue tier" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
                </div>

            
        

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2 w-full mb-5 mt-2">
          <TriangleAlert className="w-5 h-5 text-red-600 "/>
          <span className=" capitalize text-black font-thin" style={{fontSize:'15px', fontWeight:'500'}}>Membership tier offers your business more visibility</span>
        </div>
  
        <Button type="submit" variant='default' size='lg'><span style={{fontSize:'22px'}}>Register</span></Button>
      </form>
    </Form>
  )
}
