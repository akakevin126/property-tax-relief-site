"use client";

import { useEffect, useState } from "react";

const DEADLINE = new Date(2026, 4, 15, 23, 59, 59).getTime(); // May 15, 2026

function diff(now: number) {
  const d = DEADLINE - now;
  if (d <= 0) return null;
  const days = Math.floor(d / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((d / (1000 * 60 * 60)) % 24);
  const min = Math.floor((d / (1000 * 60)) % 60);
  const sec = Math.floor((d / 1000) % 60);
  return { days, hrs, min, sec };
}

export default function CountdownBanner() {
  const [time, setTime] = useState<ReturnType<typeof diff>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(diff(Date.now()));
    const t = setInterval(() => setTime(diff(Date.now())), 1000);
    return () => clearInterval(t);
  }, []);

  if (!mounted || !time) return null;

  const Block = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gold text-navy font-serif font-bold text-lg sm:text-xl rounded-md px-2.5 py-1 min-w-[42px] text-center">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[10px] uppercase tracking-wider text-white/70 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
        <p className="text-sm sm:text-base font-medium">
          Texas protest deadline is{" "}
          <span className="text-gold font-semibold">May 15, 2026</span> —
          Don&apos;t miss your window.
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <Block value={time.days} label="Days" />
          <span className="text-gold font-bold pb-4">:</span>
          <Block value={time.hrs} label="Hrs" />
          <span className="text-gold font-bold pb-4">:</span>
          <Block value={time.min} label="Min" />
          <span className="text-gold font-bold pb-4">:</span>
          <Block value={time.sec} label="Sec" />
        </div>
      </div>
    </div>
  );
}
