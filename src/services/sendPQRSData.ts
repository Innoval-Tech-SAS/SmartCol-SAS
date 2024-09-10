import Swal from "sweetalert2";
import { FormData } from "@/interfaces/FormData";
import controller from "@/controllers/Controller";
import { setFormToEmail } from "./sendEmail";

export const sendPQRSData = async (formData: FormData) => {
  const url = "/api/email";
  const emailBody = setFormToEmail(formData);
  const pqrsData = {
    to: "gestion.smartcol@gmail.com",
    subject: formData.subject,
    text: emailBody,
  };
  const response = await controller.create(url, pqrsData);
  showPQRSResponse(response);
};

const showPQRSResponse = (response: any) => {
  if (response.status === 200) {
    Swal.fire({
      title: `PQRS N° SM-PQRS-${response.id.toUpperCase()}`,
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
