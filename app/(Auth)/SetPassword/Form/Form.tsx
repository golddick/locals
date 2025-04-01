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
import { EyeIcon, EyeOffIcon, Mail } from "lucide-react"
import { useState } from "react"
import { ResetPasswordFormSchema } from "@/lib/validators/ResetPassword.validator"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { resetPassword } from "@/app/api/auth/reset_password"

export function ResetFormInput() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
        resolver: zodResolver(ResetPasswordFormSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })
    
    const onSubmit = async (values: z.infer<typeof ResetPasswordFormSchema>) => {
        setIsLoading(true);
        try {
            // Validate that passwords match
            if (values.password !== values.confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            const result = await resetPassword({
                email: values.email,
                password: values.password
            });

            if (!result.success) {
                throw new Error(result.message || "Failed to reset password");
            }

            toast.success(result.message || "Password has been reset successfully");
            
            // Redirect to login page
            router.push('/Login');
        } catch (error: any) {
            toast.error(error.message || "Failed to reset password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-bold font-manrope">Email</FormLabel>
                            <div className="flex items-center border rounded-[20px] px-2">
                                
                                <FormControl>
                                    <Input 
                                        className="border-none shadow-none h-10 w-full" 
                                        type="email"
                                        placeholder="Enter your email" 
                                        {...field}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <Mail className="h-4 w-4 text-gray-600 mr-2" />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password Field */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-bold font-manrope">New Password</FormLabel>
                            <div className="flex items-center border rounded-[20px] px-2">
                                <FormControl>
                                    <Input 
                                        className="border-none shadow-none h-10 w-full" 
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="At least 8 characters" 
                                        {...field}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <button 
                                    type="button"
                                    onClick={togglePasswordVisibility} 
                                    className="cursor-pointer ml-2"
                                    disabled={isLoading}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-4 w-4 text-gray-600" />
                                    ) : (
                                        <EyeIcon className="h-4 w-4 text-gray-600" />
                                    )}
                                </button>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Confirm Password Field */}
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-bold font-manrope">Confirm Password</FormLabel>
                            <div className="flex items-center border rounded-[20px] px-2">
                                <FormControl>
                                    <Input 
                                        className="border-none shadow-none h-10 w-full" 
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Confirm your password" 
                                        {...field}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <button 
                                    type="button"
                                    onClick={togglePasswordVisibility} 
                                    className="cursor-pointer ml-2"
                                    disabled={isLoading}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-4 w-4 text-gray-600" />
                                    ) : (
                                        <EyeIcon className="h-4 w-4 text-gray-600" />
                                    )}
                                </button>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button 
                    type="submit" 
                    variant='default' 
                    size='lg'
                    disabled={isLoading}
                    className="w-full"
                >
                    {isLoading ? (
                        <span className="text-xl">Processing...</span>
                    ) : (
                        <span className="text-xl">Reset Password</span>
                    )}
                </Button>
            </form>
        </Form>
    )
}