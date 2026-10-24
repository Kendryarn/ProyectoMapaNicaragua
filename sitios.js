/* =====================================================================
   SITIOS HISTÓRICOS Y DEPARTAMENTOS   <-- AQUÍ EDITAS LA INFORMACIÓN

   Cada SITIO (dentro de "sitios") tiene:
     nombre    : cómo se muestra en el mapa
     lat, lon  : ubicación (se copia de Google Maps: clic derecho sobre el lugar)
     dato      : tu texto sobre el sitio
     fuente    : de dónde sale el dato. Una sola, o varias en una lista:
                   fuente: "Instituto Nicaragüense de Cultura",
                   fuente: ["INC", "UNESCO", { texto: "INTUR", url: "https://..." }],
     imagenes  : TUS fotos (ver más abajo). Si no lo pones, se buscan
                 automáticamente en Wikimedia Commons.
     busqueda  : (opcional) texto para esa búsqueda automática

   Cada DEPARTAMENTO tiene:
     info        : descripción general del departamento
     infoFuente  : sus fuentes (texto o lista, igual que "fuente")

   CÓMO PONER TUS IMÁGENES
     1. Crea en tu repositorio una carpeta "imagenes", al lado de index.html.
     2. Sube allí tus fotos (nombres en minúscula, sin espacios ni tildes).
     3. Escribe sus rutas en el sitio:
          imagenes: [
            "imagenes/catedral-leon-1.jpg",
            { src: "imagenes/catedral-leon-2.jpg", credito: "Foto: tu nombre" },
          ],

   Los campos "wikipedia" ya no se usan: puedes borrarlos.
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
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
            {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  LE: {
    nombre: "León",
    color: "#f3a712",
    info: "Departamento del occidente de Nicaragua. Su cabecera, León, es una de las ciudades más antiguas del país y fue uno de los principales centros de poder durante la época colonial y los primeros años de la república.",
    infoFuente: "Billiken, «León, una de las ciudades históricas de Nicaragua más importantes de Centroamérica»",
    sitios: [
      {
        nombre: "Catedral de León",
        lat: 12.4350, lon: -86.8781,
        dato: "Basílica Catedral de la Asunción, la más grande de Centroamérica. Se construyó entre 1747 y 1814, fue consagrada por Pío IX en 1860 y es Patrimonio Mundial de la UNESCO.",
        fuente: "lacgeo.com, «World Heritage Sites in Nicaragua»; Acuerdo Ministerial de 1983 (la incluye en el Patrimonio Histórico Nacional)",
      },
      {
        nombre: "Ruinas de León Viejo",
        lat: 12.4004, lon: -86.6174,
        dato: "Restos de la antigua capital de la provincia de Nicaragua en tiempos coloniales, una de las fundaciones tempranas de Hispanoamérica. La Ley 167 la declaró Patrimonio Histórico Cultural de la Nación.",
        fuente: "Ley N.º 167 (La Gaceta N.º 100, 31 de mayo de 1994)",
      },
      {
        nombre: "Universidad de León (UNAN-León)",
        lat: 12.4365, lon: -86.88,
        dato: "Fundada en 1812, se considera la universidad más antigua de Nicaragua y una de las instituciones educativas históricas de Centroamérica.",
        fuente: "Billiken, artículo sobre León",
      },
      {
        nombre: "Estación Ferroviaria de León",
        lat: 12.4312, lon: -86.8738,
        dato: "El acuerdo de 1983 la incluyó entre los lugares del Patrimonio Histórico Nacional de la ciudad de León.",
        fuente: "Acuerdo Ministerial del 7 de julio de 1983 (Normas Jurídicas de Nicaragua)",
      },
      {
        nombre: "Iglesia La Recolección",
        lat: 12.4402, lon: -86.8788,
        dato: "Templo incluido en el Patrimonio Artístico Nacional por el acuerdo que declaró patrimonio el casco urbano de León.",
        fuente: "Acuerdo Ministerial del 7 de julio de 1983 (Normas Jurídicas de Nicaragua)",
      },
      {
        nombre: "Casa Tellería (hoy Cueva del León)",
        lat: 12.4346, lon: -86.8779,
        dato: "Casa de la familia Tellería, incluida en el Patrimonio Artístico Nacional en 1983. Hoy funciona como la Cueva del León.",
        fuente: "Acuerdo Ministerial del 7 de julio de 1983 (Normas Jurídicas de Nicaragua)",
      },
      {
        nombre: "Antiguo Hotel León de Oro",
        lat: 12.4355, lon: -86.8773,
        dato: "Casa de la familia Derbyshire, conocida como antiguo Hotel León de Oro e incluida en el Patrimonio Artístico Nacional en 1983.",
        fuente: "Acuerdo Ministerial del 7 de julio de 1983 (Normas Jurídicas de Nicaragua)",
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
      {
        nombre: "Iglesia de Santa Ana ",
        lat: 12.6319, lon: -87.1347,
        texto: "info/Chinandega/IglesiadeSantaAna.txt",
        dato: "",
      },
      {
        nombre: "Basílica Menor de la Inmaculada Concepción de El Viejo",
        lat: 12.6622, lon: -87.1665,
        texto: "info/Chinandega/BasilicaInmaculadaConcepcion.txt",
        dato: "",
      },
      {
        nombre: "Ruinas de la Iglesia y Convento de San Francisco ",
        lat: 12.5430, lon: -87.1650,
        texto: "info/Chinandega/ElRealejo",
        dato: "",
      },
      {
        nombre: "Antigua Estación del Ferrocarril de Chinandega",
        lat: 12.6240, lon: -87.1370,
        texto: "info/Chinandega/EstacionFerrocarril.txt",
        dato: "",
      },
      {
        nombre: "Santuario Nuestra Señora de Guadalupe ",
        lat: 12.6290, lon: -87.1300,
        texto: "info/Chinandega/SantuarioSeñoraGuad.txt",
        dato: "",
      },
      {
        nombre: "Volcán Cosigüina",
        lat: 12.9710, lon: -87.5765,
        texto: "info/Chinandega/VolcanCosigüina.txt",
        dato: "",
      },
    ],
  },

  MD: {
    nombre: "Madriz",
    color: "#c4733b",
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
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
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
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
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
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  JI: {
    nombre: "Jinotega",
    color: "#2f9e44",
    sitios: [
      {
        nombre: "Catedral de San Juan Bautista",
        lat: 13.0919, lon: -86.0023,
        texto: "info/Jinotega/CatedralSanJuanBautista.txt",
        dato: "",
      },
      {
        nombre: "Centro Histórico de Jinotega",
        lat: 13.0915, lon: -86.0033,
        texto: "info/Jinotega/CentroHistoricoJinotega.txt",
        dato: "",
      },
      {
        nombre: "Lago Apanás",
        lat: 13.1945, lon: -85.9764,
        texto: "info/Jinotega/LagoApanas.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Macizo de Peñas Blancas",
        lat: 13.2872, lon: -85.6724,
        texto: "info/Jinotega/PeñasBlancas.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Cerro Datanlí-El Diablo",
        lat: 13.1330, lon: -85.9209,
        texto: "info/Jinotega/ReservaCerroDatanli.txt",
        dato: "",
      },
      {
        nombre: "Parque Nacional Saslaya",
        lat: 13.7605, lon: -84.9777,
        texto: "info/Jinotega/ParqueNacionalSaslaya.txt",
        dato: "",
      },
      {
        nombre: "Museo Municipal de Jinotega",
        lat: 13.0910, lon: -86.0023,
        texto: "info/Jinotega/MuseoMunicipal.txt",
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
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  AN: {
    nombre: "Costa Caribe Norte (RACCN)",
    color: "#d9a066",
    sitios: [
      {
        nombre: "Bilwi (Puerto Cabezas)",
        lat: 14.0333, lon: -83.3833,
        wikipedia: "Bilwi",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  AS: {
    nombre: "Costa Caribe Sur (RACCS)",
    color: "#e07a5f",
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
       {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
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
      {
        nombre: "Parroquia Santiago Apóstol de Boaco",
        lat: 12.4729, lon: -85.6593,
        texto: "info/Boaco/ParroquiaSantiagoApostol.txt",
        dato: "",
      },
      {
        nombre: "Ciudad de Boaco",
        lat: 12.4726, lon: -85.6600,
        texto: "info/Boaco/CiudadBoaco.txt",
        dato: "",
      },
      {
        nombre: "Boaco Viejo",
        lat: 12.4580, lon: -85.5334,
        textp: "info/Boaco/BoacoViejo.txt",
        dato: "",
      },
      {
        nombre: "Camoapa",
        lat: 12.3844, lon: -85.5126,
        texto: "info/Boaco/Camoapa.txt",
        dato: "",
      },
      {
        nombre: "El Caracol",
        lat: 12.3514, lon: -85.8899,
        texto: "info/Boaco/ElCaracol.txt",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  CO: {
    nombre: "Chontales",
    color: "#e9892b",
    sitios: [
      {
        nombre: "Museo Gregorio Aguilar Barea",
        lat: 12.1033, lon: -85.367,
        texto: "info/Chontales/MuseoGregorio.txt",
        dato: "Alberga estatuaria precolombina de piedra de la región de Chontales.",
      },
      {
        nombre: "Catedral de Nuestra Señora de la Asunción de Juigalpa",
        lat: 12.1066, lon: -85.3644,
        texto: "info/Chontales/CatedralJuigalpa.txt",
        dato: "",
      },
      {
        nombre: "Parque Arqueológico Piedras Pintadas",
        lat: 12.08344, lon: -84.93601,
        texto: "info/Chontales/ParquePiedrasPintadas.txt",
        dato: "",
      },
      {
        nombre: "Archipiélago El Nancital",
        lat: 11.7467, lon: -85.2171,
        texto: "info/Chontales/ElNancital.txt",
        dato: "",
      },
      {
        nombre: "Ciudad de Juigalpa",
        lat: 12.1061, lon: -85.3652,
        texto: "info/Chontales/CiudadJuigalpa.txt",
        dato: "",
      },
      {
        nombre: "Río Mayales",
        lat: 11.8755, lon: -85.4346,
        texto: "info/Chontales/RioMayales.txt",
        dato: "",
      },
      {
        nombre: "Santo Tomás",
        lat: 12.0698, lon: -85.0906,
        texto: "info/Chontales/SantoTomas.txt",
        dato: "",
      },
    ],
  },

  SJ: {
    nombre: "Río San Juan",
    color: "#6a994e",
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
      {
        nombre: "San Carlos",
        lat: 11.1186, lon: -84.7747,
        wikipedia: "San Carlos (Nicaragua)",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
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
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  MS: {
    nombre: "Masaya",
    color: "#ff7b9c",
    sitios: [
      {
        nombre: "Parque Nacional Volcán Masaya",
        lat: 11.9833, lon: -86.1500,
        texto: "info/Masaya/ParqueVolcanMasaya.txt",
        dato: "",
      },
      {
        nombre: "Volcán Masaya", 
        lat: 11.9847, lon: -86.1706,
        texto: "info/Masaya/VolcanMasaya.txt",
        dato: "",
      },
      {
        nombre: "Parroquia San Jerónimo",
        lat: 11.9790, lon: -86.0984,
        texto: "info/Masaya/ParroquiaSanJeronimo.txt",
        dato: "",
      },
      {
        nombre: "Fortaleza El Coyotepe",
        lat: 11.9960, lon: -86.0983,
        texto: "info/Masaya/Coyotepe.txt",
        dato: "",
      },
      {
        nombre: "Mercado de Artesanías de Masaya",
        lat: 11.9736, lon: 86.0961,
        texto: "info/Masaya/MercadoArtesanias.txt",
        dato: "",
      },
      {
        nombre: "Laguna de Apoyo",
        lat: 11.9132, lon: -86.0372,
        texto: "info/Masaya/LagunaApoyo.txt",
        dato: "",
      },
      {
        nombre: "Mirador de Catarina",
        lat: 11.9132, lon: -86.0690,
        texto: "info/Masaya/MiradorCatarina.txt",
        dato: "",
      },
    ],
  },

  CA: {
    nombre: "Carazo",
    color: "#4f772d",
    sitios: [
      {
        nombre: "Basílica de San Sebastián, Diriamba",
        lat: 11.8585, lon: -86.2397,
        wikipedia: "Diriamba",
        dato: "El Güegüense fue declarado Patrimonio Oral e Intangible por la UNESCO en 2005.",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
      {
        nombre: "",
        lat: 1, lon: 1,
        wikipedia: "",
        dato: "",
      },
    ],
  },

  RI: {
    nombre: "Rivas",
    color: "#9b5de5",
    sitios: [
      {
        nombre: "Iglesia de San Pedro Apóstol de Rivas",
        lat: 11.4392, lon: -85.8277,
        texto: "info/Rivas/IglesiaSanPedroRivas.txt",
        dato: "",
      },
      {
        nombre: "Isla de Ometepe",
        lat: 11.4984, lon: -85.6255,
        texto: "info/Rivas/IslaOmetepe.txt",
        dato: "",
      },
      {
        nombre: "Museo de Antropología e Historia de Rivas",
        lat: 11.4397, lon: -85.8327,
        texto: "info/Rivas/MuseoHAntHist.txt",
        dato: "",
      },
      {
        nombre: "Volcán Concepción",
        lat: 11.5333, lon: -85.6167,
        texto: "info/Rivas/VolcanConcepcion.txt",
        dato: "",
      },
      {
        nombre: "Volcán Maderas",
        lat: 11.4460, lon: -85.5130,
        texto: "info/Rivas/VolcanMaderas.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Charco Verde",
        lat: 11.4550, lon: -85.5650,
        texto: "info/Rivas/CharcoVerde.txt",
        dato: "",
      },
      {
        nombre: "Petroglifos de Ometepe",
        lat: 11.4900, lon: -85.5600,
        texto: "info/Rivas/PetroglifosOmetepe.txt",
        dato: "",
      },
    ],
  },

};
