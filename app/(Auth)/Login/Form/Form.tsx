// import React from 'react'

// const Form = () => {
//   return (
//     <div >
        
//     </div>
//   )
// }

// export default Form

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
import { loginFormSchema } from "@/lib/validators/Login.validator"
import { EyeIcon, EyeOffIcon, Mail } from "lucide-react"
import { useState } from "react"
import Link from "next/link"



export function LoginFormInput() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };



    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        // defaultValues:initialValues
      })
    
      const onSubmit = async (credentials: any) => {
        console.log(credentials); 
    
      };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
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
        <div className="flex w-full items-center justify-end ">
          <Link href='/OTP'>
            <span className=" capitalize text-primary underline " style={{fontSize:'20px', fontWeight:'500',  lineHeight:'27px'}} >forget password?</span>
          </Link>
        </div>
        <Link href='/'>
        <Button type="submit" variant='default' size='lg'><span style={{fontSize:'22px'}}>Sign In</span></Button>
        </Link>
      </form>
    </Form>
  )
}
