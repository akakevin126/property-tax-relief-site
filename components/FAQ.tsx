"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string[] };

const items: Item[] = [
  {
    q: "If I protest my property taxes, does that mean my house is worth less?",
    a: [
      "No. The market value of a home is set by what buyers actually pay for comparable homes in your neighborhood — not by what the Cameron County Appraisal District says.",
      "If anything, a lower tax bill makes your home more attractive when it's time to sell. Lower carrying costs mean a buyer keeps more money in their pocket every month.",
      "Property Tax Relief Group is available year-round to answer questions about your appraisal. When you call us, you reach a real Cameron County specialist — not a phone tree.",
    ],
  },
  {
    q: "Appealing my property taxes seems overwhelming. Where do I start?",
    a: [
      "Every Texas appraisal district has its own process — the Cameron County Appraisal District is no exception.",
      "Property Tax Relief Group takes the guesswork out. The process requires only a few forms, and we prepare them for you. All you have to do is review, sign, and let our team handle the rest.",
    ],
  },
  {
    q: "Is it risky to appeal? Can my assessed value be raised if I protest?",
    a: [
      "No. At both informal and formal hearings, the Cameron County Appraisal District is not permitted to raise your assessed value as a result of your protest. There is no downside risk to filing.",
      "The worst case is your assessed value stays the same. The best case is a meaningful reduction in what you owe.",
    ],
  },
  {
    q: "If my property is already assessed below market value, can I still get a reduction?",
    a: [
      "Yes — using the unequal appraisal method.",
      "Texas law lets you compare the assessed value of your property to the assessed value of similar properties. If similar properties are also below market but yours is higher than theirs, you may still qualify for a reduction.",
      "We use this method routinely in Cameron County to lower our clients' tax bills.",
    ],
  },
  {
    q: "When is the deadline to protest my property value?",
    a: [
      "In Texas, your hearing request must be submitted by May 15 of the tax year. Don't wait — earlier filings often get earlier hearings and stronger outcomes.",
    ],
  },
  {
    q: "When do the new tax rates come out?",
    a: [
      "Tax rates are typically set in November of the current tax year by the local taxing units.",
      "We can't control the rate, but we can reduce the assessed value those rates are applied to — which is what actually lowers your final bill.",
    ],
  },
  {
    q: "Will the appraisal district inspect my house if I protest?",
    a: [
      "No. Our goal is to make this painless. We have never had a Cameron County appraiser walk through a client's home as part of a protest.",
      "If your property has condition issues — an outdated kitchen, a roof that needs replacing, foundation concerns — we'll usually ask for photos or a contractor estimate so we can include them in your case. No one needs to come on site.",
      "Most of the protests we win are on normal, well-kept homes where the case is built on comparable sales, not photos.",
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-navy/70">
            Everything you want to know about protesting your Cameron County
            property taxes — answered straight.
          </p>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="bg-white rounded-xl border border-cream shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 hover:bg-cream/40 transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-navy font-semibold">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 space-y-3 text-navy/75 leading-relaxed">
                        {item.a.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-navy/60">
          Still have questions?{" "}
          <a href="/contact" className="text-gold hover:underline font-medium">
            Talk to a Cameron County specialist
          </a>
          .
        </div>
      </div>
    </section>
  );
}
