// import Image from 'next/image'
// import React from 'react'

// const SImg = () => {
//   return (

//     <div className='w-[80%] m-auto  md:h-[70%]  lg:h-[80%] relative hidden md:block   bg-red-600'>

      
//     <Image src='/sImg.png' alt='logo' width={700} height={100} className=' absolute  w-[500px] h-[500px]  z-20 bottom-0 object-contain '/>
//     <Image src='/sframe.png' alt='logo'  width={700} height={100} className=' object-fill w-[500px] h-[300px]  absolute bottom-0 '/>

//     </div>
//   )
// }

// export default SImg

import Image from 'next/image'
import React from 'react'

const SImg = () => {
  return (
    <div className='w-[80%] h-full   hidden lg:flex mx-auto justify-center '>

      <div className='  relative w-full h-[90%] md:h-full lg:h-[90%] flex justify-center items-center '>

         <Image src='/sImg.png' alt='logo' fill className=' absolute   z-20 bottom-0 object-contain '/>
        <Image src='/sframe.png' alt='logo'  width={700} height={100} className=' object-fill  absolute bottom-0  mx-auto'/>
        </div>
    </div>
  )
}

export default SImg