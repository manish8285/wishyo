import React from 'react'
import StoreCard from './StoreCard'
import Heading from './Heading'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const STORES =[
    {name:"Amazone",heading:"Upto 22% Off on Shopping",logo:"https://res-2.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1581490199/linkisin/production/store/amazon.in-logo_z2xj4a.png"},
    {name:"Amazone",heading:"Upto 22% Off on Shopping",logo:"https://res-2.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1581490199/linkisin/production/store/amazon.in-logo_z2xj4a.png"},
    {name:"Amazone",heading:"Upto 22% Off on Shopping",logo:"https://res-2.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1581490199/linkisin/production/store/amazon.in-logo_z2xj4a.png"},
    {name:"Amazone",heading:"Upto 22% Off on Shopping",logo:"https://res-2.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1581490199/linkisin/production/store/amazon.in-logo_z2xj4a.png"},
    {name:"Amazone",heading:"Upto 22% Off on Shopping",logo:"https://res-2.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1581490199/linkisin/production/store/amazon.in-logo_z2xj4a.png"},
    {name:"Amazone",heading:"Upto 22% Off on Shopping",logo:"https://res-2.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1581490199/linkisin/production/store/amazon.in-logo_z2xj4a.png"},
]

const Stores = () => {
  return (
    <div className='container mx-auto space-y-8'>
        <Heading text={"Online Shopping Cashback Stores"} />
        <div className="hidden sm:block bg-primary">
        <div className='my-6 csecondary font-medium  text-right'><a href='#' className='inline-block' ><h3 >VIEW ALL</h3></a></div>
                <Swiper
                  slidesPerView={3}
                  navigation={true}
                  spaceBetween={40}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-100 h-[217px] bg-primary"
                >
                  {STORES.map((item, index) => (
                    <SwiperSlide key={index}>
                    
                    <StoreCard item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
      </div>
      <div className="sm:hidden space-y-5">
                <Swiper
                  slidesPerView={2}
                  navigation={true}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-100 "
                >
                  {STORES.map((item, index) => (
                    <SwiperSlide key={index}>
                    <StoreCard item={item} />
                      
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className='text-center mb-2'> 
                <a href="#" className='color-primary' >VIEW ALL</a> 
                </div>
        </div>
        
    </div>
  )
}

export default Stores