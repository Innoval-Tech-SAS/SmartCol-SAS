import { useState, useEffect } from "react";

import Banner from "../components/banner";

import DefaultLayout from "@/layouts/default";
import ContactForm from "@/components/contactForm";

export default function ContactPage() {
  const [pageTitle, setPageTitle] = useState("");

  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Contactanos";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Contacto");
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
      <section className="">
        <div className="text-center my-12">
          <h3 className="text-primary font-semibold text-lg">
            Apreciamos mucho tus comentarios, para nosotros es muy importante la
            satisfacción de nuestros clientes.
          </h3>
        </div>
      </section>
      <section className="p-5">
        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
