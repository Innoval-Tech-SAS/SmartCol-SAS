import { Product } from "@/interfaces/Product";

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  deleteToCart: (product: Product) => void;
  updateProductQuantity: (index: number, quantity: number) => void;
}
