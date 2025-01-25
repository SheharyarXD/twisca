import React from "react";
import Header from './header';
import LovedPorducts from "./LovedProducts";
import SurprisedProducts from "./SurprisesProducts";
import FooterPage from "./footer";
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
          <div className="h-screen text-center pt-[10vh]  relative">
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
        {/*Selection to Delivery */}
        <section>
          <div className="h-screen text-center pt-[10vh]  relative">
        <div className="font-bold text-[3rem] leading-tight">From Selection to Delivery, We <br />Handle It All</div>
        <p className="text-gray-600 pt-[4vh] text-[0.9rem] w-[55vw] mx-auto">Choose the perfect gift, add your personal touch, and let us take care of the rest. Fast, secure, and delivered with a smile—gift-giving has never been this effortless!</p>

        <div className="flex flex-row justify-between px-[1vw] relative">
          <img className="absolute w-[14vw] top-[18vh] left-[42vw] h-auto" src="./Images/Arc1.png" alt="" />
          <img className="absolute w-[14vw] top-[12vh] left-[15.7vw] h-auto" src="./Images/Arc3.png" alt="" />
          <img className="absolute w-[14vw] top-[13vh] right-[15.7vw] h-auto" src="./Images/Arc3.png" alt="" />

       <div className="flex flex-col justify-center items-center w-[20vw]">
        <div className="border shadow-sm shadow-[#8B024B] p-5  rounded-full w-fit">
          <img className="h-[7vh]" src="./Images/explore1.png" alt="" />
        </div>
        <div className="text-[1.3rem] font-bold text-[#8B024B] py-[2vh]">Explore & Choose</div>
        <div className="text-[#9C9C9C] text-[0.9rem]">Browse a wide range of unique <br /> gifts and select the perfect one <br /> for any occasion.</div>
       </div>

       <div className="flex flex-col justify-center items-center w-[20vw] pt-[14vh]">
        <div className="border shadow-sm shadow-[#8B024B] p-5  rounded-full w-fit">
          <img className="h-[7vh]" src="./Images/approved-order1.png" alt="" />
        </div>
        <div className="text-[1.3rem] text-[#8B024B] font-bold py-[2vh]">Customize & Personalize</div>
        <div className="text-[#9C9C9C] text-[0.9rem]">Make your gift extra special with <br /> custom messages or <br /> personalization options.</div>
       </div>

       <div className="flex flex-col justify-center items-center w-[20vw]  pt-[2vh]">
        <div className="border shadow-sm shadow-[#8B024B] p-5  rounded-full w-fit">
          <img className="h-[7vh]" src="./Images/checkout1.png" alt="" />
        </div>
        <div className="text-[1.3rem] text-[#8B024B] font-bold py-[2vh]">Place Your Order</div>
        <div className="text-[#9C9C9C] text-[0.9rem]">Enjoy a seamless checkout <br /> experience with secure payment <br /> options.</div>
       </div>

       <div className="flex flex-col justify-center items-center w-[20vw] pt-[12vh]">
        <div className="border shadow-sm shadow-[#8B024B] p-5  rounded-full w-fit">
          <img className="h-[7vh]" src="./Images/real-time-tracking1.png" alt="" />
        </div>
        <div className="text-[1.3rem] text-[#8B024B] font-bold py-[2vh]">Track & Deliver</div>
        <div className="text-[#9C9C9C] text-[0.9rem]">Relax while we carefully pack and <br /> deliver your gift right to their <br /> door.</div>
       </div>

        </div>
    </div>
    </section>
    {/* Let us help */}
    <section className="h-screen bg-gray-100 pt-[10vh] flex justify-between flex-col">
      <div className="flex flex-col text-center w-[80%] mx-auto py-[6vh] bg-white">
        <div className="font-bold text-[2.2rem]">Let Us Help You Make Every Gift Special!</div>
        <div className="text-center font-semibold py-[1vh]">
        <p>Personalize <span className="text-[#8B024B]"> your gifts with ease!</span> From thoughtful cards to meaningful presents, we’ve got <br /> everything you need to make your loved ones smile.</p>
        </div>
        <div>
          <div className="pt-[1vh]">
            <button className="mr-2 py-2.5 px-6 bg-[#8B024B] text-white rounded-[1vw] shadow-sm shadow-black">Start Customizing Now</button>
            <button className="py-2.5 font-semibold px-6 bg-gray-200 rounded-[1vw]">Explore Unique Gifts</button>
          </div>
          <div className="pt-[1.5vh] text-gray-600 text-[0.8rem]">Hassle-free customization, endless love-filled possibilities!</div>
        </div>
      </div>
    <FooterPage/>
    </section>
  









    </>
);
}
export default HomePage;