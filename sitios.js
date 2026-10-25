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
    texto: "info/Managua/Managua.txt",
    sitios: [
      {
        nombre: "Antigua Catedral de Santiago de Managua",
        lat: 12.1563, lon: -86.2713,
        texto: "info/Managua/Antigua_Catedral_de_Santiago_de_Managua.txt",
        imagenes: ["fotos/Managua/AntiguaCatedralDeManagua1.jpg", "fotos/Managua/AntiguaCatedralDeManagua2.jpg", "fotos/Managua/AntiguaCatedralDeManagua3.jpg", "fotos/Managua/AntiguaCatedralDeManagua4.jpg", "fotos/Managua/AntiguaCatedralDeManagua5.jpg"],
      },
      {
        nombre: "Palacio Nacional de la Cultura",
        lat: 12.1555, lon: -86.2721,
        texto: "info/Managua/Palacio_Nacional_de_la_Cultura.txt",
        imagenes: ["fotos/Managua/PalacioNacionalDeLaCultura1.jpg", "fotos/Managua/PalacioNacionalDeLaCultura2.jpg", "fotos/Managua/PalacioNacionalDeLaCultura3.jpg", "fotos/Managua/PalacioNacionalDeLaCultura4.jpg", "fotos/Managua/PalacioNacionalDeLaCultura5.jpg"],
      },
      {
        nombre: "Loma de Tiscapa",
        lat: 12.1399, lon: -86.2742,
        texto: "info/Managua/Loma_de_Tiscapa.txt",
        imagenes: ["fotos/Managua/LomaDeTiscapa1.jpg", "fotos/Managua/LomaDeTiscapa2.jpg", "fotos/Managua/LomaDeTiscapa3.jpg", "fotos/Managua/LomaDeTiscapa4.jpg", "fotos/Managua/LomaDeTiscapa5.jpg"],
      },
      {
        nombre: "Teatro Nacional Rubén Darío",
        lat: 12.1583, lon: -86.2727,
        texto: "info/Managua/Teatro_Nacional_Rubén_Darío.txt",
        imagenes: ["fotos/Managua/TeatroRubenDario1.jpg", "fotos/Managua/TeatroRubenDario2.jpg", "fotos/Managua/TeatroRubenDario3.jpg", "fotos/Managua/TeatroRubenDario4.jpg", "fotos/Managua/TeatroRubenDario5.jpg"],
      },
      {
        nombre: "Plaza de la Revolución",
        lat: 12.1564, lon: -86.2721,
        texto: "info/Managua/Plaza_de_la_Revolución.txt",
        imagenes: ["fotos/Managua/PlazaDeLaRevolucion1.jpg", "fotos/Managua/PlazaDeLaRevolucion2.jpg", "fotos/Managua/PlazaDeLaRevolucion3.jpg", "fotos/Managua/PlazaDeLaRevolucion4.jpg", "fotos/Managua/PlazaDeLaRevolucion5.jpg"],
      },
      {
        nombre: "Huellas de Acahualinca",
        lat: 12.1601, lon: -86.2944,
        texto: "info/Managua/Huellas_de_Acahualinca.txt",
        imagenes: ["fotos/Managua/HuellasDeAcahualinca1.jpg", "fotos/Managua/HuellasDeAcahualinca2.jpg", "fotos/Managua/HuellasDeAcahualinca3.jpg", "fotos/Managua/HuellasDeAcahualinca4.jpg", "fotos/Managua/HuellasDeAcahualinca5.jpg"],
      },
      {
        nombre: "Puerto Salvador Allende",
        lat: 12.1629, lon: -86.2752,
        texto: "info/Managua/Puerto_Salvador_Allende.txt",
        imagenes: ["fotos/Managua/SalvadorAllende1.jpg", "fotos/Managua/SalvadorAllende2.jpg", "fotos/Managua/SalvadorAllende3.jpg", "fotos/Managua/SalvadorAllende4.jpg", "fotos/Managua/SalvadorAllende5.jpg"],
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
        imagenes: ["fotos/Leon/basilica/BasilicaLeon1.jpg", "fotos/Leon/basilica/BasilicaLeon2.jpg", "fotos/Leon/basilica/BasilicaLeon3.jpg", "fotos/Leon/basilica/BasilicaLeon4.jpg", "fotos/Leon/basilica/BasilicaLeon5.jpg"],
      },
      {
        nombre: "Ruinas de León Viejo",
        lat: 12.4005, lon: -86.6178,
        texto: "info/Leon/Ruinas_de_León_Viejo.txt",
        imagenes: ["fotos/Leon/LeonViejo/RuinasLeon1.jpg", "fotos/Leon/LeonViejo/RuinasLeon2.jpg", "fotos/Leon/LeonViejo/RuinasLeon3.jpg", "fotos/Leon/LeonViejo/RuinasLeon4.jpg", "fotos/Leon/LeonViejo/RuinasLeon5.jpg"],
      },
      {
        nombre: "Casa Museo Archivo Rubén Darío",
        lat: 12.4348, lon: -86.8829,
        texto: "info/Leon/Casa_Museo_Archivo_Rubén_Darío.txt",
        imagenes: ["fotos/Leon/CasaMuseoRb/RubenLeon1.jpg", "fotos/Leon/CasaMuseoRb/RubenLeon2.jpg", "fotos/Leon/CasaMuseoRb/RubenLeon3.jpg", "fotos/Leon/CasaMuseoRb/RubenLeon4.jpg", "fotos/Leon/CasaMuseoRb/RubenLeon5.jpg"],
      },
      {
        nombre: "Iglesia La Recolección",
        lat: 12.4375, lon: -86.8770,
        texto: "info/Leon/Iglesia_La_Recolección.txt",
        imagenes: ["fotos/Leon/Larecoleccion/iglesiaLeon1.jpg", "fotos/Leon/Larecoleccion/iglesiaLeon2.jpg", "fotos/Leon/Larecoleccion/iglesiaLeon3.jpg", "fotos/Leon/Larecoleccion/iglesiaLeon4.jpg", "fotos/Leon/Larecoleccion/iglesiaLeon5.jpg"],
      },
      {
        nombre: "Fortín de Acosasco",
        lat: 12.4173, lon: -86.8926,
        texto: "info/Leon/Fortín_de_Acosasco.txt",
        imagenes: ["fotos/Leon/Acosasco/fortinLeon1.jpg", "fotos/Leon/Acosasco/fortinLeon2.jpg", "fotos/Leon/Acosasco/fortinLeon3.jpg", "fotos/Leon/Acosasco/fortinLeon4.jpg", "fotos/Leon/Acosasco/fortinLeon5.jpg"],
      },
      {
        nombre: "Cerro Negro",
        lat: 12.5078, lon: -86.7033,
        texto: "info/Leon/Cerro_Negro.txt",
        imagenes: ["fotos/Leon/CerroNegro/CerroLeon1.jpg", "fotos/Leon/CerroNegro/CerroLeon2.jpg", "fotos/Leon/CerroNegro/CerroLeon3.jpg", "fotos/Leon/CerroNegro/CerroLeon4.jpg", "fotos/Leon/CerroNegro/CerroLeon5.jpg"],
      },
      {
        nombre: "Ciudad de León",
        lat: 12.4379, lon: -86.8780,
        texto: "info/Leon/Ciudad_de_León.txt",
        imagenes: ["fotos/Leon/CiudadLeon/CiudadLeon1.jpg", "fotos/Leon/CiudadLeon/CiudadLeon2.jpg", "fotos/Leon/CiudadLeon/CiudadLeon3.jpg", "fotos/Leon/CiudadLeon/CiudadLeon4.jpg", "fotos/Leon/CiudadLeon/CiudadLeon5.jpg"],
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
        imagenes: ["fotos/Chinandega/IglesiaSantaAna1.jpg", "fotos/Chinandega/IglesiaSantaAna2.jpg", "fotos/Chinandega/IglesiaSantaAna3.jpg", "fotos/Chinandega/IglesiaSantaAna4.jpg", "fotos/Chinandega/IglesiaSantaAna5.jpg"],
      },
      {
        nombre: "Basílica Menor de la Inmaculada Concepción de El Viejo",
        lat: 12.6622, lon: -87.1665,
        texto: "info/Chinandega/BasilicaInmaculadaConcepcion.txt",
         imagenes: ["fotos/Chinandega/BasilicaMenor1.jpg", "fotos/Chinandega/BasilicaMenor2.jpg", "fotos/Chinandega/BasilicaMenor3.jpg", "fotos/Chinandega/BasilicaMenor4.jpg", "fotos/Chinandega/BasilicaMenor5.jpg"],
      },
      {
        nombre: "Ruinas de la Iglesia y Convento de San Francisco ",
        lat: 12.5430, lon: -87.1650,
        texto: "info/Chinandega/RuinasIglesiaSanFrancisco.txt",
         imagenes: ["fotos/Chinandega/RuinasSanFranciscoElRealejo1.jpg", "fotos/Chinandega/RuinasSanFranciscoElRealejo2.jpg", "fotos/Chinandega/RuinasSanFranciscoElRealejo3.jpg", "fotos/Chinandega/RuinasSanFranciscoElRealejo4.jpg", "fotos/Chinandega/RuinasSanFranciscoElRealejo5.jpg"],
      },
      {
        nombre: "Antigua Estación del Ferrocarril de Chinandega",
        lat: 12.6240, lon: -87.1370,
        texto: "info/Chinandega/EstacionFerrocarril.txt",
         imagenes: ["fotos/Chinandega/AntiguaEstacion1.jpg", "fotos/Chinandega/AntiguaEstacion2.jpg", "fotos/Chinandega/AntiguaEstacion3.jpg", "fotos/Chinandega/AntiguaEstacion4.jpg", "fotos/Chinandega/AntiguaEstacion5.jpg"],
      },
      {
        nombre: "Santuario Nuestra Señora de Guadalupe ",
        lat: 12.6290, lon: -87.1300,
        texto: "info/Chinandega/SantuarioSeñoraGuad.txt",
         imagenes: ["fotos/Chinandega/SantuarioNuestraSeñoraDeGuadalupe1.jpg", "fotos/Chinandega/SantuarioNuestraSeñoraDeGuadalupe2.jpg", "fotos/Chinandega/SantuarioNuestraSeñoraDeGuadalupe3.jpg", "fotos/Chinandega/SantuarioNuestraSeñoraDeGuadalupe4.jpg", "fotos/Chinandega/SantuarioNuestraSeñoraDeGuadalupe5.jpg"],
      },
      {
        nombre: "Volcán Cosigüina",
        lat: 12.9710, lon: -87.5765,
        texto: "info/Chinandega/VolcanCosigüina.txt",
         imagenes: ["fotos/Chinandega/VolcanCosiguina1.jpg", "fotos/Chinandega/VolcanCosiguina2.jpg", "fotos/Chinandega/VolcanCosiguina3.jpg", "fotos/Chinandega/VolcanCosiguina4.jpg", "fotos/Chinandega/VolcanCosiguina5.jpg"],
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
        imagenes: ["fotos/Madriz/CañonSomoto/CañonMadriz1.jpg", "fotos/Madriz/CañonSomoto/CañonMadriz2.jpg", "fotos/Madriz/CañonSomoto/CañonMadriz3.jpg", "fotos/Madriz/CañonSomoto/CañonMadriz4.jpg", "fotos/Madriz/CañonSomoto/CañonMadriz5.jpg"],
      },
      {
        nombre: "Iglesia de Santiago Apóstol de Somoto",
        lat: 13.48367, lon: -86.58213,
        texto: "info/Madriz/Iglesia_de_Santiago_Apóstol_de_Somoto.txt",
        imagenes: ["fotos/Madriz/AntiagoApostolSomoto/iglesiaMadriz1.jpg", "fotos/Madriz/AntiagoApostolSomoto/iglesiaMadriz2.jpg", "fotos/Madriz/AntiagoApostolSomoto/iglesiaMadriz3.jpg", "fotos/Madriz/AntiagoApostolSomoto/iglesiaMadriz4.jpg", "fotos/Madriz/AntiagoApostolSomoto/iglesiaMadriz5.jpg"],
      },
      {
        nombre: "San José de Cusmapa",
        lat: 13.28799, lon: -86.65439,
        texto: "info/Madriz/San_José_de_Cusmapa.txt",
        imagenes: ["fotos/Madriz/SanJoseCusmapa/cusmapaMadriz1.jpg", "fotos/Madriz/SanJoseCusmapa/cusmapaMadriz2.jpg", "fotos/Madriz/SanJoseCusmapa/cusmapaMadriz3.jpg", "fotos/Madriz/SanJoseCusmapa/cusmapaMadriz4.jpg", "fotos/Madriz/SanJoseCusmapa/cusmapaMadriz5.jpg"],
      },
      {
        nombre: "Sitio Arqueológico de San Lucas",
        lat: 13.39700, lon: -86.65500,
        texto: "info/Madriz/Sitio_Arqueológico_de_San_Lucas.txt",
        imagenes: ["fotos/Madriz/SitioArqueologico/arqueologicoMadriz1.jpg", "fotos/Madriz/SitioArqueologico/arqueologicoMadriz2.jpg", "fotos/Madriz/SitioArqueologico/arqueologicoMadriz3.jpg", "fotos/Madriz/SitioArqueologico/arqueologicoMadriz4.jpg", "fotos/Madriz/SitioArqueologico/arqueologicoMadriz5.jpg"],
      },
      {
        nombre: "Pueblo Tradicional de Yalagüina",
        lat: 13.47300, lon: -86.49000,
        texto: "info/Madriz/Pueblo_Tradicional_de_Yalagüina.txt",
        imagenes: ["fotos/Madriz/Yalagüina/yalaguinaMadriz1.jpg", "fotos/Madriz/Yalagüina/yalaguinaMadriz2.jpg", "fotos/Madriz/Yalagüina/yalaguinaMadriz3.jpg", "fotos/Madriz/Yalagüina/yalaguinaMadriz4.jpg", "fotos/Madriz/Yalagüina/yalaguinaMadriz5.jpg"],
      },
      {
        nombre: "Parroquia de la Purísima Concepción de Totogalpa",
        lat: 13.56306, lon: -86.49341,
        texto: "info/Madriz/Parroquia_de_la_Purísima_Concepción_de_Totogalpa.txt",
        imagenes: ["fotos/Madriz/ParroquiaPurisima/purisimaMadriz1.jpg", "fotos/Madriz/ParroquiaPurisima/purisimaMadriz2.jpg", "fotos/Madriz/ParroquiaPurisima/purisimaMadriz3.jpg", "fotos/Madriz/ParroquiaPurisima/purisimaMadriz4.jpg", "fotos/Madriz/ParroquiaPurisima/purisimaMadriz5.jpg"],
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
        imagenes: ["fotos/Nueva Segovia/SeñorDeLosMilagros/iglesiasegovia1.jpg", "fotos/Nueva Segovia/SeñorDeLosMilagros/iglesiasegovia2.jpg", "fotos/Nueva Segovia/SeñorDeLosMilagros/iglesiasegovia3.jpg", "fotos/Nueva Segovia/SeñorDeLosMilagros/iglesiasegovia4.jpg", "fotos/Nueva Segovia/SeñorDeLosMilagros/iglesiasegovia5.jpg"],
      },
      {
        nombre: "Centro histórico de Ocotal",
        lat: 13.6320, lon: -86.4744,
        texto: "info/Nueva_Segovia/Centro_histórico_de_Ocotal.txt",
        imagenes: ["fotos/Nueva Segovia/CentroHistorico/ocotalsegovia1.jpg", "fotos/Nueva Segovia/CentroHistorico/ocotalsegovia2.jpg", "fotos/Nueva Segovia/CentroHistorico/ocotalsegovia3.jpg", "fotos/Nueva Segovia/CentroHistorico/ocotalsegovia4.jpg", "fotos/Nueva Segovia/CentroHistorico/ocotalsegovia5.jpg"],
      },
      {
        nombre: "Santuario de la Virgen de la Piedra (Dipilto)",
        lat: 13.7160, lon: -86.5050,
        texto: "info/Nueva_Segovia/Santuario_de_la_Virgen_de_la_Piedra_(Dipilto).txt",
        imagenes: ["fotos/Nueva Segovia/VirgenPiedra/santuariosegovia1.jpg", "fotos/Nueva Segovia/VirgenPiedra/santuariosegovia2.jpg", "fotos/Nueva Segovia/VirgenPiedra/santuariosegovia3.jpg", "fotos/Nueva Segovia/VirgenPiedra/santuariosegovia4.jpg", "fotos/Nueva Segovia/VirgenPiedra/santuariosegovia5.jpg"],
      },
      {
        nombre: "Minas de San Albino (El Jícaro)",
        lat: 13.6948, lon: -86.0973,
        texto: "info/Nueva_Segovia/Minas_de_San_Albino_(El Jícaro).txt",
        imagenes: ["fotos/Nueva Segovia/MinasSanAlbino/minassegovia1.jpg", "fotos/Nueva Segovia/MinasSanAlbino/minassegovia2.jpg", "fotos/Nueva Segovia/MinasSanAlbino/minassegovia3.jpg", "fotos/Nueva Segovia/MinasSanAlbino/minassegovia4.jpg", "fotos/Nueva Segovia/MinasSanAlbino/minassegovia5.jpg"],
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
        nombre: "Sitio Arqueológico de Condega",
        lat: 13.3650, lon: -86.3985,
        texto: "info/Esteli/Condega.txt",
        imagenes: ["fotos/Esteli/AqueologicoCondega/Condega1.jpg", "fotos/Esteli/AqueologicoCondega/Condega2.jpg", "fotos/Esteli/AqueologicoCondega/Condega3.jpg", "fotos/Esteli/AqueologicoCondega/Condega4.jpg", "fotos/Esteli/AqueologicoCondega/Condega5.jpg"],
      },
      {
        nombre: "Monumento La Bomba",
        lat: 11.97934, lon: -86.09753,
        texto: "info/Esteli/LaBomba.txt",
        imagenes: ["fotos/Esteli/LaBomba/Labomba1.jpg", "fotos/Esteli/LaBomba/Labomba2.jpg", "fotos/Esteli/LaBomba/Labomba3.jpg", "fotos/Esteli/LaBomba/Labomba4.jpg","fotos/Esteli/LaBomba/Labomba5.jpg"],
      },
      {
        nombre: "Sitio Arqueológico Las Pintadas",
        lat: 13.0833, lon: -86.4000,
        texto: "info/Esteli/LasPintadas.txt",
        imagenes: ["fotos/Esteli/LasPintadas/Laspintadas1.jpg", "fotos/Esteli/LasPintadas/Laspintadas2.jpg", "fotos/Esteli/LasPintadas/Laspintadas3.jpg", "fotos/Esteli/LasPintadas/Laspintadas4.jpg", "fotos/Esteli/LasPintadas/Laspintadas5.jpg" ],
      },
      {
        nombre: "Murales Históricos e Insurreccionales del Centro Urbano",
        lat: 12.1534, lon: -86.2714,
        texto: "info/Esteli/Murales.txt",
        imagenes: ["fotos/Esteli/MuralesHistoricos/Murales1.jpg", "fotos/Esteli/MuralesHistoricos/Murales2.jpg", "fotos/Esteli/MuralesHistoricos/Murales3.jpg", "fotos/Esteli/MuralesHistoricos/Murales4.jpg", "fotos/Esteli/MuralesHistoricos/Murales5.jpg"]
      },
      {
        nombre: "Museo de Historia de Estelí 'Alejandro Dávila Bolaños'",
        lat: 13.0972, lon: -86.3536,
        texto: "info/Esteli/MuseoHistorico.txt",
        imagenes: ["fotos/Esteli/MuseodeHistoria/Museo1.jpg", "fotos/Esteli/MuseodeHistoria/Museo2.jpg", "fotos/Esteli/MuseodeHistoria/Museo3.jpg", "fotos/Esteli/MuseodeHistoria/Museo4.jpg", "fotos/Esteli/MuseodeHistoria/Museo4.jpg"],
      },
      {
        nombre: "Parroquia de La Trinidad",
        lat: 12.96832, lon: -86.23518,
        texto: "info/Esteli/Latrinidad.txt",
        imagenes: ["fotos/Esteli/ParroquiaLatrinidad/Parroquia.jpg", "fotos/Esteli/ParroquiaLatrinidad/Parroquia2.jpg", "fotos/Esteli/ParroquiaLatrinidad/Parroquia3.jpg", "fotos/Esteli/ParroquiaLatrinidad/Parroquia4.jpg", "fotos/Esteli/ParroquiaLatrinidad/Parroquia5.jpg"],
      },
      {
        nombre: "Zona de Reserva y Patrimonio Rural de Miraflor ",
        lat: 13.2100, lon: -86.2800,
        texto: "info/Esteli/Miraflor.txt",
        imagenes: ["fotos/Esteli/ZonaReservaMiraflor/Miraflor1.jpg", "fotos/Esteli/ZonaReservaMiraflor/Miraflor2.jpg", "fotos/Esteli/ZonaReservaMiraflor/Miraflor3.jpg", "fotos/Esteli/ZonaReservaMiraflor/Miraflor4.jpg", "fotos/Esteli/ZonaReservaMiraflor/Miraflor5.jpg"],
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
        imagenes: ["fotos/Jinotega/CatedralSanJuanBautista1.jpg", "fotos/Jinotega/CatedralSanJuanBautista2.jpg", "fotos/Jinotega/CatedralSanJuanBautista3.jpg", "fotos/Jinotega/CatedralSanJuanBautista4.jpg", "fotos/Jinotega/CatedralSanJuanBautista5.jpg"],
      },
      {
        nombre: "Centro Histórico de Jinotega",
        lat: 13.0915, lon: -86.0033,
        texto: "info/Jinotega/CentroHistoricoJinotega.txt",
        imagenes: ["fotos/Jinotega/CentroHistoricoDeJinotega1.jpg", "fotos/Jinotega/CentroHistoricoDeJinotega2.jpg", "fotos/Jinotega/CentroHistoricoDeJinotega3.jpg", "fotos/Jinotega/CentroHistoricoDeJinotega4.jpg", "fotos/Jinotega/CentroHistoricoDeJinotega5.jpg"],
      },
      {
        nombre: "Lago Apanás",
        lat: 13.1945, lon: -85.9764,
        texto: "info/Jinotega/LagoApanas.txt",
        imagenes: ["fotos/Jinotega/LagoApanas1.jpg", "fotos/Jinotega/LagoApanas2.jpg", "fotos/Jinotega/LagoApanas3.jpg", "fotos/Jinotega/LagoApanas4.jpg", "fotos/Jinotega/LagoApanas5.jpg"],
      },
      {
        nombre: "Reserva Natural Macizo de Peñas Blancas",
        lat: 13.2872, lon: -85.6724,
        texto: "info/Jinotega/PeñasBlancas.txt",
        imagenes: ["fotos/Jinotega/MacizoPeñasBlancas1.jpg", "fotos/Jinotega/MacizoPeñasBlancas2.jpg", "fotos/Jinotega/MacizoPeñasBlancas3.jpg", "fotos/Jinotega/MacizoPeñasBlancas4.jpg", "fotos/Jinotega/MacizoPeñasBlancas5.jpg"],
      },
      {
        nombre: "Reserva Natural Cerro Datanlí-El Diablo",
        lat: 13.1330, lon: -85.9209,
        texto: "info/Jinotega/ReservaCerroDatanli.txt",
        imagenes: ["fotos/Jinotega/DatiliElDiablo1.jpg", "fotos/Jinotega/DatanliElDiablo2.jpg", "fotos/Jinotega/DatanliElDiablo3.jpg", "fotos/Jinotega/DatanliElDiablo4.jpg", "fotos/Jinotega/DatanliElDiablo5.jpg"],
      },
      {
        nombre: "Parque Nacional Saslaya",
        lat: 13.7600, lon: -85.0500,
        texto: "info/Jinotega/ParqueNacionalSaslaya.txt",
        imagenes: ["fotos/Jinotega/ParqueNacionalSaslaya1.jpg", "fotos/Jinotega/ParqueNacionalSaslaya2.jpg", "fotos/Jinotega/ParqueNacionalSaslaya3.jpg", "fotos/Jinotega/ParqueNacionalSaslaya4.jpg", "fotos/Jinotega/ParqueNacionalSaslaya5.jpg"],
      },
      {
        nombre: "Museo Municipal de Jinotega",
        lat: 13.0910, lon: -86.0023,
        texto: "info/Jinotega/MuseoMunicipal.txt",
        imagenes: ["fotos/Jinotega/MuseoMunicipalDeJinotega1.jpg", "fotos/Jinotega/MuseoMunicipalDeJinotega2.jpg", "fotos/Jinotega/MuseoMunicipalDeJinotega3.jpg", "fotos/Jinotega/MuseoMunicipalDeJinotega4.jpg", "fotos/Jinotega/MuseoMunicipalDeJinotega5.jpg"],
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
        imagenes: ["fotos/Matagalpa/ciudadMatagalpa.jpg", "fotos/Matagalpa/ciudadMatagalpa2.jpg", "fotos/Matagalpa/ciudadMatagalpa3.jpg", "fotos/Matagalpa/ciudadMatagalpa4.jpg", "fotos/Matagalpa/ciudadMatagalpa5.jpg"],
      },
      {
        nombre: "Catedral San Pedro Apóstol",
        lat: 12.9280, lon: -85.9180,
        texto: "info/Matagalpa/Catedral_San_Pedro_Apóstol.txt",
        imagenes: ["fotos/Matagalpa/CatedralSanPedro/catedralMatagalpa1.jpg", "fotos/Matagalpa/CatedralSanPedro/catedralMatagalpa2.jpg", "fotos/Matagalpa/CatedralSanPedro/catedralMatagalpa3.jpg", "fotos/Matagalpa/CatedralSanPedro/catedralMatagalpa4.jpg", "fotos/Matagalpa/CatedralSanPedro/catedralMatagalpa5.jpg"],
      },
      {
        nombre: "Museo Nacional del Café",
        lat: 12.9266, lon: -85.9187,
        texto: "info/Matagalpa/Museo_Nacional_del_Café.txt",
        imagenes: ["fotos/Matagalpa/MuseoCafe/cafeMatagalpa1.jpg", "fotos/Matagalpa/MuseoCafe/cafeMatagalpa2.jpg", "fotos/Matagalpa/MuseoCafe/cafeMatagalpa3.jpg", "fotos/Matagalpa/MuseoCafe/cafeMatagalpa4.jpg", "fotos/Matagalpa/MuseoCafe/cafeMatagalpa5.jpg"],
      },
      {
        nombre: "Reserva Natural Cerro Apante",
        lat: 12.8972, lon: -85.8990,
        texto: "info/Matagalpa/Reserva_Natural_Cerro_Apante.txt",
        imagenes: ["fotos/Matagalpa/CerroApante/reservaMatagalpa1.jpg", "fotos/Matagalpa/CerroApante/reservaMatagalpa2.jpg", "fotos/Matagalpa/CerroApante/reservaMatagalpa3.jpg", "fotos/Matagalpa/CerroApante/reservaMatagalpa4.jpg", "fotos/Matagalpa/CerroApante/reservaMatagalpa5.jpg"],
      },
      {
        nombre: "Reserva Natural Cerro Musún",
        lat: 12.9852, lon: -85.2423,
        texto: "info/Matagalpa/Reserva_Natural_Cerro_Musún.txt",
        imagenes: ["fotos/Matagalpa/CerroMusun/musunMatagalpa1.jpg", "fotos/Matagalpa/CerroMusun/musunMatagalpa2.jpg", "fotos/Matagalpa/CerroMusun/musunMatagalpa3.jpg", "fotos/Matagalpa/CerroMusun/musunMatagalpa4.jpg", "fotos/Matagalpa/CerroMusun/musunMatagalpa5.jpg"],
      },
      {
        nombre: "Cascada Blanca",
        lat: 12.9900, lon: -85.9100,
        texto: "info/Matagalpa/Cascada_Blanca.txt",
        imagenes: ["fotos/Matagalpa/CascadaBlanca/cascadaMatagalpa1.jpg", "fotos/Matagalpa/CascadaBlanca/cascadaMatagalpa2.jpg", "fotos/Matagalpa/CascadaBlanca/cascadaMatagalpa3.jpg", "fotos/Matagalpa/CascadaBlanca/cascadaMatagalpa4.jpg", "fotos/Matagalpa/CascadaBlanca/cascadaMatagalpa5.jpg"],
      },
      {
        nombre: "Montaña de la Paz (Cerro Apante)",
        lat: 12.8972, lon: -85.8990,
        texto: "info/Matagalpa/Montaña_de_la_Paz_(Cerro Apante).txt",
        imagenes: ["fotos/Matagalpa/Montañadelapaz/montañaMatagalpa1.jpg", "fotos/Matagalpa/Montañadelapaz/montañaMatagalpa2.jpg", "fotos/Matagalpa/Montañadelapaz/montañaMatagalpa3.jpg", "fotos/Matagalpa/Montañadelapaz/montañaMatagalpa4.jpg", "fotos/Matagalpa/Montañadelapaz/montañaMatagalpa5.jpg"],
      },
    ],
  },

  AN: {
    nombre: "Costa Caribe Norte (RACCN)",
    color: "#d9a066",
    sitios: [
      {
        nombre: "Puerto Cabezas (Bilwi) - Muelle Histórico y Casco Urbano",
        lat: 14.0292, lon: -83.3712,
        texto: "info/RAAN/PuertoCabezas.txt",
        imagenes: ["fotos/RACCN/PuertoCabezas/Puerto1.jpg", "fotos/RACCN/PuertoCabezas/Puerto2.jpg", "fotos/RACCN/PuertoCabezas/Puerto3.jpg", "fotos/RACCN/PuertoCabezas/Puerto4.jpg", "fotos/RACCN/PuertoCabezas/Puerto5.jpg"],
      },
      {
        nombre: "Waspam y la Cuenca del Río Coco (Wangki)",
        lat: 14.7333, lon: -83.9667,
        texto: "info/RAAN/Waspam.txt",
        imagenes: ["fotos/RACCN/Waspam/Waspam1.jpg", "fotos/RACCN/Waspam/Waspam2.jpg", "fotos/RACCN/Waspam/Waspam3.jpg", "fotos/RACCN/Waspam/Waspam4.jpg", "fotos/RACCN/Waspam/Waspam5.jpg"],
      },
      {
        nombre: "Triángulo Minero (Bonanza, Rosita y Siuna)",
        lat: 14.0167, lon: -84.5833,
        texto: "info/RAAN/Triangulo.txt",
        imagenes: ["fotos/RACCN/TrianguloMinero/Triangulo1.jpg", "fotos/RACCN/TrianguloMinero/Triangulo2.jpg", "fotos/RACCN/TrianguloMinero/Triangulo3.jpg", "fotos/RACCN/TrianguloMinero/Triangulo4.jpg", "fotos/RACCN/TrianguloMinero/Triangulo5.jpg"],
      },
      {
        nombre: "Comunidad Indígena Ancestral de Karata",
        lat: 13.9242, lon: -83.4814,
        texto: "info/RAAN/Karata.txt",
        imagenes: ["fotos/RACCN/Karata/Karata1.jpg", "fotos/RACCN/Karata/Karata2.jpg", "fotos/RACCN/Karata/Karata3.jpg", "fotos/RACCN/Karata/Karata4.jpg", "fotos/RACCN/Karata/Karata5.jpg"],
      },
      {
        nombre: "Cabo Gracias a Dios",
        lat: 14.9892, lon: -83.1720,
        texto: "info/RAAN/Cabo.txt",
        imagenes: ["fotos/RACCN/CaboGraciasADios/Cabo1.jpg", "fotos/RACCN/CaboGraciasADios/Cabo2.jpg", "fotos/RACCN/CaboGraciasADios/Cabo3.jpg", "fotos/RACCN/CaboGraciasADios/Cabo4.jpg", "fotos/RACCN/CaboGraciasADios/Cabo5.jpg"],
      },
      {
        nombre: "Puerto y Comunidad de Prinzapolka",
        lat: 13.4000, lon: -83.5643,
        texto: "info/RAAN/Prinzapolka.txt",
        imagenes: ["fotos/RACCN/Prinzapolka/Comunidad1.jpg", "fotos/RACCN/Prinzapolka/Comunidad2.jpg", "fotos/RACCN/Prinzapolka/Comunidad3.jpg", "fotos/RACCN/Prinzapolka/Comunidad4.jpg", "fotos/RACCN/Prinzapolka/Comunidad5.jpg"],
      },
      {
        nombre: "Territorio Indígena Mayangna Sauni As (Musawas)-reserva Bosawas",
        lat: 14.1486, lon: -84.7061,
        texto: "info/RAAN/Bosawas.txt",
        imagenes: ["fotos/RACCN/Musawas/Territorio1.jpg", "fotos/RACCN/Musawas/Territorio2.jpg", "fotos/RACCN/Musawas/Territorio3.jpg", "fotos/RACCN/Musawas/Territorio4.jpg", "fotos/RACCN/Musawas/Territorio5.jpg"],
      },
    ],
  },

  AS: {
    nombre: "Costa Caribe Sur (RACCS)",
    color: "#e07a5f",
    sitios: [
      {
        nombre: "Barrios Históricos de Bluefields (Old Bank y Cotton Tree)",
        lat: 12.0206, lon: -83.7617,
        texto: "info/RAAS/Barrios.txt",
        imagenes: ["fotos/RACCS/Barrios/Barrio1.jpg", "fotos/RACCS/Barrios/Barrio2.jpg", "fotos/RACCS/Barrios/Barrio3.jpg", "fotos/RACCS/Barrios/Barrio4.jpg", "fotos/RACCS/Barrios/Barrio5.jpg"],
      },
      {
        nombre: "Iglesia Morava Central de Bluefields",
        lat: 12.0125, lon: -83.7600,
        texto: "info/RAAS/Morava.txt",
        imagenes: ["fotos/RACCS/IglesiaMorava/iglesiam1.jpg", "fotos/RACCS/IglesiaMorava/iglesiam2.jpg", "fotos/RACCS/IglesiaMorava/iglesiam3.jpg", "fotos/RACCS/IglesiaMorava/iglesiam4.jpg", "fotos/RACCS/IglesiaMorava/iglesiam5.jpg"],
      },
       {
        nombre: "Corn Island",
        lat: 12.1667, lon: -83.0500,
        texto: "info/RAAS/CornIsland.txt",
        imagenes: ["fotos/RACCS/CornIsland/Island1.jpg", "fotos/RACCS/CornIsland/Island2.jpg", "fotos/RACCS/CornIsland/Island3.jpg", "fotos/RACCS/CornIsland/Island4.jpg", "fotos/RACCS/CornIsland/Island5.jpg"],
      },
      {
        nombre: "Laguna de Perlas",
        lat: 12.3369, lon: -83.6761,
        texto: "info/RAAS/LagunaPerlas.txt",
        imagenes: ["fotos/RACCS/LagunaPerlas/Laguna1.jpg", "fotos/RACCS/LagunaPerlas/Laguna2.jpg", "fotos/RACCS/LagunaPerlas/Laguna3.jpg", "fotos/RACCS/LagunaPerlas/Laguna4.jpg", "fotos/RACCS/LagunaPerlas/Laguna5.jpg"],
      },
      {
        nombre: "Patrimonio Arqueológico Subacuático de Corn Island",
        lat: 12.1667, lon: -83.0500,
        texto: "info/RAAS/SubCornIsland.txt",
        imagenes: ["fotos/RACCS/SubCornIsland/Patrimonio1.jpg", "fotos/RACCS/SubCornIsland/Patrimonio2.jpg", "fotos/RACCS/SubCornIsland/Patrimonio3.jpg", "fotos/RACCS/SubCornIsland/Patrimonio4.jpg", "fotos/RACCS/SubCornIsland/Patrimonio5.jpg"],
      },
      {
        nombre: "Comunidad Garífuna de Orinoco",
        lat: 13.4000, lon: -83.5643,
        texto: "info/RAAS/Orinoco.txt",
        imagenes: ["fotos/RACCS/Orinoco/Orinoco1.jpg", "fotos/RACCS/Orinoco/Orinoco2.jpg", "fotos/RACCS/Orinoco/Orinoco3.jpg", "fotos/RACCS/Orinoco/Orinoco4.jpg", "fotos/RACCS/Orinoco/Orinoco5.jpg"],
      },
      {
        nombre: "El Rama - Puerto Fluvial Histórico",
        lat: 12.1589, lon: -84.2197,
        texto: "info/RAAS/PuertoFluvial.txt",
        imagenes: ["fotos/RACCS/PuertoFluvial/ElRama1.jpg", "fotos/RACCS/PuertoFluvial/ElRama2.jpg", "fotos/RACCS/PuertoFluvial/ElRama3.jpg", "fotos/RACCS/PuertoFluvial/ElRama4.jpg", "fotos/RACCS/PuertoFluvial/ElRama5.jpg"],
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
        imagenes: ["fotos/Boaco/SantiagoApostolBoaco1.jpg", "fotos/Boaco/SantiagoApostolBoaco2.jpg", "fotos/Boaco/SantiagoApostolBoaco3.jpg", "fotos/Boaco/SantiagoApostolBoaco4.jpg", "fotos/Boaco/SantiagoApostolBoaco5.jpg"],
      },
      {
        nombre: "Ciudad de Boaco",
        lat: 12.4726, lon: -85.6600,
        texto: "info/Boaco/Ciudad de Boaco.txt",
        imagenes: ["fotos/Boaco/CiudadDeBoaco1.jpg", "fotos/Boaco/CiudadDeBoaco2.jpg", "fotos/Boaco/CiudadDeBoaco3.jpg", "fotos/Boaco/CiudadDeBoaco4.jpg", "fotos/Boaco/CiudadDeBoaco5.jpg"],
      },
      {
        nombre: "Boaco Viejo",
        lat: 12.4580, lon: -85.5334,
        texto: "info/Boaco/Boaco Viejo.txt",
        imagenes: ["fotos/Boaco/BoacoViejo1.jpg", "fotos/Boaco/BoacoViejo2.jpg", "fotos/Boaco/BoacoViejo3.jpg", "fotos/Boaco/BoacoViejo4.jpg", "fotos/Boaco/BoacoViejo5.jpg"],
      },
      {
        nombre: "Camoapa",
        lat: 12.3844, lon: -85.5126,
        texto: "info/Boaco/Camoapa.txt",
        imagenes: ["fotos/Boaco/Camoapa1.jpg", "fotos/Boaco/Camoapa2.jpg", "fotos/Boaco/Camoapa3.jpg", "fotos/Boaco/Camoapa4.jpg", "fotos/Boaco/Camoapa5.jpg"],
      },
      {
        nombre: "El Caracol",
        lat: 12.3514, lon: -85.8899,
        texto: "info/Boaco/El Caracol.txt",
        imagenes: ["fotos/Boaco/ElCaracol1.jpg", "fotos/Boaco/ElCaracol2.jpg", "fotos/Boaco/ElCaracol3.jpg", "fotos/Boaco/ElCaracol4.jpg", "fotos/Boaco/ElCaracol5.jpg"],
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
        imagenes: ["fotos/Chinandega/MuseoArqueologicoGregorio1.jpg", "fotos/Chinandega/MuseoArqueologicoGregorio2.jpg", "fotos/Chinandega/MuseoArqueologicoGregorio3.jpg", "fotos/Chinandega/MuseoArqueologicoGregorio4.jpg", "fotos/Chinandega/MuseoArqueologicoGregorio5.jpg"],
      },
      {
        nombre: "Catedral de Nuestra Señora de la Asunción de Juigalpa",
        lat: 12.1066, lon: -85.3644,
        texto: "info/Chontales/CatedralJuigalpa.txt",
        imagenes: ["fotos/Chontales/NuestraSeñoraDeLaAsuncion1.jpg", "fotos/Chontales/NuestraSeñoraDeLaAsuncion2.jpg", "fotos/Chontales/NuestraSeñoraDeLaAsuncion3.jpg", "fotos/Chontales/NuestraSeñoraDeLaAsuncion4.jpg", "fotos/Chontales/NuestraSeñoraDeLaAsuncion5.jpg"],
      },
      {
        nombre: "Parque Arqueológico Piedras Pintadas",
        lat: 12.08344, lon: -84.93601,
        texto: "info/Chontales/ParquePiedrasPintadas.txt",
        imagenes: ["fotos/Chinandega/ParquePiedrasPintadas1.jpg", "fotos/Chinandega/ParquePiedrasPintadas2.jpg", "fotos/Chinandega/ParquePiedrasPintadas3.jpg", "fotos/Chinandega/ParquePiedrasPintadas4.jpg", "fotos/Chinandega/ParquePiedrasPintadas5.jpg"],
      },
      {
        nombre: "Archipiélago El Nancital",
        lat: 11.7467, lon: -85.2171,
        texto: "info/Chontales/ElNancital.txt",
        imagenes: ["fotos/Chinandega/ElNancital1.jpg", "fotos/Chinandega/ElNancital2.jpg", "fotos/Chinandega/ElNancital3.jpg", "fotos/Chinandega/ElNancital4.jpg", "fotos/Chinandega/ElNancital5.jpg"],
      },
      {
        nombre: "Ciudad de Juigalpa",
        lat: 12.1061, lon: -85.3652,
        texto: "info/Chontales/CiudadJuigalpa.txt",
        imagenes: ["fotos/Chinandega/CiudadDeJuilgapa1.jpg", "fotos/Chinandega/CiudadDeJuigalpa2.jpg", "fotos/Chinandega/CiudadDeJuigalpa3.jpg", "fotos/Chinandega/CiudadDeJuigalpa4.jpg", "fotos/Chinandega/CiudadDeJuigalpa5.jpg"],
      },
      {
        nombre: "Río Mayales",
        lat: 11.8755, lon: -85.4346,
        texto: "info/Chontales/RioMayales.txt",
        imagenes: ["fotos/Chinandega/RioMayales1.jpg", "fotos/Chinandega/RioMayales2.jpg", "fotos/Chinandega/RioMayales3.jpg", "fotos/Chinandega/RioMayales4.jpg", "fotos/Chinandega/RioMayales5.jpg"],
      },
      {
        nombre: "Santo Tomás",
        lat: 12.0698, lon: -85.0906,
        texto: "info/Chontales/SantoTomas.txt",
        imagenes: ["fotos/Chinandega/SantoTomas1.jpg", "fotos/Chinandega/SantoTomas2.jpg", "fotos/Chinandega/SantoTomas3.jpg", "fotos/Chinandega/SantoTomas4.jpg", "fotos/Chinandega/SantoTomas5.jpg"],
      },
    ],
  },

  SJ: {
    nombre: "Río San Juan",
    color: "#6a994e",
    sitios: [
      {
        nombre: "Fortaleza de la Inmaculada Concepción (El Castillo)",
        lat: 11.01921, lon: -84.39671,
        texto: "info/Rio_San_Juan/ElCastillo.txt",
        imagenes: ["fotos/Rio San Juan/Fortaleza/Elcastillo1.jpg", "fotos/Rio San Juan/Fortaleza/Elcastillo2.jpg", "fotos/Rio San Juan/Fortaleza/Elcastillo3.jpg", "fotos/Rio San Juan/Fortaleza/Elcastillo4.jpg", "fotos/Rio San Juan/Fortaleza/Elcastillo5.jpg"],
      },
      {
        nombre: "San Juan del Norte / Greytown (Ruinas y Cementerios)",
        lat: 10.94886, lon: -83.73717,
        texto: "info/Rio_San_Juan/SanJuandelNorte.txt",
        imagenes: ["fotos/Rio San Juan/SanJuandelNorte/Greytown1.jpg", "fotos/Rio San Juan/SanJuandelNorte/Greytown2.jpg", "fotos/Rio San Juan/SanJuandelNorte/Greytown3.jpg", "fotos/Rio San Juan/SanJuandelNorte/Greytown4.jpg", "fotos/Rio San Juan/SanJuandelNorte/Greytown5.jpg"],
      },
      {
        nombre: "Fortín de San Carlos",
        lat: 11.1231, lon: -84.7783,
        texto: "info/Rio_San_Juan/Fortin.txt",
        imagenes: ["fotos/Rio San Juan/FortinSanCarlos/FortinSanCarlos1.jpg", "fotos/Rio San Juan/FortinSanCarlos/FortinSanCarlos2.jpg", "fotos/Rio San Juan/FortinSanCarlos/FortinSanCarlos3.jpg", "fotos/Rio San Juan/FortinSanCarlos/FortinSanCarlos4.jpg", "fotos/Rio San Juan/FortinSanCarlos/FortinSanCarlos5.jpg"],
      },
      {
        nombre: "Archipiélago de Solentiname",
        lat: 11.1819, lon: -85.0292,
        texto: "info/Rio_San_Juan/Solentiname.txt",
        imagenes: ["fotos/Rio San Juan/Solentiname/ArchipielagoSolen1.jpg", "fotos/Rio San Juan/Solentiname/ArchipielagoSolen2.jpg", "fotos/Rio San Juan/Solentiname/ArchipielagoSolen3.jpg", "fotos/Rio San Juan/Solentiname/ArchipielagoSolen4.jpg", "fotos/Rio San Juan/Solentiname/ArchipielagoSolen5.jpg"],
      },
      {
        nombre: "Sitio Histórico de Boca de Sábalos",
        lat: 11.0500, lon: -84.4667,
        texto: "info/Rio_San_Juan/Sabalos.txt",
        imagenes: ["fotos/Rio San Juan/BocadeSabalos/BocaSabalos1.jpg", "fotos/Rio San Juan/BocadeSabalos/BocaSabalos2.jpg", "fotos/Rio San Juan/BocadeSabalos/BocaSabalos3.jpg", "fotos/Rio San Juan/BocadeSabalos/BocaSabalos4.jpg", "fotos/Rio San Juan/BocadeSabalos/BocaSabalos5.jpg"],
      },
      {
        nombre: "Refugio Bartola",
        lat: 10.98184, lon: -84.33571,
        texto: "info/Rio_San_Juan/RefugioBartola.txt",
        imagenes: ["fotos/Rio San Juan/Refugio/Bartola1.jpg", "fotos/Rio San Juan/Refugio/Bartola2.jpg", "fotos/Rio San Juan/Refugio/Bartola3.jpg", "fotos/Rio San Juan/Refugio/Bartola4.jpg", "fotos/Rio San Juan/Refugio/Bartola5.jpg"],
      },
      {
        nombre: "Iglesia Parroquial de San Carlos Borromeo",
        lat: 11.12698, lon: -84.77805,
        texto: "info/Rio_San_Juan/IglesiaParroquial.txt",
        imagenes: ["fotos/Rio San Juan/IglesiaParroquial/Iglesia1.jpg", "fotos/Rio San Juan/IglesiaParroquial/Iglesia2.jpg", "fotos/Rio San Juan/IglesiaParroquial/Iglesia3.jpg", "fotos/Rio San Juan/IglesiaParroquial/Iglesia4.jpg", "fotos/Rio San Juan/IglesiaParroquial/Iglesia5.jpg"],
      },

    ],
  },

  GR: {
    nombre: "Granada",
    color: "#d4a017",
    sitios: [
      {
        nombre: "Antigua Estación del Ferrocarril de Granada",
        lat: 11.93783, lon: -85.95514,
        texto: "info/Granada/EstacionFerroCarril.txt",
        imagenes: ["fotos/Granada/EstacionFerrocarril/Ferrocarril1.jpg", "fotos/Granada/EstacionFerrocarril/Ferrocarril2.jpg", "fotos/Granada/EstacionFerrocarril/Ferrocarril3.jpg", "fotos/Granada/EstacionFerrocarril/Ferrocarril4.jpg", "fotos/Granada/EstacionFerrocarril/Ferrocarril5.jpg"],
      },
      {
        nombre: "Casa de los Tres Mundos (Palacio de los Leones)",
        lat: 11.93112, lon: -85.95357,
        texto: "info/Granada/CasadelosTresMundos.txt",
        imagenes: ["fotos/Granada/CasaDelosTresMundos/3mundos1.jpg", "fotos/Granada/CasaDelosTresMundos/3mundos2.jpg", "fotos/Granada/CasaDelosTresMundos/3mundos3.jpg", "fotos/Granada/CasaDelosTresMundos/3mundos4.jpg", "fotos/Granada/CasaDelosTresMundos/3mundos5.jpg"],
      },
      {
        nombre: "Iglesia y Convento de San Francisco",
        lat: 11.9322, lon: -85.9519,
        texto: "info/Granada/Convento.txt",
        imagenes: ["fotos/Granada/IglesiaConventoSanFrancisco/Iglesia1.jpg", "fotos/Granada/IglesiaConventoSanFrancisco/Iglesia2.jpg", "fotos/Granada/IglesiaConventoSanFrancisco/Iglesia3.jpg", "fotos/Granada/IglesiaConventoSanFrancisco/Iglesia4.jpg", "fotos/Granada/IglesiaConventoSanFrancisco/Iglesia5.jpg"],
      },
      {
        nombre: "Fuerte de San Pablo (Isletas de Granada)",
        lat: 11.92117, lon: -85.91886,
        texto: "info/Granada/Isletas.txt",
        imagenes: ["fotos/Granada/IsletasdeGranada/Fuerte1.jpg", "fotos/Granada/IsletasdeGranada/Fuerte2.jpg", "fotos/Granada/IsletasdeGranada/Fuerte3.jpg", "fotos/Granada/IsletasdeGranada/Fuerte4.jpg", "fotos/Granada/IsletasdeGranada/Fuerte5.jpg"],
      },
      {
        nombre: "Centro Histórico de Granada",
        lat: 11.9299, lon: -85.9539,
        texto: "info/Granada/CentroHistorico.txt",
        imagenes: ["fotos/Granada/CentroHistorico/CentroGran1.jpg", "fotos/Granada/CentroHistorico/CentroGran2.jpg", "fotos/Granada/CentroHistorico/CentroGran3.jpg", "fotos/Granada/CentroHistorico/CentroGran4.jpg", "fotos/Granada/CentroHistorico/CentroGran5.jpg"],
      },
      {
        nombre: "Iglesia de Nuestra Señora de Guadalupe",
        lat: 11.93032, lon: -85.9475,
        texto: "info/Granada/IglesiaGuad.txt",
        imagenes: ["fotos/Granada/IglesiaDeNuestraSeñora/Iglesiag1.jpg", "fotos/Granada/IglesiaDeNuestraSeñora/Iglesiag2.jpg", "fotos/Granada/IglesiaDeNuestraSeñora/Iglesiag3.jpg", "fotos/Granada/IglesiaDeNuestraSeñora/Iglesiag4.jpg", "fotos/Granada/IglesiaDeNuestraSeñora/Iglesiag5.jpg"],
      },
      {
        nombre: "Iglesia Catedral de Nuestra Señora de la Asunción",
        lat: 11.92983, lon: -85.95323,
        texto: "info/Granada/Catedral.txt",
        imagenes: ["fotos/Granada/IglesiaCatedral/IglesiaA1.jpg", "fotos/Granada/IglesiaCatedral/IglesiaA2.jpg", "fotos/Granada/IglesiaCatedral/IglesiaA3.jpg", "fotos/Granada/IglesiaCatedral/IglesiaA4.jpg", "fotos/Granada/IglesiaCatedral/IglesiaA5.jpg"],
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
        imagenes: ["fotos/Masaya/ParqueNacionalVolcanMasaya1.jpg", "fotos/Masaya/ParqueNacionalVolcanMasaya2.jpg", "fotos/Masaya/ParqueNacionalVolcanMasaya3.jpg", "fotos/Masaya/ParqueNacionalVolcanMasaya4.jpg", "fotos/Masaya/ParqueNacionalVolcanMasaya5.jpg"],
      },
      {
        nombre: "Volcán Masaya", 
        lat: 11.9847, lon: -86.1706,
        texto: "info/Masaya/VolcanMasaya.txt",
        imagenes: ["fotos/Masaya/VolcanMasaya1.jpg", "fotos/Masaya/VolcanMasaya2.jpg", "fotos/Masaya/VolcanMasaya3.jpg", "fotos/Masaya/VolcanMasaya4.jpg", "fotos/Masaya/VolcanMasaya5.jpg"],
      },
      {
        nombre: "Parroquia San Jerónimo",
        lat: 11.9790, lon: -86.0984,
        texto: "info/Masaya/ParroquiaSanJeronimo.txt",
        imagenes: ["fotos/Masaya/ParroquiaSanJeronimo1.jpg", "fotos/Masaya/ParroquiaSanJeronimo2.jpg", "fotos/Masaya/ParroquiaSanJeronimo3.jpg", "fotos/Masaya/ParroquiaSanJeronimo4.jpg", "fotos/Masaya/ParroquiaSanJeronimo5.jpg"],
      },
      {
        nombre: "Fortaleza El Coyotepe",
        lat: 11.9960, lon: -86.0983,
        texto: "info/Masaya/Coyotepe.txt",
        imagenes: ["fotos/Masaya/FortalezaCoyotepe1.jpg", "fotos/Masaya/FortalezaCoyotepe2.jpg", "fotos/Masaya/FortalezaCoyotepe3.jpg", "fotos/Masaya/FortalezaCoyotepe4.jpg", "fotos/Masaya/FortalezaCoyotepe5.jpg"],
      },
      {
        nombre: "Mercado de Artesanías de Masaya",
        lat: 11.9736, lon: -86.0961,
        texto: "info/Masaya/MercadoArtesanias.txt",
        imagenes: ["fotos/Masaya/MercadoDeArtesaniasMasaya1.jpg", "fotos/Masaya/MercadoDeArtesaniasMasaya2.jpg", "fotos/Masaya/MercadoDeArtesaniasMasaya3.jpg", "fotos/Masaya/MercadoDeArtesaniasMasaya4.jpg", "fotos/Masaya/MercadoDeArtesaniasMasaya5.jpg"],
      },
      {
        nombre: "Laguna de Apoyo",
        lat: 11.9132, lon: -86.0372,
        texto: "info/Masaya/LagunaApoyo.txt",
        imagenes: ["fotos/Masaya/LagunaDeApoyo1.jpg", "fotos/Masaya/LagunaDeApoyo2.jpg", "fotos/Masaya/LagunaDeApoyo3.jpg", "fotos/Masaya/LagunaDeApoyo4.jpg", "fotos/Masaya/LagunaDeApoyo5.jpg"],
      },
      {
        nombre: "Mirador de Catarina",
        lat: 11.9132, lon: -86.0690,
        texto: "info/Masaya/MiradorCatarina.txt",
        imagenes: ["fotos/Masaya/MiradorDeCatarina1.jpg", "fotos/Masaya/MiradorDeCatarina2.jpg", "fotos/Masaya/MiradorDeCatarina3.jpg", "fotos/Masaya/MiradorDeCatarina4.jpg", "fotos/Masaya/MiradorDeCatarina5.jpg"],
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
        imagenes: ["fotos/Carazo/BasilicaSebs/Basilica1.jfif", "fotos/Carazo/BasilicaSebs/Basilica2.jfif", "fotos/Carazo/BasilicaSebs/Basilica3.jfif", "fotos/Carazo/BasilicaSebs/Basilica4.jfif", "fotos/Carazo/BasilicaSebs/Basilica5.jfif"],
      },
      {
        nombre: "Parroquia Santiago Apóstol (Jinotepe)",
        lat: 11.8480, lon: -86.1986,
        texto: "info/Carazo/Parroquia_Santiago_Apóstol_(Jinotepe).txt",
        imagenes: ["fotos/Carazo/ParroquiaSantJin/Parroquia1.jfif", "fotos/Carazo/ParroquiaSantJin/Parroquia2.jfif", "fotos/Carazo/ParroquiaSantJin/Parroquia3.jfif", "fotos/Carazo/ParroquiaSantJin/Parroquia4.jfif", "fotos/Carazo/ParroquiaSantJin/Parroquia5.jfif"],
      },
      {
        nombre: "Ciudad de Diriamba",
        lat: 11.8561, lon: -86.2403,
        texto: "info/Carazo/Ciudad_de_Diriamba.txt",
        imagenes: ["fotos/Carazo/Diriamba/Diriamba1.jfif", "fotos/Carazo/Diriamba/Diriamba2.jfif", "fotos/Carazo/Diriamba/Diriamba3.jfif", "fotos/Carazo/Diriamba/Diriamba4.jfif", "fotos/Carazo/Diriamba/Diriamba5.jfif"],
      },
      {
        nombre: "Ciudad de Jinotepe",
        lat: 11.8478, lon: -86.1993,
        texto: "info/Carazo/Ciudad_de_Jinotepe.txt",
        imagenes: ["fotos/Carazo/CiudadJinotepe/Jinotepe1.jfif", "fotos/Carazo/CiudadJinotepe/Jinotepe2.jfif", "fotos/Carazo/CiudadJinotepe/Jinotepe3.jfif", "fotos/Carazo/CiudadJinotepe/Jinotepe4.jfif", "fotos/Carazo/CiudadJinotepe/Jinotepe5.jfif"],
      },
      {
        nombre: "Museo Historia-Cultura Diriamba",
        lat: 11.8560, lon: -86.2400,
        texto: "info/Carazo/Museo_Historia-Cultura_Diriamba.txt",
        imagenes: ["fotos/Carazo/MuseoDiriamba/Museo1.jfif", "fotos/Carazo/MuseoDiriamba/Museo2.jfif", "fotos/Carazo/MuseoDiriamba/Museo3.jfif", "fotos/Carazo/MuseoDiriamba/Museo4.jfif", "fotos/Carazo/MuseoDiriamba/Museo5.jfif"],
      },
      {
        nombre: "Reloj Público de Diriamba",
        lat: 11.8590, lon: -86.2390,
        texto: "info/Carazo/Reloj_Público_de_Diriamba.txt",
        imagenes: ["fotos/Carazo/RelojDir/Reloj1.jfif", "fotos/Carazo/RelojDir/Reloj2.jfif", "fotos/Carazo/RelojDir/Reloj3.jfif", "fotos/Carazo/RelojDir/Reloj4.jfif", "fotos/Carazo/RelojDir/Reloj5.jfif"],
      },
      {
        nombre: "Balneario La Boquita",
        lat: 11.6783, lon: -86.3824,
        texto: "info/Carazo/Balneario_La_Boquita.txt",
        imagenes: ["fotos/Carazo/LaBoquita/Laboquita1.jfif", "fotos/Carazo/LaBoquita/Laboquita2.jfif", "fotos/Carazo/LaBoquita/Laboquita3.jfif", "fotos/Carazo/LaBoquita/Laboquita4.jfif", "fotos/Carazo/LaBoquita/Laboquita5.jfif"],
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
        imagenes: ["fotos/Rivas/IglesiaSanPedroApostol1.jpg", "fotos/Rivas/IglesiaSanPedroApostol2.jpg", "fotos/Rivas/IglesiaSanPedroApostol3.jpg", "fotos/Rivas/IglesiaSanPedroApostol4.jpg", "fotos/Rivas/IglesiaSanPedroApostol5.jpg"],
      },
      {
        nombre: "Isla de Ometepe",
        lat: 11.4984, lon: -85.6255,
        texto: "info/Rivas/IslaOmetepe.txt",
        imagenes: ["fotos/Rivas/IslaOmetepe1.jpg", "fotos/Rivas/IslaOmetepe2.jpg", "fotos/Rivas/IslaOmetepe3.jpg", "fotos/Rivas/IslaOmetepe4.jpg", "fotos/Rivas/IslaOmetepe5.jpg"],
      },
      {
        nombre: "Museo de Antropología e Historia de Rivas",
        lat: 11.4397, lon: -85.8327,
        texto: "info/Rivas/MuseoHAntHist.txt",
        imagenes: ["fotos/Rivas/MuseoDeAntropologiaEHistoria1.jpg", "fotos/Rivas/MuseoDeAntropologiaEHistoria2.jpg", "fotos/Rivas/MuseoDeAntropologiaEHistoria3.jpg", "fotos/Rivas/MuseoDeAntropologiaEHistoria4.jpg", "fotos/Rivas/MuseoDeAntropologiaEHistoria5.jpg"],
      },
      {
        nombre: "Volcán Concepción",
        lat: 11.5333, lon: -85.6167,
        texto: "info/Rivas/VolcanConcepcion.txt",
        imagenes: ["fotos/Rivas/VolcanConcepcion1.jpg", "fotos/Rivas/VolcanConcepcion2.jpg", "fotos/Rivas/VolcanConcepcion3.jpg", "fotos/Rivas/VolcanConcepcion4.jpg", "fotos/Rivas/VolcanConcepcion5.jpg"],
      },
      {
        nombre: "Volcán Maderas",
        lat: 11.4460, lon: -85.5130,
        texto: "info/Rivas/VolcanMaderas.txt",
        imagenes: ["fotos/Rivas/VolcanMaderas1.jpg", "fotos/Rivas/VolcanMaderas2.jpg", "fotos/Rivas/VolcanMaderas3.jpg", "fotos/Rivas/VolcanMaderas4.jpg", "fotos/Rivas/VolcanMaderas5.jpg"],
      },
      {
        nombre: "Reserva Natural Charco Verde",
        lat: 11.4550, lon: -85.5650,
        texto: "info/Rivas/CharcoVerde.txt",
        imagenes: ["fotos/Rivas/ReservaCharcoVerde1.jpg", "fotos/Rivas/ReservaCharcoVerde2.jpg", "fotos/Rivas/ReservaCharcoVerde3.jpg", "fotos/Rivas/ReservaCharcoVerde4.jpg", "fotos/Rivas/ReservaCharcoVerde5.jpg"],
      },
      {
        nombre: "Petroglifos de Ometepe",
        lat: 11.4900, lon: -85.5600,
        texto: "info/Rivas/PetroglifosOmetepe.txt",
        imagenes: ["fotos/Rivas/PetroglifosDeOmetepe1.jpg", "fotos/Rivas/PetroglifosDeOmetepe2.jpg", "fotos/Rivas/PetroglifosDeOmetepe3.jpg", "fotos/Rivas/PetroglifosDeOmetepe4.jpg", "fotos/Rivas/PetroglifosDeOmetepe5.jpg"],
      },
    ],
  },

};
