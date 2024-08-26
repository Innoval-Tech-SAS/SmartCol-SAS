import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "@nextui-org/link";

import { cityContacts } from "../config/site";

import IconButton from "./iconButton";

interface ContactProps {
  title: string;
}

const Contact: React.FC<ContactProps> = ({ title }) => {
  const [iconColor, setIconColor] = useState("");

  useEffect(() => {
    const updateIconColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "#E6D38E" : "#456E2A";

      setIconColor(color);
    };

    updateIconColor();

    const observer = new MutationObserver(updateIconColor);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-evenly w-full my-5">
      <div className="flex flex-col p-5 w-full sm:w-1/2">
        <h3 className="text-center text-primary font-bold text-3xl">{title}</h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 mx-auto my-10">
          {cityContacts.map((contact, index) => (
            <div key={index} className="w-full sm:w-auto">
              <ul className="flex flex-col mx-6">
                <h3 className="text-center mb-1 text-2xl font-bold text-primary mt-4">
                  {contact.city.toUpperCase()}
                </h3>
                <Link
                  className="flex items-center my-1"
                  href=""
                  title={`Direccion Sede ${contact.city}`}
                >
                  <FaLocationDot
                    size={20}
                    style={{ marginRight: "8px", color: iconColor }}
                  />
                  <h6 className="font-semibold text-foreground whitespace-nowrap">
                    {contact.address.toLocaleUpperCase()}
                  </h6>
                </Link>

                {contact.phoneNumber && (
                  <Link
                    className="flex items-center my-1"
                    href={`tel:${contact.phoneNumber.replace(/\s+/g, "")}`}
                  >
                    <FaPhone
                      size={18}
                      style={{ marginRight: "8px", color: iconColor }}
                    />
                    <p className="font-semibold text-foreground">
                      {contact.phoneNumber}
                    </p>
                  </Link>
                )}
                {contact.cellphoneNumbers.map((cellphone, phoneIndex) => (
                  <li
                    key={phoneIndex}
                    className="flex my-1 items-center font-semibold whitespace-nowrap"
                  >
                    <Link
                      isExternal
                      href={`https://wa.me/+57${cellphone.replace(/\s+/g, "")}`}
                      title={`Contacto Comercial ${contact.city}`}
                    >
                      <FaWhatsapp
                        size={20}
                        style={{ marginRight: "8px", color: iconColor }}
                      />
                      <p className="pb-1 text-foreground">{cellphone}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly items-center py-4 px-6 sm:w-1/2">
        <IconButton
          iconName="caja.png"
          title="Productos"
          url="/products"
          variant="solid"
          darkTextColor="dark:text-background"
          textColor="text-white"
        />
        <IconButton
          iconName="camion.png"
          title="Distribución"
          url="/"
          variant="solid"
          darkTextColor="dark:text-background"
          textColor="text-white"
        />
        <IconButton
          iconName="logo.png"
          title="¿Quienes Somos?"
          url="/aboutUs"
          variant="solid"
          darkTextColor="dark:text-background"
          textColor="text-white"
        />
      </div>
    </div>
  );
};

export default Contact;
