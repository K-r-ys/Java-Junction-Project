import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

interface Order {
  name: string;
  price: number;
}

const Checkout: React.FC = () => {
  const location = useLocation();
  const orders: Order[] = location.state?.orders || [];

  return (
    <div>
      <h1>Checkout</h1>
      {orders.length > 0 ? (
        <div>
          <h2>Your Order:</h2>
          <ul>
            {orders.map((order: Order, index: number) => (
              <li key={index}>
                {order.name}: ${order.price.toFixed(2)}{" "}
              </li>
            ))}
          </ul>
          <h3>
            Total: $
            {orders
              .reduce((total: number, order: Order) => total + order.price, 0)
              .toFixed(2)}{" "}
          </h3>
          <p>Thank you for your order!</p>
        </div>
      ) : (
        <p>No orders to display.</p>
      )}
    </div>
  );
};

export default Checkout;
