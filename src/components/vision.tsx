import React, { useEffect, useState } from "react";

import { MisionProps } from "@/interfaces/MisionProps";

const Vision: React.FC<MisionProps> = ({ iconName, textStyle }) => {
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
      <h3 className="text-primary text-3xl font-semibold">Visión</h3>
      <img alt="" className="w-auto max-h-40" src={iconSrc} />
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
