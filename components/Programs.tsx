"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { programsData, Program } from "@/data/programs";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function ProgramCard({
  program,
}: {
  program: Program;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden border border-white/10 bg-charcoal transition-all duration-300 hover:border-white/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />

        {/* Category pill */}
        <span className="absolute left-4 top-4 border border-white/20 bg-ink/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-[-0.03em] text-white transition duration-300 group-hover:text-volt">
          {program.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-white/55">{program.description}</p>

        <motion.a
          href="#contact-section"
          animate={hovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-volt hover:text-white transition-colors"
        >
          Explore Program <ArrowUpRight size={13} />
        </motion.a>
      </div>

      {/* Bottom accent */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="programs" className="border-b border-white/10 bg-ink py-24 sm:py-32 lg:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">Our Programs</span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl">
              Train with
              <br />
              <span className="text-volt">purpose.</span>
            </h2>
          </div>
          <a
            href="#contact-section"
            className="button-ghost inline-flex self-start sm:self-auto"
          >
            View All Programs <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* Program cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {programsData.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
