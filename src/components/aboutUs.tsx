import React from "react";
import IconButton from "./iconButton";
import Mision from "./mision";
import Vision from "./vision";

const Description: React.FC = () => {
  const titleStyle: string =
    "text-center ${} text-3xl font-bold text-primary py-4";
  const textStyle: string =
    "text-xl font-semibold text-justify text-indent py-2 px-10";

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="sm:w-full px-4 sm:px-10">
          <h2 className={titleStyle}>¿Quienes Somos?</h2>

          <p className={textStyle}>
            Somos una empresa familiar con una vasta y sólida experiencia en la
            distribución de materias primas e insumos para diversas industrias,
            incluyendo la alimentaria, industrial y farmacéutica. A lo largo de
            más de 10 años, hemos cultivado una profunda comprensión de las
            necesidades y demandas específicas de estos sectores, lo que nos
            permite ofrecer soluciones personalizadas y efectivas. Nos
            comprometemos firmemente a satisfacer las expectativas de nuestros
            clientes, asegurando que cada producto cumpla con los más rigurosos
            estándares de calidad y eficiencia.
          </p>

          <p className={textStyle}>
            Además, nuestro equipo dedicado y apasionado trabaja incansablemente
            para garantizar una atención al cliente excepcional, con el objetivo
            de establecer relaciones de confianza y a largo plazo con cada uno
            de nuestros socios comerciales. Nos enorgullece ser un referente en
            nuestro campo, proporcionando no solo productos de alta calidad,
            sino también un servicio que va más allá de la simple transacción
            comercial.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center my-5 gap-10">
        <Mision iconName="mision.png" textStyle={textStyle} />
        <Vision iconName="vision.png" textStyle={textStyle} />
      </div>

      <div className="my-6">
        <div className="text-center pb-10">
          <h2 className={titleStyle}>¿Porque Elegir SmartCol S.A.S.?</h2>
        </div>

        <div className=" flex flex-col sm:flex-row items-center justify-center gap-32">
          <IconButton
            iconName="experiencia.png"
            darkTextColor=""
            textColor=""
            variant="light"
            title="Experiencia"
          />

          <IconButton
            iconName="calidad.png"
            darkTextColor=""
            textColor=""
            variant="light"
            title="Calidad"
          />

          <IconButton
            iconName="eficacia.png"
            darkTextColor=""
            textColor=""
            variant="light"
            title="Eficiencia"
          />

          <IconButton
            iconName="servicio.png"
            darkTextColor=""
            textColor=""
            variant="light"
            title="Servicio"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
