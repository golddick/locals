

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
import { getAllCategory } from '@/app/api/get/categorie';
import LoaderCircle from '../Loader/Loader';

export default function CategoryRow() {
  const Img = 'https://github.com/shadcn.png';
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategory();
        setCategories(response.data); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setIsBeginning(true);
      setIsEnd(false);
    }
  }, []);

  return (
    <div className="flex w-full gap-2 md:gap-4 items-center">
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
          320: { slidesPerView: 1 },
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
        {isLoading ? (
          <SwiperSlide>
            <LoaderCircle/>
          </SwiperSlide> 
        ) : (
          categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard bg={Img} BTNText={category.name} />
            </SwiperSlide>
          ))
        )}
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
