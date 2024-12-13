import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderPanel.css";

interface Order {
  name: string;
  price: number;
}

const OrderPanel: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialOrders: Order[] = location.state?.orders || [];

  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const calculateTotal = () =>
    orders.reduce((total, order) => total + order.price, 0);

  const handleDelete = (index: number) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { orders } });
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <h1>Order Summary</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.name}: ${order.price}
            <button
              onClick={() => handleDelete(index)}
              className="delete-button"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>{" "}
      <button className="checkout-button" onClick={handleCheckout}>
        Confirm
      </button>
    </div>
  );
};

export default OrderPanel;
