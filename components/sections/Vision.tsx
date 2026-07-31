"use client";

// VISTA · Sección de visión por computación (video en vivo + fotos).
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/components/ui/animations";
import { LiveCam } from "@/components/media/LiveCam";
import { useLightbox } from "@/controllers/LightboxProvider";
import { vision } from "@/models/portfolio";

export function Vision() {
  const openLightbox = useLightbox();

  return (
    <Section id="vision" className="bg-[#0e1426]">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-md bg-[#423a6a] px-2.5 py-1 text-[11px] tracking-wide text-[#f5f4ff]">
            {vision.badge}
          </span>
          <h2 className="mt-4 max-w-[34ch] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {vision.titulo}
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/70">
            {vision.descripcion}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {vision.bullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#2b2741]">
                  <span className="h-2.5 w-2.5 rounded-sm border-[1.5px] border-[#9184d9]" />
                </span>
                <span className="text-sm text-white/85">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LiveCam src={vision.video} modelo={vision.modelo} />
          <div className="mt-4 grid grid-cols-2 gap-4">
            {vision.fotos.map((f) => (
              <button
                key={f}
                onClick={() => openLightbox(f)}
                className="group overflow-hidden rounded-xl border border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f}
                  alt="Detección"
                  className="h-28 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-32"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
