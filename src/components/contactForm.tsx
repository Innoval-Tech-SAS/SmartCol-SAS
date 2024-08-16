import React, { useState } from "react";
import Form from "./Form";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          label="Selecciona una ciudad"
          variant="underlined"
          value={ciudad}
          onChange={handleCiudadChange}
          isInvalid={errors.ciudad !== ""}
          errorMessage={errors.ciudad}
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
              variant="underlined"
              type="text"
              label="Nombre Completo"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              color="primary"
              className="flex-1"
              isInvalid={errors.nombre !== ""}
              errorMessage={errors.nombre}
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Input
              variant="underlined"
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              color="primary"
              className="flex-1"
              isInvalid={errors.email !== ""}
              errorMessage={errors.email}
            />
            <Input
              variant="underlined"
              type="text"
              label="Número Telefónico"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              color="primary"
              className="flex-1"
              isInvalid={errors.telefono !== ""}
              errorMessage={errors.telefono}
            />
          </div>
        </div>

        <Textarea
          color="primary"
          label="Déjanos tus comentarios"
          name="comentarios"
          value={formData.comentarios}
          onChange={handleInputChange}
          variant="underlined"
          isInvalid={errors.comentarios !== ""}
          errorMessage={errors.comentarios}
        />
      </Form>
    </div>
  );
};

export default ContactForm;
