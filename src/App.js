import { useEffect, useRef } from "react";

import "./styles/app.css";

import Navbar from "./components/sections/Navbar/Navbar";
import Inicio from "./components/sections/Inicio/Inicio";
import Servicios from "./components/sections/Servicios/Servicios";
import Precios from "./components/sections/Precios/Precios";
import Contacto from "./components/sections/Contacto/Contacto";
import Footer from "./components/sections/Footer/Footer";
import Lottie from "lottie-web";

import WhatsappBtn from "./components/btns components/WhatsappBtn";
import ScrollUpBtn from "./components/btns components/ScrollUpBtn";
import AnimatedCursor from "react-animated-cursor";

import Aos from "aos";
import "aos/dist/aos.css";

// Ids for navegation

const Ids = ["Inicio", "Servicios", "Precios", "Contacto"];

const App = () => {
  // ----START LOTTIE-ANIMATION----

  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./lottie-animation/guycomputer.json"),
    });
  }, []);
  // ----END LOTTIE-ANIMATION----

  // ----START AOS-ANIMATION----
  useEffect(() => {
    Aos.init();
  }, []);
  // ----END AOS-ANIMATION----

  return (
    <>
      <Navbar />

      <div className="container">
        <Inicio guyComputer={container} id={Ids[0]} />
        <Servicios id={Ids[1]} />
        <Precios id={Ids[2]} />
        <Contacto id={Ids[3]} />
        <Footer />
      </div>

      <WhatsappBtn />
      <ScrollUpBtn />

      <AnimatedCursor
        color="255, 215, 0"
        outerSize={25}
        outerScale={2}
        innerSize={10}
        showSystemCursor={true}
        innerScale={1}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};
export default App;
