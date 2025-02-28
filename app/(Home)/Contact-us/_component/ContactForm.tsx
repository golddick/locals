// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ContactForm


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
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  phoneNumber: z.number().min(2, {
    message: "Number must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
})

export function ContactForm() {
  

     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>

        

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-[50px] bg-[#FFFFFF] p-5 md:p-10">
            <div className=" flex flex-col gap-2 items-start">
            <h1 className=" font-bold text-[30px]">GET IN TOUCH</h1>
            <p className=" text-[#282828CC] font-semibold">24/7 round the clock response</p>
            </div>
      <div className=" grid grid-cols-2 items-center w-full justify-between gap-5">
           
      <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} className=" rounded-2xl  w-full p-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field}  className=" rounded-2xl  w-full p-2"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Doe@gmail.com" {...field} className=" rounded-2xl  w-full p-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number</FormLabel>
              <FormControl>
                <Input placeholder="+2345789933" {...field} className=" rounded-2xl  w-full p-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Add you message " {...field} className=" rounded-2xl  w-full p-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <div className=" flex justify-center">
       <Button type="submit" className="m-auto w-[80%] rounded-2xl">Submit</Button>
       </div>

            <p className=" text-center">By contacting us, you agree to our<br/> <b className=" cursor-pointer underline"> Terms of service</b> {' '}  and  {' '} <b className=" cursor-pointer underline"> Privacy Policy</b></p>
      </form>
    </Form>
  )
}
