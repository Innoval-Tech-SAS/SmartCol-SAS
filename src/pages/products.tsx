import React, { useState, useEffect } from "react";

import Banner from "../components/banner";
import Controller from "../controllers/Controller";

import AsideMenu from "@/components/asideMenu";
import DefaultLayout from "@/layouts/default";
import { AsideMenuProps } from "@/interfaces/ItemsMenu";
import CardProduct from "@/components/cardProduct";
import Cart from "@/components/cart";
import { Product } from "@/interfaces/Product";
import CartProvider from "@/context/cartProvider";

const ProductsPage: React.FC = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [menuItems, setMenuItems] = useState<AsideMenuProps["asideItems"]>([]);

  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Conoce Nuestros Productos";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Productos");
    document.title = pageTitle;
  }, [setPageTitle, pageTitle]);

  useEffect(() => {
    const fetchProducts = async () => {
      const controller = new Controller();
      const data: Product[] = await controller.getAll(
        "http://localhost:5000/ProductsData",
      );

      setProducts(data);
      const transformedMenuItems = transformDataToMenu(data);

      setMenuItems(transformedMenuItems);
    };

    fetchProducts();
  }, [setProducts]);

  const transformDataToMenu = (data: Product[]) => {
    const menu: AsideMenuProps["asideItems"] = [];

    data.forEach((product) => {
      const { category, subcategory } = product;

      let categoryItem = menu.find((item) => item.title === category);

      if (!categoryItem) {
        categoryItem = {
          title: category,
          content: [],
        };
        menu.push(categoryItem);
      }

      if (!categoryItem.content?.includes(subcategory)) {
        categoryItem.content?.push(subcategory);
      }
    });

    return menu;
  };

  return (
    <DefaultLayout>
      <section>
        <Banner
          bannerName="banner.jpg"
          bannerSubtitle={bannerSubTitle}
          bannerTitle={bannerTitle}
        />
      </section>
      <section className="my-4 mx-auto">
        <div className="flex flex-row">
          <div className="md:w-1/6 hidden md:block">
            <aside className="w-full h-full overflow-y-auto">
              <AsideMenu asideItems={menuItems} />
            </aside>
          </div>

          <div className="w-full md:w-5/6 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3 px-5 mx-auto">
              <CartProvider>
                {products.map(
                  (product, index) =>
                    product.imgname !== null && (
                      <CardProduct
                        key={index}
                        category={product.category}
                        imgname={product.imgname}
                        name={product.name}
                        presentation={product.presentation}
                        quantity={product.quantity || 0}
                        subcategory={product.subcategory}
                        um={product.um}
                      />
                    ),
                )}
                <div
                  className="fixed bottom-36 right-12 z-50"
                  id="cart-container"
                >
                  {/* <Tooltip> */}
                  <Cart />
                  {/* </Tooltip> */}
                </div>
              </CartProvider>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductsPage;
