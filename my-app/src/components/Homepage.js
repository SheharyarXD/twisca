import React from "react";
import Header from './header';
import LovedPorducts from "./LovedProducts";
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay  } from 'swiper/modules';


const HomePage=()=>{
    const divStyle = {
        backgroundColor: '#D52260',
        backgroundImage:"url('./Images/happy-kids.png')",
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover'
      };
return(
    <>
    <div className="h-screen overflow-hidden">
    <Header/>
    <div className="w-full h-[88vh] text-center items-center flex flex-col " style={divStyle}>
        <div className="font-bold text-[3.5rem] pt-[30vh] text-white">Perfectly Wrapped, For Every Story<br /> You Want to Tell</div>
        <button className="bg-[#8B024B] text-white px-[3vw] py-2 rounded-[1vw] mt-[3vh] text-[1.2rem]">Order Your Perfect Gift<i class="fa-solid fa-arrow-right pl-[1vw]"></i></button>
    </div>
    </div>
    <div className="h-screen text-center pt-[10vh]">
        <div className="font-bold text-[3rem] leading-tight">Our Most-Loved Picks,Just for <br />You!</div>
        <p className="text-gray-600 pt-[4vh]">These are the gifts everyone’s talking about! From timeless classics to trendy must-haves, explore our bestsellers <br /> that bring smiles and unforgettable moments.</p>
        <Swiper
       

  navigation={{
    prevEl: '.custom-prev',
    nextEl: '.custom-next',
  }}
  autoplay={{
    delay:2500, 
    disableOnInteraction: false, 
  }}
  modules={[Navigation,Autoplay]}
  className="mySwiper mt-[5vh] w-[90vw] relative"
  slidesPerView="auto" // Allow slides to take up only their required space
  spaceBetween={25}
>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <SwiperSlide className="max-w-[250px]"><LovedPorducts /></SwiperSlide>
  <button className="custom-prev text-[#8B024B] border absolute border-[#8B024B] text-[1.5rem] rounded-full bg-white left-[4vw] top-[18vh] z-50"><i className="fa-solid fa-arrow-left py-4 px-4"></i></button>
  <button className="custom-next text-[#8B024B] border absolute border-[#8B024B] text-[1.5rem] rounded-full bg-white right-[4vw]  top-[18vh] z-50"><i className="fa-solid fa-arrow-right py-4 px-4"></i></button>
</Swiper>
    </div>
    </>
);
}
export default HomePage;