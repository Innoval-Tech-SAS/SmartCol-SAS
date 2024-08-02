import React from "react";
import IconButton from "./iconButton";

interface VisionProps {
  imgName: string;
  textStyle: string;
}

const Vision: React.FC<VisionProps> = ({ imgName, textStyle }) => {
  return (
    <div className="w-50 flex flex-col items-center gap-10">
      <div className="w-1/3">
        <IconButton title="Visión" variant="flat" iconName={imgName} />
      </div>
      <p className={textStyle}>
        Para el año 2027, aspiramos a ser una compañía reconocida tanto a nivel
        nacional como internacional en la comercialización de materias primas e
        insumos para el sector industrial. Nos proponemos ampliar nuestro
        portafolio de productos y posicionarnos entre las 5,000 empresas más
        grandes de Colombia.
      </p>
    </div>
  );
};

export default Vision;
