"use client";

import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[720px] overflow-hidden border-b border-white/10 sm:min-h-[820px] lg:min-h-[880px]">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,9,9,0.96)_0%,rgba(8,9,9,0.78)_45%,rgba(8,9,9,0.35)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,9,9,0.92)_0%,transparent_45%)]" />

      <div className="container-wide flex min-h-[720px] items-end pb-24 pt-36 sm:min-h-[820px] sm:pb-32 lg:min-h-[880px]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6 flex items-center gap-3 sm:mb-7"
          >
            <span className="h-px w-8 bg-volt" />
            <span className="eyebrow">Premium fitness club · Est. 2014</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[clamp(3.2rem,8.5vw,7.8rem)] font-bold uppercase leading-[0.88] tracking-[-0.06em] text-white"
          >
            Forge your
            <br />
            <span className="text-volt">strongest self.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:mt-8 sm:text-base sm:leading-8"
          >
            Elite training. Expert coaching. Chennai&apos;s highest performance standard for those who demand more from every workout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-8 flex flex-col gap-3.5 sm:mt-9 sm:flex-row"
          >
            <a href="#contact-section" className="button-primary">
              Start your journey <ArrowRight size={15} />
            </a>
            <a href="#programs" className="button-ghost">
              <Play size={13} fill="currentColor" /> Explore programs
            </a>
          </motion.div>
        </div>
      </div>

      <div className="container-wide absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
        <span>Scroll to explore</span>
        <a href="#about" aria-label="Scroll down to About section" className="transition hover:text-volt">
          <ArrowDown size={15} className="animate-bounce text-volt" />
        </a>
      </div>
    </section>
  );
}
