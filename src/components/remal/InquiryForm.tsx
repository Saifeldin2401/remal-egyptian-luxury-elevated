import { useState } from "react";

export function InquiryForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isDark = tone === "dark";

  const inputBase = `w-full bg-transparent border-b py-4 text-base placeholder:font-light focus:outline-none transition-colors ${
    isDark
      ? "border-ivory/25 text-ivory placeholder:text-ivory/50 focus:border-ivory"
      : "border-charcoal/20 text-charcoal placeholder:text-charcoal/50 focus:border-charcoal"
  }`;

  const errorBase = isDark ? "text-red-300" : "text-red-500";

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name || name.trim().length < 2) newErrors.name = "Please enter your name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email";
    if (!message || message.trim().length < 10) newErrors.message = "Please tell us a bit more about your project";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(e.currentTarget)) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 1200);
  };

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
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <input
            name="name"
            className={inputBase}
            placeholder="Your name"
            required
          />
          {errors.name && <p className={`mt-2 text-xs ${errorBase}`}>{errors.name}</p>}
        </div>
        <div>
          <input
            name="company"
            className={inputBase}
            placeholder="Company / Property"
          />
        </div>
      </div>
      <div>
        <input
          name="email"
          type="email"
          className={inputBase}
          placeholder="Email address"
          required
        />
        {errors.email && <p className={`mt-2 text-xs ${errorBase}`}>{errors.email}</p>}
      </div>
      <div>
        <textarea
          name="message"
          rows={4}
          className={inputBase + " resize-none"}
          placeholder="Tell us about your project"
        />
        {errors.message && <p className={`mt-2 text-xs ${errorBase}`}>{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={`mt-4 inline-flex items-center gap-3 border px-10 py-4 text-[11px] uppercase tracking-[0.3em] transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
          isDark
            ? "border-ivory text-ivory hover:bg-ivory hover:text-charcoal"
            : "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
        }`}
      >
        {submitting ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending...
          </>
        ) : (
          <span>Send Inquiry</span>
        )}
      </button>
    </form>
  );
}
