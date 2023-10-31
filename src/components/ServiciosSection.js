import "../styles/servicios.css";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";

const ServiciosSection = ({ sections, activeSection }) => {
  // START ----LIST-OF-SERVICES-BUTTONS----

  const section = sections.find((item) => item.id === activeSection);

  const listButtons = section.services.map((item) => {
    return (
      <div>
        <button className="services-list-item">
          <FontAwesomeIcon className="checkIcon" icon={faCheck} />
          {item}
        </button>
      </div>
    );
  });
  // END ----LIST-OF-SERVICES-BUTTONS----

  return (
    <div className="servicios-section-container">
      <div className="servicios-section">
        <h3 className="section-h3">{section.title}</h3>
        <p>{section.description}</p>
        <div className="services-list">{listButtons}</div>
      </div>

      <div>
        <Tilt
          gyroscope={true}
          className="tilt-image"
          options={{
            max: -25,
            perspective: 1000,
            speed: 400,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            gyroscope: true,
          }}
        >
          <img
            className="image-servicios"
            src={section.image}
            loading="lazy"
          ></img>
        </Tilt>
      </div>
    </div>
  );
};
export default ServiciosSection;
