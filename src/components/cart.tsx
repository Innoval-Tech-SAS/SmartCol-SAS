import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Product } from "@/pages/products";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface CartProps {
  products?: Array<Product>;
}

const Cart: React.FC<CartProps> = ({ products }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <a
      onClick={onOpen}
      className="bg-primary/25 bg-opacity-50 flex cursor-pointer justify-center items-center border-2 border-primary text-white p-2 rounded-full shadow-2xl"
      id="cartcontainer"
    >
      <Modal
        className="bg-background/90"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        size="sm"
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-center text-primary">Cotización</h2>
              </ModalHeader>
              <ModalBody>
                <ul className="">
                  {products?.map((product) => (
                    <li className="" key={product.id}>
                      {product.name} - {product.um} - {product.presentation}
                    </li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-white font-semibold"
                  color="danger"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="text-white font-semibold"
                  color="primary"
                  onPress={onClose}
                >
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <GiShoppingCart size={40} className="text-primary" />
    </a>
  );
};

export default Cart;
