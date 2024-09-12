import { getClientData } from "./getClientData";
import { sendCart } from "./sendEmail";

import { Product } from "@/interfaces/Product";

const sendCartToServer = async (cart: Product[]) => {
  const clientData = await getClientData();

  try {
    return await sendCart(cart, clientData);
  } catch (error) {
    console.error("Error al enviar el carrito:", error);
  }
};

export default sendCartToServer;
