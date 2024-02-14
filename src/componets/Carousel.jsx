import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const images = [
  "https://res-3.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1695295782/linkisin/production/banner/640-by-320-plum-goodness-banner_xpxeuc.png",
  "https://res-3.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1695101318/linkisin/production/banner/Bappas-blessing---Your-Cashback-Homepage-new__1__vpnqvn.jpg",
  "https://res-1.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1695367383/linkisin/production/banner/640-by-320-banner__1___1__gjynfs.png",
  "https://res-3.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1695295782/linkisin/production/banner/640-by-320-plum-goodness-banner_xpxeuc.png",
  "https://res-3.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1695101318/linkisin/production/banner/Bappas-blessing---Your-Cashback-Homepage-new__1__vpnqvn.jpg",
  "https://res-1.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1695367383/linkisin/production/banner/640-by-320-banner__1___1__gjynfs.png",

];

const Carousel=()=> {
  return (
    <>
      <div className="container mx-auto sm:my-2 bg-primary">
        <div className="hidden sm:block bg-primary mb-10 h-[217px]">
                <Swiper
                  slidesPerView={3}
                  navigation={true}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-100  bg-primary"
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                    
                      <img src={img} alt="slider img" className="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
      </div>
      <div className="sm:hidden">
                <Swiper
                  slidesPerView={1}
                  navigation={true}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-100 h-[217px]"
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                    
                      <img src={img} alt="slider img" className="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
      </div>
      </div>
    </>
  );
}
export default Carousel;
