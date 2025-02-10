import React from "react";
import { useNavigate } from "react-router-dom";

const FooterPage=()=>{
    const navigate=useNavigate()
return(   <footer className="text-white bg-[#8B024B]  h-fit text-[0.8rem] rounded-t-[3rem] px-[5vw] mt-[5vh]" style={{boxShadow: '0 -10px 100px rgba(227, 32, 136, 0.5)'}}>
    <div className="upperSection flex-wrap flex flex-col sm:items-center sm:flex-row pt-[6vh] min-h-fit pb-[15vh]">
      <div className="w-[16%] flex flex-row items-center h-fit">
        <img src="../Images/logoWhite.png" className="h-[4.5vh] w-auto mr-[0.4vw]" alt="" />
        <div className="text-[1.5rem] font-semibold">
           twisca
          </div>
          </div>
      <div className="sm:w-[70%] pt-[5vh] sm:pt-0 flex flex-row ">
        <div className="flex flex-wrap flex-row justify-between items-center ">
          <a className="flex px-4 text-[15px] font-[600]" onClick={()=>navigate('/')} href="">Home</a>
          <a className="flex px-4 text-[15px] font-[600]" onClick={()=>navigate('/products')} href="">Products</a>
          <a className="flex px-4 text-[15px] font-[600]" onClick={()=>navigate('/orders')} href="">Orders</a>
          <a className="flex px-4 text-[15px] font-[600]" onClick={()=>navigate('')} href="">About Us</a>
          <a className="flex px-4 text-[15px] font-[600]" onClick={()=>navigate('/contact')} href="">Contact</a>
        </div>
        {/* <div  className="flex flex-col sm:w-[10%]">
           <a className="pb-3" href="">Information</a>
          <a className="pb-3" href="">Data Attributes</a>
          <a className="pb-3" href="">Support</a> *
        </div> */}
        {/* <div  className="flex flex-col sm:w-[10%]">
           <a className="pb-3" href="">Company</a>
          <a className="pb-3" href="">About Us</a>
          <a className="pb-3" href="">Careers</a>
          <a className="pb-3" href="">Press</a>
          <a className="pb-3" href="">Customers</a> *
        </div> */}
      </div>
    </div>
    <div className="baseline flex flex-col ">
      <div className="h-[0.09px] bg-gray-400"></div>
      <div className="py-[2vh] md:text-base text-[0.6rem] flex justify-between lg:w-[50%]">
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