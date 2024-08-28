import Swal from "sweetalert2";

import Controller from "@/controllers/Controller";

interface FormData {
  nombre: string;
  documento: string;
  motivo: string;
  email: string;
  telefono: string;
  comentarios: string;
}

export const sendPQRSData = async (formData: FormData) => {
  const url = "http://localhost:5000/PQRData";
  const controller = new Controller();
  const response = await controller.create(url, formData);

  console.log(response);
  showPQRSResponse(response);
};

const showPQRSResponse = (response: any) => {
  if (response.id) {
    // if (response.id > 999) { }
    Swal.fire({
      title: `PQRS N° SM-PQRS-${response.id.toUpperCase()}`,
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
