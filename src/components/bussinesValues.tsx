import React from "react";
import Slider from "react-slick";
import IconButton from "./iconButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface BussinesValuesProps {}

const BussinesValues: React.FC<BussinesValuesProps> = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const titleStyle: string =
    "text-center text-3xl font-bold text-primary my-10";
  return (
    <div className="container mx-auto my-16 p-5">
      <h3 className={`${titleStyle}`}>Nuestros Valores</h3>
      <div className="w-5/6 mx-auto">
        <Slider {...settings}>
          <div className="" id="">
            <IconButton
              title="Compromiso"
              iconName="compromiso.png"
              variant="flat"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Calidad"
              iconName="garantizado.png"
              variant="flat"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Responsabilidad"
              iconName="responsabilidad.png"
              variant="flat"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Puntualidad"
              iconName="puntualidad.png"
              variant="flat"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Profesionalismo"
              iconName="profesionalismo.png"
              variant="flat"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Amor al Trabajo"
              iconName="trabajo.png"
              variant="flat"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Competencia Sana"
              iconName="competencia.png"
              variant="flat"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BussinesValues;
