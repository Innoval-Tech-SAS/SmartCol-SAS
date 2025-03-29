import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppIconProps } from "@/interfaces/WhatsappIconProps";
import controller from "@/controllers/Controller";

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ productName, size }) => {
  const handleClick = async () => {
    try {
      const res = await controller.getWhatsAppNumber();
      if (!res.whatsAppLink) {
        console.error("WhatsApp link not found in response");
        return;
      }
      const data = res as { whatsAppLink: string };
      const currentNumber = data.whatsAppLink as string;
      const text = productName
        ? `Hola,%20estoy%20interesado%20en%20este%20producto:%20${productName}%20de%20su%20pág%20web.`
        : "Hola,%20estoy%20interesado%20en%20los%20productos%20de%20su%20pág%20web.";

      const url = `${currentNumber}?text=${text}`;
      console.log("WhatsApp URL:", url);
      window.open(url, "_blank");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <a
      className="flex bg-primary/25 bg-opacity-50 cursor-pointer justify-center items-center border-2 border-primary text-white p-2 rounded-full shadow-2xl"
      id="whatsapp-container"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-primary" size={size} />
    </a>
  );
};

export default WhatsAppIcon;
