import React, { useState } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

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

  // Espresso Menu
  const espressoMenu: MenuItem[] = [
    { id: 1, name: "Latte", price: 4.5, image: "/Images/Latte.jpeg" },
    { id: 2, name: "Cappuccino", price: 4.0, image: "/Images/Cappuccino.jpeg" },
    { id: 3, name: "Mocha", price: 3.5, image: "/Images/Mocha.jpeg" },
    { id: 4, name: "Macchiato", price: 5.0, image: "/Images/Macchiato.jpeg" },
    { id: 5, name: "Flat White", price: 4.7, image: "/Images/Flat white.jpeg" },
    { id: 6, name: "Espresso", price: 3.0, image: "/Images/Espresso.jpeg" },
  ];

  // Cold Coffee Menu
  const coldCoffeeMenu: MenuItem[] = [
    { id: 7, name: "Cold Brew", price: 4.5, image: "/Images/Cold brew.jpeg" },
    { id: 8, name: "Frappe", price: 5.0, image: "/Images/Frappe.jpeg" },
    { id: 9, name: "Iced Latte", price: 4.8, image: "/Images/Iced latte.jpeg" },
    { id: 10, name: "Nitro Coffee", price: 5.5, image: "/Images/Nitro.jpeg" },
    {
      id: 11,
      name: "Iced Caramel Macchiato",
      price: 5.5,
      image: "/Images/Iced caramel macchiato.jpeg",
    },
    {
      id: 12,
      name: "Iced Mocha",
      price: 5.5,
      image: "/Images/Iced mocha.jpeg",
    },
  ];

  // Regional Coffee Menu
  const regionalCoffeeMenu: MenuItem[] = [
    {
      id: 13,
      name: "Turkish Coffee",
      price: 4.0,
      image: "/Images/Turkish coffee.jpeg",
    },
    {
      id: 14,
      name: "Ethiopian Coffee",
      price: 5.0,
      image: "/Images/Ethiopian coffee.jpeg",
    },
    {
      id: 15,
      name: "Italian Affogato",
      price: 4.5,
      image: "/Images/Italian affogato.jpeg",
    },
    {
      id: 16,
      name: "Vietnamese Egg Coffee",
      price: 5.2,
      image: "/Images/Vietnamese egg coffee.jpeg",
    },
    {
      id: 17,
      name: "Kopi Luwak (Indonesia)",
      price: 5.2,
      image: "/Images/Kopi luwak.jpeg",
    },
    {
      id: 18,
      name: "Cafe De Olla (Mexico)",
      price: 5.2,
      image: "/Images/Cafe de olla.jpeg",
    },
  ];

  const handleOrder = (item: MenuItem) => {
    setOrders([...orders, item]);
    setMessage(`Order placed: ${item.name}`);
    setTimeout(() => setMessage(null), 2000);
  };

  const handleViewOrders = () => {
    navigate("/order-panel", { state: { orders } });
  };

  return (
    <div className="menu-container">
      {/* Scrollable menu content */}
      <div className="menu-scroll">
        {/* Espresso Section */}
        <div className="menu-section">
          <h2 className="menu-heading">Espresso</h2>
          <div className="menu-panel">
            {espressoMenu.map((item) => (
              <div
                key={item.id}
                className="coffee-card"
                onClick={() => handleOrder(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="coffee-image"
                />
                <div className="coffee-name">{item.name}</div>
                <div className="coffee-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cold Brews Section */}
        <div className="menu-section">
          <h2 className="menu-heading">Cold Coffee</h2>
          <div className="menu-panel">
            {coldCoffeeMenu.map((item) => (
              <div
                key={item.id}
                className="coffee-card"
                onClick={() => handleOrder(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="coffee-image"
                />
                <div className="coffee-name">{item.name}</div>
                <div className="coffee-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Section */}
        <div className="menu-section">
          <h2 className="menu-heading">Regional</h2>
          <div className="menu-panel">
            {regionalCoffeeMenu.map((item) => (
              <div
                key={item.id}
                className="coffee-card"
                onClick={() => handleOrder(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="coffee-image"
                />
                <div className="coffee-name">{item.name}</div>
                <div className="coffee-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {message && (
        <div className={`order-message ${message ? "visible" : ""}`}>
          {message}
        </div>
      )}

      <Footer message={message} onViewOrders={handleViewOrders} />
    </div>
  );
};

export default Menu;
