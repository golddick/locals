'use client'

import { useState, useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryCard from './CategoryCard';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';


export default function CategoryRow() {
  const Img = 'https://github.com/shadcn.png';
  const img = 'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=780&h=384&q=90&fit=crop&ar=16%3A10';

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // Ensure the Swiper instance is aware of the custom buttons
      setIsBeginning(true);
      setIsEnd(false);
    }
  }, []);

  return (
    <div className=" flex w-full gap-4 items-center ">

      {/* Custom Previous Button */}
      <div
        ref={prevRef}
        className={`cursor-pointer ${isBeginning ? 'opacity-35 cursor-not-allowed' : ''}`}
      >
        <Button variant="ghost" size="icon">
          <ArrowLeftCircle className="size-6" />
        </Button>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => {
          // Override Swiper's navigation buttons with custom refs
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();

          // Set initial states for isBeginning and isEnd
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="w-full"
      >
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Home Services" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Gym Services" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Legal Services" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Catering Services" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Spa & Wellness" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Construction Services" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard bg={Img} BTNText="Home Cleaning" />
        </SwiperSlide>

        {/* Add more slides here */}
      </Swiper>

      {/* Custom Next Button */}
      <div
        ref={nextRef}
        className={`cursor-pointer ${isEnd ? 'opacity-35 cursor-not-allowed' : ''}`}
      >
        <Button variant="ghost" size="icon">
          <ArrowRightCircle className="size-6" />
        </Button>
      </div>
    </div>
  );
}