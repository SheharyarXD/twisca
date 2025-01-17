import React from "react";
import Header from './header';
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
    <div className="h-screen text-center py-[5vh]">
        <div className="font-bold text-[3.5rem] leading-tight">Our Most-Loved Picks,Just for <br />You!</div>
        <p className="text-gray-600 pt-[4vh]">These are the gifts everyone’s talking about! From timeless classics to trendy must-haves, explore our bestsellers <br /> that bring smiles and unforgettable moments.</p>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    </>
);
}
export default HomePage;