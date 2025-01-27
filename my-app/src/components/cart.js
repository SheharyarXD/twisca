import React from "react";
import Header from "./header";
import CartList from "./cartList";
const Cart=()=>{
    return(
        <>
        <div className="min-h-screen">
        <Header/>
        <div className="flex flex-row items-center">
            {/* left section */}
            <div className="w-[60vw] px-[5vw]">
            <div className="rounded-xl shadow-md shadow-gray-600 mt-[5vh] h-[70vh]">
                {/* header of table */}
                <div className="flex text-[1.1rem] flex-row items-center bg-[#8B024B] justify-center  text-white py-[2vh] overflow-hidden rounded-t-xl" >
                    <div className="w-[45%]">Product</div>
                    <div className="w-[35%] flex">
                    <div className="px-[9%]">Price</div>
                    <div className="px-[2vw]">Quantity</div>
                    <div className="px-[1vw]">Total</div>
                    </div>
                </div>
                {/* products in cart */}
                <div>
                <CartList/>
                <CartList/>
                </div>
            </div>
            </div>
            {/* right section */}
            <div className="w-[40vw]"></div>
        </div>
        </div>
        </>
    );
}
export default Cart;