


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Checkbox } from "@/components/ui/checkbox"

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
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon, Mail, Timer } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { PaymentFormSchema } from "@/lib/validators/Payment.validator"
import { Separator } from "@/components/ui/separator"



export function PaymentForm({tier}:any) {

    const [showCCN, setShowCCN] = useState(false);
    const [showCVV, setShowCVV] = useState(false);

    const toggleCCNVisibility = () => {
        setShowCCN((prev) => !prev);
    };
    const toggleCVVisibility = () => {
        setShowCVV((prev) => !prev);
    };



    const form = useForm<z.infer<typeof PaymentFormSchema>>({
        resolver: zodResolver(PaymentFormSchema),
        // defaultValues:initialValues
      })
    
      const onSubmit = async (credentials: any) => {
        console.log(credentials); 
    
      };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-5">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel  className="text-[20px] font-normal">Email</FormLabel>
          <div className="flex items-center  border   rounded-md  px-2  relative w-full">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" placeholder="joe@gmail.com" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
              <div>
              <Mail className="w-4 h-4 text-gray-600 cursor-pointer   absolute  right-2 top-3"/>
              </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="CCN"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[20px] font-normal">Credit Card Number</FormLabel>
          <div className="flex items-center  border   rounded-md  px-2  relative">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" type={showCCN ? 'text' : 'password'}
                 placeholder="x x x x x x x x x x x x x x x x" {...field}
                 value={field.value || ''} 
                 onChange={field.onChange} 
                 />
              </FormControl>
              <div onClick={toggleCCNVisibility} className="cursor-pointer  absolute right-2">
            {showCCN ? (
              <EyeOffIcon className="h-4 w-4 text-gray-600" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-600" />
            )}
          </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />

   <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-between">
   <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem>
              <FormLabel  className="text-[20px] font-normal">Date</FormLabel>
          <div className="flex items-center  border   rounded-md  px-2">
          <FormControl className=" flex justify-center w-full">
                <Input className="border-none shadow-none h-[40px] w-[560px]"  type="date" {...field}
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
          name='CVV'
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[20px] font-normal">CVV</FormLabel>
          <div className="flex items-center  border   rounded-md  px-2  relative">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" type={showCVV ? 'text' : 'password'}
                 placeholder="x x x " {...field}
                 value={field.value || ''} 
                 onChange={field.onChange} 
                 />
              </FormControl>
              <div onClick={toggleCVVisibility} className="cursor-pointer  absolute right-2">
            {showCVV ? (
              <EyeOffIcon className="h-4 w-4 text-gray-600" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-600" />
            )}
          </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />
   </div>

   <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       I’ve a Referral Code
      </label>
    </div>


    <div className=" bg-[#FFFFFF] rounded-md p-4 flex flex-col items-start w-full shadow shadow-[#706A6A] gap-2">

        <div className=" flex items-center justify-between w-full">
            <span className=" text-[#706A6A] text-[15px] font-medium">Membership Fee( {tier})</span> <p className="text-[15px] font-bold">$90</p>
        </div>
        <div className=" flex items-center justify-between w-full">
        <span className=" text-[#706A6A] text-[15px] font-medium">Platform Fee</span> <p className="text-[15px] font-bold">$10</p>
        </div>

        <Separator className="w-full bg-[#706A6A]"/>

        <div className=" flex items-center justify-between w-full">
        <span className=" text-[#706A6A] text-[15px] font-medium">Total Amount</span> <p className="text-[15px] font-bold">$100</p>
        </div>
    </div>

        <Link href={`/Payment/${tier}/Status`}>
        <Button type="submit" variant='default' className=" rounded-md w-[70%] flex mt-[30px]  mx-auto  "><span style={{fontSize:'20px'}}>Make Payment</span></Button>
        </Link>

      </form>
    </Form>
  )
}
