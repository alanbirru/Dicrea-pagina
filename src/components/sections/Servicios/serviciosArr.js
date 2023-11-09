import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import marketingImage from "../../../images/marketing.jpg";
import studioImage from "../../../images/studio.jpg";
import webServicesImage from "../../../images/webservices.jpg";

import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const marketingIcon = (
  <FontAwesomeIcon className="marketingIcon" icon={faBullhorn} />
);
const webservicesIcon = (
  <FontAwesomeIcon className="webservicesIcon" icon={faComputer} />
);
const studioIcon = <FontAwesomeIcon className="studioIcon" icon={faCamera} />;

const serviciosArr = [
  {
    title: "Marketing",
    description:
      "Posicionamos tu marca haciendo que estés presente cuando tus clientes necesitan justo lo que tu marca ofrece.",
    id: "marketing",
    icon: marketingIcon,
    image: marketingImage,
    services: [
      "Manejo de redes sociales",
      "Manejo de reputación",
      "Instagram Ads",
      "Email marketing",
      "Facebook Ads",
      "Tiktok Ads",
    ],
  },
  {
    title: "Web Services",
    description:
      "Con sitios web totalmente responsivos, limpios y funcionales que se convierten en tu mejor vendedor 24/7.",
    id: "webservices",
    icon: webservicesIcon,
    image: webServicesImage,
    services: [
      "Páginas web",
      "Optimización web",
      "Posicionamiento SEO/SEM",
      "Correos profesionales",
      "e-Commerce",
    ],
  },
  {
    title: "Studio",
    description:
      "Logra llegar a tu público objetivo con estrategías de verdadero impacto aplicado en diseños, videos, animacion, flyers con realidad aumentada, dale vida propia a tu logotipo y mucho más",
    id: "studio",
    icon: studioIcon,
    image: studioImage,
    services: [
      "Sesión Fotográfica",
      "Diseño de identidad",
      "Animación",
      "Diseño para imprenta",
      "Sesión de video",
      "Diseño para redes sociales",
      "Realidad aumentada",
    ],
  },
];

export default serviciosArr;
