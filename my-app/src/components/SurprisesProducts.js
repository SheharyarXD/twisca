import React from "react";
const SurprisedProducts=()=>{
return(
    <div className="max-h-fit bg-white shadow-md w-[23vw] rounded-[1vw]">
    <div className="h-fit overflow-hidden w-full object-cover relative ">
    <img src="../Images/sampleImage2.png" className="object-cover w-full h-auto" alt="" />
    </div>
    <div className="flex flex-row text-[1.1rem] font-bold px-2 pt-[2vh]">
        <div className=" text-start">Classic Accessories</div>
    </div>
    <div className="flex flex-row text-[0.7rem] px-2 pt-[0.8vh]">
        <div className=" text-start text-gray-600 font-semibold">Elegant essentials he’ll love to carry every day</div>
    </div>
   
    <div className="flex flex-row items-center justify-center pt-[1vh] pb-2">
    <button className="bg-[#8B024B] text-white w-[80%] text-[0.8rem] py-2 rounded-[0.5vw] ">Explore All</button>
    <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full "><img src="../Images/Union.png" alt="" /></button>
    </div>
</div>
);
}
export default SurprisedProducts;