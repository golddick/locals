import HeaderCard from "@/components/_component/HeaderCard/HeaderCard";
import PriceModel from "@/components/_component/PriceModel/PriceModel";
import Testimonials from "@/components/_component/Testimonial/Testimonials";
import TopCategory from "@/components/_component/TopCategory/TopCategory";
import VerifiedBusiness from "@/components/_component/VerifiedBusiness/VerifiedBusiness";
import WhyUs from "@/components/_component/WhyUs/WhyUs";
import Image from "next/image";
import { getUserInfo } from "../api/auth/user";

export default async function Home() {

  const user = await getUserInfo();

  console.log(user,'user user')
  return (
    <main>
      <HeaderCard/>
      <TopCategory/>
      <WhyUs/>
      <VerifiedBusiness/>
      <PriceModel/>
      {/* <Testimonials/> */}
    </main>
  );
}
