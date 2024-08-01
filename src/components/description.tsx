import React from "react";

import Mision from "./mision";
import Vision from "./vision";

const Description: React.FC = () => {
  const titleStyle: string = "text-center text-3xl font-bold text-primary py-4";

  return (
    <div className="container mx-auto my-8">
      <div className="w-full px-10">
        <h2 className={titleStyle}>¿Quienes Somos?</h2>
        <p className="text-xl font-semibold text-indent py-4">
          Somos una empresa familiar con más de 10 años de experiencia en la
          distribución de materias primas e insumos para las industrias
          alimentaria, industrial y farmacéutica. Nos esforzamos por satisfacer
          las necesidades de nuestros clientes, cumpliendo con los más altos
          estándares de calidad y eficiencia.
        </p>
      </div>
      <div className="flex justify-around items-center py-5">
        <Mision imgName="" titleStyle={titleStyle} />
        <Vision imgName="" titleStyle={titleStyle} />
      </div>
    </div>
  );
};

export default Description;
