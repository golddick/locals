import React from 'react'

const HeaderText = () => {
  return (
    <div className='flex flex-col gap-4 items-start '>
        <div>
            <h1   className=' text-[25px]  lg:text-[35px]   font-bold' >Connecting <span className=' text-primary'>Locals</span> and <span className=' text-primary'>Businesses</span>: </h1>
            <h2  className=' text-[20px] md:font-semibold  lg:text-[30px]  '>Driving a Sustainable Community for <span className=' text-primary'> Business Solutions</span></h2>
        </div>
        <div>
            <span className=' text-[15px]  lg:text-[18px] md:max-h-[300px]  '  >At Locals Connect, we are dedicated to transforming how communities interact with businesses.<br/> Our platform serves as a dynamic hub where local members, expatriates,
                 and businesses come together to create a thriving community.<br/> By providing an intuitive business directory, we empower users to discover and connect with the services they need while enabling businesses to reach their target audience effectively. 
                 <br/> By joining The Locals Connect, businesses gain unparalleled visibility and access to a supportive community eager to engage with them. <br/>
                Experience the benefits of being part of a thriving network that champions collaboration, growth, and success—enlist today and elevate your business presence!</span>
        </div>
    </div>
  )
}

export default HeaderText