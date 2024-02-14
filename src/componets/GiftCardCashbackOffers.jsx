import React from 'react'
import Heading from './Heading'
import GiftCard from './GiftCard'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";


const GIFT_CARDS =[
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"},
    {subHeading:"Upto 33.33% Cashback",heading:"Sony Live Gift Card",logo:"https://origin-staticv2.sonyliv.com/UI_icons/fallback_sonyliv_logo.png",bgcolor:"rgba(0,0,255,0.5)"}
]

const GiftCardCashbackOffers = () => {
    const headingText = "Gift Card Cashback Offers" 
  return (
    <div className='w-full mx-auto container space-y-5 mt-8'>

        <Heading text={headingText} />
        

        <div className="hidden sm:block bg-primary">
        <div className='my-6 csecondary font-medium  text-right'><a href='#' className='inline-block' ><h3 >VIEW ALL GIFT CARDS</h3></a></div>
                <Swiper
                  slidesPerView={4}
                  navigation={true}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-100 h-[217px] bg-primary"
                >
                  {GIFT_CARDS.map((item, index) => (
                    <SwiperSlide key={index}>
                    
                    <GiftCard item={item} />
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
                  {GIFT_CARDS.map((item, index) => (
                    <SwiperSlide key={index}>
                    <GiftCard item={item} />
                      
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

export default GiftCardCashbackOffers