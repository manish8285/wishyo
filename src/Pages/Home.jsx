import React from "react";
import Carousel from "../componets/Carousel";
import Cards from "../componets/Cards";
import Hero from "../componets/Hero";
import GiftCardCashbackOffers from "../componets/GiftCardCashbackOffers";
import Testimonials from "../componets/Testimonials";
import StatusBar from "../componets/StatusBar";
import TwoInfoSection from "../componets/TwoInfoSection";
import SearchBrand from "../componets/SearchBrand";
import Stores from "../componets/Stores";

const Home = () => {
  console.log("home page")
  return (
    <div className="bg-primary mt-[60px] sm:mt-[110px]">
      <Carousel />
      <Hero />
      <GiftCardCashbackOffers />
      <Stores />
      <SearchBrand />
      {/* <Cards /> */}

      <TwoInfoSection />

      

      <Testimonials />
      <StatusBar />
    </div>
  );
};

export default Home;
