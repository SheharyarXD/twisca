import React from "react";
import PaymentRadiobtn from "./paymentSelect";
const PaymentForm = () => {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-[1.5rem] font-bold mb-4">Enter Payment Details</h2>
      <form className="text-gray-500 font-semibold">
      <PaymentRadiobtn/>
        <label className="block mb-2">Cardholder's Name</label>
        <input type="text" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />
        <div className="grid ">
          <div>
            <label className="block mb-2">Card Number</label>
            <input type="text" className="w-full p-2 mb-4 border border-gray-300  rounded-[1vw] "  />
          </div>
        </div>

        <label className="block mb-2">Email Address</label>
        <input type="email" className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw] " />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Expiry Date</label>
            <input type="date" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />
          </div>
          <div>
            <label className="block mb-2">CVC</label>
            <input type="text" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button type="button" className="px-4 w-[35%] py-2 border mr-2 border-gray-300 text-gray-500 rounded-[1vw]  hover:bg-gray-400">Cancel</button>
          <button type="submit" className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] mt-[0.5vh] w-[65%]">Proceed to Payment</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
