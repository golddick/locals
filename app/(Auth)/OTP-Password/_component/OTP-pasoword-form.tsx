"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { resendOtp, verifyPasswordOtp } from "@/app/api/auth/OTP"

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function OTPFormPasswordInput() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  })

  // Function to handle OTP password verification on form submit
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
  
    try {
      // Get the email from localStorage or other sources (like form state or context)
      const email = localStorage.getItem("userEmail");
  
      if (!email) {
        toast.error("Email not found. Please make sure you're logged in or provide your email.");
        return;
      }
  
      // Call the verifyPasswordOtp API with both email and OTP
      const response = await verifyPasswordOtp(email, data.otp);
  
      // Handle success (show success toast or handle redirection)
      toast.success("OTP Verified Successfully!");
  
      // Navigate to a protected page or redirect after success
      router.push('/SetPassword'); // Adjust the redirect to your needs (for example, redirect to a password reset page)
  
    } catch (error) {
      toast.error("OTP Verification Failed! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  

  // Function to resend OTP
  async function resendOTP() {
    setIsResending(true)

    try {
      // Call the resend OTP API
      const email = localStorage.getItem("userEmail");
      if (!email) {
        toast.error('No Email ')
        router.push('/ResendOTP');
        return null
      }
      const response = await resendOtp(email)

      // Show a success message after resending OTP
      toast.success("A new OTP has been sent to your email.")
    } catch (error) {
      toast.error("Failed to resend OTP. Please try again.")
    } finally {
      setIsResending(false)
    }
  }

  return (
    <>
    
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full lg:w-[70%] md:w-[80%] md:mx-auto flex flex-col items-start md:justify-center lg:mx-0 mt-10 space-y-6"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="w-[100%] m-auto md:w-[70%] lg:w-full md:mx-auto flex justify-between">
                    <InputOTPSlot index={0} className="w-10 h-10 bg-[#D9D9D9]" />
                    <InputOTPSlot index={1} className="w-10 h-10 bg-[#D9D9D9]" />
                    <InputOTPSlot index={2} className="w-10 h-10 bg-[#D9D9D9]" />
                    <InputOTPSlot index={3} className="w-10 h-10 bg-[#D9D9D9]" />
                    <InputOTPSlot index={4} className="w-10 h-10 bg-[#D9D9D9]" />
                    <InputOTPSlot index={5} className="w-10 h-10 bg-[#D9D9D9]" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex items-center justify-center">
          <Button
            type="submit"
            className="w-[250px] rounded-xl bg-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </div>

       
      </form>
    </Form>

    <div className=" w-[200px]">
    <div className="w-full flex items-center justify-center mt-4">
          <Button
            onClick={resendOTP}
            className="w-[250px] rounded-xl bg-secondary text-primary"
            disabled={isResending}
          >
            {isResending ? "Resending..." : "Resend OTP"}
          </Button>
        </div>
    </div>
    </>
  )
}
