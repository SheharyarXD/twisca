import React from "react";
import { useState } from "react";
import Header from "./header";
const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 
  };

  return (
    <>
      <Header></Header>
      <div className="w-[50vw] px-[5vw]">
        <p>Product Listing - Top Category - Gifts & Hampers</p>
        <div className="text-white bg-red-600 w-fit px-4 py-1 mt-[2vh]  text-xs rounded-[0.3vw]">
          SALE!
        </div>
        <div className="flex flex-row text-xs items-center pt-[1vh] text-gray-500">
          <img src="../Images/ri-star-fill.png" className="pr-1" alt="" />{" "}
          <p>
            <span className="pr-3">5.0</span>|<span className="pl-3">56</span>{" "}
            sold
          </p>
        </div>
        <div className="font-bold text-[2.4rem] pt-[1vh] leading-tight">
          Love in a Box: Deluxe Chocolate Surprise Hamper
        </div>
        <div className="font-bold text-[#8B024B] py-[1vh] text-[2.5rem]">
          $205.62
        </div>
        <div>
          <div className="font-semibold py-1">Description</div>
          <p className="text-sm text-[#414141] font-semibold w-[70%]">
            Indulge in a delightful mix of premium treats crafted to make every
            moment special.
          </p>
        </div>
        <div>
          <div className="font-semibold py-2">Ingrendients:</div>
          <ul className="list-disc pl-9">
            <li>Nutritious Cookies</li>
            <li>Rich Chocolate Treats</li>
            <li>Vibrant petals to brighten any occasion</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold py-2">Color</div>
          <div className="flex flex-row justify-start items-center space-x-3">
            <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
            <div className="rounded-full h-8 w-8 bg-pink-600 border-2 border-gray-300 hover:border-pink-800"></div>
            <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
            <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
            <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
          </div>
        </div>
        <div>
          <div className="font-semibold py-2">Size</div>
          <ul className="flex flex-row">
            <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-1.5 mr-1 border-2 border-[#C1C1C1] rounded-md">
              XS
            </li>
            <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-3.5 mx-1 border-2 border-[#C1C1C1] rounded-md">
              S
            </li>
            <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-2.5 mx-1 border-2 border-[#C1C1C1] rounded-md">
              M
            </li>
            <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-3.5 mx-1 border-2 border-[#C1C1C1] rounded-md">
              L
            </li>
            <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-2 mx-1   border-2 border-[#C1C1C1] rounded-md">
              XL
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between px-[15vw] pt-[5vh] w-[100vw] items-center">
        <div className="flex flex-row items-center">
            <img className="h-12 pr-4 rounded-lg" src="../Images/sampleImage2.png" alt="" />
            <div className="flex flex-col">
            <div className="font-bold text-sm">Love in a Box: Deluxe Chocolate Surprise Hamper </div>
            <div className="font-bold text-xs text-[#8B024B]">Gifts & Hampers</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center pt-[1vh]">
      <div className="flex items-center px-2 relative">
      {/* Minus Button */}
      <button
        onClick={handleDecrement}
         className="hover:text-[#8B024B] text-4xl -top-2.5 text-gray-700 absolute left-4"
      >
        -
      </button>

      {/* Input Box */}
      <input
        type="number"
        value={quantity}
        readOnly
        className="w-[80px] text-center border border-gray-300 rounded-2xl text-center pl-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Plus Button */}
      <button
        onClick={handleIncrement}
        className="hover:text-[#8B024B] text-xl -top-0.5 text-gray-700 absolute right-4"
      >
        +
      </button>
    </div>
            <button className="bg-[#8B024B] text-white px-[5.5vw] text-[0.8rem] py-2 rounded-[0.5vw] ">
              Add to Cart
            </button>
            <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full ">
              <img src="../Images/Union.png" alt="" />
            </button>
          </div>
      </div>
    </>
  );
};
export default ProductDetails;
