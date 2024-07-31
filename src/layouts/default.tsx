import { Link } from "@nextui-org/link";
import Header from "@/components/header";
import { Navbar } from "@/components/navbar";
import Contact from "@/components/contact";
import SocialMedia from "@/components/socialMedia";

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
      </main>
      <footer className="w-full flex flex-col items-center justify-center py-3">
        <Contact />
        <SocialMedia />
        <span className="text-foreground font-semibold my-1">Todos los Derechos Reservados</span>
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
