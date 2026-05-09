import { Suspense } from "react";
import LeadForm from "@/components/LeadForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | Property Tax Relief Group",
  description:
    "Get a free property tax savings estimate for your Cameron County property.",
};

export default function ContactPage() {
  return (
    <main className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl text-navy font-bold">
            Get In Touch
          </h1>
          <p className="mt-3 text-navy/70 max-w-xl mx-auto">
            Tell us about your Cameron County property and our team will
            follow up with a free savings estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          <Suspense fallback={null}>
            <LeadForm />
          </Suspense>

          <aside className="bg-white rounded-2xl p-8 border border-cream shadow-sm space-y-6">
            <h3 className="font-serif text-2xl text-navy font-bold">
              Contact Info
            </h3>

            <div className="flex items-start gap-3">
              <Phone size={20} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-navy/60">Phone</div>
                <a
                  href="tel:[YOUR PHONE]"
                  className="text-navy font-medium hover:text-gold"
                >
                  [YOUR PHONE]
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={20} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-navy/60">Email</div>
                <a
                  href="mailto:[YOUR EMAIL]"
                  className="text-navy font-medium hover:text-gold break-all"
                >
                  [YOUR EMAIL]
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-navy/60">Location</div>
                <div className="text-navy font-medium">
                  Brownsville, Texas
                  <br />
                  Cameron County
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cream text-sm text-navy/70">
              We respond to every inquiry within one business day.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
