"use client";

// VISTA · Sección de automatización con IA (n8n) + imagen del flujo.
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/components/ui/animations";
import { useLightbox } from "@/controllers/LightboxProvider";
import { automatizacion } from "@/models/portfolio";

export function Automation() {
  const openLightbox = useLightbox();

  return (
    <Section id="automatizacion">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.button
          onClick={() => openLightbox(automatizacion.imagen)}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group order-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:order-1"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={automatizacion.imagen}
            alt="Flujo en n8n"
            className="w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </motion.button>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex items-center rounded-md bg-brand/15 px-2.5 py-1 text-[11px] tracking-wide text-brand">
            {automatizacion.badge}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {automatizacion.titulo}
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/70">
            {automatizacion.descripcion}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {automatizacion.bullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                  ✓
                </span>
                <span className="text-sm text-white/85">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
