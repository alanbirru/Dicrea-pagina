import "../styles/servicios.css";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Tilt } from "react-tilt";

const ServiciosSection = ({ sections, activeSection }) => {
  // START ----LIST-OF-SERVICES----
  const section = sections.find((item) => item.id === activeSection);
  const list = section.services.map((item) => {
    return (
      <div>
        <button className="services-list-item">
          <FontAwesomeIcon className="checkIcon" icon={faCheck} />
          {item}
        </button>
      </div>
    );
  });

  // END ----LIST-OF-SERVICES----

  return (
    <CSSTransition in={true} classNames="fade" timeout={300} unmountOnExit>
      <div className="servicios-section-container">
        <div className="servicios-section">
          <h3 className="section-h3">{section.title}</h3>
          <p>{section.description}</p>
          <div className="services-list">{list}</div>
        </div>

        <Tilt
          className="tilt-image"
          options={{
            max: 25,
            perspective: 1000,
            speed: 400,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
        >
          <img className="image-servicios" src={section.image}></img>
        </Tilt>
      </div>
    </CSSTransition>
  );
};
export default ServiciosSection;
