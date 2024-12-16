import React, { useState } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Menu: React.FC = () => {
  const [orders, setOrders] = useState<MenuItem[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Latte",
      price: 4.5,
      image: "/Images/Latte.jpeg",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 4.0,
      image: "/Images/Cappuccino.jpeg",
    },
    {
      id: 3,
      name: "Iced Coffee",
      price: 3.5,
      image: "/Images/Iced coffee.jpeg",
    },
    {
      id: 4,
      name: "Macchiato",
      price: 5.0,
      image: "/Images/Macchiato.jpeg",
    },
    {
      id: 5,
      name: "Flat White",
      price: 4.7,
      image: "/Images/Flat white.jpeg",
    },
    {
      id: 6,
      name: "Espresso",
      price: 3.0,
      image: "/Images/Espresso.jpeg",
    },
  ];

  const handleOrder = (item: MenuItem) => {
    setOrders([...orders, item]);
    setMessage(`Order placed: ${item.name}`);

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleViewOrders = () => {
    navigate("/order-panel", { state: { orders } });
  };

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="coffee-card"
          onClick={() => handleOrder(item)}
        >
          <img src={item.image} alt={item.name} className="coffee-image" />
          <div className="coffee-name">{item.name}</div>
          <div className="coffee-price">${item.price.toFixed(2)}</div>
        </div>
      ))}
      <button onClick={handleViewOrders} className="view-orders-button">
        View Your Order
      </button>
      {message && <div className="order-message">{message}</div>}
    </div>
  );
};

export default Menu;
