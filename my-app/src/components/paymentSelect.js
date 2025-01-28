import React, { useState } from "react";

const PaymentRadiobtn = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pt-[1vh] pb-[3vh]">
      <div className="flex flex-row h-fit space-x-6">
          <label className="flex flex-row items-center">
            <input
              type="radio"
              name="radioGroup"
            //   value={}
            //   checked={ }
            //   onChange={}
            />
        <img src="../Images/PayPal.png" className="pl-2 w-auto h-[25px]" alt="" />

          </label>
          <label  className="flex flex-row items-center">
            <input
              type="radio"
              name="radioGroup"
            //   value={}
            //   checked={ }
            //   onChange={}
            />
          <img src="../Images/Googlepay.png" className="pl-2 w-auto h-[25px]" alt="" />

          </label>
          <label className="flex flex-row">
            <input
              type="radio"
              name="radioGroup"
            //   value={}
            //   checked={ }
            //   onChange={}
            />
          <img src="../Images/card.png" className="pl-2" alt="" />

          </label>
        
      </div>
    </div>
  );
};

export default PaymentRadiobtn;
