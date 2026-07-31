"use client";

// CONTROLADOR · Gestiona el estado del lightbox y lo expone vía contexto.
// Cualquier sección puede abrir una imagen con el hook useLightbox().
import { createContext, useContext, useState, type ReactNode } from "react";
import { Lightbox } from "@/components/media/Lightbox";

type OpenLightbox = (src: string) => void;

const LightboxContext = createContext<OpenLightbox>(() => {});

export function useLightbox(): OpenLightbox {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <LightboxContext.Provider value={setSrc}>
      {children}
      <Lightbox src={src} onClose={() => setSrc(null)} />
    </LightboxContext.Provider>
  );
}
