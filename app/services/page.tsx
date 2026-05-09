import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Property Tax Relief Group",
  description:
    "Property tax protest, homestead exemption, and commercial appeals services for Cameron County, Texas.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Our Services
          </h1>
          <p className="mt-4 text-gold text-lg sm:text-xl">
            Cameron County Property Tax Experts
          </p>
        </div>
      </section>

      <ServicesGrid />
      <HowItWorks />

      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-gold font-bold">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Tell us about your Cameron County property and we&apos;ll review
            your appraisal at no cost.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors"
            >
              Get My Free Estimate <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
