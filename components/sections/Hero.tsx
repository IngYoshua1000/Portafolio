"use client";

// VISTA · Sección principal (hero) con presentación y skills.
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { perfil, skills } from "@/models/portfolio";

export function Hero() {
  return (
    <Section id="inicio" className="pt-28 pb-20 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-sm font-semibold uppercase tracking-widest text-brand"
      >
        {perfil.titulo}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
      >
        Hola, soy{" "}
        <span className="bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent">
          {perfil.nombre}
        </span>
        .
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-4 text-sm text-white/50"
      >
        {perfil.ubicacion}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-6 max-w-xl text-lg text-white/70"
      >
        {perfil.descripcion}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-9 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#servicios"
          className="rounded-xl bg-gradient-to-r from-brand to-brand2 px-7 py-3 font-semibold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5"
        >
          Ver mis servicios
        </a>
        <a
          href="#contacto"
          className="rounded-xl border border-white/15 px-7 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-brand"
        >
          Contáctame
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-14 flex flex-wrap justify-center gap-2.5"
      >
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/60"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}
