import React from "react";
const LovedPorducts=()=>{
    return(
        <div className="h-[43.5vh] bg-[#FFE8FF] w-[250px] rounded-[1vw] p-3">
            <div className="h-[23vh] overflow-hidden object-cover relative rounded-[1vw]">
            <div className="text-white bg-red-700 w-fit px-4 py-1 absolute top-0 -left-1 text-xs rounded-[0.3vw]">SALE!</div>
            <img src="./Images/sampleImage.png" className="object-cover" alt="" />
            </div>
            <div className="flex flex-row text-[1.1rem] font-bold px-2 pt-[2vh]">
                <div className="w-[70vw]  text-start">Autumn Dress</div>
                <div className="w-[30vw] text-end">$ 85</div>
            </div>
            <div className="flex flex-row text-[0.7rem] px-2 pt-[0.8vh]">
                <div className="w-[70vw] text-start text-gray-600 font-semibold">Wired Stereo Mix with Headphones</div>
                <div className="w-[30vw] text-end line-through font-bold text-red-700">$ 100</div>
            </div>
            <div className="flex flex-row px-2 text-xs items-center pt-[1vh] text-gray-500">
            <img src="./Images/ri-star-fill.png" className="pr-1" alt="" /> <p><span className="pr-3">5.0</span>|<span className="pl-3">56</span> sold</p>
            </div>
            <div className="flex flex-row items-center justify-center pt-[1vh]">
            <button className="bg-[#8B024B] text-white w-[70%] text-[0.8rem] py-2 rounded-[0.5vw] ">Add to Cart</button>
            <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full "><img src="./Images/Union.png" alt="" /></button>
            </div>
        </div>
    );
}
export default LovedPorducts;