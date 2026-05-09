"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [type, setType] = useState<"Residential" | "Commercial">("Residential");
  const [address, setAddress] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (address) q.set("address", address);
    q.set("type", type);
    router.push(`/contact?${q.toString()}`);
  };

  return (
    <section className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex bg-white rounded-full p-1 shadow-sm border border-cream mb-8"
        >
          {(["Residential", "Commercial"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                type === t
                  ? "bg-navy text-white"
                  : "text-navy hover:bg-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-tight text-navy font-bold"
        >
          Stop Overpaying on Property Taxes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-navy/80"
        >
          We protest. We win. You keep the savings.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-stretch bg-white border-2 border-gold rounded-full p-1.5 shadow-md gap-1.5">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your Cameron County property address..."
              className="flex-1 bg-transparent px-5 py-3 text-navy placeholder:text-navy/50 outline-none rounded-full"
            />
            <button
              type="submit"
              className="bg-navy text-white px-6 py-3 rounded-full font-medium hover:bg-navy-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Free Estimate <ArrowRight size={16} />
            </button>
          </div>
          <p className="mt-4 text-sm text-navy/60">
            See your savings estimate in seconds — no obligation, no upfront cost.
          </p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: CheckCircle2, text: "Only pay if you save" },
            { icon: ShieldCheck, text: "No upfront costs" },
            { icon: MapPin, text: "Cameron County specialists" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-cream text-sm text-navy shadow-sm"
            >
              <Icon size={16} className="text-gold" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
