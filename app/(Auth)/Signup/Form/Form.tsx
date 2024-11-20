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
import { Input } from "@/components/ui/input"
import { Check, EyeIcon, EyeOffIcon, Mail, Plus } from "lucide-react"
import { useState } from "react"
import { SingupFormSchema } from "@/lib/validators/Signup.validator"
import Image from "next/image"



export function SignupFormInput() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };



    const form = useForm<z.infer<typeof SingupFormSchema>>({
        resolver: zodResolver(SingupFormSchema),
        // defaultValues:initialValues
      })
    
      const onSubmit = async (credentials: any) => {
        console.log(credentials); 
    
      };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

      <FormField
          control={form.control}
          name="displayImg"
          render={({ field }) => (
            <FormItem>
          <FormControl>

          {/* <Input className="border-none shadow-none h-[50px] w-[560px] rounded-full"    type="file" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                /> */}
               
                <div className=" w-[50px]  h-[50px] rounded-full  bg-slate-500 relative">
              

                    <Plus className="w-4 h-4 rounded-full text-white bg-primary absolute bottom-0 right-0"/>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Username</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" placeholder="Temidayo Samuel" {...field}
                   value={field.value || ''} 
                   onChange={field.onChange} 
                />
              </FormControl>
              <div>
                <Check className="w-4 h-4 rounded-full text-white bg-[#2CCA33] p-[1px]"/>
              </div>
          </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Email</FormLabel>
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

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Password</FormLabel>
          <div className="flex items-center  border rounded-[20px] px-2">
          <FormControl>
                <Input className="border-none shadow-none h-[40px] w-[560px]" type={showPassword ? 'text' : 'password'}
                 placeholder="At least 8 character" {...field}
                 value={field.value || ''} 
                 onChange={field.onChange} 
                 />
              </FormControl>
              <div onClick={togglePasswordVisibility} className="cursor-pointer ml-2">
            {showPassword ? (
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
        <Button type="submit" variant='default' size='lg'><span style={{fontSize:'22px'}}>Sign Up</span></Button>
      </form>
    </Form>
  )
}
