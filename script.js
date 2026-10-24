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
const elementosRelleno = {};      // código -> <path> que cierra rendijas

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

// En pantallas chicas (celular, o el mapa incrustado en Google Sites) el dibujo se
// reduce: 1100 unidades caben en ~300 px y los textos y bordes quedarían minúsculos.
// Este factor los agranda SOLO en pantallas chicas; en computadora vale 1 (no cambia nada).
function factorPantalla() {
  if (!matchMedia("(max-width: 800px)").matches) return 1;
  const pxPorUnidad = Math.min(svg.clientWidth / PROYECCION.ancho, svg.clientHeight / PROYECCION.alto);
  return pxPorUnidad > 0 ? 0.75 / pxPorUnidad : 1;
}

// Grosor del borde blanco de los departamentos (lo lee styles.css)
function actualizarBorde() {
  svg.style.setProperty("--borde", String(1.5 * factorPantalla()));
}

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

function dibujarDepartamentos() {
  for (const codigo in DEPARTAMENTOS) {
    const color = DEPARTAMENTOS[codigo].color;
    elementosDepartamento[codigo] = crearSVG("path", {
      d: FORMAS_DEPARTAMENTOS[codigo], fill: color, class: "dep",
      tabindex: 0, role: "button", "aria-label": DEPARTAMENTOS[codigo].nombre,
    }, mapa);
    if (RELLENOS[codigo]) {
      elementosRelleno[codigo] = crearSVG("path", { d: RELLENOS[codigo], fill: color, class: "relleno" }, mapa);
    }
  }
}

// Letrero que sigue al cursor
function mostrarTooltip(evento, texto) {
  const caja = escenario.getBoundingClientRect();
  tooltip.textContent = texto;
  tooltip.style.left = evento.clientX - caja.left + 14 + "px";
  tooltip.style.top = evento.clientY - caja.top + 14 + "px";
  tooltip.style.opacity = 1;
}
const ocultarTooltip = () => { tooltip.style.opacity = 0; };

// Lagos y lagunas: se dibujan ANTES que los departamentos (quedan debajo).
// Los departamentos tienen huecos donde hay agua, así que su borde blanco
// rodea cada lago sin cruzarlo.
function dibujarLagos() {
  const grupo = crearSVG("g", { id: "lakes" }, mapa);
  LAGOS.forEach((lago) => {
    lago.elemento = crearSVG("path", { d: lago.forma, class: "lake" }, grupo);
    lago.elemento.onmousemove = (e) => mostrarTooltip(e, lago.nombre);
    lago.elemento.onmouseleave = ocultarTooltip;
  });
}

// Nombres de los lagos grandes, encima de los departamentos
function rotularLagosDelMapa() {
  const grupo = crearSVG("g", { id: "lakeLabels" }, mapa);
  LAGOS.filter((lago) => lago.rotulo === "mapa").forEach((lago) => {
    const etiqueta = crearSVG("text", {
      x: lago.etiquetaX, y: lago.etiquetaY, "font-size": 13 * factorPantalla(),
      "stroke-width": 3 * factorPantalla(), class: "lk", "text-anchor": "middle",
    }, grupo);
    etiqueta.textContent = lago.nombre;
  });
}

/* ---------- Interacción con el mapa completo ---------- */

function activarInteraccion() {
  for (const codigo in DEPARTAMENTOS) {
    const elemento = elementosDepartamento[codigo];
    const cantidad = DEPARTAMENTOS[codigo].sitios.length;

    elemento.onclick = () => abrirDepartamento(codigo);
    elemento.onkeydown = (e) => { if (e.key === "Enter") abrirDepartamento(codigo); };
    elemento.onmouseleave = ocultarTooltip;
    elemento.onmousemove = (e) => {
      if (departamentoAbierto) return;
      const plural = cantidad > 1 ? "s" : "";
      mostrarTooltip(e, `${DEPARTAMENTOS[codigo].nombre} · ${cantidad} sitio${plural} histórico${plural}`);
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
  document.body.classList.add("depto-abierto"); // en celular, la barra "Volver" ocupa la parte de arriba del mapa

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

  // Copia del departamento que se despega del mapa, de abajo hacia arriba:
  // sombra simple, agua que le corresponde, tierra con borde blanco, rellenos y nombres.
  const color = DEPARTAMENTOS[codigo].color;
  crearSVG("path", {
    d: FORMAS_DEPARTAMENTOS[codigo], class: "sombra",
    transform: `translate(${5 * factorPantalla() / escala} ${10 * factorPantalla() / escala})`,
  }, capaElevada);
  LAGOS.forEach((lago) => {
    const parte = lago.partes[codigo];
    if (parte) crearSVG("path", { d: parte.forma, class: "lake pieza" }, capaElevada);
  });
  const copia = crearSVG("path", {
    d: FORMAS_DEPARTAMENTOS[codigo], fill: color, class: "dep",
    style: `stroke-width:${2.5 * factorPantalla() / escala}`,
  }, capaElevada);
  copia.onclick = () => moverVista(VISTA_COMPLETA); // clic: ver el departamento completo
  if (RELLENOS[codigo]) crearSVG("path", { d: RELLENOS[codigo], fill: color, class: "relleno" }, capaElevada);
  rotularLagosDelDepartamento(codigo, escala);

  original.classList.add("ghost"); // queda atenuado en su lugar original
  if (elementosRelleno[codigo]) elementosRelleno[codigo].classList.add("ghost");
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

// Nombres de los lagos dentro del departamento ampliado
function rotularLagosDelDepartamento(codigo, escala) {
  escala = escala / factorPantalla(); // agranda los textos en pantallas chicas
  LAGOS.forEach((lago) => {
    const parte = lago.partes[codigo];
    if (!parte || lago.rotulo === "no") return;
    if (lago.rotulo === "mapa" && parte.area < 40) return; // trozo muy pequeño para un nombre
    const etiqueta = crearSVG("text", {
      x: parte.x, y: parte.y, "font-size": 15 / escala,
      "stroke-width": 3 / escala, class: "lk", "text-anchor": "middle",
    }, capaElevada);
    etiqueta.textContent = lago.nombre;
  });
}

function volverAlMapa() {
  if (animando || !departamentoAbierto) return;
  animando = true;
  const codigo = departamentoAbierto;
  document.body.classList.remove("depto-abierto");

  marcadores.forEach((pin) => pin.remove());
  marcadores = [];
  botonVolverFlotante.classList.remove("show");
  moverVista(VISTA_COMPLETA, 500);

  animacionElevar.reverse(); // el departamento regresa a su lugar
  animacionElevar.onfinish = () => {
    animacionElevar.cancel();
    capaElevada.innerHTML = "";
    elementosDepartamento[codigo].classList.remove("ghost");
    if (elementosRelleno[codigo]) elementosRelleno[codigo].classList.remove("ghost");
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
function ubicarBurbuja(x, y, ancho, alto, ocupados, radio, limites) {
  const margen = radio * 0.5;
  // Primero se busca un lugar DENTRO del recuadro visible; si no hay, se acepta cualquiera
  for (const dentro of [true, false]) {
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
      if (dentro && limites &&
          (bx < limites.x1 || by < limites.y1 || bx + ancho > limites.x2 || by + alto > limites.y2)) continue;
      const caja = rectangulo(bx - margen, by - margen, bx + ancho + margen, by + alto + margen);
      if (!ocupados.some((o) => seCruzan(caja, o))) return rectangulo(bx, by, bx + ancho, by + alto);
    }
   }
  }
  return rectangulo(x + radio * 2, y - alto / 2, x + radio * 2 + ancho, y + alto / 2);
}

async function dibujarMarcadores(codigo, escala) {
  await document.fonts.ready; // para medir bien el texto con la tipografía final
  if (departamentoAbierto !== codigo) return;
  // Zona visible del recuadro, en las coordenadas del departamento ampliado
  const t = transformacion, m = 4 / t.escala;
  const limites = rectangulo((0 - t.tx) / t.escala + m, (0 - t.ty) / t.escala + m,
                             (PROYECCION.ancho - t.tx) / t.escala - m, (PROYECCION.alto - t.ty) / t.escala - m);
  escala = escala / factorPantalla(); // en pantallas chicas todo se dibuja más grande
  const movil = matchMedia("(max-width: 800px)").matches;

  // Todo se divide entre "escala" para que los textos y puntos mantengan
  // su tamaño en pantalla aunque el departamento esté agrandado.
  const sitios = DEPARTAMENTOS[codigo].sitios;
  const radio = (movil ? 12 : 8) / escala; // en celular, punto más grande para tocarlo
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
    const caja = ubicarBurbuja(x, y, ancho, alto, ocupados, radio, limites);
    if (!movil) ocupados.push(caja); // en celular solo se ve una burbuja a la vez: no hace falta reservar lugar para todas
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
    // Número dentro del punto (solo se ve en celular; ahí el nombre aparece solo en el sitio elegido)
    const numero = crearSVG("text", {
      class: "num", x: 0, y: radio * 0.4, "font-size": radio * 1.15, "text-anchor": "middle",
    }, pin);
    numero.textContent = i + 1;

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
  const zoom = matchMedia("(max-width: 800px)").matches ? 1.3 : ZOOM_SITIO; // en celular, menos acercamiento
  const ancho = PROYECCION.ancho / zoom;
  const alto = PROYECCION.alto / zoom;
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
    ${depto.info
      ? `<p>${escaparHTML(depto.info)}</p>${htmlFuentes(depto.infoFuentes || depto.infoFuente)}`
      : `<p class="mute">Información del departamento en preparación.</p>`}
    <div class="sites">${botonesSitios}</div>
    <div class="card" style="--bar:${depto.color}">
      ${navegacion}
      <h3 style="margin:0 0 8px; font:700 19px Bitter, serif">${escaparHTML(sitio.nombre)}</h3>
      <div id="txt">${sitio.dato ? `<p>${escaparHTML(sitio.dato)}</p>` : ""}</div>
      <div id="w" class="mute">Cargando imágenes…</div>
      ${htmlFuentes(sitio.fuentes || sitio.fuente)}
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

  // Se cargan las imágenes; si el usuario cambió de sitio mientras tanto, se descarta
  // Texto largo desde textos/<nombre-del-sitio>.txt (si existe, reemplaza a "dato")
  cargarTexto(sitio).then((texto) => {
    if (!texto || departamentoAbierto !== codigo || sitioActivo !== posicion || !$("txt")) return;
    $("txt").innerHTML = `<p style="white-space: pre-line">${escaparHTML(texto)}</p>`;
  });

  const propias = imagenesPropias(sitio);
  const fotos = propias.length ? propias : await buscarImagenes(sitio);
  if (departamentoAbierto !== codigo || sitioActivo !== posicion || !$("w")) return;
  $("w").outerHTML = htmlGaleria(fotos, propias.length > 0);
  panel.querySelectorAll(".miniaturas button").forEach((boton) => {
    boton.onclick = () => {
      $("foto").src = fotos[boton.dataset.i].url;
      if ($("credito")) $("credito").textContent = fotos[boton.dataset.i].credito || "";
    };
  });
}

/* ---------- Fuentes: una sola, o varias en una lista ----------
   fuente: "Texto"
   fuente: ["Texto 1", "Texto 2", { texto: "Con enlace", url: "https://..." }] */
function htmlFuentes(fuente) {
  if (!fuente || (Array.isArray(fuente) && !fuente.length)) return "";
  const lista = Array.isArray(fuente) ? fuente : [fuente];
  const item = (f) => typeof f === "string"
    ? escaparHTML(f)
    : `<a href="${f.url}" target="_blank" rel="noopener">${escaparHTML(f.texto)}</a>`;
  return `<p class="mute">${lista.length > 1 ? "Fuentes" : "Fuente"}: ${lista.map(item).join("; ")}</p>`;
}

/* ---------- Textos largos en archivos .txt ----------
   Dos formas de indicar el archivo de un sitio (en sitios.js):
     1) Escribiendo la ruta:   texto: "textos/mi-archivo.txt",
     2) Sin escribir nada: se busca con el nombre del sitio, sin tildes,
        en minúscula y con guiones:  "Catedral de León" -> textos/catedral-de-leon.txt
   Se muestra TAL CUAL: respeta tus saltos de línea y líneas en blanco. */
const cacheTextos = {};

function idDeNombre(nombre) {
  return nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

async function cargarTexto(sitio) {
  const ruta = sitio.texto || `textos/${sitio.id || idDeNombre(sitio.nombre)}.txt`;
  if (ruta in cacheTextos) return cacheTextos[ruta];
  let texto = "";
  try {
    const respuesta = await fetch(ruta);
    if (respuesta.ok) texto = (await respuesta.text()).trim();
    if (/^<!doctype|^<html/i.test(texto)) texto = ""; // algunos servidores devuelven una página en vez de error
  } catch (error) { /* sin archivo: se usa "dato" */ }
  return (cacheTextos[ruta] = texto);
}

/* ---------- Imágenes propias (campo "imagenes" en sitios.js) ----------
   imagenes: ["imagenes/foto1.jpg", { src: "imagenes/foto2.jpg", credito: "Foto: ..." }] */
function imagenesPropias(sitio) {
  return (sitio.imagenes || []).map((imagen) =>
    typeof imagen === "string" ? { url: imagen } : { url: imagen.src, credito: imagen.credito });
}

function htmlGaleria(fotos, propias = false) {
  if (!fotos.length) return window.IMAGEN_VACIA;
  const miniaturas = fotos.map((f, i) =>
    `<button data-i="${i}" aria-label="Ver imagen ${i + 1}"><img src="${f.url}" alt=""></button>`).join("");
  return `<img id="foto" src="${fotos[0].url}" alt="" onerror="this.outerHTML = window.IMAGEN_VACIA">
    <div class="miniaturas">${miniaturas}</div>
    ${propias
      ? `<p class="mute" id="credito">${escaparHTML(fotos[0].credito || "")}</p>`
      : `<p class="mute">Imágenes de Wikimedia Commons: verifica que correspondan al sitio.</p>`}`;
}

/* =====================================================================
   IMÁGENES AUTOMÁTICAS (varias por sitio, desde Wikimedia Commons)
   Solo se usan si el sitio NO tiene el campo "imagenes" en sitios.js.
   ===================================================================== */

const pedirJSON = (url) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject()));
const cacheImagenes = {};

async function buscarImagenes(sitio) {
  const termino = sitio.busqueda || sitio.nombre;
  if (cacheImagenes[termino]) return cacheImagenes[termino];
  const url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
    `&gsrnamespace=6&gsrsearch=${encodeURIComponent(termino + " Nicaragua")}&gsrlimit=12` +
    "&prop=imageinfo&iiprop=url|mime&iiurlwidth=640&format=json&origin=*";
  try {
    const j = await pedirJSON(url);
    const fotos = Object.values(j.query.pages)
      .sort((a, b) => a.index - b.index)
      .filter((p) => p.imageinfo && /jpeg|png/.test(p.imageinfo[0].mime))
      .slice(0, 5)
      .map((p) => ({ url: p.imageinfo[0].thumburl }));
    return (cacheImagenes[termino] = fotos);
  } catch (error) {
    return (cacheImagenes[termino] = []);
  }
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
actualizarBorde();
window.addEventListener("resize", actualizarBorde);
fijarVista(VISTA_COMPLETA);
dibujarLagos();            // primero el agua (queda debajo)
dibujarDepartamentos();    // después la tierra, con huecos donde hay agua
rotularLagosDelMapa();
activarInteraccion();
mostrarInicio();
