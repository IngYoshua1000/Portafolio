"use client";

// VISTA · Proyectos destacados.
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, stagger } from "@/components/ui/animations";
import { proyectos } from "@/models/portfolio";

export function Projects() {
  return (
    <Section id="proyectos">
      <SectionHeader
        title="Proyectos"
        lead="Trabajos y desarrollos que he realizado."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {proyectos.map((p) => (
          <motion.article
            key={p.titulo}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition hover:border-brand/60"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold">{p.titulo}</h3>
              <FiArrowUpRight className="text-white/30 transition group-hover:text-brand" />
            </div>
            <p className="mb-4 text-sm text-white/60">{p.texto}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
