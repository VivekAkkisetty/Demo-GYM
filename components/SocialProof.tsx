"use client";

import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";

const avatars = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
];

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-charcoal py-16 sm:py-20">
      {/* Volt accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/5 blur-3xl"
      />

      <div ref={ref} className="container-wide">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="eyebrow">Community</span>
            <h2 className="mt-3 max-w-sm font-display text-2xl font-bold uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-3xl">
              Join a community that
              <br />
              <span className="text-volt">pushes you forward.</span>
            </h2>
          </motion.div>

          {/* Center divider on desktop */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden h-20 w-px origin-top bg-white/10 md:block"
          />

          {/* Center — member avatars + count */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Stacked avatars */}
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-charcoal"
                  style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i }}
                >
                  <img src={src} alt="VOLT member" className="h-full w-full object-cover" />
                </div>
              ))}
              <div
                className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-charcoal bg-volt font-display text-[10px] font-bold text-ink"
                style={{ marginLeft: "-10px", zIndex: 0 }}
              >
                +2k
              </div>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              2,500+ Active Members
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hidden h-20 w-px origin-top bg-white/10 md:block"
          />

          {/* Right — rating */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-2 md:items-end"
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-volt text-volt" />
              ))}
            </div>
            <p className="font-display text-4xl font-bold tracking-[-0.06em] text-white">
              4.9<span className="text-2xl text-white/30">/5</span>
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Based on 840+ reviews
            </p>
            {/* Review platforms */}
            <div className="mt-1 flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
                Google
              </span>
              <span className="h-px w-4 bg-white/15" />
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
                Trustpilot
              </span>
              <span className="h-px w-4 bg-white/15" />
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
                Yelp
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

