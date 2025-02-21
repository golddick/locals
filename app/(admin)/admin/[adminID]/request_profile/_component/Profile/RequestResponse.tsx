
import React from 'react'
import { ResponseMessages } from './ResponseMessages'
import { InputForm } from './InputForm'

export const RequestResponse = () => {

  const messages = [
    { text: 'We can help! What’s your availability for a visit?', sender: true },
    { text: 'Tomorrow morning works best for me. Can you come then?', sender: false },
    { text: 'Sure! We’ll send a plumber tomorrow at 9 AM. Estimate: $150-$250.', sender: true },
    { text: 'Perfect, see you tomorrow!', sender: false },
  ];

  return (
    <div className=' flex flex-col items-start justify-start w-full gap-6'>
         <h3 className=' text-[13px] font-medium text-[#706A6A]'>Request Response</h3>

         <div className=' flex flex-col w-[90%] gap-4 items-end m-auto'> 

        <ResponseMessages messages={messages}/>
        <InputForm/>
         </div>
        
    </div>
  )
}
