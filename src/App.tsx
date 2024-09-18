import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/cartProvider";
import ContactPage from "./pages/contactFormPage";
import { FiltersProvider } from "@/context/filterContext";
import IndexPage from "@/pages/index";
import AboutUsPage from "@/pages/aboutUs";
import ProductsPage from "@/pages/products";
import ContactPQR from "@/pages/contactPQRPage";

function App() {
  return (
    <CartProvider>
      <FiltersProvider>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<ProductsPage />} path="/productos" />
          <Route
            element={<ProductsPage />}
            path="/productos/:page/:productName"
          />
          <Route element={<AboutUsPage />} path="/nosotros" />
          <Route element={<ContactPage />} path="/contacto" />
          <Route element={<ContactPQR />} path="/contacto/pqr" />
        </Routes>
      </FiltersProvider>
    </CartProvider>
  );
}

export default App;
