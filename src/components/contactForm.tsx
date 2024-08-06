import React from "react";
import { useState } from "react";
import Form from "./Form";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { capitalesColombia } from "@/config/site";

const ContactForm: React.FC = () => {
  const [ciudad, setCiudad] = useState<string>("");
  const handleCiudadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCiudad(e.target.value);
  };
  return (
    <div className="">
      <Form>
        <Select
          color="primary"
          isRequired
          label="Selecciona una ciudad"
          variant="underlined"
          value={ciudad}
          onChange={handleCiudadChange}>
          {capitalesColombia.map((capital, index) => (
            <SelectItem
              key={index}
              className="text-lg text-gray-800 font-semibold"
              value={capital}>
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

export default ContactForm;
