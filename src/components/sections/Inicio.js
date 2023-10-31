import "../../styles/inicio.css";
const Inicio = ({ guyComputer, id }) => {
  return (
    <div id={id} className="inicio-component section">
      <div
        className=" inicio-container"
        data-aos="fade-down"
        data-aos-duration="3500"
        data-aos-easing="ease-in-out"
      >
        <div className="inicio-info">
          <h1>
            ¡Impulsamos tu marca en el
            <span className="yellowSpan"> mundo digital</span>!
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            pariatur
          </p>
          <button className="btn-contactanos">¡Contactanos!</button>
        </div>

        <div ref={guyComputer} className="computerGuy"></div>
      </div>
    </div>
  );
};
export default Inicio;
