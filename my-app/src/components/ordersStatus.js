import React, { useEffect, useState } from "react";
import  { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";



const OrdersPage = () => {
    const {user,userid,logout}=useContext(AuthContext)
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/orders/${userid}`);
        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = await response.json();
        console.log("Fetched Orders:", data); 
        setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userid]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {Array.isArray(orders)&& orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {Array.isArray(orders)&& orders.map((order) => (
            <li key={order.order_id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Order #{order.order_id}</h3>
              {/* <p><strong>Shipment Status:</strong> {order.shipment_status}</p> */}
              <p><strong>Name:</strong> {order.first_name}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Cart Products:</strong> {order.address}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
