// ============================================================
//  MODELO · Definición de tipos (esquema de datos del sitio)
// ============================================================

export interface Perfil {
  nombre: string;
  titulo: string;
  tagline: string;
  descripcion: string;
  ubicacion: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
}

export interface Servicio {
  icon: string;
  titulo: string;
  texto: string;
}

export interface SeccionVision {
  badge: string;
  titulo: string;
  descripcion: string;
  bullets: string[];
  video: string;
  modelo: string;
}

export interface SeccionAutomatizacion {
  badge: string;
  titulo: string;
  descripcion: string;
  bullets: string[];
  imagen: string;
}

export interface Dashboard {
  titulo: string;
  texto: string;
  img: string;
}

export interface Proyecto {
  titulo: string;
  texto: string;
  tags: string[];
}
