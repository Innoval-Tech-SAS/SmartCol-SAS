import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { categories, settings } from "../config/site";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categorys: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.classList.contains("dark");

      setIsDark(theme);
    };

    updateTheme();

    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`mx-auto p-8 my-8 bg-gradient-to-tl from-success-700 via-primary to-success-700 dark:bg-gradient-to-tl dark:from-background dark:via-zinc-800 dark:to-background`}
    >
      <h3 className="text-center p-6 mb-4 font-semibold text-white text-3xl">
        Explora Nuestra Gama de Productos
      </h3>
      <div className="slider-wrapper mx-auto mb-4 text-center w-auto px-5">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="p-2 my-4">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl mx-4 opacity-100 z-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="text-white font-bold text-lg line-clamp-2">
                    {category.title}
                  </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt={category.title}
                    className="object-cover rounded-xl"
                    height={270}
                    src={category.img}
                    width={390}
                  />
                </CardBody>
                <CardFooter className="flex justify-center">
                  <Button
                    className="font-bold text-white hover:text-gray dark:border-primary"
                    radius="full"
                    variant="ghost"
                  >
                    Conoce Más
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categorys;
