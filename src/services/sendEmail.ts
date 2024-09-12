import { Product } from "@/interfaces/Product";
import { ClientData } from "@/interfaces/ClientData";
import controller from "@/controllers/Controller";
import { FormData } from "@/interfaces/FormData";

let quotesCount: number = 0;

const sendEmail = async (cart: Product[], clientData: ClientData) => {
  const emailBody: string = createEmailBody(cart, clientData);
  if (emailBody) {
    quotesCount += 1;
    const emailData = {
      subject: `Cotización N° ${quotesCount} desde Pag Web`,
      text: emailBody,
    };

    return await controller.create("/api/email", emailData);
  } else {
    console.error("No email body was created");
  }
};

const createEmailBody = (cart: Product[], clientData: ClientData) => {
  const emailBody = `

    Datos del Cliente:
    
    Nombre: ${clientData.name}
    Email: ${clientData.email}
    Teléfono: ${clientData.phone}
    Ciudad: ${clientData.selectedCapital}

    Productos:
    ${cart
      .map((product) => {
        return `
        Nombre: ${product.name},
        Cantidad: ${product.quantity}
      `;
      })
      .join("")}
  `;

  return emailBody;
};

export const setFormToEmail = (formData: FormData): string => {
  const emailBody = `
    Datos del Cliente:
    
    Nombre: ${formData.name}
    Email: ${formData.email}
    Teléfono: ${formData.phone}
    Ciudad: ${formData.selectedCapital}
    ${formData.documentType && formData.document ? `Documento: ${formData.documentType} ${formData.document}\n` : ""}

    Mensaje:
    ${formData.text}

    ${formData.comments ? `Comentarios:\n${formData.comments}` : ""}
  `;

  return emailBody;
};

export default sendEmail;
