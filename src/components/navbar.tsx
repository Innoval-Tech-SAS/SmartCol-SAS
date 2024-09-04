import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as NextUILink } from "@nextui-org/link";
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
import { Image } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-primary/50 shadow-md",
        input: "text-sm placeholder-primary",
      }}
      endContent={
        <SearchIcon className="text-primary pointer-events-none flex-shrink-0" />
      }
      labelPlacement="outside"
      placeholder="Buscar Productos..."
      type="search"
    />
  );

  return (
    <NextUINavbar
      className={clsx(
        "border-t-2 border-t-primary z-50",
        isSticky ? "fixed top-0 left-0 right-0" : "relative",
      )}
      maxWidth="2xl"
    >
      <NavbarContent className="basis-2/5 sm:basis-full">
        {isSticky && (
          <NavbarBrand className="gap-3 max-w-fit">
            <NextUILink
              aria-label="Home"
              className="flex justify-start items-center gap-1"
              color="primary"
              href="/"
            >
              <Image alt="Logo" className="h-8" src="/img/logo.png" />
            </NextUILink>
          </NavbarBrand>
        )}
        <div className="hidden md:flex gap-5 ml-2">
          {siteConfig.navItems.map((item) =>
            item.label === "Contacto" ? (
              <NavbarItem key={item.href}>
                <Dropdown className="bg-background/90">
                  <DropdownTrigger>
                    <Button
                      aria-label={item.label}
                      className={clsx(
                        "text-primary font-bold",
                        isActive(item.href) && "bg-primary/10",
                      )}
                      color="primary"
                      variant="light"
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Contact Menu">
                    <DropdownItem key="contact" textValue="Contact">
                      <a
                        className="block font-bold text-primary px-4 py-2"
                        href="/contact"
                      >
                        Contacto
                      </a>
                    </DropdownItem>
                    <DropdownItem key="pqr" textValue="PQRS">
                      <a
                        className="block font-bold text-primary px-4 py-2"
                        href="/contact/pqr"
                      >
                        PQRS
                      </a>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            ) : (
              <NavbarItem key={item.href}>
                <NextUILink
                  aria-label={item.label}
                  className={clsx(
                    linkStyles({ color: "primary" }),
                    isActive(item.href) && "text-primary font-medium",
                  )}
                  color="primary"
                  href={item.href}
                >
                  <Button
                    aria-label={item.label}
                    className={clsx(
                      "text-primary font-bold",
                      isActive(item.href) && "bg-primary/10",
                    )}
                    color="primary"
                    variant="light"
                  >
                    {item.label}
                  </Button>
                </NextUILink>
              </NavbarItem>
            ),
          )}
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
          {siteConfig.navItemsMobile.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextUILink color="primary" href={item.href} size="lg">
                {item.label}
              </NextUILink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
