import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { whatsAppQueue } from "@/services/whatsappQueue";

const WhatsAppIcon: React.FC = () => {
  const handleClick = () => {
    const currentNumber: string | undefined = whatsAppQueue.dequeue() as string;
    const url = `https://wa.me/57${currentNumber}?text=Hola,%20estoy%20interesado%20en%20sus%20productos.`;

    window.open(url, "_blank");
    whatsAppQueue.enqueue(currentNumber);
  };

  return (
    <a
      className="flex bg-primary/25 bg-opacity-50 cursor-pointer justify-center items-center border-2 border-primary text-white p-2 rounded-full shadow-2xl"
      id="whatsapp-container"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-primary" size={40} />
    </a>
  );
};

export default WhatsAppIcon;
