import React from "react";

const BillingForm = () => {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-[1.3rem] font-semibold mb-4">Your Billing Information</h2>
      <form className="text-gray-500 font-semibold">
        <label className="block mb-2">Email Address</label>
        <input type="email" className="w-full p-2 mb-4 border border-gray-300 rounded-[1vw] " />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">First Name</label>
            <input type="text" className="w-full p-2 mb-4 border border-gray-300  rounded-[1vw] "  />
          </div>
          <div>
            <label className="block mb-2">Last Name</label>
            <input type="text" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />
          </div>
        </div>

        <label className="block mb-2">Address</label>
        <input type="text" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">City</label>
            <input type="text" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />
          </div>
          <div>
            <label className="block mb-2">State</label>
            <input type="text" className="w-full p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />
          </div>
        </div>

        <label className="block mb-2">Zip Code</label>
        <input type="text" className="w-1/2 p-2 mb-4 border rounded-[1vw]  border-gray-300 "  />

        <label className="block mb-2">Phone Number</label>
        <input type="tel" className="w-1/2 p-2 mb-4 border rounded-[1vw] border-gray-300 "  />

        <div className="flex justify-between mt-4">
          <button type="button" className="px-4 w-[35%] py-2 border mr-2 border-gray-300 text-gray-500 rounded-[1vw]  hover:bg-gray-400">Cancel</button>
          <button type="submit" className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] mt-[0.5vh] w-[65%]">Save & Continue</button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
