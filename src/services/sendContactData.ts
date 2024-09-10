import Swal from "sweetalert2";
import controller from "@/controllers/Controller";
import { FormData } from "@/interfaces/FormData";
import { setFormToEmail } from "./sendEmail";

let contactCount: number = 0;

export const sendContactData = async (formData: FormData) => {
  const url = "/api/email";

  const emailBody = setFormToEmail(formData);

  console.log(emailBody);

  const emailData = {
    to: "redes@smartcol.com.co",
    subject: `Contacto desde Pag Web N° SMART-${(contactCount = +1)}`,
    text: emailBody,
  };

  const response = await controller.create(url, emailData);
  showContactResponse(response);
};

const showContactResponse = (response: any) => {
  if (response.status === 200) {
    Swal.fire({
      title: `Mensaje N° SMART-${response.id.toUpperCase()}`,
      text: "Hemos recibido tu mensaje y pronto nos pondremos en contacto contigo.",
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "bg-primary font-semibold",
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
