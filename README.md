# SmartCol S.A.S. – Sitio web corporativo

Sitio web corporativo con **catálogo de productos y carrito de cotización** para SmartCol S.A.S. Incluye filtros por categoría, formulario de contacto y de PQR, preguntas frecuentes, políticas, aliados comerciales, botón de WhatsApp y modo claro/oscuro.

## Stack

React 18 · TypeScript · Vite · NextUI · Tailwind CSS · Framer Motion · React Router · Vercel

## Estructura

| Carpeta | Contenido |
| --- | --- |
| `src/components` | Secciones y componentes de UI (catálogo, carrito, formularios, navbar…) |
| `src/context` | Estado global del carrito y de los filtros (Context API) |
| `src/controllers` | Cliente HTTP hacia la API (`VITE_API_BASE_URL`) |
| `src/interfaces` | Tipos de TypeScript |
| `src/config` | Configuración del sitio |

## Cómo correrlo

```bash
npm ci
npm run dev
```

Build de producción:

```bash
npm run build
```

La URL de la API se define en `.env.development` / `.env.production` con `VITE_API_BASE_URL`.

## Licencia

Ver [LICENSE](LICENSE).
