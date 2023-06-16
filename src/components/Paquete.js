import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Paquete = ({ paquete, precio, contenido, ofrecemos }) => {
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
    <div className="paquete-container">
      <div>
        {paquete}
        <h4 className="precio-title">{precio}</h4>
      </div>

      <div className="contenido-container">
        <ul className="contenido-list">{contenidoList}</ul>
      </div>
      <div className="ofrecemos-container">
        <h4 className="ofrecemos-title">Ofrecemos:</h4>
        <ul>{ofrecemosList}</ul>
      </div>
      <span className="loQuiero">
        <a
          href="https://api.whatsapp.com/send?phone=6691472070&text=hola%20que%20tal"
          target="_blank"
        >
          ¡Lo Quiero!
        </a>
      </span>
    </div>
  );
};
export default Paquete;
