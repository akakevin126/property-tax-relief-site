import Link from "next/link";
import CountdownBanner from "@/components/CountdownBanner";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import LocalSection from "@/components/LocalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <CountdownBanner />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ServicesGrid />
      <LocalSection />
      <TestimonialsSection />

      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold font-bold">
            Ready to Stop Overpaying?
          </h2>
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
