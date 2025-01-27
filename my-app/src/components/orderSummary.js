import React from "react";
const OrderSummary=()=>{
    return(
        <div className="flex flex-col w-full">
            <div className="font-semibold py-[2vh] text-[1.3rem]">Order Summary</div>
            <div className="text-[#8B024B] px-[0.1vw] py-[1vh] font-semibold border-y border-[#949494]">2 items</div>
            <div></div>
            <div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Price</div>
                    <div>$79.865</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Discount</div>
                    <div>$5</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-black font-semibold py-[1vh] ">
                    <div>Shipping</div>
                    <div className="text-[#8B024B]">Free</div>
                </div>
                <div className="flex font-bold flex-row justify-between px-[1.5vw] py-[1vh] ">
                    <div>Total</div>
                    <div>$74.98</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Estimated Delivery by</div>
                    <div>01 Feb,2023</div>
                </div>
            </div>
            <div> <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] mt-[2vh] w-full" >Continue</button></div>
        </div>
    );
}
export default OrderSummary;