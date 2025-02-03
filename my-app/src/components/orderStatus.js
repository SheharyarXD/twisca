import React from "react";

const OrderProgressTracker = ({ status }) => {
  const steps = [
    { label: "Order Placed", icon: "📜" },
    { label: "Packaging", icon: "📦" },
    { label: "On The Road", icon: "🚚" },
    { label: "Delivered", icon: "🤝" },
  ];

  const currentStep = steps.findIndex((step) => step.label === status);

  return (
    <div className="flex items-center justify-center max-w-2xl mx-auto mt-3 mb-6 relative">
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center relative w-1/4">
          {/* Connector Line */}
          {index !== 0 && (
            <div
              className={`absolute top-3 -left-20 w-full h-1 ${
                index <= currentStep ? "bg-[#8B024B]" : "bg-gray-300"
              }`}
            ></div>
          )}

          {/* Step Indicator */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold z-10 ${
              index <= currentStep ? "bg-[#8B024B]" : "bg-gray-300"
            }`}
          >
            {index <= currentStep ? "✔" : ""}
          </div>

          {/* Step Label & Icon */}
          <div className="mt-2 text-center">
            <div className="text-xl">{step.icon}</div>
            <p
              className={`text-sm ${
                index <= currentStep ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              {step.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderProgressTracker;
