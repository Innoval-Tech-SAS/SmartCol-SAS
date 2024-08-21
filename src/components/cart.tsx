import React from "react";
import { useState } from "react";

import { GiShoppingCart } from "react-icons/gi";

const Cart: React.FC = () => {
  const [cart, setCart] = useState([]);
  return (
    <a
      className="bg-primary/25 bg-opacity-50 flex cursor-pointer justify-center items-center border-2 border-primary text-white p-3 rounded-full shadow-2xl"
      id="cartcontainer"
    >
      <GiShoppingCart size={50} className="text-primary" />
    </a>
  );
};

export default Cart;
