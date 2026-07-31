// ============================================================
//  MODELO · Datos del portafolio
//  (Edita aquí tu información — es la única fuente de verdad.)
// ============================================================

import type {
  Perfil,
  Servicio,
  SeccionVision,
  SeccionAutomatizacion,
  Dashboard,
  Proyecto,
} from "./types";

export const perfil: Perfil = {
  nombre: "Yoshua Figueroa",
  titulo: "Ingeniero de Sistemas",
  tagline: "Soporte TIC · Analítica de Datos · Automatización e IA",
  descripcion:
    "Ingeniero de Sistemas con cerca de 5 años de experiencia integrando soporte TIC e infraestructura, analítica de datos con Power BI, automatización con IA y visión por computación. Llevo una idea desde el diseño hasta la operación.",
  ubicacion: "Yopal, Casanare · Colombia",
  email: "yoshualwiyifigueroacaballero@gmail.com",
  github: "https://github.com/IngYoshua1000",
  linkedin: "https://www.linkedin.com/in/ing-yoshua-figueroa",
  cv: "/cv.pdf",
};

export const servicios: Servicio[] = [
  {
    icon: "🛠️",
    titulo: "Soporte TIC e infraestructura",
    texto:
      "Mesa de ayuda, mantenimiento de equipos, respaldos e inventario de activos TI para operaciones críticas.",
  },
  {
    icon: "📊",
    titulo: "Analítica de datos & Power BI",
    texto:
      "Dashboards con ETL en Power Query para facturación, operaciones, producción e indicadores HSEQ.",
  },
  {
    icon: "📋",
    titulo: "Excel avanzado & estandarización",
    texto:
      "Matrices de seguimiento, estandarización de procesos y plantillas automatizadas con fórmulas para ordenar la operación.",
  },
  {
    icon: "🤖",
    titulo: "Automatización con IA · n8n",
    texto:
      "Flujos, chatbots y agentes en producción con n8n e IA para reportes, validación de correos e informes.",
  },
  {
    icon: "👁️",
    titulo: "Visión por computación · IA",
    texto:
      "Modelos a medida para detectar, identificar y segmentar objetos y personas en video en tiempo real.",
  },
  {
    icon: "☁️",
    titulo: "Administración de plataformas",
    texto:
      "Microsoft 365, Azure, SharePoint, correo corporativo (cPanel/HostGator) y gestión de dominios y accesos.",
  },
  {
    icon: "🌐",
    titulo: "Redes y conectividad",
    texto:
      "Routers, switches, redes mesh, wifi y antenas satelitales Starlink para operación en campo.",
  },
];

export const vision: SeccionVision = {
  badge: "Visión por computación · IA",
  titulo: "Visión por computación: detección y segmentación de objetos",
  descripcion:
    "Desarrollo modelos de visión por computación a medida para cada caso: toma del dataset, etiquetado, entrenamiento, generación del modelo y mejora continua — para detectar, identificar y segmentar objetos y personas en video en tiempo real, desde equipos de protección hasta placas, vehículos, mascotas y mucho más.",
  video: "/vision/epp-detector.mp4",
  modelo: "best_eppv4_768.onnx",
};

export const automatizacion: SeccionAutomatizacion = {
  badge: "Automatización · IA",
  titulo: "Flujos inteligentes que trabajan por ti",
  descripcion:
    "Diseño flujos y agentes en n8n conectados a modelos de IA —en la nube o locales, a través de cualquier API—: un chatbot en producción que interpreta los dashboards por área, además de agentes que validan correos, generan reportes diarios y revisan informes automáticamente.",
  bullets: [
    "Chatbot que interpreta tus dashboards por área",
    "Agentes para validación de correos y reportes diarios",
    "Integración con tus herramientas actuales vía API",
  ],
  imagen: "/n8n/flujo.jpeg",
};

export const dashboards: Dashboard[] = [
  { titulo: "Reporte de Condiciones · HSEQ", texto: "Actos y condiciones inseguras, riesgos por categoría.", img: "/dashboards/hseq_1.png" },
  { titulo: "Seguimiento de Nómina y Turnos", texto: "Matriz de turnos y novedades del personal en campo.", img: "/dashboards/Contrato_1.png" },
  { titulo: "Novedades de Nómina", texto: "Consolidado de novedades por corte de nómina.", img: "/dashboards/novedades_1.png" },
  { titulo: "Informe Individual", texto: "Reporte de novedades y turnos por persona.", img: "/dashboards/novedades_2.png" },
  { titulo: "Producción · Inicio y Liberación", texto: "Inicio de operación y liberación por cliente y año.", img: "/dashboards/produccion_1.png" },
  { titulo: "Análisis de Producción", texto: "Servicios, bases y centros de costo.", img: "/dashboards/produccion_2.png" },
  { titulo: "Facturación de Proveedores", texto: "Emisión, pagos y proyección de pago.", img: "/dashboards/Facturacion_1.png" },
  { titulo: "Cartera y Actas", texto: "Seguimiento de actas, herramientas y estados.", img: "/dashboards/cartera_1.png" },
  { titulo: "Charlas Técnicas", texto: "Charlas por servicio, RIG, pozo y ODS.", img: "/dashboards/CharlasTecnicas.png" },
  { titulo: "Service Tickets", texto: "Estado de service tickets por etapa y regional.", img: "/dashboards/Estatus_1.png" },
  { titulo: "Talento Humano", texto: "Empleados por municipio, contratos e indicadores.", img: "/dashboards/TalentoH_1.png" },
];

export const proyectos: Proyecto[] = [
  {
    titulo: "Detección de EPP en tiempo real",
    texto:
      "Sistema de visión por computación que detecta elementos de protección personal y genera alertas ante incumplimientos.",
    tags: ["Visión por computación", "Python", "Roboflow"],
  },
  {
    titulo: "Chatbot que interpreta dashboards",
    texto:
      "Chatbot en producción (n8n + IA) que interpreta los dashboards por área de la empresa.",
    tags: ["n8n", "IA", "Power BI"],
  },
  {
    titulo: "Agentes de IA para procesos",
    texto:
      "Agentes parametrizados para validación de correos, reportes diarios y revisión de informes.",
    tags: ["n8n", "IA", "Automatización"],
  },
  {
    titulo: "Estandarización de matrices de seguimiento",
    texto:
      "Diseño y estandarización desde cero de matrices de nómina, operaciones, contratos y HSEQ que unifican y ordenan la información de la empresa.",
    tags: ["Excel", "Estandarización", "ETL"],
  },
];

export const skills: string[] = [
  "Power BI",
  "Power Query (ETL)",
  "Excel avanzado",
  "Estandarización de procesos",
  "n8n",
  "Integración de APIs",
  "Visión por computación",
  "Python",
  "Microsoft 365",
  "Azure",
  "SharePoint",
  "Redes / Starlink",
  "cPanel",
];
