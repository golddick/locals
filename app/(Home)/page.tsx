import HeaderCard from "@/components/_component/HeaderCard/HeaderCard";
import PriceModel from "@/components/_component/PriceModel/PriceModel";
import Testimonials from "@/components/_component/Testimonial/Testimonials";
import TopCategory from "@/components/_component/TopCategory/TopCategory";
import VerifiedBusiness from "@/components/_component/VerifiedBusiness/VerifiedBusiness";
import WhyUs from "@/components/_component/WhyUs/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeaderCard/>
      <TopCategory/>
      <WhyUs/>
      <VerifiedBusiness/>
      <PriceModel/>
      <Testimonials/>
    </main>
  );
}
