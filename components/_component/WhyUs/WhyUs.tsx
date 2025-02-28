import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import WhyUsText from './WhyUsText'

const WhyUs = () => {
    const img = 'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=780&h=384&q=90&fit=crop&ar=16%3A10'

  return (
    <div className='flex items-center flex-col gap-2    px-5 md:px-20 py-10  w-full '>
        <HeaderText HeaderText='Why Choose Us?'/>
        <p className='text-[15px] lg:text-[18px]  text-center'>The Locals Connect is your trusted partner in fostering meaningful community relationships. Our curated directory features verified listings recommended by locals, empowering users to easily discover essential services while enhancing business visibility.<br/> Choose us for a seamless experience that promotes collaboration and growth.</p>
    

        <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 w-full mt-10'>
      
            <div   className="w-full h-[500px] rounded-xl bg-cover bg-center"   style={{ backgroundImage: `url(${img})`,  objectFit:'contain'}} >
            </div>

            <div className=' flex flex-col gap-4'>
                <WhyUsText headerText='Community Recommendations' icon='/why1.png' p='Community-driven recommendations are at the heart of Locals Connect, creating a supportive ecosystem where local insights matter. Our platform ensures that every business listed is not only verified but also recommended by community members, fostering trust and reliability. By leveraging the experiences of locals and expatriates, users can confidently discover services tailored to their needs, making informed choices that benefit both them and the businesses they support.'/>
                <WhyUsText headerText='Verified Listings' icon='/why2.png' p='Verified business and service listings are a cornerstone of the Locals Connect platform, ensuring that users can trust the services they find. Each business is rigorously vetted and must be recommended by existing community members before being listed. This process guarantees that only reputable businesses are featured, providing users with confidence in their choices. With detailed profiles that include contact information, ratings, and feedback, Locals Connect empowers users to make informed decisions while enhancing the visibility of quality local services.'/>
                <WhyUsText headerText='Friendly User Interface' icon='/why3.png' p='Designed with simplicity in mind, our intuitive layout allows users to quickly search for businesses and services, access detailed profiles, and connect seamlessly.'/>
               
            </div>

        </div>
   </div>
  )
}

export default WhyUs