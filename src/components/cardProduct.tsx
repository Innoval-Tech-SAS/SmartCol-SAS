import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Tooltip } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

interface CardProductProps {
  name: string;
  imgname: string;
  um: string;
  presentation: string;
}

const CardProduct: React.FC<CardProductProps> = ({
  name,
  imgname,
  um,
  presentation,
}) => {
  const [firstPart, secondPart] = splitText(name);
  const ImageSrc = `/img/products/${imgname}.png`;

  function splitText(text: string): [string, string] {
    text = text.trim();
    const words = text.split(" ");
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }

  return (
    <Card className="bg-black/20 dark:bg-white/5 shadow-lg rounded-3xl">
      <CardHeader className="flex flex-col text-center">
        <p
          className="text-white md:text-lg sm:font-bold"
          style={{ WebkitTextStroke: "0.7px black" }}
        >
          {firstPart.toUpperCase()}
        </p>
        <span
          className="text-primary md:text-lg sm:font-bold"
          style={{ WebkitTextStroke: "0.7px black" }}
        >
          {`${secondPart.toUpperCase()} - ${presentation}`}
        </span>
      </CardHeader>
      <CardBody className="flex justify-center items-center py-0">
        <Image
          src={ImageSrc}
          alt={`${name} - ${um} - ${presentation}`.toLowerCase()}
          className="w-auto max-h-48 object-contain"
        />
        {/* <span className="text-sm text-primary">
          {um} - {presentation}
        </span> */}
      </CardBody>
      <CardFooter className="flex justify-center pt-0 pb-3 sm:gap-2 lg:gap-6 md:mt-5">
        <Tooltip
          className="text-white font-bold bg-primary/50"
          color="primary"
          content="Agregar a Cotización"
          size="sm"
        >
          <Code
            className="p-2 hover:cursor-pointer"
            size="lg"
            color="primary"
            radius="full"
            // variant="flat"
          >
            <MdAddShoppingCart size={20} />
          </Code>
        </Tooltip>
        <Tooltip
          className="text-white font-bold bg-primary/50"
          color="primary"
          content="Ficha Técnica"
          size="sm"
        >
          <Code
            className="p-2 hover:cursor-pointer"
            size="lg"
            // variant="flat"
            color="primary"
            radius="full"
          >
            <VscGraph size={20} />
          </Code>
        </Tooltip>
        <Tooltip
          className="text-white font-bold bg-primary/50"
          color="primary"
          content="Ver más"
          size="sm"
        >
          <Code
            className="p-2 hover:cursor-pointer"
            size="lg"
            color="primary"
            radius="full"
            // variant="flat"
          >
            <IoIosAddCircleOutline size={20} />
          </Code>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
