import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | Property Tax Relief Group",
  description:
    "Property Tax Relief Group is a Cameron County property tax consulting firm based in Brownsville, Texas.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Who We Are
          </h1>
          <p className="mt-4 text-gold text-lg sm:text-xl">
            Cameron County Born and Based
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="prose prose-lg max-w-none text-navy/80 leading-relaxed">
            <p>
              We are a Cameron County property tax consulting firm based in
              Brownsville, Texas. Our team has years of experience filing
              protests with the Cameron County Appraisal District. We work
              exclusively in Cameron County so we can give every client the
              focused local expertise they deserve.
            </p>
            <p className="mt-6">
              When you work with Property Tax Relief Group, you&apos;re not
              hiring a national firm with a call center. You&apos;re hiring
              your neighbors — people who know the Cameron County Appraisal
              District process, the local market, and what it takes to win.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full font-semibold hover:bg-navy-dark transition-colors"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
