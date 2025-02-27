// import React from 'react'

// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import Image from 'next/image';
// import { cn } from '@/lib/utils';

// interface ProjectAvatarProps {
//   image?: string;
//   name: string;
//   className?: string;
//   fallbackClassName?:string
// }

// export const IconAvatar = ({image, className, name ,fallbackClassName}:ProjectAvatarProps) => {
//   if (image) {
//     return(
//       <div className={
//         cn('size-5 relative rounded-md overflow-hidden', className,  )
//       }>
//         <Image
//         src={image} 
//         alt={name}
//         fill className='object-cover  '
//         />
//       </div>
//     )
//   }
//   return (
//     <Avatar className={
//       cn('size-5  rounded-md overflow-hidden', className,  )
//     }>
//       <AvatarFallback className={cn('text-white bg-primary font-semibold text-sm uppercase rounded-md ',
//       fallbackClassName,
//       )}>
//         {name[0]}
//       </AvatarFallback>
//     </Avatar>
//   )
// }


  

import React from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectAvatarProps {
  image?: string;
  name: string;
  className?: string;
  fallbackClassName?:string
}

const IconAvatar = ({image, className, name ,fallbackClassName}:ProjectAvatarProps) => {

    if (image) {
        return(
          <div className={
            cn(' size-12 lg:size-10 relative rounded-full overflow-hidden', className,  )
          }>
            <Image
            src={image} 
            alt={name}
            fill className='object-cover  '
            />
          </div>
        )
      }

  return (
    <Avatar className={
        cn('size-10  rounded-full overflow-hidden', className,  )
      }>
        <AvatarFallback className={cn('text-white bg-primary font-semibold text-sm uppercase rounded-md ',
        fallbackClassName,
        )}>
          {name[0]}
        </AvatarFallback>
      </Avatar>
    )
}

export default IconAvatar