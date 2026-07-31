"use client";

// VISTA · Catálogo de servicios.
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, stagger } from "@/components/ui/animations";
import { servicios } from "@/models/portfolio";

export function Services() {
  return (
    <Section id="servicios">
      <SectionHeader
        title="Catálogo de servicios"
        lead="Esto es lo que puedo hacer por ti."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {servicios.map((s) => (
          <motion.article
            key={s.titulo}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition hover:border-brand/60"
          >
            <div className="mb-4 text-3xl">{s.icon}</div>
            <h3 className="mb-2 text-lg font-semibold">{s.titulo}</h3>
            <p className="text-sm text-white/60">{s.texto}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
