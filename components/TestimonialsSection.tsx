"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They saved me over $800 on my tax bill last year. The whole process was hands-off — they handled everything.",
    name: "Carlos R.",
    role: "Homeowner, Brownsville TX",
  },
  {
    quote:
      "I had no idea I was overpaying until Property Tax Relief Group reviewed my appraisal. Highly recommend.",
    name: "Sandra M.",
    role: "Rental Property Owner, Harlingen TX",
  },
  {
    quote:
      "They filed my homestead exemption and got my appraisal reduced in the same year. Couldn't be easier.",
    name: "James T.",
    role: "Homeowner, San Benito TX",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center text-navy font-bold"
        >
          What Our Clients Say
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream/60 border border-cream rounded-xl p-7"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="italic text-navy/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-cream">
                <div className="font-semibold text-navy">{t.name}</div>
                <div className="text-sm text-navy/60">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
