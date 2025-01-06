import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import OrderPanel from "./OrderPanel";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

interface Order {
  name: string;
  price: number;
}

const App: React.FC = () => {
  const coffeeMenu = ["Latte", "Cappuccino", "Iced Coffee", "Macchiato"];
  const orders: Order[] = [
    { name: "Latte", price: 150 },
    { name: "Macchiato", price: 200 },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/"
          element={
            <>
              <Header listGroup={coffeeMenu} />
              <Menu />
            </>
          }
        />
        <Route path="/order-panel" element={<OrderPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
