import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryRow = () => {

    const Img = 'https://github.com/shadcn.png'
    const img = 'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=780&h=384&q=90&fit=crop&ar=16%3A10'

  return (
    <div className=' flex  gap-4 '>
        <CategoryCard bg={img} BTNText='Home Services' />
        <CategoryCard bg={Img} BTNText='Spas & Wellness Centre' />
        <CategoryCard bg={img} BTNText='Legal Services' />
        <CategoryCard bg={Img} BTNText='Catering Services' />
        <CategoryCard bg={Img} BTNText='Home Services' />
       
        
    </div>
  )
}

export default CategoryRow