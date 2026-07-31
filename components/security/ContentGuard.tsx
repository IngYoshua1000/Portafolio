"use client";

// SEGURIDAD (disuasivo) · Dificulta copiar texto, arrastrar/guardar imágenes,
// abrir el menú contextual y usar atajos de devtools. No es infalible —el
// frontend siempre es visible para el navegador— pero frena el copiado casual.
import { useEffect } from "react";

export function ContentGuard() {
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault();

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const blocked =
        e.key === "F12" ||
        (ctrl && ["u", "s", "c", "x", "a", "p"].includes(key)) ||
        (ctrl && e.shiftKey && ["i", "j", "c"].includes(key));
      if (blocked) e.preventDefault();
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("dragstart", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("dragstart", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
