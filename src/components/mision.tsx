import React from "react";

interface MisionProps {
  imgName: string;
  titleStyle: string;
  textStyle: string;
}

const Mision: React.FC<MisionProps> = ({ imgName, titleStyle, textStyle }) => {
  return (
    <div className="w-50">
      <h2 className={titleStyle}>Misión</h2>

      <p className={textStyle}>
        Smartcol S.A.S. tiene como propósito brindar soluciones eficaces a
        nuestros clientes en sus procesos productivos. Ofrecemos una amplia
        variedad de materias primas e insumos, cumpliendo con los más altos
        estándares de calidad y seguridad. Garantizamos entregas oportunas y
        precios competitivos para el sector industrial.
      </p>
    </div>
  );
};

export default Mision;
