import React, { useState, useEffect } from "react";
import "./Header.css";

interface HeaderProps {
  listGroup: string[];
}

const Header: React.FC<HeaderProps> = ({ listGroup }) => {
  const [currentCoffee, setCurrentCoffee] = useState<string>(listGroup[0]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * listGroup.length);
        setCurrentCoffee(listGroup[randomIndex]);
        setIsTransitioning(false);
      }, 500);
    }, 3000); // Change coffee name every 3 seconds

    return () => clearInterval(interval);
  }, [listGroup]);

  return (
    <header>
      <h1>Espresso Lane</h1>
      <p>
        Get your{" "}
        <span
          className={`dynamic-part ${isTransitioning ? "transitioning" : ""}`}
        >
          {currentCoffee}
        </span>
      </p>
    </header>
  );
};

export default Header;
