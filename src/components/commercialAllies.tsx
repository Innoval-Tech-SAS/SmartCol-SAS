import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommercialAllies: React.FC = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <>
      <h3 className="text-3xl font-bold text-primary text-center">
        Nuestros Aliados Comerciales
      </h3>
      <div className="w-full flex justify-center p-10">
        <div className="w-full max-w-3xl">
          <Slider {...settings}>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/ensignworld.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/fufeng-group.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/gelco.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/hongda-group.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/ingredion.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/qhdlihua.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/rzbc.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/sucroal.png.webp"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                <img
                  alt="logo proveedor"
                  className="w-full h-full object-cover"
                  src="img/tianjiachem.png.webp"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CommercialAllies;
