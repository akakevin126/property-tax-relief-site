"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function LeadForm() {
  const params = useSearchParams();
  const initialAddress = params.get("address") ?? "";
  const initialType =
    (params.get("type") as "Residential" | "Commercial") ?? "Residential";

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white max-w-[560px] w-full mx-auto rounded-2xl shadow-md p-8 sm:p-10 border border-cream text-center">
        <h2 className="font-serif text-3xl text-navy font-bold">Thank you!</h2>
        <p className="mt-3 text-navy/70">
          We received your request. A Cameron County specialist will reach out
          within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-cream bg-white text-navy placeholder:text-navy/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";
  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  return (
    <div className="bg-white max-w-[560px] w-full mx-auto rounded-2xl shadow-md p-8 sm:p-10 border border-cream">
      <h2 className="font-serif text-3xl text-navy font-bold">
        Get Your Free Savings Estimate
      </h2>
      <p className="mt-2 text-navy/70">
        We&apos;ll review your Cameron County property and tell you exactly how
        much we can save you.
      </p>

      <form onSubmit={onSubmit} className="mt-7 space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="address" className={labelClass}>
            Property Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            defaultValue={initialAddress}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            defaultValue={initialType}
            className={inputClass}
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            Message / Notes (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white py-3.5 rounded-full font-medium hover:bg-navy-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send My Request"}
          {!submitting && <ArrowRight size={18} />}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-navy/60">
        No upfront cost. Only pay if we save you money.
      </p>
    </div>
  );
}
