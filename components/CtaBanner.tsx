"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=85')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      {/* Volt tint */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_50%,rgba(183,247,49,0.08)_0%,transparent_65%)]" />

      <div ref={ref} className="container-wide py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Take the next step
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]"
          >
            Your goals deserve
            <br />
            <span className="text-volt">a better environment.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
          >
            Stop settling for average. VOLT FITNESS gives you the space, the coaching and the
            community to become your strongest self.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center"
          >
            <a href="#contact-section" className="button-primary px-8 py-4">
              Explore Volt <ArrowUpRight size={15} />
            </a>
            <a href="#about" className="button-ghost px-8 py-4">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
