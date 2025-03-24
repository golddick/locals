

// "use client"

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Check, EyeIcon, EyeOffIcon, Mail, Plus } from "lucide-react";
// import { useState, useTransition } from "react";
// import { SingupFormSchema } from "@/lib/validators/Signup.validator";
// import { toast } from "sonner";
// import SignupApi from "@/app/api/auth/Signup";


// export function SignupFormInput() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [isPending, startTransition] = useTransition();  // Using startTransition for non-urgent updates

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const form = useForm<z.infer<typeof SingupFormSchema>>({
//     resolver: zodResolver(SingupFormSchema),
//     // defaultValues: initialValues
//   });

//   const onSubmit = async (credentials: any) => {
//     try {
//       setLoading(true);
//       setError(null); // Reset error message

//       // Using startTransition for non-urgent state updates
//       startTransition(async () => {
//         try {
//           await SignupApi(credentials);
          
//           // Success: Show toast
//           toast.success("Signup successful!");

//         } catch (err: any) {
//           // Error: Show toast
//           toast.error("Signup failed! " + (err.message || "Please try again."));
//         } finally {
//           setLoading(false);
//         }
//       });

//     } catch (err: any) {
//       // Handle unexpected error
//       setError(err.message || "Something went wrong");
//       setLoading(false);
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//         <FormField
//           control={form.control}
//           name="displayImg"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <div className="w-[50px] h-[50px] rounded-full bg-slate-500 relative">
//                   <Plus className="w-4 h-4 rounded-full text-white bg-primary absolute bottom-0 right-0" />
//                 </div>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="userName"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel style={{ fontSize: "20px", fontWeight: "700", fontFamily: "manrope" }}>
//                 Username
//               </FormLabel>
//               <div className="flex items-center border rounded-[20px] px-2 justify-between">
//                 <FormControl>
//                   <Input
//                     className="border-none shadow-none h-[40px] w-[560px]"
//                     placeholder="Temidayo Samuel"
//                     {...field}
//                     value={field.value || ""}
//                     onChange={field.onChange}
//                   />
//                 </FormControl>
//                 <div>
//                   <Check className="w-4 h-4 rounded-full text-white bg-[#2CCA33] p-[1px]" />
//                 </div>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel style={{ fontSize: "20px", fontWeight: "700", fontFamily: "manrope" }}>
//                 Email
//               </FormLabel>
//               <div className="flex items-center border rounded-[20px] px-2 justify-between">
//                 <FormControl>
//                   <Input
//                     className="border-none shadow-none h-[40px] w-[560px]"
//                     placeholder="joe@gmail.com"
//                     {...field}
//                     value={field.value || ""}
//                     onChange={field.onChange}
//                   />
//                 </FormControl>
//                 <div>
//                   <Mail className="w-4 h-4 text-gray-600" />
//                 </div>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel style={{ fontSize: "20px", fontWeight: "700", fontFamily: "manrope" }}>
//                 Password
//               </FormLabel>
//               <div className="flex items-center border rounded-[20px] px-2  justify-between">
//                 <FormControl>
//                   <Input
//                     className="border-none shadow-none h-[40px] w-[560px]"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="At least 8 characters"
//                     {...field}
//                     value={field.value || ""}
//                     onChange={field.onChange}
//                   />
//                 </FormControl>
//                 <div onClick={togglePasswordVisibility} className="cursor-pointer mr-0">
//                   {showPassword ? (
//                     <EyeOffIcon className="h-4 w-4 text-gray-600" />
//                   ) : (
//                     <EyeIcon className="h-4 w-4 text-gray-600" />
//                   )}
//                 </div>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {error && <p className="text-red-600">{error}</p>} 

//         <Button type="submit" variant="default" size="lg" disabled={loading || isPending}>
//           <span style={{ fontSize: "22px" }}>
//             {loading || isPending ? "Signing Up..." : "Sign Up"}
//           </span>
//         </Button>
//       </form>
//     </Form>
//   );
// }




"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Check, EyeIcon, EyeOffIcon, Mail, Plus, User, Workflow } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import SignupApi from "@/app/api/auth/Signup";
import { SingupFormSchema } from "@/lib/validators/Signup.validator";
import { useRouter } from "next/navigation";



export function SignupFormInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition(); 
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const form = useForm<z.infer<typeof SingupFormSchema>>({
    resolver: zodResolver(SingupFormSchema),
  });

  const onSubmit = async (credentials: any) => {
    try {
      setLoading(true);
      setError(null); // Reset error message

     // Remove confirmPassword before sending to the backend
     const { confirmPassword, firstName, lastName, ...signupData } = credentials;

     // Map the frontend field names to backend expected field names
     const payload = {
       ...signupData,
       firstname: firstName,  
       lastname: lastName,    
     };

      // Using startTransition for non-urgent state updates
      startTransition(async () => {
        try {
          await SignupApi(payload);
          
          // Success: Show toast
          toast.success("Signup successful!");
          router.push('/OTP')
        } catch (err: any) {
          // Error: Show toast
          toast.error("Signup failed! " + (err.message || "Please try again."));
        } finally {
          setLoading(false);
        }
      });

    } catch (err: any) {
      // Handle unexpected error
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
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
                <div className="w-[50px] h-[50px] rounded-full bg-slate-500 relative">
                  <Plus className="w-4 h-4 rounded-full text-white bg-primary absolute bottom-0 right-0" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[15px] lg:text-[20px]">
                First Name
              </FormLabel>
              <div className="flex items-center border rounded-[20px] px-2 justify-between">
                <FormControl>
                  <Input
                    className="border-none shadow-none h-[40px] w-[560px]"
                    placeholder="john"
                    {...field}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* Last Name */}
         <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[15px] lg:text-[20px]">
                Last Name
              </FormLabel>
              <div className="flex items-center border rounded-[20px] px-2 justify-between">
              <FormControl>
                <Input
                  className="border-none shadow-none h-[40px] w-[560px]"
                  placeholder="joe"
                  {...field}
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <div>
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

      
 

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                     {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" text-[15px] lg:text-[20px]">
                              Email
                            </FormLabel>
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

                          {/* Occupation */}
                          <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" text-[15px] lg:text-[20px]">
                              Occupation
                            </FormLabel>
                              <div className="flex items-center border rounded-[20px] px-2 justify-between">
                              <FormControl>
                                <Input
                                  className="border-none shadow-none h-[40px] w-[560px]"
                                  placeholder="Your Occupation"
                                  {...field}
                                  value={field.value || ""}
                                  onChange={field.onChange}
                                />
                              </FormControl>
                              <div>
                                <Workflow className="w-4 h-4 text-gray-600" />
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

        </div>

   


        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

             {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[15px] lg:text-[20px]">
                Password
              </FormLabel>
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
                <div onClick={togglePasswordVisibility} className="cursor-pointer mr-0">
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

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-[15px] lg:text-[20px]">
                Confirm Password
              </FormLabel>
              <div className="flex items-center border rounded-[20px] px-2 justify-between">
                <FormControl>
                  <Input
                    className="border-none shadow-none h-[40px] w-[560px]"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...field}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer mr-0">
                  {showConfirmPassword ? (
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

      

    

        {error && <p className="text-red-600">{error}</p>} 

        <Button type="submit" variant="default" size="lg" disabled={loading || isPending}>
          <span style={{ fontSize: "22px" }}>
            {loading || isPending ? "Signing Up..." : "Sign Up"}
          </span>
        </Button>
      </form>
    </Form>
  );
}

