import "../../styles/contacto.css";
import AccordionContainer from "../AccordionContainer";
const Contacto = ({ id }) => {
  const accordionData = [
    {
      title: "Trabajan de manera bilingue?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
     `,
    },
    {
      title: "Que garantia hay de resultados?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        `,
    },
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate.`,
    },
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            labor.`,
    },
  ];

  return (
    <div
      id={id}
      className="wow animate__animated animate__fadeInDown contacto-component section"
    >
      <h2>Contacto</h2>

      <div className="contacto-container">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816.3172708899863!2d-106.45467974195641!3d23.274332158316774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698abaf2dfe58cd%3A0xbbf4cbff27d38fb7!2sCotorritos%20Mazatl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1686330580880!5m2!1ses-419!2smx"
          width="300"
          height="300"
          loading="lazy"
        ></iframe>

        <div>
          <h3 className="preguntas-frecuentes-title">Preguntas Frecuentes</h3>
          <AccordionContainer accordion={accordionData} />
        </div>
      </div>
    </div>
  );
};
export default Contacto;
