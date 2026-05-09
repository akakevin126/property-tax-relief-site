"use client";

import { motion } from "framer-motion";
import { Building2, Home, BarChart2, LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: Building2,
    title: "Property Tax Protest",
    description:
      "We challenge your Cameron County Appraisal District assessed value with market data and comparable sales — reducing your tax bill year after year.",
  },
  {
    icon: Home,
    title: "Homestead Exemption",
    description:
      "Make sure you're receiving every exemption you qualify for: homestead, over-65, disability, and veteran exemptions through the Cameron County Appraisal District.",
  },
  {
    icon: BarChart2,
    title: "Commercial Appeals",
    description:
      "Reduce the tax burden on your Cameron County commercial or investment property with a targeted appeal strategy.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center text-navy font-bold"
        >
          Our Services
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border-t-[3px] border-gold hover:shadow-md transition-shadow"
            >
              <c.icon size={36} className="text-gold" />
              <h3 className="mt-5 font-serif text-2xl text-navy font-bold">
                {c.title}
              </h3>
              <p className="mt-3 text-navy/70 leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
