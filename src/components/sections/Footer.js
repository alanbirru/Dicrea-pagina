import React from "react";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTiktok,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

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
  const tiktokIcon = renderIcon("tiktokIcon", faTiktok);
  const FacebookIcon = renderIcon("facebookIcon", faFacebook);
  const instagramIcon = renderIcon("instagramIcon", faSquareInstagram);
  const cRightIcon = renderIcon("c-right-icon", faCopyright);

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
            <div className="logos-social-media">
              <div>
                <a
                  href="https://www.tiktok.com/@di.crea?_t=8h0JMtVzJZN&_r=1"
                  target="_blank"
                >
                  {tiktokIcon}
                </a>
              </div>

              <div>
                <a
                  href="https://instagram.com/di.crea_?igshid=MzMyNGUyNmU2YQ=="
                  target="_blank"
                >
                  {instagramIcon}
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100087115505343&mibextid=ZbWKwL"
                  target="_blank"
                >
                  {FacebookIcon}
                </a>
              </div>
            </div>
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
