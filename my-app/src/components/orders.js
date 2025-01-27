import React from "react";
const OrderDiv=()=>{
    return(
        <div className="flex flex-row h-[12vh] pb-[1vh]">
            <div className=" max-w-[30%]"> <img className="h-full w-auto" src="../Images/sampleImage2.png" alt="" /></div>
            <div className="flex text-sm px-3 font-bold flex-col w-[60%]">
            <div>Deluxe Chocolate Surprise
            Hamper</div>
            <div>Category: <span className="font-semibold">Gift & Hampers</span></div>
            <div className="text-[#8B024B] font-semibold text-[1rem]">$39.99</div>
            <div className="flex flex-row pt-1"><img className="pr-1" src="../Images/ri-star-fill.png" alt="" /> 5.0</div>
            </div>
        </div>
        
      
      
    

    );
}
export default OrderDiv;