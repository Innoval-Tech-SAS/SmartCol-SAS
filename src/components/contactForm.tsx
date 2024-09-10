import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

import Form from "./Form";

import { capitalesColombia } from "@/config/site";
import { validateEmail, validateName } from "@/services/validators";
import { sendContactData } from "@/services/sendContactData";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    selectedCapital: "",
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const [errors, setErrors] = useState({
    selectedCapital: "",
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCiudadChange = (value: string) => {
    setFormData({
      ...formData,
      selectedCapital: value,
    });
  };

  const validateForm = () => {
    const emailValid = validateEmail(formData.email);
    const nombreValid = validateName(formData.name);
    const telefonoValid = formData.phone.length >= 6;
    const comentariosValid = formData.text.length > 0;
    const ciudadValid = formData.selectedCapital !== "";

    setErrors({
      ...errors,
      email: emailValid ? "" : "Ingresa un correo válido",
      name: nombreValid ? "" : "Ingresa un nombre válido",
      phone: telefonoValid ? "" : "Ingresa un teléfono válido",
      text: comentariosValid ? "" : "Ingresa un comentario",
      selectedCapital: ciudadValid ? "" : "Selecciona una ciudad",
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
          errorMessage={errors.selectedCapital}
          isInvalid={errors.selectedCapital !== ""}
          label="Selecciona una ciudad"
          value={formData.selectedCapital}
          variant="underlined"
          onChange={(e) => handleCiudadChange(e.target.value)}
        >
          {capitalesColombia.map((ciudad) => (
            <SelectItem key={ciudad} value={ciudad}>
              {ciudad}
            </SelectItem>
          ))}
        </Select>

        <div className={`flex flex-col gap-4`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Input
              className="flex-1"
              color="primary"
              errorMessage={errors.name}
              isInvalid={errors.name !== ""}
              label="Nombre Completo"
              name="name"
              type="text"
              value={formData.name}
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
              errorMessage={errors.phone}
              isInvalid={errors.phone !== ""}
              label="Número Telefónico"
              name="phone"
              type="text"
              value={formData.phone}
              variant="underlined"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <Textarea
          color="primary"
          errorMessage={errors.text}
          isInvalid={errors.text !== ""}
          label="Déjanos tus comentarios"
          name="text"
          value={formData.text}
          variant="underlined"
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default ContactForm;
