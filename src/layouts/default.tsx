import { Link } from "@nextui-org/link";

import Header from "@/components/header";
import { Navbar } from "@/components/navbar";
import Contact from "@/components/contact";
import SocialMedia from "@/components/socialMedia";
import Policies from "@/components/policies";
import WhatsAppIcon from "@/components/whatsAppIcon";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Header bannerFileName="banner.jpg" />
      <Navbar />
      <main className="flex-grow pt-2 w-full">
        {children}

        <div className="fixed  bottom-12 right-12 z-50" id="cart-container">
          <WhatsAppIcon />
        </div>
      </main>
      <footer className="w-full flex flex-col items-center justify-center py-3">
        <Contact title="Nuestras Sedes" />
        <SocialMedia />
        <Policies />
        <span className="text-foreground font-semibold my-1">
          Todos los Derechos Reservados
        </span>
        <Link
          isExternal
          className="flex flex-col items-center gap-1 text-current"
          href="https://smartcol.com.co/"
          title="SmartCol S.A.S."
        >
          <p className="text-primary font-semibold">SmartCol S.A.S. - 2024©</p>
        </Link>
      </footer>
    </div>
  );
}
