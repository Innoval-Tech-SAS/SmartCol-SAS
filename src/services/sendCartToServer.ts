import { Product } from "@/interfaces/Product";
import controller from "@/controllers/Controller";
import Swal from "sweetalert2";

const sendCartToServer = async (cart: Product[]) => {
  try {
    const response = await controller.create(
      "http://localhost:8080/cart",
      cart
    );
    console.log(response);

    if (response) {
      Swal.fire({
        title: response.message,
        text: "Un comercial se pondrá en contacto contigo",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#00A7AF",
      });
    }
  } catch (error) {
    console.error("Error al enviar el carrito:", error);
  }
};

export default sendCartToServer;
