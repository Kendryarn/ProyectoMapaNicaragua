/* =====================================================================
   MAPA INTERACTIVO DE NICARAGUA
   Este archivo contiene solo la lógica. Los datos están en:
     - datos-mapa.js : formas de los departamentos
     - sitios.js     : departamentos, colores y sitios históricos
   ===================================================================== */

const SVG_NS = "http://www.w3.org/2000/svg";
const VISTA_COMPLETA = [0, 0, PROYECCION.ancho, PROYECCION.alto];
const ZOOM_SITIO = 1.8; // cuánto se acerca la cámara al elegir un sitio
const MOVIMIENTO_REDUCIDO = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Elementos de la página ---------- */
const $ = (id) => document.getElementById(id);
const escenario = $("stage");
const svg = $("svg");
const mapa = $("map");          // capa con el mapa completo
const capaElevada = $("lift");  // capa donde vive el departamento agrandado
const panel = $("panel");
const tooltip = $("tip");
const botonVolverFlotante = $("fab");

/* ---------- Iconos (SVG en texto) ---------- */
const svgIcono = (trazo, tam = 20) =>
  `<svg viewBox="0 0 24 24" width="${tam}" height="${tam}" fill="none"
        stroke="currentColor" stroke-width="2.6" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true"><path d="${trazo}"/></svg>`;
const ICONO_ATRAS = svgIcono("M15 5l-7 7 7 7", 16);
const ICONO_ANTERIOR = svgIcono("M15 5l-7 7 7 7", 18);
const ICONO_SIGUIENTE = svgIcono("M9 5l7 7-7 7", 18);

/* ---------- Estado de la aplicación ---------- */
let departamentoAbierto = null;  // código del departamento ampliado (ej. "LE")
let animando = false;            // true mientras corre una animación larga
let animacionElevar = null;      // animación del departamento que se separa
let sitioActivo = 0;             // posición del sitio mostrado en el panel
let transformacion = null;       // { escala, tx, ty } del departamento ampliado
let marcadores = [];             // un grupo SVG por sitio, en el orden de sitios.js
let vistaActual = [...VISTA_COMPLETA];
let idAnimacionVista = 0;
const elementosDepartamento = {}; // código -> <path> del mapa
const cacheWikipedia = {};

/* =====================================================================
   UTILIDADES
   ===================================================================== */

function crearSVG(etiqueta, atributos, padre) {
  const el = document.createElementNS(SVG_NS, etiqueta);
  for (const nombre in atributos) el.setAttribute(nombre, atributos[nombre]);
  if (padre) padre.appendChild(el);
  return el;
}

// Convierte latitud/longitud a la posición (x, y) del dibujo.
// Usa los mismos parámetros con los que se generaron las formas.
function coordenadasAXY(lat, lon) {
  const x = (lon - PROYECCION.lonMin) * PROYECCION.factorLon * PROYECCION.escala + 20;
  const y = (PROYECCION.latMax - lat) * PROYECCION.escala + 20;
  return [x, y];
}

const escaparHTML = (texto) => String(texto).replace(/</g, "&lt;");

/* =====================================================================
   CÁMARA (zoom y desplazamiento del mapa)
   ===================================================================== */

function fijarVista(vista) {
  vistaActual = vista;
  svg.setAttribute("viewBox", vista.join(" "));
}

const suavizar = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Mueve la cámara de forma animada hasta la vista indicada.
function moverVista(destino, duracion = 850) {
  cancelAnimationFrame(idAnimacionVista);
  if (MOVIMIENTO_REDUCIDO) return fijarVista(destino);

  const origen = [...vistaActual];
  const inicio = performance.now();

  function paso(ahora) {
    const progreso = Math.min(1, (ahora - inicio) / duracion);
    const f = suavizar(progreso);
    fijarVista(origen.map((valor, i) => valor + (destino[i] - valor) * f));
    if (progreso < 1) idAnimacionVista = requestAnimationFrame(paso);
  }
  idAnimacionVista = requestAnimationFrame(paso);
}

/* =====================================================================
   DIBUJO DEL MAPA
   ===================================================================== */

const defs = crearSVG("defs", {}, svg); // aquí viven los recortes (clipPath)

function dibujarDepartamentos() {
  for (const codigo in DEPARTAMENTOS) {
    elementosDepartamento[codigo] = crearSVG("path", {
      d: FORMAS_DEPARTAMENTOS[codigo],
      fill: DEPARTAMENTOS[codigo].color,
      class: "dep",
      tabindex: 0,
      role: "button",
      "aria-label": DEPARTAMENTOS[codigo].nombre,
    }, mapa);
  }
}

/* ---------- Interacción con el mapa completo ---------- */

function activarInteraccion() {
  for (const codigo in DEPARTAMENTOS) {
    const elemento = elementosDepartamento[codigo];
    const cantidad = DEPARTAMENTOS[codigo].sitios.length;

    elemento.onclick = () => abrirDepartamento(codigo);
    elemento.onkeydown = (e) => { if (e.key === "Enter") abrirDepartamento(codigo); };
    elemento.onmouseleave = () => { tooltip.style.opacity = 0; };
    elemento.onmousemove = (e) => {
      if (departamentoAbierto) return;
      const plural = cantidad > 1 ? "s" : "";
      tooltip.textContent =
        `${DEPARTAMENTOS[codigo].nombre} · ${cantidad} sitio${plural} histórico${plural}`;
      const caja = escenario.getBoundingClientRect();
      tooltip.style.left = e.clientX - caja.left + 14 + "px";
      tooltip.style.top = e.clientY - caja.top + 14 + "px";
      tooltip.style.opacity = 1;
    };
  }
}

/* =====================================================================
   PANEL LATERAL
   ===================================================================== */

function mostrarInicio() {
  const codigos = Object.keys(DEPARTAMENTOS).sort((a, b) =>
    DEPARTAMENTOS[a].nombre.localeCompare(DEPARTAMENTOS[b].nombre));

  const items = codigos.map((codigo) => `
    <li><button data-k="${codigo}">
      <span class="sw" style="background:${DEPARTAMENTOS[codigo].color}"></span>
      ${DEPARTAMENTOS[codigo].nombre}
    </button></li>`).join("");

  panel.innerHTML = `
    <h2>Explora el mapa</h2>
    <p>Toca un departamento para separarlo del mapa y ver sus sitios históricos.</p>
    <p class="mute">15 departamentos y 2 regiones autónomas. Límites: geoBoundaries.</p>
    <ul>${items}</ul>`;

  panel.querySelectorAll("li button").forEach((boton) => {
    const codigo = boton.dataset.k;
    boton.onclick = () => abrirDepartamento(codigo);
    boton.onmouseenter = () => elementosDepartamento[codigo].classList.add("hl");
    boton.onmouseleave = () => elementosDepartamento[codigo].classList.remove("hl");
  });
}

/* =====================================================================
   ABRIR Y CERRAR UN DEPARTAMENTO
   ===================================================================== */

function abrirDepartamento(codigo) {
  if (animando || departamentoAbierto) return;
  animando = true;
  departamentoAbierto = codigo;
  tooltip.style.opacity = 0;

  const original = elementosDepartamento[codigo];
  const caja = original.getBBox();

  // Cuánto hay que agrandarlo y dónde colocarlo (centrado en el escenario).
  const escala = Math.min(
    (PROYECCION.ancho * 0.82) / caja.width,
    (PROYECCION.alto * 0.82) / caja.height
  );
  const centroX = caja.x + caja.width / 2;
  const centroY = caja.y + caja.height / 2;
  const tx = PROYECCION.ancho / 2 - escala * centroX;
  const ty = PROYECCION.alto / 2 - escala * centroY;
  transformacion = { escala, tx, ty };

  // Copia del departamento que se despega del mapa
  const recorte = crearSVG("clipPath", { id: "cd" }, defs);
  crearSVG("path", { d: FORMAS_DEPARTAMENTOS[codigo] }, recorte);
  const copia = crearSVG("path", {
    d: FORMAS_DEPARTAMENTOS[codigo],
    fill: DEPARTAMENTOS[codigo].color,
    class: "dep",
  }, capaElevada);
  copia.onclick = () => moverVista(VISTA_COMPLETA); // clic: ver el departamento completo

  original.classList.add("ghost"); // queda atenuado en su lugar original
  mapa.classList.add("dim");       // el resto del mapa se apaga
  botonVolverFlotante.classList.add("show");

  animacionElevar = capaElevada.animate([
    { transform: "translate(0px, 0px) scale(1)" },
    { transform: "translate(0px, -6px) scale(1.04)", offset: 0.15 }, // pequeño "salto"
    { transform: `translate(${tx}px, ${ty}px) scale(${escala})` },
  ], {
    duration: MOVIMIENTO_REDUCIDO ? 1 : 1100,
    easing: "cubic-bezier(.65, 0, .25, 1)",
    fill: "forwards",
  });
  animacionElevar.onfinish = () => {
    animando = false;
    dibujarMarcadores(codigo, escala);
  };

  panel.innerHTML = `
    <h2>${DEPARTAMENTOS[codigo].nombre}</h2>
    <p class="mute">Cargando sitios…</p>`;
}

function volverAlMapa() {
  if (animando || !departamentoAbierto) return;
  animando = true;
  const codigo = departamentoAbierto;

  marcadores.forEach((pin) => pin.remove());
  marcadores = [];
  botonVolverFlotante.classList.remove("show");
  moverVista(VISTA_COMPLETA, 500);

  animacionElevar.reverse(); // el departamento regresa a su lugar
  animacionElevar.onfinish = () => {
    animacionElevar.cancel();
    capaElevada.innerHTML = "";
    $("cd").remove();
    elementosDepartamento[codigo].classList.remove("ghost");
    mapa.classList.remove("dim");
    departamentoAbierto = null;
    animando = false;
    mostrarInicio();
  };
}

/* =====================================================================
   SITIOS HISTÓRICOS
   ===================================================================== */

const rectangulo = (x1, y1, x2, y2) => ({ x1, y1, x2, y2 });
const seCruzan = (a, b) => a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;

// Busca un lugar para la burbuja alrededor del punto (x, y) donde no tape
// a otras burbujas ni a otros puntos. Prueba 8 direcciones a distancias crecientes.
function ubicarBurbuja(x, y, ancho, alto, ocupados, radio) {
  const margen = radio * 0.5;
  for (const factor of [1.8, 3, 4.5, 6.5, 9, 12]) {
    const d = radio * factor;
    const diag = d * 0.7;
    const candidatas = [
      [x + d, y - alto / 2],              // derecha
      [x - d - ancho, y - alto / 2],      // izquierda
      [x - ancho / 2, y - d - alto],      // arriba
      [x - ancho / 2, y + d],             // abajo
      [x + diag, y - diag - alto],        // arriba a la derecha
      [x - diag - ancho, y - diag - alto],// arriba a la izquierda
      [x + diag, y + diag],               // abajo a la derecha
      [x - diag - ancho, y + diag],       // abajo a la izquierda
    ];
    for (const [bx, by] of candidatas) {
      const caja = rectangulo(bx - margen, by - margen, bx + ancho + margen, by + alto + margen);
      if (!ocupados.some((o) => seCruzan(caja, o))) return rectangulo(bx, by, bx + ancho, by + alto);
    }
  }
  return rectangulo(x + radio * 2, y - alto / 2, x + radio * 2 + ancho, y + alto / 2);
}

async function dibujarMarcadores(codigo, escala) {
  await document.fonts.ready; // para medir bien el texto con la tipografía final
  if (departamentoAbierto !== codigo) return;

  // Todo se divide entre "escala" para que los textos y puntos mantengan
  // su tamaño en pantalla aunque el departamento esté agrandado.
  const sitios = DEPARTAMENTOS[codigo].sitios;
  const radio = 8 / escala;
  const relleno = 7 / escala;
  const posiciones = sitios.map((s) => coordenadasAXY(s.lat, s.lon));

  // Zonas ya usadas: primero los puntos de todos los sitios
  const ocupados = posiciones.map(([x, y]) =>
    rectangulo(x - radio * 1.6, y - radio * 1.6, x + radio * 1.6, y + radio * 1.6));

  marcadores = sitios.map((sitio, i) => {
    const [x, y] = posiciones[i];
    const pin = crearSVG("g", {
      class: "pin", tabindex: 0, role: "button",
      "aria-label": sitio.nombre, transform: `translate(${x} ${y})`,
    }, capaElevada);

    // 1) Se mide el texto para saber qué tan grande debe ser la burbuja
    const texto = crearSVG("text", { "font-size": 15 / escala }, pin);
    texto.textContent = sitio.nombre;
    const medida = texto.getBBox();
    const ancho = medida.width + relleno * 2;
    const alto = medida.height + relleno * 2;

    // 2) Se elige su lugar y se reserva
    const caja = ubicarBurbuja(x, y, ancho, alto, ocupados, radio);
    ocupados.push(caja);
    const izquierda = caja.x1 - x; // posición relativa al punto
    const arriba = caja.y1 - y;

    // 3) Línea que une la burbuja con su punto (solo si quedó lejos)
    const cercaX = Math.min(Math.max(x, caja.x1), caja.x2) - x;
    const cercaY = Math.min(Math.max(y, caja.y1), caja.y2) - y;
    if (Math.hypot(cercaX, cercaY) > radio * 1.4) {
      pin.insertBefore(crearSVG("line", {
        x1: 0, y1: 0, x2: cercaX, y2: cercaY, class: "guia", "stroke-width": 1.5 / escala,
      }), texto);
    }

    // 4) Burbuja rectangular detrás del texto
    pin.insertBefore(crearSVG("rect", {
      x: izquierda, y: arriba, width: ancho, height: alto,
      rx: 3 / escala, class: "caja", "stroke-width": 1.5 / escala,
    }), texto);
    texto.setAttribute("x", izquierda + relleno - medida.x);
    texto.setAttribute("y", arriba + relleno - medida.y);

    // 5) El punto sobre el mapa, con un aro que pulsa cuando está elegido
    crearSVG("circle", { r: radio, class: "ring", "stroke-width": 2 / escala }, pin);
    crearSVG("circle", { r: radio, class: "dot", "stroke-width": 2 / escala }, pin);

    pin.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350, delay: i * 120, fill: "backwards" });
    pin.onclick = () => mostrarSitio(codigo, i);
    pin.onkeydown = (e) => { if (e.key === "Enter") mostrarSitio(codigo, i); };
    return pin;
  });
  mostrarSitio(codigo, 0, false);
}

function pasarSitio(salto) {
  const total = DEPARTAMENTOS[departamentoAbierto].sitios.length;
  mostrarSitio(departamentoAbierto, (sitioActivo + salto + total) % total);
}

function acercarCamaraA(sitio) {
  const [x, y] = coordenadasAXY(sitio.lat, sitio.lon);
  const { escala, tx, ty } = transformacion;
  const ancho = PROYECCION.ancho / ZOOM_SITIO;
  const alto = PROYECCION.alto / ZOOM_SITIO;
  const centroX = tx + escala * x;
  const centroY = ty + escala * y;
  moverVista([centroX - ancho / 2, centroY - alto / 2, ancho, alto]);
}

async function mostrarSitio(codigo, posicion, acercar = true) {
  const depto = DEPARTAMENTOS[codigo];
  const sitio = depto.sitios[posicion];
  const total = depto.sitios.length;
  sitioActivo = posicion;

  marcadores.forEach((pin, i) => pin.classList.toggle("on", i === posicion));
  capaElevada.appendChild(marcadores[posicion]); // la burbuja elegida queda al frente
  if (acercar) acercarCamaraA(sitio);

  // Imagen de reemplazo si no se encuentra ninguna foto
  window.IMAGEN_VACIA = `
    <div class="ph" style="background:linear-gradient(135deg, ${depto.color}, #13262d)">
      ${escaparHTML(sitio.nombre)}<small>Imagen no disponible</small>
    </div>`;

  const botonesSitios = depto.sitios.map((s, i) =>
    `<button class="${i === posicion ? "on" : ""}" data-n="${i}">${s.nombre}</button>`).join("");
  const navegacion = total > 1 ? `
    <div class="nav">
      <button id="pv" aria-label="Sitio anterior">${ICONO_ANTERIOR}</button>
      <span>${posicion + 1} de ${total}</span>
      <button id="nx" aria-label="Sitio siguiente">${ICONO_SIGUIENTE}</button>
    </div>` : "";

  panel.innerHTML = `
    <h2>${depto.nombre}</h2>
    <div class="sites">${botonesSitios}</div>
    <div class="card" style="--bar:${depto.color}">
      ${navegacion}
      <h3 style="margin:0 0 8px; font:700 19px Bitter, serif">${escaparHTML(sitio.nombre)}</h3>
      ${sitio.dato ? `<p>${escaparHTML(sitio.dato)}</p>` : ""}
      <div id="w" class="mute">Consultando Wikipedia…</div>
      <p class="mute">Coordenadas aproximadas: ${sitio.lat.toFixed(4)}, ${sitio.lon.toFixed(4)}</p>
    </div>`;

  if (total > 1) {
    $("pv").onclick = () => pasarSitio(-1);
    $("nx").onclick = () => pasarSitio(1);
  }
  panel.querySelectorAll(".sites button").forEach((boton) => {
    const n = Number(boton.dataset.n);
    boton.onclick = () => mostrarSitio(codigo, n);
    boton.onmouseenter = () => marcadores[n].classList.add("on");
  });

  // Se carga Wikipedia; si el usuario cambió de sitio mientras tanto, se descarta
  const info = await obtenerInfoWikipedia(sitio);
  if (departamentoAbierto !== codigo || sitioActivo !== posicion || !$("w")) return;
  $("w").outerHTML = htmlInfoWikipedia(sitio, info);
}

function htmlInfoWikipedia(sitio, info) {
  let aviso = "";
  if (info.porBusqueda) aviso = "Artículo hallado por búsqueda: verifica que corresponda al sitio. ";
  else if (info.deCommons) aviso = "Imagen de Wikimedia Commons: verifica que corresponda al sitio. ";

  const imagen = info.imagen
    ? `<img src="${info.imagen}" alt="${escaparHTML(sitio.nombre)}" onerror="this.outerHTML = window.IMAGEN_VACIA">`
    : window.IMAGEN_VACIA;
  const texto = info.texto
    ? `<p>${escaparHTML(info.texto)}</p>`
    : `<p class="mute">No se pudo cargar la reseña de Wikipedia.</p>`;
  const fuente = info.url
    ? `<p class="mute">${aviso}Fuente: <a href="${info.url}" target="_blank" rel="noopener">Wikipedia, «${escaparHTML(info.titulo)}»</a></p>`
    : "";
  return imagen + texto + fuente;
}

/* =====================================================================
   WIKIPEDIA (reseña e imagen de cada sitio)
   ===================================================================== */

const pedirJSON = (url) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject()));

// 1) Resumen de un artículo (idioma "es" o "en")
function resumenWikipedia(idioma, titulo) {
  const url = `https://${idioma}.wikipedia.org/api/rest_v1/page/summary/` +
              encodeURIComponent(titulo.replace(/ /g, "_"));
  return pedirJSON(url)
    .then((j) => j.type === "standard" ? {
      imagen: j.thumbnail && j.thumbnail.source,
      texto: j.extract,
      url: j.content_urls.desktop.page,
      titulo: j.title,
    } : null)
    .catch(() => null);
}

// 2) Si el título falla, se busca el artículo por nombre
function buscarArticulo(nombre) {
  const url = "https://es.wikipedia.org/w/api.php?action=query&generator=search" +
    `&gsrsearch=${encodeURIComponent(nombre + " Nicaragua")}&gsrlimit=1` +
    "&prop=pageimages|extracts|info&inprop=url&piprop=thumbnail&pithumbsize=640" +
    "&exintro=1&explaintext=1&exsentences=4&format=json&origin=*";
  return pedirJSON(url).then((j) => {
    const pagina = Object.values(j.query.pages)[0];
    return {
      imagen: pagina.thumbnail && pagina.thumbnail.source,
      texto: pagina.extract, url: pagina.fullurl, titulo: pagina.title, porBusqueda: true,
    };
  }).catch(() => null);
}

// 3) Último recurso para la imagen: buscar en Wikimedia Commons
function buscarImagenCommons(nombre) {
  const url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
    `&gsrnamespace=6&gsrsearch=${encodeURIComponent(nombre + " Nicaragua")}&gsrlimit=6` +
    "&prop=imageinfo&iiprop=url|mime&iiurlwidth=640&format=json&origin=*";
  return pedirJSON(url).then((j) => {
    const paginas = Object.values(j.query.pages).sort((a, b) => a.index - b.index);
    const foto = paginas.find((p) => p.imageinfo && /jpeg|png/.test(p.imageinfo[0].mime));
    return foto && foto.imageinfo[0].thumburl;
  }).catch(() => null);
}

async function obtenerInfoWikipedia(sitio) {
  if (cacheWikipedia[sitio.wikipedia]) return cacheWikipedia[sitio.wikipedia];

  let info = (await resumenWikipedia("es", sitio.wikipedia))
          || (await buscarArticulo(sitio.nombre))
          || {};

  if (!info.imagen) {
    const ingles = await resumenWikipedia("en", sitio.wikipedia);
    if (ingles && ingles.imagen) {
      info.imagen = ingles.imagen;
      if (!info.texto) Object.assign(info, ingles);
    }
  }
  if (!info.imagen) {
    info.imagen = await buscarImagenCommons(sitio.nombre);
    if (info.imagen) info.deCommons = true;
  }
  cacheWikipedia[sitio.wikipedia] = info;
  return info;
}

/* =====================================================================
   INICIO
   ===================================================================== */

// Franja bajo el título con el color de cada departamento
function pintarFranja() {
  const colores = Object.values(DEPARTAMENTOS).map((d) => d.color);
  const paso = 100 / colores.length;
  $("franja").style.background = "linear-gradient(to right, " +
    colores.map((c, i) => `${c} ${i * paso}% ${(i + 1) * paso}%`).join(", ") + ")";
}

botonVolverFlotante.innerHTML = ICONO_ATRAS + "<span>Volver al mapa</span>";
botonVolverFlotante.onclick = volverAlMapa;

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") volverAlMapa();
  const variosSitios = departamentoAbierto && !animando &&
                       DEPARTAMENTOS[departamentoAbierto].sitios.length > 1;
  if (variosSitios && e.key === "ArrowRight") pasarSitio(1);
  if (variosSitios && e.key === "ArrowLeft") pasarSitio(-1);
});

pintarFranja();
fijarVista(VISTA_COMPLETA);
dibujarDepartamentos();
activarInteraccion();
mostrarInicio();
