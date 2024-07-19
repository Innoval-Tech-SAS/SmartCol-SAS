import React, { useState, useEffect } from "react";
import {
  LogoContainer,
  Nav,
  MenuContainer,
  SearchContainer,
  SearchWrapper,
  SearchInput,
} from "../common/Nav/nav";
import { FiSearch, FiMenu, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Definir animación de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Definir animación de salida
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const FixedNav = styled(Nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

const ScrollingLogoContainer = styled(LogoContainer)`
  animation: ${({ $isLoading, $isScrolled }) =>
      $isLoading ? fadeIn : $isScrolled ? fadeOut : fadeIn}
    0.5s ease-in-out;
  overflow: hidden;
`;

const Navbar = () => {
  const [value, setValue] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <header>
        <ScrollingLogoContainer $isScrolled={isScrolled} $isLoading={isLoading}>
          <img src="img/logo.png" alt="Logo SmartCol SAS " />
          <h3>
            La base de tu éxito, nuestra diversidad de{" "}
            <span>materias primas.</span>
          </h3>
        </ScrollingLogoContainer>

        {isScrolled ? (
          <FixedNav>
            <MenuContainer>
              <ul>
                <li>
                  <span>
                    <FiMenu size={24} color="#456E2A" />
                  </span>
                </li>
                <li>
                  <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Productos</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contacto</NavLink>
                </li>
              </ul>
            </MenuContainer>

            <SearchContainer>
              <SearchWrapper value={value}>
                <SearchInput
                  name="search"
                  placeholder="Buscar"
                  value={value}
                  onChange={handleInputChange}
                />
                <span className="material-symbols-outlined">
                  <FiSearch size={22} />
                </span>
              </SearchWrapper>

              <div>
                <FiShoppingCart size={24} color="#456E2A" />
              </div>
            </SearchContainer>
          </FixedNav>
        ) : (
          <Nav>
            <MenuContainer>
              <span>
                <FiMenu size={24} color="#456E2A" />
              </span>

              <ul>
                <li>
                  <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Productos</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contacto</NavLink>
                </li>
              </ul>
            </MenuContainer>

            <SearchContainer>
              <SearchWrapper value={value}>
                <SearchInput
                  name="search"
                  placeholder="Buscar"
                  value={value}
                  onChange={handleInputChange}
                />
                <span className="material-symbols-outlined">
                  <FiSearch size={22} />
                </span>
              </SearchWrapper>

              <div>
                <FiShoppingCart size={24} color="#456E2A" />
              </div>
            </SearchContainer>
          </Nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
