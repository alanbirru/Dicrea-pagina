import PaquetesContainer from "../paquetes/PaquetesContainer";
import "../../styles/precios.css";
const Precios = ({ id }) => {
  return (
    <div
      id={id}
      className="precios-component section wow animate__animated animate__fadeInLeft"
    >
      <h2>Precios</h2>
      <PaquetesContainer />
    </div>
  );
};
export default Precios;
