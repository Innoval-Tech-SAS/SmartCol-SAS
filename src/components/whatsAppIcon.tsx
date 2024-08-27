import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsAppQueue } from "@/services/Queue";

const WhatsAppIcon: React.FC = () => {
  const whatsappNumbers = [
    "3504227733",
    "3160179783",
    "3164568409",
    "3504227737",
  ];

  whatsappNumbers.forEach((number) => {
    whatsAppQueue.enqueue(number);
  });

  const handleClick = () => {
    const currentNumber: string | undefined = whatsAppQueue.dequeue() as string;
    const url = `https://wa.me/57${currentNumber}?text=Hola,%20estoy%20interesado%20en%20sus%20productos.`;
    window.open(url, "_blank");
    whatsAppQueue.enqueue(currentNumber);
  };
  return (
    <a
      onClick={handleClick}
      className="flex bg-primary/25 bg-opacity-50 cursor-pointer justify-center items-center border-2 border-primary text-white p-2 rounded-full shadow-2xl"
      id="whatsapp-container"
    >
      <FaWhatsapp size={40} className="text-primary" />
    </a>
  );
};

export default WhatsAppIcon;
