import React, { useState, useEffect } from "react";
import AsideMenu, { AsideMenuProps } from "@/components/asideMenu";
import DefaultLayout from "@/layouts/default";
import Banner from "../components/banner";
import CardProduct from "@/components/cardProduct";
import Cart from "@/components/cart";
import Controller from "../controllers/Controller";

interface Product {
  category: string;
  subcategory: string;
  name: string;
  imgname: string;
  um: string;
  presentation: string;
}

const controller = new Controller();

const ProductsPage: React.FC = () => {
  const [isFixed, setFixed] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [menuItems, setMenuItems] = useState<AsideMenuProps["asideItems"]>([]);

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
  }, []);

  const asideStyles = isFixed
    ? "fixed top-16 h-screen w-[16.666%] overflow-y-auto"
    : "w-full h-screen overflow-y-auto";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Productos");
    document.title = pageTitle;
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await controller.getAll(
        "http://localhost:5000/ProductsData"
      );
      setProducts(data);

      const transformedMenuItems = transformDataToMenu(data);
      setMenuItems(transformedMenuItems);
    };

    fetchProducts();
  }, []);

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

      // Verificar si la subcategoría ya existe en el contenido
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
            <aside className={`${asideStyles}`}>
              <AsideMenu asideItems={menuItems} />
            </aside>
          </div>

          <div className="w-full md:w-5/6 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4 px-5 mx-auto">
              {products.map((product, index) => (
                <CardProduct
                  key={index}
                  name={product.name}
                  imgname={product.imgname}
                  um={product.um}
                  presentation={product.presentation}
                />
              ))}
              <div
                className="fixed bottom-36 right-12 z-50"
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
