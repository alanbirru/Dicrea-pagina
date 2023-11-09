import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTiktok,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const renderIcon = (className, icon) => (
  <FontAwesomeIcon className={className} icon={icon} />
);

const tiktokIcon = renderIcon("tiktokIcon", faTiktok);
const facebookIcon = renderIcon("facebookIcon", faFacebook);
const instagramIcon = renderIcon("instagramIcon", faSquareInstagram);

const iconsArr = [
  {
    link: "https://www.tiktok.com/@di.crea?_t=8h0JMtVzJZN&_r=1",
    icon: tiktokIcon,
  },
  {
    link: "https://instagram.com/di.crea_?igshid=MzMyNGUyNmU2YQ==",
    icon: instagramIcon,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100087115505343&mibextid=ZbWKwL",
    icon: facebookIcon,
  },
];

export default iconsArr;
