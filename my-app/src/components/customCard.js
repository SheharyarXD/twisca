import React from "react";
import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";

const ProductCard = ({productid, title, imageurl, rating, sales, price }) => {
  const darkShades = [
    "bg-[rgba(139, 2, 75, 0.09)]", 
  
  ];
  const randomBg = darkShades[Math.floor(Math.random() * darkShades.length)];
   const {userid}=useContext(AuthContext)
      const { addToCart}=useContext(CartContext);
  return (
    <div className={`p-4 text-start rounded-2xl overflow-visible shadow-lg min-h-[50vh] w-[260px] ${randomBg}`}>
      <h2 className="text-[1.24rem] color-[#8b024b] font-bold italic">{title}</h2>
      <div className="relative mt-2 rounded-sm h-[30vh] my-[5vh] overflow-visible">
      <div className="rounded-xs  object-cover   absolute -left-[16px] top-8 z-50 flex justify-between items-baseline font-bold text-[#8B024B] text-[0.7rem]   h-[20vh] shadow-2xl p-0 m-0">

         <img className="cover top-[0.3rem] left-[-10px]  w-full h-full" src={imageurl} alt="" />
            </div> 
        <div className="rounded-xs  shadow-md cover absolute -right-2 bottom-0 flex justify-between items-baseline font-bold text-[#8B024B] text-[0.7rem]  h-[20vh] w-[93%] ml-auto shadow-2xl ">
        <img className=" cover bottom-[-31px] right-[-0.4rem] w-full h-full" src="https://i.ibb.co/dv4pFYs/card1.png" alt="" />
      
            </div> 
      </div>
      <div className="flex justify-between items-center">
      <div className="flex font-semibold items-center text-[0.8rem] text-[#8B024B] mt-2">
        <span className=" text-[0.8rem]">⭐ {rating}</span>
        <span className="ml-2">| {sales} Sold</span>
      </div>
      <p className="text-[1rem] font-bold mt-1">PKR {price}</p>
      </div>
      <button onClick={(event)=>
                {event.stopPropagation(); addToCart(userid,productid,1)}} className="bg-[#8B024B] text-white w-full mt-2 text-[0.8rem] py-2 rounded-[0.5vw] ">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
