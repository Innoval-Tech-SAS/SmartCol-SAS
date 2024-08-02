import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/default";
import Banner from "../components/banner";
import Description from "@/components/aboutUs";
import BussinesValues from "@/components/bussinesValues";

export default function AboutUsPage() {
  const [pageTitle, setPageTitle] = useState("");
  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Sobre Nosotros";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Nosotros");
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
        <Description />
        <BussinesValues />
      </section>
    </DefaultLayout>
  );
}
