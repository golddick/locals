
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
import { EyeIcon, EyeOffIcon, Mail } from "lucide-react"
import { useState } from "react"
import { ResetPasswordFormSchema } from "@/lib/validators/ResetPassword.validator"



export function ResetFormInput() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };



    const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
        resolver: zodResolver(ResetPasswordFormSchema),
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

        <FormField
          control={form.control}
          name="ConfirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel  style={{fontSize:'20px', fontWeight:'700', fontFamily:'manrope'}}>Confirm Password</FormLabel>
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
        <Button type="submit" variant='default' size='lg'><span style={{fontSize:'22px'}}>Reset Password</span></Button>
      </form>
    </Form>
  )
}
