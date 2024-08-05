import React, { useState } from "react";
import Form from "./Form";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { capitalesColombia } from "@/config/site";

interface PQRFormProps {
  inputGroupStyle?: string;
}

const PQRForm: React.FC<PQRFormProps> = ({ inputGroupStyle }) => {
  const [asunto, setAsunto] = useState<string>("");
  const [ciudad, setCiudad] = useState<string>("");

  const handleAsuntoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAsunto(e.target.value);
  };

  const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCiudad(e.target.value);
  };

  return (
    <div className="p-5">
      <Form>
        <Select
          color="primary"
          isRequired
          label="Asunto"
          variant="underlined"
          value={asunto}
          onChange={handleAsuntoChange}>
          <SelectItem key="peticion" color="primary" value="Petición">
            Petición
          </SelectItem>
          <SelectItem key="queja" color="primary" value="Queja">
            Queja
          </SelectItem>
          <SelectItem key="reclamo" color="primary" value="Reclamo">
            Reclamo
          </SelectItem>
        </Select>
        <Select
          color="primary"
          isRequired
          label="Selecciona una ciudad"
          variant="underlined"
          value={ciudad}
          onChange={handleCiudadChange}>
          {capitalesColombia.map((capital, index) => (
            <SelectItem key={index} color="primary" value={capital}>
              {capital}
            </SelectItem>
          ))}
        </Select>

        <div className={`flex flex-col gap-4 ${inputGroupStyle}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Input
              variant="underlined"
              type="text"
              label="Nombre Completo"
              color="primary"
              isRequired
              className="flex-1"
            />
            <Input
              variant="underlined"
              type="text"
              label="Documento de Identidad"
              color="primary"
              isRequired
              className="flex-1"
            />
          </div>
          <Select
            color="primary"
            isRequired
            label="Producto por cual notifica"
            variant="underlined"
            value={asunto}
            onChange={handleAsuntoChange}>
            <SelectItem key="peticion" color="primary" value="Benzoato">
              Benzoato
            </SelectItem>
            <SelectItem key="queja" color="primary" value="Potasio">
              Potasio
            </SelectItem>
            <SelectItem key="reclamo" color="primary" value="Sorbato">
              Sorbato
            </SelectItem>
          </Select>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Input
              variant="underlined"
              type="email"
              label="Email"
              color="primary"
              isRequired
              className="flex-1"
            />
            <Input
              variant="underlined"
              type="text"
              label="Número Telefónico"
              color="primary"
              isRequired
              className="flex-1"
            />
          </div>
        </div>

        <Textarea
          color="primary"
          isRequired
          label="Déjanos tus comentarios"
          variant="underlined"
        />
      </Form>
    </div>
  );
};

export default PQRForm;
