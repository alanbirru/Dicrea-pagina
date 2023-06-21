import Paquete from "./Paquete";
const PaquetesContainer = () => {
  // Paquetes array of objects

  // Accordion array
  const paquetes = [
    {
      paquete: <h3 className="paquete-title">PAQUETE 1 </h3>,
      precio: "$4,000",
      contenido: [
        "Diseño de logotipo e identidad visual",
        `1 sesión de fotos profesional`,
        "1 video promocional de 30 segundos",
        "Manejo de redes sociales (2 publicaciones por semana)",
        "Diseño de flyers y tarjetas de presentación",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
      ],
    },
    {
      paquete: <h3 className="paquete-title">PAQUETE 2 </h3>,
      precio: "$7,500",
      contenido: [
        "Diseño de logotipo e identidad visual",
        "2 sesión de fotos profesional",
        "1 video promocionales de 60 segundos",
        "Manejo de redes sociales (3 publicaciones por semana)",
        "Diseño de flyers y tarjetas de presentación",
        "Campaña de email marketing",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
        "Análisis de campaña de email marketing",
      ],
    },
    {
      paquete: <h3 className="paquete-title">PAQUETE 3 </h3>,
      precio: "$11,000",
      contenido: [
        "Diseño de logotipo e identidad visual",
        "3 sesiones de fotos profesionales",
        "2 videos promocionales de 60 segundos",
        "Manejo de redes sociales (4 publicaciones por semana)",
        "Diseño de flyers y tarjetas de presentación",
        "Campaña de email marketing",
        "Creación de un sitio web básico",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
        "Análisis de campaña de email marketing",
        "Diseño de sitio web básico",
      ],
    },

    {
      paquete: <h3 className="paquete-title">PAQUETE 4 </h3>,
      precio: "$15,500",
      contenido: [
        "Diseño de logotipo e identidad visual",
        "4 sesiones de fotos profesionales",
        "3 videos promocionales de 60 segundos",
        "Manejo de redes sociales (5 publicaciones por semana)",
        "Diseño de flyers y tarjetas de presentación",
        "Campaña de email marketing",
        "Creación de un sitio web avanzado",
      ],
      ofrecemos: [
        "Publicidad en Facebook e Instagram",
        "Posicionamiento de marca",
        "Aumento de seguidores en redes sociales",
        "Estadísticas de redes sociales",
        "Análisis de campaña de email marketing",
        "Diseño de sitio web avanzado con funciones personalizadas",
      ],
    },
  ];

  const paquetesList = paquetes.map((paquete) => {
    return (
      <Paquete
        paquete={paquete.paquete}
        precio={paquete.precio}
        contenido={paquete.contenido}
        ofrecemos={paquete.ofrecemos}
      />
    );
  });

  return <div className="paquetesContainer">{paquetesList}</div>;
};
export default PaquetesContainer;
