import Swal from "sweetalert2";

import { setFormToEmail } from "./sendEmail";

import { FormData } from "@/interfaces/FormData";
import controller from "@/controllers/Controller";

let count = 0;

export const sendPQRSData = async (formData: FormData) => {
  count += 1;
  const url = "/pqrs";
  const emailBody = setFormToEmail(formData);

  const pqrsData = {
    receiver: "gestion.smartcol@gmail.com",
    subject: `${formData.subject} N° SM-PQRS-${count}`,
    text: emailBody,
  };
  const response = await controller.create(url, pqrsData);

  showPQRSResponse(response);
};

const showPQRSResponse = (response: any) => {
  if (response.message === "Email sent successfully") {
    Swal.fire({
      title: `PQRS N° SM-PQRS-${count}`,
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
