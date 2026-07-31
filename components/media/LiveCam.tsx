"use client";

// VISTA · Reproductor de video estilo "cámara en vivo" para la sección de visión.
import { useEffect, useRef } from "react";

interface LiveCamProps {
  src: string;
  modelo: string;
}

export function LiveCam({ src, modelo }: LiveCamProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl bg-[#232532] shadow-[0_0_0_1px_#9397ab,0_16px_40px_rgba(0,0,0,0.65)]">
      <div className="flex items-center justify-between bg-[#292b31] px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#cfd3e5]">
            En vivo · Cam3
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#75798c]">{modelo}</span>
      </div>
      <div className="relative aspect-video bg-black">
        <video
          ref={ref}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-[#5d5294] bg-[#161826]/80 px-3 py-2 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
          <span className="text-xs font-medium text-[#e7e5fe]">
            Detección en tiempo real
          </span>
        </div>
      </div>
    </div>
  );
}
