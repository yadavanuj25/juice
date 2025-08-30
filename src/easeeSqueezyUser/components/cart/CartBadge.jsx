import React, { useEffect, useState } from "react";

const CartBadge = ({ cartCount }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cartCount >= 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300); // reset after animation
      return () => clearTimeout(timeout);
    }
  }, [cartCount]);

  return (
    <span
      className={`absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full 
      transition-transform duration-300 ${animate ? "scale-125" : "scale-100"}`}
    >
      {cartCount}
    </span>
  );
};

export default CartBadge;
