import React, { useContext, useState } from "react";
import PaymentRadiobtn from "./paymentSelect";
import { AuthContext } from "../utils/AuthContext";
import { CartContext } from "../utils/CartContext";

const PaymentForm = ({ userId }) => {
  const {cart,
      updateCartItem,fetchCart,
      removeFromCart,clearCart}=useContext(CartContext)
  const {currentModal, setCurrentModal,billingId, setbillingId,paymentId,setcartToggle, setpaymentId}=useContext(AuthContext)
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  
  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate empty fields
    if (!cardholderName || !cardNumber || !expiryDate || !cvc) {
      alert("Please fill in all fields");
      return;
    }

    const paymentDetails = {
      user_id: userId,
      cardholder_name: cardholderName,
      card_number: cardNumber,
      expiry_date: expiryDate,
      cvc: cvc,
    };

    const response = await fetch("https://twisca-gpel.vercel.app/api/billing/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentDetails),
    });
    const data = await response.json();

    if (response.ok) {
      setpaymentId(data.payment_id)
      // console.log(cart)
    
    const orderData = {
      user_id: userId, 
      billing_info_id: billingId, 
      payment_info_id: data.payment_id, 
      cart,
    };
  
    const response = await fetch("https://twisca-gpel.vercel.app/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
  
    if (response.ok) {
      const data = await response.json();
      alert("Order created successfully!");
      setcartToggle("cartP")
      clearCart(userId)
      // console.log(data);
    } else {
      alert("Failed to create order");
    }
      setCurrentModal("thankYou")
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-[1.5rem] font-bold mb-4">Enter Payment Details</h2>
      <form className="text-gray-500 font-semibold" onSubmit={handleSubmit}>
        <PaymentRadiobtn />
        <label className="block mb-2">Cardholder's Name</label>
        <input
          type="text"
          name="cardholder_name"
          className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300"
          value={cardholderName}
          onChange={handleCardholderNameChange}
        />
        <div className="grid ">
          <div>
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="card_number"
              className="w-full p-2 mb-4 border border-gray-300  rounded-[1vw]"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
        </div>

        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]"
           // Should this be connected to email as well?
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Expiry Date</label>
            <input
              type="date"
              name="expiry_date"
              className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>
          <div>
            <label className="block mb-2">CVC</label>
            <input
              type="text"
              name="cvc"
              className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300"
              value={cvc}
              onChange={handleCvcChange}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button" onClick={()=>  setcartToggle("billing")}
            className="px-4 w-[35%] py-2 border mr-2 border-gray-300 text-gray-500 rounded-[1vw] md:rounded-[0.5vw]  hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] md:rounded-[0.5vw] mt-[0.5vh] w-[65%]"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
