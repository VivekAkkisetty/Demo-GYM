"use client";

import { Check, ArrowUpRight, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { pricingPlans } from "@/data/pricing";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="pricing" className="border-b border-white/10 bg-charcoal py-28 sm:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="eyebrow">Membership Plans</span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Choose your
            <br />
            <span className="text-volt">commitment.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/50">
            Every plan includes access to world-class facilities. Upgrade anytime as your goals
            evolve.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 lg:grid-cols-3 lg:items-start"
        >
          {pricingPlans.map((plan, i) => (
            <motion.article
              key={plan.id}
              custom={i}
              variants={cardVariants}
              className={`group relative flex flex-col overflow-hidden border transition-all duration-300 ${
                plan.featured
                  ? "border-volt bg-volt text-ink shadow-[0_0_60px_rgba(183,247,49,0.22)] lg:-mt-4 lg:pb-4 lg:pt-8"
                  : "border-white/10 bg-ink hover:border-white/25"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="flex items-center gap-1.5 bg-ink px-6 py-2.5">
                  <Zap size={11} className="fill-volt text-volt" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-volt">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                {/* Plan name */}
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.24em] ${
                    plan.featured ? "text-ink/55" : "text-volt"
                  }`}
                >
                  {plan.name}
                </span>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <span
                    className={`font-display text-5xl font-bold tracking-[-0.06em] ${
                      plan.featured ? "text-ink" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`mb-1.5 text-xs ${
                      plan.featured ? "text-ink/55" : "text-white/35"
                    }`}
                  >
                    / month
                  </span>
                </div>

                {/* Tagline */}
                <p
                  className={`mt-3 text-sm leading-6 ${
                    plan.featured ? "text-ink/65" : "text-white/50"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Divider */}
                <div
                  className={`my-6 h-px ${plan.featured ? "bg-ink/15" : "bg-white/10"}`}
                />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center ${
                          plan.featured ? "bg-ink/15 text-ink" : "bg-volt/15 text-volt"
                        }`}
                      >
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-ink/75" : "text-white/60"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact-section"
                  className={`mt-8 inline-flex items-center justify-between border px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] transition duration-300 ${
                    plan.featured
                      ? "border-ink/25 bg-ink text-white hover:bg-ink/80"
                      : "border-white/20 text-white hover:border-volt hover:text-volt"
                  }`}
                >
                  {plan.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25"
        >
          No joining fee · Cancel anytime · GST included
        </motion.p>
      </div>
    </section>
  );
}

