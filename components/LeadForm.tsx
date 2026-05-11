"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "address", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm() {
  const params = useSearchParams();
  const initialAddress = params.get("address") ?? "";
  const initialType =
    (params.get("type") as "Residential" | "Commercial") ?? "Residential";

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const errs: FieldErrors = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!data.phone?.trim()) errs.phone = "Please enter your phone number.";
    if (!data.email?.trim()) {
      errs.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(data.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.address?.trim()) errs.address = "Please enter the property address.";

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.success === false) throw new Error("Request failed");
      setSuccess(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please call us at (956) 203-9464"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white max-w-[560px] w-full mx-auto rounded-2xl shadow-md p-8 sm:p-10 border border-cream text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-cream flex items-center justify-center">
          <CheckCircle2 size={32} className="text-gold" />
        </div>
        <h2 className="mt-5 font-serif text-3xl text-navy font-bold">
          We got your request!
        </h2>
        <p className="mt-3 text-navy/70 leading-relaxed">
          We&apos;ll review your Cameron County property and reach out within 1
          business day. Watch your phone and email.
        </p>
      </div>
    );
  }

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-lg border bg-white text-navy placeholder:text-navy/40 outline-none focus:ring-2 transition ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-cream focus:border-gold focus:ring-gold/30"
    }`;
  const labelClass = "block text-sm font-medium text-navy mb-1.5";
  const errorClass = "mt-1.5 text-sm text-red-600";

  return (
    <div className="bg-white max-w-[560px] w-full mx-auto rounded-2xl shadow-md p-8 sm:p-10 border border-cream">
      <h2 className="font-serif text-3xl text-navy font-bold">
        Get Your Free Savings Estimate
      </h2>
      <p className="mt-2 text-navy/70">
        We&apos;ll review your Cameron County property and tell you exactly how
        much we can save you.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-7 space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            aria-invalid={!!fieldErrors.name}
            className={inputClass(!!fieldErrors.name)}
          />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            aria-invalid={!!fieldErrors.phone}
            className={inputClass(!!fieldErrors.phone)}
          />
          {fieldErrors.phone && (
            <p className={errorClass}>{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            aria-invalid={!!fieldErrors.email}
            className={inputClass(!!fieldErrors.email)}
          />
          {fieldErrors.email && (
            <p className={errorClass}>{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className={labelClass}>
            Property Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            defaultValue={initialAddress}
            aria-invalid={!!fieldErrors.address}
            className={inputClass(!!fieldErrors.address)}
          />
          {fieldErrors.address && (
            <p className={errorClass}>{fieldErrors.address}</p>
          )}
        </div>

        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            defaultValue={initialType}
            className={inputClass(false)}
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
            className={inputClass(false)}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white py-3.5 rounded-full font-medium hover:bg-navy-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send My Request"}
          {!submitting && <ArrowRight size={18} />}
        </button>

        {submitError && (
          <p className="text-sm text-red-600 text-center">{submitError}</p>
        )}
      </form>

      <p className="mt-5 text-center text-sm text-navy/60">
        No upfront cost. Only pay if we save you money.
      </p>
    </div>
  );
}
