import React, { useState, useEffect } from "react";
import AsideMenu from "@/components/asideMenu";
import DefaultLayout from "@/layouts/default";
import Banner from "../components/banner";
import { exampleAsideMenuProps } from "@/components/primitives";
import CardProduct from "@/components/cardProduct";
import Cart from "@/components/cart";

interface ProductsPageProps {
  products?: Array<any>;
}

const ProductsPage: React.FC<ProductsPageProps> = ({}) => {
  const [pageTitle, setPageTitle] = useState("");

  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Conoce Nuestros Productos";

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
      <section className="w-11/12 my-4 mx-auto">
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-1/6 hidden md:block">
            <AsideMenu {...exampleAsideMenuProps} />
          </aside>
          <div className="w-full md:w-5/6 px-3">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {Array.from({ length: 20 }).map((_, i) => (
                <CardProduct
                  key={i}
                  productName="Dextrosa Anhidra"
                  productImage="/img/products/dextrosa-anhidra.png"
                />
              ))}

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
