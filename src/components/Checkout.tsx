import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./Checkout.css";

interface Order {
  name: string;
  price: number;
}

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orders: Order[] = location.state?.orders || [];

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {orders.length > 0 ? (
        <div className="order-details">
          <h2 className="order-subtitle">Your Order:</h2>
          <ul className="order-list">
            {orders.map((order: Order, index: number) => (
              <li key={index} className="order-list-item">
                <div className="order-info">
                  <span className="order-name">{order.name}</span>
                  <span className="order-price">${order.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="order-total">
            Total: $
            {orders
              .reduce((total: number, order: Order) => total + order.price, 0)
              .toFixed(2)}
          </h3>
          <p className="order-thanks">Thank you for your order!</p>
        </div>
      ) : (
        <p className="no-orders">No orders to display.</p>
      )}
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft />
      </button>

      <button onClick={() => navigate("/")} className="home-button">
        Menu
      </button>
    </div>
  );
};

export default Checkout;
