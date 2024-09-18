import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFilters } from "@/context/filterContext";
import Banner from "../components/banner";
import AsideMenu from "@/components/asideMenu";
import DefaultLayout from "@/layouts/default";
import CardProduct from "@/components/cardProduct";
import Cart from "@/components/cart";
import { Pagination, PaginationCursor } from "@nextui-org/pagination";

const ProductsPage: React.FC = () => {
  const { search } = useLocation();
  const {
    menuItems,
    filteredProducts,
    setSelectedCategory,
    setSelectedSubcategory,
    setSelectedUse,
  } = useFilters();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const totalItems = filteredProducts.length;
    setItemsPerPage(12);
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [filteredProducts, itemsPerPage]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const use = queryParams.get("use");
    const page = queryParams.get("page");

    if (use) {
      setSelectedUse(use);
    }

    if (page) {
      window.scrollTo({
        top: 400,
      });
      setCurrentPage(Number(page));
    }
  }, [search, setSelectedUse]);

  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 690,
    });
    setCurrentPage(page);
    navigate(`/productos?page=${page}`);
  };

  const productsToDisplay = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <DefaultLayout>
      <section>
        <Banner
          bannerName="banner.jpg"
          bannerSubtitle="Conoce Nuestros Productos"
          bannerTitle="SMARTCOL S.A.S."
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
              />
            </aside>
          </div>

          <div className="w-full md:w-5/6 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3 px-5 mx-auto">
              {productsToDisplay.map(
                (product, index) =>
                  product.imgname && <CardProduct key={index} {...product} />
              )}
              <div
                className="fixed bottom-36 right-12 z-50"
                id="cart-container"
              >
                <Cart />
              </div>
            </div>
            <div className="flex items-center justify-center p-5">
              <Pagination
                className="text-white font-semibold"
                total={totalPages}
                page={currentPage} // Asegura que el componente de paginación tenga el valor actual
                onChange={handlePageChange}
                variant="bordered"
                color="primary"
                size="md"
                siblings={3}
                boundaries={1}
              >
                <PaginationCursor />
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductsPage;
