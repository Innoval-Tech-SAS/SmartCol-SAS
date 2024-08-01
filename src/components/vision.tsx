import React from "react";

interface VisionProps {
  imgName: string;
  titleStyle: string;
  textStyle: string;
}

const Vision: React.FC<VisionProps> = ({ imgName, titleStyle, textStyle }) => {
  return (
    <div className="w-50">
      <h2 className={titleStyle}>Visión</h2>
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
