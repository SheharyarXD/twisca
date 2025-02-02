import React from "react";

const OrderDiv = ({ image, title, category, price, rating }) => {
    return (
        <div className="flex flex-row h-[12vh] pb-[1vh]">
            <div className="max-w-[30%]">
                <img className="h-full w-auto" src={image} alt={title} />
            </div>
            <div className="flex text-sm px-3 font-bold flex-col w-[60%]">
                <div>{title}</div>
                <div>Category: <span className="font-semibold">{category}</span></div>
                <div className="text-[#8B024B] font-semibold text-[1rem]">${price}</div>
                <div className="flex flex-row pt-1">
                    <img className="pr-1" src="../Images/ri-star-fill.png" alt="rating star" /> {rating}
                </div>
            </div>
        </div>
    );
};

export default OrderDiv;
