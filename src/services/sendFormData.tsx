import Controller from "@/controllers/Controller";
import Swal from "sweetalert2";

interface FormData {
  nombre: string;
  documento: string;
  motivo: string;
  email: string;
  telefono: string;
  comentarios: string;
}

export const sendFormData = async (formData: FormData) => {
  const url = "";
  const controller = new Controller();
  const response = await controller.create(url, formData);
  showPQRSResponse(response.json());
};

const showPQRSResponse = (response: any) => {
  if (response.status === 201) {
    Swal.fire({
      title: `PQRS N° SMART-${response.data.id}`,
      text: "Hemos recibido tu mensaje y pronto nos pondremos en contacto contigo.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  } else {
    Swal.fire({
      title: "¡Ups!",
      text: "Algo salió mal, por favor intenta de nuevo.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
};
