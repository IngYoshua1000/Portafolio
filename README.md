# Portafolio · Yoshua Figueroa

Portafolio personal — Ingeniero de Sistemas. Servicios, dashboards, visión por
computación y automatización con IA.

Construido con **Next.js 16 (App Router)**, **React 19**, **TypeScript**,
**Tailwind CSS v4** y **Framer Motion**.

## Arquitectura (MVC)

El código separa responsabilidades siguiendo un patrón Modelo–Vista–Controlador:

```
models/            # MODELO · datos y esquema (fuente única de verdad)
  types.ts         #   interfaces de cada entidad
  portfolio.ts     #   datos del portafolio (perfil, servicios, dashboards…)

components/         # VISTA · componentes de presentación (sin lógica de estado)
  layout/          #   Navbar, Footer, ScrollProgress
  sections/        #   Hero, Services, Vision, Automation, Dashboards, Projects, Contact
  media/           #   LiveCam, Lightbox
  ui/              #   Section, SectionHeader, animaciones compartidas

controllers/        # CONTROLADOR · estado y lógica
  LightboxProvider.tsx  #   contexto + hook useLightbox()

app/                # Enrutado Next.js
  layout.tsx       #   layout raíz (fuentes, metadata)
  page.tsx         #   compone las vistas dentro del controlador
  globals.css      #   estilos base y tema
```

**Para actualizar el contenido** solo se edita `models/portfolio.ts` — las vistas
lo consumen automáticamente.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Despliegue

Cada push a `main` publica automáticamente en Vercel.
