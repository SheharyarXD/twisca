import React from "react";
const OrderSummary=()=>{
    return(
        <div className="flex flex-col w-full">
            <div className="font-semibold py-[2vh] text-[1.3rem]">Order Summary</div>
            <div className="text-[#8B024B] px-[0.1vw] py-[1vh] font-semibold border-y border-[#949494]">2 items</div>
            <div></div>
            <div></div>
            <div> <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] mt-[2vh] w-full" >Continue</button></div>
        </div>
    );
}
export default OrderSummary;