import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { cityContacts } from "../config/site";
import IconButton from './iconButton';
import { Link } from "@nextui-org/link";

const Contact = () => {
    const [iconColor, setIconColor] = useState("");

    useEffect(() => {
        const updateIconColor = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const color = isDark ? "#E6D38E" : "#456E2A"
            setIconColor(color)
        }

        updateIconColor()

        const observer = new MutationObserver(updateIconColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, [])

    return (
        <div className="flex flex-col sm:flex-row justify-evenly w-full my-5">
            <div className="flex flex-col p-3 w-full sm:w-1/3">
                <h3 className="text-center text-primary font-bold text-3xl">CONTACTO</h3>
                <div className="flex flex-col sm:flex-row gap-10 mx-auto my-10">
                    {cityContacts.map((contact, index) => (
                        <div key={index} className="w-full sm:w-auto">
                            <ul className="flex flex-col">
                                <h3 className="text-center mb-1 text-2xl font-bold text-primary mt-4">{contact.city.toUpperCase()}</h3>
                                <Link className="flex items-center my-1">
                                    <FaLocationDot size={20} style={{ marginRight: "8px", color: iconColor }} />
                                    <h6 className="font-semibold text-foreground">{contact.address.toLocaleUpperCase()}</h6>
                                </Link>
                                {contact.cellphoneNumbers.map((cellphone, phoneIndex) => (
                                    <li className="flex py-1 items-center font-semibold" key={phoneIndex}>
                                        <Link
                                            isExternal
                                            href={`https://wa.me/+57${cellphone.replace(/\s+/g, '')}`}
                                            title="Contacto Comercial ">
                                            <FaWhatsapp className=""
                                                size={20}
                                                style={{ marginRight: "8px", color: iconColor }}
                                            />
                                            <p className="pb-1 text-foreground">
                                                {cellphone}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 p-10 w-full sm:w-2/3">
                <IconButton iconName="caja.png" title="Nuestros Productos" url="/products" />
                <IconButton iconName="camion.png" title="Distribución" url="" />
                <IconButton iconName="localizacion.png" title="Sedes" url="" />
                <IconButton url="" iconName="logo.png" title="¿Quienes Somos?" />
            </div>
        </div>
    )
}

export default Contact;
