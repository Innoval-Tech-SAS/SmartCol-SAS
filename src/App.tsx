import { Route, Routes } from "react-router-dom";

import ContactPage from "./pages/contactFormPage";
import { FiltersProvider } from "@/context/filterContext";
import CartProvider from "./context/cartProvider";
import IndexPage from "@/pages/index";
import AboutUsPage from "@/pages/aboutUs";
import ProductsPage from "@/pages/products";
import ContactPQR from "@/pages/contactPQRPage";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <CartProvider>
      <FiltersProvider>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<ProductsPage />} path="/products" />
          <Route element={<AboutUsPage />} path="/aboutUs" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<ContactPQR />} path="/contact/pqr" />
          <Route element={<BlogPage />} path="/blog" />
        </Routes>
      </FiltersProvider>
    </CartProvider>
  );
}

export default App;
