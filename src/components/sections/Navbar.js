import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/navbar.css";
import Hamburger from "../Hamburger";

import logo from "../../images/DRICREA-LOGO.png";

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
    <CSSTransition in={visible} classNames="slide" timeout={200} unmountOnExit>
      <div className="navbar-component">
        <img className="navLogo" src={logo} alt="Logo" />
        <ul
          className={`navItems ${
            hamburgerOpen ? "open" : ""
          } wow animate__animated animate__bounceInDown animate__delay-0.5s`}
        >
          {listNavItems}
        </ul>
        <Hamburger isOpen={hamburgerOpen} onClick={handleHamburgerClick} />
      </div>
    </CSSTransition>
  );
};

export default Navbar;
