import React from 'react'
import ImgGallery from './_component/ImgGallary'
import Details from './_component/Details';


const page = () => {
    
    const BusinessInfo =
        {
            id:1,
            name:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation. Our catering services cater to a wide range of events, from intimate gatherings to grand celebrations. Each dish is crafted by our skilled chefs, ensuring a unique culinary experience that reflects your vision. We prioritize using locally sourced ingredients to enhance flavor and quality. Trust us to deliver not just food, but a memorable dining experience that delights your guests..',
            images:[
                '/bs.png',
                '/frameGuy.png',
                '/bs.png',
        
              ],
            categories:['Cuisines',  'Catering',  'Fine Dining'],
            Review:300,
            Address:'1A,Adeola Alakija Street, Victoria Island, Lagos.',
            Contact:'+2348012345678'
        }

        console.log(BusinessInfo)


  return (
    <div className='grid  grid-cols-1 gap-4 md:grid-cols-2 w-full h-full lg:gap-6   px-10 lg:px-20 py-10  '>
            <div>
               <Details name={BusinessInfo.name} des={BusinessInfo.bio} categories={BusinessInfo.categories} Review={BusinessInfo.Review} Address={BusinessInfo.Address}  Contact={BusinessInfo.Contact} />
            </div>

            <div>
            <ImgGallery imgUrls={BusinessInfo.images }/>
            </div>
    </div>
  )
}

export default page