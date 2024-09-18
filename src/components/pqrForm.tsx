import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

import Form from "./Form";

import { capitalesColombia } from "@/config/site";
import { sendPQRSData } from "@/services/sendPQRSData";
import { validateEmail, validateName } from "@/services/validators";

const tiposDocumento = [
  "NIT",
  "Cédula de Ciudadanía",
  "Cédula de Extranjería",
  "Pasaporte",
  "Tarjeta de Identidad",
  "PEP",
];

interface PQRFormProps {
  inputGroupStyle?: string;
}

const PQRForm: React.FC<PQRFormProps> = ({ inputGroupStyle }) => {
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    email: "",
    phone: "",
    text: "",
    comments: "",
    selectedCapital: "",
    subject: "",
    documentType: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    document: "",
    documentType: "",
    subject: "",
    email: "",
    phone: "",
    comments: "",
    selectedCapital: "",
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const emailValid = validateEmail(formData.email);
    const nombreValid = validateName(formData.name);
    const documentoValid = formData.document.length >= 6;
    const telefonoValid = formData.phone.length >= 6;
    const comentariosValid = formData.comments.length > 0;
    const ciudadValid = formData.selectedCapital !== "";
    const tipoDocumentoValid = formData.documentType !== "";

    setErrors({
      name: nombreValid ? "" : "Por favor, ingresa un nombre válido",
      document: documentoValid ? "" : "Por favor, ingresa un documento válido",
      email: emailValid
        ? ""
        : "Por favor, ingresa un correo electrónico válido",
      phone: telefonoValid
        ? ""
        : "Por favor, ingresa un número telefónico válido",
      comments: comentariosValid ? "" : "Por favor, ingresa tus comentarios",
      selectedCapital: ciudadValid ? "" : "Por favor, selecciona una ciudad",
      documentType: tipoDocumentoValid
        ? ""
        : "Por favor, selecciona un tipo de documento",
      subject: formData.subject ? "" : "Por favor, selecciona un asunto",
    });

    return (
      emailValid &&
      nombreValid &&
      documentoValid &&
      telefonoValid &&
      comentariosValid &&
      ciudadValid &&
      tipoDocumentoValid
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      sendPQRSData(formData);
      // console.log("Formulario enviado: ", formData);
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
            errorMessage={errors.subject}
            isInvalid={errors.subject !== ""}
            label="Asunto"
            name="subject"
            value={formData.subject}
            variant="underlined"
            onChange={handleSelectChange}
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
            errorMessage={errors.selectedCapital}
            isInvalid={errors.selectedCapital !== ""}
            label="Ciudad"
            name="selectedCapital"
            value={formData.selectedCapital}
            variant="underlined"
            onChange={handleSelectChange}
          >
            {capitalesColombia.map((capital) => (
              <SelectItem key={capital} value={capital}>
                {capital}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <Input
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

        <div className={`flex flex-col gap-4 ${inputGroupStyle}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="flex-1 mb-4">
              <Select
                color="primary"
                errorMessage={errors.documentType}
                isInvalid={errors.documentType !== ""}
                label="Tipo de Documento"
                name="documentType"
                value={formData.documentType}
                variant="underlined"
                onChange={handleSelectChange}
              >
                {tiposDocumento.map((tipo) => (
                  <SelectItem key={tipo} value={tipo}>
                    {tipo}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex-1 mb-4">
              <Input
                color="primary"
                errorMessage={errors.document}
                isInvalid={errors.document !== ""}
                label="Documento de Identidad"
                name="document"
                type="number"
                value={formData.document}
                variant="underlined"
                onChange={handleInputChange}
              />
            </div>
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
        </div>

        <div className="mb-4">
          <Textarea
            color="primary"
            errorMessage={errors.comments}
            isInvalid={errors.comments !== ""}
            label="Déjanos tus comentarios"
            name="comments"
            value={formData.comments}
            variant="underlined"
            onChange={handleInputChange}
          />
        </div>
      </Form>
    </div>
  );
};

export default PQRForm;
