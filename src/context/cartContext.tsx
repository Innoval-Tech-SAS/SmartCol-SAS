import { createContext, useContext } from "react";

import { CartContextType } from "@/interfaces/CartContextType";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

export { CartContext };
