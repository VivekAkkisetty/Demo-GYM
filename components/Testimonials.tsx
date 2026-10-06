"use client";

import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import { testimonialsData } from "@/data/testimonials";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="testimonials" className="border-b border-white/10 bg-ink py-28 sm:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">Member Stories</span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl">
              Built on
              <br />
              <span className="text-volt">results.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Real members. Unscripted. This is what happens when elite coaching meets real commitment.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-2"
        >
          {testimonialsData.map((t, i) => (
            <motion.blockquote
              key={t.name}
              custom={i}
              variants={cardVariants}
              className="group relative flex flex-col gap-6 border border-white/10 bg-charcoal p-7 transition-all duration-300 hover:border-volt/25 sm:p-8"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-volt/20 transition-colors duration-300 group-hover:text-volt/40"
              />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={12} className="fill-volt text-volt" />
                ))}
              </div>

              {/* Quote text */}
              <p className="flex-1 text-sm leading-7 text-white/65">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-white/15">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-volt/70">
                    {t.goal}
                  </p>
                </div>
                {/* Verified badge */}
                <div className="ml-auto border border-white/10 bg-ink px-2.5 py-1">
                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/30">
                    Verified
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

