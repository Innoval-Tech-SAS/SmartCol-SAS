import React, { useState, ReactNode } from "react";
import { CartContext } from "./cartContext";
import { Product } from "@/pages/products"; // Ajusta la ruta según tu estructura

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({ children }: CartProviderProps): React.ReactElement {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    // Verifica si el producto ya está en el carrito usando una propiedad única, como 'id'
    if (!cart.find((item) => item.id === product.id)) {
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
