import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import "./orderpanel.css";

interface Order {
  name: string;
  price: number;
}

const OrderPanel: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialOrders: Order[] = location.state?.orders || [];

  const [orders, setOrders] = useState<Order[]>(initialOrders);

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
        <FaArrowLeft />
      </button>

      <h1 className="order-summary-title">Order Summary</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="order-list-item">
            <div className="order-info">
              <span className="order-name">{order.name}</span>
              <span className="order-price">${order.price}</span>
            </div>

            <button
              onClick={() => handleDelete(index)}
              className="delete-button"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <button className="checkout-button" onClick={handleCheckout}>
        Confirm
      </button>
    </div>
  );
};

export default OrderPanel;
