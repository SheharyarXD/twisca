import React from "react";
const ProductPageProducts=({
    discount = "-13%",
    rating = 5.0,
    soldCount = 56,
    imageUrl = "./Images/sampleImage2.png",
    productName = "Autumn Dress",
    currentPrice = 85,
    originalPrice = 100,
    description = "Wired Stereo Mix with Headphones"
  })=>{
    return(
        <div className="max-h-[360px] w-[250px] rounded-[1vw] p-1 my-5">
            <div className="h-fit overflow-hidden object-cover relative rounded-[1vw]">
            <div className="text-white bg-[#414141]  w-fit px-2.5 py-1 absolute top-2 left-2 text-xs rounded-lg">{discount}</div>
            <div className="flex flex-row px-2 text-xs absolute items-center top-2 right-1 text-white">
            <img src="./Images/ri-star-fill.png" className="pr-1" alt="" /> <p><span className="pr-3">{rating.toFixed(1)}</span>|<span className="pl-3">{soldCount}</span> sold</p>
            </div>
            <img src="./Images/sampleImage2.png" className="object-cover" alt="" />
            </div>
            <div className="flex flex-row text-[1.1rem] font-bold px-2 pt-[2vh]">
                <div className="w-[70vw]  text-start">{productName}</div>
                <div className="w-[30vw] text-end">$ {currentPrice}</div>
            </div>
            <div className="flex flex-row text-[0.7rem] px-2 pt-[0.8vh]">
                <div className="w-[70vw] text-start text-gray-600 font-semibold">{description}</div>
                <div className="w-[30vw] text-end line-through font-bold text-red-700">$ {originalPrice}</div>
            </div>
           
            <div className="flex flex-row items-center justify-center pt-[1vh] px-0">
            <button className="bg-[#8B024B] text-white w-[70%] text-[0.8rem] py-2 rounded-[0.5vw] ">Add to Cart</button>
            <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full "><img src="./Images/Union.png" alt="" /></button>
            </div>
        </div>
    );
}
export default ProductPageProducts;