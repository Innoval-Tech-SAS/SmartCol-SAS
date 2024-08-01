import { useState, useEffect } from "react";

import DefaultLayout from "@/layouts/default";
import Banner from "../components/banner";

export default function BlogPage() {
  const [pageTitle, setPageTitle] = useState("");
  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Blog";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Blog");
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
      </section>
    </DefaultLayout>
  );
}
