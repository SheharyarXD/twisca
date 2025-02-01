import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../utils/CartContext";
const CartList=( {
  productName = " Love in a Box: Deluxe Chocolate Surprise Hamper",
  productid=0,
  originalPrice = 100,
  TotalPrice = 85,
  quantities = 0,
  cartid=0
})=>{
  const [quantity, setQuantity] = useState(1);
  const {cart,
    updateCartItem,
    removeFromCart}=useContext(CartContext)
  const [descriptionToggle,setDescription] = useState(true);
  useEffect(() => {
    setQuantity(quantities);
  }, [quantities]);
    
      const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
      };
    
      const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
      };
    return(    
        <div className="flex flex-row justify-between  py-[3vh] items-center border-b border-b-gray-300">
            <div className="w-[6%] text-center"><i onClick={()=>removeFromCart(cartid)} className="fa fa-close"></i></div>
          <div className="flex flex-row items-center  w-[45%]">
            <img
              className="h-12 pr-4 rounded-lg"
              src="../Images/sampleImage2.png"
              alt=""
            />
              <div className="font-bold text-sm items-start flex flex-wrap text-start">
                {productName}
              </div>
          </div>
          <div className="w-[5%] flex text-[#949494]">$ <p>{originalPrice}</p></div>
          <div className="flex w-[8vw] flex-row items-center justify-center pt-[1vh]">
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
          </div>
          <div className="w-[6vw] flex text-[#949494]">$ <p>{TotalPrice}</p></div>
        </div>);
}
export default CartList;