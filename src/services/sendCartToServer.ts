import { Product } from "@/interfaces/Product";
import controller from "@/controllers/Controller";

import { getClientData } from "./getClientData";
import sendEmail from "./sendEmail";

const sendCartToServer = async (cart: Product[]) => {
  const clientData = await getClientData();

  const emailBody = sendEmail(cart, clientData.value);

  try {
    const response = await controller.create(
      "http://localhost:8080/cart",
      cart
    );

    return response;
  } catch (error) {
    console.error("Error al enviar el carrito:", error);
  }
};

export default sendCartToServer;
