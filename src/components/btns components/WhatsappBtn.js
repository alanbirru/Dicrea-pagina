import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const whatsBtn = <FontAwesomeIcon className="whatsBtn" icon={faWhatsapp} />;

const WhatsappBtn = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=6691472070&text=hola%20que%20tal"
        target="_blank"
      >
        {whatsBtn}
      </a>
    </div>
  );
};
export default WhatsappBtn;
