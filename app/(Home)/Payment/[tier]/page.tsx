'use client'
import { useParams } from 'next/navigation';
import { PaymentForm } from './_component/PaymentForm';
import FormHeader from '@/app/(Auth)/_component/FormHeader/FormHeader';
import TierDetails from './_component/TierDetails';


const page = () => {
    const { tier } = useParams(); 
    console.log(tier)
  return (
    <div className='grid  grid-cols-1 gap-4 md:grid-cols-2 w-full h-full lg:gap-6   px-10 lg:px-20 py-10  mt-10'>
    <div  className=' w-full lg:w-[90%] mx-auto md:w-full' >
    <FormHeader HeaderText='Business Subscription' PText='Subscribe to our membership tiers and enjoy seamless business transaction and services..' icon='/emojiHand.png'/>
    <PaymentForm tier={tier}/>
    </div>
    <div className='hidden md:block'>
      <TierDetails/>
    </div>
  </div>
  )
}

export default page