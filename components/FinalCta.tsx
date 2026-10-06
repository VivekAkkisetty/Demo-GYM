"use client";

import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Full-bleed background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=2200&q=85')",
        }}
      />
      {/* Layered dark overlays */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/88" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(183,247,49,0.10)_0%,transparent_60%)]"
      />

      {/* Decorative vertical line */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-volt/40"
      />

      <div ref={ref} className="container-wide py-36 sm:py-44">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            The time is now
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.065em] text-white"
          >
            Your strongest chapter
            <br />
            <span className="text-volt">starts today.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mx-auto mt-7 max-w-lg text-base leading-7 text-white/55"
          >
            Stop waiting for the perfect time. Start building the strongest version of yourself —
            with the right environment, the right coaching, and the right community.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact-section"
              className="inline-flex items-center gap-3 bg-volt px-10 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition duration-300 hover:bg-white"
            >
              Start Your Journey <ArrowRight size={15} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 border border-white/25 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-volt hover:text-volt"
            >
              View Pricing
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {["No joining fee", "Cancel anytime", "Free first consultation"].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35"
              >
                <span className="h-px w-4 bg-volt/50" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

