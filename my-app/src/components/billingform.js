import React, { useState,useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { CartContext } from "../utils/CartContext";

const BillingForm = ({ userId }) => { // Pass userId as a prop
     const {userid,cartToggle, setcartToggle,billingId, setbillingId,paymentId, setpaymentId}=useContext(AuthContext);
       const {cart,
           updateCartItem,fetchCart,
           removeFromCart,clearCart}=useContext(CartContext)
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   const dataToSend = { ...formData, user_id: userId };

  //   const response = await fetch("https://twisca-gpel.vercel.app/api/billing", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(dataToSend),
  //   });
  //   const data = await response.json();

  //   if (response.ok) {
  //     setbillingId(data.billing_info_id)
  //     alert("Billing information saved successfully!");
  //     setFormData({
  //       email: "",
  //       first_name: "",
  //       last_name: "",
  //       address: "",
  //       city: "",
  //       state: "",
  //       zip_code: "",
  //       phone: "",
  //     });
  //     setcartToggle("cartP")
  //     clearCart(userId)
  //   } else {
  //     alert("Error saving billing information");
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataToSend = { ...formData, user_id: userId };

    const recipientNumber = "923094352844"; 

    let message = `🛒 New Order Received!\n\n`;
    message += `👤 Name: ${dataToSend.first_name} ${dataToSend.last_name}\n`;
    message += `📧 Email: ${dataToSend.email}\n`;
    message += `🏠 Address: ${dataToSend.address}, ${dataToSend.city}, ${dataToSend.state}, ${dataToSend.zip_code}\n`;
    message += `📞 Phone: ${dataToSend.phone}\n`;
    message += `🆔 User ID: ${dataToSend.user_id}\n\n`;

    if (cart.length > 0) {
        message += `🛍️ Cart Items:\n`;
        cart.forEach((item, index) => {
            message += `#${index + 1} - ${item.productName} (Qty: ${item.quantity}, Price: ${item.price})\n`;
        });
    } else {
        message += `🛍️ Cart is empty.\n`;
    }

    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;

    setFormData({
        email: "",
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        phone: "",
    });

    setcartToggle("cartP");
    clearCart(userId);
};

  return (
    <div className="mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-[1.3rem] font-semibold mb-4">Your Billing Information</h2>
      <form className="text-gray-500 font-semibold" onSubmit={handleSubmit}>
        <label className="block mb-2">Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]" required />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">First Name</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]" required />
          </div>
          <div>
            <label className="block mb-2">Last Name</label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]" required />
          </div>
        </div>

        <label className="block mb-2">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]" required />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]" required />
          </div>
          <div>
            <label className="block mb-2">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw]" required />
          </div>
        </div>
    <div>
        <label className="block mb-2">Zip Code</label>
        <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} className="w-1/2 p-2 mb-4 border border-gray-300 rounded-[1vw]" required />

        <label className="block mb-2">Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-1/2 p-2 mb-4 border border-gray-300 rounded-[1vw]" required />
    </div>

        <div className="flex justify-between mt-4">
          <button type="button" onClick={()=>  setcartToggle("cartP")} className="px-4 w-[35%] py-2 border mr-2 border-gray-300 text-gray-500 rounded-[1vw] md:rounded-[0.5vw] hover:bg-gray-400">Cancel</button>
          <button type="submit"  className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] md:rounded-[0.5vw] mt-[0.5vh] w-[65%]">Save & Continue</button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
