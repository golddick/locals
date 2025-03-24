


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
import { EyeIcon, EyeOffIcon, Loader, Mail } from "lucide-react"
import { useState } from "react"
import { loginFormSchema } from "@/lib/validators/Login.validator"
import Link from "next/link"
import LoginApi from "@/app/api/auth/Login"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { resetpasswordOTP } from "@/app/api/auth/OTP"

export function LoginFormInput() {
  const [showPassword, setShowPassword] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)  // Loader state
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (credentials: any) => {
    setIsSubmitting(true)  // Set loader to true on submit
    try {
      // Call the Login API
      const response = await LoginApi(credentials)
      const { data } = response

      const token = response.data.token;


      localStorage.setItem("authToken", token)
      localStorage.setItem("userInfo", JSON.stringify(data))

      // Show success message
      toast.success("Login successful!")

      router.push('/')
    } catch (error) {
      toast.error("Login failed. Please check your credentials.")
    } finally {
      setIsSubmitting(false)  
    }
  }

  const resetPassword = async () => {
    setIsResending(true);

    try {
      // Retrieve userInfo from localStorage
      const userInfo = localStorage.getItem("userInfo");

      if (userInfo) {
        const parsedUserInfo = JSON.parse(userInfo);
        const email = parsedUserInfo.email;

        // If email exists, send OTP
        if (email) {
          const response = await resetpasswordOTP(email);

          if (response?.success) {
            toast.success("A new OTP has been sent to your email.");
            router.push('/OTP-Password');
          } else {
            toast.error("Failed to resend OTP. Please try again.");
          }
        } else {
          toast.error('Email not found in userInfo.');
          router.push('/ResetPassword');
        }
      } else {
        toast.error('No user information found. Please enter your email.');
        router.push('/ResetPassword');
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsResending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel style={{ fontSize: "20px", fontWeight: "700", fontFamily: "manrope" }}>Email</FormLabel>
              <div className="flex items-center border rounded-[20px] px-2 justify-between">
                <FormControl>
                  <Input
                    className="border-none shadow-none h-[40px] w-[560px]"
                    placeholder="joe@gmail.com"
                    {...field}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <Mail className="w-4 h-4 text-gray-600" />
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
              <FormLabel style={{ fontSize: "20px", fontWeight: "700", fontFamily: "manrope" }}>Password</FormLabel>
              <div className="flex items-center border rounded-[20px] px-2 justify-between">
                <FormControl>
                  <Input
                    className="border-none shadow-none h-[40px] w-[560px]"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    {...field}
                    value={field.value || ""}
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

        <div className="flex w-full items-center justify-end">
          <Button
            className="capitalize text-primary underline "
            variant={'secondary'}
            onClick={resetPassword}
          >
            Forgot password?
          </Button>
        </div>

        {/* Loader Button or Button with loader */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          disabled={isSubmitting}  // Disable button during submission
          className="relative"
        >
          {isSubmitting ? (
            <span className="absolute inset-0 flex justify-center items-center">
              <Loader className="w-5 h-5 border-4 border-t-4 border-gray-300 rounded-full animate-spin"/>
            </span>
          ) : (
            <span style={{ fontSize: "22px" }}>Sign In</span>
          )}
        </Button>
      </form>
    </Form>
  )
}
