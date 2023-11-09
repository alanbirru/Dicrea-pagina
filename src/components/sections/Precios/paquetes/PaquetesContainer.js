import Paquete from "./Paquete";
const PaquetesContainer = () => {
  // Paquetes array of objects

  // Accordion array
  const paquetes = [
    {
      paquete: <h3 className="paquete-title">Básico</h3>,
      precio: "$12,500",
      contenido: [
        "Parrilla de Contenido",
        `Manejo de Redes Sociales
        (Facebook/Instagram)`,
        "1 Diseño Semanal (4)",
        "1 Reel Mensual",
        "1 Campaña Mensual($ 250 diarios)",
        "Reporte de resultados",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
      ],
      fadeEffect: "fade-down",
    },
    {
      paquete: <h3 className="paquete-title">Intermedio </h3>,
      precio: "$17,000",
      contenido: [
        "Parrilla de Contenido",
        "Manejo de Redes Sociales (Facebook/Instagram",
        "2 Diseño Semanal (8)",
        "2 Reel Mensuales",
        "1 Campaña Mensual ($ 250 diarios) ",
        "Toma de contenido",
        "Reporte de resultados",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
        "Análisis de campaña de email marketing",
      ],
      fadeEffect: "fade-down",
    },
    {
      paquete: <h3 className="paquete-title">Premium</h3>,
      precio: "$24,000",
      contenido: [
        "Parrilla de Contenido",
        "Manejo de Redes Sociales (Facebook/Instagram/Tik Tok)",
        "3 Diseño Semanal (12)",
        "4 Reels Mensuales",
        "2 Campañas Mensuales",
        "2 Tomas de Contenido",
        "Landing Page",
        "Reporte de resultados",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
        "Análisis de campaña de email marketing",
        "Diseño de sitio web básico",
      ],
      fadeEffect: "fade-down",
    },

    {
      paquete: <h3 className="paquete-title">Diamante</h3>,
      precio: "$35,000",
      contenido: [
        "Parrilla de Contenido",
        "Manejo de Redes Sociales (Facebook/Instagram/Tik Tok)",
        "4 Diseño Semanal (16)",
        "8 Historias (al mes)",
        "4 Reels Mensuales",
        "2 Campañas Mensuales($ 200 diarios)",
        "Papelería",
        "Página Web",
        "2 Tik Toks semanales",
        "Reporte de resultados",
      ],
      // ofrecemos: [
      //   "Publicidad en Facebook e Instagram",
      //   "Posicionamiento de marca",
      //   "Aumento de seguidores en redes sociales",
      //   "Estadísticas de redes sociales",
      //   "Análisis de campaña de email marketing",
      //   "Diseño de sitio web avanzado con funciones personalizadas",
      // ],
      fadeEffect: "fade-down",
    },
  ];

  const paquetesList = paquetes.map((paquete) => {
    return (
      <Paquete
        paquete={paquete.paquete}
        precio={paquete.precio}
        contenido={paquete.contenido}
        // ofrecemos={paquete.ofrecemos}
        fadeEffect={paquete.fadeEffect}
      />
    );
  });

  return <div className="paquetesContainer">{paquetesList}</div>;
};
export default PaquetesContainer;
