import React from "react";
import { Link } from "@nextui-org/link";

const Policies: React.FC = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-10 py-2 border-b-2 border-primary">
      <Link className="text-center sm:text-left" href="">
        Términos de uso
      </Link>
      <Link className="text-center sm:text-left" href="">
        Política de privacidad
      </Link>
      <Link className="text-center sm:text-left" href="">
        Política de Cookies
      </Link>
      <Link className="text-center sm:text-left" href="">
        Política de Tratamiento de Datos
      </Link>
    </div>
  );
};

export default Policies;
