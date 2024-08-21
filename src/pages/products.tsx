import React, { useState, useEffect } from "react";
import AsideMenu from "@/components/asideMenu";
import DefaultLayout from "@/layouts/default";
import Banner from "../components/banner";
import { exampleAsideMenuProps } from "@/components/primitives";
import CardProduct from "@/components/cardProduct";
import Cart from "@/components/cart";
import Controller from "../controllers/Controller";

const controller = new Controller();
const products = await controller.getAll("http://localhost:5000/ProductsData");

const ProductsPage: React.FC = ({}) => {
  const [isFixed, setFixed] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Conoce Nuestros Productos";

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 525);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed, setFixed]);

  const asideStyles = isFixed ? "fixed top-16" : "w-full";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Productos");
    document.title = pageTitle;
  }, [pageTitle, setPageTitle]);

  return (
    <DefaultLayout>
      <section className="">
        <Banner
          bannerName="banner.jpg"
          bannerSubtitle={bannerSubTitle}
          bannerTitle={bannerTitle}
        />
      </section>
      <section className="my-4 mx-auto">
        <div className="flex flex-row">
          <div className="md:w-1/6 hidden md:block">
            <aside className={`${asideStyles}`}>
              <AsideMenu {...exampleAsideMenuProps} />
            </aside>
          </div>

          <div className="w-full md:w-5/6 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4 px-5 mx-auto">
              {products.map(
                (
                  product: {
                    name: string;
                    imgname: any;
                    um: string;
                    presentation: string;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <CardProduct
                    key={index}
                    name={product.name}
                    imgname={`${product.imgname}`}
                    um={product.um}
                    presentation={product.presentation}
                  />
                )
              )}
              <div
                className="fixed  bottom-36 right-12 z-50"
                id="cart-container"
              >
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductsPage;
