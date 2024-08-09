import React, { useState, useEffect } from "react";
import {
  Card,
  CardProps,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";

const CardProduct: React.FC<CardProps> = () => {
  const [color, SetColor] = useState("");

  useEffect(() => {}, []);
  return (
    <Card className="px-6 py-1 bg-black/20 dark:bg-white/10 shadow-lg rounded-3xl">
      <CardHeader className="flex flex-col pb-0">
        <p
          className="text-white text-3xl font-semibold"
          style={{ WebkitTextStroke: "1px black" }}>
          DEXTROSA
        </p>
        <span
          className="text-primary text-3xl font-semibold"
          style={{ WebkitTextStroke: "1px black" }}>
          ANHIDRA
        </span>
      </CardHeader>
      <CardBody className="flex justify-center py-0">
        <img
          src="/img/products/dextrosa-anhidra.png"
          alt="Dextrosa Anhidra"
          className="w-auto h-72 object-contain"
        />
      </CardBody>
      <CardFooter className="flex justify-center py-1 pb-3 gap-1">
        <Tooltip
          className="text-white font-bold bg-primary/50"
          color="primary"
          content="Agregar al Carrito"
          size="sm">
          <Button
            className=""
            size="sm"
            color="primary"
            radius="full"
            variant="flat">
            <BsCart size={24} />
          </Button>
        </Tooltip>
        <Tooltip
          className="text-white font-bold bg-primary/50"
          color="primary"
          content="Ficha Técnica"
          size="sm">
          <Button
            className="font-semibold"
            size="sm"
            variant="flat"
            color="primary"
            radius="full">
            <VscGraph size={24} />
          </Button>
        </Tooltip>
        <Tooltip
          className="text-white font-bold bg-primary/50"
          color="primary"
          content="Ver más"
          size="sm">
          <Button
            className=""
            size="sm"
            color="primary"
            radius="full"
            variant="flat">
            <IoIosAddCircleOutline size={24} />
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
