"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import { siteConfig } from "@/data/siteConfig";

const goals = [
  "Select your goal",
  "Lose weight",
  "Build muscle",
  "Improve fitness",
  "Athletic performance",
  "Nutrition coaching",
  "Personal training",
  "General health",
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
  message?: string;
}

const inputCls =
  "w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white placeholder:text-white/30 focus:border-volt focus:outline-none transition-colors duration-200";

const labelCls = "block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1";

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[+\d\s\-()]{7,15}$/.test(data.phone)) errors.phone = "Enter a valid phone number";
  if (!data.goal || data.goal === goals[0]) errors.goal = "Please select your goal";
  if (!data.message.trim()) errors.message = "Tell us a bit about yourself";
  return errors;
}

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    goal: goals[0],
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setStatus("loading");
    // Simulate async submit — replace with real API call
    setTimeout(() => setStatus("success"), 1400);
  }

  function handleReset() {
    setFormData({ name: "", email: "", phone: "", goal: goals[0], message: "" });
    setErrors({});
    setStatus("idle");
  }

  return (
    <section id="contact-section" className="border-b border-white/10 bg-charcoal py-28 sm:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl">
            Start your
            <br />
            <span className="text-volt">free consultation.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* ── Left: Info + map ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            {/* Contact details */}
            <div className="space-y-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-white">
                {siteConfig.name}
              </h3>

              <div className="space-y-4">
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-volt" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pincode}
                  </span>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone size={16} className="flex-shrink-0 text-volt" />
                  {siteConfig.displayPhone}
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageSquare size={16} className="flex-shrink-0 text-volt" />
                  Chat on WhatsApp ({siteConfig.displayPhone})
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail size={16} className="flex-shrink-0 text-volt" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="border-t border-white/10 pt-8">
              <div className="mb-4 flex items-center gap-2">
                <Clock size={13} className="text-volt" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Opening Hours
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/60">
                  <span>Monday – Saturday</span>
                  <span className="text-white">{siteConfig.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Sunday</span>
                  <span className="text-white">{siteConfig.openingHours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative overflow-hidden border border-white/10">
              {/* Replace the inner content with a real <iframe> Google Maps embed */}
              <div className="flex aspect-[4/3] flex-col items-center justify-center bg-ink/60">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.015)_20px,rgba(255,255,255,0.015)_21px)]" />
                <MapPin size={28} className="relative z-10 text-volt" />
                <p className="relative z-10 mt-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Google Maps embed
                  <br />
                  Replace with your iframe
                </p>
                <a
                  href="https://maps.google.com/?q=123+Fitness+Avenue+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 mt-4 border border-white/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 transition hover:border-volt hover:text-volt"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            {status === "success" ? (
              /* ── Success state ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex h-full min-h-[480px] flex-col items-center justify-center border border-volt/25 bg-ink p-10 text-center"
              >
                {/* Animated check */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-volt">
                  <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-ink"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">
                  We&apos;ve got your request.
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
                  Our team will be in touch within 24 hours to book your free consultation. Check
                  your inbox.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 border border-white/15 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 transition hover:border-volt hover:text-volt"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name + Email */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className={labelCls}>
                      Full Name
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Rohan Mehta"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputCls}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[10px] font-semibold text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-email" className={labelCls}>
                      Email Address
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="rohan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputCls}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[10px] font-semibold text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone + Goal */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-phone" className={labelCls}>
                      Phone Number
                    </label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputCls}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-[10px] font-semibold text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-goal" className={labelCls}>
                      Your Goal
                    </label>
                    <select
                      id="cf-goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className={`${inputCls} cursor-pointer appearance-none`}
                    >
                      {goals.map((g) => (
                        <option
                          key={g}
                          value={g}
                          disabled={g === goals[0]}
                          className="bg-charcoal text-white"
                        >
                          {g}
                        </option>
                      ))}
                    </select>
                    {errors.goal && (
                      <p className="mt-1.5 text-[10px] font-semibold text-red-400">{errors.goal}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="cf-message" className={labelCls}>
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Current fitness level, schedule, anything else you'd like us to know…"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputCls} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[10px] font-semibold text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-3 bg-volt px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition duration-300 hover:bg-white disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Book Free Consultation"
                  )}
                </button>

                <p className="text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  No obligation. Our team responds within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

