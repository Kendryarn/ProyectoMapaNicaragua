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
        nombre: "Antigua Catedral de Santiago de Managua",
        lat: 12.1563, lon: -86.2713,
        texto: "info/Managua/Antigua_Catedral_de_Santiago_de_Managua.txt",
        dato: "",
      },
      {
        nombre: "Palacio Nacional de la Cultura",
        lat: 12.1555, lon: -86.2721,
        texto: "info/Managua/Palacio_Nacional_de_la_Cultura.txt",
        dato: "",
      },
      {
        nombre: "Loma de Tiscapa",
        lat: 12.1399, lon: -86.2742,
        texto: "info/Managua/Loma_de_Tiscapa.txt",
        dato: "",
      },
      {
        nombre: "Teatro Nacional Rubén Darío",
        lat: 12.1583, lon: -86.2727,
        texto: "info/Managua/Teatro_Nacional_Rubén_Darío.txt",
        dato: "",
      },
      {
        nombre: "Plaza de la Revolución",
        lat: 12.1564, lon: -86.2721,
        texto: "info/Managua/Plaza_de_la_Revolución.txt",
        dato: "",
      },
      {
        nombre: "Huellas de Acahualinca",
        lat: 12.1601, lon: -86.2944,
        texto: "info/Managua/Huellas_de_Acahualinca.txt",
        dato: "",
      },
      {
        nombre: "Puerto Salvador Allende",
        lat: 12.1629, lon: -86.2752,
        texto: "info/Managua/Puerto_Salvador_Allende.txt",
        dato: "",
      },
    ],
  },

  LE: {
    nombre: "León",
    color: "#f3a712",
    texto: "info/Leon/Leon.txt",
    infoFuente: "Billiken, «León, una de las ciudades históricas de Nicaragua más importantes de Centroamérica»",
    sitios: [
      {
        nombre: "Basílica Catedral de la Asunción de León",
        lat: 12.4350, lon: -86.8781,
        texto: "info/Leon/Basílica_Catedral_de_la_Asunción_de_León.txt",
        fuente: "",
      },
      {
        nombre: "Ruinas de León Viejo",
        lat: 12.4005, lon: -86.6178,
       texto: "info/Leon/Ruinas_de_León_Viejo.txt",
        fuente: "",
      },
      {
        nombre: "Casa Museo Archivo Rubén Darío",
        lat: 12.4348, lon: -86.8829,
        texto: "info/Leon/Casa_Museo_Archivo_Rubén_Darío.txt",
        fuente: "",
      },
      {
        nombre: "Iglesia La Recolección",
        lat: 12.4375, lon: -86.8770,
        texto: "info/Leon/Iglesia_La_Recolección.txt",
        fuente: "",
      },
      {
        nombre: "Fortín de Acosasco",
        lat: 12.4173, lon: -86.8926,
        texto: "info/Leon/Fortín_de_Acosasco.txt",
        fuente: "",
      },
      {
        nombre: "Cerro Negro",
        lat: 12.5078, lon: -86.7033,
        texto: "info/Leon/Cerro_Negro.txt",
        fuente: "",
      },
      {
        nombre: "Ciudad de León",
        lat: 12.4379, lon: -86.8780,
        texto: "info/Leon/Ciudad_de_León.txt",
        fuente: "",
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
        texto: "info/Chinandega/RuinasIglesiaSanFrancisco.txt",
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
        nombre: "Cañón de Somoto (Sitio Geológico y Arqueológico)",
        lat: 13.45523, lon: -86.70377,
        texto: "info/Madriz/Cañón_de_Somoto_(Sitio_Geológico_y_Arqueológico).txt",
        dato: "",
      },
      {
        nombre: "Iglesia de Santiago Apóstol de Somoto",
        lat: 13.48367, lon: -86.58213,
        texto: "info/Madriz/Iglesia_de_Santiago_Apóstol_de_Somoto.txt",
        dato: "",
      },
      {
        nombre: "San José de Cusmapa",
        lat: 13.28799, lon: -86.65439,
        texto: "info/Madriz/San_José_de_Cusmapa.txt",
        dato: "",
      },
      {
        nombre: "Sitio Arqueológico de San Lucas",
        lat: 13.39700, lon: -86.65500,
        texto: "info/Madriz/Sitio_Arqueológico_de_San_Lucas.txt",
        dato: "",
      },
      {
        nombre: "Pueblo Tradicional de Yalagüina",
        lat: 13.47300, lon: -86.49000,
        texto: "info/Madriz/Pueblo_Tradicional_de_Yalagüina.txt",
        dato: "",
      },
      {
        nombre: "Parroquia de la Purísima Concepción de Totogalpa",
        lat: 13.56306, lon: -86.49341,
        texto: "info/Madriz/Parroquia_de_la_Purísima_Concepción_de_Totogalpa.txt",
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
        nombre: "Iglesia Santuario del Señor de los Milagros",
        lat: 13.6753, lon: -86.3221,
        texto: "info/Nueva_Segovia/Iglesia_Santuario_del_Señor_de_los_Milagros.txt",
        dato: "",
      },
      {
        nombre: "Centro histórico de Ocotal",
        lat: 13.6320, lon: -86.4744,
        texto: "info/Nueva_Segovia/Centro_histórico_de_Ocotal.txt",
        dato: "",
      },
      {
        nombre: "Santuario de la Virgen de la Piedra (Dipilto)",
        lat: 13.7160, lon: -86.5050,
        texto: "info/Nueva_Segovia/Santuario_de_la_Virgen_de_la_Piedra_(Dipilto).txt",
        dato: "",
      },
      {
        nombre: "Minas de San Albino (El Jícaro)",
        lat: 13.6948, lon: -86.0973,
        texto: "info/Nueva_Segovia/Minas_de_San_Albino_(El Jícaro).txt",
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
        nombre: "Catedral de Nuestra Señora del Rosario",
        lat: 13.0929, lon: -86.3553,
        texto: "info/Esteli/Catedral_de_Nuestra_Señora_del_Rosario.txt",
        dato: "",
      },
      {
        nombre: "Museo de Historia y Arqueología Dr. Alejandro Dávila Bolaños",
        lat: 13.0965, lon: -86.3540,
        texto: "info/Esteli/Museo_de_Historia_y_Arqueología_Dr._Alejandro_Dávila_Bolaños.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Tisey-La Estanzuela",
        lat: 13.0222, lon: -86.3884,
        texto: "info/Esteli/Reserva_Natural_Tisey-La_Estanzuela.txt",
        dato: "",
      },
      {
        nombre: "Salto La Estanzuela",
        lat: 13.0274, lon: -86.3532,
        texto: "info/Esteli/Salto_La_Estanzuela.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Miraflor",
        lat: 13.2100, lon: -86.2800,
        texto: "info/Esteli/Reserva_Natural_Miraflor.txt",
        dato: "",
      },
      {
        nombre: "Cerro Tomabú",
        lat: 13.0326, lon: -86.2948,
        texto: "info/Esteli/Cerro_Tomabú.txt",
        dato: "",
      },
      {
        nombre: "Ciudad de Estelí",
        lat: 13.0929, lon: -86.3559,
        texto: "info/Esteli/Ciudad_de_Estelí.txt",
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
        nombre: "Ciudad de Matagalpa",
        lat: 12.9284, lon: -85.9184,
        texto: "info/Matagalpa/Ciudad_de_Matagalpa.txt",
        dato: "",
      },
      {
        nombre: "Catedral San Pedro Apóstol",
        lat: 12.9280, lon: -85.9180,
        texto: "info/Matagalpa/Catedral_San_Pedro_Apóstol.txt",
        dato: "",
      },
      {
        nombre: "Museo Nacional del Café",
        lat: 12.9266, lon: -85.9187,
        texto: "info/Matagalpa/Museo_Nacional_del_Café.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Cerro Apante",
        lat: 12.8972, lon: -85.8990,
        texto: "info/Matagalpa/Reserva_Natural_Cerro_Apante.txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Cerro Musún",
        lat: 12.9852, lon: -85.2423,
        texto: "info/Matagalpa/Reserva_Natural_Cerro_Musún.txt",
        dato: "",
      },
      {
        nombre: "Cascada Blanca",
        lat: 12.9900, lon: -85.9100,
        texto: "info/Matagalpa/Cascada_Blanca.txt",
        dato: "",
      },
      {
        nombre: "Montaña de la Paz (Cerro Apante)",
        lat: 12.8972, lon: -85.8990,
        texto: "info/Matagalpa/Montaña_de_la_Paz_(Cerro Apante).txt",
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
        lat: 14.0284, lon: -83.3823,
        texto: "info/RAAN/Bilwi_(Puerto Cabezas).txt",
        dato: "",
      },
      {
        nombre: "Reserva de Biosfera Bosawás",
        lat: 14.0000, lon: -85.0000,
        texto: "info/RAAN/Reserva_de_Biosfera_Bosawás.txt",
        dato: "",
      },
      {
        nombre: "Parque Nacional Saslaya",
        lat: 13.7605, lon: -84.9777,
        texto: "info/RAAN/Parque_Nacional_Saslaya.txt",
        dato: "",
      },
      {
        nombre: "Cayos Miskitos",
        lat: 14.3833, lon: -82.7667,
        texto: "info/RAAN/Cayos_Miskitos.txt",
        dato: "",
      },
      {
        nombre: "Waspam Río Coco",
        lat: 14.7407, lon: -83.9726,
        texto: "info/RAAN/Waspam_Río_Coco.txt",
        dato: "",
      },
      {
        nombre: "Laguna Karatá",
        lat: 13.9420, lon: -83.4860,
        texto: "info/RAAN/Laguna_Karatá.txt",
        dato: "",
      },
      {
        nombre: "Iglesia Morava de Bilwi",
        lat: 14.0300, lon: -83.3830,
        texto: "info/RAAN/Iglesia_Morava_de_Bilwi.txt",
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
        lat: 12.0131, lon: -83.7649,
        texto: "info/RAAS/Bluefields.txt",
        dato: "",
      },
      {
        nombre: "Corn Island (Islas del Maíz)",
        lat: 12.1747, lon: -83.0604,
        texto: "info/RAAS/Corn_Island_(Islas del Maíz).txt",
        dato: "",
      },
       {
        nombre: "Laguna de Perlas (Pearl Lagoon)",
        lat: 12.3379, lon: -83.6729,
        texto: "info/RAAS/Laguna_de_Perlas_(Pearl Lagoon).txt",
        dato: "",
      },
      {
        nombre: "Laguna de Perlas (laguna)",
        lat: 12.5018, lon: -83.6933,
        texto: "info/RAAS/Laguna_de_Perlas_(laguna).txt",
        dato: "",
      },
      {
        nombre: "Reserva Natural Cerro Silva",
        lat: 11.8145, lon: -83.9370,
        texto: "info/RAAS/Reserva Natural Cerro Silva.txt",
        dato: "",
      },
      {
        nombre: "Monkey Point (Pim's Bay)",
        lat: 11.6000, lon: -83.6670,
        texto: "info/RAAS/Monkey_Point_(Pim's_Bay).txt",
        dato: "",
      },
      {
        nombre: "Iglesia Morava de Bluefields",
        lat: 12.0131, lon: -83.7649,
        texto: "info/RAAS/Iglesia_Morava_de_Bluefields.txt",
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
        texto: "info/Boaco/Parroquia Santiago Apóstol de Boaco.txt",
        dato: "",
      },
      {
        nombre: "Ciudad de Boaco",
        lat: 12.4726, lon: -85.6600,
        texto: "info/Boaco/Ciudad de Boaco.txt",
        dato: "",
      },
      {
        nombre: "Boaco Viejo",
        lat: 12.4580, lon: -85.5334,
        texto: "info/Boaco/Boaco Viejo.txt",
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
        texto: "info/Boaco/El Caracol.txt",
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
        nombre: "Castillo de la Inmaculada Concepción",
        lat: 11.0192, lon: -84.3967,
        texto: "info/Rio_San_Juan/Castillo_de_la_Inmaculada_Concepción.txt",
        dato: "",
      },
      {
        nombre: "El Castillo",
        lat: 11.0189, lon: -84.3970,
        texto: "info/Rio_San_Juan/El_Castillo.txt",
        dato: "",
      },
      {
        nombre: "San Carlos",
        lat: 11.1230, lon: -84.7783,
       texto: "info/Rio_San_Juan/San_Carlos.txt",
        dato: "",
      },
      {
        nombre: "Reserva Biológica Indio Maíz",
        lat: 11.1204, lon: -84.0268,
        texto: "info/Rio_San_Juan/Reserva_Biológica_Indio_Maíz.txt",
        dato: "",
      },
      {
        nombre: "Archipiélago de Solentiname",
        lat: 11.1819, lon: -85.0291,
        texto: "info/Rio_San_Juan/Archipiélago_de_Solentiname.txt",
        dato: "",
      },
      {
        nombre: "Refugio de Vida Silvestre Los Guatuzos",
        lat: 10.9920, lon: -84.9070,
        texto: "info/Rio_San_Juan/Refugio_de_Vida_Silvestre_Los_Guatuzos.txt",
        dato: "",
      },
      {
        nombre: "Monumento Histórico Fortaleza de la Inmaculada Concepción de María",
        lat: 11.0192, lon: -84.3967,
        texto: "info/Rio_San_Juan/Monumento_Histórico_Fortaleza_de_la_Inmaculada_Concepción_de_María.txt",
        dato: "",
      },

    ],
  },

  GR: {
    nombre: "Granada",
    color: "#d4a017",
    sitios: [
      {
        nombre: "Ciudad de Granada",
        lat: 11.9304, lon: -85.9536,
        texto: "info/Granada/Ciudad_de_Granada.txt",
        dato: "",
      },
      {
        nombre: "Catedral de Nuestra Señora de la Asunción",
        lat: 11.9298, lon: -85.9531,
        texto: "info/Granada/Catedral_de_Nuestra_Señora_de_la_Asunción.txt",
        dato: "",
      },
      {
        nombre: "Convento de San Francisco",
        lat: 11.9322, lon: -85.9520,
        texto: "info/Granada/Convento_de_San_Francisco.txt",
        dato: "",
      },
      {
        nombre: "Isletas de Granada",
        lat: 11.9020, lon: -85.9090,
        texto: "info/Granada/Isletas_de_Granada.txt",
        dato: "",
      },
      {
        nombre: "Fortaleza La Pólvora",
        lat: 11.9287, lon: -85.9652,
        texto: "info/Granada/Fortaleza_La_Pólvora.txt",
        dato: "",
      },
      {
        nombre: "Parque Central o Parque Colón",
        lat: 11.9300, lon: -85.9540,
        texto: "info/Granada/Parque_Central_o_Parque_Colón.txt",
        dato: "",
      },
      {
        nombre: "Iglesia La Merced",
        lat: 11.9294, lon: -85.9569,
        texto: "info/Granada/Iglesia_La_Merced.txt",
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
        lat: 11.9736, lon: -86.0961,
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
        nombre: "Basílica Menor de San Sebastián (Diriamba)",
        lat: 11.8571, lon: -86.2401,
        texto: "info/Carazo/Basílica_Menor_de_San_Sebastián.txt",
        dato: "",
      },
      {
        nombre: "Parroquia Santiago Apóstol (Jinotepe)",
        lat: 11.8480, lon: -86.1986,
        texto: "info/Carazo/Parroquia_Santiago_Apóstol_(Jinotepe).txt",
        dato: "",
      },
      {
        nombre: "Ciudad de Diriamba",
        lat: 11.8561, lon: -86.2403,
        texto: "info/Carazo/Ciudad_de_Diriamba.txt",
        dato: "",
      },
      {
        nombre: "Ciudad de Jinotepe",
        lat: 11.8478, lon: -86.1993,
        texto: "info/Carazo/Ciudad_de_Jinotepe.txt",
        dato: "",
      },
      {
        nombre: "Museo Historia-Cultura Diriamba",
        lat: 11.8560, lon: -86.2400,
        texto: "info/Carazo/Museo_Historia-Cultura_Diriamba.txt",
        dato: "",
      },
      {
        nombre: "Reloj Público de Diriamba",
        lat: 11.8590, lon: -86.2390,
        texto: "info/Carazo/Reloj_Público_de_Diriamba.txt",
        dato: "",
      },
      {
        nombre: "Balneario La Boquita",
        lat: 11.6783, lon: -86.3824,
        texto: "info/Carazo/Balneario_La_Boquita.txt",
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
