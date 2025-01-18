import React from "react";
import Header from './header';
import LovedPorducts from "./LovedProducts";
import SurprisedProducts from "./SurprisesProducts";
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
    {/* Main Section */}
    <div className="h-screen overflow-hidden">
    <Header/>
    <div className="w-full h-[88vh] text-center items-center flex flex-col " style={divStyle}>
        <div className="font-bold text-[3.5rem] pt-[30vh] text-white">Perfectly Wrapped, For Every Story<br /> You Want to Tell</div>
        <button className="bg-[#8B024B] text-white px-[3vw] py-2 rounded-[1vw] mt-[3vh] text-[1.2rem]">Order Your Perfect Gift<i class="fa-solid fa-arrow-right pl-[1vw]"></i></button>
    </div>
    </div>
    {/* Loved Porducts Section */}
    <section>
          <div className="h-screen text-center pt-[10vh] overflow-hidden">
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
  <button className="custom-prev text-[#8B024B] border absolute border-[#8B024B] text-[1.5rem] rounded-full bg-white left-[4vw] top-[18vh] z-50 hover:text-white hover:bg-[#8B024B]"><i className="fa-solid fa-arrow-left py-4 px-4"></i></button>
  <button className="custom-next text-[#8B024B] border absolute border-[#8B024B] text-[1.5rem] rounded-full bg-white right-[4vw]  top-[18vh] z-50 hover:text-white hover:bg-[#8B024B]"><i className="fa-solid fa-arrow-right py-4 px-4"></i></button>
</Swiper>
    </div>
    </section>
    {/* Surprise Products Section */}
    <section>
    <div className="h-screen text-center pt-[10vh] relative overflow-hidden">
        <img className="absolute top-[15vh] w-auto h-[11vh] left-[11vw]" src="./Images/star.png" alt="" />
        <img className="absolute w-auto h-[20vh] top-[8vh] right-[10vw]" src="./Images/love.png" alt="" />
        <div className="font-bold text-[3rem] leading-tight">Celebrate the Season of Love <br />with Surprises!</div>
        <div class="flex flex-row items-center justify-center h-[3.7vw] w-[20vw] mx-auto mt-[6vh] text-[#8B024B]">
              <button id="beforeButton" class="text-[1.3vw] border-2 border-[#8B024B] hover:bg-[#8B024B] rounded-l-[40px] focus:bg-[#8B024B] focus:text-white hover:text-white h-full w-1/2 cursor-default">👔 For Him</button>
<button id="afterButton" class="text-[1.3vw] hover:bg-[#8B024B] border-2 border-[#8B024B] rounded-r-[40px] focus:bg-[#8B024B] focus:text-white hover:text-white h-full w-1/2 cursor-default">👗 For Her</button>

            </div>
        <div className="flex flex-row justify-between mx-[13vw] py-[5vh]">
        <SurprisedProducts/>
        <SurprisedProducts/>
        <SurprisedProducts/>
        </div>
    </div>
    {/* Motivation Line */}
    <section>
      <div className="h-screen text-center pt-[35vh] relative overflow-hidden font-bold leading-tight text-[#CFCFCF] text-[3.5rem] ">
        <span className="text-[#8B024B] "> Find 🎁</span>, <span className="text-[#8B024B] "> customize</span> ✍️, and  <span className="text-[#8B024B] "> send</span> 💌 the <br /> perfect gift—all in one delightful <br /> place.</div>
    </section>
    </section>
    {/* promotion Cards */}
    <section>
          <div className="h-screen text-center pt-[10vh] overflow-hidden relative">
          <img className="absolute top-[17vh] w-auto h-[10vh] left-[9vw]" src="./Images/star.png" alt="" />
          <img className="absolute w-auto h-[10vh] top-[22vh] right-[10vw] z-50 shadow-lg rounded-full" src="./Images/smileFace.png" alt="" />
        <div className="font-bold text-[3rem] leading-tight">Your Love, Your Words, Your Way!</div>
        <p className="text-gray-600 pt-[4vh] text-[0.9rem]">Create a card as unique as your love! Add your heartfelt message, pick a design, and make your gift truly unforgettable.</p>
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
  <button className="custom-prev text-[#8B024B] border  border-[#8B024B] text-[1.5rem] rounded-full bg-white  z-50 hover:text-white hover:bg-[#8B024B]"><i className="fa-solid fa-arrow-left py-4 px-4"></i></button>
  <button className="custom-next text-[#8B024B] border  border-[#8B024B] text-[1.5rem] rounded-full bg-white mt-[5vh] ml-[1vw] z-50 hover:text-white hover:bg-[#8B024B]"><i className="fa-solid fa-arrow-right py-4 px-4"></i></button>
</Swiper>
    </div>
    </section>
    </>
);
}
export default HomePage;