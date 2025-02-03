import React from "react";
import OrderProgressTracker from "./orderStatus";
import Header from "./header";
import OrderSummary from "./orderSummary";
const Shipment=()=>{
    return(
        <>
        <Header></Header>
          <OrderProgressTracker status="Packaging" />
        <OrderSummary 
 key="e"
  totalPrice={3}
  discount={4343} 
  estimatedDelivery="54"
/>
        </>
    );
}
export default Shipment;