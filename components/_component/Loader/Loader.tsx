import { LoaderCircle } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className=' flex w-full h-[500px] items-center justify-center'>
      <LoaderCircle className=' size-6 animate-spin'/>
    </div>
  )
}

export default Loader
