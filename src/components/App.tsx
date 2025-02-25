import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import OrderPanel from "./OrderPanel";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

interface Order {
  name: string;
  price: number;
}

const App: React.FC = () => {
  // Define individual coffee menus
  const espressoMenu = [
    "Latte",
    "Cappuccino",
    "Mocha",
    "Macchiato",
    "Flat White",
    "Espresso",
  ];
  const coldCoffeeMenu = [
    "Cold Brew",
    "Frappe",
    "Iced Latte",
    "Nitro Coffee",
    "Iced Caramel Macchiato",
    "Iced Mocha",
  ];
  const regionalCoffeeMenu = [
    "Turkish Coffee",
    "Ethiopian Coffee",
    "Italian Affogato",
    "Vietnamese Egg Coffee",
    "Kopi Luwak (Indonesia)",
    "Cafe De Olla (Mexico)",
  ];

  // Combine all coffee arrays into one list
  const allCoffees = [
    ...espressoMenu,
    ...coldCoffeeMenu,
    ...regionalCoffeeMenu,
  ];

  const orders: Order[] = [
    { name: "Latte", price: 150 },
    { name: "Macchiato", price: 200 },
  ];

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/"
            element={
              <>
                <Header listGroup={allCoffees} />
                <Menu />
              </>
            }
          />
          <Route path="/order-panel" element={<OrderPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
