import { emailQueue } from "@/services/emailQueue";
import { Product } from "@/interfaces/Product";
import { ClientData } from "@/interfaces/ClientData";
import controller from "@/controllers/Controller";

let quotesCount: number = 0;

const sendEmail = async (cart: Product[], clientData: ClientData) => {
  const emailBody: string = createEmailBody(cart, clientData);
  const currentEmail: string | undefined = emailQueue.dequeue() as string;

  if (currentEmail) {
    quotesCount += 1;
    const emailData = {
      to: currentEmail,
      subject: `Cotización N° ${quotesCount} desde Pag Web`,
      text: emailBody,
    };

    emailQueue.enqueue(currentEmail);

    return await controller.create("http://localhost:8080/email", emailData);
  } else {
    console.error("No email available in the queue.");
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

export default sendEmail;
