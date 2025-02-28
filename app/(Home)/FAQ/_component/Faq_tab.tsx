import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { QueTask } from "./QueTab"



const faqData = {
  general: [
    { question: "What is your platform?", answer: "Our platform is a one-stop service for all your needs, providing access to various services, tools, and a vibrant community to connect, learn, and grow." },
    { question: "How do I sign up for an account?", answer: "You can easily sign up by clicking the “Sign Up” button on the homepage, entering your details, and following the prompts to create your account." },
    { question: "Can I use the platform without an account?", answer: "Some features are available without an account, but for full access to all tools and personalized features, an account is required." },
    { question: "How can I update my personal information?", answer: "To update your personal details, log into your account, go to the 'Settings' section, and edit your information." },
    { question: "Is my data secure on this platform?", answer: "Yes, we take your privacy seriously. Our platform uses state-of-the-art security measures to protect your personal data." },
  ],
  community: [
    { question: "How do I join the community?", answer: "To join the community, simply sign up for an account and choose to become a member of our community. You’ll gain access to discussions, forums, and events." },
    { question: "Can I create my own community group?", answer: "Yes! Once you're a member, you can create your own community group and invite others to join based on shared interests." },
    { question: "How do I participate in discussions?", answer: "After joining the community, you can participate in discussions by posting comments, asking questions, or replying to others' posts on the forum." },
    { question: "Are there any community guidelines?", answer: "Yes, we have a strict set of guidelines to maintain a friendly and respectful environment. Please review them before participating." },
    { question: "Can I report inappropriate behavior in the community?", answer: "Absolutely. If you encounter inappropriate behavior, please use the 'Report' button on the post or message to alert the moderators." },
  ],
  subscription: [
    { question: "What types of subscriptions do you offer?", answer: "We offer monthly, quarterly, and annual subscription plans that give you access to exclusive features and content." },
    { question: "How can I upgrade or downgrade my subscription?", answer: "To change your subscription plan, simply log into your account, go to 'Billing' settings, and choose the new plan you wish to switch to." },
    { question: "Do you offer a free trial?", answer: "Yes, we offer a 7-day free trial so you can explore premium features before committing to a paid plan." },
    { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription anytime through your account settings. You will still have access until the end of the billing cycle." },
    { question: "How do I get a receipt for my payment?", answer: "After any transaction, a receipt will be sent to your registered email. You can also download it from your account’s 'Billing' section." },
  ],
  services: [
    { question: "What services do you offer?", answer: "We offer a wide range of services including online courses, virtual consultations, digital tools, and access to exclusive content." },
    { question: "How do I book a service?", answer: "Simply browse the services page, choose the service you need, and click on 'Book Now' to schedule your session." },
    { question: "Can I get a refund if I'm not satisfied with a service?", answer: "Yes, we offer a refund policy within 30 days of booking a service if you’re not satisfied with the experience." },
    { question: "How do I provide feedback about a service?", answer: "After using a service, you’ll be prompted to leave feedback. You can also reach out to our support team for any specific comments or concerns." },
    { question: "Are the services available globally?", answer: "Most of our services are available globally, though certain ones may be limited to specific regions due to local regulations." },
  ]
};

export function Faq_Tab() {


  return (
    <Tabs defaultValue="General" className="w-full shadow-none">
      <TabsList className="grid w-full  lg:w-[40%] ml-0 grid-cols-4 gap-4">
        <TabsTrigger value="General" >
          <div className=" truncate  max-w-[100px]">General</div>
        </TabsTrigger>
        <TabsTrigger value="Community">
        <div className=" truncate  max-w-[100px]">Community</div>
        </TabsTrigger>
        <TabsTrigger value="Subscription">
        <div className=" truncate  max-w-[100px]">Subscription</div>
        </TabsTrigger>
        <TabsTrigger value="Services">
        <div className=" truncate  max-w-[100px]">Services</div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="General" className=" border-none shadow-none">
        <QueTask  data={faqData.general}/>
      </TabsContent>
      <TabsContent value="Community" className=" border-none shadow-none">
      <QueTask  data={faqData.community}/>
      </TabsContent>
      <TabsContent value="Subscription" className=" border-none shadow-none">
      <QueTask  data={faqData.subscription}/>
      </TabsContent>
      <TabsContent value="Services" className=" border-none shadow-none">
      <QueTask  data={faqData.services}/>
      </TabsContent>
    </Tabs>
  )
}
