"use client";

// VISTA · Sección de visión por computación (video en vivo).
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/components/ui/animations";
import { LiveCam } from "@/components/media/LiveCam";
import { vision } from "@/models/portfolio";

export function Vision() {
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
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LiveCam src={vision.video} modelo={vision.modelo} />
        </motion.div>
      </div>
    </Section>
  );
}
