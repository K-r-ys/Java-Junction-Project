import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
interface FooterProps {
  message: string | null;
  onViewOrders: () => void;
}

const Footer: React.FC<FooterProps> = ({ message, onViewOrders }) => {
  return (
    <div className="footer">
      <button onClick={onViewOrders} className="view-orders-button">
        View Your Order
      </button>
      {message && <div className="order-message">{message}</div>}
    </div>
  );
};

export default Footer;
