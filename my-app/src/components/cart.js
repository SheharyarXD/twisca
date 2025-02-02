import React from "react";
import Header from "./header";
import CartList from "./cartList";
import OrderSummary from "./orderSummary";
import BillingForm from "./billingform";
import PaymentForm from "./paymentform";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";
const Cart=()=>{
    const {cart,
        updateCartItem,fetchCart,
        removeFromCart}=useContext(CartContext)
        const{userid}=useContext(AuthContext)
        
          useEffect(() => {

            fetchCart(userid);
          }, []);
        
    return(
        <>
        <div className="min-h-screen">
        <Header/>
        <div className="flex flex-row items-baseline">
            {/* left section */}
            <div className="w-[60vw] px-[5vw] ">
             <div className="rounded-xl border-gray-300 border mt-[5vh] h-[70vh] ">
            
                <div className="flex text-[1.1rem] sticky top-0 z-[100] flex-row items-center bg-[#8B024B] justify-center  text-white py-[2vh] overflow-hidden rounded-t-xl" >
                    <div className="w-[23vw]">Product</div>
                    <div className="w-[18vw] flex">
                    <div className="w-[6vw] text-center">Price</div>
                    <div className=" text-center w-[10vw]">Quantity</div>
                    <div className="w-[2vw]">Total</div>
                    </div>
                </div>
              
                <div className=" flex flex-col">
                    {Array.isArray(cart)&& cart.length>0&& cart.map((carts)=>(
                        
                        <CartList
                        key={carts.cartid}
                        productName ={carts.productName}
                        productid={carts.productid}
                        originalPrice = {carts.price}
                        // TotalPrice = 85
                        quantities = {carts.quantity}
                        cartid={carts.cartid}/>
                    ))
                    }
                </div>
            </div> 
            {/* <BillingForm/> */}
            {/* <PaymentForm/>  */}
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