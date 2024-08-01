import React from "react";
import { Button } from "@nextui-org/button";

const handleClick = () => {
  window.open("files/PortafolioSmartCol2024.pdf");
};

interface CatalogueProps {
  buttonTitle: string;
}

const Catalogue: React.FC<CatalogueProps> = ({ buttonTitle }) => {
  return (
    <div className="flex justify-center w-full my-5">
      <Button
        className="hover:text-background"
        color="primary"
        radius="full"
        size="lg"
        variant="ghost"
        onClick={handleClick}
      >
        <p className="font-semibold p-5 ">{buttonTitle}</p>
      </Button>
    </div>
  );
};

export default Catalogue;
