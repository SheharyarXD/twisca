import React from "react";

const ProductCard = ({ title, image, rating, sales, price }) => {
  return (
    <div className="bg-yellow-300 p-4 text-start rounded-2xl overflow-visible shadow-lg h-[50vh] w-[260px]">
      <h2 className="text-[1.24rem] font-bold italic">{title}</h2>
      <div className="relative mt-2 rounded-sm h-[30vh] my-[5vh] overflow-visible">
      <div className="rounded-xs bg-[#F682A5]  px-1 shadow-md pt-[16vh] absolute -left-[16px] top-8 z-50 flex justify-between items-baseline font-bold text-[#8B024B] text-[0.7rem] ml-auto  h-[20vh] w-[95%] shadow-2xl ">
            <div>www.twisca.shop</div>
            <div className="flex flex-row items-center cursor-default" > 
            <img className="h-5 w-auto pr-1" src="../logo.png" alt="png" />
        <div className="font-bold text-[0.8rem] text-[#8B024B]">
            twisca
        </div>
        </div>
            </div> 
        <div className="rounded-xs bg-[#F682A5]  px-1 shadow-md pt-[16vh] absolute -right-2 bottom-0 flex justify-between items-baseline font-bold text-[#8B024B] text-[0.7rem] ml-auto  h-[20vh] w-[93%] shadow-2xl ">
            <div>www.twisca.shop</div>
            <div className="flex flex-row items-center cursor-default" > 
            <img className="h-5 w-auto pr-1" src="../logo.png" alt="png" />
        <div className="font-bold text-[0.8rem] text-[#8B024B]">
            twisca
        </div>
        </div>
            </div> 
      </div>
      <div className="flex justify-between items-center">
      <div className="flex font-semibold items-center text-[0.8rem] text-[#8B024B] mt-2">
        <span className=" text-[0.8rem]">⭐ {rating}</span>
        <span className="ml-2">| {sales} Sold</span>
      </div>
      <p className="text-[1rem] font-bold mt-1">PKR {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
