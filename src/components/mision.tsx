import React from "react";

interface MisionProps {
  imgName: string;
  titleStyle: string;
}

const Mision: React.FC<MisionProps> = ({ imgName, titleStyle }) => {
  return (
    <div className="w-50">
      <h2 className={titleStyle}>Misión</h2>
      <p />
    </div>
  );
};

export default Mision;
