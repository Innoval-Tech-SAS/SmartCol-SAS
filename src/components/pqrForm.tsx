import React, { useState } from "react";
import Form from "./Form";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
            label="Asunto"
            variant="underlined"
            value={asunto}
            onChange={handleAsuntoChange}
            isInvalid={errors.asunto !== ""}
            errorMessage={errors.asunto}
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
            label="Ciudad"
            variant="underlined"
            value={ciudad}
            onChange={handleCiudadChange}
            isInvalid={errors.ciudad !== ""}
            errorMessage={errors.ciudad}
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
                variant="underlined"
                type="text"
                label="Nombre Completo"
                color="primary"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                isInvalid={errors.nombre !== ""}
                errorMessage={errors.nombre}
              />
            </div>
            <div className="flex-1 mb-4">
              <Input
                variant="underlined"
                type="number"
                label="Documento de Identidad"
                color="primary"
                name="documento"
                value={formData.documento}
                onChange={handleInputChange}
                isInvalid={errors.documento !== ""}
                errorMessage={errors.documento}
              />
            </div>
          </div>
          <div className="mb-4">
            <Input
              variant="underlined"
              type="text"
              label="Motivo"
              color="primary"
              isRequired
              minLength={6}
              name="motivo"
              value={formData.motivo}
              onChange={handleInputChange}
              isInvalid={errors.motivo !== ""}
              errorMessage={errors.motivo}
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <div className="flex-1 mb-4">
              <Input
                variant="underlined"
                type="email"
                label="Email"
                color="primary"
                isRequired
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={errors.email !== ""}
                errorMessage={errors.email}
              />
            </div>
            <div className="flex-1 mb-4">
              <Input
                variant="underlined"
                type="text"
                label="Número Telefónico"
                color="primary"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                isInvalid={errors.telefono !== ""}
                errorMessage={errors.telefono}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <Textarea
            color="primary"
            label="Déjanos tus comentarios"
            variant="underlined"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleInputChange}
            isInvalid={errors.comentarios !== ""}
            errorMessage={errors.comentarios}
          />
        </div>
      </Form>
    </div>
  );
};

export default PQRForm;
