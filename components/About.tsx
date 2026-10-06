"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  "Intelligent, periodised programming",
  "Certified expert coaches",
  "World-class equipment & recovery",
  "Data-driven progress tracking",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-charcoal py-24 sm:py-32 lg:py-36"
    >
      {/* Decorative accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-volt/5 blur-3xl"
      />

      <div ref={ref} className="container-wide grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ── Left: Image ── */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative order-last lg:order-first"
        >
          {/* Main image */}
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-ink">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85"
              alt="Athlete training at VOLT FITNESS club"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="absolute -bottom-5 -right-3 border border-white/15 bg-ink p-5 shadow-2xl sm:-bottom-6 sm:-right-6 sm:p-6"
          >
            <p className="font-display text-3xl font-bold tracking-[-0.06em] text-volt sm:text-4xl">12+</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Years setting<br />the standard
            </p>
          </motion.div>

          {/* Decorative bar */}
          <div className="absolute -left-2 top-8 h-20 w-[3px] bg-volt sm:-left-3" />
        </motion.div>

        {/* ── Right: Text ── */}
        <div className="flex flex-col">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="eyebrow"
          >
            About Volt
          </motion.span>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-4 font-display text-3xl font-bold uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl"
          >
            More than a gym.
            <br />
            <span className="text-volt">A higher standard.</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
          >
            VOLT FITNESS is built for people who refuse to settle. From intelligent programming to
            expert coaching and world-class equipment, every detail is designed to help you train
            harder, move better and become stronger.
          </motion.p>

          <motion.ul
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-8 space-y-3.5"
          >
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-white/75">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-volt/15 text-volt">
                  <Check size={11} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-10"
          >
            <a
              href="#contact-section"
              className="button-ghost inline-flex"
            >
              Our Story <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
