import React from "react";
import { Divider, Button, Checkbox } from "@nextui-org/react";

interface FormProps {
  children?: React.ReactNode;
  idForm?: string;
}

const Form: React.FC<FormProps> = ({ children, idForm }) => {
  return (
    <div
      className="container mx-auto p-20 mt-10 bg-black/15 dark:bg-white/20 border border-white/10  shadow-2xl"
      id={`${idForm}-container`}>
      <form action="" id={idForm}>
        <div className="text-center">
          <h3 className="text-primary my-5 font-semibold text-2xl">
            COMPLETA EL FORMULARIO
          </h3>
        </div>
        <div className="p-10" id={`${idForm}-inputs-container`}>
          {children}
          <div className="flex flex-col justify-center gap-5 my-5">
            <Checkbox
              size="lg"
              radius="none"
              color="success"
              isRequired
              defaultSelected>
              HE LEÍDO Y ACEPTO LOS{" "}
              <span className="text-primary font-semibold">
                TÉRMINOS Y CONDICIONES GENERALES
              </span>{" "}
              Y LA{" "}
              <span className="text-primary font-semibold">
                {" "}
                POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
              </span>
            </Checkbox>
            <Checkbox size="lg" radius="none" color="success" defaultSelected>
              AUTORIZO EL TRATAMIENTO DE MIS DATOS DE CONFORMIDAD CON LA
              POLÍTICA DE TRATAMIENTO DE DATOS PUBLICADOS EN WWW.SMARTCOL.COM.CO
            </Checkbox>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Divider className="w-11/12" />
          </div>
        </div>

        <div className="flex items-center justify-end pr-10">
          <Button
            color="primary"
            className="text-background text-lg  font-semibold "
            variant="solid"
            radius="full">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
