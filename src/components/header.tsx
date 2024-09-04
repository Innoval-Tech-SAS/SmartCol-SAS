/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Image } from "@nextui-org/react";

interface HeaderProps {
  bannerFileName: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const logoContainerClassNames = clsx(
    "hidden sm:flex",
    "flex items-center justify-around px-8 py-4 transition-all duration-500",
    {
      "opacity-0 translate-y-[-100%]": isLoading,
      "opacity-100 translate-y-0": isScrolled && !isLoading,
    }
  );

  return (
    <div className={logoContainerClassNames}>
      <Image
        alt="Logo SmartCol SAS"
        className="max-h-36 mt-2"
        src="/img/logo.png"
      />
      <h3 className="text-lg font-semibold foreground">
        La base de tu éxito, nuestra diversidad de{" "}
        <span className="text-primary">materias primas.</span>
      </h3>
    </div>
  );
};

export default Header;
