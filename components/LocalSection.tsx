"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LocalSection() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold font-bold"
        >
          Built for Cameron County
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-[560px] mx-auto text-lg text-white/85 leading-relaxed"
        >
          We specialize exclusively in Cameron County properties. We know the
          Cameron County Appraisal District, the protest deadlines, the hearing
          process, and exactly how to win your case.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors"
          >
            Talk to a Local Expert <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
