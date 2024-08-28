import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

import Form from "./Form";

import { capitalesColombia } from "@/config/site";
import { sendPQRSData } from "@/services/sendPQRSData";
import { validateEmail, validateName } from "@/services/validators";

interface PQRFormProps {
  inputGroupStyle?: string;
}

const PQRForm: React.FC<PQRFormProps> = ({ inputGroupStyle }) => {
  const [asunto, setAsunto] = useState<string>("");
  const [ciudad, setCiudad] = useState<string>("");
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    motivo: "",
    email: "",
    telefono: "",
    comentarios: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    documento: "",
    motivo: "",
    email: "",
    telefono: "",
    comentarios: "",
    asunto: "",
    ciudad: "",
  });

  const handleAsuntoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAsunto(e.target.value);
  };

  const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCiudad(e.target.value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const emailValid = validateEmail(formData.email);
    const nombreValid = validateName(formData.nombre);
    const documentoValid = formData.documento.length >= 6;
    const motivoValid = formData.motivo.length >= 6;
    const telefonoValid = formData.telefono.length >= 6;
    const comentariosValid = formData.comentarios.length > 0;
    const asuntoValid = asunto !== "";
    const ciudadValid = ciudad !== "";

    setErrors({
      nombre: nombreValid ? "" : "Por favor, ingresa un nombre válido",
      documento: documentoValid ? "" : "Por favor, ingresa un documento válido",
      motivo: motivoValid ? "" : "Por favor, ingresa un motivo válido",
      email: emailValid
        ? ""
        : "Por favor, ingresa un correo electrónico válido",
      telefono: telefonoValid
        ? ""
        : "Por favor, ingresa un número telefónico válido",
      comentarios: comentariosValid ? "" : "Por favor, ingresa tus comentarios",
      asunto: asuntoValid ? "" : "Por favor, selecciona un asunto",
      ciudad: ciudadValid ? "" : "Por favor, selecciona una ciudad",
    });

    return (
      emailValid &&
      nombreValid &&
      documentoValid &&
      motivoValid &&
      telefonoValid &&
      comentariosValid &&
      asuntoValid &&
      ciudadValid
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      sendPQRSData(formData);
      console.log("Formulario enviado");
    } else {
      console.log("Errores en el formulario");
    }
  };

  return (
    <div className="">
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Select
            color="primary"
            errorMessage={errors.asunto}
            isInvalid={errors.asunto !== ""}
            label="Asunto"
            value={asunto}
            variant="underlined"
            onChange={handleAsuntoChange}
          >
            <SelectItem key="peticion" value="Petición">
              Petición
            </SelectItem>
            <SelectItem key="queja" value="Queja">
              Queja
            </SelectItem>
            <SelectItem key="reclamo" value="Reclamo">
              Reclamo
            </SelectItem>
            <SelectItem key="sugerencia" value="Sugerencia">
              Sugerencia
            </SelectItem>
          </Select>
        </div>

        <div className="mb-4">
          <Select
            color="primary"
            errorMessage={errors.ciudad}
            isInvalid={errors.ciudad !== ""}
            label="Ciudad"
            value={ciudad}
            variant="underlined"
            onChange={handleCiudadChange}
          >
            {capitalesColombia.map((capital, index) => (
              <SelectItem key={index} value={capital}>
                {capital}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className={`flex flex-col gap-4 ${inputGroupStyle}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="flex-1 mb-4">
              <Input
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
            <div className="flex-1 mb-4">
              <Input
                color="primary"
                errorMessage={errors.documento}
                isInvalid={errors.documento !== ""}
                label="Documento de Identidad"
                name="documento"
                type="number"
                value={formData.documento}
                variant="underlined"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <Input
              isRequired
              color="primary"
              errorMessage={errors.motivo}
              isInvalid={errors.motivo !== ""}
              label="Motivo"
              minLength={6}
              name="motivo"
              type="text"
              value={formData.motivo}
              variant="underlined"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="flex-1 mb-4">
              <Input
                isRequired
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
            </div>
            <div className="flex-1 mb-4">
              <Input
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
        </div>

        <div className="mb-4">
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
        </div>
      </Form>
    </div>
  );
};

export default PQRForm;
