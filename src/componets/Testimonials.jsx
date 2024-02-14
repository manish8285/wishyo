import React from 'react'
import TestimonialCard from './TestimonialCard'
import Heading from './Heading'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const TESTIMONIALS =[
    {
        name:"Uttam",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a. Temporibus minima vitae magni aliquid, nam nulla iste harum officiis?",
        pic:"https://res-2.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_60,q_auto,r_max,w_60/uttam-e6d1fbe2c1effcd1de6da837a6f97859.png"
    },
    {
        name:"Uttam",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a. Temporibus minima vitae magni aliquid, nam nulla iste harum officiis?",
        pic:"https://res-2.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_60,q_auto,r_max,w_60/uttam-e6d1fbe2c1effcd1de6da837a6f97859.png"
    },
    {
        name:"Uttam",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a. Temporibus minima vitae magni aliquid, nam nulla iste harum officiis?",
        pic:"https://res-2.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_60,q_auto,r_max,w_60/uttam-e6d1fbe2c1effcd1de6da837a6f97859.png"
    },
    {
        name:"Uttam",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a. Temporibus minima vitae magni aliquid, nam nulla iste harum officiis?",
        pic:"https://res-2.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_60,q_auto,r_max,w_60/uttam-e6d1fbe2c1effcd1de6da837a6f97859.png"
    },
    {
        name:"Uttam",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a. Temporibus minima vitae magni aliquid, nam nulla iste harum officiis?",
        pic:"https://res-2.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_60,q_auto,r_max,w_60/uttam-e6d1fbe2c1effcd1de6da837a6f97859.png"
    },
]

const Testimonials = () => {
  return (
    <div className='container mx-auto space-y-8 mt-8'>
        <Heading text={"Testimonials"} />


        


        <div className="hidden sm:block bg-primary">
                <Swiper
                  slidesPerView={3}
                  navigation={true}
                  spaceBetween={35}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-100  bg-primary"
                >
                  {TESTIMONIALS.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard item={item} />
                    
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
                  {TESTIMONIALS.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard item={item} />
                      
                    </SwiperSlide>
                  ))}
                </Swiper>
        </div>
    </div>
  )
}

export default Testimonials