import React from "react";
import { useState } from "react";
import OrderDiv from "./orders";
const OrderSummary=()=>{
    const [currentModal, setCurrentModal] = useState(null); // 'thankYou' or 'trackOrder'

    const openTrackOrderModal = () => setCurrentModal("trackOrder");
    

    const closeModal = () => setCurrentModal(null);
    return(
        <div className="flex flex-col w-full border-gray-300 border px-[2vw] rounded-lg">
            <div className="font-semibold py-[2vh] text-[1.3rem]">Order Summary</div>
            <div className="text-[#8B024B] px-[0.1vw] py-[1vh] font-semibold border-y border-[#949494] mb-[2vh]">2 items</div>
            <div className=" border-b border-[#949494]">
              <OrderDiv></OrderDiv>
              <OrderDiv></OrderDiv>
            </div>
            <div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Price</div>
                    <div>$79.865</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Discount</div>
                    <div>$5</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-black font-semibold py-[1vh] ">
                    <div>Shipping</div>
                    <div className="text-[#8B024B]">Free</div>
                </div>
                <div className="flex font-bold flex-row justify-between px-[1.5vw] py-[1vh] ">
                    <div>Total</div>
                    <div>$74.98</div>
                </div>
                <div className="flex flex-row justify-between px-[1.5vw] text-[#414141] py-[1vh] ">
                    <div>Estimated Delivery by</div>
                    <div>01 Feb,2023</div>
                </div>
            </div>
            <div> <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] mt-[0.5vh] w-full" onClick={()=>{setCurrentModal("thankYou")}}>Continue</button></div>
      {currentModal=="thankYou" && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[100]">
          <div className="bg-white px-[5vw] py-[5vh] rounded-lg shadow-lg min-h-fit w-[60vw] text-center">
            <img src="../Images/tick.png" className="mx-auto " alt="" />
            <h2 className="text-[3rem] font-bold my-4">Thank You!</h2>
            <p className="text-gray-600 mb-2 w-[40vw] mx-auto">
              Create a card as unique as your love! Add your heartfelt message, pick a design, and make your gift truly unforgettable.
            </p>
            <p className="text-gray-800 font-medium">Your Order ID is <span className="font-bold text-black">#96459761</span></p>
            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 border mx-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                onClick={closeModal}
                >
                Continue Shopping
              </button>
              <button  onClick={()=>{setCurrentModal("trackOrder")}} className="px-12 py-2 bg-[#8B024B] text-white rounded-lg hover:bg-[#8A004B]">
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
      </div>
    );
}
export default OrderSummary;