import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutUsPage from "@/pages/aboutUs";
import ProductsPage from "@/pages/products";
import ContactPage from "@/pages/contact";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutUsPage />} path="/aboutUs" />
      <Route element={<ProductsPage />} path="/products" />
      <Route element={<ContactPage />} path="/pqr" />
      <Route element={<BlogPage />} path="/blog" />
    </Routes>
  );
}

export default App;
