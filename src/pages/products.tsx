import DefaultLayout from "@/layouts/default";
import { useState, useEffect } from "react";
import Banner from "@/components/banner";

export default function ProductsPage() {
  const [pageTitle, setPageTitle] = useState("")

  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Nuestros Productos";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Productos")
    document.title = pageTitle
  }, [pageTitle, setPageTitle])

  return (
    <DefaultLayout>
      <section className="">
        <Banner bannerName="banner.jpg" bannerTitle={bannerTitle} bannerSubtitle={bannerSubTitle} />
      </section>
    </DefaultLayout>
  );
}
