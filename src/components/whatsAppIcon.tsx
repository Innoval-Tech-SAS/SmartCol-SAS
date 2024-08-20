import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      className="flex cursor-pointer justify-center items-center border-2 border-primary text-white p-3 rounded-full shadow-2xl bg-background"
      id="whatsapp-container"
    >
      <FaWhatsapp size={50} className="text-primary" />
    </a>
  );
};

export default WhatsAppIcon;
