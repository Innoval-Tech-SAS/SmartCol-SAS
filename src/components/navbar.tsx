import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm placeholder-primary",
      }}
      endContent={
        <SearchIcon className="text-primary text-default-400 pointer-events-none flex-shrink-0" />
      }
      labelPlacement="outside"
      placeholder="Buscar Productos..."
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="2xl"
      className={clsx(
        "border-t-2 border-t-primary z-50 transition-all duration-300",
        isSticky ? "fixed top-0 left-0 right-0" : "relative"
      )}
    >
      <NavbarContent className="basis-2/5 sm:basis-full">
        {isSticky && (
          <NavbarBrand className="gap-3 max-w-fit">
            <Link
              className="flex justify-start items-center gap-1"
              color="primary"
              href="/"
            >
              <img src="img/logo.png" alt="Logo" className="h-8" />
            </Link>
          </NavbarBrand>
        )}
        <div className="hidden md:flex gap-10 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "primary" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  "font-semibold"
                )}
                color="primary"
                href={item.href}
                underline="hover"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="primary" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
