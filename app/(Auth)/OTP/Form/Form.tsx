
// "use client"

// import { Button } from "@/components/ui/button"



// export function OTPFormInput() {


//   return (
//       <div className="flex flex-col items-center justify-center gap-2">

//             <h3>Confirm OTP</h3>
//             <p>A verification code has been sent to your mail</p>

//               <Button type="submit" variant='default' size='lg'><span style={{fontSize:'22px'}}>Sign In</span></Button>
//       </div>
//   )
// }


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/hooks/use-toast"

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
import Link from "next/link"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function OTPFormInput() {

  const { toast } = useToast()


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-[70%] md:w-[80%] md:mx-auto flex flex-col items-start md:justify-center lg:mx-0 mt-10 space-y-6 ">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="w-full ">
              <div className="w-full flex justify-center ">
              <FormLabel style={{fontSize:'22px', fontWeight:'700px'}}>Confirm OTP</FormLabel>
              </div>
              <FormDescription className=" text-black w-full flex md:justify-center lg:justify-start justify-start" style={{fontSize:'20px', fontWeight:'500px', fontFamily:'manrope'}}>
              A verification code has been sent to your mail
              </FormDescription>
              <FormControl >
                <InputOTP maxLength={6} {...field} >
                  <InputOTPGroup className=" w-[100%] m-auto md:w-[70%] lg:w-full md:mx-auto flex justify-between">
                    <InputOTPSlot index={0}  className="w-10 h-10 bg-[#D9D9D9]"/>
                    <InputOTPSlot index={1}  className="w-10 h-10 bg-[#D9D9D9]"/>
                    <InputOTPSlot index={2}  className="w-10 h-10 bg-[#D9D9D9]"/>
                    <InputOTPSlot index={3}  className="w-10 h-10 bg-[#D9D9D9]"/>
                    <InputOTPSlot index={4}  className="w-10 h-10 bg-[#D9D9D9]"/>
                    <InputOTPSlot index={5}  className="w-10 h-10 bg-[#D9D9D9]"/>
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
          <div className="w-full flex items-center justify-center">
            <Link href='/ResetPassword'>
          <Button type="submit" className="w-[250px] rounded-xl bg-primary">Verify</Button>
            </Link>
          </div>
    
      </form>
    </Form>
  )
}
