import PaquetesContainer from "../PaquetesContainer";
import "../../styles/precios.css";
const Precios = ({ id }) => {
  return (
    <div id={id} className="precios-component section">
      <h2 className="wow animate__animated animate__fadeInDown">Precios</h2>
      <PaquetesContainer />
    </div>
  );
};
export default Precios;
