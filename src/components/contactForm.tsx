import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

import Form from "./Form";

import { capitalesColombia } from "@/config/site";
import { validateEmail, validateName } from "@/services/validators";
import { sendContactData } from "@/services/sendContactData";

const ContactForm: React.FC = () => {
  const [ciudad, setCiudad] = useState<string>("");

  const [formData, setFormData] = useState({
    ciudad: "",
    nombre: "",
    email: "",
    telefono: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState({
    ciudad: "",
    nombre: "",
    email: "",
    telefono: "",
    comentarios: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCiudad(e.target.value);
  };

  const validateForm = () => {
    const emailValid = validateEmail(formData.email);
    const nombreValid = validateName(formData.nombre);
    const telefonoValid = formData.telefono.length >= 6;
    const comentariosValid = formData.comentarios.length > 0;
    const ciudadValid = ciudad !== "";

    setErrors({
      ...errors,
      email: emailValid ? "" : "Ingresa un correo válido",
      nombre: nombreValid ? "" : "Ingresa un nombre válido",
      telefono: telefonoValid ? "" : "Ingresa un teléfono válido",
      comentarios: comentariosValid ? "" : "Ingresa un comentario",
      ciudad: ciudadValid ? "" : "Selecciona una ciudad",
    });

    return (
      emailValid &&
      nombreValid &&
      telefonoValid &&
      comentariosValid &&
      ciudadValid
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido");
      sendContactData(formData);
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <div className="">
      <Form onSubmit={handleSubmit}>
        <Select
          color="primary"
          errorMessage={errors.ciudad}
          isInvalid={errors.ciudad !== ""}
          label="Selecciona una ciudad"
          value={ciudad}
          variant="underlined"
          onChange={handleCiudadChange}
        >
          {capitalesColombia.map((capital, index) => (
            <SelectItem
              key={index}
              className="text-lg text-gray-800 font-semibold"
              value={capital}
            >
              {capital}
            </SelectItem>
          ))}
        </Select>

        <div className={`flex flex-col gap-4`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Input
              className="flex-1"
              color="primary"
              errorMessage={errors.nombre}
              isInvalid={errors.nombre !== ""}
              label="Nombre Completo"
              name="nombre"
              type="text"
              value={formData.nombre}
              variant="underlined"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Input
              className="flex-1"
              color="primary"
              errorMessage={errors.email}
              isInvalid={errors.email !== ""}
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              variant="underlined"
              onChange={handleInputChange}
            />
            <Input
              className="flex-1"
              color="primary"
              errorMessage={errors.telefono}
              isInvalid={errors.telefono !== ""}
              label="Número Telefónico"
              name="telefono"
              type="text"
              value={formData.telefono}
              variant="underlined"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <Textarea
          color="primary"
          errorMessage={errors.comentarios}
          isInvalid={errors.comentarios !== ""}
          label="Déjanos tus comentarios"
          name="comentarios"
          value={formData.comentarios}
          variant="underlined"
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default ContactForm;
