import Navbar from "./components/sections/Navbar";
import "./styles/app.css";

import Inicio from "./components/sections/Inicio";
import Precios from "./components/sections/Precios";
import Servicios from "./components/sections/Servicios/Servicios";
import Contacto from "./components/sections/Contacto";

import Footer from "./components/sections/Footer";

import Lottie from "lottie-web";

import { useEffect, useRef } from "react";
import WhatsappBtn from "./components/btns components/WhatsappBtn";
import ScrollUpBtn from "./components/btns components/ScrollUpBtn";

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
    <div>
      <Navbar />
      <div className="container">
        <Inicio guyComputer={container} id={Ids[0]} />
        <Servicios id={Ids[1]} />
        <Precios id={Ids[2]} />
        <Contacto id={Ids[3]} />
      </div>
      <WhatsappBtn />
      <ScrollUpBtn />
      <Footer />
    </div>
  );
};
export default App;
