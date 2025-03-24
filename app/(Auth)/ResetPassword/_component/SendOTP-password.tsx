"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {  resetpasswordOTP } from "@/app/api/auth/OTP"
import { useRouter } from "next/navigation"

// Define the form schema
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }), 
})

export function SendPasswordOTP() {
    const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "", 
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const email = values.email
  
      // Call the resend OTP API
      const response = await resetpasswordOTP(email);
  
      if (!response) {
        throw new Error('Failed to resend OTP');
      }
  
      // const token = response.data.token; 

      console.log(response)
  
      // Save the token and email to localStorage
      localStorage.setItem("userEmail", email);
      // localStorage.setItem("authToken", token);
  
      // Show success toast
      toast.success("A new OTP has been sent to your email.");
      router.push('/OTP-Password')
    } catch (error) {
      // Show error toast
      toast.error("Failed to resend OTP. Please try again.");
    }
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send OTP</Button>
      </form>
    </Form>
  )
}