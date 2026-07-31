"use client";

// VISTA · Sección de contacto con enlaces (correo, LinkedIn, GitHub, CV).
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/components/ui/animations";
import { perfil } from "@/models/portfolio";

export function Contact() {
  return (
    <Section id="contacto" className="text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Trabajemos juntos
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          ¿Tienes un proyecto o quieres saber más? Escríbeme.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${perfil.email}`}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand2 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            <FiMail /> Enviar correo
          </a>
          <a
            href={perfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-brand"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href={perfil.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-brand"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={perfil.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-brand"
          >
            <FiDownload /> Descargar CV
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
