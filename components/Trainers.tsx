"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import { useRef } from "react";
import { trainersData } from "@/data/trainers";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Trainers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="trainers" className="border-b border-white/10 bg-charcoal py-24 sm:py-32 lg:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">Our Coaches</span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl">
              Trained by
              <br />
              <span className="text-volt">experts.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Every VOLT coach holds advanced certifications and brings deep real-world experience.
          </p>
        </motion.div>

        {/* Trainer grid */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trainersData.map((trainer, i) => (
            <motion.article
              key={trainer.name}
              custom={i}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-ink transition-all duration-300 hover:border-white/20"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* Certs badge */}
                <div className="absolute left-4 top-4 border border-white/15 bg-ink/80 px-2.5 py-1.5 backdrop-blur-sm">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-volt">
                    {trainer.certs}
                  </p>
                </div>

                {/* Social icons — revealed on hover */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label={`${trainer.name} Instagram profile`}
                    className="flex h-8 w-8 items-center justify-center border border-white/20 bg-ink/80 text-white/60 backdrop-blur-sm transition hover:border-volt hover:text-volt"
                  >
                    <Instagram size={13} />
                  </a>
                  <a
                    href="#"
                    aria-label={`${trainer.name} Twitter profile`}
                    className="flex h-8 w-8 items-center justify-center border border-white/20 bg-ink/80 text-white/60 backdrop-blur-sm transition hover:border-volt hover:text-volt"
                  >
                    <Twitter size={13} />
                  </a>
                </div>

                {/* Experience pill at bottom of image */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {trainer.exp} experience
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-volt">
                  {trainer.name}
                </h3>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-volt/90">
                  {trainer.role}
                </p>
                <p className="mt-3 text-xs leading-5 text-white/50">{trainer.bio}</p>

                {/* CTA link */}
                <a
                  href="#contact-section"
                  className="mt-5 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 group-hover:text-volt"
                >
                  Book a session
                  <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
