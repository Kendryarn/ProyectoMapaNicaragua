/* =====================================================================
   SITIOS HISTÓRICOS Y DEPARTAMENTOS
   Para agregar un sitio, copia un bloque { ... } dentro de "sitios" y cambia:
     nombre    : cómo se muestra en el mapa
     lat, lon  : ubicación (la puede copiar de Google Maps, clic derecho)
     wikipedia : título exacto del artículo en es.wikipedia.org
                 (de ahí salen la reseña y la imagen)
     dato      : texto propio opcional; déjalo "" si no tienes uno verificado
   Los códigos (MN, LE, ...) coinciden con los de datos-mapa.js. No los cambies.
   ===================================================================== */

const DEPARTAMENTOS = {

  MN: {
    nombre: "Managua",
    color: "#e4572e",
    sitios: [
      {
        nombre: "Antigua Catedral de Managua",
        lat: 12.1508, lon: -86.2736,
        wikipedia: "Antigua Catedral de Managua",
        dato: "Construida entre 1928 y 1938; resistió el terremoto de 1972 pero quedó inhabitable.",
      },
      {
        nombre: "Palacio Nacional de la Cultura",
        lat: 12.1514, lon: -86.2733,
        wikipedia: "Palacio Nacional de Nicaragua",
        dato: "El 22 de agosto de 1978 un comando sandinista tomó el edificio.",
      },
    ],
  },

  LE: {
    nombre: "León",
    color: "#f3a712",
    sitios: [
      {
        nombre: "Catedral de León",
        lat: 12.4357, lon: -86.8783,
        wikipedia: "Catedral de León (Nicaragua)",
        dato: "Construida entre 1747 y 1860; Patrimonio Mundial de la UNESCO desde 2011.",
      },
      {
        nombre: "Ruinas de León Viejo",
        lat: 12.3419, lon: -86.5389,
        wikipedia: "Ruinas de León Viejo",
        dato: "Primera capital de la provincia, fundada en 1524 y abandonada tras el terremoto de 1610. UNESCO 2000.",
      },
    ],
  },

  CI: {
    nombre: "Chinandega",
    color: "#8ab833",
    sitios: [
      {
        nombre: "Casco histórico de Chinandega",
        lat: 12.6296, lon: -87.131,
        wikipedia: "Chinandega",
        dato: "",
      },
      {
        nombre: "Puerto de Corinto",
        lat: 12.4833, lon: -87.1744,
        wikipedia: "Corinto (Nicaragua)",
        dato: "",
      },
    ],
  },

  MD: {
    nombre: "Madriz",
    color: "#2a9d8f",
    sitios: [
      {
        nombre: "Telpaneca",
        lat: 13.524, lon: -86.238,
        wikipedia: "Telpaneca",
        dato: "",
      },
      {
        nombre: "Somoto",
        lat: 13.48, lon: -86.5826,
        wikipedia: "Somoto",
        dato: "",
      },
    ],
  },

  NS: {
    nombre: "Nueva Segovia",
    color: "#6a4c93",
    sitios: [
      {
        nombre: "Ciudad Antigua",
        lat: 13.7167, lon: -86.15,
        wikipedia: "Ciudad Antigua (Nicaragua)",
        dato: "",
      },
      {
        nombre: "Ocotal",
        lat: 13.632, lon: -86.476,
        wikipedia: "Ocotal",
        dato: "Escenario del ataque de Sandino del 16 de julio de 1927 contra tropas de EE. UU.",
      },
    ],
  },

  ES: {
    nombre: "Estelí",
    color: "#ef476f",
    sitios: [
      {
        nombre: "Catedral de Estelí",
        lat: 13.0917, lon: -86.354,
        wikipedia: "Catedral de Estelí",
        dato: "",
      },
      {
        nombre: "Galería de Héroes y Mártires",
        lat: 13.0897, lon: -86.354,
        wikipedia: "Galería de Héroes y Mártires de Estelí",
        dato: "",
      },
    ],
  },

  JI: {
    nombre: "Jinotega",
    color: "#3a86ff",
    sitios: [
      {
        nombre: "Catedral de Jinotega",
        lat: 13.0889, lon: -85.9993,
        wikipedia: "Jinotega",
        dato: "",
      },
    ],
  },

  MT: {
    nombre: "Matagalpa",
    color: "#b5651d",
    sitios: [
      {
        nombre: "Catedral de Matagalpa",
        lat: 12.9268, lon: -85.917,
        wikipedia: "Catedral de Matagalpa",
        dato: "",
      },
      {
        nombre: "Casa Museo Carlos Fonseca",
        lat: 12.924, lon: -85.916,
        wikipedia: "Carlos Fonseca",
        dato: "Dedicada a Carlos Fonseca (n. Matagalpa, 1936), cofundador del FSLN en 1961.",
      },
    ],
  },

  AN: {
    nombre: "Costa Caribe Norte (RACCN)",
    color: "#118ab2",
    sitios: [
      {
        nombre: "Bilwi (Puerto Cabezas)",
        lat: 14.0333, lon: -83.3833,
        wikipedia: "Bilwi",
        dato: "",
      },
    ],
  },

  AS: {
    nombre: "Costa Caribe Sur (RACCS)",
    color: "#06a77d",
    sitios: [
      {
        nombre: "Bluefields",
        lat: 12.0136, lon: -83.7646,
        wikipedia: "Bluefields",
        dato: "",
      },
      {
        nombre: "Islas del Maíz",
        lat: 12.17, lon: -83.04,
        wikipedia: "Islas del Maíz",
        dato: "",
      },
    ],
  },

  BO: {
    nombre: "Boaco",
    color: "#c77dff",
    sitios: [
      {
        nombre: "Casco histórico de Boaco",
        lat: 12.4719, lon: -85.6597,
        wikipedia: "Boaco",
        dato: "",
      },
    ],
  },

  CO: {
    nombre: "Chontales",
    color: "#e07a5f",
    sitios: [
      {
        nombre: "Museo Gregorio Aguilar Barea",
        lat: 12.1033, lon: -85.367,
        wikipedia: "Juigalpa",
        dato: "Alberga estatuaria precolombina de piedra de la región de Chontales.",
      },
    ],
  },

  SJ: {
    nombre: "Río San Juan",
    color: "#52b788",
    sitios: [
      {
        nombre: "Fortaleza de la Inmaculada Concepción",
        lat: 11.0096, lon: -84.4019,
        wikipedia: "Fortaleza de la Inmaculada Concepción",
        dato: "Construida por los españoles hacia 1673–1675 contra piratas; en 1780 Horatio Nelson participó en su asedio.",
      },
      {
        nombre: "San Carlos",
        lat: 11.1186, lon: -84.7747,
        wikipedia: "San Carlos (Nicaragua)",
        dato: "",
      },
    ],
  },

  GR: {
    nombre: "Granada",
    color: "#d4a017",
    sitios: [
      {
        nombre: "Catedral de Granada",
        lat: 11.9344, lon: -85.956,
        wikipedia: "Catedral de Granada (Nicaragua)",
        dato: "Frente al Parque Central; la ciudad fue fundada en 1524.",
      },
      {
        nombre: "Convento San Francisco",
        lat: 11.9327, lon: -85.9529,
        wikipedia: "Convento y Museo San Francisco",
        dato: "",
      },
    ],
  },

  MS: {
    nombre: "Masaya",
    color: "#ff7b9c",
    sitios: [
      {
        nombre: "Fortaleza de Coyotepe",
        lat: 11.944, lon: -86.087,
        wikipedia: "Fortaleza de Coyotepe",
        dato: "Construida en 1893; después fue prisión y hoy es museo.",
      },
      {
        nombre: "Volcán Masaya",
        lat: 11.9847, lon: -86.1706,
        wikipedia: "Volcán Masaya",
        dato: "En 1529 fray Francisco de Bobadilla colocó una cruz en el cráter.",
      },
    ],
  },

  CA: {
    nombre: "Carazo",
    color: "#4cc9f0",
    sitios: [
      {
        nombre: "Basílica de San Sebastián, Diriamba",
        lat: 11.8585, lon: -86.2397,
        wikipedia: "Diriamba",
        dato: "El Güegüense fue declarado Patrimonio Oral e Intangible por la UNESCO en 2005.",
      },
    ],
  },

  RI: {
    nombre: "Rivas",
    color: "#9b5de5",
    sitios: [
      {
        nombre: "Batalla de Rivas (1856)",
        lat: 11.4333, lon: -85.8333,
        wikipedia: "Batalla de Rivas",
        dato: "El 11 de abril de 1856 Juan Santamaría incendió el mesón ocupado por los filibusteros.",
      },
      {
        nombre: "Isla de Ometepe",
        lat: 11.5167, lon: -85.5833,
        wikipedia: "Isla de Ometepe",
        dato: "Isla de dos volcanes con petroglifos y estatuaria precolombina.",
      },
    ],
  },

};
