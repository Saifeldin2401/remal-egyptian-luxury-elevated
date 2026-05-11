import { useState } from "react";

export function InquiryForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const isDark = tone === "dark";

  const inputBase = `w-full bg-transparent border-b py-4 text-base placeholder:font-light focus:outline-none transition-colors ${
    isDark
      ? "border-ivory/25 text-ivory placeholder:text-ivory/50 focus:border-ivory"
      : "border-charcoal/20 text-charcoal placeholder:text-charcoal/50 focus:border-charcoal"
  }`;

  if (sent) {
    return (
      <div className={`py-16 text-center ${isDark ? "text-ivory" : "text-charcoal"}`}>
        <p className="font-serif text-3xl">Thank you.</p>
        <p className="mt-4 text-sm opacity-70">
          Our team will be in touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-8"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <input className={inputBase} placeholder="Your name" required />
        <input className={inputBase} placeholder="Company / Property" />
      </div>
      <input type="email" className={inputBase} placeholder="Email address" required />
      <textarea
        rows={4}
        className={inputBase + " resize-none"}
        placeholder="Tell us about your project"
      />
      <button
        type="submit"
        className={`mt-4 inline-block border px-10 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors ${
          isDark
            ? "border-ivory text-ivory hover:bg-ivory hover:text-charcoal"
            : "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
        }`}
      >
        Send Inquiry
      </button>
    </form>
  );
}