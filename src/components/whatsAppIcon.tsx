import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { whatsAppQueue } from "@/services/whatsappQueue";
import { WhatsAppIconProps } from "@/interfaces/WhatsappIconProps";

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ productName, size }) => {
  const handleClick = () => {
    const currentNumber: string | undefined = whatsAppQueue.dequeue() as string;

    if (!productName) {
      const url = `https://wa.me/57${currentNumber}?text=Hola,%20estoy%20interesado%20en%20los%20productos%20de%20su%20pág%20web.`;

      window.open(url, "_blank");
      whatsAppQueue.enqueue(currentNumber);
    } else {
      const text = `Hola,%20estoy%20interesado%20en%20este%20producto:%20${productName}%20de%20su%20pág%20web.`;
      const url = `https://wa.me/57${currentNumber}?text=${text}`;

      window.open(url, "_blank");
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
