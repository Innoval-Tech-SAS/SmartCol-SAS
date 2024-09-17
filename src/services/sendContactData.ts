import Swal from "sweetalert2";

import { setFormToEmail } from "./sendEmail";

import controller from "@/controllers/Controller";
import { FormData } from "@/interfaces/FormData";

let contactCount: number = 0;

export const sendContactData = async (formData: FormData) => {
  const url = "/api/email";

  const emailBody = setFormToEmail(formData);

  const emailData = {
    receiver: "redes@smartcol.com.co",
    subject: `Contacto desde Pag Web N° SMART-${(contactCount = +1)}`,
    text: emailBody,
  };

  const response = await controller.create(url, emailData);

  showContactResponse(response);
};

const showContactResponse = (response: any) => {
  if (response.message === "Email sent successfully") {
    contactCount += 1;
    Swal.fire({
      title: `Mensaje N° SMART-${contactCount}`,
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
        confirmButton: "bg-primary font-semibold",
      },
    });
  }
};
