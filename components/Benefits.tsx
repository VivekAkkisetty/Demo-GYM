"use client";

import { Dumbbell, Users, BarChart3, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    description:
      "Hammer Strength, Eleiko and Life Fitness machines. Every piece of equipment selected to support peak performance and longevity.",
  },
  {
    icon: Users,
    title: "Expert Coaching",
    description:
      "Our certified coaches hold advanced credentials in strength, conditioning and sports science. Every session has a purpose.",
  },
  {
    icon: BarChart3,
    title: "Personalised Training",
    description:
      "No cookie-cutter programmes. We build training plans around your goals, your schedule and your body — and refine them as you progress.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "We track what matters. Regular assessments keep you accountable and ensure you're always moving toward measurable, meaningful results.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="benefits" className="border-b border-white/10 bg-ink py-28 sm:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">Why Volt</span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl">
              Built to make you
              <br />
              <span className="text-volt">better.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Four pillars that separate VOLT from every other gym you&apos;ve tried.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                key={benefit.title}
                variants={cardVariants}
                className="group relative overflow-hidden border border-white/10 bg-charcoal p-8 transition-all duration-300 hover:border-volt/40 hover:bg-charcoal/80"
              >
                {/* Hover glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-volt/0 blur-2xl transition-all duration-500 group-hover:bg-volt/8"
                />

                {/* Icon */}
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-ink text-volt transition-all duration-300 group-hover:border-volt/40 group-hover:bg-volt/10">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-[-0.03em] text-white transition duration-300 group-hover:text-volt">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{benefit.description}</p>

                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
