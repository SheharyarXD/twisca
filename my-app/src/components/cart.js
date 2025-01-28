import React from "react";
import Header from "./header";
import CartList from "./cartList";
import OrderSummary from "./orderSummary";
import BillingForm from "./billingform";
import PaymentForm from "./paymentform";
const Cart=()=>{
    return(
        <>
        <div className="min-h-screen">
        <Header/>
        <div className="flex flex-row items-baseline">
            {/* left section */}
            <div className="w-[60vw] px-[5vw] ">
            {/* <div className="rounded-xl border-gray-300 border mt-[5vh] h-[70vh] ">
            
                <div className="flex text-[1.1rem] sticky top-0 z-[100] flex-row items-center bg-[#8B024B] justify-center  text-white py-[2vh] overflow-hidden rounded-t-xl" >
                    <div className="w-[23vw]">Product</div>
                    <div className="w-[18vw] flex">
                    <div className="w-[6vw] text-center">Price</div>
                    <div className=" text-center w-[10vw]">Quantity</div>
                    <div className="w-[2vw]">Total</div>
                    </div>
                </div>
              
                <div className=" flex flex-col">
                <CartList/>
                <CartList/>
                <CartList/>
                <CartList/>
                </div>
            </div> */}
            {/* <BillingForm/> */}
            <PaymentForm/> 
            </div>
            {/* right section */}
            <div className="w-[40vw] pr-[9vw] flex h-[70vh] ">
            <OrderSummary/>
            </div>
        </div>
        </div>
        </>
    );
}
export default Cart;