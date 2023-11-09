import SocialMediaIcon from "./SocialMediaIcon";

import "../../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import iconsArr from "./iconsArr";

const Footer = () => {
  const renderIcon = (className, icon) => (
    <FontAwesomeIcon className={className} icon={icon} />
  );

  // Icon variables
  const phoneIcon = renderIcon("phoneIcon footer-icon", faPhoneVolume);
  const emailIcon = renderIcon("emailIcon footer-icon", faEnvelope);
  const socialMediaIcon = renderIcon(
    "socialMediaIcon footer-icon",
    faPeopleArrows
  );

  const cRightIcon = renderIcon("c-right-icon", faCopyright);

  const displayIcons = iconsArr.map((icon) => (
    <SocialMediaIcon icon={icon.icon} link={icon.link} />
  ));

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          {phoneIcon}
          <div className="footer-content">
            <p>
              LUNES A VIERNES: 9:00 AM A 6:00 PM.
              <br />
              SÁBADOS: 9:00 AM A 2:00 PM
            </p>
            <span className="bold-span">(624) 199 4467</span>
          </div>
        </div>
        <div className="footerSection">
          {emailIcon}
          <div className="footer-content">
            <p>¿TIENES ALGUNA PREGUNTA?</p>
            <a className="emailLink" href="mailto: di.creadigital0@gmail.com">
              di.creadigital0@gmail.com
            </a>
          </div>
        </div>

        <div className="footerSection">
          {socialMediaIcon}
          <div className="footer-content">
            <p>NUESTRAS REDES</p>
            <div className="logos-social-media">{displayIcons}</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <span style={{ color: "white", marginRight: 5 }}>{cRightIcon}</span>
        <p>Copyright 2023 dicrea. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
