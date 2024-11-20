import React from 'react'
import PriceCard from './PriceCard'

const PriceRow = () => {
    const PriceInfo = [
        {
            id: 1,
            name: "Blue Tier",
            amount: 25,
            features: [
                'Basic business listing', 
                'Limited support for inquiries',
                'Access to general updates and Newsletter',
                'Community engagement'
            ]
        },
        {
            id: 2,
            name: "Silver Tier",
            amount: 50,
            features: [
                'Business listing with enhanced visibility', 
                'Priority support for inquiries', 
                'Access to analytics dashboard'
            ]
        },
        {
            id: 3,
            name: "Gold Tier",
            amount: 75,
            features: [
                'Premium business listing with top placement', 
                '24/7 support for inquiries', 
                'Advanced analytics dashboard', 
                'Marketing consultation'
            ]
        },
        {
            id: 4,
            name: "Platinum Tier",
            amount: 100,
            features: [
                'Exclusive business listing with full customization', 
                'Dedicated account manager', 
                'Priority 24/7 support', 
                'Full marketing strategy and consultation', 
                'Advanced reporting and analytics'
            ]
        }
    ];
    
  return (
    <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between'>
       {PriceInfo.map((price) => (
        <PriceCard key={price.id} name={price.name} amount={price.amount} features={price.features} />
      ))}
    </div>
  )
}

export default PriceRow