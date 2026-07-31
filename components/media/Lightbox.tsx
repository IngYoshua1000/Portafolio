"use client";

// VISTA · Visor de imagen ampliada (modal). Controlado por LightboxProvider.
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export function Lightbox({ src, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10"
          >
            <FiX size={22} />
          </button>
          <motion.img
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.92 }}
            src={src}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
