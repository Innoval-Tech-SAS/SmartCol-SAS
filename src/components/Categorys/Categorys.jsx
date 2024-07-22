import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategorysContainer, Card } from "../styles/Category/Category";
import { CustomButton } from "../styles/Contact/Contact";

const Categorys = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const categories = [
    {
      title: "Insumos para Panadería y Derivados",
      img: "img/Panaderia.png.webp",
    },
    {
      title: "Insumos para Confitería y Derivados.",
      img: "img/Dulces.png.webp",
    },
    {
      title: "Insumos para Lácteos y Derivados.",
      img: "img/Lacteos.png.webp",
    },

    {
      title: "Insumos para Helados y Derivados.",
      img: "img/Helados.png.webp",
    },
    {
      title: "Insumos para Salsas y Derivados.",
      img: "img/Mermeladas.png.webp",
    },
    {
      title: "Insumos para Farmacéuticos y Derivados",
      img: "img/Farmaceutica.jpg",
    },
    {
      title: "Insumos para Cartón y Derivados.",
      img: "img/carton.webp",
    },
  ];

  return (
    <CategorysContainer>
      <>
        <h3>Explora Nuestra Gama de Productos</h3>
      </>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          {categories.map((category, index) => (
            <Card key={index} $img={category.img}>
              <div className="card-image"></div>
              <h3 className="card-title">{category.title}</h3>
              <div className="card-footer">
                <CustomButton title={"CONOCE MÁS"} />
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </CategorysContainer>
  );
};

export default Categorys;
