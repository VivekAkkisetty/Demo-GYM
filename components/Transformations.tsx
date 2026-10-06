"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const transformations = [
  {
    name: "Arjun M.",
    goal: "Strength & Muscle",
    duration: "6 months",
    result: "Built consistency. Added strength. Changed everything.",
    stat: "+18 kg muscle",
    beforeImg:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    label: "before",
  },
  {
    name: "Priya S.",
    goal: "Fat Loss & Fitness",
    duration: "5 months",
    result: "Dropped 14 kg. Gained confidence. Never looked back.",
    stat: "−14 kg lost",
    beforeImg:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600&q=80",
    label: "before",
  },
  {
    name: "Marcus T.",
    goal: "Performance & Conditioning",
    duration: "8 months",
    result: "Faster. Stronger. More athletic than ever in his 30s.",
    stat: "PR every month",
    beforeImg:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    label: "before",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function TransformCard({ t, index }: { t: (typeof transformations)[number]; index: number }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden border border-white/10 bg-charcoal"
    >
      {/* ── Image toggle area ── */}
      <div
        className="relative aspect-[3/4] cursor-pointer overflow-hidden"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
        onTouchStart={() => setShowAfter((v) => !v)}
        aria-label={`Toggle before/after for ${t.name}`}
      >
        {/* Before image */}
        <img
          src={t.beforeImg}
          alt={`${t.name} before`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            showAfter ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          loading="lazy"
        />
        {/* After image */}
        <img
          src={t.afterImg}
          alt={`${t.name} after`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            showAfter ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          loading="lazy"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />

        {/* Before / After pill */}
        <div className="absolute left-4 top-4 flex gap-2">
          <button
            className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
              !showAfter
                ? "bg-white text-ink"
                : "border border-white/25 bg-transparent text-white/60"
            }`}
            onClick={() => setShowAfter(false)}
          >
            Before
          </button>
          <button
            className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
              showAfter
                ? "bg-volt text-ink"
                : "border border-white/25 bg-transparent text-white/60"
            }`}
            onClick={() => setShowAfter(true)}
          >
            After
          </button>
        </div>

        {/* Stat badge */}
        <div className="absolute bottom-4 right-4 border border-volt/30 bg-ink/80 px-3 py-2 backdrop-blur-sm">
          <p className="font-display text-lg font-bold leading-none text-volt">{t.stat}</p>
        </div>

        {/* Hover hint */}
        <div className="absolute inset-x-0 bottom-14 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="border border-white/20 bg-ink/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm">
            Hover to reveal after
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-white">
              {t.name}
            </h3>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-volt">
              {t.goal}
            </p>
          </div>
          <span className="border border-white/10 bg-ink px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
            {t.duration}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-white/55">&ldquo;{t.result}&rdquo;</p>
      </div>

      {/* Bottom accent */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export function Transformations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="transformations" className="border-b border-white/10 bg-ink py-28 sm:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">Member Results</span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl">
              Real people.
              <br />
              <span className="text-volt">Real progress.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Hover each card to see the transformation. Results achieved with VOLT programming and
            coaching.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {transformations.map((t, i) => (
            <TransformCard key={t.name} t={t} index={i} />
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25"
        >
          Individual results vary. Achieved through consistent training and coaching.
        </motion.p>
      </div>
    </section>
  );
}

