import PaquetesContainer from "./paquetes/PaquetesContainer";
import "../../../styles/precios.css";
const Precios = ({ id }) => {
  return (
    <section id={id} className="precios-component section">
      <h2>Paquetes</h2>
      <PaquetesContainer />
    </section>
  );
};
export default Precios;
