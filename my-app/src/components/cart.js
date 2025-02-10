import React from "react";
import { useState } from "react";
import Header from "./header";
import CartList from "./cartList";
import OrderSummary from "./orderSummary";
import BillingForm from "./billingform";
import PaymentForm from "./paymentform";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";
import FooterPage from "./footer";
import { useNavigate } from "react-router-dom";

const Cart=()=>{
      const navigate=useNavigate()
    const {cart,
        updateCartItem,fetchCart,
        removeFromCart}=useContext(CartContext)
              const {userid,cartToggle, setcartToggle}=useContext(AuthContext);
        const [totalPrice, setTotalPrice] = useState(0);
        const [totalDiscount, setTotalDiscount] = useState(0);
        const [estimatedDelivery, setEstimatedDelivery] = useState("");
          const {currentModal, setCurrentModal}=useContext(AuthContext)
          
  
  const openTrackOrderModal = () => setCurrentModal("trackOrder");
  const closeModal = () => setCurrentModal(null);
        useEffect(() => {
            if (Array.isArray(cart) && cart.length > 0) {
              let total = 0;
              let discount = 0;
        
              cart.forEach((item) => {
                total += item.price * item.quantity; // Total price considering quantity
                discount += (item.oldprice-item.price || 0) * item.quantity; // Discount per quantity
              });
        
              setTotalPrice(total);
              setTotalDiscount(discount);
        
              // Calculate delivery date (add 7 days to addDate)
              const deliveryDate = new Date(cart[0].addedat);
              deliveryDate.setDate(deliveryDate.getDate() + 7);
              const formattedDate = deliveryDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });
        
              setEstimatedDelivery(formattedDate.replace(" ", " "));
            }
          }, [cart]);
        const ordersData = [
            {
              image: "../Images/sampleImage2.png",
              title: "Deluxe Chocolate Surprise Hamper",
              category: "Gift & Hampers",
              price: 39.99,
              rating: "5.0",
            },
            {
              image: "../Images/sampleImage2.png",
              title: "Luxury Candy Box",
              category: "Gift & Hampers",
              price: 29.99,
              rating: "4.8",
            },
          ];
          
          useEffect(() => {
            console.log(userid)
            fetchCart(userid);
          }, []);
        
    return(
        <>
        <div className="min-h-screen">
        <Header/>
        <div className="flex flex-col mb-[100px] sm:mb-0 space-y-3 mt-[12vh] md:space-y-0 md:flex-row items-baseline">
            {/* left section */}
            <div className="w-full md:w-[60vw] px-[5vw] ">
            {cartToggle=="cartP"&&(
             <div className="rounded-xl border-gray-300 border mt-[5vh] h-[70vh] ">
            
                <div className="flex text-[1.1rem] sticky top-0 z-10 flex-row items-center bg-[#8B024B] md:justify-center  text-white py-[2vh] overflow-hidden rounded-t-xl" >
                    <div className="w-[23vw] pl-[8vw] md:pl-0 md:w-[23vw]">Product</div>
                    <div className="w-[18vw] flex">
                    <div className="w-[6vw] hidden md:flex text-center">Price</div>
                    <div className="pl-[22vw] md:pl-0 text-center md:w-[10vw]">Quantity</div>
                    <div className="pl-[10vw] md:pl-0 w-[2vw]">Total</div>
                    </div>
                </div>
              
                <div className=" flex flex-col max-h-[60vh] overflow-y-scroll">
                    {Array.isArray(cart)&& cart.length>0&& cart.map((carts)=>(
                        
                        <CartList
                        key={carts.cartid}
                        imageurl={carts.imageurl}
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
            )}
                 {cartToggle=="billing"&&(
                     <BillingForm userId={userid}/> 
                 )}
                     {cartToggle=="PaymentForm"&&(
            <PaymentForm  userId={userid}/> 
        )}
            </div>
            {/* right section */}
            <div className="w-full md:w-[40vw] pl-[9vw] md:pl-0 pr-[9vw] flex min-h-[70vh] ">
<OrderSummary 
 key="e"
  totalPrice={totalPrice}
  discount={totalDiscount} 
  estimatedDelivery={estimatedDelivery}
/>

            </div>
        </div>
        </div>
        {currentModal == "thankYou" && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[100] px-4">
    <div className="bg-white px-[5vw] py-[5vh] rounded-lg shadow-lg w-[90vw] sm:w-[60vw] max-w-[90vw] text-center">
      <img src="../Images/tick.png" className="mx-auto w-[20%] max-w-[80px]" alt="Success" />
      
      <h2 className="sm:text-[1rem] md:text-[2.5rem] sm:text-[2rem] font-bold my-4">
        Thank You!
      </h2>

      <p className="text-gray-600 mb-2 w-[40vw] max-w-[90%] mx-auto sm:text-[1.2rem] sm:text-[1rem]">
        Create a card as unique as your love! Add your heartfelt message, pick a design, and make your gift truly unforgettable.
      </p>

      <p className="text-gray-800 font-medium text-[1.2rem] sm:text-[1rem]">
        Your Order is <span className="font-bold text-black">Placed</span>
      </p>

      <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4">
        <button
          className="px-6 py-3 sm:px-4 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 w-full sm:w-auto"
          onClick={closeModal}
          >
          Continue Shopping
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="px-12 py-3 sm:px-6 sm:py-2 bg-[#8B024B] text-white rounded-lg hover:bg-[#8A004B] w-full sm:w-auto"
          >
          Track Order
        </button>
      </div>
    </div>
  </div>
)} 

      {/* Track Order Modal */}
      {currentModal === "trackOrder" && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[100]">
          <div className="bg-white py-[5vh] shadow-lg w-[60vw] px-[15vw]">
            <h2 className="text-[3rem] font-bold text-center mb-4">Track Order</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Order ID</label>
                <input
                  type="text"
                  placeholder="ID..."
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Billing Email</label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
                <p className="text-xs flex text-gray-500 mt-1 items-center">
                  <img src="../Images/info.png" className="w-auto h-5 pr-1" alt="" /> Order ID that we sent to your email address.
                </p>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="px-20 py-2 bg-[#8B024B] text-white rounded-lg "
                  onClick={closeModal}
                >
                  Track Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <FooterPage></FooterPage>
        </>
    );
}
export default Cart;