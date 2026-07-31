"use client";

// VISTA · Galería de dashboards con lightbox.
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, stagger } from "@/components/ui/animations";
import { useLightbox } from "@/controllers/LightboxProvider";
import { dashboards } from "@/models/portfolio";

export function Dashboards() {
  const openLightbox = useLightbox();

  return (
    <Section id="dashboards" className="bg-[#0e1426]">
      <SectionHeader
        title="Dashboards"
        lead="Tableros en Power BI que he construido. Haz clic para ampliar."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {dashboards.map((d) => (
          <motion.button
            key={d.titulo}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            onClick={() => openLightbox(d.img)}
            className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] text-left transition hover:border-brand/60"
          >
            <div className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.img}
                alt={d.titulo}
                className="h-44 w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-1 text-base font-semibold">{d.titulo}</h3>
              <p className="text-sm text-white/60">{d.texto}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </Section>
  );
}
