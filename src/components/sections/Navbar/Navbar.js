import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import "../../../styles/navbar.css";
import logo from "../../../images/DICREA-LOGO.png";

const Navbar = () => {
  // useState for tracking the value of the scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useState for hiding navbar on scroll
  const [visible, setVisible] = useState(true);

  // useState for opening or closing hamburger
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Navigates to the section on click
  const handleItemClickNav = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setHamburgerOpen(false);
  };

  // Toggles the hamburger menu open/close
  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    // Hides the navbar when scrolling down, shows when scrolling up
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

  const navItemsArr = [
    { id: 1, name: "Inicio" },
    { id: 2, name: "Servicios" },
    { id: 3, name: "Precios" },
    { id: 4, name: "Contacto" },
  ];

  // Generates the list of navigation items
  const listNavItems = navItemsArr.map((item) => (
    <li
      className="navItem"
      key={item.id}
      onClick={() => handleItemClickNav(item.name)}
    >
      {item.name}
    </li>
  ));

  return (
    <nav className="navbar-component">
      <img className="navLogo" src={logo} alt="Logo" />
      <ul className={`navItems ${hamburgerOpen ? "open" : ""}`}>
        {listNavItems}
      </ul>
      <Hamburger isOpen={hamburgerOpen} onClick={handleHamburgerClick} />
    </nav>
  );
};

export default Navbar;
