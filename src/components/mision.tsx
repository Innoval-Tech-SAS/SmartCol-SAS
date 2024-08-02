import React from "react";
import IconButton from "./iconButton";

interface MisionProps {
  imgName: string;
  textStyle?: string;
}

const Mision: React.FC<MisionProps> = ({ imgName, textStyle }) => {
  return (
    <div className="w-50 flex flex-col items-center gap-10">
      <div className="w-1/3">
        <IconButton title="Misión" variant="flat" iconName={imgName} />
      </div>

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
