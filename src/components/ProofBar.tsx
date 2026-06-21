"use client";

import { motion } from "framer-motion";
import PulseLine from "@/components/PulseLine";
import RevText from "@/components/RevText";
import { proof } from "@/lib/content";

/** Credibility numbers, immediately after the hero. Earns trust before the ask. */
export default function ProofBar() {
  return (
    <section className="border-b border-line bg-carbon-2">
      {/* signature motif bridges hero -> proof */}
      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        <PulseLine height={48} />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
        {proof.stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="px-5 py-8 text-center sm:px-8 sm:py-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="font-display text-4xl text-accent sm:text-5xl">
              <RevText text={s.value} />
            </div>
            <div className="mt-2 text-xs leading-snug text-muted sm:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
