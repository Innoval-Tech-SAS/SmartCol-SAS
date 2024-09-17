import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilters } from "@/context/filterContext"; // Ajusta el path según sea necesario
import Banner from "../components/banner";
import AsideMenu from "@/components/asideMenu";
import DefaultLayout from "@/layouts/default";
import CardProduct from "@/components/cardProduct";
import Cart from "@/components/cart";

const ProductsPage: React.FC = () => {
  const { search } = useLocation();
  const {
    menuItems,
    filteredProducts,
    setSelectedCategory,
    setSelectedSubcategory,
    setSelectedUse,
  } = useFilters();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const use = queryParams.get("use");
    console.log("use", use);
    if (use) {
      setSelectedUse(use);
    }
  }, [search, setSelectedUse]);

  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Conoce Nuestros Productos";

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
              <AsideMenu
                asideItems={menuItems}
                onCategorySelect={setSelectedCategory}
                onSubcategorySelect={setSelectedSubcategory}
                // onUseSelect={setSelectedUse}
              />
            </aside>
          </div>

          <div className="w-full md:w-5/6 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3 px-5 mx-auto">
              {filteredProducts.map(
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
                  )
              )}
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
