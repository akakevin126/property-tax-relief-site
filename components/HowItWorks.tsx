"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, FileText, DollarSign, ArrowRight, LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Home,
    title: "Submit Your Property",
    description:
      "Enter your address. We pull your assessed value and tax history directly from Cameron County Appraisal District records.",
  },
  {
    icon: FileText,
    title: "We Build Your Case",
    description:
      "Our local experts gather comparable sales data and evidence to build the strongest possible protest for your property.",
  },
  {
    icon: DollarSign,
    title: "You Save",
    description:
      "We represent you at the hearing. You only pay a percentage of what you actually save — nothing if you don't.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center text-navy font-bold"
        >
          Get Started in <span className="text-gold">3 Simple Steps</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-cream border-2 border-gold flex items-center justify-center">
                <s.icon size={32} className="text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy font-bold">
                {s.title}
              </h3>
              <p className="mt-3 text-navy/70 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full font-medium hover:bg-navy-dark transition-colors"
          >
            Start My Protest <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
