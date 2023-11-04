import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";

const Paquete = ({ paquete, precio, contenido, ofrecemos, fadeEffect }) => {
  // contenido list from the paquetes array
  const contenidoList = contenido.map((item, index) => {
    return (
      <li className={index + 1}>
        <FontAwesomeIcon className="checkIcon" icon={faCheck} />
        {item}
      </li>
    );
  });
  // ofrecemos list from the paquetes array
  const ofrecemosList = ofrecemos.map((item, index) => {
    return (
      <li className={index + 1}>
        <FontAwesomeIcon className="checkIcon" icon={faCheck} />
        {item}
      </li>
    );
  });

  console.log(contenidoList);
  return (
    <Tilt
      perspective={5000}
      scale={1.04}
      className="paquete-container "
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div data-aos={fadeEffect} data-aos-duration="3800">
        {paquete}
        <h4 className="precio-title">{precio}</h4>
      </div>

      <div
        className="contenido-container"
        data-aos={fadeEffect}
        data-aos-duration="4000"
      >
        <ul className="contenido-list">{contenidoList}</ul>
      </div>
      <div
        className="ofrecemos-container"
        data-aos={fadeEffect}
        data-aos-duration="3800"
      >
        <h4 className="ofrecemos-title">Ofrecemos:</h4>
        <ul>{ofrecemosList}</ul>
      </div>
      <span className="loQuiero" data-aos={fadeEffect} data-aos-duration="3800">
        <a
          href="https://api.whatsapp.com/send?phone=6691472070&text=hola%20que%20tal"
          target="_blank"
        >
          ¡Lo Quiero!
        </a>
      </span>
    </Tilt>
  );
};
export default Paquete;
