import React, { useState } from "react";
import { CartContext } from "./cartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps): React.ReactElement {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (product: string) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };
  console.log(children);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
