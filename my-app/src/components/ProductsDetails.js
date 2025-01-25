import React from "react";
import Header from "./header";
const ProductDetails=()=>{
    return(<>
    <Header></Header>
    <div className="w-[50vw] px-[5vw]">
        <p>Product Listing - Top Category - Gifts & Hampers</p>
        <div className="text-white bg-red-600 w-fit px-4 py-1 mt-[2vh]  text-xs rounded-[0.3vw]">SALE!</div>
        <div className="flex flex-row text-xs items-center pt-[1vh] text-gray-500">
            <img src="../Images/ri-star-fill.png" className="pr-1" alt="" /> <p><span className="pr-3">5.0</span>|<span className="pl-3">56</span> sold</p>
            </div>
        <div className="font-bold text-[2.4rem] pt-[1vh] leading-tight">Love in a Box: Deluxe Chocolate Surprise Hamper</div>
        <div className="font-bold text-[#8B024B] py-[1vh] text-[2.5rem]">$205.62</div>
        <div>
            <div className="font-semibold py-1">Description</div>
            <p className="text-sm text-[#414141] font-semibold w-[70%]">Indulge in a delightful mix of premium treats crafted to make every moment special.</p>
        </div>
        <div>
            <div className="font-semibold py-2">
            Ingrendients:</div>
           <ul className="list-disc pl-9">
            <li>Nutritious Cookies</li>
            <li>Rich Chocolate Treats</li>
            <li>Vibrant petals to brighten any occasion</li>
           </ul>
        </div>
        <div className="font-semibold py-2">Color</div>
        <div>
            <div className="font-semibold py-2">Size</div>
            <ul className="flex flex-row">
                <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-1.5 mr-1 border-2 border-[#C1C1C1] rounded-md">XS</li>
                <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-3.5 mx-1 border-2 border-[#C1C1C1] rounded-md">S</li>
                <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-2.5 mx-1 border-2 border-[#C1C1C1] rounded-md">M</li>
                <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-3.5 mx-1 border-2 border-[#C1C1C1] rounded-md">L</li>
                <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-2 mx-1   border-2 border-[#C1C1C1] rounded-md">XL</li>
            </ul>
        </div>
        <div className="flex flex-row items-center justify-center pt-[1vh]">
            <button className="bg-[#8B024B] text-white w-[70%] text-[0.8rem] py-2 rounded-[0.5vw] ">Add to Cart</button>
            <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full "><img src="../Images/Union.png" alt="" /></button>
            </div>
    </div>
Love in a Box: Deluxe Chocolate Surprise Hamper
1
Add to cart
Gifts & Hampers
    </>);
    
}
export default ProductDetails