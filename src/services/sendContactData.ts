import Controller from "@/controllers/Controller";
import Swal from "sweetalert2";

interface FormData {
  ciudad: string;
  nombre: string;
  email: string;
  telefono: string;
  comentarios: string;
}

export const sendContactData = async (formData: FormData) => {
  const url = "http://localhost:5000/ContactData";
  const controller = new Controller();
  const response = await controller.create(url, formData);
  console.log(response);
  showContactResponse(response);
};

const showContactResponse = (response: any) => {
  if (response.id) {
    Swal.fire({
      title: `Mensaje N° SM-MS-${response.id.toUpperCase()}`,
      text: "Hemos recibido tu mensaje y pronto nos pondremos en contacto contigo.",
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton:
          "text-primary p-3 font-semibold border border-primary bg-background rounded-3xl",
      },
    });
  } else {
    Swal.fire({
      title: "¡Ups!",
      text: "Algo salió mal, por favor intenta de nuevo.",
      icon: "error",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton:
          "text-primary p-3 font-semibold border border-primary bg-background rounded-3xl",
      },
    });
  }
};
