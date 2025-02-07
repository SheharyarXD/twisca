import React from "react";
import { useState,useContext } from "react";
import OrderDiv from "./orders";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";
const OrderSummary=({ orders, totalPrice, discount, estimatedDelivery })=>{
  const {cart,
      updateCartItem,fetchCart,
      removeFromCart}=useContext(CartContext)
      const {cartToggle, setcartToggle}=useContext(AuthContext);


  
  
    return(
        <div className="flex flex-col w-full min-h-fit border-gray-300 border px-[2vw] rounded-lg">
            <div className="font-semibold py-[2vh] text-[1.3rem]">Order Summary</div>
            <div className="text-[#8B024B] px-[0.1vw] py-[1vh] font-semibold border-y border-[#949494] mb-[2vh]"> {cart.length} {cart.length === 1 ? "item" : "items"}</div>
            <div className=" border-b border-[#949494]">
            {Array.isArray(cart)&& cart.length>0&& cart.map((carts)=>(
                        
            <OrderDiv 

    image="../Images/sampleImage2.png"
    title={carts.productName}
    category="Gift & Hampers"
    price={carts.price}
    rating="5.0"
/>
                    ))
                    }

            </div>
            <div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Price</div>
                    <div>PKR{totalPrice.toFixed(2)}</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Discount</div>
                    <div>{((discount / totalPrice) * 100).toFixed(2)} %</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-black font-semibold py-[1vh] ">
                    <div>Shipping</div>
                    <div className="text-[#8B024B]">PKR 300</div>
                </div>
                <div className="flex font-bold flex-row justify-between px-[1.5vw] py-[1vh] ">
                    <div>Total</div>
                    <div>PKR{(totalPrice - discount+300).toFixed(2)}</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Estimated Delivery by</div>
                    <div>{estimatedDelivery}</div>
                </div>
            </div>
            <div> <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] mt-[0.5vh] w-full" onClick={()=>{setcartToggle("billing")}}>Continue</button></div>

      </div>
    );
}
export default OrderSummary;