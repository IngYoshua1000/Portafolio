"use client";

// VISTA · Encabezado animado de sección (título + bajada)
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

interface SectionHeaderProps {
  title: string;
  lead: string;
}

export function SectionHeader({ title, lead }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-white/60">{lead}</p>
    </motion.div>
  );
}
