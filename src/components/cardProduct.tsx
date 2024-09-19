import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Tooltip,
  Code,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { Product } from "@/interfaces/Product";
import { useCartContext } from "@/context/cartContext";
import WhatsAppIcon from "./whatsAppIcon";
import { FaRegHandPointRight } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { title } from "./primitives";

const CardProduct: React.FC<Product> = ({
  id,
  name,
  imgname,
  um,
  presentation,
  category,
  subcategory,
  description,
}) => {
  const splitText = (text: string): [string, string] => {
    text = text.trim();
    const words = text.split(" ");
    const mid = Math.ceil(words.length / 2);

    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [firstPart, secondPart] = splitText(name);
  const ImageSrc = `/img/products/${imgname}.png`;

  // Define handleModalClose antes de usarlo
  const handleModalClose = () => {
    const params = new URLSearchParams(location.search);
    params.delete("product");
    const page = params.get("page") || "1";
    const newUrl = `${location.pathname}?page=${page}`;
    navigate(newUrl, { replace: true });
  };

  const { isOpen, onOpenChange, onOpen } = useDisclosure({
    onClose: handleModalClose,
  });

  const { addToCart } = useCartContext();

  const urlName = (name: string) => {
    name = name.trim();
    const vocales: {
      [key in "a" | "e" | "i" | "o" | "u"]: string[];
    } = {
      a: ["á", "Á"],
      e: ["é", "É"],
      i: ["í", "Í"],
      o: ["ó", "Ó"],
      u: ["ú", "Ú"],
    };

    return name
      .toLowerCase()
      .split("")
      .map((char) => {
        for (const key in vocales) {
          if (vocales[key as keyof typeof vocales].includes(char)) {
            return key;
          }
        }
        return char;
      })
      .join("")
      .replace(/\s+/g, "-");
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modalParam = params.get("product");
    if (modalParam === urlName(name)) {
      onOpen();
    }
  }, [location.search, name, onOpen]);

  const handleCartClick = (product: Product) => {
    addToCart(product);
  };

  const handleModalClick = () => {
    const normalizedName = `${urlName(name)}-${urlName(presentation)}`;
    const params = new URLSearchParams(location.search);
    const page = params.get("page") || "1";
    const newUrl = `${location.pathname}?page=${page}&product=${encodeURIComponent(normalizedName)}`;
    navigate(newUrl, { replace: true });
    onOpen();
  };

  return (
    <>
      <Card className="bg-black/20 dark:bg-white/5 shadow-lg rounded-3xl">
        <CardHeader className="flex flex-col text-center">
          <h2 className="flex flex-col">
            <span
              className="text-white md:text-lg sm:font-bold"
              style={{ WebkitTextStroke: "0.7px black" }}
            >
              {firstPart.toUpperCase()}
            </span>
            <span
              className="text-primary md:text-lg sm:font-bold"
              style={{ WebkitTextStroke: "0.7px black" }}
            >
              {" "}
              {`${secondPart.toUpperCase()} - ${presentation}`}
            </span>
          </h2>
        </CardHeader>
        <CardBody className="flex justify-center items-center py-0">
          <Image
            alt={`${name} - ${um} - ${presentation}`.toLowerCase()}
            className="w-auto max-h-48 object-contain"
            src={ImageSrc}
          />
        </CardBody>
        <CardFooter className="flex justify-center pt-0 pb-3 gap-2 lg:gap-6 md:mt-5">
          <Tooltip
            className="text-white font-bold bg-primary/50"
            color="primary"
            content="Agregar a Cotización"
            size="sm"
          >
            <Code
              className="p-2 hover:cursor-pointer"
              color="primary"
              radius="full"
              size="lg"
              onClick={() =>
                handleCartClick({
                  id,
                  name,
                  imgname,
                  um,
                  presentation,
                  category,
                  subcategory,
                  description,
                  quantity: 1,
                })
              }
            >
              <MdAddShoppingCart size={25} />
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
              color="primary"
              size="lg"
              radius="full"
              onClick={handleModalClick} // Cambia la URL y abre el modal
            >
              <IoIosAddCircleOutline size={25} />
            </Code>
          </Tooltip>
        </CardFooter>
      </Card>

      <Modal
        className="bg-background/80"
        isOpen={isOpen}
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <ModalBody>
              <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 p-4">
                <div className="p-5">
                  <Image
                    className="max-h-40 md:max-h-full w-auto object-contain"
                    src={ImageSrc}
                    alt={`comprar ${name} - ${presentation}`}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5">
                    <h2 className={`${title()} text-primary text-center`}>
                      {name}
                    </h2>
                    <p className="text-justify indent-8 font-semibold">
                      {description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-2xl text-primary gap-8">
                    <p className="flex items-center justify-center gap-3">
                      Cotiza Aquí
                      <FaRegHandPointRight size={40} />
                    </p>

                    <WhatsAppIcon size={35} productName={name} />
                  </div>
                </div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardProduct;
