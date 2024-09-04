import { getClientData } from "./getClientData";
import sendEmail from "./sendEmail";

import { Product } from "@/interfaces/Product";
import controller from "@/controllers/Controller";

const sendCartToServer = async (cart: Product[]) => {
  const clientData = await getClientData();
  const emailResponse = await sendEmail(cart, clientData);

  if (emailResponse.id) {
    const data = {
      cartData: cart,
      clientData: clientData,
    };

    try {
      const response = await controller.create(
        "http://localhost:8080/cart",
        data,
      );

      return response;
    } catch (error) {
      console.error("Error al enviar el carrito:", error);
    }
  }
};

export default sendCartToServer;
