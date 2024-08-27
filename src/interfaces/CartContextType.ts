import { Product } from "@/interfaces/Product";

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}
