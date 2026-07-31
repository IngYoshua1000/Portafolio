// VISTA · Pie de página.
import { perfil } from "@/models/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
      © {new Date().getFullYear()} {perfil.nombre} · Hecho con Next.js y ❤️
    </footer>
  );
}
