

'use client';

import React, { useEffect, useState } from 'react';
import BusinessCard from './BusinessCard';
import { Button } from '@/components/ui/button';
import { getAllBusinesses } from '@/app/api/get/businesses';
import { BusinessType } from '@/type/business_type';
import Loader from '../Loader/Loader';
import LoaderCircle from '../Loader/Loader';

const BusinessRow = () => {
  const [businesses, setBusinesses] = useState<BusinessType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1); 
  const [limit, setLimit] = useState(10); 

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await getAllBusinesses(page, limit);
  
        if (response && response.status === 'success' && Array.isArray(response.data)) {
          setBusinesses(response.data); 
        } else {
          throw new Error('Invalid response structure');
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError(String(err)); 
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchBusinesses();
  }, [page, limit]);


  const handlePageChange = (newPage: number) => {
    setPage(newPage); 
  };

  if (loading) return <LoaderCircle />;

  if (error) return <div className=' text-red-600'>Error: {error}</div>;

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between gap-4 w-full">
        { businesses.map((info) => (
          <BusinessCard
            key={info._id}
            name={info.name}
            bio={info.description}
            img={info.profileUrl[0] || '/LocalLogo.png'}
            id={info._id}
            ratings={info.ratings}
          />
        ))}
      </div>

      <div className="w-full flex items-end justify-end gap-2">
        {/* Pagination buttons */}
        {[1, 2, 3].map((pageNumber) => (
          <Button
            key={pageNumber}
            size="icon"
            className={`rounded-full w-4 h-4 text-[12px] ${
              page === pageNumber
                ? 'bg-primary text-white'
                : 'bg-transparent text-primary hover:text-white'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BusinessRow;