"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "91%", label: "Success Rate" },
  { value: "$620", label: "Avg Annual Savings" },
  { value: "4.9 ★", label: "Client Rating" },
  { value: "500+", label: "Properties Protested" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy text-white" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-serif text-gold text-3xl sm:text-4xl md:text-[36px] font-bold">
                {s.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-white/75">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
