import React, { useEffect, useState } from "react";

import { MisionProps } from "@/interfaces/MisionProps";

const Mision: React.FC<MisionProps> = ({ iconName, textStyle }) => {
  const [iconSrc, setIconSrc] = useState("");
  const iconsRoute = "/icons/";

  useEffect(() => {
    const updateIconSrc = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const prefix = isDark ? "dark-" : "light-";
      const formattedIconName = `${iconsRoute}${prefix}${iconName}`;

      setIconSrc(formattedIconName);
    };

    updateIconSrc();

    const observer = new MutationObserver(updateIconSrc);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [iconName, iconsRoute]);

  return (
    <div className="w-50 flex flex-col items-center gap-2 md:gap-5 md:px-6">
      <div className="w-1/3" />
      <h3 className="text-primary text-3xl font-semibold">Misión</h3>
      <img alt="" className="w-auto max-h-40" src={iconSrc} />
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
