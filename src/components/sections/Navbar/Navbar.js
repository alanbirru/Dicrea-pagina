// Importaciones necesarias
import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import "../../../styles/navbar.css"; // Importación de estilos
import logo from "../../../images/DICREA-LOGO.png";

// Definición del componente Navbar
const Navbar = () => {
  // Estados del componente
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Función para manejar clics en los elementos de navegación
  const handleItemClickNav = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setHamburgerOpen(false);
  };

  // Función para manejar clics en el ícono de hamburguesa
  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // Efecto para manejar el desplazamiento de la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Datos de los elementos de navegación
  const navItemsArr = [
    { id: "inicio", name: "Inicio" },
    { id: "servicios", name: "Servicios" },
    { id: "precios", name: "Precios" },
    { id: "contacto", name: "Contacto" },
  ];

  // Generar la lista de elementos de navegación
  const listNavItems = navItemsArr.map((item) => (
    <li
      className="navbarItem"
      key={item.id}
      onClick={() => handleItemClickNav(item.id)}
    >
      {item.name}
    </li>
  ));

  // Estructura del componente Navbar
  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <img className="navbarLogo" src={logo} alt="Logo" />
      <ul className={`navbarItems ${hamburgerOpen ? "open" : ""}`}>
        {listNavItems}
      </ul>
      <Hamburger isOpen={hamburgerOpen} onClick={handleHamburgerClick} />
    </nav>
  );
};

// Exportar el componente Navbar
export default Navbar;
