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
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
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
    <div className="container mx-auto my-10">
      <h3 className={`${titleStyle}`}>Nuestros Valores</h3>
      <div className="w-5/6 mx-auto">
        <Slider {...settings}>
          <div className="" id="">
            <IconButton
              title="Compromiso"
              iconName="compromiso.png"
              variant="light"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Calidad"
              iconName="garantizado.png"
              variant="light"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Responsabilidad"
              iconName="responsabilidad.png"
              variant="light"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Puntualidad"
              iconName="puntualidad.png"
              variant="light"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Profesionalismo"
              iconName="profesionalismo.png"
              variant="light"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Amor al Trabajo"
              iconName="trabajo.png"
              variant="light"
            />
          </div>
          <div className="" id="">
            <IconButton
              title="Competencia Sana"
              iconName="competencia.png"
              variant="light"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BussinesValues;
