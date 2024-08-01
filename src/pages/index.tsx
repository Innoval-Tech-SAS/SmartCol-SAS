import DefaultLayout from "@/layouts/default";
import Banner from "@/components/banner";
import Catalogue from "@/components/catalogue";
import Categorys from "@/components/category";
import FrequentlyQuestions from "@/components/frequentlyQuestions"
import CommercialAllies from "@/components/commercialAllies";
import { useEffect, useState } from "react";


export default function IndexPage() {
  const [pageTitle, setPageTitle] = useState("");
  const bannerTitle = "SMARTCOL S.A.S."
  const bannerSubTitle = '"Somos una empresa dedicada a la comercialización e importación de una amplia variedad de materias primas para los principales sectores alimenticio, industrial y farmacéutico."'

  useEffect(() => {
    setPageTitle("SmartCol S.A.S.")
    document.title = pageTitle;
  }, [pageTitle, setPageTitle]);
  return (
    <DefaultLayout>
      <section className="">
        <Banner bannerName="banner.jpg" bannerTitle={bannerTitle} bannerSubtitle={bannerSubTitle} />
        <Catalogue buttonTitle="Explora Nuestro Catálogo" />
        <Categorys />
        <FrequentlyQuestions />
        <CommercialAllies />
      </section>
    </DefaultLayout>
  );
}
