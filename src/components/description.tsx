import React from "react";
import IconButton from "./iconButton";
import Mision from "./mision";
import Vision from "./vision";

const Description: React.FC = () => {
  const titleStyle: string = "text-center text-3xl font-bold text-primary py-4";

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-row-reverse">
        <div className="w-1/2 px-10">
          <h2 className={titleStyle}>¿Quienes Somos?</h2>
          <p className="text-xl font-semibold text-justify text-indent py-4">
            Somos una empresa familiar con una amplia experiencia en la
            distribución de materias primas e insumos para las industrias
            alimentaria, industrial y farmacéutica. Nos esforzamos por satisfacer
            las necesidades de nuestros clientes, cumpliendo con los más altos
            estándares de calidad y eficiencia.
          </p>
        </div>

        <div className="flex flex-col w-1/2">

          <div className="text-center pb-10">
            <h2 className={titleStyle}>¿Porque Elegir SmartCol S.A.S.?</h2>
          </div>

          <div className="flex items-center justify-around">
            <IconButton
              iconName="experiencia.png"
              darkTextColor=""
              textColor=""
              variant="flat"
              url=""
              title="Experiencia"
            />

            <IconButton
              iconName="calidad.png"
              darkTextColor=""
              textColor=""
              variant="flat"
              url=""
              title="Calidad"
            />

            <IconButton
              iconName="productos.png"
              darkTextColor=""
              textColor=""
              variant="flat"
              url=""
              title="Productos"

            />
          </div>


        </div>

      </div>
      <div className="flex justify-around items-center py-5">
        <Mision imgName="" titleStyle={titleStyle} />
        <Vision imgName="" titleStyle={titleStyle} />
      </div>
    </div>
  );
};

export default Description;