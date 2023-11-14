import { useState } from "react";

// --- START SERVICIOS ARRAY---
import serviciosArr from "./serviciosArr";
// --- END SERVICIOS ARRAY---

// START ----STYLES----
import "../../../styles/servicios.css";
// END ----STYLES----

import ServiciosTitle from "./ServiciosTitle";
import ServiciosSection from "./ServiciosSection";

const Servicios = ({ id }) => {
  const [activeSection, setActiveSection] = useState("marketing");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // END ----ACTIVE-SECTION----

  // START ----DISPLAY-TITLES----
  const displayServiciosTitle = serviciosArr.map((item) => (
    <ServiciosTitle
      title={item.title}
      id={item.id}
      handleClick={handleSectionClick}
      activeSection={activeSection}
      icon={item.icon}
    />
  ));
  // END ----DISPLAY-TITLES----
  return (
    <div
      id={id}
      className="servicios-component section"
      data-aos-once="true"
      data-aos="fade-down"
    >
      <h2>Nuestros Servicios</h2>

      <div className="servicios-title">{displayServiciosTitle}</div>
      <ServiciosSection sections={serviciosArr} activeSection={activeSection} />
    </div>
  );
};
export default Servicios;
