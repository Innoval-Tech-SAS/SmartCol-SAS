import React, { useState } from "react";
import { Divider, Button, Checkbox } from "@nextui-org/react";
import Swal from "sweetalert2";

interface FormProps {
  children?: React.ReactNode;
  idForm?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, idForm, onSubmit }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!termsAccepted) {
      Swal.fire({
        title: "¡Ups!",
        text: "Por favor acepta los términos y condiciones y la política de tratamiento de datos.",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonText: "Volver al formulario",
        customClass: {
          confirmButton:
            "text-primary p-2 border border-primary bg-background rounded-3xl",
        },
        buttonsStyling: false,
      });

      return;
    }
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div
      className="container mx-auto p-5 md:p-20 bg-black/15 dark:bg-white/20 border border-white/10  shadow-2xl"
      id={`${idForm}-container`}
    >
      <form action="" id={idForm} onSubmit={handleSubmit}>
        <div className="text-center">
          <h3 className="text-primary my-5 font-semibold text-2xl">
            COMPLETA EL FORMULARIO
          </h3>
        </div>
        <div className="p-10" id={`${idForm}-inputs-container`}>
          {children}
          <div className="flex flex-col justify-center gap-5 my-5">
            <Checkbox
              isRequired
              className="text-white"
              color="primary"
              defaultSelected={termsAccepted}
              isInvalid={!termsAccepted}
              radius="none"
              size="sm"
              onChange={(e) => setTermsAccepted(e.target.checked)}
            >
              ACEPTO LOS{" "}
              <span className="text-primary font-semibold">
                TÉRMINOS Y CONDICIONES
              </span>{" "}
              Y LA{" "}
              <span className="text-primary font-semibold">
                {" "}
                POLÍTICA DE TRATAMIENTO DE DATOS
              </span>
            </Checkbox>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Divider className="w-11/12" />
          </div>
        </div>

        <div className="flex items-center justify-end pr-10">
          <Button
            className="text-background text-lg  font-semibold"
            color="primary"
            radius="full"
            type="submit"
            variant="solid"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
