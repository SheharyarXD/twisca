import React from "react";
const FooterPage=()=>{
return(   <footer className="text-white bg-[#8B024B] text-[0.8rem] rounded-t-[3rem] px-[5vw] mt-[5vh]" style={{boxShadow: '0 -10px 100px rgba(227, 32, 136, 0.5)'}}>
    <div className="upperSection flex flex-row pt-[6vh] min-h-fit pb-[15vh]">
      <div className="w-[16%] flex flex-row items-center h-fit">
        <img src="./Images/logoWhite.png" className="h-[4.5vh] w-auto mr-[0.4vw]" alt="" />
        <div className="text-[1.5rem] font-semibold">
           twisca
          </div>
          </div>
      <div className="w-[70%] flex flex-row justify-around">
        <div className="flex flex-col w-[10%]">
          <a className="pb-3" href="">Home</a>
          <a className="pb-3" href="">Products</a>
          <a className="pb-3" href="">Occasion</a>
          <a className="pb-3" href="">About Us</a>
          <a className="pb-3" href="">Contact</a>
          <a className="pb-3" href="">Newsletter</a>
        </div>
        <div  className="flex flex-col w-[10%]">
          <a className="pb-3" href="">Information</a>
          <a className="pb-3" href="">Data Attributes</a>
          <a className="pb-3" href="">Support</a>
        </div>
        <div  className="flex flex-col w-[10%]">
          <a className="pb-3" href="">Company</a>
          <a className="pb-3" href="">About Us</a>
          <a className="pb-3" href="">Careers</a>
          <a className="pb-3" href="">Press</a>
          <a className="pb-3" href="">Customers</a>
        </div>
      </div>
    </div>
    <div className="baseline flex flex-col ">
      <div className="h-[0.09px] bg-gray-400"></div>
      <div className="py-[2vh] flex justify-between w-[50%]">
     <a href="">Trust Center</a> 
     <a href="">Privacy Policy</a> 
     <a href="">Status</a> 
     <a href="">Legal</a> 
     <a href="">Do Not Sell My Info</a> 
     <a href="">Opt out</a> 
      </div>
      <div></div>
    </div>
    </footer>);
}
export default FooterPage;